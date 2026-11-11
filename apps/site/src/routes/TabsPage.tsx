import { useState } from 'react';
import { Tabs } from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="ui container tabs-page">
      <ShowcaseCard title="Tabs">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <p>Tabs organize content into separate views.</p>
            <Tabs
              tabs={['Tab 1', 'Tab 2', 'Tab 3']}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="content">
              <p>Content for tab {activeTab + 1}</p>
            </div>
          </div>
        </div>
      </div>
    
      </ShowcaseCard>
    </div>
  );
}
