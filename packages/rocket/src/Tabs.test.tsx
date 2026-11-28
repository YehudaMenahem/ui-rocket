import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';
import type { TabItem } from './types';

const items: TabItem[] = [
  { label: 'Telemetry', content: <p>Telemetry panel</p> },
  { label: 'Crew', content: <p>Crew panel</p> },
  { label: 'Cargo', content: <p>Cargo panel</p>, disabled: true },
  { label: 'Fuel', content: <p>Fuel panel</p> },
];

const tab = (name: string) => screen.getByRole('tab', { name });

test('Tabs roles and ARIA: renders tablist, tabs and the selected tabpanel', () => {
  render(<Tabs tabs={items} aria-label="Mission" />);
  const list = screen.getByRole('tablist', { name: 'Mission' });
  expect(list).toHaveAttribute('aria-orientation', 'horizontal');
  expect(screen.getAllByRole('tab')).toHaveLength(4);
  expect(tab('Telemetry')).toHaveAttribute('aria-selected', 'true');
  expect(tab('Crew')).toHaveAttribute('aria-selected', 'false');
  const panel = screen.getByRole('tabpanel');
  expect(panel).toHaveTextContent('Telemetry panel');
  expect(panel).toHaveAttribute('aria-labelledby', tab('Telemetry').id);
  expect(tab('Telemetry')).toHaveAttribute('aria-controls', panel.id);
  expect(panel).toHaveAttribute('tabindex', '0');
});

test('Tabs roles and ARIA: supports aria-labelledby and vertical orientation', () => {
  render(
    <>
      <h2 id="h">Mission</h2>
      <Tabs tabs={items} aria-labelledby="h" orientation="vertical" />
    </>
  );
  const list = screen.getByRole('tablist');
  expect(list).toHaveAttribute('aria-labelledby', 'h');
  expect(list).toHaveAttribute('aria-orientation', 'vertical');
});

test('Tabs roles and ARIA: uses roving tabindex: only the selected tab is tabbable', () => {
  render(<Tabs tabs={items} defaultValue="1" />);
  const tabbable = screen
    .getAllByRole('tab')
    .filter((t) => t.getAttribute('tabindex') === '0');
  expect(tabbable).toEqual([tab('Crew')]);
});

test('Tabs roles and ARIA: keeps hidden panels in the DOM so aria-controls always resolves', () => {
  render(<Tabs tabs={items} />);
  for (const t of screen.getAllByRole('tab')) {
    const id = t.getAttribute('aria-controls')!;
    expect(document.getElementById(id)).not.toBeNull();
  }
  expect(screen.getAllByRole('tabpanel', { hidden: true })).toHaveLength(4);
  expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
});

test('Tabs roles and ARIA: omits panel tabindex when the panel has focusable content', () => {
  render(
    <Tabs tabs={[{ label: 'A', content: <button type="button">Go</button> }]} />
  );
  expect(screen.getByRole('tabpanel')).not.toHaveAttribute('tabindex');
});

test('Tabs roles and ARIA: does not set aria-controls for legacy tabs without content', () => {
  render(<Tabs tabs={['One', 'Two']} activeTab={1} setActiveTab={() => {}} />);
  expect(tab('One')).not.toHaveAttribute('aria-controls');
  expect(screen.queryByRole('tabpanel')).toBeNull();
  expect(tab('Two')).toHaveAttribute('aria-selected', 'true');
});

test('Tabs roles and ARIA: forwards ref and rest props to the root', () => {
  let el: HTMLDivElement | null = null;
  render(
    <Tabs
      tabs={items}
      data-testid="root"
      ref={(n) => {
        el = n;
      }}
    />
  );
  expect(el).toBe(screen.getByTestId('root'));
});

test('Tabs unique ids: generates unique ids for two instances with the same labels', () => {
  const { container } = render(
    <>
      <Tabs tabs={items} aria-label="A" />
      <Tabs tabs={items} aria-label="B" />
    </>
  );
  const ids = Array.from(container.querySelectorAll('[id]')).map((n) => n.id);
  expect(ids.length).toBeGreaterThan(0);
  expect(new Set(ids).size).toBe(ids.length);
});

test('Tabs unique ids: uses the id prop as the id base', () => {
  render(<Tabs tabs={items} id="mine" />);
  expect(tab('Crew').id).toBe('mine-tab-1');
});

test('Tabs keyboard: moves with ArrowRight/ArrowLeft, wraps and skips disabled', async () => {
  const user = userEvent.setup();
  render(<Tabs tabs={items} />);
  await user.tab();
  expect(tab('Telemetry')).toHaveFocus();
  await user.keyboard('{ArrowRight}');
  expect(tab('Crew')).toHaveFocus();
  expect(tab('Crew')).toHaveAttribute('aria-selected', 'true');
  await user.keyboard('{ArrowRight}');
  expect(tab('Fuel')).toHaveFocus();
  await user.keyboard('{ArrowRight}');
  expect(tab('Telemetry')).toHaveFocus();
  await user.keyboard('{ArrowLeft}');
  expect(tab('Fuel')).toHaveFocus();
  await user.keyboard('{ArrowLeft}');
  expect(tab('Crew')).toHaveFocus();
  expect(screen.getByRole('tabpanel')).toHaveTextContent('Crew panel');
});

