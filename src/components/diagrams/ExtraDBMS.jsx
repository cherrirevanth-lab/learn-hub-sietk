import React from "react";

/**
 * Additional clean SVG diagrams for DBMS question-bank answers.
 * Local helpers are copied from src/components/Diagrams.jsx on purpose — this file is standalone.
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
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.6" strokeDasharray={dashed ? "4 3" : undefined} markerEnd="url(#exarw)" />
      {label && <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize="9" fill={C.sub}>{label}</text>}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker id="exarw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
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

// ---------------- 1. FOUR DATA MODELS ----------------
const dataModels = () => (
  <Svg title="Four Data Models — Mini Sketches" w={560} h={230}>
    {["Hierarchical", "Network", "Relational", "Object-oriented"].map((t, i) => (
      <text key={t} x={70 + i * 140} y={22} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={C.text}>{t}</text>
    ))}

    {/* Hierarchical tree */}
    <Box x={40} y={42} w={60} h={24} label="Root" rx={5} fill="#c7d2fe" />
    <Box x={22} y={95} w={44} h={22} label="Child 1" rx={4} fill={C.box} />
    <Box x={75} y={95} w={44} h={22} label="Child 2" rx={4} fill={C.box} />
    <Box x={48} y={145} w={44} h={22} label="Leaf" rx={4} fill="#f8fafc" stroke={C.line} />
    <Arrow x1={70} y1={66} x2={44} y2={95} />
    <Arrow x1={70} y1={66} x2={97} y2={95} />
    <Arrow x1={44} y1={117} x2={68} y2={145} />

    {/* Network graph */}
    {[
      [185, 62, "A"], [235, 62, "B"], [185, 118, "C"], [235, 118, "D"],
    ].map(([cx, cy, l]) => <circle key={l} cx={cx} cy={cy} r={13} fill="#cffafe" stroke={C.accent} strokeWidth="1.5" />)}
    {["A", "B", "C", "D"].map((l, i) => (
      <text key={l} x={185 + (i % 2) * 50} y={66 + Math.floor(i / 2) * 56} textAnchor="middle" fontSize="9" fontWeight="700" fill={C.text}>{l}</text>
    ))}
    <g stroke={C.accent} strokeWidth="1.4">
      <line x1="185" y1="62" x2="235" y2="62" />
      <line x1="185" y1="62" x2="185" y2="118" />
      <line x1="235" y1="62" x2="235" y2="118" />
      <line x1="185" y1="118" x2="235" y2="118" />
      <line x1="185" y1="62" x2="235" y2="118" />
    </g>

    {/* Relational table */}
    <rect x={300} y={48} width={100} height={80} rx={4} fill="white" stroke={C.boxStroke} strokeWidth="1.5" />
    <rect x={300} y={48} width={100} height={20} fill="#c7d2fe" />
    <g stroke={C.line} strokeWidth="1">
      <line x1="300" y1="68" x2="400" y2="68" />
      <line x1="333" y1="48" x2="333" y2="128" />
      <line x1="367" y1="48" x2="367" y2="128" />
      <line x1="300" y1="88" x2="400" y2="88" />
      <line x1="300" y1="108" x2="400" y2="108" />
    </g>
    {[316, 350, 384].map((x, i) => <text key={i} x={x} y={62} textAnchor="middle" fontSize="8" fontWeight="700" fill={C.text}>{["ID", "Name", "Dept"][i]}</text>)}
    {[
      ["1", "Alice", "CS"], ["2", "Bob", "IT"], ["3", "Carol", "CS"],
    ].map((row, r) => row.map((cell, c) => (
      <text key={`${r}-${c}`} x={[316, 350, 384][c]} y={82 + r * 20} textAnchor="middle" fontSize="8" fill={C.sub}>{cell}</text>
    )))}

    {/* Object-oriented */}
    <Box x={455} y={48} w={70} h={26} label="Student" rx={13} fill="#d1fae5" stroke={C.green} />
    <Box x={455} y={112} w={70} h={26} label="GradStudent" rx={13} fill="#d1fae5" stroke={C.green} />
    <Arrow x1={490} y1={74} x2={490} y2={112} label="is-a" />
    <circle cx="462" cy="162" r="6" fill={C.amber} />
    <text x="490" y="166" textAnchor="middle" fontSize="8" fill={C.sub}>objects + methods</text>

    <text x="20" y={215} fontSize="9.5" fill={C.sub}>Tree = one parent · Graph = many parents · Table = rows and columns · Objects = classes with inheritance</text>
  </Svg>
);

