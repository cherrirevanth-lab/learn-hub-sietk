import React from "react";

/**
 * Extra miscellaneous diagrams for SIETK question-bank answers.
 * Covers Managerial Economics / Accounting, Design Thinking and Probability.
 * Self-contained SVG components following the pattern used in ../Diagrams.jsx.
 */

const C = {
  line: "#94a3b8",
  box: "#eef2ff",
  boxStroke: "#6366f1",
  accent: "#06b6d4",
  green: "#10b981",
  amber: "#f59e0b",
  text: "#1e293b",
  sub: "#64748b",
  red: "#f43f5e",
};

function Box({ x, y, w = 100, h = 40, fill = C.box, stroke = C.boxStroke, label, sub, rx = 8 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 3 : h / 2 + 4)}
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill={C.text}
      >
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 11} textAnchor="middle" fontSize="8.5" fill={C.sub}>
          {sub}
        </text>
      )}
    </g>
  );
}

function Card({ x, y, w, h, title, lines, fill = C.box, stroke = C.boxStroke, rx = 8 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + 12} y={y + 17} fontSize="10" fontWeight="700" fill={stroke}>
        {title}
      </text>
      {lines.map((ln, i) => (
        <text key={i} x={x + 12} y={y + 34 + i * 13} fontSize="8.8" fill={C.text}>
          {ln}
        </text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.line, dashed = false, label }) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="1.6"
        strokeDasharray={dashed ? "4 3" : undefined}
        markerEnd="url(#em-arw)"
      />
      {label && (
        <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize="9" fill={C.sub}>
          {label}
        </text>
      )}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker id="em-arw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill={C.line} />
      </marker>
    </defs>
  );
}

function Svg({ children, w = 560, h = 260, title }) {
  return (
    <div className="my-3 rounded-xl border border-slate-200 bg-white overflow-hidden">
      {title && (
        <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-600">
          {title}
        </div>
      )}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxHeight: 300 }} role="img" aria-label={title || "diagram"}>
        <Defs />
        {children}
      </svg>
    </div>
  );
}

// ---------------- MANAGERIAL ECONOMICS / ACCOUNTING ----------------

// 1. Accounting cycle — the seven steps in sequence
const accountingCycle = () => (
  <Svg title="Accounting Cycle — Step-by-Step Flow" w={560} h={245}>
    {[
      ["Source", "documents", 20],
      ["Journal", "chronological record", 155],
      ["Ledger", "account balances", 290],
      ["Trial balance", "debits = credits", 425],
    ].map(([label, sub, x]) => (
      <Box key={label} x={x} y={40} w={115} h={42} label={label} sub={sub} />
    ))}
    <Arrow x1={135} y1={61} x2={155} y2={61} />
    <Arrow x1={270} y1={61} x2={290} y2={61} />
    <Arrow x1={405} y1={61} x2={425} y2={61} />
    <path
      d="M482.5,82 L482.5,110 L140,110 L140,138"
      fill="none"
      stroke={C.line}
      strokeWidth="1.6"
      markerEnd="url(#em-arw)"
    />
    {[
      ["Adjustments", "accruals, depreciation", 80],
      ["Financial", "statements", 240],
      ["Closing", "entries", 400],
    ].map(([label, sub, x]) => (
      <Box key={label} x={x} y={140} w={120} h={42} label={label} sub={sub} fill="#e0f2fe" stroke={C.accent} />
    ))}
    <Arrow x1={200} y1={161} x2={240} y2={161} />
    <Arrow x1={360} y1={161} x2={400} y2={161} />
    <Box x={400} y={206} w={120} h={28} label="Next period" fill="#d1fae5" stroke={C.green} rx={6} />
    <Arrow x1={460} y1={182} x2={460} y2={206} color={C.green} />
    <text x="20" y="224" fontSize="9.5" fill={C.sub}>
      Each step verifies the previous one; errors surface at the trial balance.
    </text>
  </Svg>
);

