import { Button } from './Button';
import { TabsProps } from './types';

export function Tabs({
  tabs,
  activeTab = 0,
  setActiveTab,
}: TabsProps) {
  const handleClickTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <ul className="tabs" data-active-tab={activeTab}>
      {tabs.map((name, index) => (
        <li
          key={index}
          className={`tab${activeTab === index ? ' active' : ''}`}
          onClick={() => handleClickTab(index)}
        >
          <Button
            styleBtn="text"
            id={name.replace(' ', '-').toLowerCase()}
            label={name}
          />
        </li>
      ))}
    </ul>
  );
}