// ---------------- 2. DATABASE SYSTEM STRUCTURE ----------------
const dbSystemStructure = () => (
  <Svg title="Database System Structure" w={560} h={275}>
    <Box x={220} y={12} w={120} h={34} label="Users" fill="#c7d2fe" />
    <Box x={200} y={72} w={160} h={34} label="Application Programs" />
    <Arrow x1={280} y1={46} x2={280} y2={72} label="SQL / queries" />

    <Box x={55} y={140} w={195} h={46} label="Query Processor" sub="DDL · DML compiler · query engine" />
    <Box x={310} y={140} w={195} h={46} label="Storage Manager" sub="transaction · file · buffer manager" />
    <Arrow x1={240} y1={106} x2={152} y2={140} />
    <Arrow x1={320} y1={106} x2={408} y2={140} />
    <Arrow x1={250} y1={163} x2={310} y2={163} label="reads / writes" />

    <Box x={35} y={218} w={145} h={36} label="Data Files" fill="#f0fdfa" stroke={C.green} />
    <Box x={207} y={218} w={145} h={36} label="Indexes" fill="#f0fdfa" stroke={C.green} />
    <Box x={379} y={218} w={145} h={36} label="Data Dictionary" fill="#f0fdfa" stroke={C.green} />
    <Arrow x1={355} y1={186} x2={107} y2={218} />
    <Arrow x1={405} y1={186} x2={280} y2={218} />
    <Arrow x1={455} y1={186} x2={451} y2={218} />
    <text x="20" y={269} fontSize="9.5" fill={C.sub}>Query processor translates requests; storage manager moves data between main memory and disk.</text>
  </Svg>
);

// ---------------- 3. DBMS ENVIRONMENT ----------------
const dbEnvironment = () => (
  <Svg title="DBMS Environment — Five Components" w={560} h={280}>
    <Box x={30} y={28} w={130} h={42} label="Hardware" sub="server, disk, RAM" fill={C.box} />
    <Box x={400} y={28} w={130} h={42} label="Software" sub="DBMS + OS + apps" fill={C.box} />
    <Box x={30} y={185} w={130} h={42} label="Data" sub="DB + metadata" fill="#f0fdfa" stroke={C.green} />
    <Box x={400} y={185} w={130} h={42} label="Procedures" sub="rules &amp; instructions" fill="#fef3c7" stroke={C.amber} />
    <Box x={215} y={218} w={130} h={42} label="People" sub="users, DBA, designers" fill="#f8fafc" stroke={C.line} />

    <Box x={215} y={105} w={130} h={52} label="DBMS" sub="central engine" fill="#c7d2fe" stroke={C.boxStroke} rx={10} />
    <Arrow x1={160} y1={52} x2={252} y2={105} />
    <Arrow x1={400} y1={52} x2={308} y2={105} />
    <Arrow x1={160} y1={204} x2={252} y2={157} />
    <Arrow x1={400} y1={204} x2={308} y2={157} />
    <Arrow x1={280} y1={218} x2={280} y2={157} label="interact" />

    <text x="20" y={274} fontSize="9.5" fill={C.sub}>Hardware + Software + Data + Procedures + People work together around the DBMS.</text>
  </Svg>
);

