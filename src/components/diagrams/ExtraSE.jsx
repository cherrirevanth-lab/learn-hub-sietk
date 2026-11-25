import React from "react";

/**
 * Additional software-engineering diagrams for SIETK question-bank answers.
 * Local copies of the Svg / Box / Arrow helpers from components/Diagrams.jsx.
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

function Box({ x, y, w = 100, h = 40, fill = C.box, stroke = C.boxStroke, label, sub, rx = 8, fontSize = 11 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize={fontSize} fontWeight="600" fill={C.text}>
        {label}
      </text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 11} textAnchor="middle" fontSize="8.5" fill={C.sub}>{sub}</text>}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.line, dashed = false, label }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.6" strokeDasharray={dashed ? "4 3" : undefined} markerEnd="url(#arw)" />
      {label && <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize="9" fill={C.sub}>{label}</text>}
    </g>
  );
}

/** Curved / orthogonal return path with an arrowhead (used for loops). */
function Loop({ d, color = C.accent, dashed = true }) {
  return <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeDasharray={dashed ? "5 3" : undefined} markerEnd="url(#arw)" />;
}

function Defs() {
  return (
    <defs>
      <marker id="arw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" fill={C.line} />
      </marker>
    </defs>
  );
}

function Svg({ children, w = 560, h = 260, title }) {
  return (
    <div className="my-3 rounded-xl border border-slate-200 bg-white overflow-hidden">
      {title && <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-600">{title}</div>}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ maxHeight: 300 }} role="img" aria-label={title || "diagram"}>
        <Defs />
        {children}
      </svg>
    </div>
  );
}

/* ---------------- SOFTWARE ENGINEERING DIAGRAMS ---------------- */

// 1. RAD life cycle
const radModel = () => (
  <Svg title="RAD Life Cycle Model" w={560} h={270}>
    <Box x={35} y={35} w={140} h={46} label="Requirements Planning" fontSize={10.5} fill="#e0f2fe" stroke={C.accent} />
    <Box x={385} y={35} w={140} h={46} label="User Design" fill={C.box} />
    <Box x={385} y={185} w={140} h={46} label="Construction" fill={C.box} />
    <Box x={35} y={185} w={140} h={46} label="Cutover" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={175} y1={58} x2={385} y2={58} label="1" />
    <Arrow x1={455} y1={81} x2={455} y2={185} color={C.accent} />
    <Arrow x1={385} y1={208} x2={175} y2={208} label="3" />
    <Arrow x1={105} y1={185} x2={105} y2={81} color={C.accent} />
    <circle cx="280" cy="133" r="40" fill="#f8fafc" stroke={C.line} strokeDasharray="5 3" />
    <text x="280" y="130" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.boxStroke}>RAD</text>
    <text x="280" y="146" textAnchor="middle" fontSize="9" fill={C.sub}>iterations</text>
    <text x="280" y="260" textAnchor="middle" fontSize="10" fill={C.sub}>Time-boxed phases (60–90 days) with continuous user feedback and reusable components.</text>
  </Svg>
);

// 2. Prototyping model
const prototypingModel = () => (
  <Svg title="Prototyping Model" w={560} h={290}>
    <Box x={20} y={40} w={100} h={48} label="Requirements" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={160} y={40} w={100} h={48} label="Quick Design" fontSize={10} />
    <Box x={300} y={40} w={100} h={48} label="Build Prototype" fontSize={10} />
    <Box x={440} y={40} w={100} h={48} label="User Evaluation" fontSize={10} fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={120} y1={64} x2={160} y2={64} />
    <Arrow x1={260} y1={64} x2={300} y2={64} />
    <Arrow x1={400} y1={64} x2={440} y2={64} />
    <Box x={440} y={165} w={100} h={46} label="Refine" fill="#fef3c7" stroke={C.amber} />
    <Box x={300} y={165} w={100} h={46} label="Final Product" fontSize={10} fill="#d1fae5" stroke={C.green} />
    <Arrow x1={490} y1={88} x2={490} y2={165} label="feedback" />
    <Arrow x1={440} y1={188} x2={400} y2={188} color={C.green} />
    <Loop d="M490,211 L490,248 L210,248 L210,88" color={C.accent} />
    <text x="350" y="242" textAnchor="middle" fontSize="9" fill={C.sub}>refine and re-prototype</text>
    <text x="280" y="278" textAnchor="middle" fontSize="9.5" fill={C.sub}>The prototype is refined until the user accepts it; only then is the final product built.</text>
  </Svg>
);

