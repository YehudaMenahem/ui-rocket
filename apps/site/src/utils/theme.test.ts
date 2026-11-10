import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getInitialTheme, setTheme, toggleTheme } from './theme';

describe('Theme utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
    // Reset document theme attribute
    document.documentElement.removeAttribute('data-theme');
    // Clear matchMedia mock
    vi.clearAllMocks();
  });

  describe('getInitialTheme', () => {
    it('should return stored theme from localStorage', () => {
      window.localStorage.setItem('segfault-theme', 'light');
      expect(getInitialTheme()).toBe('light');
    });

    it('should return light theme if prefers-color-scheme is light', () => {
      // Mock matchMedia to return light preference
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: light)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      expect(getInitialTheme()).toBe('light');
    });

    it('should default to dark theme', () => {
      // Mock matchMedia to return no preference
      window.matchMedia = vi.fn().mockImplementation(() => ({
        matches: false,
        media: '',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      expect(getInitialTheme()).toBe('dark');
    });
  });

  describe('setTheme', () => {
    it('should set data-theme attribute on document root', () => {
      setTheme('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should store theme in localStorage', () => {
      setTheme('dark');
      expect(window.localStorage.getItem('segfault-theme')).toBe('dark');
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
      expect(window.localStorage.getItem('segfault-theme')).toBe('light');
    });
  });
});