// ---------------- 4. ER ATTRIBUTE TYPES ----------------
const erAttributes = () => (
  <Svg title="ER Diagram — Types of Attributes" w={560} h={300}>
    <Box x={215} y={130} w={130} h={46} label="STUDENT" sub="entity" fill="#c7d2fe" rx={6} />

    {/* Key attribute (underlined) */}
    <ellipse cx={280} cy={42} rx={48} ry={18} fill="#fef3c7" stroke={C.amber} strokeWidth="1.5" />
    <text x={280} y={46} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>RollNo</text>
    <line x1={262} y1={49} x2={298} y2={49} stroke={C.amber} strokeWidth="1.3" />
    <text x={280} y={18} textAnchor="middle" fontSize="9" fontWeight="700" fill={C.amber}>KEY</text>
    <Arrow x1={280} y1={60} x2={280} y2={130} />

    {/* Simple, single-valued */}
    <ellipse cx={95} cy={75} rx={48} ry={18} fill={C.box} stroke={C.boxStroke} strokeWidth="1.5" />
    <text x={95} y={79} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>Name</text>
    <text x={95} y={103} textAnchor="middle" fontSize="9" fill={C.sub}>simple, single-valued</text>
    <Arrow x1={140} y1={82} x2={215} y2={140} />

    {/* Multi-valued (double ellipse) */}
    <ellipse cx={465} cy={75} rx={48} ry={18} fill="#cffafe" stroke={C.accent} strokeWidth="1.5" />
    <ellipse cx={465} cy={75} rx={43} ry={14} fill="none" stroke={C.accent} strokeWidth="1.2" />
    <text x={465} y={79} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>Phone</text>
    <text x={465} y={103} textAnchor="middle" fontSize="9" fill={C.sub}>multi-valued (double ellipse)</text>
    <Arrow x1={420} y1={82} x2={345} y2={140} />

    {/* Derived (dashed ellipse) */}
    <ellipse cx={465} cy={180} rx={48} ry={18} fill="#f1f5f9" stroke={C.line} strokeWidth="1.5" strokeDasharray="4 3" />
    <text x={465} y={184} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>Age</text>
    <text x={465} y={208} textAnchor="middle" fontSize="9" fill={C.sub}>derived (dashed)</text>
    <Arrow x1={420} y1={180} x2={345} y2={163} />

    {/* Composite with components */}
    <ellipse cx={95} cy={180} rx={48} ry={18} fill={C.box} stroke={C.boxStroke} strokeWidth="1.5" />
    <text x={95} y={184} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>Address</text>
    <text x={95} y={208} textAnchor="middle" fontSize="9" fill={C.sub}>composite</text>
    <Arrow x1={140} y1={180} x2={215} y2={163} />
    <ellipse cx={45} cy={252} rx={36} ry={15} fill="#f8fafc" stroke={C.line} strokeWidth="1.3" />
    <text x={45} y={256} textAnchor="middle" fontSize="9" fill={C.text}>City</text>
    <ellipse cx={140} cy={252} rx={36} ry={15} fill="#f8fafc" stroke={C.line} strokeWidth="1.3" />
    <text x={140} y={256} textAnchor="middle" fontSize="9" fill={C.text}>Pin</text>
    <Arrow x1={78} y1={196} x2={57} y2={237} />
    <Arrow x1={112} y1={196} x2={128} y2={237} />

    <text x="20" y={291} fontSize="9" fill={C.sub}>Ellipse = attribute · double = multi-valued · dashed = derived · underlined = key · nested = composite</text>
  </Svg>
);