// 3. Evolutionary / incremental model
const evolutionaryModel = () => (
  <Svg title="Evolutionary (Incremental) Process Model" w={560} h={285}>
    <Box x={30} y={50} w={120} h={50} label="Core Product" sub="v1: basic services" fill="#e0f2fe" stroke={C.accent} />
    <Box x={200} y={50} w={120} h={50} label="Increment 1" sub="add features" />
    <Box x={370} y={50} w={120} h={50} label="Increment 2" sub="add features" />
    <Box x={370} y={175} w={120} h={50} label="Increment 3" sub="add features" />
    <Box x={200} y={175} w={120} h={50} label="Final System" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={150} y1={75} x2={200} y2={75} label="v1" />
    <Arrow x1={320} y1={75} x2={370} y2={75} label="v2" />
    <Arrow x1={430} y1={100} x2={430} y2={175} label="v3" />
    <Arrow x1={370} y1={200} x2={320} y2={200} color={C.green} label="release" />
    <Loop d="M260,225 L260,258 L90,258 L90,100" color={C.accent} />
    <text x="175" y="252" textAnchor="middle" fontSize="9" fill={C.sub}>next iteration</text>
    <text x="280" y="280" textAnchor="middle" fontSize="9.5" fill={C.sub}>Each increment adds functionality; the core is refined repeatedly into the final system.</text>
  </Svg>
);

// 4. COCOMO estimation model
const cocomo = () => (
  <Svg title="COCOMO Model — Effort, Schedule and Cost" w={560} h={275}>
    <Box x={15} y={40} w={110} h={48} label="Project Size" sub="KLOC / FP" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={155} y={40} w={110} h={48} label="Effort" sub="person-months" />
    <Box x={295} y={40} w={110} h={48} label="Schedule" sub="months" />
    <Box x={435} y={40} w={110} h={48} label="Cost" sub="effort × rate" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={125} y1={64} x2={155} y2={64} />
    <Arrow x1={265} y1={64} x2={295} y2={64} />
    <Arrow x1={405} y1={64} x2={435} y2={64} />
    <text x="280" y="115" textAnchor="middle" fontSize="9.5" fill={C.sub}>Development modes determine the constants used in the estimate</text>
    <Box x={25} y={150} w={150} h={52} label="Organic" sub="simple · small team" fill="#f0fdfa" stroke={C.green} />
    <Box x={205} y={150} w={150} h={52} label="Semi-detached" sub="mixed · medium size" />
    <Box x={385} y={150} w={150} h={52} label="Embedded" sub="complex · real-time" fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={100} y1={150} x2={200} y2={90} color={C.green} />
    <Arrow x1={280} y1={150} x2={280} y2={90} />
    <Arrow x1={460} y1={150} x2={360} y2={90} color={C.amber} />
    <text x="280" y="260" textAnchor="middle" fontSize="9.5" fill={C.sub}>Effort = a × (KLOC)^b × EAF · Schedule and cost are derived from effort.</text>
  </Svg>
);

