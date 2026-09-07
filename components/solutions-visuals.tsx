import type { SVGProps } from "react"

type P = SVGProps<SVGSVGElement>

const stroke = { vectorEffect: "non-scaling-stroke" as const }

export function HeroSystemMap(props: P) {
  return (
    <svg viewBox="0 0 760 470" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1" opacity=".34" {...stroke}>
        <path d="M42 400 330 256 718 404 430 458 42 400Z"/>
        {Array.from({ length: 8 }).map((_, i) => <path key={`h${i}`} d={`M${74 + i * 42} 384 ${410 + i * 27} 445`} />)}
        {Array.from({ length: 7 }).map((_, i) => <path key={`v${i}`} d={`M${128 + i * 75} 358 ${347 + i * 44} 427`} />)}
      </g>
      {[0,1,2,3].map((i) => {
        const x = 82 + i * 160
        const labels = ["DATA","WORKFLOW","INTELLIGENCE","ACTION"]
        return (
          <g key={labels[i]} transform={`translate(${x} 0)`}>
            <path d="M0 78 112 56 112 350 0 376Z" fill="currentColor" opacity=".035"/>
            <path d="M0 78 112 56M112 56V350M112 350 0 376M0 376V78" stroke="currentColor" strokeWidth="1.1" opacity=".48" {...stroke}/>
            <text x="8" y="46" fill="currentColor" fontSize="12" letterSpacing="2.1">{labels[i]}</text>
          </g>
        )
      })}
      <g transform="translate(100 198)" stroke="currentColor" strokeWidth="1" opacity=".9" {...stroke}>
        {Array.from({ length: 34 }).map((_, i) => {
          const x = (i * 23) % 112
          const y = 14 + ((i * 47) % 122)
          return <rect key={i} x={x} y={y} width={i % 4 === 0 ? 7 : 4} height={i % 4 === 0 ? 7 : 4} fill="currentColor" opacity={.2 + (i % 5) * .12}/>
        })}
        <path d="M0 126C22 104 31 77 52 86s28 20 58-16" opacity=".35"/>
      </g>
      <g transform="translate(258 188)" stroke="currentColor" strokeWidth="1.2" {...stroke}>
        <circle cx="20" cy="38" r="4" fill="currentColor"/><circle cx="66" cy="22" r="4"/><circle cx="98" cy="70" r="4"/><circle cx="52" cy="104" r="4"/>
        <path d="M24 36 62 24M69 26 95 66M95 74 56 101M49 100 23 42" opacity=".8"/>
        <path d="M20 38H5M66 22V4M98 70h15M52 104v17" opacity=".35"/>
      </g>
      <g transform="translate(414 176)" stroke="currentColor" strokeWidth="1" {...stroke}>
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d={`M0 ${126-i*7} C26 ${86-i*4},48 ${135-i*9},74 ${94-i*3} S116 ${90-i*4},130 ${46+i*5}`} opacity={.22 + i*.06}/>
        ))}
        <circle cx="72" cy="84" r="5" fill="currentColor"/>
        {Array.from({ length: 18 }).map((_, i) => <circle key={i} cx={(i*31)%128} cy={24+((i*53)%112)} r={i%3===0?2.2:1.4} fill="currentColor" opacity=".7"/>)}
      </g>
      <g transform="translate(584 180)" stroke="currentColor" strokeWidth="1" {...stroke}>
        {[18,34,50,66].map(r => <circle key={r} cx="56" cy="74" r={r} opacity=".45"/>)}
        <path d="M56 4v140M-14 74h140" opacity=".22"/><circle cx="56" cy="74" r="5" fill="currentColor"/><circle cx="94" cy="43" r="3" fill="currentColor"/>
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity=".28" {...stroke}>
        <path d="M128 106h104M288 106h104M448 106h104" strokeDasharray="3 8"/>
      </g>
    </svg>
  )
}

function BaseIcon({ children, ...props }: P & { children: React.ReactNode }) {
  return <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" {...props}>{children}</svg>
}

