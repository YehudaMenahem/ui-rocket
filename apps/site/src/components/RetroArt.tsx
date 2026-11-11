export function RetroScene() {
  return (
    <svg
      className="retro"
      viewBox="0 0 640 600"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="#1E2A47" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="370" cy="270" r="215" fill="#E7A33B" />
        <g fill="none" strokeWidth="2.5" opacity=".35">
          <path d="M190 200h360M170 250h400M165 300h410M175 350h390M200 400h340" />
        </g>
        <circle cx="545" cy="95" r="52" fill="#4A5A23" />
        <circle cx="528" cy="80" r="11" fill="#5F7230" strokeWidth="3" />
        <circle cx="562" cy="112" r="8" fill="#5F7230" strokeWidth="3" />
        <circle cx="552" cy="72" r="4" fill="#5F7230" strokeWidth="2.5" />
        <g transform="translate(110 150)">
          <circle r="26" fill="#C4471D" />
          <ellipse rx="46" ry="12" fill="none" transform="rotate(-20)" />
        </g>
        <g transform="translate(360 300) rotate(18)">
          <path d="M-30 120 Q-10 210 0 230 Q10 210 30 120Z" fill="#C4471D" />
          <path d="M-16 120 Q-6 175 0 190 Q6 175 16 120Z" fill="#F3C063" strokeWidth="3" />
          <path d="M-56 40 Q-100 70 -98 130 L-44 110Z" fill="#C4471D" />
          <path d="M56 40 Q100 70 98 130 L44 110Z" fill="#C4471D" />
          <path
            d="M0 -190 C 70 -130 78 0 50 118 L -50 118 C -78 0 -70 -130 0 -190Z"
            fill="#FDF1E2"
          />
          <path
            d="M0 -190 C 30 -164 46 -134 54 -110 L -54 -110 C -46 -134 -30 -164 0 -190Z"
            fill="#C4471D"
          />
          <path d="M-64 30 L64 30 L60 56 L-60 56Z" fill="#4A5A23" />
          <circle cx="0" cy="-45" r="34" fill="#9FC2E8" />
          <circle cx="0" cy="-45" r="34" fill="none" strokeWidth="7" stroke="#1E2A47" />
          <path d="M-14 -60 Q-6 -68 6 -66" fill="none" stroke="#FDF1E2" strokeWidth="5" />
          <path d="M0 118 V140" strokeWidth="4" />
          <path d="M-40 -2 q8 6 0 12 M40 -2 q-8 6 0 12" fill="none" strokeWidth="3" />
        </g>
        <g fill="#FDF1E2">
          <path d="M150 560 q-40 0 -40 -34 q0 -32 38 -32 q8 -36 52 -32 q30 -40 74 -10 q40 -12 56 24 q44 -2 44 38 q0 46 -48 46z" />
          <path d="M380 560 q-30 -2 -28 -30 q4 -28 36 -26 q14 -30 50 -22 q34 -16 52 18 q36 4 32 36 q-4 26 -36 24z" />
        </g>
        <g fill="#1E2A47" stroke="none">
          <path d="M70 300l6 18 18 6-18 6-6 18-6-18-18-6 18-6z" />
          <path d="M600 300l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" />
          <path d="M250 40l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" />
          <circle cx="190" cy="90" r="4" />
          <circle cx="430" cy="30" r="3.5" />
          <circle cx="620" cy="200" r="3.5" />
          <circle cx="40" cy="420" r="3.5" />
          <circle cx="600" cy="430" r="4" />
        </g>
        <g fill="none" strokeWidth="3">
          <path d="M200 300 q-20 -6 -40 0M215 340 q-22 -6 -48 2M520 220 q22 -4 40 6" />
        </g>
      </g>
    </svg>
  );
}

export function Stamp() {
  return (
    <svg className="stamp" viewBox="0 0 140 140" aria-hidden="true">
      <defs>
        <path id="cp" d="M70 70 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0" />
      </defs>
      <circle cx="70" cy="70" r="64" fill="#FDF1E2" stroke="#1E2A47" strokeWidth="3" />
      <circle cx="70" cy="70" r="38" fill="#C4471D" stroke="#1E2A47" strokeWidth="3" />
      <text
        fontFamily="DM Mono"
        fontSize="11.5"
        fontWeight="500"
        fill="#1E2A47"
        letterSpacing="2.2"
      >
        <textPath href="#cp">WCAG 2.2 AA ✦ 9.8 KB ✦ MIT ✦ TYPED ✦ </textPath>
      </text>
      <text
        x="70"
        y="78"
        textAnchor="middle"
        fontFamily="Fraunces"
        fontWeight="900"
        fontSize="24"
        fill="#FFF6EC"
      >
        v2
      </text>
    </svg>
  );
}