// 5. Software design process
const designProcess = () => (
  <Svg title="Software Design Process" w={560} h={270}>
    <Box x={25} y={35} w={150} h={50} label="Requirements" sub="SRS input" fill="#e0f2fe" stroke={C.accent} />
    <Box x={205} y={35} w={150} h={50} label="Architectural Design" sub="modules & structure" fontSize={10} />
    <Box x={385} y={35} w={150} h={50} label="Component Design" sub="module behaviour" fontSize={10} />
    <Box x={385} y={160} w={150} h={50} label="Interface Design" sub="data & calls" fontSize={10} />
    <Box x={205} y={160} w={150} h={50} label="Detailed Design" sub="algorithms" fontSize={10} />
    <Box x={25} y={160} w={150} h={50} label="Review" sub="verify & refine" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={175} y1={60} x2={205} y2={60} />
    <Arrow x1={355} y1={60} x2={385} y2={60} />
    <Arrow x1={460} y1={85} x2={460} y2={160} />
    <Arrow x1={385} y1={185} x2={355} y2={185} />
    <Arrow x1={205} y1={185} x2={175} y2={185} />
    <Loop d="M100,160 L100,85" color={C.accent} />
    <text x="280" y="255" textAnchor="middle" fontSize="9.5" fill={C.sub}>Each stage produces a design artifact and is reviewed before the next stage begins.</text>
  </Svg>
);

// 6. Layered module arrangement
const layeredModules = () => (
  <Svg title="Layered Arrangement of Modules" w={560} h={290}>
    {[
      ["Layer 1 — Presentation / UI", "screens, forms, input handling", "#e0f2fe", C.accent],
      ["Layer 2 — Application Logic", "workflows, coordination", C.box, C.boxStroke],
      ["Layer 3 — Domain Services", "business rules, entities", C.box, C.boxStroke],
      ["Layer 4 — Data Access", "persistence, database", "#d1fae5", C.green],
    ].map(([label, sub, fill, stroke], i) => (
      <g key={label}>
        <Box x={110} y={20 + i * 60} w={340} h={46} label={label} sub={sub} fill={fill} stroke={stroke} />
        {i < 3 && <Arrow x1={280} y1={66 + i * 60} x2={280} y2={80 + i * 60} color={C.accent} />}
      </g>
    ))}
    <text x={280} y={268} textAnchor="middle" fontSize="10" fill={C.sub}>A layer calls only the layer directly below it; changes remain local to one layer.</text>
  </Svg>
);

// 7. Cohesion and coupling
const cohesionCoupling = () => (
  <Svg title="Cohesion and Coupling" w={560} h={275}>
    <text x={140} y={30} textAnchor="middle" fontSize="11" fontWeight="600" fill={C.text}>Module A — high cohesion</text>
    <text x={420} y={30} textAnchor="middle" fontSize="11" fontWeight="600" fill={C.text}>Module B — high cohesion</text>
    <rect x={40} y={40} width={200} height={150} rx={12} fill="#f8fafc" stroke={C.line} strokeDasharray="5 3" strokeWidth="1.5" />
    <rect x={320} y={40} width={200} height={150} rx={12} fill="#f8fafc" stroke={C.line} strokeDasharray="5 3" strokeWidth="1.5" />
    {[60, 100, 140].map((y, i) => (
      <g key={`a${i}`}>
        <Box x={65} y={y} w={150} h={30} label={`A${i + 1} — related task`} fontSize={9.5} rx={6} />
        <Box x={345} y={y} w={150} h={30} label={`B${i + 1} — related task`} fontSize={9.5} rx={6} fill="#f0fdfa" stroke={C.green} />
      </g>
    ))}
    <Arrow x1={240} y1={115} x2={320} y2={115} color={C.accent} />
    <rect x={45} y={215} width={14} height={10} rx={2} fill={C.box} stroke={C.boxStroke} />
    <text x={65} y={224} fontSize="9" fill={C.sub}>cohesive internal functions</text>
    <rect x={300} y={215} width={14} height={10} rx={2} fill="#f0fdfa" stroke={C.green} />
    <text x={320} y={224} fontSize="9" fill={C.sub}>minimal interface (low coupling)</text>
    <text x={280} y={258} textAnchor="middle" fontSize="9.5" fill={C.sub}>Aim: high cohesion within each module, low coupling between modules.</text>
  </Svg>
);

