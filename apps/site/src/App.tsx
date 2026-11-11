import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Modal, Toaster } from '@ui-rocket/rocket';
import { SideBar } from './components/SideBar';
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

interface ModalSettings {
  showModal: boolean;
  headerTitle?: string;
  heroImage?: boolean;
  contentTitle?: string;
  contentRunningText?: string;
}

interface ToasterSettings {
  showToaster: boolean;
  type?: 'info' | 'success' | 'error' | 'warning';
  title?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  runningText?: string;
}

function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme() === 'dark');
  const [modalSettings, setModalSettings] = useState<ModalSettings>({
    showModal: false,
  });
  const [toasterSettings, setToasterSettings] = useState<ToasterSettings>({
    showToaster: false,
  });

  const isFullScreenPage = location.pathname === '/';

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const closeSidebar = () => setSidebarOpen(false);

  const toggleTheme = () => {
    const next = darkMode ? 'light' : 'dark';
    setTheme(next);
    setDarkMode(next === 'dark');
  };

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  if (isFullScreenPage) {
    return (
      <div className="full-screen-page">
        <Routes>
          <Route path="/" element={<Entrance onToggleTheme={toggleTheme} darkMode={darkMode} />} />
        </Routes>
      </div>
    );
  }

  return (
    <>
      <Modal
        show={modalSettings.showModal}
        closeModal={() => setModalSettings({ showModal: false })}
        modalTitle={modalSettings.headerTitle}
        heroImage={modalSettings.heroImage}
      >
        <div>
          <h2>{modalSettings.contentTitle}</h2>
          <p>{modalSettings.contentRunningText}</p>
        </div>
      </Modal>

      <Toaster
        show={toasterSettings.showToaster}
        closeToaster={() => setToasterSettings({ showToaster: false })}
        type={toasterSettings.type}
        title={toasterSettings.title}
        position={toasterSettings.position}
        runningText={toasterSettings.runningText}
      />

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
        aria-expanded={sidebarOpen}
      >
        <span aria-hidden="true">☰</span>
      </button>

      {sidebarOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close navigation menu"
          onClick={closeSidebar}
        />
      ) : null}

      <div className="app-container">
        <SideBar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />

        <main className="main-content">
          <div className="components-info">
            <Routes>
              <Route path="/ButtonPage" element={<ButtonPage />} />
              <Route path="/IconPage" element={<IconPage />} />
              <Route path="/RadioPage" element={<RadioPage />} />
              <Route path="/CheckboxPage" element={<CheckboxPage />} />
              <Route path="/ToggleButtonPage" element={<ToggleButtonPage />} />
              <Route path="/InputFieldPage" element={<InputFieldPage />} />
              <Route path="/SelectFieldPage" element={<SelectFieldPage />} />
              <Route path="/ImgPage" element={<ImgPage />} />
              <Route
                path="/FormPage"
                element={
                  <ErrorBoundary>
                    <FormPage />
                  </ErrorBoundary>
                }
              />
              <Route path="/TextboxPage" element={<TextboxPage />} />
              <Route path="/TabsPage" element={<TabsPage />} />
              <Route path="/ModalPage" element={<ModalPage />} />
              <Route path="/ToasterPage" element={<ToasterPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
