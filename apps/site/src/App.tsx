import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { CommandPalette } from './components/CommandPalette';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Entrance } from './routes/Entrance';
import { NotFound } from './routes/NotFound';
import { setTheme, getInitialTheme } from './utils/theme';

const DocsPage = lazy(() =>
  import('./routes/DocsPage').then((m) => ({ default: m.DocsPage }))
);
const ThemingPage = lazy(() =>
  import('./routes/ThemingPage').then((m) => ({ default: m.ThemingPage }))
);
const PlaygroundPage = lazy(() =>
  import('./routes/PlaygroundPage').then((m) => ({ default: m.PlaygroundPage }))
);
const BlogPage = lazy(() =>
  import('./routes/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const ButtonPage = lazy(() =>
  import('./routes/ButtonPage').then((m) => ({ default: m.ButtonPage }))
);
const IconPage = lazy(() =>
  import('./routes/IconPage').then((m) => ({ default: m.IconPage }))
);
const RadioPage = lazy(() =>
  import('./routes/RadioPage').then((m) => ({ default: m.RadioPage }))
);
const CheckboxPage = lazy(() =>
  import('./routes/CheckboxPage').then((m) => ({ default: m.CheckboxPage }))
);
const InputFieldPage = lazy(() =>
  import('./routes/InputFieldPage').then((m) => ({ default: m.InputFieldPage }))
);
const SelectFieldPage = lazy(() =>
  import('./routes/SelectFieldPage').then((m) => ({
    default: m.SelectFieldPage,
  }))
);
const ImgPage = lazy(() =>
  import('./routes/ImgPage').then((m) => ({ default: m.ImgPage }))
);
const TextboxPage = lazy(() =>
  import('./routes/TextboxPage').then((m) => ({ default: m.TextboxPage }))
);
const ModalPage = lazy(() =>
  import('./routes/ModalPage').then((m) => ({ default: m.ModalPage }))
);
const TabsPage = lazy(() =>
  import('./routes/TabsPage').then((m) => ({ default: m.TabsPage }))
);
const ToggleButtonPage = lazy(() =>
  import('./routes/ToggleButtonPage').then((m) => ({
    default: m.ToggleButtonPage,
  }))
);
const ToasterPage = lazy(() =>
  import('./routes/ToasterPage').then((m) => ({ default: m.ToasterPage }))
);
const FormPage = lazy(() =>
  import('./routes/FormPage').then((m) => ({ default: m.FormPage }))
);
const InstallationPage = lazy(() =>
  import('./routes/InstallationPage').then((m) => ({
    default: m.InstallationPage,
  }))
);
const DarkModePage = lazy(() =>
  import('./routes/DarkModePage').then((m) => ({ default: m.DarkModePage }))
);
const ComponentsIndexPage = lazy(() =>
  import('./routes/ComponentsIndexPage').then((m) => ({
    default: m.ComponentsIndexPage,
  }))
);

function RouteFallback() {
  return (
    <div className="simple-page" role="status" aria-live="polite">
      <p className="lede">Loading…</p>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme() === 'dark');
  const isHome = location.pathname === '/';
  const needsSidebar =
    !isHome &&
    (location.pathname.endsWith('Page') ||
      location.pathname.startsWith('/docs/') ||
      location.pathname === '/components');

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
        onOpenNav={needsSidebar ? () => setSidebarOpen(true) : undefined}
      />

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Entrance darkMode={darkMode} />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route
            path="/docs/installation"
            element={<InstallationPage {...pageProps} />}
          />
          <Route
            path="/docs/dark-mode"
            element={<DarkModePage {...pageProps} />}
          />
          <Route
            path="/components"
            element={<ComponentsIndexPage {...pageProps} />}
          />
          <Route path="/theming" element={<ThemingPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ButtonPage" element={<ButtonPage {...pageProps} />} />
          <Route path="/IconPage" element={<IconPage {...pageProps} />} />
          <Route path="/RadioPage" element={<RadioPage {...pageProps} />} />
          <Route
            path="/CheckboxPage"
            element={<CheckboxPage {...pageProps} />}
          />
          <Route
            path="/ToggleButtonPage"
            element={<ToggleButtonPage {...pageProps} />}
          />
          <Route
            path="/InputFieldPage"
            element={<InputFieldPage {...pageProps} />}
          />
          <Route
            path="/SelectFieldPage"
            element={<SelectFieldPage {...pageProps} />}
          />
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
      </Suspense>
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