// 8. Agile process flow
const agileProcess = () => (
  <Svg title="Agile Process Flow" w={560} h={250}>
    <Box x={15} y={50} w={100} h={50} label="Backlog" sub="prioritised" fill="#e0f2fe" stroke={C.accent} />
    <Box x={125} y={50} w={100} h={50} label="Sprint Planning" sub="select items" fontSize={10} />
    <Box x={235} y={50} w={100} h={50} label="Sprint" sub="build & test" />
    <Box x={345} y={50} w={100} h={50} label="Review" sub="demo to user" fontSize={10} />
    <Box x={455} y={50} w={100} h={50} label="Retrospective" sub="lessons learnt" fontSize={10} fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={115} y1={75} x2={125} y2={75} />
    <Arrow x1={225} y1={75} x2={235} y2={75} />
    <Arrow x1={335} y1={75} x2={345} y2={75} />
    <Arrow x1={445} y1={75} x2={455} y2={75} />
    <Loop d="M505,100 L505,165 L65,165 L65,100" color={C.accent} />
    <text x={285} y={182} textAnchor="middle" fontSize="9" fill={C.sub}>repeat — next sprint</text>
    <text x={280} y={230} textAnchor="middle" fontSize="9.5" fill={C.sub}>Time-boxed iterations; working software is the primary measure of progress.</text>
  </Svg>
);

// 9. Structured analysis / DFD levels
const structuredAnalysis = () => (
  <Svg title="Structured Analysis — DFD Levels and Symbols" w={560} h={280}>
    <Box x={25} y={30} w={150} h={52} label="Context Diagram" sub="system + external entities" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={205} y={30} w={150} h={52} label="Level 0 DFD" sub="major processes" />
    <Box x={385} y={30} w={150} h={52} label="Level 1 DFD" sub="sub-processes" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={175} y1={56} x2={205} y2={56} label="decompose" />
    <Arrow x1={355} y1={56} x2={385} y2={56} label="decompose" />
    <line x1="25" y1="108" x2="535" y2="108" stroke={C.line} strokeDasharray="4 3" />
    <text x="280" y="128" textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>DFD Symbols</text>
    <circle cx="75" cy="175" r="22" fill={C.box} stroke={C.boxStroke} strokeWidth="1.5" />
    <text x="75" y="179" textAnchor="middle" fontSize="9" fill={C.text}>Proc</text>
    <text x="75" y="218" textAnchor="middle" fontSize="9.5" fill={C.sub}>Process</text>
    <Arrow x1={145} y1={175} x2={215} y2={175} color={C.accent} />
    <text x="180" y="218" textAnchor="middle" fontSize="9.5" fill={C.sub}>Data flow</text>
    <rect x="255" y="157" width="60" height="36" rx={4} fill="#f8fafc" stroke={C.line} strokeWidth="1.5" />
    <text x="285" y="179" textAnchor="middle" fontSize="9" fill={C.text}>Entity</text>
    <text x="285" y="218" textAnchor="middle" fontSize="9.5" fill={C.sub}>External entity</text>
    <path d="M370,159 H440 V195 H370" fill="none" stroke={C.amber} strokeWidth="1.5" />
    <line x1="382" y1="172" x2="428" y2="172" stroke={C.amber} strokeWidth="1" />
    <text x="405" y="185" textAnchor="middle" fontSize="9" fill={C.text}>Store</text>
    <text x="405" y="218" textAnchor="middle" fontSize="9.5" fill={C.sub}>Data store</text>
    <text x="280" y="262" textAnchor="middle" fontSize="9.5" fill={C.sub}>Context → Level 0 → Level 1: processes are decomposed into finer detail.</text>
  </Svg>
);

