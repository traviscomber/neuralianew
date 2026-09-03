export function RecognitionSection04Artwork({ label }: { label: string }) {
  const cyan = '#27d5e8'
  const cyanSoft = '#159aae'
  const white = '#e8efef'
  const muted = '#8fa6a8'
  const dim = '#0a2b31'

  return (
    <svg
      viewBox="0 0 640 1137"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{label}</title>
      <defs>
        <linearGradient id="r04-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={cyanSoft} stopOpacity=".45" />
          <stop offset=".5" stopColor={cyan} stopOpacity="1" />
          <stop offset="1" stopColor={cyanSoft} stopOpacity=".45" />
        </linearGradient>
        <filter id="r04-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="r04-grid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={cyan} strokeOpacity=".035" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="1137" rx="14" fill="#020708" />
      <rect width="640" height="1137" rx="14" fill="url(#r04-grid)" />

      <g fill="none" stroke={cyan} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* TOP: edge capture + cougar detection */}
        <g transform="translate(32 34)" filter="url(#r04-glow)">
          <rect x="0" y="20" width="82" height="116" rx="10" />
          <rect x="10" y="10" width="62" height="124" rx="8" strokeOpacity=".65" />
          <circle cx="41" cy="52" r="18" />
          <circle cx="41" cy="52" r="7" />
          <circle cx="41" cy="99" r="16" />
          <circle cx="41" cy="99" r="6" />
          <path d="M41 136v36m-22 0h44" />
          <path d="M82 76L210 40M82 76l128 0M82 76l128 40" strokeOpacity=".6" strokeDasharray="4 6" />
        </g>

        <g transform="translate(230 44)" filter="url(#r04-glow)">
          <path d="M23 79c15-42 48-65 96-68 35-2 76 11 106 30 25 16 51 23 82 18 9 30-2 59-33 74-30 16-68 17-110 3l-26 43-12-5 10-47-51-4-25 41-13-7 15-43-31-9c-19-6-31-15-38-26z" />
          <path d="M31 74l-22-20 26-5 16-25 17 29M307 59c23 2 36-4 42-19 7 25-4 42-31 49" />
          <path d="M40 66l45 57 40-85 39 98 42-95 44 78 46-53" strokeOpacity=".45" />
          <path d="M59 48l49 26 56-30 42 41 44-18 35 44" strokeOpacity=".45" />
        </g>

        <g transform="translate(432 50)">
          <rect width="174" height="125" rx="10" strokeOpacity=".8" />
          <path d="M14 39h146" strokeOpacity=".35" />
          <path d="M18 93c16 0 21-20 35-11 11 8 16-17 27-9 9 7 14-24 25-17 11 7 12 28 25 20 11-7 18-29 30-18" />
          <text x="16" y="26" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="14" letterSpacing="1.5">REAL-TIME DETECTION</text>
          <text x="16" y="64" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="22" letterSpacing="1.2">COUGAR • 98.7%</text>
        </g>

        {/* MID: identity + classification */}
        <g transform="translate(28 230)" filter="url(#r04-glow)">
          <path d="M62 28l32 13 41-12 42 12 34-14 8 46-13 59-33 44-38 17-39-16-34-46-13-59z" />
          <path d="M62 28l23 48 50-47 48 47 28-49M84 76l51 117 48-117M61 116h151M75 149l60-120 60 120" strokeOpacity=".5" />
          <path d="M85 94c12-13 29-13 41 0M147 94c12-13 29-13 41 0" />
          <circle cx="106" cy="97" r="7" />
          <circle cx="168" cy="97" r="7" />
          <path d="M116 139l19 10 19-10M120 157c10 8 20 11 30 0" />
          <path d="M52 128l-42 11M55 143l-45 21M217 128l42 11M214 143l45 21" strokeOpacity=".65" />
          <path d="M8 12v-8h22M250 4h22v8M8 188v8h22M250 196h22v-8" strokeOpacity=".55" />
        </g>

        <g transform="translate(330 238)">
          <text x="0" y="0" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="24" letterSpacing="2">COUGAR</text>
          <rect x="0" y="22" width="212" height="11" rx="2" fill={dim} stroke="none" />
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={i} x={i * 15} y="22" width="11" height="11" rx="1" fill={cyan} stroke="none" opacity={i < 13 ? .95 : .62} />
          ))}
          <text x="225" y="33" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="19">98.7%</text>

          <g transform="translate(0 74)">
            <path d="M20 41c2-18 15-30 31-30s29 12 31 30c-13 4-22 12-31 25-9-13-18-21-31-25z" />
            <path d="M25 17L8 7l8 23M77 17L94 7l-8 23" />
            <text x="0" y="92" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="16">COW</text>
            <rect x="0" y="105" width="62" height="7" fill={dim} stroke="none" />
            <rect x="0" y="105" width="12" height="7" fill={cyan} stroke="none" />
            <text x="72" y="112" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="14">12%</text>
          </g>

          <g transform="translate(137 74)">
            <path d="M27 42c4-17 15-29 29-29s25 12 29 29c-9 4-18 11-29 23-11-12-20-19-29-23z" />
            <path d="M39 18L26 2M42 16L36 0M73 18L86 2M70 16L76 0" />
            <text x="0" y="92" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="16">CHILEAN DEER</text>
            <rect x="0" y="105" width="62" height="7" fill={dim} stroke="none" />
            <rect x="0" y="105" width="5" height="7" fill={cyan} stroke="none" />
            <text x="72" y="112" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="14">4%</text>
          </g>
        </g>

        {/* METRICS ROW */}
        <g transform="translate(28 470)">
          <rect width="584" height="190" rx="10" strokeOpacity=".26" />
          <path d="M194 16v158M342 16v158" strokeOpacity=".22" />

          <g transform="translate(20 28)">
            <path d="M0 95H132M12 89V65h20v24M45 89V50h20v39M78 89V38h20v51M111 89V20h20v69" strokeOpacity=".7" />
            <path d="M10 72l32-27 32-12 28 15 29-31" />
            <circle cx="10" cy="72" r="3" fill={cyan} stroke="none" />
            <circle cx="42" cy="45" r="3" fill={cyan} stroke="none" />
            <circle cx="74" cy="33" r="3" fill={cyan} stroke="none" />
            <circle cx="102" cy="48" r="3" fill={cyan} stroke="none" />
            <circle cx="131" cy="17" r="3" fill={cyan} stroke="none" />
            <text x="8" y="130" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="29">98.7%</text>
            <text x="8" y="152" fill={muted} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="12" letterSpacing="1">DETECTION CONFIDENCE</text>
          </g>

          <g transform="translate(218 32)">
            <text x="17" y="0" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.3">DECISION</text>
            <circle cx="52" cy="78" r="42" strokeOpacity=".75" />
            <circle cx="52" cy="78" r="31" strokeOpacity=".3" />
            <path d="M33 79l13 14 28-34" strokeWidth="6" />
          </g>

          <g transform="translate(365 32)">
            <text x="0" y="0" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.3">ALERT DELIVERY</text>
            <rect x="0" y="34" width="54" height="72" rx="6" />
            <path d="M12 52h30M12 66h30M12 80h22" strokeOpacity=".65" />
            <path d="M61 70h25m-8-8 8 8-8 8" />
            <rect x="96" y="47" width="54" height="48" rx="9" />
            <circle cx="123" cy="71" r="12" />
            <path d="M115 67c5 7 8 9 16 12" />
            <path d="M158 70h25m-8-8 8 8-8 8" />
            <rect x="193" y="37" width="38" height="68" rx="7" />
            <text x="0" y="132" fill={muted} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="12">REPORT</text>
            <text x="93" y="132" fill={muted} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="12">MESSAGE</text>
            <text x="190" y="132" fill={muted} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="12">MOBILE</text>
          </g>
        </g>

        {/* EVENT + CHILE */}
        <g transform="translate(28 690)">
          <path d="M123 13l10 16-6 20 12 26-11 19 8 26-10 22 6 29-13 24 7 31-12 27 5 32-13 22 8 24-11 21 6 22-13 15" strokeWidth="3" />
          <path d="M121 24l-21 22 25 20-23 22 26 22-27 24 25 23-24 24 23 22-24 27 20 19-23 23 20 21-18 25" strokeOpacity=".45" />
          <circle cx="112" cy="252" r="16" fill={cyan} stroke="none" />
          <circle cx="112" cy="252" r="6" fill="#020708" stroke="none" />

          <g transform="translate(220 0)">
            <rect width="364" height="152" rx="10" strokeOpacity=".42" />
            <circle cx="42" cy="36" r="22" />
            <path d="M32 35h20M35 28h14M35 42h14M36 20v7M48 20v7" />
            <text x="76" y="42" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="23" letterSpacing="1">NEW EVENT</text>
            <text x="76" y="79" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="18">MAY 12, 2025</text>
            <text x="76" y="106" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="18">07:32</text>
            <text x="76" y="133" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="18">PATAGONIA, CL</text>
          </g>

          <g transform="translate(220 174)">
            <rect width="364" height="146" rx="10" strokeOpacity=".42" />
            <text x="20" y="28" fill={cyan} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="17" letterSpacing="1">ACTIVITY TREND</text>
            <path d="M24 116H338" strokeOpacity=".25" />
            <path d="M30 112l57-24 58-13 58-20 59-14 57-27" />
            <circle cx="30" cy="112" r="3" fill={cyan} stroke="none" />
            <circle cx="87" cy="88" r="3" fill={cyan} stroke="none" />
            <circle cx="145" cy="75" r="3" fill={cyan} stroke="none" />
            <circle cx="203" cy="55" r="3" fill={cyan} stroke="none" />
            <circle cx="262" cy="41" r="3" fill={cyan} stroke="none" />
            <circle cx="319" cy="14" r="3" fill={cyan} stroke="none" />
            <path d="M57 116v-14h22v14M112 116V92h22v24M167 116V82h22v34M222 116V67h22v49M277 116V51h22v65" strokeOpacity=".65" />
          </g>
        </g>

        {/* BOTTOM CONNECTED SYSTEM */}
        <g transform="translate(40 1043)" filter="url(#r04-glow)">
          <path d="M55 34h82l16-14h77l14 14h84l14-14h80l16 14h66" stroke="url(#r04-line)" />
          <circle cx="47" cy="34" r="34" />
          <circle cx="184" cy="34" r="34" />
          <circle cx="321" cy="34" r="34" />
          <circle cx="458" cy="34" r="34" />
          <rect x="34" y="21" width="26" height="26" rx="3" />
          <path d="M40 14v7M47 14v7M54 14v7M40 47v7M47 47v7M54 47v7M27 27h7M27 34h7M27 41h7M60 27h7M60 34h7M60 41h7" />
          <path d="M168 40c0-10 8-18 18-18 7 0 13 3 16 9 9-1 16 6 16 15h-50z" />
          <path d="M306 48V34M319 48V24M332 48V14M345 48V29" />
          <circle cx="448" cy="27" r="8" /><circle cx="468" cy="27" r="8" /><circle cx="458" cy="44" r="8" />
          <text x="30" y="83" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.2">API</text>
          <text x="157" y="83" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.2">CLOUD</text>
          <text x="285" y="83" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.2">ANALYTICS</text>
          <text x="429" y="83" fill={white} stroke="none" fontFamily="Rajdhani, sans-serif" fontSize="15" letterSpacing="1.2">PARTNERS</text>
        </g>
      </g>
    </svg>
  )
}