// ---------------- 5. ER INHERITANCE ----------------
const erInheritance = () => (
  <Svg title="ER Inheritance — Generalization / Specialization (ISA)" w={560} h={260}>
    <Box x={220} y={18} w={120} h={42} label="PERSON" fill="#c7d2fe" rx={6} />
    <ellipse cx={90} cy={39} rx={38} ry={15} fill={C.box} stroke={C.boxStroke} strokeWidth="1.3" />
    <text x={90} y={43} textAnchor="middle" fontSize="9" fill={C.text}>Name</text>
    <Arrow x1={128} y1={39} x2={220} y2={39} />
    <ellipse cx={470} cy={39} rx={38} ry={15} fill={C.box} stroke={C.boxStroke} strokeWidth="1.3" />
    <text x={470} y={43} textAnchor="middle" fontSize="9" fill={C.text}>DOB</text>
    <Arrow x1={340} y1={39} x2={432} y2={39} />

    <polygon points="280,60 243,108 317,108" fill="#fde68a" stroke={C.amber} strokeWidth="1.5" />
    <text x={280} y={93} textAnchor="middle" fontSize="10" fontWeight="700" fill={C.text}>ISA</text>

    <Box x={120} y={132} w={120} h={42} label="STUDENT" fill="#d1fae5" stroke={C.green} rx={6} />
    <Box x={320} y={132} w={120} h={42} label="TEACHER" fill="#d1fae5" stroke={C.green} rx={6} />
    <Arrow x1={258} y1={108} x2={180} y2={132} />
    <Arrow x1={302} y1={108} x2={380} y2={132} />

    <ellipse cx={180} cy={208} rx={42} ry={15} fill="#f8fafc" stroke={C.line} strokeWidth="1.3" />
    <text x={180} y={212} textAnchor="middle" fontSize="9" fill={C.text}>RollNo</text>
    <Arrow x1={180} y1={174} x2={180} y2={193} />
    <ellipse cx={380} cy={208} rx={42} ry={15} fill="#f8fafc" stroke={C.line} strokeWidth="1.3" />
    <text x={380} y={212} textAnchor="middle" fontSize="9" fill={C.text}>Salary</text>
    <Arrow x1={380} y1={174} x2={380} y2={193} />

    <text x="20" y={251} fontSize="9.5" fill={C.sub}>PERSON is the superclass; STUDENT and TEACHER are subclasses that inherit Name and DOB via ISA.</text>
  </Svg>
);

// ---------------- 6. RELATIONAL ALGEBRA ----------------
const relationalAlgebra = () => (
  <Svg title="Relational Algebra Operations" w={560} h={255}>
    <Box x={20} y={90} w={110} h={44} label="Relation R" sub="tuples / rows" fill="#c7d2fe" />
    <Box x={20} y={180} w={110} h={44} label="Relation S" sub="tuples / rows" fill="#c7d2fe" />

    <Box x={180} y={20} w={125} h={44} label="σ  Select" sub="σ dept = 'CS'" />
    <Box x={180} y={95} w={125} h={44} label="π  Project" sub="π name, dept" />
    <Box x={180} y={170} w={125} h={44} label="⋈  Join" sub="R ⋈ S on R.id = S.id" />

    <Arrow x1={130} y1={112} x2={180} y2={42} />
    <Arrow x1={130} y1={112} x2={180} y2={117} />
    <Arrow x1={130} y1={112} x2={180} y2={192} />
    <Arrow x1={130} y1={202} x2={180} y2={192} />

    <Box x={370} y={20} w={170} h={44} label="Selected tuples" sub="rows where dept = CS" fill="#d1fae5" stroke={C.green} />
    <Box x={370} y={95} w={170} h={44} label="Projected columns" sub="only name and dept" fill="#d1fae5" stroke={C.green} />
    <Box x={370} y={170} w={170} h={44} label="Joined relation" sub="matched pairs from R and S" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={305} y1={42} x2={370} y2={42} />
    <Arrow x1={305} y1={117} x2={370} y2={117} />
    <Arrow x1={305} y1={192} x2={370} y2={192} />

    <text x="20" y={242} fontSize="9.5" fill={C.sub}>Unary: σ filters rows, π picks columns · Binary: ⋈ combines related tuples from two relations.</text>
  </Svg>
);

