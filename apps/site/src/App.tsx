import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToggleButton, Modal, Toaster } from '@ui-rocket/rocket';
import { SideBar } from './components/SideBar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Entrance } from './routes/Entrance';
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

export function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [modalSettings, setModalSettings] = useState<ModalSettings>({
    showModal: false,
  });
  const [toasterSettings, setToasterSettings] = useState<ToasterSettings>({
    showToaster: false,
  });

  useEffect(() => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const html = document.querySelector('html');

    if (mobile && html) {
      html.classList.add('no-scroll');
    }

    const day = new Date();
    const hourInDay = day.getHours();
    const theme = hourInDay >= 17 || hourInDay <= 4 ? 'dark' : 'light';
    const isDark = theme === 'dark';
    setDarkTheme(isDark);

    if (html) {
      html.classList.add(theme);
    }
  }, []);

  const closeSideBar = () => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const html = document.querySelector('html');

    if (mobile && html) {
      if (toggleSideBar) {
        html.classList.add('no-scroll');
      } else {
        html.classList.remove('no-scroll');
      }
    }

    setToggleSideBar(!toggleSideBar);
  };

  const closeModal = () => {
    setModalSettings({ showModal: false });
  };

  const closeToaster = () => {
    setToasterSettings({ showToaster: false });
  };

  const changeTheme = (state: boolean) => {
    const html = document.querySelector('html');
    if (html) {
      if (state) {
        html.classList.add('dark');
        html.classList.remove('light');
      } else {
        html.classList.add('light');
        html.classList.remove('dark');
      }
    }
    setDarkTheme(state);
  };

  return (
    <BrowserRouter>
      <Modal
        show={modalSettings.showModal}
        closeModal={closeModal}
        modalTitle={modalSettings.headerTitle}
        heroImage={modalSettings.heroImage}
      >
        <div className="row">
          <div className="col-1">
            <h2>{modalSettings.contentTitle}</h2>
            <p className="line-break">{modalSettings.contentRunningText}</p>
          </div>
        </div>
      </Modal>

      <Toaster
        show={toasterSettings.showToaster}
        closeToaster={closeToaster}
        type={toasterSettings.type}
        title={toasterSettings.title}
        position={toasterSettings.position}
        runningText={toasterSettings.runningText}
      />

      <div className="home-page">
        <ToggleButton
          classes="toggle-theme"
          label="Mode: Light/Dark"
          name="theme"
          id="theme"
          isChecked={darkTheme}
          change={changeTheme}
        />

        <div
          className={`mobile-header ${toggleSideBar ? 'close' : 'open'}`}
        >
          <h3>
            <span className="icon-wrapper mr-r-md">
              <i className="icon rocket"></i>
            </span>
            Rocket UI
          </h3>
          <i className="close-icon mr-l-auto" onClick={closeSideBar}>
            <span className="strip"></span>
            <span className="strip"></span>
            <span className="strip"></span>
          </i>
        </div>

        <SideBar closeBar={toggleSideBar} closeSideBar={closeSideBar} />

        <div className="components-info">
          <Routes>
            <Route path="/" element={<Entrance theme={darkTheme} />} />
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