// 2. Double entry bookkeeping — every transaction has equal debit and credit
const doubleEntry = () => (
  <Svg title="Double Entry Bookkeeping — Debit = Credit" w={560} h={308}>
    <Box x={195} y={12} w={170} h={38} label="Business Transaction" fill="#c7d2fe" />
    <Arrow x1={235} y1={50} x2={140} y2={76} />
    <Arrow x1={325} y1={50} x2={420} y2={76} />
    <Box x={45} y={76} w={180} h={38} label="DEBIT" fill="#e0e7ff" stroke={C.boxStroke} />
    <Box x={335} y={76} w={180} h={38} label="CREDIT" fill="#ccfbf1" stroke={C.green} />
    <Card
      x={45}
      y={122}
      w={180}
      h={68}
      title="Increases:"
      lines={["Assets (cash, stock)", "Expenses", "Drawings"]}
      fill="#f8fafc"
      stroke={C.boxStroke}
    />
    <Card
      x={335}
      y={122}
      w={180}
      h={68}
      title="Increases:"
      lines={["Liabilities (loans)", "Capital", "Revenue"]}
      fill="#f8fafc"
      stroke={C.green}
    />
    <Arrow x1={135} y1={190} x2={135} y2={204} />
    <Arrow x1={425} y1={190} x2={425} y2={204} />
    <Box x={45} y={204} w={180} h={40} label="Debit total = ₹50,000" fill="#e0e7ff" stroke={C.boxStroke} />
    <Box x={335} y={204} w={180} h={40} label="Credit total = ₹50,000" fill="#ccfbf1" stroke={C.green} />
    <text x="280" y="232" textAnchor="middle" fontSize="20" fontWeight="700" fill={C.amber}>
      =
    </text>
    <rect x="70" y="262" width="420" height="34" rx="8" fill="#fef3c7" stroke={C.amber} strokeWidth="1.5" />
    <text x="280" y="284" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>
      {"Assets = Liabilities + Capital   →   50,000 = 20,000 + 30,000"}
    </text>
  </Svg>
);

// ---------------- DESIGN THINKING ----------------

// 3. Design principles — four mini visual panels
const designPrinciples = () => (
  <Svg title="Four Principles of Design" w={560} h={310}>
    {/* Balance */}
    <rect x="20" y="20" width="250" height="130" rx="10" fill="#f8fafc" stroke={C.boxStroke} strokeWidth="1.5" />
    <text x="35" y="39" fontSize="11" fontWeight="700" fill={C.boxStroke}>
      Balance
    </text>
    <polygon points="145,88 126,124 164,124" fill="#c7d2fe" stroke={C.boxStroke} strokeWidth="1.5" />
    <line x1="70" y1="90" x2="220" y2="90" stroke={C.line} strokeWidth="2.5" />
    <circle cx="82" cy="80" r="11" fill={C.boxStroke} />
    <circle cx="208" cy="80" r="11" fill={C.boxStroke} />
    <text x="145" y="142" textAnchor="middle" fontSize="9" fill={C.sub}>
      Equal visual weight on both sides
    </text>

    {/* Contrast */}
    <rect x="290" y="20" width="250" height="130" rx="10" fill="#f8fafc" stroke={C.accent} strokeWidth="1.5" />
    <text x="305" y="39" fontSize="11" fontWeight="700" fill={C.accent}>
      Contrast
    </text>
    <rect x="322" y="66" width="86" height="56" rx="6" fill="#1e293b" />
    <rect x="432" y="76" width="86" height="36" rx="6" fill="#e2e8f0" stroke={C.line} strokeWidth="1.5" />
    <text x="415" y="142" textAnchor="middle" fontSize="9" fill={C.sub}>
      Differences make elements stand out
    </text>

    {/* Emphasis */}
    <rect x="20" y="160" width="250" height="130" rx="10" fill="#f8fafc" stroke={C.green} strokeWidth="1.5" />
    <text x="35" y="179" fontSize="11" fontWeight="700" fill={C.green}>
      Emphasis
    </text>
    {[70, 110, 190, 230].map((cx) => (
      <circle key={cx} cx={cx} cy="226" r="8" fill="#cbd5e1" />
    ))}
    <circle cx="150" cy="226" r="21" fill="none" stroke={C.amber} strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="150" cy="226" r="14" fill={C.amber} />
    <text x="145" y="282" textAnchor="middle" fontSize="9" fill={C.sub}>
      One element draws the eye first
    </text>

    {/* Movement */}
    <rect x="290" y="160" width="250" height="130" rx="10" fill="#f8fafc" stroke={C.amber} strokeWidth="1.5" />
    <text x="305" y="179" fontSize="11" fontWeight="700" fill={C.amber}>
      Movement
    </text>
    <path
      d="M318,238 Q378,194 430,226 T524,214"
      fill="none"
      stroke={C.accent}
      strokeWidth="2.5"
      markerEnd="url(#em-arw)"
    />
    {[
      [318, 238],
      [378, 213],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill={C.amber} />
    ))}
    <text x="415" y="282" textAnchor="middle" fontSize="9" fill={C.sub}>
      The eye follows a guiding path
    </text>
  </Svg>
);

