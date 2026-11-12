// Rocket UI theme switcher
// localStorage persistence + no flash on load

export type Theme = 'dark' | 'light';

const THEME_KEY = 'rocket-theme';
const LEGACY_THEME_KEY = 'segfault-theme';

function readStoredTheme(): Theme | null {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  // One-time migration from the old Segfault key
  const legacy = window.localStorage.getItem(LEGACY_THEME_KEY);
  if (legacy === 'dark' || legacy === 'light') {
    window.localStorage.setItem(THEME_KEY, legacy);
    window.localStorage.removeItem(LEGACY_THEME_KEY);
    return legacy;
  }

  return null;
}

export function getInitialTheme(): Theme {
  const stored = readStoredTheme();
  if (stored) {
    return stored;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // Retro Launch defaults to light (cream) when no preference is stored
  return 'light';
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem(THEME_KEY, theme);
  window.localStorage.removeItem(LEGACY_THEME_KEY);
}

export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') as Theme;
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme(): Theme {
  const theme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

export function watchSystemTheme(callback?: (theme: Theme) => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  const handleChange = (e: { matches: boolean }) => {
    if (!window.localStorage.getItem(THEME_KEY)) {
      const theme: Theme = e.matches ? 'light' : 'dark';
      setTheme(theme);
      callback?.(theme);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mediaQuery.addEventListener('change', handleChange as any);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return () => mediaQuery.removeEventListener('change', handleChange as any);
}
