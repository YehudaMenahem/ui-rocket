import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@ui-rocket/rocket';

interface SideBarProps {
  closeBar: boolean;
  closeSideBar: () => void;
  setModalSettings?: (settings: unknown) => void;
  setToasterSettings?: (settings: unknown) => void;
}

export function SideBar({ closeBar, closeSideBar }: SideBarProps) {
  const tabsListRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  useEffect(() => {
    const tabsList = tabsListRef.current;
    if (!tabsList) return;

    const tabs = Array.from(tabsList.children);
    tabs.forEach((tab) => {
      if (tab.tagName === 'LI') {
        const link = tab.firstElementChild as HTMLAnchorElement;
        if (link && link.pathname === location.pathname) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      }
    });
  }, [location]);

  const changeRoute = (e: React.MouseEvent) => {
    const allTabs = document.querySelectorAll('.components-list .item');
    allTabs.forEach((elem) => {
      elem.classList.remove('active');
    });

    const currentTab = (e.target as HTMLElement).parentElement;
    if (currentTab) {
      currentTab.classList.add('active');
    }
    closeSideBar();
  };

  return (
    <div className={`side-bar ${closeBar ? 'close' : 'open'}`}>
      <Link to="/" onClick={changeRoute}>
        <div className="side-bar-header">
          <h3 className="title">
            <Icon classes="mr-r-md" iconClass="rocket" />
            Rocket UI
          </h3>
        </div>
      </Link>
      <ul className="components-list" ref={tabsListRef}>
        <li className="item active">
          <Link to="/" onClick={changeRoute}>
            Entrance
          </Link>
        </li>
        <hr className="separator-vertical" />
        <li className="item">
          <Link to="/ButtonPage" onClick={changeRoute}>
            Button
          </Link>
        </li>
        <li className="item">
          <Link to="/IconPage" onClick={changeRoute}>
            Icon
          </Link>
        </li>
        <li className="item">
          <Link to="/RadioPage" onClick={changeRoute}>
            Radio Button
          </Link>
        </li>
        <li className="item">
          <Link to="/CheckboxPage" onClick={changeRoute}>
            Checkbox
          </Link>
        </li>
        <li className="item">
          <Link to="/ToggleButtonPage" onClick={changeRoute}>
            Toggle Button
          </Link>
        </li>
        <li className="item">
          <Link to="/InputFieldPage" onClick={changeRoute}>
            Input
          </Link>
        </li>
        <li className="item">
          <Link to="/SelectFieldPage" onClick={changeRoute}>
            Select
          </Link>
        </li>
        <li className="item">
          <Link to="/ImgPage" onClick={changeRoute}>
            Img
          </Link>
        </li>
        <li className="item">
          <Link to="/FormPage" onClick={changeRoute}>
            Form
          </Link>
        </li>
        <li className="item">
          <Link to="/TextboxPage" onClick={changeRoute}>
            Textbox
          </Link>
        </li>
        <li className="item">
          <Link to="/TabsPage" onClick={changeRoute}>
            Tabs
          </Link>
        </li>
        <li className="item">
          <Link to="/ModalPage" onClick={changeRoute}>
            Modal
          </Link>
        </li>
        <li className="item">
          <Link to="/ToasterPage" onClick={changeRoute}>
            Toaster
          </Link>
        </li>
      </ul>
    </div>
  );
}