function PersonaCard({ x, title, name, role, demo, goals, frustrations, fill, stroke, dashed }) {
  const cx = x + 80;
  const lx = x + 12;
  return (
    <g>
      <rect
        x={x}
        y={12}
        width={160}
        height={268}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "5 3" : undefined}
      />
      <text x={cx} y={32} textAnchor="middle" fontSize="9" fontWeight="700" fill={C.sub}>
        {title}
      </text>
      <circle cx={cx} cy={68} r={23} fill="#e2e8f0" stroke={stroke} strokeWidth="1.5" />
      <circle cx={cx} cy={62} r={7} fill={stroke} opacity="0.55" />
      <path d={`M${cx - 13},88 Q${cx},72 ${cx + 13},88`} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <text x={cx} y={112} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>
        {name}
      </text>
      <text x={cx} y={126} textAnchor="middle" fontSize="8.5" fill={C.sub}>
        {role}
      </text>
      <line x1={lx} y1={136} x2={x + 148} y2={136} stroke={stroke} strokeWidth="1" opacity="0.4" />
      <text x={lx} y={152} fontSize="9" fontWeight="700" fill={stroke}>
        Demographics
      </text>
      {demo.map((d, i) => (
        <text key={i} x={lx} y={166 + i * 12} fontSize="8.3" fill={C.text}>
          {d}
        </text>
      ))}
      <text x={lx} y={198} fontSize="9" fontWeight="700" fill={stroke}>
        Goals
      </text>
      {goals.map((g, i) => (
        <text key={i} x={lx} y={212 + i * 12} fontSize="8.3" fill={C.text}>
          {g}
        </text>
      ))}
      <text x={lx} y={244} fontSize="9" fontWeight="700" fill={stroke}>
        Frustrations
      </text>
      {frustrations.map((f, i) => (
        <text key={i} x={lx} y={258 + i * 12} fontSize="8.3" fill={C.text}>
          {f}
        </text>
      ))}
    </g>
  );
}

// 4. Personas — a template plus two worked examples
const personas = () => (
  <Svg title="Personas in Design Thinking — Template and Examples" w={560} h={295}>
    <PersonaCard
      x={15}
      title="PERSONA TEMPLATE"
      name="[Name, age]"
      role="[Role / occupation]"
      demo={["[location, income]", "[device, lifestyle]"]}
      goals={["[what they want]", "[why they want it]"]}
      frustrations={["[pain points]", "[blockers]"]}
      fill="#f8fafc"
      stroke={C.line}
      dashed
    />
    <PersonaCard
      x={200}
      title="SAMPLE PERSONA A"
      name="Priya, 34"
      role="Small-shop owner"
      demo={["Urban · ₹25k/month", "Smartphone user"]}
      goals={["Fast daily billing", "More walk-in buyers"]}
      frustrations={["Manual paper ledger", "Late client payments"]}
      fill="#eef2ff"
      stroke={C.boxStroke}
    />
    <PersonaCard
      x={385}
      title="SAMPLE PERSONA B"
      name="Rahul, 22"
      role="College student"
      demo={["Semi-urban · ₹8k/month", "Budget phone"]}
      goals={["Lowest prices", "Quick doorstep delivery"]}
      frustrations={["Slow checkout flow", "Hidden extra fees"]}
      fill="#ecfeff"
      stroke={C.accent}
    />
    <text x="280" y="289" textAnchor="middle" fontSize="8.8" fill={C.sub}>
      A persona is a fictional, research-based user that keeps the team focused on real needs.
    </text>
  </Svg>
);

