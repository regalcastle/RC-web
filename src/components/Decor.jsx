/* Gold line-art botanicals used as soft decoration (pure SVG). */

function Blossom({ cx, cy, r = 20, petals = 6, rotate = 0 }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      {Array.from({ length: petals }).map((_, i) => (
        <ellipse key={i} cx="0" cy={-r * 0.55} rx={r * 0.28} ry={r * 0.55} transform={`rotate(${(360 / petals) * i})`} />
      ))}
      <circle r={r * 0.12} />
    </g>
  )
}

function Leaf({ x, y, size = 26, rotate = 0 }) {
  return (
    <path
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size / 26})`}
      d="M0 0 C 6 -10 18 -14 28 -12 C 24 -2 12 6 0 0 Z M0 0 L 20 -9"
    />
  )
}

/** Larger flower on a curved stem — "Celebrations Curated with Heart." */
export function FlowerSprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 150" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M26 148 C 40 120 52 96 78 62" />
      <path d="M46 112 C 36 106 28 98 24 88 C 36 88 44 96 46 112Z" />
      <path d="M58 90 C 70 90 82 96 90 108 C 76 110 64 104 58 90Z" />
      <Blossom cx={82} cy={50} r={30} petals={7} rotate={12} />
      <Blossom cx={36} cy={44} r={15} petals={6} rotate={-18} />
      <Blossom cx={104} cy={96} r={11} petals={5} rotate={30} />
      <path d="M36 59 C 38 72 44 84 50 92" />
    </svg>
  )
}

/** Long faint branch for section backgrounds. */
export function BranchDecor({ className = '' }) {
  return (
    <svg viewBox="0 0 320 420" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 410 C 60 330 110 260 150 200 C 190 140 230 90 300 30" />
      <Leaf x={52} y={340} size={34} rotate={-30} />
      <Leaf x={84} y={296} size={30} rotate={20} />
      <Leaf x={112} y={252} size={32} rotate={-40} />
      <Leaf x={142} y={210} size={30} rotate={15} />
      <Leaf x={176} y={164} size={30} rotate={-45} />
      <Leaf x={214} y={118} size={28} rotate={10} />
      <Blossom cx={70} cy={262} r={26} petals={7} rotate={8} />
      <Blossom cx={196} cy={236} r={20} petals={6} rotate={-14} />
      <Blossom cx={262} cy={74} r={22} petals={7} rotate={22} />
      <path d="M120 270 C 100 268 92 266 84 262" />
      <path d="M170 196 C 184 210 192 222 196 236" />
    </svg>
  )
}

/** Animated line-art floral spray: stems draw themselves, blossoms sway and petals drift. */
export function AnimatedFloral({ className = '' }) {
  return (
    <svg viewBox="0 0 260 360" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={`floral-anim ${className}`} aria-hidden="true">
      {/* stems draw in, then keep a gentle sway */}
      <g className="floral-sway">
        <path className="floral-draw" pathLength="1" d="M30 352 C 52 290 84 238 128 190 C 160 154 190 118 214 70" />
        <path className="floral-draw floral-d2" pathLength="1" d="M62 330 C 90 316 118 306 150 300" />
        <path className="floral-draw floral-d3" pathLength="1" d="M96 262 C 70 248 54 230 46 208" />
        <path className="floral-draw floral-d3" pathLength="1" d="M142 206 C 170 206 196 214 216 232" />
      </g>
      {/* leaves */}
      <g className="floral-sway floral-sway-b">
        <Leaf x={58} y={300} size={34} rotate={-35} />
        <Leaf x={84} y={262} size={30} rotate={25} />
        <Leaf x={116} y={220} size={32} rotate={-40} />
        <Leaf x={150} y={176} size={30} rotate={20} />
      </g>
      {/* blossoms bloom and breathe */}
      <g className="floral-bloom">
        <Blossom cx={46} cy={196} r={26} petals={7} rotate={10} />
      </g>
      <g className="floral-bloom floral-bloom-b">
        <Blossom cx={220} cy={224} r={22} petals={6} rotate={-14} />
      </g>
      <g className="floral-bloom floral-bloom-c">
        <Blossom cx={214} cy={62} r={32} petals={8} rotate={18} />
      </g>
      <g className="floral-bloom floral-bloom-b">
        <Blossom cx={152} cy={296} r={16} petals={5} rotate={30} />
      </g>
      {/* drifting petals */}
      <ellipse className="floral-petal" cx="120" cy="120" rx="4" ry="9" />
      <ellipse className="floral-petal floral-petal-b" cx="170" cy="60" rx="3.5" ry="8" />
      <ellipse className="floral-petal floral-petal-c" cx="70" cy="150" rx="3.5" ry="8" />
    </svg>
  )
}
