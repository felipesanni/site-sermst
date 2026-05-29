'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewport?: boolean;
};

const directionMap: Record<string, string> = {
  up:    'translateY(32px)',
  down:  'translateY(-32px)',
  left:  'translateX(32px)',
  right: 'translateX(-32px)',
  none:  'none',
};

/**
 * FadeIn — animação de entrada leve sem Framer Motion.
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
  duration = 0.5,
  className = '',
  viewport = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHydrated(true);

    // viewport=false → anima imediatamente (ex: hero sem scroll-trigger)
    if (!viewport) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Já está acima do fold → mostra sem animação (preserva LCP)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      return;
    }

    // Abaixo do fold → observa entrada na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-80px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [viewport]);

  // Antes da hidratação → sem estilo inline → HTML visível para crawlers e LCP
  const style: React.CSSProperties = hydrated
    ? {
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : directionMap[direction],
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