// 5. Product design process — seven stages from problem to product
const productDesignProcess = () => (
  <Svg title="Product Design Process — Seven Stages" w={560} h={245}>
    {[
      ["Problem", "formation", 20],
      ["Research", "users, context", 155],
      ["Ideation", "ideas, concepts", 290],
      ["Prototyping", "quick mock-ups", 425],
    ].map(([label, sub, x]) => (
      <Box key={label} x={x} y={40} w={115} h={42} label={label} sub={sub} />
    ))}
    <Arrow x1={135} y1={61} x2={155} y2={61} />
    <Arrow x1={270} y1={61} x2={290} y2={61} />
    <Arrow x1={405} y1={61} x2={425} y2={61} />
    <path
      d="M482.5,82 L482.5,110 L140,110 L140,138"
      fill="none"
      stroke={C.line}
      strokeWidth="1.6"
      markerEnd="url(#em-arw)"
    />
    {[
      ["Testing", "with real users", 80],
      ["Specification", "final requirements", 240],
      ["Final product", "delivered solution", 400],
    ].map(([label, sub, x]) => (
      <Box key={label} x={x} y={140} w={120} h={42} label={label} sub={sub} fill="#ccfbf1" stroke={C.green} />
    ))}
    <Arrow x1={200} y1={161} x2={240} y2={161} />
    <Arrow x1={360} y1={161} x2={400} y2={161} />
    <text x="20" y="214" fontSize="9.5" fill={C.sub}>
      Iterative: testing often sends the team back to ideation or prototyping before specification.
    </text>
  </Svg>
);

// ---------------- PROBABILITY & STATISTICS ----------------

// 6. Normal probability density curve with shaded area
const normalCurve = () => {
  const bell = "M50,200 C110,200 175,48 280,48 C385,48 450,200 510,200 Z";
  return (
    <Svg title="Normal Distribution — Mean and Standard Deviation" w={560} h={265}>
      <defs>
        <clipPath id="em-bell">
          <path d={bell} />
        </clipPath>
      </defs>
      <line x1="40" y1="200" x2="525" y2="200" stroke={C.line} strokeWidth="1.5" />
      <line x1="50" y1="200" x2="50" y2="30" stroke={C.line} strokeWidth="1.5" />
      <text x="290" y="222" textAnchor="middle" fontSize="10" fill={C.sub}>
        x →
      </text>
      <text x="22" y="115" fontSize="10" fill={C.sub} transform="rotate(-90,22,115)">
        density f(x)
      </text>
      <path d={bell} fill="#eef2ff" stroke={C.boxStroke} strokeWidth="2" />
      <rect x="280" y="40" width="90" height="160" fill="#6366f1" opacity="0.3" clipPath="url(#em-bell)" />
      {[
        [190, "μ − σ", C.amber],
        [280, "μ", C.red],
        [370, "μ + σ", C.amber],
      ].map(([x, label, color]) => (
        <g key={label}>
          <line x1={x} y1={200} x2={x} y2={x === 280 ? 42 : 92} stroke={color} strokeWidth="1.4" strokeDasharray="5 3" />
          <text x={x} y={x === 280 ? 38 : 88} textAnchor="middle" fontSize="10" fontWeight="700" fill={color}>
            {label}
          </text>
        </g>
      ))}
      <text x="325" y="140" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={C.boxStroke}>
        ≈34%
      </text>
      <text x="280" y="248" textAnchor="middle" fontSize="9.5" fill={C.sub}>
        About 68% of values lie within μ ± σ; the curve is symmetric about μ.
      </text>
    </Svg>
  );
};

