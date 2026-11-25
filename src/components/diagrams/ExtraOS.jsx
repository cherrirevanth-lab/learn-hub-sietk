import React from "react";

/**
 * Extra OS diagrams for SIETK question-bank answers.
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

function Diamond({ cx, cy, w = 150, h = 30, fill = "#fef3c7", stroke = C.amber, label }) {
  const p = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  return (
    <g>
      <polygon points={p} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill={C.text}>
        {label}
      </text>
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
        markerEnd="url(#eo-arw)"
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
      <marker id="eo-arw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
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

// 1. OS services stack
const osServices = () => (
  <Svg title="Operating System Services (Layered View)" w={560} h={296}>
    {[
      ["User Interfaces", "command line · GUI · touch", C.box, C.boxStroke],
      ["System Calls", "application → kernel interface", "#e0f2fe", C.accent],
      ["System Programs", "editors · compilers · utilities", C.box, C.boxStroke],
      ["OS Services", "program exec · I/O · file system · communications · protection", "#d1fae5", C.green],
      ["Kernel", "process, memory, device management", "#c7d2fe", C.boxStroke],
      ["Hardware", "CPU · memory · disks · devices", "#f1f5f9", C.line],
    ].map(([label, sub, fill, stroke], i) => {
      const y = 10 + i * 46;
      return (
        <g key={label}>
          <Box x={110} y={y} w={340} h={34} label={label} sub={sub} fill={fill} stroke={stroke} />
          {i < 5 && <Arrow x1={280} y1={y + 34} x2={280} y2={y + 46} />}
        </g>
      );
    })}
  </Svg>
);

// 2. Boot sequence
const bootSequence = () => (
  <Svg title="System Boot Sequence" w={560} h={220}>
    {[
      ["BIOS / UEFI", "POST · firmware", "#e0f2fe", C.accent],
      ["MBR / Bootloader", "GRUB · load kernel", C.box, C.boxStroke],
      ["Kernel Load", "mount root FS", C.box, C.boxStroke],
      ["init / systemd", "start services", "#d1fae5", C.green],
      ["User Login", "shell / desktop", "#fef3c7", C.amber],
    ].map(([label, sub, fill, stroke], i) => {
      const x = 20 + i * 106;
      return (
        <g key={label}>
          <Box x={x} y={80} w={96} h={52} label={label} sub={sub} fill={fill} stroke={stroke} />
          {i < 4 && <Arrow x1={x + 96} y1={106} x2={x + 106} y2={106} />}
        </g>
      );
    })}
    <text x="280" y="180" textAnchor="middle" fontSize="10" fill={C.sub}>
      Firmware hands control to bootloader, which loads the kernel; the kernel starts init and presents a login prompt.
    </text>
  </Svg>
);

// 3. Monolithic vs layered OS structures
const osStructures = () => (
  <Svg title="OS Structures — Monolithic vs Layered" w={560} h={280}>
    <text x="150" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.boxStroke}>
      Monolithic
    </text>
    <text x="410" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.green}>
      Layered
    </text>
    {[
      ["Application", C.box, C.boxStroke],
      ["System Calls", "#e0f2fe", C.accent],
      ["Monolithic Kernel", "#c7d2fe", C.boxStroke],
      ["Hardware", "#f1f5f9", C.line],
    ].map(([label, fill, stroke], i) => {
      const y = 38 + i * 56;
      return (
        <g key={`m-${label}`}>
          <Box x={60} y={y} w={180} h={38} label={label} fill={fill} stroke={stroke} />
          {i < 3 && <Arrow x1={150} y1={y + 38} x2={150} y2={y + 56} />}
        </g>
      );
    })}
    {["Application", "Layer N (services)", "Layer 1 (I/O, drivers)", "Hardware"].map((label, i) => {
      const y = 38 + i * 56;
      return (
        <g key={`l-${label}`}>
          <Box
            x={320}
            y={y}
            w={180}
            h={38}
            label={label}
            fill={i === 3 ? "#f1f5f9" : "#d1fae5"}
            stroke={i === 3 ? C.line : C.green}
          />
          {i < 3 && <Arrow x1={410} y1={y + 38} x2={410} y2={y + 56} />}
        </g>
      );
    })}
    <text x="150" y="274" textAnchor="middle" fontSize="9" fill={C.sub}>All services in one address space</text>
    <text x="410" y="274" textAnchor="middle" fontSize="9" fill={C.sub}>Each layer uses only the layer below</text>
  </Svg>
);

// 4. Multithreading models
const multithreading = () => {
  const threadNode = (x, y, label, color) => (
    <g>
      <circle cx={x} cy={y} r="12" fill={color} stroke={C.line} strokeWidth="1.2" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={C.text}>
        {label}
      </text>
    </g>
  );
  return (
    <Svg title="Multithreading Models" w={560} h={250}>
      {/* Many-to-One */}
      <text x="95" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.boxStroke}>
        Many-to-One
      </text>
      <text x="48" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>user</text>
      <text x="150" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>kernel</text>
      {[70, 110, 150].map((y, i) => (
        <g key={`m1-${y}`}>
          {threadNode(48, y, `U${i + 1}`, C.box)}
          <Arrow x1={60} y1={y} x2={138} y2={110} />
        </g>
      ))}
      {threadNode(150, 110, "K1", "#d1fae5")}
      <text x="95" y="230" textAnchor="middle" fontSize="8.5" fill={C.sub}>many user → 1 kernel; one block blocks all</text>

      {/* One-to-One */}
      <text x="280" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.accent}>
        One-to-One
      </text>
      <text x="235" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>user</text>
      <text x="335" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>kernel</text>
      {[80, 140].map((y, i) => (
        <g key={`m2-${y}`}>
          {threadNode(235, y, `U${i + 1}`, C.box)}
          {threadNode(335, y, `K${i + 1}`, "#d1fae5")}
          <Arrow x1={247} y1={y} x2={323} y2={y} />
        </g>
      ))}
      <text x="280" y="230" textAnchor="middle" fontSize="8.5" fill={C.sub}>1 user → 1 kernel; more concurrency</text>

      {/* Many-to-Many */}
      <text x="465" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.green}>
        Many-to-Many
      </text>
      <text x="420" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>user</text>
      <text x="520" y="42" textAnchor="middle" fontSize="9" fill={C.sub}>kernel</text>
      {[70, 110, 150].map((y, i) => threadNode(420, y, `U${i + 1}`, C.box))}
      {[90, 140].map((y, i) => threadNode(520, y, `K${i + 1}`, "#d1fae5"))}
      <Arrow x1={432} y1={70} x2={508} y2={90} />
      <Arrow x1={432} y1={110} x2={508} y2={90} />
      <Arrow x1={432} y1={110} x2={508} y2={140} />
      <Arrow x1={432} y1={150} x2={508} y2={140} />
      <text x="465" y="230" textAnchor="middle" fontSize="8.5" fill={C.sub}>m user → n kernel; flexible & efficient</text>
    </Svg>
  );
};

