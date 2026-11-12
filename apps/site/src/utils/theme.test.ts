import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getInitialTheme, setTheme, toggleTheme } from './theme';

describe('Theme utilities', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    vi.clearAllMocks();
  });

  describe('getInitialTheme', () => {
    it('should return stored theme from localStorage', () => {
      window.localStorage.setItem('rocket-theme', 'dark');
      expect(getInitialTheme()).toBe('dark');
    });

    it('should migrate legacy segfault-theme key once', () => {
      window.localStorage.setItem('segfault-theme', 'dark');
      expect(getInitialTheme()).toBe('dark');
      expect(window.localStorage.getItem('rocket-theme')).toBe('dark');
      expect(window.localStorage.getItem('segfault-theme')).toBeNull();
    });

    it('should return dark theme if prefers-color-scheme is dark', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      expect(getInitialTheme()).toBe('dark');
    });

    it('should default to light theme', () => {
      window.matchMedia = vi.fn().mockImplementation(() => ({
        matches: false,
        media: '',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      expect(getInitialTheme()).toBe('light');
    });
  });

  describe('setTheme', () => {
    it('should set data-theme attribute on document root', () => {
      setTheme('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should store theme in localStorage', () => {
      setTheme('dark');
      expect(window.localStorage.getItem('rocket-theme')).toBe('dark');
    });
  });

  describe('toggleTheme', () => {
    it('should toggle from dark to light', () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      const result = toggleTheme();
      expect(result).toBe('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should toggle from light to dark', () => {
      document.documentElement.setAttribute('data-theme', 'light');
      const result = toggleTheme();
      expect(result).toBe('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should persist toggle to localStorage', () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleTheme();
      expect(window.localStorage.getItem('rocket-theme')).toBe('light');
    });
  });
});
