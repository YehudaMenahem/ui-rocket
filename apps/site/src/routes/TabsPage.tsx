import { useState } from 'react';
import { Tabs, type TabItem } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'tabs')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const MISSION_TABS: TabItem[] = [
  {
    label: 'Telemetry',
    value: 'telemetry',
    content: (
      <p>
        Altitude, velocity and fuel pressure stream in once per second. All
        readings nominal.
      </p>
    ),
  },
  {
    label: 'Crew',
    value: 'crew',
    content: (
      <p>
        Three astronauts on board. Next scheduled check-in is T-minus ten
        minutes.
      </p>
    ),
  },
  {
    label: 'Cargo',
    value: 'cargo',
    content: <p>Two research modules and one very large cheese wheel.</p>,
  },
];

const WITH_DISABLED: TabItem[] = [
  ...MISSION_TABS.slice(0, 2),
  { ...MISSION_TABS[2], disabled: true },
  {
    label: 'Fuel',
    value: 'fuel',
    content: <p>Tanks are topped up and the valves are closed.</p>,
  },
];

function TabsDemo({
  label,
  tabs = MISSION_TABS,
  ...props
}: {
  label: string;
  tabs?: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
}) {
  const [value, setValue] = useState(tabs[0].value!);
  return (
    <Tabs
      aria-label={label}
      tabs={tabs}
      value={value}
      onValueChange={setValue}
      {...props}
    />
  );
}

const BASIC_CODE = `import { Tabs } from '@ui-rocket/rocket'

export default function Demo() {
  const [value, setValue] = useState('telemetry')
  return (
    <Tabs
      aria-label="Mission control"
      value={value}
      onValueChange={setValue}
      tabs={[
        { value: 'telemetry', label: 'Telemetry', content: <p>…</p> },
        { value: 'crew', label: 'Crew', content: <p>…</p> },
        { value: 'cargo', label: 'Cargo', content: <p>…</p> },
      ]}
    />
  )
}`;

export function TabsPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Tabs"
      showPlayground={true}
      controls={['color']}
      preview={() => <TabsDemo label="Mission control" />}
      generateCode={() => BASIC_CODE}
      examples={
        <>
          <h3>With panels</h3>
          <p className="txt">
            Pass <code>content</code> per tab to render a <code>tabpanel</code>{' '}
            linked to its tab. Arrow keys move and select; Home and End jump to
            the first and last tab.
          </p>
          <div className="ex">
            <div className="canvas" style={{ width: '100%' }}>
              <TabsDemo label="Mission control, with panels" />
            </div>
            <div className="exbar">
              <span>panels.tsx</span>
            </div>
          </div>
          <h3>Manual activation</h3>
          <p className="txt">
            With <code>activationMode=&quot;manual&quot;</code> arrow keys only
            move focus; press Enter or Space to select. Use it when showing a
            panel is expensive.
          </p>
          <div className="ex">
            <div className="canvas" style={{ width: '100%' }}>
              <TabsDemo
                label="Mission control, manual activation"
                activationMode="manual"
              />
            </div>
            <div className="exbar">
              <span>manual.tsx</span>
            </div>
          </div>
          <h3>Disabled tab</h3>
          <p className="txt">
            Disabled tabs are skipped by keyboard navigation and cannot be
            selected.
          </p>
          <div className="ex">
            <div className="canvas" style={{ width: '100%' }}>
              <TabsDemo
                label="Mission control, disabled tab"
                tabs={WITH_DISABLED}
              />
            </div>
            <div className="exbar">
              <span>disabled.tsx</span>
            </div>
          </div>
          <h3>Vertical</h3>
          <p className="txt">
            Vertical tabs set <code>aria-orientation=&quot;vertical&quot;</code>{' '}
            and use Up and Down arrows.
          </p>
          <div className="ex">
            <div className="canvas" style={{ width: '100%' }}>
              <TabsDemo
                label="Mission control, vertical"
                orientation="vertical"
              />
            </div>
            <div className="exbar">
              <span>vertical.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        {
          name: 'tabs',
          type: ['(string | TabItem)[]'],
          defaultValue: '—',
          description:
            'Tab labels, or items with label, optional content (panel), value and disabled.',
        },
        {
          name: 'value',
          type: ['string'],
          defaultValue: '—',
          description: 'Controlled selected value. Pair it with onValueChange.',
        },
        {
          name: 'defaultValue',
          type: ['string'],
          defaultValue: 'first enabled tab',
          description: 'Initial selected value when uncontrolled.',
        },
        {
          name: 'onValueChange',
          type: ['(value: string) => void'],
          defaultValue: '—',
          description: 'Called with the new value when the selection changes.',
        },
        {
          name: 'activationMode',
          type: ['"automatic"', '"manual"'],
          defaultValue: '"automatic"',
          description:
            'Automatic selects on focus; manual selects with Enter or Space.',
        },
        {
          name: 'orientation',
          type: ['"horizontal"', '"vertical"'],
          defaultValue: '"horizontal"',
          description:
            'Sets aria-orientation. Vertical uses Up and Down instead of Left and Right.',
        },
        {
          name: 'aria-label',
          type: ['string'],
          defaultValue: '—',
          description:
            'Accessible name of the tablist. Provide this or aria-labelledby. Applied to the tablist, not the wrapper.',
        },
        {
          name: 'aria-labelledby',
          type: ['string'],
          defaultValue: '—',
          description: 'Id of an element that names the tablist.',
        },
        {
          name: 'id',
          type: ['string'],
          defaultValue: 'useId()',
          description:
            'Base for generated tab and panel ids. Unique per instance by default.',
        },
        {
          name: 'ref',
          type: ['Ref<HTMLDivElement>'],
          defaultValue: '—',
          description:
            'Ref to the wrapper element. Other div props (dir, className, data-*) are forwarded to it too.',
        },
        {
          name: 'activeTab',
          type: ['number'],
          defaultValue: '—',
          description: 'Legacy: controlled index. Prefer value.',
        },
        {
          name: 'setActiveTab',
          type: ['(i: number) => void'],
          defaultValue: '—',
          description:
            'Legacy: called with the new index. Prefer onValueChange.',
        },
      ]}
      a11y={[
        {
          key: '← →',
          title: 'Move between tabs',
          body: 'Wraps around and skips disabled tabs. Flipped when dir="rtl". Vertical tabs use ↑ ↓.',
        },
        {
          key: 'Home / End',
          title: 'First and last tab',
          body: 'Moves to the first or last enabled tab.',
        },
        {
          key: 'Enter / Space',
          title: 'Activate (manual mode)',
          body: 'In automatic mode (default) focus selects the tab, so these are only needed with activationMode="manual".',
        },
        {
          key: 'Tab',
          title: 'Roving tabindex',
          body: 'Only the selected tab is in the tab sequence; Tab then moves into the panel, which is focusable when it has no focusable content.',
        },
        {
          key: 'roles',
          title: 'tablist, tab, tabpanel',
          body: 'aria-selected and aria-controls on each tab; aria-labelledby on each panel. Ids come from useId, so they are unique and SSR-safe.',
        },
        {
          key: 'motion',
          title: 'Reduced motion',
          body: 'The indicator color transition is disabled under prefers-reduced-motion.',
        },
      ]}
    />
  );
}
