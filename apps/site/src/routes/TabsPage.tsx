import { useState } from 'react';
import { Tabs } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'tabs')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function TabsDemo() {
  const [i, setI] = useState(0);
  return <Tabs tabs={['Telemetry','Crew','Cargo']} activeTab={i} setActiveTab={setI} />;
}

export function TabsPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Tabs"
      showPlayground={true}
      preview={() => <TabsDemo />}
      examples={<>
          <h3>Basic</h3>
          <div className="ex"><div className="canvas" style={{width:'100%'}}><TabsDemo /></div><div className="exbar"><span>basic.tsx</span></div></div>
        </>}
      props={[
        { name: 'tabs', type: ['string[]'], defaultValue: '—', description: 'Tab labels.' },
        { name: 'activeTab', type: ['number'], defaultValue: '0', description: 'Active index.' },
        { name: 'setActiveTab', type: ['(i: number) => void'], defaultValue: '—', description: 'Change handler.' },
      ]}
    />
  );
}
