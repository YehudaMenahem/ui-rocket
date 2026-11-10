// Segfault Theme Switcher
// Handles dark/light theme with localStorage persistence and no flash on load

export type Theme = 'dark' | 'light';

const THEME_KEY = 'segfault-theme';

export function getInitialTheme(): Theme {
  // 1. Check localStorage
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  // 2. Check prefers-color-scheme
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  // 3. Default to dark
  return 'dark';
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') as Theme;
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

// Initialize theme immediately to prevent flash
// This should be called as early as possible, ideally inline in HTML
export function initTheme(): Theme {
  const theme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

// Listen for system preference changes
export function watchSystemTheme(callback?: (theme: Theme) => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem(THEME_KEY)) {
      const theme: Theme = e.matches ? 'light' : 'dark';
      setTheme(theme);
      callback?.(theme);
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}
