import { useState, useEffect } from 'react';
import { toggleTheme, type Theme } from '../utils/theme';

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    setThemeState(
      (document.documentElement.getAttribute('data-theme') as Theme) || 'dark',
    );
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
