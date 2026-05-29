export function Avatar() {
  return (
    <svg
      viewBox="0 0 160 210"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-40 mx-auto -mb-2 drop-shadow-lg"
    >
      {/* ── SHORTS ── */}
      <path d="M28,175 Q28,210 80,210 Q132,210 132,175 L128,145 L32,145Z" fill="#2a7a7a"/>
      <line x1="80" y1="145" x2="80" y2="210" stroke="#226666" strokeWidth="1.5"/>
      {/* waistband */}
      <rect x="28" y="140" width="104" height="10" rx="3" fill="#1e6060"/>
      {/* cord */}
      <path d="M68,142 Q80,152 92,142" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>

      {/* ── WHITE T-SHIRT ── */}
      <path d="M22,148 L20,95 L38,85 L80,90 L122,85 L140,95 L138,148Z" fill="#f5f5f5"/>
      {/* collar */}
      <path d="M62,88 Q80,98 98,88" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
      {/* shirt crease */}
      <line x1="80" y1="95" x2="75" y2="145" stroke="#e8e8e8" strokeWidth="1.5"/>
      {/* sleeve lines */}
      <path d="M20,95 L30,110" stroke="#e0e0e0" strokeWidth="1.2"/>
      <path d="M140,95 L130,110" stroke="#e0e0e0" strokeWidth="1.2"/>

      {/* ── ARMS ── */}
      {/* left arm */}
      <path d="M18,93 L10,135 L28,140 L36,98Z" fill="#f0c090"/>
      {/* right arm - slightly raised/bent like in photo */}
      <path d="M142,93 L155,130 L138,137 L126,100Z" fill="#f0c090"/>

      {/* ── WRISTBANDS (right wrist) ── */}
      <rect x="148" y="128" width="13" height="5" rx="2" fill="#3b82f6"/>
      <rect x="148" y="122" width="13" height="4" rx="2" fill="#22c55e"/>

      {/* ── WRISTBAND (left wrist, blue) ── */}
      <rect x="14" y="131" width="13" height="5" rx="2" fill="#3b82f6"/>

      {/* ── NECK ── */}
      <rect x="65" y="80" width="30" height="22" rx="6" fill="#f0c090"/>
      {/* neck shadow */}
      <path d="M65,88 Q80,94 95,88" fill="#e0a878" opacity="0.4"/>

      {/* ── HEAD ── */}
      {/* jaw/face base */}
      <path d="M35,65 Q35,20 80,20 Q125,20 125,65 L120,95 Q105,110 80,112 Q55,110 40,95Z" fill="#f0c090"/>
      {/* cheek blush (subtle) */}
      <ellipse cx="52" cy="78" rx="10" ry="6" fill="#e8906a" opacity="0.2"/>
      <ellipse cx="108" cy="78" rx="10" ry="6" fill="#e8906a" opacity="0.2"/>

      {/* ── EARS ── */}
      <ellipse cx="35" cy="68" rx="8" ry="10" fill="#ebb88a"/>
      <ellipse cx="125" cy="68" rx="8" ry="10" fill="#ebb88a"/>
      <ellipse cx="35" cy="68" rx="5" ry="7" fill="#e0a878"/>
      <ellipse cx="125" cy="68" rx="5" ry="7" fill="#e0a878"/>

      {/* ── HAIR ── */}
      {/* back/base layer */}
      <path d="M35,65 Q35,18 80,16 Q125,18 125,65 L122,50 Q110,8 80,8 Q50,8 38,50Z"
        fill="#2e1f0e"/>
      {/* top hair with texture */}
      <path d="M42,42 Q50,10 80,8 Q110,10 118,42 Q110,30 80,28 Q50,30 42,42Z" fill="#3d2a14"/>
      {/* hair highlight */}
      <path d="M60,14 Q80,10 100,14 Q90,18 80,17 Q70,18 60,14Z" fill="#4a3520" opacity="0.6"/>
      {/* side fade - left */}
      <path d="M35,65 L38,50 L44,42 L40,55Z" fill="#1a100600" opacity="0"/>
      <path d="M36,72 Q36,55 40,45 Q37,55 37,70Z" fill="#2e1f0e"/>
      {/* side fade - right */}
      <path d="M124,72 Q124,55 120,45 Q123,55 123,70Z" fill="#2e1f0e"/>
      {/* sideburns */}
      <path d="M37,72 Q36,82 38,90 L42,88 Q40,80 39,70Z" fill="#2e1f0e"/>
      <path d="M123,72 Q124,82 122,90 L118,88 Q120,80 121,70Z" fill="#2e1f0e"/>

      {/* ── EYEBROWS ── */}
      <path d="M50,57 Q62,52 70,55" stroke="#2e1f0e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M90,55 Q98,52 110,57" stroke="#2e1f0e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>

      {/* ── EYES ── */}
      {/* eye whites */}
      <ellipse cx="62" cy="67" rx="11" ry="9" fill="#fff"/>
      <ellipse cx="98" cy="67" rx="11" ry="9" fill="#fff"/>
      {/* upper eyelid shade */}
      <path d="M51,63 Q62,58 73,63" fill="#e8a878" opacity="0.3"/>
      <path d="M87,63 Q98,58 109,63" fill="#e8a878" opacity="0.3"/>
      {/* irises */}
      <circle cx="62" cy="68" r="7" fill="#3d2810"/>
      <circle cx="98" cy="68" r="7" fill="#3d2810"/>
      {/* pupils */}
      <circle cx="62" cy="68" r="4" fill="#1a0e05"/>
      <circle cx="98" cy="68" r="4" fill="#1a0e05"/>
      {/* eye shine */}
      <circle cx="65" cy="65" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="101" cy="65" r="2" fill="#fff" opacity="0.8"/>
      {/* upper eyelid line */}
      <path d="M51,63 Q62,59 73,63" stroke="#2e1f0e" strokeWidth="1.5" fill="none"/>
      <path d="M87,63 Q98,59 109,63" stroke="#2e1f0e" strokeWidth="1.5" fill="none"/>
      {/* lower lash line subtle */}
      <path d="M53,72 Q62,75 71,72" stroke="#c08060" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <path d="M89,72 Q98,75 107,72" stroke="#c08060" strokeWidth="0.8" fill="none" opacity="0.5"/>

      {/* ── NOSE ── */}
      <path d="M76,72 Q74,84 70,88 Q76,92 80,91 Q84,92 90,88 Q86,84 84,72"
        stroke="#d4956a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="73" cy="87" rx="4" ry="2.5" fill="#d4956a" opacity="0.4"/>
      <ellipse cx="87" cy="87" rx="4" ry="2.5" fill="#d4956a" opacity="0.4"/>

      {/* ── MOUTH ── */}
      {/* lips */}
      <path d="M67,97 Q80,103 93,97" stroke="#c07050" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M70,97 Q80,100 90,97" fill="#d4856a" opacity="0.5"/>
      {/* upper lip line */}
      <path d="M70,96 Q75,93 80,95 Q85,93 90,96" stroke="#c07050" strokeWidth="1" fill="none"/>

      {/* ── STUBBLE ── */}
      {/* chin area */}
      <path d="M55,95 Q80,115 105,95 Q100,108 80,112 Q60,108 55,95Z" fill="#8a6040" opacity="0.18"/>
      {/* cheek stubble dots */}
      <circle cx="50" cy="88" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="54" cy="93" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="48" cy="94" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="52" cy="99" r="1" fill="#7a5030" opacity="0.25"/>
      <circle cx="110" cy="88" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="106" cy="93" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="112" cy="94" r="1" fill="#7a5030" opacity="0.3"/>
      <circle cx="108" cy="99" r="1" fill="#7a5030" opacity="0.25"/>
      {/* moustache area */}
      <path d="M68,94 Q80,97 92,94" stroke="#7a5030" strokeWidth="1" fill="none" opacity="0.3"/>

      {/* ── EARRING (subtle) ── */}
      <circle cx="33" cy="76" r="2" fill="#d4af37" opacity="0.8"/>

      {/* ── PIERCINGS (chin) ── */}
      <circle cx="80" cy="104" r="1.5" fill="#d4af37" opacity="0.7"/>
    </svg>
  )
}