// 7. Binomial distribution bar chart for n = 10, p = 0.5
const binomialDist = () => {
  const counts = [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1];
  const maxCount = 252;
  const baseY = 210;
  return (
    <Svg title="Binomial Distribution — n = 10, p = 0.5" w={560} h={265}>
      {[0, 0.1, 0.2].map((p) => {
        const y = baseY - (p * 1024 * 150) / maxCount;
        return (
          <g key={p}>
            <line x1="60" y1={y} x2="525" y2={y} stroke={C.line} strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
            <text x="52" y={y + 3} textAnchor="end" fontSize="8.5" fill={C.sub}>
              {p.toFixed(1)}
            </text>
          </g>
        );
      })}
      <line x1="60" y1={baseY} x2="525" y2={baseY} stroke={C.line} strokeWidth="1.5" />
      <text x="26" y="120" fontSize="9.5" fill={C.sub} transform="rotate(-90,26,120)">
        P(X = k)
      </text>
      {counts.map((c, k) => {
        const x = 70 + k * 42;
        const h = (c / maxCount) * 150;
        const fill = k === 5 ? C.boxStroke : k === 4 || k === 6 ? C.green : k === 0 || k === 10 ? C.amber : C.accent;
        return (
          <g key={k}>
            <rect x={x} y={baseY - h} width={28} height={h} rx="3" fill={fill} opacity="0.85" />
            <text x={x + 14} y={baseY - h - 4} textAnchor="middle" fontSize="7.5" fill={C.sub}>
              {(c / 1024).toFixed(3)}
            </text>
            <text x={x + 14} y={baseY + 15} textAnchor="middle" fontSize="9" fill={C.text}>
              {k}
            </text>
          </g>
        );
      })}
      <text x="290" y="244" textAnchor="middle" fontSize="9.5" fill={C.sub}>
        P(X = k) = C(10,k) · (0.5)^k · (0.5)^(10−k)  — symmetric, mean np = 5.
      </text>
    </Svg>
  );
};

// 8. Bayes theorem — prior to likelihood to posterior
const bayesFlow = () => (
  <Svg title="Bayes Theorem — Prior → Likelihood → Posterior" w={560} h={252}>
    <Box x={28} y={38} w={140} h={52} label="Prior" sub="P(A)" fill="#e0e7ff" stroke={C.boxStroke} />
    <Box x={210} y={38} w={140} h={52} label="Likelihood" sub="P(B | A)" fill="#e0f2fe" stroke={C.accent} />
    <Box x={392} y={38} w={140} h={52} label="Posterior" sub="P(A | B)" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={168} y1={64} x2={210} y2={64} label="observe B" />
    <Arrow x1={350} y1={64} x2={392} y2={64} label="update" />
    <path
      d="M462,90 C462,126 98,126 98,92"
      fill="none"
      stroke={C.amber}
      strokeWidth="1.6"
      strokeDasharray="5 3"
      markerEnd="url(#em-arw)"
    />
    <text x="280" y="126" textAnchor="middle" fontSize="8.8" fill={C.amber}>
      today's posterior becomes tomorrow's prior
    </text>
    <rect x="78" y="150" width="404" height="46" rx="10" fill="#fef3c7" stroke={C.amber} strokeWidth="1.6" />
    <text x="280" y="180" textAnchor="middle" fontSize="15" fontWeight="700" fill={C.text}>
      {"P(A|B) = P(B|A) · P(A) / P(B)"}
    </text>
    <text x="280" y="222" textAnchor="middle" fontSize="9.5" fill={C.sub}>
      P(B) = P(B|A)P(A) + P(B|A′)P(A′) is the normalising evidence.
    </text>
  </Svg>
);

export const ExtraMisc = {
  accountingCycle,
  doubleEntry,
  designPrinciples,
  personas,
  productDesignProcess,
  normalCurve,
  binomialDist,
  bayesFlow,
};

export default ExtraMisc;
