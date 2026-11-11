const PATHS: Record<string, string> = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  gh: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  chevr: '<path d="m9 6 6 6-6 6"/>',
  shield:
    '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  palette:
    '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A4.6 4.6 0 0 0 22 9.8C22 6 17.5 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
  feather:
    '<path d="M20.2 12.2A6 6 0 0 0 11.8 3.8L5 10.6V19h8.4z"/><path d="M16 8 2 22M17.5 15H9"/>',
  code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
  pkg: '<path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  monitor:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
  test: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
};

export function Icon({
  name,
  className = 'ico',
}: {
  name: keyof typeof PATHS | string;
  className?: string;
}) {
  const html = PATHS[name] || PATHS.search;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function RocketMark({ className = 'mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" fill="#E7A33B" stroke="#1E2A47" strokeWidth="2" />
      <path
        d="M16 5.5c3.6 3 4.6 7.4 4 12h-8c-.6-4.6.4-9 4-12z"
        fill="#FDF1E2"
        stroke="#1E2A47"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="12.5" r="1.9" fill="#C4471D" stroke="#1E2A47" strokeWidth="1.2" />
      <path
        d="M12.2 15.5l-2.6 4.2h2.9M19.8 15.5l2.6 4.2h-2.9"
        fill="#C4471D"
        stroke="#1E2A47"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14.2 18.6h3.6L16 23z" fill="#C4471D" />
    </svg>
  );
}