// ---------------- 7. FUNCTIONAL DEPENDENCY ----------------
const functionalDependency = () => (
  <Svg title="Functional Dependency — X → Y" w={560} h={270}>
    <Box x={30} y={25} w={150} h={40} label="StudentID (X)" fill="#c7d2fe" />
    <Box x={380} y={25} w={150} h={40} label="StudentName (Y)" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={180} y1={45} x2={380} y2={45} color={C.boxStroke} label="X functionally determines Y" />

    <rect x={50} y={85} width={460} height={140} rx={4} fill="white" stroke={C.boxStroke} strokeWidth="1.5" />
    <rect x={50} y={85} width={140} height={28} fill="#eef2ff" />
    <rect x={190} y={85} width={160} height={28} fill="#ecfdf5" />
    <rect x={350} y={85} width={160} height={28} fill="#f8fafc" />
    <rect x={50} y={113} width={140} height={112} fill="#f5f7ff" />
    <rect x={190} y={113} width={160} height={112} fill="#f2fdf8" />
    <g stroke={C.line} strokeWidth="1">
      <line x1="50" y1="113" x2="510" y2="113" />
      <line x1="50" y1="141" x2="510" y2="141" />
      <line x1="50" y1="169" x2="510" y2="169" />
      <line x1="50" y1="197" x2="510" y2="197" />
      <line x1="190" y1="85" x2="190" y2="225" />
      <line x1="350" y1="85" x2="350" y2="225" />
    </g>
    {[120, 270, 430].map((x, i) => (
      <text key={i} x={x} y={103} textAnchor="middle" fontSize="10" fontWeight="700" fill={C.text}>{["StudentID (X)", "StudentName (Y)", "Course"][i]}</text>
    ))}
    {[
      ["1", "Alice", "DBMS"], ["2", "Bob", "OS"], ["1", "Alice", "Networks"], ["3", "Carol", "DBMS"],
    ].map((row, r) => row.map((cell, c) => (
      <text key={`${r}-${c}`} x={[120, 270, 430][c]} y={132 + r * 28} textAnchor="middle" fontSize="10" fill={C.text}>{cell}</text>
    )))}

    <text x="20" y={246} fontSize="9.5" fill={C.sub}>StudentID → StudentName: each X value maps to exactly one Y value (1 always gives Alice).</text>
    <text x="20" y={262} fontSize="9.5" fill={C.sub}>Course is not determined by X — the same ID appears with several courses.</text>
  </Svg>
);

// ---------------- 8. INSERT / UPDATE / DELETE ANOMALIES ----------------
const anomalies = () => (
  <Svg title="Insertion, Update and Deletion Anomalies" w={560} h={265}>
    <rect x={30} y={20} width={500} height={86} rx={4} fill="white" stroke={C.boxStroke} strokeWidth="1.5" />
    <rect x={30} y={20} width={500} height={26} fill="#eef2ff" />
    <g stroke={C.line} strokeWidth="1">
      <line x1="30" y1="46" x2="530" y2="46" />
      <line x1="30" y1="66" x2="530" y2="66" />
      <line x1="30" y1="86" x2="530" y2="86" />
      <line x1="155" y1="20" x2="155" y2="106" />
      <line x1="280" y1="20" x2="280" y2="106" />
      <line x1="405" y1="20" x2="405" y2="106" />
    </g>
    {[92, 217, 342, 467].map((x, i) => (
      <text key={i} x={x} y={37} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={C.text}>{["Student", "Course", "Instructor", "Phone"][i]}</text>
    ))}
    {[
      ["Alice", "DBMS", "Dr. Rao", "999-111"],
      ["Alice", "OS", "Dr. Rao", "999-111"],
      ["Bob", "DBMS", "Dr. Rao", "999-111"],
    ].map((row, r) => row.map((cell, c) => (
      <text key={`${r}-${c}`} x={[92, 217, 342, 467][c]} y={60 + r * 20} textAnchor="middle" fontSize="9.5" fill={C.sub}>{cell}</text>
    )))}

    <rect x={20} y={130} width={165} height={95} rx={8} fill="#fef3c7" stroke={C.amber} strokeWidth="1.5" />
    <text x={102} y={150} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>Insertion anomaly</text>
    {["Cannot add a course", "with no enrolled", "student yet."].map((t, i) => (
      <text key={i} x={102} y={171 + i * 15} textAnchor="middle" fontSize="9" fill={C.text}>{t}</text>
    ))}

    <rect x={197} y={130} width={165} height={95} rx={8} fill="#fee2e2" stroke={C.red} strokeWidth="1.5" />
    <text x={279} y={150} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>Update anomaly</text>
    {["Changing Dr. Rao's", "phone needs many", "row updates."].map((t, i) => (
      <text key={i} x={279} y={171 + i * 15} textAnchor="middle" fontSize="9" fill={C.text}>{t}</text>
    ))}

    <rect x={374} y={130} width={165} height={95} rx={8} fill={C.box} stroke={C.boxStroke} strokeWidth="1.5" />
    <text x={456} y={150} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>Deletion anomaly</text>
    {["Deleting Alice also", "loses course and", "instructor facts."].map((t, i) => (
      <text key={i} x={456} y={171 + i * 15} textAnchor="middle" fontSize="9" fill={C.text}>{t}</text>
    ))}

    <text x="20" y={252} fontSize="9.5" fill={C.sub}>Cause: redundant unnormalized data → fix by normalization (split into Student, Course and Instructor).</text>
  </Svg>
);