// 10. UI design methodology
const uiMethodology = () => (
  <Svg title="UI Design Methodology" w={560} h={245}>
    <Box x={15} y={55} w={100} h={52} label="User Analysis" sub="users & goals" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={125} y={55} w={100} h={52} label="Task Analysis" sub="workflows" fontSize={10} />
    <Box x={235} y={55} w={100} h={52} label="Design" sub="layout & visuals" fontSize={10} />
    <Box x={345} y={55} w={100} h={52} label="Prototype" sub="mock-up" fontSize={10} />
    <Box x={455} y={55} w={100} h={52} label="Evaluation" sub="usability test" fontSize={10} fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={115} y1={81} x2={125} y2={81} />
    <Arrow x1={225} y1={81} x2={235} y2={81} />
    <Arrow x1={335} y1={81} x2={345} y2={81} />
    <Arrow x1={445} y1={81} x2={455} y2={81} />
    <Loop d="M505,107 L505,165 L65,165 L65,107" color={C.accent} />
    <text x={285} y={182} textAnchor="middle" fontSize="9" fill={C.sub}>iterate on user feedback</text>
    <text x={280} y={228} textAnchor="middle" fontSize="9.5" fill={C.sub}>User-centred design: analyse, design, prototype and evaluate until goals are met.</text>
  </Svg>
);

// 11. Software maintenance process models
const maintenanceModels = () => (
  <Svg title="Software Maintenance Process" w={560} h={265}>
    <Box x={25} y={35} w={150} h={50} label="Change Request" sub="CR logged" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={205} y={35} w={150} h={50} label="Analysis" sub="impact & cost" fontSize={10} />
    <Box x={385} y={35} w={150} h={50} label="Design" sub="change spec" fontSize={10} />
    <Box x={385} y={160} w={150} h={50} label="Code" sub="modify source" fontSize={10} />
    <Box x={205} y={160} w={150} h={50} label="Test" sub="regression" fontSize={10} />
    <Box x={25} y={160} w={150} h={50} label="Release" sub="deploy & document" fontSize={10} fill="#d1fae5" stroke={C.green} />
    <Arrow x1={175} y1={60} x2={205} y2={60} />
    <Arrow x1={355} y1={60} x2={385} y2={60} />
    <Arrow x1={460} y1={85} x2={460} y2={160} />
    <Arrow x1={385} y1={185} x2={355} y2={185} />
    <Arrow x1={205} y1={185} x2={175} y2={185} />
    <text x="280" y="250" textAnchor="middle" fontSize="9.5" fill={C.sub}>Every change is validated; release updates the baseline and documentation.</text>
  </Svg>
);

// 12. CASE support in the life cycle
const caseSupport = () => (
  <Svg title="CASE Support Across the Life Cycle" w={560} h={285}>
    <Box x={25} y={30} w={150} h={48} label="Requirements" sub="specifiers, modellers" fontSize={10} fill="#e0f2fe" stroke={C.accent} />
    <Box x={205} y={25} w={150} h={48} label="Design" sub="diagrams, design tools" fontSize={10} />
    <Box x={385} y={30} w={150} h={48} label="Coding" sub="IDEs, generators" fontSize={10} />
    <Box x={25} y={215} w={150} h={48} label="Testing" sub="test & analysis tools" fontSize={10} />
    <Box x={385} y={215} w={150} h={48} label="Maintenance" sub="change tracking" fontSize={10} fill="#fef3c7" stroke={C.amber} />
    <Box x={210} y={120} w={140} h={52} label="Central Repository" sub="shared artifacts" fontSize={10} fill="#d1fae5" stroke={C.green} />
    <Arrow x1={100} y1={78} x2={240} y2={120} color={C.green} />
    <Arrow x1={280} y1={73} x2={280} y2={120} color={C.green} />
    <Arrow x1={460} y1={78} x2={320} y2={120} color={C.green} />
    <Arrow x1={100} y1={215} x2={240} y2={172} color={C.green} />
    <Arrow x1={460} y1={215} x2={320} y2={172} color={C.green} />
    <text x="280" y={270} textAnchor="middle" fontSize="9.5" fill={C.sub}>All tools read and write the same repository → consistency and traceability.</text>
  </Svg>
);

export const ExtraSE = {
  radModel,
  prototypingModel,
  evolutionaryModel,
  cocomo,
  designProcess,
  layeredModules,
  cohesionCoupling,
  agileProcess,
  structuredAnalysis,
  uiMethodology,
  maintenanceModels,
  caseSupport,
};

export default ExtraSE;
