import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, vi } from 'vitest';

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

window.requestAnimationFrame = (callback: FrameRequestCallback) => {
  callback(0);
  return 0;
};

window.cancelAnimationFrame = () => {};

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

vi.mock('next/image', () => ({
  default: ({
    fill: unusedFill,
    priority: unusedPriority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
  }) => {
    void unusedFill;
    void unusedPriority;
    return React.createElement('img', props);
  },
}));

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) =>
    React.createElement('a', { href, ...props }, children),
}));

vi.mock('next/script', () => ({
  default: ({
    children,
    ...props
  }: React.ScriptHTMLAttributes<HTMLScriptElement>) => React.createElement('script', props, children),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/contato',
}));
