export default function NatureSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Rolling hills */}
      <path
        d="M0,280 C60,240 120,260 180,240 C240,220 300,250 360,230 C420,210 480,245 540,225 C600,205 660,240 720,220 C780,200 840,235 900,215 C960,195 1020,230 1080,210 C1140,190 1200,225 1260,205 C1320,185 1380,215 1440,200 L1440,320 L0,320 Z"
        fill="#0C1F3F"
        opacity="0.5"
      />
      <path
        d="M0,290 C80,265 160,285 240,268 C320,251 400,275 480,260 C560,245 640,272 720,258 C800,244 880,268 960,255 C1040,242 1120,265 1200,252 C1280,239 1360,262 1440,250 L1440,320 L0,320 Z"
        fill="#0C1F3F"
        opacity="0.75"
      />
      {/* Tree silhouettes */}
      {/* Left cluster */}
      <g opacity="0.7" fill="#0C2040">
        <path d="M40,280 L40,310 L55,310 L55,280 Z" />
        <polygon points="47,230 20,285 75,285" />
        <polygon points="47,250 22,295 72,295" />

        <path d="M90,285 L90,310 L103,310 L103,285 Z" />
        <polygon points="96,240 72,290 120,290" />
        <polygon points="96,258 74,298 118,298" />

        <path d="M140,275 L140,310 L155,310 L155,275 Z" />
        <polygon points="147,220 118,280 177,280" />
        <polygon points="147,245 120,292 174,292" />

        <path d="M190,288 L190,310 L202,310 L202,288 Z" />
        <polygon points="196,250 176,294 216,294" />
      </g>

      {/* Right cluster */}
      <g opacity="0.7" fill="#0C2040">
        <path d="M1250,282 L1250,310 L1263,310 L1263,282 Z" />
        <polygon points="1256,235 1232,286 1281,286" />
        <polygon points="1256,255 1234,296 1278,296" />

        <path d="M1300,278 L1300,310 L1315,310 L1315,278 Z" />
        <polygon points="1307,225 1278,282 1336,282" />
        <polygon points="1307,248 1281,292 1334,292" />

        <path d="M1355,285 L1355,310 L1368,310 L1368,285 Z" />
        <polygon points="1361,245 1338,290 1384,290" />

        <path d="M1400,280 L1400,310 L1413,310 L1413,280 Z" />
        <polygon points="1406,230 1380,284 1432,284" />
        <polygon points="1406,252 1382,294 1430,294" />
      </g>

      {/* Mid left trees */}
      <g opacity="0.5" fill="#0A1A35">
        <path d="M320,290 L320,310 L330,310 L330,290 Z" />
        <polygon points="325,255 308,294 342,294" />

        <path d="M360,285 L360,310 L373,310 L373,285 Z" />
        <polygon points="366,242 344,288 388,288" />
        <polygon points="366,262 346,298 386,298" />
      </g>

      {/* Mid right trees */}
      <g opacity="0.5" fill="#0A1A35">
        <path d="M1060,288 L1060,310 L1070,310 L1070,288 Z" />
        <polygon points="1065,255 1048,292 1082,292" />

        <path d="M1100,283 L1100,310 L1113,310 L1113,283 Z" />
        <polygon points="1106,240 1084,287 1128,287" />
        <polygon points="1106,260 1086,298 1126,298" />
      </g>

      {/* Subtle farm field lines */}
      <path
        d="M500,305 Q600,300 700,305 Q800,310 900,305"
        stroke="#38BDF8"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}
