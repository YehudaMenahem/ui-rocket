import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { CommandPalette } from './components/CommandPalette';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Entrance } from './routes/Entrance';
import { NotFound } from './routes/NotFound';
import { ButtonPage } from './routes/ButtonPage';
import { IconPage } from './routes/IconPage';
import { RadioPage } from './routes/RadioPage';
import { CheckboxPage } from './routes/CheckboxPage';
import { InputFieldPage } from './routes/InputFieldPage';
import { SelectFieldPage } from './routes/SelectFieldPage';
import { ImgPage } from './routes/ImgPage';
import { TextboxPage } from './routes/TextboxPage';
import { ModalPage } from './routes/ModalPage';
import { TabsPage } from './routes/TabsPage';
import { ToggleButtonPage } from './routes/ToggleButtonPage';
import { ToasterPage } from './routes/ToasterPage';
import { FormPage } from './routes/FormPage';
import { setTheme, getInitialTheme } from './utils/theme';

function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme() === 'dark');
  const isHome = location.pathname === '/';

  const toggleTheme = () => {
    const next = darkMode ? 'light' : 'dark';
    setTheme(next);
    setDarkMode(next === 'dark');
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const pageProps = {
    sidebarOpen,
    onCloseSidebar: () => setSidebarOpen(false),
  };

  return (
    <div className="site-root">
      <TopBar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenNav={isHome ? undefined : () => setSidebarOpen(true)}
        activeNav={isHome ? 'Docs' : 'Components'}
      />

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Routes>
        <Route path="/" element={<Entrance darkMode={darkMode} />} />
        <Route path="/ButtonPage" element={<ButtonPage {...pageProps} />} />
        <Route path="/IconPage" element={<IconPage {...pageProps} />} />
        <Route path="/RadioPage" element={<RadioPage {...pageProps} />} />
        <Route path="/CheckboxPage" element={<CheckboxPage {...pageProps} />} />
        <Route path="/ToggleButtonPage" element={<ToggleButtonPage {...pageProps} />} />
        <Route path="/InputFieldPage" element={<InputFieldPage {...pageProps} />} />
        <Route path="/SelectFieldPage" element={<SelectFieldPage {...pageProps} />} />
        <Route path="/ImgPage" element={<ImgPage {...pageProps} />} />
        <Route
          path="/FormPage"
          element={
            <ErrorBoundary>
              <FormPage {...pageProps} />
            </ErrorBoundary>
          }
        />
        <Route path="/TextboxPage" element={<TextboxPage {...pageProps} />} />
        <Route path="/TabsPage" element={<TabsPage {...pageProps} />} />
        <Route path="/ModalPage" element={<ModalPage {...pageProps} />} />
        <Route path="/ToasterPage" element={<ToasterPage {...pageProps} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
