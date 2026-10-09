'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type FadeInDirection = 'up' | 'down' | 'left' | 'right' | 'none';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: FadeInDirection;
  tabletDirection?: FadeInDirection;
  duration?: number;
  className?: string;
  viewport?: boolean;
};

const directionMap: Record<FadeInDirection, string> = {
  up:    'translateY(32px)',
  down:  'translateY(-32px)',
  left:  'translateX(32px)',
  right: 'translateX(-32px)',
  none:  'none',
};

/**
 * FadeIn: animação de entrada leve sem Framer Motion.
 *
 * Estratégia de LCP:
 * - SSR / antes da hidratação → sem inline styles → elemento visível no HTML
 * - Após hidratação, se já estiver acima do fold → exibe imediatamente (sem delay)
 * - Abaixo do fold → anima quando entrar na viewport (IntersectionObserver)
 *
 * Isso elimina o problema de opacity:0 no LCP element que Framer Motion causava.
 */
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  tabletDirection,
  duration = 0.5,
  className = '',
  viewport = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<FadeInDirection>(direction);

  useEffect(() => {
    // Em telas pequenas, a página precisa priorizar resposta ao toque e rolagem.
    // As animações de entrada não agregam informação suficiente para justificar
    // uma medição de layout e um IntersectionObserver por bloco.
    const canMatchMedia = typeof window.matchMedia === 'function';
    const updateDirection = () => {
      const isIntermediateViewport =
        canMatchMedia &&
        window.matchMedia('(min-width: 768px) and (max-width: 1359px)').matches;
      const fallbackIntermediateDirection =
        direction === 'left' || direction === 'right' ? 'up' : direction;
      const nextDirection = isIntermediateViewport
        ? tabletDirection ?? fallbackIntermediateDirection
        : direction;
      setAnimationDirection((current) => (current === nextDirection ? current : nextDirection));
    };
    updateDirection();
    if (tabletDirection) {
      window.addEventListener('resize', updateDirection, { passive: true });
    }
    const isSmallViewport = canMatchMedia && window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = canMatchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Em telas pequenas ou com movimento reduzido, o HTML SSR jÃ¡ estÃ¡ visÃ­vel.
    // NÃ£o agendamos rAF nem forÃ§amos uma segunda renderizaÃ§Ã£o por bloco: isso
    // reduz o trabalho de hidrataÃ§Ã£o nas pÃ¡ginas longas, sem remover conteÃºdo.
    if (!viewport || isSmallViewport || prefersReducedMotion) {
      return () => {
        if (tabletDirection) window.removeEventListener('resize', updateDirection);
      };
    }

    let observer: IntersectionObserver | undefined;
    const animationFrame = window.requestAnimationFrame(() => {
      setHydrated(true);

      const el = ref.current;
      if (!el) return;

      // Já está acima do fold → mostra sem animação (preserva LCP)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setVisible(true);
        return;
      }

      // Abaixo do fold → observa entrada na viewport
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          setVisible(true);
          observer?.disconnect();
        },
        { rootMargin: '-80px' },
      );
      observer.observe(el);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      if (tabletDirection) window.removeEventListener('resize', updateDirection);
    };
  }, [viewport, direction, tabletDirection]);

  // Antes da hidratação → sem estilo inline → HTML visível para crawlers e LCP
  const style: React.CSSProperties = hydrated
    ? {
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : directionMap[animationDirection],
        transition: `opacity ${duration}s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s, transform ${duration}s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }
    : {};

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
