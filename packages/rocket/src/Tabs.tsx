import { KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import { TabsProps } from './types';

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"]),[contenteditable=true],summary';

/**
 * Accessible tabs following the WAI-ARIA APG Tabs pattern.
 * https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 */
export function Tabs({
  tabs,
  value,
  defaultValue,
  onValueChange,
  activationMode = 'automatic',
  orientation = 'horizontal',
  activeTab,
  setActiveTab,
  classes = '',
  id,
  ref,
  className,
  dir,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}: TabsProps) {
  const uid = useId();
  const base = id ?? uid;
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [inner, setInner] = useState(defaultValue);
  const [panelHasFocusable, setPanelHasFocusable] = useState(false);

  const items = tabs.map((t, i) =>
    typeof t === 'string'
      ? { label: t, value: String(i) }
      : { ...t, value: t.value ?? String(i) }
  );
  const valueControlled = value !== undefined;
  const indexControlled =
    !valueControlled && (activeTab !== undefined || setActiveTab !== undefined);
  const enabled = items.flatMap((t, i) => (t.disabled ? [] : [i]));

  let selected = -1;
  if (valueControlled) selected = items.findIndex((t) => t.value === value);
  else if (indexControlled) selected = activeTab ?? 0;
  else {
    selected = items.findIndex((t) => t.value === inner);
    if (selected < 0) selected = enabled[0] ?? -1;
  }
  // Roving tabindex: exactly one tab is in the page tab sequence.
  const tabbable =
    selected >= 0 && !items[selected]?.disabled ? selected : (enabled[0] ?? -1);

  useEffect(() => {
    const has = !!panelRef.current?.querySelector(FOCUSABLE);
    setPanelHasFocusable(has);
  }, [selected, tabs]);

  const select = (i: number) => {
    const item = items[i];
    if (!item || item.disabled) return;
    if (!valueControlled && !indexControlled) setInner(item.value);
    if (i !== selected) {
      onValueChange?.(item.value);
      setActiveTab?.(i);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const list = listRef.current;
    if (!list) return;
    const els = Array.from(list.querySelectorAll<HTMLElement>('[role=tab]'));
    const pos = enabled.indexOf(els.indexOf(e.target as HTMLElement));
    if (pos < 0) return;
    const vertical = orientation === 'vertical';
    const rtl =
      (dir ??
        list.closest('[dir]')?.getAttribute('dir') ??
        window.getComputedStyle(list).direction) === 'rtl';
    const [next, prev] = vertical
      ? ['ArrowDown', 'ArrowUp']
      : rtl
        ? ['ArrowLeft', 'ArrowRight']
        : ['ArrowRight', 'ArrowLeft'];
    const n = enabled.length;
    let target: number;
    if (e.key === next) target = enabled[(pos + 1) % n];
    else if (e.key === prev) target = enabled[(pos - 1 + n) % n];
    else if (e.key === 'Home') target = enabled[0];
    else if (e.key === 'End') target = enabled[n - 1];
    else return;
    e.preventDefault();
    els[target].focus();
    if (activationMode === 'automatic') select(target);
  };

  const tabId = (i: number) => `${base}-tab-${i}`;
  const panelId = (i: number) => `${base}-panel-${i}`;

  return (
    <div
      {...rest}
      ref={ref}
      id={id}
      dir={dir}
      className={['tabs-root', orientation, classes, className]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        ref={listRef}
        role="tablist"
        className="tabs"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-orientation={orientation}
        data-active-tab={selected}
      >
        {items.map((t, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            id={tabId(i)}
            className={`tab${selected === i ? ' active' : ''}`}
            aria-selected={selected === i}
            aria-controls={t.content != null ? panelId(i) : undefined}
            tabIndex={tabbable === i ? 0 : -1}
            disabled={t.disabled}
            onClick={() => select(i)}
            onKeyDown={onKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t, i) =>
        t.content != null ? (
          <div
            key={i}
            ref={selected === i ? panelRef : undefined}
            role="tabpanel"
            id={panelId(i)}
            className="tabpanel"
            aria-labelledby={tabId(i)}
            tabIndex={panelHasFocusable ? undefined : 0}
            hidden={selected !== i}
          >
            {t.content}
          </div>
        ) : null
      )}
    </div>
  );
}