test('Tabs keyboard: supports Home and End (skipping disabled tabs)', async () => {
  const user = userEvent.setup();
  render(<Tabs tabs={items} defaultValue="1" />);
  tab('Crew').focus();
  await user.keyboard('{End}');
  expect(tab('Fuel')).toHaveFocus();
  await user.keyboard('{Home}');
  expect(tab('Telemetry')).toHaveFocus();
});

test('Tabs keyboard: ignores Up/Down when horizontal and uses them when vertical', async () => {
  const user = userEvent.setup();
  const { rerender } = render(<Tabs tabs={items} />);
  tab('Telemetry').focus();
  await user.keyboard('{ArrowDown}');
  expect(tab('Telemetry')).toHaveFocus();
  rerender(<Tabs tabs={items} orientation="vertical" />);
  await user.keyboard('{ArrowDown}');
  expect(tab('Crew')).toHaveFocus();
  await user.keyboard('{ArrowRight}');
  expect(tab('Crew')).toHaveFocus();
  await user.keyboard('{ArrowUp}');
  expect(tab('Telemetry')).toHaveFocus();
});

test('Tabs keyboard: flips arrow keys when dir=rtl', async () => {
  const user = userEvent.setup();
  render(<Tabs tabs={items} dir="rtl" />);
  tab('Telemetry').focus();
  await user.keyboard('{ArrowLeft}');
  expect(tab('Crew')).toHaveFocus();
  await user.keyboard('{ArrowRight}');
  expect(tab('Telemetry')).toHaveFocus();
});

test('Tabs keyboard: flips arrow keys inside an rtl ancestor', async () => {
  const user = userEvent.setup();
  render(
    <div dir="rtl">
      <Tabs tabs={items} />
    </div>
  );
  tab('Telemetry').focus();
  await user.keyboard('{ArrowLeft}');
  expect(tab('Crew')).toHaveFocus();
});

test('Tabs keyboard: manual activation moves focus only; Enter and Space select', async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(
    <Tabs tabs={items} activationMode="manual" onValueChange={onValueChange} />
  );
  tab('Telemetry').focus();
  await user.keyboard('{ArrowRight}');
  expect(tab('Crew')).toHaveFocus();
  expect(tab('Crew')).toHaveAttribute('aria-selected', 'false');
  expect(onValueChange).not.toHaveBeenCalled();
  await user.keyboard('{Enter}');
  expect(tab('Crew')).toHaveAttribute('aria-selected', 'true');
  await user.keyboard('{ArrowRight}{ }');
  expect(tab('Fuel')).toHaveAttribute('aria-selected', 'true');
  expect(onValueChange).toHaveBeenLastCalledWith('3');
});

test('Tabs keyboard: does not select disabled tabs on click', () => {
  render(<Tabs tabs={items} />);
  fireEvent.click(tab('Cargo'));
  expect(tab('Cargo')).toHaveAttribute('aria-selected', 'false');
  expect(tab('Cargo')).toBeDisabled();
});

test('Tabs controlled and uncontrolled: uncontrolled: honours defaultValue and updates on click', async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(
    <Tabs
      tabs={[
        { label: 'A', value: 'a', content: 'AA' },
        { label: 'B', value: 'b', content: 'BB' },
      ]}
      defaultValue="b"
      onValueChange={onValueChange}
    />
  );
  expect(tab('B')).toHaveAttribute('aria-selected', 'true');
  await user.click(tab('A'));
  expect(tab('A')).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel')).toHaveTextContent('AA');
  expect(onValueChange).toHaveBeenCalledWith('a');
});

test('Tabs controlled and uncontrolled: controlled: only changes when the parent updates value', async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  const { rerender } = render(
    <Tabs tabs={items} value="0" onValueChange={onValueChange} />
  );
  await user.click(tab('Crew'));
  expect(onValueChange).toHaveBeenCalledWith('1');
  expect(tab('Telemetry')).toHaveAttribute('aria-selected', 'true');
  rerender(<Tabs tabs={items} value="1" onValueChange={onValueChange} />);
  expect(tab('Crew')).toHaveAttribute('aria-selected', 'true');
});

test('Tabs controlled and uncontrolled: legacy: activeTab/setActiveTab still work', async () => {
  const user = userEvent.setup();
  function Legacy() {
    const [i, setI] = useState(0);
    return (
      <Tabs tabs={['One', 'Two', 'Three']} activeTab={i} setActiveTab={setI} />
    );
  }
  render(<Legacy />);
  await user.click(tab('Three'));
  expect(tab('Three')).toHaveAttribute('aria-selected', 'true');
  await user.keyboard('{Home}');
  expect(tab('One')).toHaveAttribute('aria-selected', 'true');
});
