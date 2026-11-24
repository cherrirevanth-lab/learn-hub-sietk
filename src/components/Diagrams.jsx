import React from "react";

/**
 * Reusable diagram library for SIETK question-bank answers.
 * Each diagram is a clean, self-contained SVG with a title and labeled boxes.
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
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="11" fontWeight="600" fill={C.text}>
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

// ---------------- OS DIAGRAMS ----------------
const processState = () => (
  <Svg title="Process State Transition Diagram" w={560} h={230}>
    <Box x={30} y={90} w={80} h={40} label="New" fill="#f1f5f9" stroke={C.line} />
    <Box x={170} y={90} w={90} h={40} label="Ready" />
    <Box x={330} y={90} w={90} h={40} label="Running" fill="#d1fae5" stroke={C.green} />
    <Box x={330} y={20} w={90} h={40} label="Waiting" fill="#fef3c7" stroke={C.amber} />
    <Box x={330} y={170} w={90} h={40} label="Terminated" fill="#fee2e2" stroke={C.red} />
    <Arrow x1={110} y1={110} x2={170} y2={110} label="admit" />
    <Arrow x1={260} y1={103} x2={330} y2={103} label="dispatch" />
    <Arrow x1={330} y1={103} x2={260} y2={117} label="timeout" />
    <Arrow x1={375} y1={90} x2={375} y2={60} label="I/O wait" />
    <Arrow x1={390} y1={60} x2={410} y2={90} label="I/O done" />
    <Arrow x1={420} y1={130} x2={420} y2={170} label="exit" />
  </Svg>
);

const pcb = () => (
  <Svg title="Process Control Block (PCB) Structure" w={560} h={250}>
    <Box x={210} y={20} w={140} h={36} label="Process Control Block" fill="#c7d2fe" stroke={C.boxStroke} />
    {[
      ["Process ID", 20], ["Process State", 65], ["Program Counter", 110],
      ["CPU Registers", 155], ["Memory Info", 200],
    ].map(([l, y]) => (
      <g key={l}>
        <Arrow x1={280} y1={56} x2={280} y2={y + 18} />
        <Box x={40} y={y} w={140} h={34} label={l} fill="#f8fafc" stroke={C.line} />
        <Box x={380} y={y} w={140} h={34} label={l} fill="#f8fafc" stroke={C.line} />
      </g>
    ))}
  </Svg>
);

const gantt = () => (
  <Svg title="Gantt Chart Example (FCFS)" w={560} h={200}>
    <text x="20" y="30" fontSize="11" fill={C.sub}>Time →</text>
    {[["P1", 0, 5, "#6366f1"], ["P2", 5, 7, "#06b6d4"], ["P3", 7, 11, "#10b981"]].map(([p, s, e, col]) => (
      <g key={p}>
        <rect x={40 + s * 40} y={80} width={(e - s) * 40} height="46" fill={col} rx="4" />
        <text x={40 + s * 40 + (e - s) * 20} y={108} textAnchor="middle" fill="white" fontSize="13" fontWeight="700">{p}</text>
      </g>
    ))}
    {[0, 5, 7, 11].map((t) => <text key={t} x={40 + t * 40} y={150} textAnchor="middle" fontSize="10" fill={C.sub}>{t}</text>)}
    <text x="20" y="185" fontSize="10" fill={C.sub}>Waiting time = start − arrival; Turnaround = completion − arrival</text>
  </Svg>
);

const fsLayers = () => (
  <Svg title="File System Layers" w={560} h={280}>
    {[
      ["Logical File System", "directories, naming, protection"],
      ["File-Organization Module", "logical → physical blocks"],
      ["Basic File System", "block read/write, buffers"],
      ["I/O Control", "device drivers, interrupts"],
      ["Hardware / Storage Device", "disk, SSD"],
    ].map(([l, s], i) => (
      <g key={l}>
        <Box x={130} y={20 + i * 50} w={300} h={38} label={l} sub={s} fill={i === 4 ? "#f1f5f9" : C.box} stroke={i === 4 ? C.line : C.boxStroke} />
        {i < 4 && <Arrow x1={280} y1={58 + i * 50} x2={280} y2={70 + i * 50} />}
      </g>
    ))}
  </Svg>
);

const directory = () => (
  <Svg title="Directory Structures" w={560} h={240}>
    <Box x={220} y={20} w={120} h={36} label="Root" fill="#c7d2fe" />
    <Arrow x1={260} y1={56} x2={130} y2={90} />
    <Arrow x1={300} y1={56} x2={430} y2={90} />
    <Box x={60} y={90} w={140} h={36} label="Home / etc" />
    <Box x={360} y={90} w={140} h={36} label="Users" />
    <Arrow x1={130} y1={126} x2={130} y2={160} />
    <Arrow x1={430} y1={126} x2={430} y2={160} />
    <Box x={60} y={160} w={140} h={36} label="File A" fill="#f8fafc" stroke={C.line} />
    <Box x={360} y={160} w={140} h={36} label="File B" fill="#f8fafc" stroke={C.line} />
    <text x="20" y="225" fontSize="10" fill={C.sub}>Tree directory: each node has one parent → easy search, grouping; path names resolve uniqueness.</text>
  </Svg>
);

const rag = () => (
  <Svg title="Resource Allocation Graph" w={560} h={220}>
    <Box x={60} y={60} w={90} h={40} label="P1" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={60} y={150} w={90} h={40} label="P2" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={300} y={60} w={90} h={40} label="R1" fill="#fef3c7" stroke={C.amber} />
    <Box x={440} y={150} w={90} h={40} label="R2" fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={150} y1={80} x2={300} y2={80} label="request" />
    <Arrow x1={300} y1={90} x2={150} y2={160} label="held" />
    <Arrow x1={150} y1={170} x2={440} y2={175} label="request" />
    <text x="20" y="215" fontSize="10" fill={C.sub}>Cycle in the wait-for graph ⇒ deadlock. Node types: process (circle/box) and resource (square).</text>
  </Svg>
);

// ---------------- DBMS DIAGRAMS ----------------
const threeTier = () => (
  <Svg title="Three-Tier Database Architecture" w={560} h={260}>
    {[
      ["External / View Level", "user views, different presentations"],
      ["Conceptual / Logical Level", "whole database structure, constraints"],
      ["Internal / Physical Level", "storage details, indexes, file org."],
    ].map(([l, s], i) => (
      <g key={l}>
        <Box x={110} y={30 + i * 70} w={340} h={46} label={l} sub={s} fill={i === 1 ? C.box : "#f8fafc"} stroke={i === 1 ? C.boxStroke : C.line} />
        {i < 2 && <Arrow x1={280} y1={76 + i * 70} x2={280} y2={100 + i * 70} />}
      </g>
    ))}
    <text x="20" y="252" fontSize="10" fill={C.sub}>Data independence: changing one level does not affect the level above it.</text>
  </Svg>
);

const erDiagram = () => (
  <Svg title="ER Diagram — Student Enrolls in Course" w={560} h={240}>
    <rect x="40" y="70" width="120" height="46" rx="6" fill="#c7d2fe" stroke={C.boxStroke} strokeWidth="1.5" />
    <text x="100" y="90" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.text}>STUDENT</text>
    <text x="100" y="106" textAnchor="middle" fontSize="9" fill={C.sub}>RollNo, Name, Age</text>
    <rect x="400" y="70" width="120" height="46" rx="6" fill="#c7d2fe" stroke={C.boxStroke} strokeWidth="1.5" />
    <text x="460" y="90" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.text}>COURSE</text>
    <text x="460" y="106" textAnchor="middle" fontSize="9" fill={C.sub}>CourseId, Title, Credits</text>
    <polygon points="270,84 300,102 270,120 240,102" fill="#fde68a" stroke={C.amber} strokeWidth="1.5" />
    <text x="270" y="105" textAnchor="middle" fontSize="8.5" fill={C.text}>Enrolls</text>
    <Arrow x1={160} y1={93} x2={240} y2={98} label="M" />
    <Arrow x1={300} y1={98} x2={400} y2={93} label="N" />
    <text x="20" y="220" fontSize="10" fill={C.sub}>Rectangle = Entity · Diamond = Relationship · Ellipse = Attribute · M:N cardinality</text>
  </Svg>
);

const bplus = () => (
  <Svg title="B+ Tree Structure" w={560} h={260}>
    <Box x={230} y={20} w={100} h={34} label="10 | 20" fill="#fde68a" stroke={C.amber} />
    {[40, 60, 180].map((x, i) => <Arrow key={i} x1={280} y1={54} x2={x + 40} y2={100} />)}
    {[40, 150, 260].map((x, i) => <Box key={i} x={x} y={100} w={80} h={34} label={i === 0 ? "5|8" : i === 1 ? "12|18" : "25|30"} fill="#fde68a" stroke={C.amber} />)}
    {[35, 105, 175, 245, 315, 385, 455].map((x, i) => (
      <g key={i}>
        <Arrow x1={(i < 2 ? 80 : i < 4 ? 190 : 300)} y1={134} x2={x + 25} y2={180} />
        <Box x={x} y={180} w={50} h={30} label={String(i + 1)} fill="#d1fae5" stroke={C.green} />
      </g>
    ))}
    <text x="20" y="245" fontSize="10" fill={C.sub}>All data pointers live in linked leaf nodes → fast range queries; internal nodes hold only keys.</text>
  </Svg>
);

const transactionStates = () => (
  <Svg title="Transaction State Diagram" w={560} h={230}>
    <Box x={30} y={90} w={80} h={36} label="Active" fill="#dbeafe" />
    <Box x={170} y={40} w={100} h={36} label="Partially\nCommitted" fill="#fef3c7" stroke={C.amber} />
    <Box x={170} y={150} w={100} h={36} label="Failed" fill="#fee2e2" stroke={C.red} />
    <Box x={340} y={40} w={110} h={36} label="Committed" fill="#d1fae5" stroke={C.green} />
    <Box x={340} y={150} w={110} h={36} label="Aborted" fill="#fee2e2" stroke={C.red} />
    <Arrow x1={110} y1={100} x2={170} y2={62} />
    <Arrow x1={110} y1={116} x2={170} y2={165} />
    <Arrow x1={270} y1={58} x2={340} y2={58} label="commit" />
    <Arrow x1={270} y1={168} x2={340} y2={168} label="rollback" />
    <text x="20" y="220" fontSize="10" fill={C.sub}>ACID: Atomicity · Consistency · Isolation · Durability</text>
  </Svg>
);

// ---------------- SE DIAGRAMS ----------------
const waterfall = () => (
  <Svg title="Waterfall Model" w={420} h={420}>
    {["Requirements", "System Design", "Implementation", "Testing", "Deployment", "Maintenance"].map((l, i) => (
      <g key={l}>
        <Box x={70} y={20 + i * 62} w={280} h={44} label={l} fill={i % 2 ? C.box : "#e0f2fe"} />
        {i < 5 && <Arrow x1={210} y1={64 + i * 62} x2={210} y2={82 + i * 62} />}
      </g>
    ))}
  </Svg>
);

const spiral = () => (
  <Svg title="Spiral Model" w={560} h={280}>
    {[100, 70, 40].map((r, i) => (
      <circle key={i} cx="280" cy="140" r={r} fill="none" stroke={[C.boxStroke, C.accent, C.green][i]} strokeWidth="2" strokeDasharray={i === 2 ? "0" : "6 4"} />
    ))}
    {[
      ["Determine objectives", 280, 28], ["Identify & resolve risks", 400, 100],
      ["Develop & verify", 280, 258], ["Plan next iteration", 160, 100],
    ].map(([l, x, y]) => <text key={l} x={x} y={y} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>{l}</text>)}
    <text x="280" y="145" textAnchor="middle" fontSize="10" fill={C.sub}>Each loop = iteration</text>
  </Svg>
);

const vmodel = () => (
  <Svg title="V-Model" w={560} h={280}>
    <Arrow x1={60} y1={60} x2={280} y2={200} label="" />
    <Arrow x1={280} y1={200} x2={500} y2={60} label="" />
    {[
      ["Requirements", 60, 50], ["System Design", 130, 110], ["Architecture", 200, 165],
      ["Detailed Design", 250, 205], ["Coding", 280, 235],
      ["Unit Test", 330, 205], ["Integration Test", 380, 165], ["System Test", 450, 110], ["Acceptance", 510, 50],
    ].map(([l, x, y]) => <text key={l} x={x} y={y} textAnchor="middle" fontSize="9.5" fill={C.text}>{l}</text>)}
    <text x="280" y="270" textAnchor="middle" fontSize="10" fill={C.sub}>Verification ⇄ Validation at each stage</text>
  </Svg>
);

const dfd = () => (
  <Svg title="Data Flow Diagram (Context Level)" w={560} h={240}>
    <Box x={20} y={90} w={100} h={40} label="External\nEntity" fill="#f8fafc" stroke={C.line} />
    <circle cx="280" cy="110" r="45" fill={C.box} stroke={C.boxStroke} strokeWidth="1.5" />
    <text x="280" y="108" textAnchor="middle" fontSize="11" fontWeight="700">Process</text>
    <text x="280" y="124" textAnchor="middle" fontSize="9" fill={C.sub}>(transform)</text>
    <Box x={440} y={90} w={100} h={40} label="Data Store" fill="#fef3c7" stroke={C.amber} />
    <Arrow x1={120} y1={110} x2={235} y2={110} label="input" />
    <Arrow x1={325} y1={110} x2={440} y2={110} label="output" />
    <text x="20" y="220" fontSize="10" fill={C.sub}>Circle = process · Rectangle = entity · Open box = store · Arrow = data flow</text>
  </Svg>
);

const caseEnv = () => (
  <Svg title="CASE Environment Architecture" w={560} h={260}>
    <Box x={190} y={15} w={180} h={34} label="User Interface Layer" fill="#c7d2fe" />
    <Box x={40} y={80} w={150} h={40} label="Analysis & Design Tools" />
    <Box x={210} y={80} w={140} h={40} label="Programming Tools" />
    <Box x={370} y={80} w={150} h={40} label="Testing Tools" />
    <Box x={120} y={160} w={320} h={40} label="Central Repository / Database" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={280} y1={49} x2={115} y2={80} />
    <Arrow x1={280} y1={49} x2={280} y2={80} />
    <Arrow x1={280} y1={49} x2={445} y2={80} />
    <Arrow x1={115} y1={120} x2={200} y2={160} />
    <Arrow x1={280} y1={120} x2={280} y2={160} />
    <Arrow x1={445} y1={120} x2={360} y2={160} />
  </Svg>
);

// ---------------- ECONOMICS DIAGRAMS ----------------
const demandCurve = () => (
  <Svg title="Law of Demand — Downward Sloping Demand Curve" w={560} h={260}>
    <line x1="60" y1="220" x2="520" y2="220" stroke={C.line} strokeWidth="1.5" />
    <line x1="60" y1="220" x2="60" y2="30" stroke={C.line} strokeWidth="1.5" />
    <text x="290" y="245" textAnchor="middle" fontSize="11" fill={C.text}>Quantity Demanded →</text>
    <text x="20" y="130" fontSize="11" fill={C.text} transform="rotate(-90,20,130)">Price ↑</text>
    <line x1="100" y1="60" x2="460" y2="200" stroke={C.boxStroke} strokeWidth="2.5" />
    <text x="120" y="55" fontSize="11" fontWeight="700" fill={C.boxStroke}>D</text>
    <circle cx="200" cy="100" r="4" fill={C.red} />
    <circle cx="360" cy="160" r="4" fill={C.red} />
    <text x="200" y="92" fontSize="9" fill={C.sub}>High price, low Q</text>
    <text x="360" y="180" fontSize="9" fill={C.sub}>Low price, high Q</text>
  </Svg>
);

const elasticity = () => (
  <Svg title="Types of Price Elasticity of Demand" w={560} h={260}>
    <line x1="60" y1="220" x2="520" y2="220" stroke={C.line} />
    <line x1="60" y1="220" x2="60" y2="30" stroke={C.line} />
    <text x="290" y="245" textAnchor="middle" fontSize="10" fill={C.sub}>Quantity</text>
    <text x="18" y="130" fontSize="10" fill={C.sub} transform="rotate(-90,18,130)">Price</text>
    <line x1="90" y1="50" x2="180" y2="200" stroke={C.boxStroke} strokeWidth="2" />
    <text x="100" y="45" fontSize="10" fill={C.boxStroke}>Elastic (Ed&gt;1) — flat</text>
    <line x1="300" y1="120" x2="320" y2="200" stroke={C.red} strokeWidth="2" />
    <text x="300" y="112" fontSize="10" fill={C.red}>Inelastic (Ed&lt;1) — steep</text>
    <line x1="420" y1="120" x2="500" y2="120" stroke={C.green} strokeWidth="2" />
    <text x="420" y="112" fontSize="10" fill={C.green}>Perfectly elastic (∞)</text>
  </Svg>
);

const breakeven = () => (
  <Svg title="Break-Even Analysis" w={560} h={260}>
    <line x1="60" y1="220" x2="520" y2="220" stroke={C.line} />
    <line x1="60" y1="220" x2="60" y2="30" stroke={C.line} />
    <text x="290" y="245" textAnchor="middle" fontSize="10" fill={C.sub}>Output / Sales →</text>
    <text x="18" y="130" fontSize="10" fill={C.sub} transform="rotate(-90,18,130)">Cost / Revenue</text>
    <line x1="60" y1="180" x2="480" y2="180" stroke={C.amber} strokeWidth="2" strokeDasharray="5 3" />
    <text x="400" y="174" fontSize="10" fill={C.amber}>Fixed Cost</text>
    <line x1="60" y1="180" x2="480" y2="60" stroke={C.boxStroke} strokeWidth="2" />
    <text x="430" y="80" fontSize="10" fill={C.boxStroke}>Total Cost</text>
    <line x1="60" y1="220" x2="480" y2="40" stroke={C.green} strokeWidth="2" />
    <text x="410" y="52" fontSize="10" fill={C.green}>Revenue</text>
    <circle cx="230" cy="128" r="5" fill={C.red} />
    <text x="235" y="122" fontSize="10" fontWeight="700" fill={C.red}>BEP</text>
    <line x1="230" y1="128" x2="230" y2="220" stroke={C.red} strokeWidth="1" strokeDasharray="3 3" />
  </Svg>
);

const monopoly = () => (
  <Svg title="Price–Output Determination under Monopoly" w={560} h={260}>
    <line x1="60" y1="220" x2="520" y2="220" stroke={C.line} />
    <line x1="60" y1="220" x2="60" y2="30" stroke={C.line} />
    <text x="290" y="245" textAnchor="middle" fontSize="10" fill={C.sub}>Output →</text>
    <text x="18" y="130" fontSize="10" fill={C.sub} transform="rotate(-90,18,130)">Price / Cost</text>
    <line x1="90" y1="50" x2="470" y2="190" stroke={C.boxStroke} strokeWidth="2" />
    <text x="100" y="48" fontSize="10" fill={C.boxStroke}>D = AR</text>
    <line x1="90" y1="30" x2="430" y2="190" stroke={C.red} strokeWidth="2" strokeDasharray="5 3" />
    <text x="360" y="160" fontSize="10" fill={C.red}>MR</text>
    <line x1="60" y1="150" x2="490" y2="150" stroke={C.green} strokeWidth="2" strokeDasharray="4 3" />
    <text x="430" y="145" fontSize="10" fill={C.green}>MC</text>
    <circle cx="270" cy="150" r="5" fill={C.amber} />
    <text x="278" y="143" fontSize="10" fontWeight="700" fill={C.amber}>Equilibrium (MR=MC)</text>
  </Svg>
);

// ---------------- DTI DIAGRAMS ----------------
const doubleDiamond = () => (
  <Svg title="Design Thinking Process — Double Diamond" w={560} h={220}>
    <path d="M60,110 L170,40 L170,180 Z" fill="#dbeafe" stroke={C.boxStroke} strokeWidth="1.5" />
    <path d="M170,40 L280,110 L170,180 Z" fill="#dbeafe" stroke={C.boxStroke} strokeWidth="1.5" />
    <path d="M280,110 L390,40 L390,180 Z" fill="#ccfbf1" stroke={C.green} strokeWidth="1.5" />
    <path d="M390,40 L500,110 L390,180 Z" fill="#ccfbf1" stroke={C.green} strokeWidth="1.5" />
    {[
      [115, "Discover"], [225, "Define"], [335, "Develop"], [445, "Deliver"],
    ].map(([x, l]) => <text key={l} x={x} y={114} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>{l}</text>)}
    <text x="170" y="210" textAnchor="middle" fontSize="9.5" fill={C.sub}>DIVERGE → CONVERGE</text>
    <text x="390" y="210" textAnchor="middle" fontSize="9.5" fill={C.sub}>DIVERGE → CONVERGE</text>
  </Svg>
);

const businessModel = () => (
  <Svg title="Business Model Canvas (Key Elements)" w={560} h={280}>
    {[
      ["Customer Segments", 20, 20], ["Value Propositions", 200, 20], ["Channels", 400, 20],
      ["Customer Relationships", 20, 110], ["Key Activities", 200, 110], ["Key Resources", 400, 110],
      ["Cost Structure", 20, 200], ["Revenue Streams", 340, 200],
    ].map(([l, x, y]) => <Box key={l} x={x} y={y} w={150} h={60} label={l} fill={y === 20 ? C.box : y === 110 ? "#f0fdfa" : "#fef3c7"} stroke={y === 20 ? C.boxStroke : y === 110 ? C.green : C.amber} />)}
  </Svg>
);

// ---------------- P&S DIAGRAM ----------------
const sampling = () => (
  <Svg title="Sampling Distribution of the Mean" w={560} h={220}>
    <line x1="60" y1="190" x2="520" y2="190" stroke={C.line} />
    <path d="M100,190 Q280,20 460,190 Z" fill="#c7d2fe" opacity="0.6" stroke={C.boxStroke} strokeWidth="1.5" />
    <line x1="280" y1="40" x2="280" y2="190" stroke={C.red} strokeWidth="1.5" strokeDasharray="5 3" />
    <text x="280" y="35" textAnchor="middle" fontSize="10" fill={C.red}>μ (population mean)</text>
    <text x="20" y="110" fontSize="10" fill={C.sub} transform="rotate(-90,20,110)">Frequency</text>
    <text x="290" y="215" textAnchor="middle" fontSize="10" fill={C.sub}>Sample means (x̄)</text>
  </Svg>
);

const DIAGRAMS = {
  processState, pcb, gantt, fsLayers, directory, rag,
  threeTier, erDiagram, bplus, transactionStates,
  waterfall, spiral, vmodel, dfd, caseEnv,
  demandCurve, elasticity, breakeven, monopoly,
  doubleDiamond, businessModel, sampling,
};

// Map keywords in a question → which diagram to render
const RULES = [
  [/process state diagram|state diagram.*process/i, "processState"],
  [/process control block|\bpcb\b/i, "pcb"],
  [/gantt chart/i, "gantt"],
  [/layers of file system|file system layers/i, "fsLayers"],
  [/directory structur|directory implementation/i, "directory"],
  [/resource.allocation graph|resource allocation/i, "rag"],
  [/three.tier schema|three tier/i, "threeTier"],
  [/client.server architecture/i, "threeTier"],
  [/er diagram|entity.relationship model|super ?class and subclass/i, "erDiagram"],
  [/b\+ ?tree/i, "bplus"],
  [/states of a transaction|transaction state/i, "transactionStates"],
  [/waterfall model/i, "waterfall"],
  [/spiral model/i, "spiral"],
  [/v-model|v model/i, "vmodel"],
  [/data flow diagram|\bdfd\b/i, "dfd"],
  [/architecture of a case|case environment/i, "caseEnv"],
  [/law of demand/i, "demandCurve"],
  [/elasticity of demand/i, "elasticity"],
  [/break.?even|breakeven/i, "breakeven"],
  [/monopoly market/i, "monopoly"],
  [/design thinking process/i, "doubleDiamond"],
  [/business model/i, "businessModel"],
  [/sampling distribution/i, "sampling"],
  [/virtual memory with neat diagram/i, "processState"],
];

export function getDiagramForQuestion(q) {
  const found = RULES.find(([re]) => re.test(q || ""));
  if (!found) return null;
  return { key: found[1], render: DIAGRAMS[found[1]] };
}

export default DIAGRAMS;