// ---------------- 9. CONCURRENT EXECUTION ----------------
const concurrentExec = () => (
  <Svg title="Concurrent Execution — Serializable vs Non-serializable" w={560} h={265}>
    <rect x={15} y={35} width={255} height={175} rx={8} fill="white" stroke={C.boxStroke} strokeWidth="1.5" />
    <text x={142} y={55} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={C.boxStroke}>SERIALIZABLE — T1 then T2</text>
    <text x={26} y={91} fontSize="10" fontWeight="700" fill={C.text}>T1</text>
    <text x={26} y={136} fontSize="10" fontWeight="700" fill={C.text}>T2</text>
    {[
      [45, 78, "R(A)=100"], [120, 78, "W(A)=150"], [195, 78, "COMMIT"],
      [45, 123, "R(A)=150"], [120, 123, "W(A)=170"], [195, 123, "COMMIT"],
    ].map(([x, y, l], i) => <Box key={i} x={x} y={y} w={68} h={24} label={l} rx={4} fill={C.box} stroke={C.boxStroke} />)}
    <line x1="113" y1="90" x2="120" y2="90" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="188" y1="90" x2="195" y2="90" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="113" y1="135" x2="120" y2="135" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="188" y1="135" x2="195" y2="135" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <Box x={35} y={165} w={215} h={28} label="Final A = 170 (correct)" rx={6} fill="#d1fae5" stroke={C.green} />

    <rect x={290} y={35} width={255} height={175} rx={8} fill="white" stroke={C.red} strokeWidth="1.5" />
    <text x={417} y={55} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={C.red}>NON-SERIALIZABLE — lost update</text>
    <text x={300} y={91} fontSize="10" fontWeight="700" fill={C.text}>T1</text>
    <text x={300} y={136} fontSize="10" fontWeight="700" fill={C.text}>T2</text>
    {[
      [320, 78, "R(A)=100"], [395, 78, "W(A)=150"], [470, 78, "COMMIT"],
      [320, 123, "R(A)=100"], [395, 123, "W(A)=120"], [470, 123, "COMMIT"],
    ].map(([x, y, l], i) => <Box key={i} x={x} y={y} w={68} h={24} label={l} rx={4} fill="#fee2e2" stroke={C.red} />)}
    <line x1="388" y1="90" x2="395" y2="90" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="463" y1="90" x2="470" y2="90" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="388" y1="135" x2="395" y2="135" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <line x1="463" y1="135" x2="470" y2="135" stroke={C.line} strokeWidth="1.4" markerEnd="url(#exarw)" />
    <Box x={310} y={165} w={215} h={28} label="Final A = 120 (T1 update lost)" rx={6} fill="#fee2e2" stroke={C.red} />

    <text x="20" y={238} fontSize="9.5" fill={C.sub}>Serializable: the outcome matches some serial order (T1 → T2 or T2 → T1).</text>
    <text x="20" y={255} fontSize="9.5" fill={C.sub}>Both transactions read 100 before either writes, so the second write overwrites the first (lost update).</text>
  </Svg>
);

export const ExtraDBMS = {
  dataModels,
  dbSystemStructure,
  dbEnvironment,
  erAttributes,
  erInheritance,
  relationalAlgebra,
  functionalDependency,
  anomalies,
  concurrentExec,
};

export default ExtraDBMS;