// 5. Page-fault handling flow
const pageFault = () => (
  <Svg title="Page-Fault Handling" w={560} h={300}>
    <Box x={110} y={10} w={180} h={24} label="CPU references page" fill="#e0f2fe" stroke={C.accent} rx={6} />
    <Arrow x1={200} y1={34} x2={200} y2={42} />
    <Box x={110} y={42} w={180} h={24} label="Check page table entry" fill={C.box} stroke={C.boxStroke} rx={6} />
    <Arrow x1={200} y1={66} x2={200} y2={74} />
    <Diamond cx={200} cy={86} w={180} h={24} label="Valid bit set?" />
    <Box x={350} y={74} w={160} h={24} label="Invalid → abort / trap" fill="#fee2e2" stroke={C.red} rx={6} />
    <Arrow x1={290} y1={86} x2={350} y2={86} label="no" color={C.red} />
    <Arrow x1={200} y1={98} x2={200} y2={106} label="yes" />
    <Diamond cx={200} cy={118} w={180} h={24} label="Page in memory?" />
    <Box x={350} y={106} w={160} h={24} label="Yes → use frame, continue" fill="#d1fae5" stroke={C.green} rx={6} />
    <Arrow x1={290} y1={118} x2={350} y2={118} label="yes" color={C.green} />
    <Arrow x1={200} y1={130} x2={200} y2={138} label="no" />
    <Box x={110} y={138} w={180} h={24} label="Trap to OS: page fault" fill="#fef3c7" stroke={C.amber} rx={6} />
    <Arrow x1={200} y1={162} x2={200} y2={170} />
    <Box x={110} y={170} w={180} h={24} label="OS finds a free frame" fill={C.box} stroke={C.boxStroke} rx={6} />
    <Arrow x1={200} y1={194} x2={200} y2={202} />
    <Box x={110} y={202} w={180} h={24} label="Disk I/O: read the page" fill="#e0f2fe" stroke={C.accent} rx={6} />
    <Arrow x1={200} y1={226} x2={200} y2={234} />
    <Box x={110} y={234} w={180} h={24} label="Update page table" fill={C.box} stroke={C.boxStroke} rx={6} />
    <Arrow x1={200} y1={258} x2={200} y2={266} />
    <Box x={110} y={266} w={180} h={24} label="Restart the instruction" fill="#d1fae5" stroke={C.green} rx={6} />
    <text x="350" y="220" fontSize="9.5" fill={C.sub}>Frame replacement may</text>
    <text x="350" y="234" fontSize="9.5" fill={C.sub}>write a dirty victim page</text>
    <text x="350" y="248" fontSize="9.5" fill={C.sub}>back to disk first.</text>
  </Svg>
);

