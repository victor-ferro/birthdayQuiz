export function Rangers() {
  return (
    <svg
      viewBox="0 0 220 165"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-60 mx-auto -mb-2"
    >
      <defs>
        <radialGradient id="glowR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4444" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#ff4444" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* ── RED RANGER (left) ─────────────────── */}
      <g transform="translate(10, 8)">
        {/* aura glow */}
        <ellipse cx="45" cy="80" rx="48" ry="75" fill="url(#glowR)"/>
        {/* shadow */}
        <ellipse cx="45" cy="157" rx="30" ry="5" fill="#000" opacity="0.12"/>

        {/* ── LEGS ── */}
        {/* thighs */}
        <rect x="22" y="101" width="18" height="32" rx="3" fill="#cc1111"/>
        <rect x="46" y="101" width="18" height="32" rx="3" fill="#cc1111"/>
        {/* white boots */}
        <rect x="20" y="124" width="22" height="22" rx="4" fill="#ffffff"/>
        <rect x="44" y="124" width="22" height="22" rx="4" fill="#ffffff"/>
        {/* boot toe curve */}
        <rect x="20" y="138" width="22" height="9" rx="4" fill="#eeeeee"/>
        <rect x="44" y="138" width="22" height="9" rx="4" fill="#eeeeee"/>

        {/* ── BELT ── */}
        <rect x="18" y="97" width="54" height="8" rx="2" fill="#1a1a1a"/>
        <rect x="37" y="95" width="16" height="12" rx="2" fill="#d4af37"/>
        <circle cx="45" cy="101" r="4" fill="#1a1a1a"/>
        <circle cx="45" cy="101" r="2" fill="#d4af37"/>

        {/* ── TORSO ── */}
        <path d="M16,50 L74,50 L70,98 L20,98Z" fill="#cc1111"/>
        {/* white V chest */}
        <path d="M45,52 L62,60 L58,90 L45,90 L32,90 L28,60Z" fill="#ffffff"/>
        <path d="M45,52 L45,90" stroke="#dddddd" strokeWidth="1"/>

        {/* ── SHOULDERS & ARMS ── */}
        <path d="M16,50 L6,55 L6,68 L16,65Z" fill="#cc1111"/>
        <path d="M74,50 L84,55 L84,68 L74,65Z" fill="#cc1111"/>
        {/* upper arms */}
        <rect x="4" y="55" width="14" height="38" rx="4" fill="#cc1111"/>
        <rect x="72" y="55" width="14" height="38" rx="4" fill="#cc1111"/>
        {/* white gloves */}
        <rect x="3" y="86" width="16" height="18" rx="5" fill="#ffffff"/>
        <rect x="71" y="86" width="16" height="18" rx="5" fill="#ffffff"/>

        {/* ── NECK ── */}
        <rect x="37" y="44" width="16" height="10" rx="3" fill="#aa0e0e"/>

        {/* ── HELMET ── */}
        {/* dome */}
        <path d="M13,43 Q13,5 45,5 Q77,5 77,43 L77,52 L13,52Z" fill="#cc1111"/>
        {/* white helmet stripe */}
        <path d="M13,52 L77,52 L73,44 L17,44Z" fill="#ffffff" opacity="0.15"/>
        {/* T-Rex mouth / jaw plate */}
        <path d="M17,40 L73,40 L73,52 L17,52Z" fill="#aa0e0e"/>
        {/* teeth detail on jaw */}
        <path d="M22,40 L25,44 L28,40 L31,44 L34,40 L37,44 L40,40 L43,44 L46,40 L49,44 L52,40 L55,44 L58,40 L61,44 L64,40 L67,44 L70,40"
          stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6"/>
        {/* visor eyes */}
        <path d="M19,22 L45,18 L71,22 L67,36 L23,36Z" fill="#0d0d0d"/>
        <path d="M19,22 L45,18 L71,22 L67,36 L23,36Z" fill="#ff3300" opacity="0.5"/>
        <line x1="22" y1="27" x2="68" y2="27" stroke="#ff8866" strokeWidth="2" opacity="0.8"/>
        {/* helmet crest */}
        <path d="M38,5 L45,-3 L52,5 L48,9 L42,9Z" fill="#d4af37"/>
        {/* side fins */}
        <path d="M13,35 L6,27 L6,45 L13,43Z" fill="#aa0e0e"/>
        <path d="M77,35 L84,27 L84,45 L77,43Z" fill="#aa0e0e"/>

        {/* sparkles */}
        <path d="M85,8 L86,5 L87,8 L90,9 L87,10 L86,13 L85,10 L82,9Z" fill="#d4af37" opacity="0.9"/>
        <circle cx="3" cy="20" r="2" fill="#d4af37" opacity="0.7"/>
        <circle cx="87" cy="50" r="1.5" fill="#ff8866" opacity="0.6"/>
      </g>

      {/* ── BLUE RANGER (right) ───────────────── */}
      <g transform="translate(120, 8)">
        {/* aura glow */}
        <ellipse cx="45" cy="80" rx="48" ry="75" fill="url(#glowB)"/>
        {/* shadow */}
        <ellipse cx="45" cy="157" rx="30" ry="5" fill="#000" opacity="0.12"/>

        {/* ── LEGS ── */}
        <rect x="22" y="101" width="18" height="32" rx="3" fill="#0044cc"/>
        <rect x="46" y="101" width="18" height="32" rx="3" fill="#0044cc"/>
        {/* white boots */}
        <rect x="20" y="124" width="22" height="22" rx="4" fill="#ffffff"/>
        <rect x="44" y="124" width="22" height="22" rx="4" fill="#ffffff"/>
        <rect x="20" y="138" width="22" height="9" rx="4" fill="#eeeeee"/>
        <rect x="44" y="138" width="22" height="9" rx="4" fill="#eeeeee"/>

        {/* ── BELT ── */}
        <rect x="18" y="97" width="54" height="8" rx="2" fill="#1a1a1a"/>
        <rect x="37" y="95" width="16" height="12" rx="2" fill="#d4af37"/>
        <circle cx="45" cy="101" r="4" fill="#1a1a1a"/>
        <circle cx="45" cy="101" r="2" fill="#d4af37"/>

        {/* ── TORSO ── */}
        <path d="M16,50 L74,50 L70,98 L20,98Z" fill="#0044cc"/>
        {/* white V chest */}
        <path d="M45,52 L62,60 L58,90 L45,90 L32,90 L28,60Z" fill="#ffffff"/>
        <path d="M45,52 L45,90" stroke="#dddddd" strokeWidth="1"/>

        {/* ── SHOULDERS & ARMS ── */}
        <path d="M16,50 L6,55 L6,68 L16,65Z" fill="#0044cc"/>
        <path d="M74,50 L84,55 L84,68 L74,65Z" fill="#0044cc"/>
        <rect x="4" y="55" width="14" height="38" rx="4" fill="#0044cc"/>
        <rect x="72" y="55" width="14" height="38" rx="4" fill="#0044cc"/>
        {/* white gloves */}
        <rect x="3" y="86" width="16" height="18" rx="5" fill="#ffffff"/>
        <rect x="71" y="86" width="16" height="18" rx="5" fill="#ffffff"/>

        {/* ── NECK ── */}
        <rect x="37" y="44" width="16" height="10" rx="3" fill="#0033aa"/>

        {/* ── HELMET ── */}
        {/* dome */}
        <path d="M13,43 Q13,5 45,5 Q77,5 77,43 L77,52 L13,52Z" fill="#0044cc"/>
        {/* jaw plate */}
        <path d="M17,40 L73,40 L73,52 L17,52Z" fill="#0033aa"/>
        {/* Triceratops horn detail */}
        <path d="M38,5 L45,-3 L52,5" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
        <path d="M28,8 L34,3" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
        <path d="M62,8 L56,3" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
        {/* visor */}
        <path d="M19,22 L45,18 L71,22 L67,36 L23,36Z" fill="#0d0d0d"/>
        <path d="M19,22 L45,18 L71,22 L67,36 L23,36Z" fill="#00aaff" opacity="0.5"/>
        <line x1="22" y1="27" x2="68" y2="27" stroke="#55ddff" strokeWidth="2" opacity="0.8"/>
        {/* crest */}
        <path d="M38,5 L45,-3 L52,5 L48,9 L42,9Z" fill="#d4af37"/>
        {/* side fins */}
        <path d="M13,35 L6,27 L6,45 L13,43Z" fill="#0033aa"/>
        <path d="M77,35 L84,27 L84,45 L77,43Z" fill="#0033aa"/>

        {/* sparkles */}
        <path d="M-5,12 L-4,9 L-3,12 L0,13 L-3,14 L-4,17 L-5,14 L-8,13Z" fill="#d4af37" opacity="0.9"/>
        <circle cx="87" cy="22" r="2" fill="#d4af37" opacity="0.7"/>
        <circle cx="3" cy="48" r="1.5" fill="#55ddff" opacity="0.6"/>
      </g>
    </svg>
  )
}