export function VisibilityIcon(props: P) { return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.35" {...stroke}>{Array.from({length:18}).map((_,i)=><rect key={i} x={15+(i*29)%86} y={15+(i*47)%84} width={i%4===0?10:6} height={i%4===0?10:6} opacity={.28+(i%4)*.16}/>) }<path d="M22 84 43 63 61 75 82 45 100 56" opacity=".55"/><circle cx="43" cy="63" r="3" fill="currentColor"/><circle cx="82" cy="45" r="3" fill="currentColor"/></g></BaseIcon> }
export function ManualIcon(props: P) { return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.35" {...stroke}><path d="M10 75C29 31 45 84 62 52s30 8 48-18"/><path d="M10 88C30 53 45 95 64 67s27 0 46-12" opacity=".45"/><circle cx="16" cy="72" r="3" fill="currentColor"/><circle cx="58" cy="58" r="3" fill="currentColor"/><circle cx="105" cy="38" r="3" fill="currentColor"/><path d="M23 20v13M84 18v14M104 76v12" opacity=".35"/></g></BaseIcon> }
export function SlowIcon(props: P) { return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}>{[18,31,44].map(r=><circle key={r} cx="60" cy="60" r={r} opacity=".5"/>)}<path d="M60 8v104M8 60h104" opacity=".24"/><path d="M60 60 91 42"/><circle cx="60" cy="60" r="4" fill="currentColor"/><circle cx="91" cy="42" r="3" fill="currentColor"/></g></BaseIcon> }
export function TraceIcon(props: P) { return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.2" {...stroke}><rect x="20" y="22" width="70" height="72"/><rect x="30" y="12" width="70" height="72" opacity=".45"/><path d="M38 42h36M38 54h46M38 66h29"/><path d="m72 77 9 9 17-20" strokeWidth="1.6"/><circle cx="96" cy="31" r="4"/></g></BaseIcon> }

export function IntelligenceIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><rect x="16" y="24" width="88" height="60" rx="1"/><path d="M24 74c12-18 22 2 32-18 11-22 19 18 31-10"/><path d="M26 38h31M26 47h20"/><path d="M44 93h32M60 84v9"/></g></BaseIcon>}
export function WorkflowIconCustom(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><circle cx="60" cy="26" r="7"/><circle cx="26" cy="60" r="7"/><circle cx="94" cy="60" r="7"/><circle cx="60" cy="94" r="7"/><circle cx="60" cy="60" r="7" fill="currentColor" opacity=".15"/><path d="M60 33v20M33 60h20M67 60h20M60 67v20"/></g></BaseIcon>}
export function AssistantIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><rect x="18" y="28" width="70" height="48" rx="2"/><path d="m34 76-10 14 24-14"/><path d="M32 44h42M32 55h30"/><circle cx="93" cy="66" r="11"/><path d="M89 66h8M93 62v8"/></g></BaseIcon>}
export function DocumentIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M26 16h50l18 18v70H26z"/><path d="M76 16v18h18"/><path d="M38 46h38M38 58h32M38 70h25"/><circle cx="80" cy="80" r="15"/><path d="m91 91 12 12"/></g></BaseIcon>}
export function RecognitionIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M23 40V23h17M80 23h17v17M97 80v17H80M40 97H23V80"/><path d="M38 63c5-18 39-22 44 0-6 21-37 24-44 0Z"/><circle cx="60" cy="61" r="8"/><path d="M60 34v8M60 82v8M34 60h8M78 60h8" opacity=".4"/></g></BaseIcon>}
export function PlatformIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="m60 15 20 11v22L60 59 40 48V26z"/><path d="m30 56 20 11v22L30 100 10 89V67zM90 56l20 11v22L90 100 70 89V67z"/><path d="M60 59v18M50 77H30M70 77h20" opacity=".5"/></g></BaseIcon>}