// 6. Bounded buffer / producer-consumer
const boundedBuffer = () => (
  <Svg title="Bounded Buffer — Producer / Consumer with Semaphores" w={560} h={230}>
    <text x="280" y="24" textAnchor="middle" fontSize="10" fill={C.sub}>Shared bounded buffer (size 4)</text>
    <Box x={20} y={82} w={100} h={48} label="Producer" sub="wait(empty)" fill="#e0f2fe" stroke={C.accent} />
    <Box x={440} y={82} w={100} h={48} label="Consumer" sub="wait(full)" fill="#d1fae5" stroke={C.green} />
    {[0, 1, 2, 3].map((i) => {
      const x = 150 + i * 65;
      return (
        <g key={i}>
          <Box x={x} y={82} w={52} h={48} label={`S${i + 1}`} fill={i % 2 ? C.box : "#f8fafc"} stroke={i % 2 ? C.boxStroke : C.line} rx={6} />
          {i < 3 && <Arrow x1={x + 52} y1={106} x2={x + 65} y2={106} />}
        </g>
      );
    })}
    <Arrow x1={120} y1={106} x2={150} y2={106} label="add" />
    <Arrow x1={407} y1={106} x2={440} y2={106} label="remove" />
    <Box x={150} y={160} w={160} h={30} label="semaphore empty = 4" fill="#fef3c7" stroke={C.amber} rx={6} />
    <Box x={330} y={160} w={160} h={30} label="semaphore full = 0" fill="#fef3c7" stroke={C.amber} rx={6} />
    <Arrow x1={190} y1={160} x2={120} y2={130} color={C.amber} dashed />
    <Arrow x1={410} y1={160} x2={470} y2={130} color={C.amber} dashed />
    <text x="280" y="216" textAnchor="middle" fontSize="9.5" fill={C.sub}>
      Producer signals full after adding; consumer signals empty after removing — mutual exclusion via mutex.
    </text>
  </Svg>
);

// 7. Deadlock system model (resource allocation graph with a cycle)
const deadlockModel = () => (
  <Svg title="Deadlock System Model — Resource Allocation Cycle" w={560} h={250}>
    <Box x={60} y={50} w={86} h={42} label="P1" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={60} y={158} w={86} h={42} label="P2" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={390} y={50} w={86} h={42} label="R1" fill="#fef3c7" stroke={C.amber} rx={4} />
    <Box x={390} y={158} w={86} h={42} label="R2" fill="#fef3c7" stroke={C.amber} rx={4} />
    <Arrow x1={146} y1={66} x2={390} y2={66} label="requests R1" color={C.red} />
    <Arrow x1={390} y1={92} x2={146} y2={172} label="held by P2" color={C.red} />
    <Arrow x1={146} y1={180} x2={390} y2={180} label="requests R2" color={C.red} />
    <Arrow x1={390} y1={158} x2={146} y2={78} label="held by P1" color={C.red} />
    <rect x="200" y="104" width="160" height="46" rx="8" fill="#fee2e2" stroke={C.red} strokeWidth="1.5" />
    <text x="280" y="122" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.red}>
      Cycle ⇒ Deadlock
    </text>
    <text x="280" y="137" textAnchor="middle" fontSize="8.5" fill={C.sub}>P1 → R1 → P2 → R2 → P1</text>
    <text x="280" y="238" textAnchor="middle" fontSize="9.5" fill={C.sub}>
      An arrow into a resource = request; an arrow out of a resource = allocation (held).
    </text>
  </Svg>
);

// 8. Mutex lock structure
const mutex = () => (
  <Svg title="Mutex Lock — Structure and Use" w={560} h={270}>
    <Box x={20} y={40} w={120} h={44} label="Thread 1" sub="wants to enter" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={20} y={186} w={120} h={44} label="Thread 2" sub="wants to enter" fill="#dbeafe" stroke={C.boxStroke} />
    <Box x={215} y={106} w={120} h={58} label="Shared lock" sub="locked = false" fill="#fef3c7" stroke={C.amber} />
    <Box x={400} y={100} w={140} h={70} label="Critical Section" sub="one thread at a time" fill="#d1fae5" stroke={C.green} />
    <Arrow x1={140} y1={62} x2={215} y2={120} label="acquire()" />
    <Arrow x1={140} y1={208} x2={215} y2={150} label="acquire()" dashed />
    <Arrow x1={335} y1={135} x2={400} y2={135} label="granted" color={C.green} />
    <Arrow x1={400} y1={158} x2={335} y2={158} label="release()" color={C.amber} />
    <text x="280" y="200" textAnchor="middle" fontSize="9.5" fill={C.sub}>Thread 2 blocks (or spins) while the lock is held</text>
    <text x="280" y="218" textAnchor="middle" fontSize="9.5" fill={C.sub}>release() sets locked = false and wakes a waiting thread.</text>
  </Svg>
);

export const ExtraOS = {
  osServices,
  bootSequence,
  osStructures,
  multithreading,
  pageFault,
  boundedBuffer,
  deadlockModel,
  mutex,
};

export default ExtraOS;