export function RetailIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M15 28h14l9 45h48l12-32H36"/><circle cx="48" cy="88" r="7"/><circle cx="82" cy="88" r="7"/><path d="M45 50h39M54 38v33M70 38v33" opacity=".4"/></g></BaseIcon>}
export function MiningIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.2" {...stroke}><path d="m14 86 29-48 18 26 17-35 28 57Z"/><path d="M31 86 48 58l12 12 17-26 15 42" opacity=".45"/><circle cx="77" cy="29" r="3" fill="currentColor"/></g></BaseIcon>}
export function ManufacturingIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M18 95V53l22 12V49l23 13V45l21 12V25h10v70Z"/><path d="M31 77h10v10H31zM54 77h10v10H54zM77 77h10v10H77z"/></g></BaseIcon>}
export function HospitalityIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M18 100V38h22V20h40v18h22v62"/><path d="M28 50h10v10H28zM50 32h10v10H50zM70 32h10v10H70zM82 50h10v10H82zM28 70h10v10H28zM82 70h10v10H82z"/><path d="M48 100V70h24v30"/></g></BaseIcon>}
export function LogisticsIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M12 38h57v45H12zM69 52h22l17 19v12H69z"/><circle cx="32" cy="88" r="8"/><circle cx="88" cy="88" r="8"/><path d="M22 51h37M22 63h37" opacity=".4"/></g></BaseIcon>}
export function RegulatedIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.25" {...stroke}><path d="M60 14 99 30v28c0 23-13 38-39 50-26-12-39-27-39-50V30Z"/><path d="m40 60 14 14 27-31"/></g></BaseIcon>}

export function PilotIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.2" {...stroke}><circle cx="60" cy="32" r="10"/><circle cx="28" cy="76" r="10"/><circle cx="92" cy="76" r="10"/><path d="M55 41 34 67M65 41 86 67"/><circle cx="60" cy="60" r="3" fill="currentColor"/></g></BaseIcon>}
export function ProductionIcon(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.2" {...stroke}>{[0,1,2].map(i=><path key={i} d={`M60 ${22+i*24} 94 ${38+i*24} 60 ${54+i*24} 26 ${38+i*24}Z`}/>) }<path d="M60 54v48" opacity=".35"/></g></BaseIcon>}
export function ModernizeIconVisual(props:P){return <BaseIcon {...props}><g stroke="currentColor" strokeWidth="1.2" {...stroke}>{[0,1,2].map(i=><path key={i} d={`M50 ${30+i*20} 78 ${43+i*20} 50 ${56+i*20} 22 ${43+i*20}Z`}/>) }<path d="M68 28h28v28M96 28 70 54" strokeWidth="1.6"/></g></BaseIcon>}

export function SelectorMapVisual(props:P){return <svg viewBox="0 0 420 300" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth="1" {...stroke}><path d="M42 214 188 128 360 207 210 278Z" opacity=".38"/><path d="M42 214 210 278M92 185 257 250M139 159 306 227M188 128 360 207" opacity=".18"/><path d="M88 186v46l52 24v-47zM170 143v72l61 28v-71zM261 166v55l58 27v-58z" fill="currentColor" opacity=".035"/><path d="M88 186 140 210l49-28-51-24ZM170 143l61 29 50-29-59-28ZM261 166l58 24 46-25-56-23" opacity=".45"/>{Array.from({length:16}).map((_,i)=><circle key={i} cx={65+(i*43)%270} cy={155+((i*31)%92)} r={i%5===0?3:1.8} fill="currentColor" opacity=".75"/>)}<path d="M202 102h128M285 84v100" opacity=".18"/><path d="M330 103h50M330 130h50M330 158h50M330 186h50"/><text x="384" y="106" fill="currentColor" fontSize="10">DATA</text><text x="384" y="133" fill="currentColor" fontSize="10">PEOPLE</text><text x="384" y="161" fill="currentColor" fontSize="10">PLACES</text><text x="384" y="189" fill="currentColor" fontSize="10">EVENTS</text></g></svg>}

export function FinalWireframe(props:P){return <svg viewBox="0 0 520 320" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth="1" {...stroke}><path d="M72 238 235 144 444 228 276 305Z" opacity=".3"/><path d="M128 206v-89l94-54v109M222 172l92-53v100M314 219l79-44v88" opacity=".28"/><rect x="143" y="101" width="62" height="44" opacity=".42"/><rect x="250" y="92" width="70" height="48" opacity=".42"/><rect x="337" y="148" width="58" height="42" opacity=".42"/><path d="M151 116h36M151 126h24M260 108h43M260 119h29M348 163h32M348 173h22" opacity=".5"/><path d="M95 231c52-31 70-7 109-32s62-3 106-27 69-7 110 11" opacity=".55"/><circle cx="205" cy="199" r="4" fill="currentColor"/><circle cx="311" cy="171" r="4" fill="currentColor"/></g></svg>}
