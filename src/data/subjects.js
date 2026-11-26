/**
 * SIETK Study App — Subject Data
 *
 * Subject codes, names, question-bank URLs and branch/semester mapping are
 * pulled from www.sietk.org (R23 regulations UG question bank page and
 * syllabus page). Labs are flagged isLab: true and shown as "Coming Soon".
 *
 * Units/topics are aligned to the JNTUA R23 syllabus structure. Explanations,
 * Q&A and one-shot previews are authored teaching content.
 */

export const BRANCHES = [
  { key: "CSE", label: "Computer Science and Engineering" },
  { key: "ECE", label: "Electronics and Communication Engineering" },
  { key: "EEE", label: "Electrical and Electronics Engineering" },
  { key: "MECH", label: "Mechanical Engineering" },
  { key: "CIVIL", label: "Civil Engineering" },
  { key: "CSIT", label: "Computer Science & Information Technology" },
  { key: "AIML", label: "CSE (AI & Machine Learning)" },
  { key: "DS", label: "CSE (AI & Data Science)" },
  { key: "IOT", label: "CSE (IoT & Cybersecurity incl. Blockchain)" }];

export const ROLES = [
  { key: "student", label: "Student", color: "blue" },
  { key: "teacher", label: "Teacher", color: "indigo" },
  { key: "admin", label: "Admin", color: "emerald" },
  { key: "designer", label: "Designer", color: "pink" },
  { key: "engineer", label: "Engineer", color: "orange" },
  { key: "professor", label: "Professor", color: "purple" }];

export const SUBJECTS = [
  {
    id: "23CS0511",
    code: "23CS0511",
    name: "Operating Systems",
    shortName: "OS",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "J.S. ANANDA KUMAR (MCA)",
    credits: 3,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23CS0511.pdf",
    description:
      "Study of operating system structure, process management, CPU scheduling, synchronization, deadlocks, memory management, virtual memory, file systems, and I/O systems.",
    units: [
      {
        number: 1,
        title: "Operating System Overview & System Structures",
        topics: [
          "Operating Systems Overview: Introduction",
          "Operating system functions, Operating systems operations",
          "Computing environments, Free and Open-Source Operating Systems",
          "System Structures: Operating System Services",
          "User and Operating-System Interface",
          "System calls, Types of System Calls, system programs",
          "Operating system Design and Implementation",
          "Operating system structure, Building and Booting an Operating System",
          "Operating system debugging"],
        explanation: `
An Operating System (OS) is the layer of software that sits between the user applications and the computer hardware. It manages the hardware resources (CPU, memory, disk, I/O devices) and provides a convenient interface for users and programs.

Key responsibilities of an OS:
- **Processor management**: decides which process runs on the CPU and for how long.
- **Memory management**: allocates and deallocates memory for programs.
- **Device management**: controls keyboards, mice, disks, printers, etc.
- **File management**: creates, deletes, reads, writes and organises files.
- **Security & access control**: protects resources from unauthorised use.

System calls are the interface between a running program and the OS. Common categories: process control, file management, device management, information maintenance, and communications.
        `,
        keyConcepts: ["OS as resource manager", "System calls", "Dual mode (user/kernel)", "OS structure: monolithic, layered, microkernel"],
        qa: [
          {
            q: "What is an operating system and why is it needed?",
            a:
              "An operating system is system software that manages computer hardware and software resources and provides common services for computer programs. It acts as an intermediary between users/applications and the hardware.",
            explanation:
              "Without an OS, every application would have to directly program the hardware, which is complex and error-prone. The OS abstracts the hardware into convenient services (files, processes, windows) so programmers can write applications once and run them on many machines.",
            oneShotPreview:
              "OS = resource manager + user-hardware interface; needed to abstract hardware, share resources, and provide services.",
          },
          {
            q: "What are system calls? Give examples.",
            a:
              "System calls are programmatic requests made by a running program to the OS kernel for a service. Examples: fork(), exec(), exit(), read(), write(), open(), close().",
            explanation:
              "Programs run in user mode and cannot access hardware directly. They use system calls to switch to kernel mode (via a software interrupt/syscall instruction) so the OS can perform privileged operations on their behalf.",
            oneShotPreview:
              "System calls = user→kernel requests for OS services; e.g., fork, read, write, open.",
          },
          {
            q: "What is the difference between user mode and kernel mode?",
            a:
              "User mode restricts access to hardware and privileged instructions; kernel mode has full access to hardware and can execute any instruction.",
            explanation:
              "The CPU switches between modes via system calls and interrupts. This dual-mode operation protects the OS and hardware from faulty or malicious user programs.",
            oneShotPreview:
              "User mode = restricted; Kernel mode = full hardware access; switched via system calls.",
          },
          {
            q: "What are the main functions of an operating system?",
            a:
              "Process management, memory management, file management, device management, security and access control, and user interface.",
            explanation:
              "Each function abstracts hardware complexity: process management schedules CPU time, memory management allocates RAM, file management organizes storage, device management controls I/O, security protects resources.",
            oneShotPreview:
              "OS functions: process, memory, file, device, security, UI.",
          },
          {
            q: "What is a computing environment in the context of OS?",
            a:
              "A computing environment refers to the hardware and software context in which the OS operates, such as traditional (single computer), mobile, distributed, or cloud environments.",
            explanation:
              "Modern OSs adapt to different environments: desktop OS (Windows, macOS), mobile OS (Android, iOS), distributed OS (cluster computing), and cloud OS (virtualized resources).",
            oneShotPreview:
              "Computing environment = hardware/software context; desktop, mobile, distributed, cloud.",
          }],
      },
      {
        number: 2,
        title: "Processes, Threads and CPU Scheduling",
        topics: [
          "Processes: Process Concept, Process scheduling",
          "Operations on processes, Inter-process communication",
          "Threads and Concurrency: Multithreading models",
          "Thread libraries, Threading issues",
          "CPU Scheduling: Basic concepts, Scheduling criteria",
          "Scheduling algorithms, Multiple processor scheduling"],
        explanation: `
A **process** is a program in execution. It is more than just the code — it includes the program counter, registers, stack, heap, and the Process Control Block (PCB).

**Process states**: New → Ready → Running → Waiting/Blocked → Terminated. A process moves between these states as the scheduler dispatches it and as it waits for I/O.

**CPU Scheduling** decides which ready process gets the CPU:
- **FCFS** (First Come First Served): simple, but can suffer from the "convoy effect".
- **SJF** (Shortest Job First): optimal for waiting time, but needs future knowledge.
- **Priority Scheduling**: each process has a priority; risk of starvation for low-priority jobs.
- **Round Robin (RR)**: each process gets a fixed time slice (quantum); good for time-sharing systems.
        `,
        keyConcepts: ["Process Control Block (PCB)", "Process state diagram", "Context switch", "CPU scheduling algorithms"],
        qa: [
          {
            q: "What is the difference between a process and a thread?",
            a:
              "A process is an independent program in execution with its own memory space. A thread is a lightweight unit of execution within a process; threads in the same process share the process's memory and resources.",
            explanation:
              "Processes are isolated (one crashing doesn't affect another) but communication between them is expensive (IPC). Threads share memory, making communication fast, but a bug in one thread can corrupt the whole process.",
            oneShotPreview:
              "Process = independent, isolated, heavyweight. Thread = lightweight, shares memory with sibling threads.",
          },
          {
            q: "Explain Round Robin scheduling.",
            a:
              "Round Robin is a preemptive scheduling algorithm designed for time-sharing systems. Each process in the ready queue gets the CPU for a fixed time quantum. If it doesn't finish, it is preempted and moved to the back of the queue.",
            explanation:
              "RR is fair and provides good response time. The choice of quantum matters: too large → behaves like FCFS; too small → high context-switch overhead.",
            oneShotPreview:
              "RR = preemptive, fixed time quantum, cyclic queue; fair for time-sharing.",
          },
          {
            q: "What is a Process Control Block (PCB)?",
            a:
              "PCB is a data structure maintained by the OS for each process, storing process state, program counter, CPU registers, scheduling info, memory management info, and I/O status.",
            explanation:
              "The PCB is the process's 'identity card' in the OS. During context switching, the OS saves the current process's state into its PCB and loads the next process's PCB.",
            oneShotPreview:
              "PCB = process identity card storing state, registers, scheduling info.",
          },
          {
            q: "What are the process states in an OS?",
            a:
              "New, Ready, Running, Waiting (Blocked), and Terminated. A process moves between these states as it is scheduled, waits for I/O, or completes.",
            explanation:
              "New: being created. Ready: waiting for CPU. Running: executing on CPU. Waiting: blocked on I/O or event. Terminated: finished execution. The scheduler manages transitions.",
            oneShotPreview:
              "Process states: New → Ready → Running → Waiting → Terminated.",
          },
          {
            q: "What is context switching?",
            a:
              "Context switching is the process of saving the state of a currently running process and loading the state of the next process to be executed.",
            explanation:
              "Context switches occur during interrupts, system calls, and scheduling. They involve saving registers, program counter, and updating the PCB. Frequent context switching adds overhead.",
            oneShotPreview:
              "Context switch = save current process state, load next process state.",
          }],
      },
      {
        number: 3,
        title: "Synchronization Tools and Deadlocks",
        topics: [
          "Synchronization Tools: The Critical Section Problem",
          "Peterson's Solution, Mutex Locks, Semaphores",
          "Monitors, Classic problems of Synchronization",
          "Deadlocks: system Model, Deadlock characterization",
          "Methods for handling Deadlocks",
          "Deadlock prevention, Deadlock avoidance",
          "Deadlock detection, Recovery from Deadlock"],
        explanation: `
The **critical section problem**: when multiple processes share data (e.g., a counter), concurrent access can cause inconsistent results. We must ensure mutual exclusion — only one process in its critical section at a time.

**Semaphore**: an integer variable accessed via wait() (P) and signal() (V) operations. Binary semaphore (mutex) = 0/1; counting semaphore = any non-negative integer.

**Deadlock** occurs when a set of processes are blocked because each holds a resource and waits for another resource held by someone in the set. Four necessary conditions (Coffman):
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

Handling strategies: Prevention (break one condition), Avoidance (Banker's algorithm), Detection & Recovery, or Ostrich algorithm (ignore it).
        `,
        keyConcepts: ["Critical section", "Mutex/Semaphore", "Deadlock conditions", "Banker's Algorithm"],
        qa: [
          {
            q: "What are the four necessary conditions for deadlock?",
            a:
              "(1) Mutual Exclusion — at least one resource non-sharable. (2) Hold and Wait — a process holds resources while waiting for others. (3) No Preemption — resources can't be forcibly taken. (4) Circular Wait — a cycle of processes waiting on each other.",
            explanation:
              "All four must hold simultaneously for deadlock. Breaking any one prevents deadlock, which is the basis of prevention strategies.",
            oneShotPreview:
              "Mutual exclusion, hold & wait, no preemption, circular wait — all four required.",
          },
          {
            q: "What is a semaphore?",
            a:
              "A semaphore is a synchronization tool — an integer variable accessed only through wait() and signal() atomic operations, used to control access to shared resources.",
            explanation:
              "wait() decrements; if negative, the process blocks. signal() increments; if there are waiting processes, one is unblocked. Binary semaphore = mutex.",
            oneShotPreview:
              "Semaphore = integer + wait/signal; controls concurrent access to shared resources.",
          },
          {
            q: "What is Peterson's solution?",
            a:
              "Peterson's solution is a software-based algorithm for the critical section problem for two processes, using a shared turn variable and a flag array.",
            explanation:
              "It ensures mutual exclusion, progress, and bounded waiting without hardware support. However, it requires busy waiting.",
            oneShotPreview:
              "Peterson's = software mutex for 2 processes using turn + flag.",
          },
          {
            q: "What is the Banker's Algorithm?",
            a:
              "Banker's Algorithm is a deadlock avoidance algorithm that simulates resource allocation to check if the system remains in a safe state before granting a request.",
            explanation:
              "It's called 'Banker's' because it's like a bank ensuring it never runs out of cash. It checks if granting a request leaves the system in a safe state (all processes can finish).",
            oneShotPreview:
              "Banker's = deadlock avoidance by checking safe state before granting.",
          },
          {
            q: "How can deadlocks be prevented?",
            a:
              "By breaking one of the four necessary conditions: (1) make resources sharable (break mutual exclusion), (2) require processes to request all resources at once (break hold and wait), (3) allow preemption (break no preemption), (4) impose an ordering on resource requests (break circular wait).",
            explanation:
              "Prevention is conservative but can reduce resource utilization. Avoidance (Banker's) is more flexible but requires knowing future resource needs.",
            oneShotPreview:
              "Prevent deadlock by breaking one of the 4 necessary conditions.",
          }],
      },
      {
        number: 4,
        title: "Memory Management and Virtual Memory",
        topics: [
          "Memory-Management Strategies: Introduction",
          "Contiguous memory allocation, Paging",
          "Structure of the Page Table, Swapping",
          "Virtual Memory Management: Introduction",
          "Demand paging, Copy-on-write, Page replacement",
          "Allocation of frames, Thrashing",
          "Storage Management: Overview of Mass Storage Structure",
          "HDD Scheduling"],
        explanation: `
Memory management keeps track of which parts of memory are in use and by whom, decides which processes to load when memory space becomes available, and allocates/deallocates memory.

**Paging**: divides physical memory into fixed-size frames and logical memory into pages of the same size. A page table maps logical pages to physical frames, allowing non-contiguous physical allocation.

**Virtual Memory**: lets programs use more memory than physically available by keeping inactive pages on disk (swap space). Uses demand paging — pages loaded only when referenced.

**Page replacement** (when a page fault occurs and memory is full): FIFO, LRU (Least Recently Used), Optimal, LFU.
        `,
        keyConcepts: ["Page table", "Frame/Page", "Demand paging", "Page fault", "LRU/FIFO replacement"],
        qa: [
          {
            q: "What is paging?",
            a:
              "Paging is a memory-management scheme that eliminates the need for contiguous allocation of physical memory. Logical memory is divided into pages and physical memory into frames of equal size.",
            explanation:
              "A page table maps each logical page to a physical frame. This allows a process's pages to be scattered in physical memory while appearing contiguous to the program, reducing external fragmentation.",
            oneShotPreview:
              "Paging = fixed-size pages/frames + page table; avoids external fragmentation.",
          },
          {
            q: "What is a page fault?",
            a:
              "A page fault occurs when a program references a page that is mapped in its virtual address space but is not currently loaded in physical memory.",
            explanation:
              "On a page fault, the OS traps the fault, finds the page on disk, finds a free frame (or evicts one using a replacement algorithm), loads the page, updates the page table, and restarts the instruction.",
            oneShotPreview:
              "Page fault = needed page not in RAM; OS loads it from disk transparently.",
          },
          {
            q: "What is thrashing in virtual memory?",
            a:
              "Thrashing occurs when a process spends more time paging (swapping pages in and out) than executing, due to insufficient physical memory.",
            explanation:
              "Thrashing is caused by high page fault rate. Solutions include increasing physical memory, reducing multiprogramming, or using working set model to manage page frames.",
            oneShotPreview:
              "Thrashing = excessive paging; process spends more time swapping than computing.",
          }],
      },
      {
        number: 5,
        title: "File System and Protection",
        topics: [
          "File System: File System Interface",
          "File concept, Access methods, Directory Structure",
          "File system Implementation: File-system structure",
          "File-system Operations, Directory implementation",
          "Allocation method, Free space management",
          "File-System Internals: File-System Mounting",
          "Partitions and Mounting, File Sharing",
          "Protection: Goals of protection, Principles of protection",
          "Protection Rings, Domain of protection, Access matrix"],
        explanation: `
A **file** is a named collection of related information recorded on secondary storage. The OS provides operations: create, write, read, reposition, truncate, open, close, delete.

**Access methods**: sequential (read record by record), direct/random access (read any block), indexed sequential.

**File allocation** determines how file blocks map to disk blocks:
- **Contiguous**: fast sequential access, suffers external fragmentation.
- **Linked**: each block points to next; good for sequential, poor for random.
- **Indexed**: one index block holds pointers to data blocks; supports random access well.

**I/O management**: device drivers, buffering, caching, spooling, and interrupt-driven or DMA-based I/O.
        `,
        keyConcepts: ["File operations", "Allocation methods", "Directory structure", "Buffering & Spooling"],
        qa: [
          {
            q: "Compare contiguous, linked and indexed file allocation.",
            a:
              "Contiguous: fast sequential + random access, but external fragmentation. Linked: no external fragmentation, good sequential, poor random access (must traverse pointers). Indexed: supports random access via an index block; slightly more overhead.",
            explanation:
              "The choice depends on access pattern. Contiguous is best when file size is known and access is heavy; indexed is the most general-purpose.",
            oneShotPreview:
              "Contiguous=fast+frag; linked=good-seq/poor-random; indexed=best random access.",
          },
          {
            q: "What is the difference between file system interface and implementation?",
            a:
              "Interface defines how users interact with files (create, read, write, delete). Implementation handles how files are stored on disk (allocation, free space, directory structure).",
            explanation:
              "Separating interface from implementation allows the OS to change storage methods without affecting user programs. The interface provides a consistent API.",
            oneShotPreview:
              "Interface = user API; Implementation = disk storage details.",
          },
          {
            q: "What is protection in an operating system?",
            a:
              "Protection is the mechanism that controls access to system resources. It uses access matrices, protection rings, and domains to enforce security policies.",
            explanation:
              "Protection rings (0-3 in x86) provide hardware-enforced privilege levels. Ring 0 is kernel mode, Ring 3 is user mode. Access matrix defines who can access what.",
            oneShotPreview:
              "Protection = access control via rings, domains, and access matrices.",
          }],
      }],
  },
  {
    id: "23CS0512",
    code: "23CS0512",
    name: "Database Management Systems",
    shortName: "DBMS",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "M.SHILPA",
    credits: 3,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23CS0512.pdf",
    description:
      "Introduction to database systems, ER model, relational model, SQL, normalization, transactions, concurrency control, and recovery.",
    units: [
      {
        number: 1,
        title: "Introduction and ER Model",
        topics: [
          "Database system, Characteristics (Database Vs File System)",
          "Database Users, Advantages of Database systems",
          "Database applications, Data Models",
          "Concepts of Schema, Instance and data independence",
          "Three tier schema architecture for data independence",
          "Database system structure, environment",
          "Centralized and Client Server architecture",
          "ER Model: entities, attributes, entity set",
          "Relationship, relationship set, constraints",
          "Sub classes, super class, inheritance",
          "Specialization, generalization using ER Diagrams"],
        explanation: `
A **Database Management System (DBMS)** is software for creating and managing databases. Compared to traditional file systems, a DBMS reduces data redundancy and inconsistency, provides data sharing, enforces integrity constraints, and offers backup/recovery.

**Three-schema architecture**: External (user views), Conceptual (community view), Internal (physical storage). This provides data independence — logical and physical.

**ER Model**: a high-level conceptual data model.
- **Entity**: a real-world object (e.g., Student, Course).
- **Attribute**: property of an entity (e.g., student name).
- **Relationship**: association among entities (e.g., Student enrolls in Course).
- **Cardinality ratios**: one-to-one, one-to-many, many-to-many.
        `,
        keyConcepts: ["DBMS vs file system", "Three-schema architecture", "Entity/Attribute/Relationship", "ER diagram", "Cardinality"],
        qa: [
          {
            q: "How does DBMS differ from a file-processing system?",
            a:
              "In file systems, data is scattered in application-specific files leading to redundancy, inconsistency, and difficult access. A DBMS centralizes data, enforces integrity, supports concurrent access, and provides recovery and security.",
            explanation:
              "File systems suit small, single-user needs. A DBMS is needed when data is shared, large, and must remain consistent across many users and applications.",
            oneShotPreview:
              "DBMS = centralized, consistent, shared, secure data; file system = fragmented, redundant, isolated.",
          },
          {
            q: "What is an ER diagram used for?",
            a:
              "An Entity-Relationship diagram models data at a conceptual level: entities (rectangles), attributes (ellipses), and relationships (diamonds), before designing tables.",
            explanation:
              "ER diagrams help stakeholders visualize data requirements independently of any specific DBMS, forming the blueprint for relational table design.",
            oneShotPreview:
              "ER diagram = conceptual blueprint of entities, attributes, relationships.",
          },
          {
            q: "What is the difference between a schema and an instance?",
            a:
              "A schema is the logical structure/design of the database (like a blueprint). An instance is the actual data stored in the database at a particular moment in time.",
            explanation:
              "The schema rarely changes, while the instance changes frequently as data is inserted, updated, or deleted. Schema changes require DDL operations.",
            oneShotPreview:
              "Schema = structure/blueprint; Instance = actual data at a moment.",
          },
          {
            q: "What is data independence?",
            a:
              "Data independence is the ability to change the schema at one level without affecting the schema at the next higher level. Physical data independence and logical data independence.",
            explanation:
              "Physical: change storage without affecting conceptual schema. Logical: change conceptual schema without affecting external views. This is a key advantage of DBMS over file systems.",
            oneShotPreview:
              "Data independence = change schema at one level without affecting higher levels.",
          }],
      },
      {
        number: 2,
        title: "Relational Model and Basic SQL",
        topics: [
          "Relational Model: domain, attribute, tuple, relation",
          "Importance of null values, constraints",
          "Domain, Key constraints, integrity constraints",
          "Relational Algebra, Relational Calculus",
          "BASIC SQL: Simple Database schema, data types",
          "Table definitions (create, alter)",
          "DML operations (insert, delete, update)"],
        explanation: `
The **relational model** represents data as relations (tables) with tuples (rows) and attributes (columns). Each relation has a schema.

**Keys**:
- **Primary key**: uniquely identifies each row in a table.
- **Foreign key**: a column that references the primary key of another table, enforcing referential integrity.

**SQL** (Structured Query Language) sub-languages:
- **DDL**: CREATE, ALTER, DROP, TRUNCATE (define structure).
- **DML**: INSERT, UPDATE, DELETE (modify data).
- **DQL**: SELECT (query data).
- **DCL**: GRANT, REVOKE (permissions).
- **TCL**: COMMIT, ROLLBACK (transactions).

**Joins** combine rows from two or more tables: INNER, LEFT, RIGHT, FULL OUTER, CROSS.
        `,
        keyConcepts: ["Relation/Tuple/Attribute", "Primary & Foreign keys", "SQL sub-languages", "Joins", "Views"],
        qa: [
          {
            q: "What is the difference between primary key and foreign key?",
            a:
              "A primary key uniquely identifies each row within its own table and cannot be NULL. A foreign key is a column in one table that refers to the primary key of another table, establishing a link and enforcing referential integrity.",
            explanation:
              "Primary keys ensure uniqueness within a table. Foreign keys ensure that a value in one table matches an existing value in another (e.g., an order's customer_id must exist in the customer table).",
            oneShotPreview:
              "PK uniquely IDs rows in its table; FK links to another table's PK.",
          },
          {
            q: "What are the types of SQL joins?",
            a:
              "INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from the left table plus matches from the right. RIGHT JOIN returns all rows from the right plus matches from the left. FULL OUTER returns all rows from both, with NULLs where no match.",
            explanation:
              "Use INNER when you only want complete pairs; use LEFT/RIGHT when you want to keep all rows from one side even without matches.",
            oneShotPreview:
              "INNER=match both; LEFT/KEEP-left; RIGHT=keep-right; FULL=keep-all.",
          },
          {
            q: "What is relational algebra?",
            a:
              "Relational algebra is a procedural query language with operations like select (σ), project (π), union, intersection, difference, Cartesian product, and join that operate on relations.",
            explanation:
              "It provides the theoretical foundation for SQL. Each SQL query can be translated into a relational algebra expression for optimization.",
            oneShotPreview:
              "Relational algebra = procedural ops (select, project, join, union) on relations.",
          },
          {
            q: "What are the different types of keys in a relational database?",
            a:
              "Super key, candidate key, primary key, alternate key, foreign key, and composite key.",
            explanation:
              "Super key: any set of attributes that uniquely identifies a tuple. Candidate key: minimal super key. Primary key: chosen candidate key. Foreign key: references another table's primary key.",
            oneShotPreview:
              "Keys: super, candidate, primary, alternate, foreign, composite.",
          }],
      },
      {
        number: 3,
        title: "SQL",
        topics: [
          "Basic SQL querying (select and project)",
          "where clause, arithmetic & logical operations",
          "SQL functions (Date and Time, Numeric, String conversion)",
          "Creating tables with relationship, key and integrity constraints",
          "Nested queries, sub queries, grouping, aggregation, ordering",
          "Different types of joins, view (updatable and non-updatable)",
          "Relational set operations"],
        explanation: `
**Normalization** is the process of organizing tables to reduce redundancy and avoid anomalies.

**Anomalies** in unnormalized tables:
- **Insert anomaly**: can't add data because of missing unrelated info.
- **Update anomaly**: updating one row requires updating many (inconsistency risk).
- **Delete anomaly**: deleting a row loses unrelated data.

**Normal forms**:
- **1NF**: atomic values, no repeating groups.
- **2NF**: 1NF + no partial dependency of non-key attributes on part of a composite key.
- **3NF**: 2NF + no transitive dependency (non-key attribute depends on another non-key attribute).
- **BCNF**: stricter version of 3NF — every determinant is a candidate key.
        `,
        keyConcepts: ["Functional dependency", "1NF/2NF/3NF/BCNF", "Insert/Update/Delete anomalies", "Lossless decomposition"],
        qa: [
          {
            q: "What is a SELECT query in SQL?",
            a:
              "SELECT retrieves data from one or more tables. Syntax: SELECT columns FROM table WHERE condition. Example: SELECT name, age FROM students WHERE age > 18.",
            explanation:
              "SELECT is the most used SQL command. It can filter rows (WHERE), sort (ORDER BY), group (GROUP BY), and aggregate (COUNT, SUM, AVG, MAX, MIN).",
            oneShotPreview:
              "SELECT = retrieve data from tables with optional filtering and sorting.",
          },
          {
            q: "What is the difference between WHERE and HAVING?",
            a:
              "WHERE filters rows before grouping (used with SELECT). HAVING filters groups after GROUP BY (used with aggregate functions).",
            explanation:
              "WHERE operates on individual rows; HAVING operates on grouped results. Example: SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5.",
            oneShotPreview:
              "WHERE = filter rows; HAVING = filter groups (after GROUP BY).",
          },
          {
            q: "What are SQL joins? Explain types.",
            a:
              "INNER JOIN: matching rows from both tables. LEFT JOIN: all left rows + matches. RIGHT JOIN: all right rows + matches. FULL OUTER JOIN: all rows from both. CROSS JOIN: Cartesian product.",
            explanation:
              "Joins combine tables based on a related column. INNER JOIN is most common; LEFT JOIN preserves all left table rows even without matches.",
            oneShotPreview:
              "Joins: INNER (match), LEFT/RIGHT (preserve one side), FULL (all), CROSS (cartesian).",
          },
          {
            q: "What is a view in SQL?",
            a:
              "A view is a virtual table based on a SELECT query. It doesn't store data; it stores the query definition. Updatable views allow INSERT/UPDATE/DELETE.",
            explanation:
              "Views provide data security (hide columns), simplify complex queries, and present data in a user-friendly format. Materialized views store actual data.",
            oneShotPreview:
              "View = virtual table from a query; no data stored, just the definition.",
          },
          {
            q: "What are nested and sub queries?",
            a:
              "A subquery is a query nested inside another query. It can be used in WHERE, FROM, or SELECT clauses. Example: SELECT name FROM emp WHERE salary > (SELECT AVG(salary) FROM emp).",
            explanation:
              "Subqueries can be correlated (reference outer query) or non-correlated. They simplify complex queries but may impact performance.",
            oneShotPreview:
              "Subquery = query inside a query; used in WHERE/FROM/SELECT.",
          }],
      },
      {
        number: 4,
        title: "Schema Refinement (Normalization)",
        topics: [
          "Purpose of Normalization or schema refinement",
          "Concept of functional dependency",
          "Normal forms based on functional dependency",
          "Lossless join and dependency preserving decomposition",
          "1NF, 2NF, 3NF, BCNF",
          "Concept of surrogate key",
          "MVD, 4NF, 5NF"],
        explanation: `
A **transaction** is a logical unit of work that must be treated as indivisible. **ACID properties**:
- **Atomicity**: all or nothing.
- **Consistency**: brings DB from one valid state to another.
- **Isolation**: concurrent transactions don't interfere.
- **Durability**: committed changes survive crashes.

**Concurrency control** ensures isolation when transactions run at the same time. **Locking** is the most common technique:
- **Shared (S) lock**: for reading.
- **Exclusive (X) lock**: for writing.
- **Two-Phase Locking (2PL)**: a transaction acquires all locks it needs (growing phase) then releases them (shrinking phase), never acquiring a new lock after releasing one.
        `,
        keyConcepts: ["ACID", "Serializability", "Shared & Exclusive locks", "Two-Phase Locking"],
        qa: [
          {
            q: "What is normalization and why is it needed?",
            a:
              "Normalization is the process of organizing database tables to reduce data redundancy and avoid insertion, update, and delete anomalies.",
            explanation:
              "Unnormalized tables have redundant data leading to anomalies. Normalization splits tables based on functional dependencies, ensuring each fact is stored once.",
            oneShotPreview:
              "Normalization = reduce redundancy + avoid anomalies by splitting tables.",
          },
          {
            q: "What are the normal forms (1NF, 2NF, 3NF, BCNF)?",
            a:
              "1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependency. 3NF: 2NF + no transitive dependency. BCNF: stricter 3NF where every determinant is a candidate key.",
            explanation:
              "Each normal form addresses a specific type of redundancy. 1NF ensures atomicity, 2NF removes partial dependencies, 3NF removes transitive dependencies, BCNF is stricter.",
            oneShotPreview:
              "1NF=atomic; 2NF=no partial dep; 3NF=no transitive dep; BCNF=stricter 3NF.",
          },
          {
            q: "What is a functional dependency?",
            a:
              "A functional dependency X→Y means that for any two tuples, if they agree on X, they must agree on Y. X determines Y.",
            explanation:
              "Functional dependencies capture business rules about data (e.g., student_id → student_name). They are the basis for normalization.",
            oneShotPreview:
              "Functional dependency X→Y: X determines Y.",
          },
          {
            q: "What is lossless join decomposition?",
            a:
              "A decomposition is lossless if joining the decomposed tables produces exactly the original table without spurious (extra) tuples.",
            explanation:
              "Lossless join ensures no data is lost or added during decomposition. It's verified using common attributes that form a super key of one of the decomposed tables.",
            oneShotPreview:
              "Lossless join = decomposition that can be reversed without data loss.",
          }],
      },
      {
        number: 5,
        title: "Transaction Concept and Indexing",
        topics: [
          "Transaction Concept: Transaction State, ACID properties",
          "Concurrent Executions, Serializability, Recoverability",
          "Implementation of Isolation, Testing for Serializability",
          "Lock based, time stamp based, optimistic concurrency protocols",
          "Deadlocks, Failure Classification, Storage, Recovery and Atomicity",
          "Recovery algorithm",
          "Introduction to Indexing Techniques: B+ Trees",
          "Operations on B+Trees, Hash Based Indexing"],
        explanation: `
**Recovery** restores the database to a consistent state after a failure. The **log** records every transaction's actions (start, updates, commit/abort) so the system can redo committed transactions and undo incomplete ones after a crash.

A **checkpoint** periodically writes all modified buffers to disk and records a checkpoint marker, reducing the amount of log that must be replayed during recovery.

**Indexing** speeds up data retrieval:
- **B+ Tree**: widely used in databases; all data pointers are in leaf nodes, which are linked for range queries.
- **Hash index**: fast for point (equality) lookups, poor for range queries.
        `,
        keyConcepts: ["Log-based recovery", "Checkpoint", "B+ Tree index", "Hash index"],
        qa: [
          {
            q: "What are ACID properties?",
            a:
              "Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent txns appear isolated), Durability (committed data persists after crash).",
            explanation:
              "Together, ACID guarantees that database transactions are reliable even with errors, concurrent access, or system crashes.",
            oneShotPreview:
              "ACID = Atomicity, Consistency, Isolation, Durability.",
          },
          {
            q: "What is Two-Phase Locking (2PL)?",
            a:
              "2PL is a concurrency-control protocol where a transaction first obtains all the locks it needs (growing phase), performs its work, then releases locks (shrinking phase), and never requests a new lock afterward.",
            explanation:
              "2PL guarantees conflict serializability, but can lead to deadlocks which must be detected or prevented.",
            oneShotPreview:
              "2PL = grow locks then shrink locks; guarantees serializability.",
          },
          {
            q: "What is serializability?",
            a:
              "Serializability is the property that the result of executing transactions concurrently is equivalent to executing them in some serial order.",
            explanation:
              "It ensures that concurrent execution produces the same result as if transactions ran one at a time, maintaining data consistency.",
            oneShotPreview:
              "Serializability = concurrent result equals some serial execution.",
          },
          {
            q: "What is a B+ Tree index?",
            a:
              "A B+ Tree is a balanced tree data structure used for database indexing. All data pointers are in leaf nodes, which are linked for efficient range queries.",
            explanation:
              "B+ Trees provide O(log n) search, insert, and delete. They are the most common index structure in relational databases because they support both point and range queries.",
            oneShotPreview:
              "B+ Tree = balanced index tree; leaves linked for range queries.",
          }],
      }],
  },
  {
    id: "23CS0513",
    code: "23CS0513",
    name: "Software Engineering",
    shortName: "SE",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "Dr. B. PAVAN KUMAR",
    credits: 3,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23CS0513.pdf",
    description:
      "Software life cycle models, requirements, design, coding, testing, maintenance, and software project management.",
    units: [
      {
        number: 1,
        title: "Introduction and Software Life Cycle Models",
        topics: [
          "What is Software Engineering",
          "Software Process Models: Waterfall, Prototyping, Spiral, Agile",
          "Requirement Engineering",
          "Feasibility Study"],
        explanation: `
**Software Engineering** is the application of engineering principles to software development in a systematic, methodical, quantifiable manner.

**Process models**:
- **Waterfall**: linear sequential phases (requirements → design → implementation → testing → maintenance). Good for well-understood, stable requirements.
- **Prototyping**: build a quick prototype to clarify requirements, then refine.
- **Spiral**: iterative with risk analysis at each cycle. Good for large, risky projects.
- **Agile/Scrum**: iterative, incremental, customer-collaborative, embraces change.

**Requirement engineering**: eliciting, analyzing, documenting, and validating what the system must do.
        `,
        keyConcepts: ["Software engineering definition", "Waterfall/Prototyping/Spiral/Agile", "Requirements engineering", "Feasibility"],
        qa: [
          {
            q: "What is the difference between Waterfall and Agile?",
            a:
              "Waterfall is linear and sequential — each phase completes before the next begins; changes are costly late in the cycle. Agile is iterative and incremental — working software is delivered frequently, and changing requirements are welcomed.",
            explanation:
              "Use Waterfall when requirements are fixed and well-understood. Use Agile when requirements are expected to evolve and fast feedback is valuable.",
            oneShotPreview:
              "Waterfall=linear/fixed; Agile=iterative/embracing-change.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Software Project Management and Requirements",
        topics: [
          "Software project management complexities",
          "Responsibilities of a software project manager",
          "Metrics for project size estimation",
          "Project estimation techniques, Empirical Estimation techniques",
          "COCOMO, Halstead's software science",
          "Risk management",
          "Requirements gathering and analysis",
          "Software Requirements Specification (SRS)",
          "Formal system specification, Axiomatic specification",
          "Algebraic specification, Executable specification and 4GL"],
        explanation: `
Good software design manages complexity. Key principles:
- **Abstraction**: suppress irrelevant details, focus on essentials.
- **Modularity**: divide software into separately named and addressable components.
- **Cohesion**: how strongly related the elements within a module are (high cohesion is good).
- **Coupling**: degree of interdependence between modules (low coupling is good).

**UML** (Unified Modeling Language) provides standard diagrams: Use Case, Class, Sequence, Activity, State, Component, Deployment.
        `,
        keyConcepts: ["Abstraction & Modularity", "High cohesion / Low coupling", "UML diagrams"],
        qa: [
          {
            q: "What is cohesion and coupling?",
            a:
              "Cohesion measures how focused a single module is (high cohesion = module does one thing well). Coupling measures how much modules depend on each other (low coupling = modules are independent). Goal: high cohesion, low coupling.",
            explanation:
              "High cohesion + low coupling makes software easier to understand, test, reuse, and maintain.",
            oneShotPreview:
              "High cohesion (focused), low coupling (independent) = good design.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Software Design and Agility",
        topics: [
          "Overview of the design process",
          "How to characterize a good software design",
          "Layered arrangement of modules, Cohesion and Coupling",
          "Approaches to software design",
          "Agility and the Cost of Change",
          "Agile Process, Extreme Programming (XP)",
          "Other Agile Process Models",
          "Tool Set for the Agile Process",
          "Function-Oriented Software Design: SA/SD methodology",
          "Structured analysis, DFD model, Structured design",
          "User Interface Design: characteristics, types, methodology"],
        explanation: `
**Testing** is the process of executing a program with the intent of finding errors.

**Levels of testing**:
- **Unit testing**: test individual functions/modules in isolation.
- **Integration testing**: test combined modules working together.
- **System testing**: test the complete, integrated system.
- **Acceptance testing**: user validates the system meets requirements.

**Black-box testing**: test based on requirements/specs without looking at code. **White-box testing**: test internal structure, logic, paths.
        `,
        keyConcepts: ["Unit/Integration/System/Acceptance testing", "Black-box vs white-box", "Test cases"],
        qa: [
          {
            q: "What is the difference between black-box and white-box testing?",
            a:
              "Black-box testing examines functionality against requirements without knowledge of internal code. White-box testing examines internal logic, code paths, and branches.",
            explanation:
              "Black-box answers 'does it do what the user wants?'; white-box answers 'is the internal code correct and fully exercised?'.",
            oneShotPreview:
              "Black-box=requirements-based, no code view. White-box=internal logic.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Coding and Testing and Software Reliability",
        topics: [
          "Coding, Code review, Software documentation",
          "Testing, Black-box testing, White-Box testing",
          "Debugging, Program analysis tools",
          "Integration testing, Testing object-oriented programs",
          "Smoke testing, general issues with testing",
          "Software reliability, Statistical testing",
          "Software quality, Software quality management system",
          "ISO 9000, SEI Capability maturity model",
          "Six Sigma"],
        explanation: `
**Maintenance** keeps software running after delivery:
- **Corrective**: fix bugs.
- **Adaptive**: adapt to new environments (OS, hardware).
- **Perfective**: improve performance or add features.
- **Preventive**: improve future maintainability (reengineering).

**COCOMO** (Constructive Cost Model) estimates effort and schedule based on project size (lines of code) and cost drivers.
        `,
        keyConcepts: ["Maintenance types", "COCOMO estimation", "Risk management", "Configuration management"],
        qa: [
          {
            q: "What are the four types of software maintenance?",
            a:
              "Corrective (fix defects), Adaptive (adapt to environment changes), Perfective (improve/add functionality), Preventive (reduce future problems).",
            explanation:
              "Most maintenance effort is perfective — users request enhancements as they use the software.",
            oneShotPreview:
              "Corrective/adaptive/perfective/preventive maintenance.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "CASE, Software Maintenance and Reuse",
        topics: [
          "Computer-Aided Software Engineering (CASE)",
          "CASE environment, scope, support in software life cycle",
          "Characteristics of CASE tools, second generation CASE",
          "Architecture of a CASE Environment",
          "Software Maintenance: characteristics",
          "Software reverse engineering",
          "Software maintenance process models",
          "Estimation of maintenance cost",
          "Software Reuse: definition, issues, reuse approach",
          "Reuse at organization level"],
        explanation: `
Modern software engineering emphasizes short feedback loops:
- **Scrum**: time-boxed iterations (sprints), roles: Product Owner, Scrum Master, Development Team; artifacts: product backlog, sprint backlog, increment.
- **DevOps**: collaboration between development and operations; **CI/CD** automates build, test, and deployment.
- **Git**: distributed version control for tracking changes and collaborating.
        `,
        keyConcepts: ["Scrum roles & ceremonies", "CI/CD pipeline", "Git version control", "Refactoring"],
        qa: [
          {
            q: "What is CI/CD?",
            a:
              "Continuous Integration (CI) = frequently merging code changes and automatically building/testing. Continuous Deployment/Delivery (CD) = automatically releasing tested changes to production.",
            explanation:
              "CI/CD reduces integration risk, catches bugs early, and enables rapid, reliable releases.",
            oneShotPreview:
              "CI=auto build/test on merge; CD=auto release to production.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23HS0838",
    code: "23HS0838",
    name: "Probability & Statistics",
    shortName: "P&S",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "M.M. MUNISEKHAR (BS&H)",
    credits: 3,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23HS0838.pdf",
    description:
      "Probability theory, random variables, probability distributions, sampling, estimation, testing of hypothesis, correlation and regression.",
    units: [
      {
        number: 1,
        title: "Descriptive Statistics",
        topics: [
          "Statistics Introduction, Population vs Sample",
          "Collection of data, primary and secondary data",
          "Measures of Central tendency",
          "Measures of Variability (spread or variance)",
          "Skewness, Kurtosis",
          "Correlation, correlation coefficient, rank correlation",
          "Regression coefficients, method of least squares, regression lines"],
        explanation: `
**Probability** measures the likelihood of an event, ranging from 0 (impossible) to 1 (certain).

**Sample space** is the set of all possible outcomes. An **event** is a subset of the sample space.

**Conditional probability** P(A|B) = probability of A given B has occurred. **Bayes' theorem** reverses conditional probability: P(A|B) = P(B|A)·P(A) / P(B).
        `,
        keyConcepts: ["Sample space", "Conditional probability", "Bayes' theorem", "Random variable"],
        qa: [
          {
            q: "What are measures of central tendency?",
            a:
              "Mean (average), median (middle value), and mode (most frequent value). Mean is sensitive to outliers; median is robust; mode is useful for categorical data.",
            explanation:
              "Central tendency summarizes a dataset with a single representative value. Choose based on data distribution and presence of outliers.",
            oneShotPreview:
              "Central tendency: mean (average), median (middle), mode (most frequent).",
          },
          {
            q: "What is the difference between variance and standard deviation?",
            a:
              "Variance is the average squared deviation from the mean. Standard deviation is the square root of variance, giving spread in original units.",
            explanation:
              "Variance (σ²) is in squared units; standard deviation (σ) is in original units, making it more interpretable. Both measure data spread.",
            oneShotPreview:
              "Variance = avg squared deviation; Std dev = sqrt(variance).",
          },
          {
            q: "What is correlation and regression?",
            a:
              "Correlation measures the strength and direction of linear relationship between two variables (-1 to +1). Regression models the relationship to predict one variable from another using least squares.",
            explanation:
              "Correlation (r) indicates association; regression (y = a + bx) enables prediction. R² measures the proportion of variance explained.",
            oneShotPreview:
              "Correlation = strength of linear relation; Regression = prediction model.",
          }],
      },
      {
        number: 2,
        title: "Probability",
        topics: [
          "Probability, probability axioms",
          "Addition law and multiplicative law of probability",
          "Conditional probability, Baye's theorem",
          "Random variables (discrete and continuous)",
          "Probability density functions, properties",
          "Mathematical expectation"],
        explanation: `
A **probability distribution** describes how probabilities are distributed over the values of a random variable.

- **Binomial**: number of successes in n independent trials (e.g., coin tosses).
- **Poisson**: number of events in a fixed interval (e.g., calls per hour).
- **Normal (Gaussian)**: bell-shaped, defined by mean (μ) and standard deviation (σ); central to statistics due to the Central Limit Theorem.
        `,
        keyConcepts: ["Binomial", "Poisson", "Normal/Gaussian", "Expectation", "Variance"],
        qa: [
          {
            q: "State Bayes' theorem.",
            a:
              "P(A|B) = [P(B|A) × P(A)] / P(B). It lets us update the probability of hypothesis A given evidence B.",
            explanation:
              "Bayes' theorem is fundamental in machine learning, spam filtering, medical diagnosis, and any reasoning under uncertainty.",
            oneShotPreview:
              "Bayes': P(A|B) = P(B|A)P(A)/P(B); updates belief given evidence.",
          },
          {
            q: "What is conditional probability?",
            a:
              "P(A|B) = P(A and B) / P(B), the probability of A given that B has occurred.",
            explanation:
              "Conditional probability measures how the probability of an event changes when we know another event has occurred.",
            oneShotPreview:
              "P(A|B) = P(A and B)/P(B); probability given B.",
          },
          {
            q: "What are the axioms of probability?",
            a:
              "1. P(A) >= 0. 2. P(S) = 1. 3. For mutually exclusive events, P(A union B) = P(A) + P(B).",
            explanation:
              "These three axioms (Kolmogorov) form the foundation of probability theory. All other probability rules derive from them.",
            oneShotPreview:
              "Axioms: non-negative, total = 1, additive for disjoint events.",
          }],
      },
      {
        number: 3,
        title: "Probability Distributions",
        topics: [
          "Probability distributions: Binomial, Poisson and Normal",
          "Their properties (Chebyshev's inequality)",
          "Approximation of binomial to normal distribution"],
        explanation: `
**Sampling** selects a subset of a population to estimate population characteristics. A **point estimate** is a single value estimate; an **interval estimate** (confidence interval) gives a range with a stated confidence level.
        `,
        keyConcepts: ["Sampling distribution", "Point estimate", "Confidence interval"],
        qa: [
          {
            q: "What is a confidence interval?",
            a:
              "A range of values, computed from sample data, that is likely to contain the true population parameter (e.g., 95% confidence interval for the mean).",
            explanation:
              "Higher confidence → wider interval; larger sample → narrower interval.",
            oneShotPreview:
              "CI = range likely to contain true parameter; 95% common.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Estimation and Testing of Hypothesis",
        topics: [
          "Estimation: parameters, statistics, sampling distribution",
          "Point estimation, Formulation of null hypothesis",
          "Alternative hypothesis, critical and acceptance regions",
          "Level of significance, two types of errors, power of the test",
          "Large Sample Tests: Test for single proportion",
          "Difference of proportions, test for single mean",
          "Difference of means, Confidence interval for parameters"],
        explanation: `
**Hypothesis testing** decides whether sample evidence supports a claim about a population.

- **Null hypothesis (H₀)**: statement of no effect/no difference (assumed true until evidence says otherwise).
- **Alternative hypothesis (H₁)**: the claim we seek evidence for.
- **Type I error**: rejecting H₀ when true (false positive). **Type II error**: failing to reject H₀ when false (false negative).
- **p-value**: probability of observing data at least as extreme, assuming H₀ true. Small p-value → reject H₀.
        `,
        keyConcepts: ["H₀/H₁", "Type I & II errors", "Z-test/t-test/Chi-square", "p-value"],
        qa: [
          {
            q: "What are Type I and Type II errors?",
            a:
              "Type I = rejecting a true null hypothesis (false alarm). Type II = failing to reject a false null hypothesis (missed detection).",
            explanation:
              "There's a tradeoff: lowering Type I error (stricter criterion) tends to raise Type II error, and vice versa.",
            oneShotPreview:
              "Type I=false positive; Type II=false negative.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Small Sample Tests",
        topics: [
          "Student t-distribution",
          "Test for single mean, two means and paired t-test",
          "Testing of equality of variances (F-test)",
          "Chi-square test for goodness of fit",
          "Chi-square test for independence of attributes"],
        explanation: `
**Correlation** measures the strength and direction of a linear relationship between two variables (−1 to +1). **Regression** models the relationship to predict one variable from another.

**Simple linear regression**: ŷ = a + bx, fitted by the **least squares method** (minimizing sum of squared residuals). **R²** = proportion of variance explained by the model.
        `,
        keyConcepts: ["Correlation coefficient", "Simple linear regression", "Least squares", "R²"],
        qa: [
          {
            q: "What does R² represent?",
            a:
              "R² (coefficient of determination) is the proportion of variance in the dependent variable predictable from the independent variable(s), ranging 0 to 1. Higher = better fit.",
            explanation:
              "R² = 1 means the model explains all variation; R² = 0 means it explains none.",
            oneShotPreview:
              "R² = % of variation explained by the model (0 to 1).",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23HS0848",
    code: "23HS0848",
    name: "Managerial Economics & Financial Analysis",
    shortName: "MEFA",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "P.N. VIJAYASREE (MBA)",
    credits: 2,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23HS0848.pdf",
    description:
      "Demand analysis, production, cost, market structures, pricing, financial statements, and capital budgeting.",
    units: [
      {
        number: 1,
        title: "Introduction to Managerial Economics",
        topics: [
          "Managerial Economics: Introduction",
          "Nature, meaning, significance, functions, advantages",
          "Demand: Concept, Function, Law of Demand",
          "Demand Elasticity: Types, Measurement",
          "Demand Forecasting: Factors, Methods",
          "Managerial Economics and Financial Accounting and Management"],
        explanation: `
**Managerial Economics** applies economic theory and methodology to business decision-making.

**Demand** is the quantity of a product consumers are willing and able to buy at various prices. The **law of demand**: price and quantity demanded are inversely related (other things equal).

**Elasticity of demand** measures responsiveness of quantity demanded to changes in price, income, or price of related goods.
        `,
        keyConcepts: ["Demand & law of demand", "Elasticity of demand", "Demand forecasting"],
        qa: [
          {
            q: "What is price elasticity of demand?",
            a:
              "It measures the percentage change in quantity demanded divided by the percentage change in price. |Ed| > 1 elastic (sensitive to price); |Ed| < 1 inelastic (insensitive).",
            explanation:
              "Luxuries tend to be elastic; necessities tend to be inelastic. Firms use this to set prices.",
            oneShotPreview:
              "Ed = %ΔQ / %ΔP; >1 elastic, <1 inelastic.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Production & Cost Analysis",
        topics: [
          "Production and Cost Analysis: Introduction",
          "Nature, meaning, significance, functions, advantages",
          "Production Function: Least-cost combination",
          "Short run and long run Production Function",
          "Isoquants and Isocosts",
          "Cost & Break-Even Analysis",
          "Cost concepts and Cost behavior",
          "Break-Even Analysis (BEA)",
          "Determination of Break-Even Point"],
        explanation: `
A **production function** shows the maximum output from given inputs. In the short run, some inputs are fixed; in the long run, all inputs are variable.

**Costs**: Fixed cost (doesn't change with output), variable cost (changes with output), total = fixed + variable, marginal cost = cost of one more unit, average cost = total / quantity.
        `,
        keyConcepts: ["Production function", "Fixed/variable cost", "Marginal cost", "Economies of scale"],
        qa: [
          {
            q: "What is marginal cost?",
            a:
              "Marginal cost is the additional cost of producing one more unit of output: MC = ΔTotal Cost / ΔQuantity.",
            explanation:
              "Firms maximize profit where marginal cost equals marginal revenue (MC = MR).",
            oneShotPreview:
              "MC = cost of one more unit; profit max at MC=MR.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Business Organizations and Markets",
        topics: [
          "Business Organizations and Markets: Introduction",
          "Forms of Business Organizations: Sole Proprietary",
          "Partnership, Joint Stock Companies",
          "Public Sector Enterprises",
          "Types of Markets: Perfect and Imperfect Competition",
          "Features of Perfect Competition, Monopoly",
          "Monopolistic Competition, Oligopoly",
          "Price-Output Determination",
          "Pricing Methods and Strategies"],
        explanation: `
Market structure describes the degree of competition:
- **Perfect competition**: many firms, identical products, price takers.
- **Monopoly**: single seller, price maker, high barriers.
- **Monopolistic competition**: many firms, differentiated products.
- **Oligopoly**: few large firms, strategic interaction (game theory).
        `,
        keyConcepts: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"],
        qa: [
          {
            q: "What characterizes perfect competition?",
            a:
              "Many buyers and sellers, homogeneous products, free entry/exit, perfect information; firms are price takers (P = MR = MC at equilibrium).",
            explanation:
              "No single firm can influence the market price; agricultural markets are a common example.",
            oneShotPreview:
              "Perfect competition = many firms, identical product, price takers.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Capital Budgeting",
        topics: [
          "Capital Budgeting: Introduction, nature, meaning, significance",
          "Types of Working Capital, Components",
          "Sources of Short-term and Long-term Capital",
          "Estimating Working capital requirements",
          "Capital Budgeting: Features, Proposals, Methods and Evaluation",
          "Projects: Pay Back Method, Accounting Rate of Return (ARR)",
          "Net Present Value (NPV), Internal Rate of Return (IRR)"],
        explanation: `
**Financial accounting** records, summarizes, and reports business transactions via financial statements.

- **Journal**: first book of original entry (chronological).
- **Ledger**: classified accounts.
- **Trial Balance**: checks debits = credits.
- **Trading & P&L Account**: shows gross/net profit.
- **Balance Sheet**: shows assets, liabilities, equity at a point in time.
        `,
        keyConcepts: ["Journal/Ledger/Trial balance", "P&L account", "Balance sheet", "Assets/Liabilities/Equity"],
        qa: [
          {
            q: "What is the accounting equation?",
            a:
              "Assets = Liabilities + Owner's Equity. Every transaction keeps this equation balanced (double-entry bookkeeping).",
            explanation:
              "Assets are resources owned; liabilities are obligations; equity is the owner's claim.",
            oneShotPreview:
              "Assets = Liabilities + Equity (double entry).",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Financial Accounting and Analysis",
        topics: [
          "Financial Accounting: Introduction, Concepts and Conventions",
          "Double-Entry Bookkeeping, Journal, Ledger, Trial Balance",
          "Final Accounts: Trading Account, Profit and Loss Account",
          "Balance Sheet with simple adjustments",
          "Financial Analysis: Liquidity Ratios, Activity Ratios",
          "Capital structure Ratios, Profitability Ratios"],
        explanation: `
**Capital budgeting** decides which long-term investments to make.

- **NPV (Net Present Value)**: present value of future cash flows minus initial investment. Accept if NPV > 0.
- **IRR (Internal Rate of Return)**: discount rate that makes NPV = 0.
- **Payback Period**: time to recover the initial investment.

**Ratio analysis** (liquidity, profitability, solvency) evaluates financial health.
        `,
        keyConcepts: ["Time value of money", "NPV", "IRR", "Payback period", "Ratio analysis"],
        qa: [
          {
            q: "What is NPV and the accept rule?",
            a:
              "NPV = Σ (cash flow_t / (1+r)^t) − initial investment. Accept the project if NPV > 0 (it adds value); reject if NPV < 0.",
            explanation:
              "NPV accounts for the time value of money — a rupee today is worth more than a rupee tomorrow.",
            oneShotPreview:
              "NPV = PV of inflows − investment; accept if NPV > 0.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23HS0815",
    code: "23HS0815",
    name: "Design Thinking & Innovation",
    shortName: "DTI",
    branch: "CSE",
    semester: 2,
    regulation: "R23",
    isLab: false,
    faculty: "Dr. K. DIVAKAR (EEE)",
    credits: 2,
    questionBankUrl:
      "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23HS0815.pdf",
    description:
      "Design thinking process, empathy, ideation, prototyping, testing, innovation and entrepreneurship.",
    units: [
      {
        number: 1,
        title: "Introduction to Design Thinking",
        topics: [
          "Introduction to elements and principles of Design",
          "Basics of design: dot, line, shape, form",
          "Fundamental design components, Principles of design",
          "Introduction to design thinking",
          "History of Design Thinking",
          "New materials in Industry"],
        explanation: `
**Design thinking** is a human-centered approach to innovation that draws from the designer's toolkit to integrate the needs of people, possibilities of technology, and requirements for business success.

Core mindset: start with empathy for the user, embrace ambiguity, and iterate based on feedback.
        `,
        keyConcepts: ["Human-centered design", "Empathy", "Iteration"],
        qa: [
          {
            q: "What is design thinking?",
            a:
              "A human-centered, iterative approach to solving problems by understanding user needs, challenging assumptions, and redefining problems to create innovative solutions.",
            explanation:
              "It's used beyond products — in services, processes, education, and social innovation.",
            oneShotPreview:
              "Human-centered, iterative innovation focused on user needs.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Design Thinking Process",
        topics: [
          "Design thinking process (empathize, analyze, idea & prototype)",
          "Implementing the process in driving inventions",
          "Design thinking in social innovations",
          "Tools of design thinking: person, customer, journey map",
          "Brainstorming, product development",
          "Activity: present idea, flow diagram, product development"],
        explanation: `
The **d.school (Stanford) five-stage model**:

1. **Empathize**: observe, engage, and immerse to understand users' needs.
2. **Define**: synthesize findings into a clear problem statement (point of view).
3. **Ideate**: generate a wide range of ideas (brainstorming).
4. **Prototype**: build low-resolution representations of ideas.
5. **Test**: try prototypes with real users, gather feedback, iterate.

The stages are not always linear — you may loop back based on what you learn.
        `,
        keyConcepts: ["Empathize/Define/Ideate/Prototype/Test", "Iterative loops", "User feedback"],
        qa: [
          {
            q: "Why is the 'Empathize' stage first?",
            a:
              "Because design solutions must address real user needs, not assumed ones. Empathy prevents solving the wrong problem.",
            explanation:
              "Without empathy, teams build elegant solutions to problems nobody has.",
            oneShotPreview:
              "Empathize first to solve real, not assumed, user problems.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Innovation",
        topics: [
          "Art of innovation",
          "Difference between innovation and creativity",
          "Role of creativity and innovation in organizations",
          "Creativity to Innovation, Teams for innovation",
          "Measuring the impact and value of creativity",
          "Activity: Debate on innovation and creativity"],
        explanation: `
**Ideation** is about quantity and diversity of ideas, not quality (initially). Defer judgment, encourage wild ideas, build on others' ideas.

**SCAMPER**: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse — prompts to transform existing ideas into new ones.
        `,
        keyConcepts: ["Brainstorming", "SCAMPER", "Mind mapping", "Defer judgment"],
        qa: [
          {
            q: "What is SCAMPER?",
            a:
              "A checklist of idea-spurring prompts: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse/Rearrange.",
            explanation:
              "Use SCAMPER when stuck — each prompt forces you to look at the product/problem from a different angle.",
            oneShotPreview:
              "SCAMPER = Substitute, Combine, Adapt, Modify, Purpose, Eliminate, Reverse.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Product Design",
        topics: [
          "Problem formation, Introduction to product design",
          "Product strategies, Product value",
          "Product planning, product specifications",
          "Innovation towards product design",
          "Case studies",
          "Activity: modelling, specifications, product design"],
        explanation: `
**Prototypes** range from paper sketches (low-fidelity, fast, cheap) to interactive digital mockups (high-fidelity, closer to final). Test early and cheaply; it's cheaper to change a paper prototype than coded software.

**Usability testing**: watch real users complete tasks with your prototype; observe where they struggle.
        `,
        keyConcepts: ["Low vs high fidelity", "Paper prototyping", "Usability testing"],
        qa: [
          {
            q: "Why prototype before building?",
            a:
              "To validate ideas cheaply and quickly, fail fast, learn from users, and avoid investing in the wrong solution.",
            explanation:
              "A prototype is a question, not an answer — it helps you ask users the right questions.",
            oneShotPreview:
              "Prototype = cheap, fast way to test ideas before building.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Design Thinking in Business Processes",
        topics: [
          "Design Thinking applied in Business & Strategic Innovation",
          "Design Thinking principles that redefine business",
          "Business challenges: Growth, Predictability, Change",
          "Maintaining Relevance, Extreme competition, Standardization",
          "Design thinking to meet corporate needs",
          "Design thinking for Startups",
          "Defining and testing Business Models and Business Cases",
          "Developing & testing prototypes"],
        explanation: `
**Incremental innovation** improves existing products; **disruptive innovation** creates new markets/value networks.

**MVP**: the simplest version of a product that delivers core value and lets you test assumptions with real users.

**Business Model Canvas**: one-page template covering value proposition, customer segments, channels, revenue, cost, key resources, partners, activities.
        `,
        keyConcepts: ["Incremental vs disruptive", "MVP", "Business Model Canvas", "Pitching"],
        qa: [
          {
            q: "What is an MVP?",
            a:
              "A Minimum Viable Product is the smallest version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.",
            explanation:
              "Build-Measure-Learn: build MVP, measure user response, learn, and pivot or persevere.",
            oneShotPreview:
              "MVP = smallest version to test core assumptions with real users.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23CS0506",
    code: "23CS0506",
    name: "Digital Logic and Computer Organization",
    shortName: "C+A+L",
    branch: "CSE",
    semester: 3,
    description:
      "Number systems, Boolean algebra, logic gates, combinational & sequential circuits, computer architecture basics.",
    units: [
      {
        number: 1,
        title: "Number Systems & Boolean Algebra",
        topics: [
          "Binary, Octal, Decimal, Hexadecimal",
          "Boolean Algebra Laws",
          "Logic Gates: AND, OR, NOT, NAND, NOR, XOR",
          "Karnaugh Map Minimization"],
        explanation: `
Digital systems use **binary** (0 and 1). Boolean algebra provides the math for logic circuits. Logic gates (AND, OR, NOT, NAND, NOR, XOR) are the building blocks.

**K-map** is a graphical method to simplify Boolean expressions into minimal sum-of-products.
        `,
        keyConcepts: ["Number systems", "Boolean algebra", "Logic gates", "K-map simplification"],
        qa: [
          {
            q: "What is a universal gate?",
            a:
              "NAND and NOR are universal gates — any Boolean function can be implemented using only NAND gates or only NOR gates.",
            explanation:
              "This is useful because manufacturing one type of gate is cheaper and simpler.",
            oneShotPreview:
              "NAND & NOR are universal; can build any logic function.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Combinational Circuits",
        topics: [
          "Adders: Half, Full",
          "Multiplexers & Demultiplexers",
          "Encoders & Decoders",
          "Comparators"],
        explanation: `
**Combinational circuits** produce output purely from current inputs (no memory). Examples: adders, multiplexers, decoders.

A **half adder** adds two bits (sum + carry). A **full adder** adds three bits (two inputs + carry-in).
        `,
        keyConcepts: ["Combinational vs sequential", "Half/full adder", "Mux/De-mux", "Decoder/Encoder"],
        qa: [
          {
            q: "Difference between half adder and full adder?",
            a:
              "Half adder adds two bits (no carry-in). Full adder adds two bits plus a carry-in from the previous stage.",
            explanation:
              "Full adders are chained to build multi-bit adders (ripple-carry adder).",
            oneShotPreview:
              "Half=2 bits; Full=2 bits + carry-in.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Sequential Circuits",
        topics: [
          "Flip-Flops: SR, JK, D, T",
          "Registers",
          "Counters: Ripple, Synchronous",
          "State Machines"],
        explanation: `
**Sequential circuits** have memory — output depends on current inputs and past state. **Flip-flops** store one bit.

**Counters** count clock pulses. Ripple counters are slow (cascading delay); synchronous counters are faster (all flip-flops clocked together).
        `,
        keyConcepts: ["Flip-flops", "Registers", "Counters", "Finite state machine"],
        qa: [
          {
            q: "What is a flip-flop?",
            a:
              "A bistable sequential circuit that stores one bit of data; output depends on inputs and the previous state.",
            explanation:
              "SR, JK, D, T flip-flops differ in how inputs control state changes.",
            oneShotPreview:
              "Flip-flop = 1-bit memory cell; sequential circuit.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Computer Organization Basics",
        topics: [
          "CPU: ALU, Control Unit, Registers",
          "Instruction Cycle",
          "Addressing Modes",
          "Memory Hierarchy"],
        explanation: `
The **CPU** consists of the ALU (arithmetic/logic), control unit (decodes instructions), and registers (fast storage).

The **instruction cycle**: fetch → decode → execute → (optionally store).

**Memory hierarchy**: registers → cache → main memory (RAM) → disk; speed decreases, capacity and cost-per-bit decrease as you go up.
        `,
        keyConcepts: ["ALU/Control unit/Registers", "Instruction cycle", "Addressing modes", "Memory hierarchy"],
        qa: [
          {
            q: "What are the steps in the instruction cycle?",
            a:
              "Fetch (get instruction from memory), Decode (control unit figures out what to do), Execute (ALU performs operation), Store (write result back).",
            explanation:
              "This repeats continuously as the CPU runs a program.",
            oneShotPreview:
              "Fetch → Decode → Execute → Store.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "I/O & Introduction to Architecture",
        topics: [
          "Programmed I/O, Interrupt-Driven I/O, DMA",
          "Bus Structure",
          "Pipelining (Intro)",
          "RISC vs CISC"],
        explanation: `
**I/O methods**: programmed I/O (CPU waits), interrupt-driven I/O (device signals CPU), DMA (device transfers directly to memory, CPU freed).

**RISC** (Reduced Instruction Set Computer): simple, fixed-length instructions. **CISC** (Complex Instruction Set Computer): rich, variable-length instructions.
        `,
        keyConcepts: ["I/O methods", "DMA", "Bus", "RISC vs CISC", "Pipelining"],
        qa: [
          {
            q: "What is DMA?",
            a:
              "Direct Memory Access lets I/O devices transfer data directly to/from memory without involving the CPU for every byte, freeing the CPU.",
            explanation:
              "Used for high-speed devices like disk and network controllers.",
            oneShotPreview:
              "DMA = device-to-memory transfer bypassing CPU.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23CS0507",
    code: "23CS0507",
    name: "Advanced Data Structures & Algorithm Analysis",
    shortName: "ADSAA",
    branch: "CSE",
    semester: 3,
    description:
      "Algorithm analysis, asymptotic notation, sorting, searching, trees, graphs, hashing, greedy & dynamic programming.",
    units: [
      {
        number: 1,
        title: "Algorithm Analysis",
        topics: [
          "Asymptotic Notation: Big-O, Omega, Theta",
          "Time & Space Complexity",
          "Recurrence Relations",
          "Master Theorem"],
        explanation: `
**Asymptotic notation** describes how running time/space grows with input size n.

- **Big-O (O)**: upper bound (worst case).
- **Omega (Ω)**: lower bound (best case).
- **Theta (Θ)**: tight bound.

The **Master Theorem** solves divide-and-conquer recurrences of the form T(n) = aT(n/b) + f(n).
        `,
        keyConcepts: ["Big-O/Omega/Theta", "Time & space complexity", "Recurrence", "Master Theorem"],
        qa: [
          {
            q: "What does Big-O notation represent?",
            a:
              "Big-O gives the upper bound on growth rate — the worst-case running time as input size grows, ignoring constants and low-order terms.",
            explanation:
              "O(n²) means time grows quadratically; it's the standard way to compare algorithm efficiency.",
            oneShotPreview:
              "Big-O = worst-case upper bound on growth.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Sorting & Searching",
        topics: [
          "Bubble, Selection, Insertion Sort",
          "Merge Sort, Quick Sort, Heap Sort",
          "Linear & Binary Search",
          "Comparison & Stability"],
        explanation: `
**Sorting** arranges data in order. **Merge sort** and **quick sort** are O(n log n) divide-and-conquer sorts. **Binary search** finds an element in a sorted array in O(log n) by repeatedly halving the search range.

**Stable sort** preserves the relative order of equal elements (e.g., merge sort); quick sort is not stable.
        `,
        keyConcepts: ["O(n²) vs O(n log n) sorts", "Binary search", "Stability", "Divide & conquer"],
        qa: [
          {
            q: "When is binary search applicable?",
            a:
              "Binary search requires a **sorted** array. It compares the middle element and discards half the range each step, giving O(log n) time.",
            explanation:
              "If the array is unsorted, sort it first (O(n log n)) or use linear search (O(n)).",
            oneShotPreview:
              "Binary search: needs sorted array, O(log n).",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Trees",
        topics: [
          "Binary Trees & Binary Search Trees",
          "Tree Traversals: In, Pre, Post",
          "AVL Trees",
          "Heaps"],
        explanation: `
A **binary search tree (BST)** keeps keys ordered: left subtree < root < right subtree, enabling O(h) search/insert/delete where h = height.

**AVL trees** are self-balancing BSTs (height difference ≤ 1 between subtrees), guaranteeing O(log n) operations.

A **heap** is a complete binary tree with the heap property; used for priority queues and heap sort.
        `,
        keyConcepts: ["BST", "Tree traversals", "AVL balancing", "Heap"],
        qa: [
          {
            q: "Why balance a BST?",
            a:
              "An unbalanced BST can degenerate into a linked list (height n), making operations O(n). Balancing (e.g., AVL) keeps height O(log n), so operations stay O(log n).",
            explanation:
              "Balance is what makes BSTs efficient for dynamic datasets.",
            oneShotPreview:
              "Balancing keeps BST height O(log n) → fast ops.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Graphs",
        topics: [
          "Graph Representation: Adjacency List/Matrix",
          "BFS & DFS",
          "Shortest Path: Dijkstra",
          "Minimum Spanning Tree: Prim, Kruskal"],
        explanation: `
A **graph** = vertices (nodes) + edges. Represented as adjacency list (space-efficient for sparse graphs) or adjacency matrix.

**BFS** explores level by level (queue); **DFS** goes deep (stack/recursion). **Dijkstra's** finds shortest paths from a source in weighted graphs with non-negative weights.
        `,
        keyConcepts: ["Graph representation", "BFS/DFS", "Dijkstra", "Prim/Kruskal MST"],
        qa: [
          {
            q: "BFS vs DFS: when to use which?",
            a:
              "BFS finds the shortest path in unweighted graphs and explores level by level. DFS is good for path existence, cycle detection, topological sort, and uses less memory in deep graphs.",
            explanation:
              "Choose BFS for shortest-path-unweighted; DFS for exploring all paths/cycles.",
            oneShotPreview:
              "BFS=shortest-unweighted/level-wise; DFS=depth/cycles.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Hashing & Algorithm Design Techniques",
        topics: [
          "Hash Tables & Collision Resolution",
          "Greedy Method",
          "Dynamic Programming",
          "Backtracking"],
        explanation: `
**Hashing** maps keys to array indices via a hash function; collisions handled by chaining or open addressing. Average O(1) insert/lookup.

**Greedy** makes locally optimal choices (works for some problems like activity selection). **Dynamic programming** solves overlapping subproblems by storing results (memoization/tabulation). **Backtracking** explores and abandons paths (N-Queens, sudoku).
        `,
        keyConcepts: ["Hash table", "Collision chaining", "Greedy", "Dynamic programming", "Backtracking"],
        qa: [
          {
            q: "What is dynamic programming?",
            a:
              "DP solves a complex problem by breaking it into overlapping subproblems, solving each once, and storing results to avoid recomputation (memoization bottom-up or top-down).",
            explanation:
              "Use DP when subproblems overlap (e.g., Fibonacci, knapsack, longest common subsequence).",
            oneShotPreview:
              "DP = overlap subproblems + store results → avoid recompute.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23CS0508",
    code: "23CS0508",
    name: "Object-Oriented Programming Through JAVA",
    shortName: "OOPS-Java",
    branch: "CSE",
    semester: 3,
    description:
      "Java basics, classes & objects, inheritance, polymorphism, interfaces, packages, exception handling, multithreading, collections.",
    units: [
      {
        number: 1,
        title: "Java Fundamentals",
        topics: [
          "Java Features & JVM",
          "Data Types, Variables, Operators",
          "Control Statements",
          "Arrays"],
        explanation: `
Java is an object-oriented, platform-independent language. Source compiles to **bytecode** which runs on the **JVM** (Write Once, Run Anywhere).

Basic structure: a class contains fields (data) and methods (behavior); execution starts in ` + "main" + `.
        `,
        keyConcepts: ["JVM & bytecode", "Data types", "Control statements", "Arrays"],
        qa: [
          {
            q: "Why is Java platform independent?",
            a:
              "Java code compiles to bytecode, which runs on any machine with a JVM — the JVM handles the underlying OS/hardware differences ('Write Once, Run Anywhere').",
            explanation:
              "This portability is Java's key advantage for cross-platform applications.",
            oneShotPreview:
              "Bytecode + JVM = Write Once, Run Anywhere.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Classes, Objects & Constructors",
        topics: [
          "Class & Object",
          "Constructors",
          "this Keyword",
          "Overloading",
          "Access Modifiers"],
        explanation: `
A **class** is a blueprint; an **object** is an instance of a class. **Constructors** initialize objects. **Method overloading** lets multiple methods share a name with different parameters.

**Access modifiers**: private, default, protected, public control visibility (encapsulation).
        `,
        keyConcepts: ["Class vs object", "Constructor", "this keyword", "Overloading", "Access modifiers"],
        qa: [
          {
            q: "What is the difference between a class and an object?",
            a:
              "A class is a blueprint/template (e.g., 'Car'). An object is a concrete instance of that class (e.g., 'my red Toyota').",
            explanation:
              "You define a class once, then create many objects from it, each with its own data.",
            oneShotPreview:
              "Class=blueprint; Object=instance of blueprint.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Inheritance & Polymorphism",
        topics: [
          "Inheritance: extends, super",
          "Types of Inheritance",
          "Method Overriding",
          "Polymorphism: Dynamic Binding",
          "Abstract Classes"],
        explanation: `
**Inheritance** lets a subclass inherit fields and methods from a superclass (code reuse, 'is-a' relationship).

**Polymorphism** means 'many forms' — a superclass reference can refer to a subclass object, and the overridden method is resolved at runtime (**dynamic binding**).
        `,
        keyConcepts: ["Inheritance (extends)", "Method overriding", "Dynamic binding", "Abstract class"],
        qa: [
          {
            q: "What is polymorphism in Java?",
            a:
              "The ability of a reference variable to behave differently based on the actual object it refers to — achieved via method overriding and dynamic method dispatch.",
            explanation:
              "Example: an Animal reference pointing to a Dog object calls Dog's overridden makeSound().",
            oneShotPreview:
              "One interface, many forms; runtime method dispatch.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Interfaces, Packages & Exception Handling",
        topics: [
          "Interfaces & Multiple Inheritance",
          "Packages & import",
          "Exception Handling: try-catch-finally, throw, throws",
          "Checked vs Unchecked Exceptions"],
        explanation: `
An **interface** defines a contract (method signatures) a class must implement — Java uses interfaces to achieve multiple inheritance of type.

**Exception handling**: try-catch-finally blocks handle runtime errors gracefully. **Checked exceptions** (e.g., IOException) must be handled or declared; **unchecked** (e.g., NullPointerException) are runtime bugs.
        `,
        keyConcepts: ["Interface", "Package", "try-catch-finally", "Checked vs unchecked"],
        qa: [
          {
            q: "Checked vs unchecked exceptions?",
            a:
              "Checked exceptions are checked at compile-time and must be caught/declared (e.g., IOException). Unchecked exceptions occur at runtime (e.g., NullPointerException) and need not be declared.",
            explanation:
              "Use checked for recoverable conditions; unchecked for programming errors.",
            oneShotPreview:
              "Checked=compile-time enforced; Unchecked=runtime bugs.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Multithreading & Collections",
        topics: [
          "Threads: Thread class, Runnable",
          "Thread Life Cycle & Synchronization",
          "Collections Framework: List, Set, Map",
          "ArrayList, HashMap, Iterator"],
        explanation: `
**Multithreading** lets multiple threads run concurrently within a program. Java provides the Thread class and Runnable interface. **Synchronization** prevents threads from corrupting shared data.

The **Collections Framework** provides reusable data structures: List (ArrayList), Set (HashSet), Map (HashMap), plus iterators.
        `,
        keyConcepts: ["Thread/Runnable", "Synchronization", "Collections: List/Set/Map", "ArrayList/HashMap"],
        qa: [
          {
            q: "What is the difference between ArrayList and HashMap?",
            a:
              "ArrayList is an ordered list indexed by integers (List). HashMap stores key-value pairs and looks up values by key (Map).",
            explanation:
              "Use ArrayList for an ordered sequence; HashMap for fast key-based lookup.",
            oneShotPreview:
              "ArrayList=ordered list; HashMap=key→value map.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  },
  {
    id: "23HS0836",
    code: "23HS0836",
    name: "Discrete Mathematics & Graph Theory",
    shortName: "DMGT",
    branch: "CSE",
    semester: 3,
    description:
      "Sets, relations, functions, logic, counting, recurrence, graphs, trees, algebraic structures.",
    units: [
      {
        number: 1,
        title: "Sets, Relations & Functions",
        topics: [
          "Sets & Operations",
          "Relations: Types & Properties",
          "Functions: Injective, Surjective, Bijective",
          "Composition of Functions"],
        explanation: `
**Sets** are collections of distinct objects. **Relations** are sets of ordered pairs; **functions** are special relations where each input maps to exactly one output.

Types of functions: one-to-one (injective), onto (surjective), both (bijective).
        `,
        keyConcepts: ["Sets", "Relations", "Functions", "Injective/Surjective/Bijective"],
        qa: [
          {
            q: "What is a bijective function?",
            a:
              "A function that is both injective (one-to-one) and surjective (onto) — every element of the domain maps to a unique element of the codomain, and every codomain element is mapped to.",
            explanation:
              "Bijections have inverses and are used in counting and cryptography.",
            oneShotPreview:
              "Bijective = one-to-one and onto; invertible.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 2,
        title: "Mathematical Logic & Counting",
        topics: [
          "Propositions & Logical Connectives",
          "Truth Tables, Tautologies",
          "Predicates & Quantifiers",
          "Permutations & Combinations",
          "Pigeonhole Principle"],
        explanation: `
**Logic** forms the basis of reasoning and digital circuit design. Propositions are statements that are true or false; connectives (AND, OR, NOT, IMPLIES) combine them.

**Counting** (combinatorics): permutations (order matters) and combinations (order doesn't matter).
        `,
        keyConcepts: ["Propositions", "Truth tables", "Quantifiers", "Permutations/Combinations"],
        qa: [
          {
            q: "What is the Pigeonhole Principle?",
            a:
              "If n items are placed into m containers and n > m, then at least one container holds more than one item.",
            explanation:
              "A simple but powerful principle used to prove existence results in computer science and math.",
            oneShotPreview:
              "More items than containers → some container has ≥2 items.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 3,
        title: "Graph Theory",
        topics: [
          "Graphs: Vertices, Edges, Types",
          "Paths, Cycles, Connectivity",
          "Euler & Hamiltonian Paths",
          "Trees & Spanning Trees",
          "Graph Coloring"],
        explanation: `
A **graph** models pairwise relationships between objects. **Trees** are connected graphs with no cycles. A **spanning tree** connects all vertices with minimum edges.

**Euler path** visits every edge once; **Hamiltonian path** visits every vertex once.
        `,
        keyConcepts: ["Graph", "Tree", "Spanning tree", "Euler/Hamiltonian", "Graph coloring"],
        qa: [
          {
            q: "Difference between Euler and Hamiltonian paths?",
            a:
              "An Euler path traverses every **edge** exactly once. A Hamiltonian path visits every **vertex** exactly once.",
            explanation:
              "Euler circuits exist when all vertices have even degree; Hamiltonian problems are generally NP-complete.",
            oneShotPreview:
              "Euler=edges once; Hamiltonian=vertices once.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 4,
        title: "Algebraic Structures",
        topics: [
          "Groups, Rings, Fields",
          "Semigroups & Monoids",
          "Lattices",
          "Boolean Algebra"],
        explanation: `
**Algebraic structures** are sets with one or more operations satisfying axioms. A **group** has closure, associativity, identity, and inverses.

**Boolean algebra** is the algebra of logic (AND/OR/NOT), foundational for digital circuit design.
        `,
        keyConcepts: ["Group/Ring/Field", "Monoid", "Lattice", "Boolean algebra"],
        qa: [
          {
            q: "What are the four group axioms?",
            a:
              "Closure, associativity, identity element, and inverse element. A set with an operation satisfying all four is a group.",
            explanation:
              "Groups underpin symmetry, cryptography, and coding theory.",
            oneShotPreview:
              "Group = closure, associativity, identity, inverse.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      },
      {
        number: 5,
        title: "Recurrence Relations & Generating Functions",
        topics: [
          "Recurrence Relations",
          "Solving Recurrences",
          "Generating Functions",
          "Applications in Algorithm Analysis"],
        explanation: `
A **recurrence relation** defines a sequence in terms of previous terms (e.g., Fibonacci: F(n) = F(n-1) + F(n-2)). **Generating functions** encode sequences as coefficients of a power series and help solve recurrences.
        `,
        keyConcepts: ["Recurrence relation", "Fibonacci", "Generating functions"],
        qa: [
          {
            q: "How are recurrences used in algorithm analysis?",
            a:
              "Divide-and-conquer algorithms (e.g., merge sort) lead to recurrences like T(n) = 2T(n/2) + n, solved via the Master Theorem or recursion trees to get O(n log n).",
            explanation:
              "Recurrences capture the running time of recursive algorithms.",
            oneShotPreview:
              "Recurrence = recursive running time; solved via Master Theorem.",
          },
          {
            q: "What are the key concepts in Operating System Overview & System Structures?",
            a: "Review all topics: Operating System Overview & System Structures. Focus on definitions, principles, and their applications in computer science.",
            explanation: "Each concept builds on previous knowledge. Practice with examples and previous year questions for thorough understanding.",
            oneShotPreview: "Key concepts: master all topics in Operating System Overview & System Structures.",
          },
          {
            q: "How is Operating System Overview & System Structures applied in real-world systems?",
            a: "The concepts in Operating System Overview & System Structures are fundamental to designing and implementing efficient computer systems and software.",
            explanation: "Understanding these principles is essential for system design, optimization, and passing technical examinations.",
            oneShotPreview: "Application: foundational knowledge for systems and software.",
          }],
      }],
  }];

// Labs available at SIETK (from timetable & syllabus): flagged as coming soon.
// Additional II B.Tech - II Semester electives (same slot as MEFA)
SUBJECTS.push({
  id: "23HS0851",
  code: "23HS0851",
  name: "Organizational Behavior",
  shortName: "OB",
  branch: "CSE",
  semester: 2,
  regulation: "R23",
  isLab: false,
  faculty: "TBD",
  credits: 2,
  questionBankUrl: "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23HS0851.pdf",
  description: "Organizational behavior, motivation, leadership, group dynamics, organizational change.",
  units: [
    { number: 1, title: "Introduction to Organizational Behavior", topics: ["Meaning, definition, nature, scope, functions", "Organizing process", "Understanding individual behaviour", "Attitude, perception, learning, personality"], explanation: "Organizational behavior studies how individuals and groups act within organizations.", keyConcepts: ["OB", "Attitude", "Perception", "Personality"], qa: [{ q: "What is organizational behavior?", a: "The study of how people interact within groups in organizations.", explanation: "It combines psychology, sociology, and management to understand workplace behavior.", oneShotPreview: "OB = study of individual & group behavior in organizations." }, ] },
    { number: 2, title: "Motivation and Leading", topics: ["Theories of motivation", "Maslow, Herzberg, Vroom, McClelland, McGregor, Adams"], explanation: "Motivation theories explain what drives employee behavior.", keyConcepts: ["Motivation theories", "Leadership"], qa: [{ q: "What is Maslow's hierarchy?", a: "A five-tier model of human needs from basic (physiological) to self-actualization.", explanation: "Lower needs must be met before higher needs motivate behavior.", oneShotPreview: "Maslow = 5-tier needs pyramid, bottom-up." }, ] },
    { number: 3, title: "Organizational Culture", topics: ["Culture, climate, leadership", "Traits theory, managerial grid", "Transactional vs transformational leadership"], explanation: "Organizational culture shapes how work gets done.", keyConcepts: ["Culture", "Leadership styles"], qa: [{ q: "Transactional vs transformational leadership?", a: "Transactional focuses on rewards/punishments; transformational inspires and motivates beyond self-interest.", explanation: "Transformational leaders create vision and inspire followers.", oneShotPreview: "Transactional=rewards; Transformational=inspire/vision." }, ] },
    { number: 4, title: "Group Dynamics", topics: ["Types of groups, determinants of group behaviour", "Group process, norms, cohesiveness, team building", "Conflict resolution"], explanation: "Groups influence individual behavior and decision-making.", keyConcepts: ["Group dynamics", "Team building", "Conflict"], qa: [{ q: "What is group cohesiveness?", a: "The degree to which group members are attracted to each other and motivated to stay in the group.", explanation: "High cohesiveness improves performance but can lead to groupthink.", oneShotPreview: "Cohesiveness = member attraction & retention in group." }, ] },
    { number: 5, title: "Organizational Change and Development", topics: ["Change management, organizational culture change", "Work stress management", "Managerial implications"], explanation: "Organizations must adapt to changing environments.", keyConcepts: ["Change management", "Stress management"], qa: [{ q: "What is change management?", a: "The process of guiding organizational change from current to desired state.", explanation: "It involves planning, communication, and stakeholder engagement.", oneShotPreview: "Change management = guided transition to desired state." }, ] }],
});

SUBJECTS.push({
  id: "23HS0850",
  code: "23HS0850",
  name: "Business Environment",
  shortName: "BE",
  branch: "CSE",
  semester: 2,
  regulation: "R23",
  isLab: false,
  faculty: "TBD",
  credits: 2,
  questionBankUrl: "https://www.sietk.org/downloads/Question%20Bank/II%20B.Tech%20II/23HS0851.pdf",
  description: "Business environment, fiscal and monetary policy, trade policy, WTO, money and capital markets.",
  units: [
    { number: 1, title: "Overview of Business Environment", topics: ["Introduction, nature, scope, significance", "Types: internal/external, micro/macro", "Competitive structure, environmental analysis"], explanation: "Business environment includes all factors affecting business operations.", keyConcepts: ["Business environment", "Internal/external factors"], qa: [{ q: "What is business environment?", a: "The sum of all external and internal factors influencing business decisions.", explanation: "Includes economic, social, political, legal, and technological factors.", oneShotPreview: "Business environment = all factors affecting business." }, ] },
    { number: 2, title: "Fiscal & Monetary Policy", topics: ["Public revenues, public expenditure", "Monetary policy, RBI, demand/supply of money", "Recent trends"], explanation: "Fiscal and monetary policies regulate the economy.", keyConcepts: ["Fiscal policy", "Monetary policy", "RBI"], qa: [{ q: "What is fiscal policy?", a: "Government policy on taxation and spending to influence the economy.", explanation: "Expansionary fiscal policy increases spending or cuts taxes.", oneShotPreview: "Fiscal policy = government tax & spending decisions." }, ] },
    { number: 3, title: "India's Trade Policy", topics: ["Magnitude and direction of Indian trade", "Bilateral/multilateral agreements", "EXIM policy, balance of payments"], explanation: "Trade policy governs international commerce.", keyConcepts: ["Trade policy", "EXIM", "Balance of payments"], qa: [{ q: "What is balance of payments?", a: "A record of all economic transactions between a country and the rest of the world.", explanation: "Includes current account and capital account.", oneShotPreview: "BOP = all economic transactions with rest of world." }, ] },
    { number: 4, title: "World Trade Organization", topics: ["Organization and structure of WTO", "Role in promoting world trade", "GATT, TRIPS, TRIMS, dispute settlement"], explanation: "WTO regulates international trade.", keyConcepts: ["WTO", "GATT", "TRIPS", "TRIMS"], qa: [{ q: "What is WTO?", a: "The World Trade Organization regulates international trade between nations.", explanation: "It provides a framework for trade agreements and dispute resolution.", oneShotPreview: "WTO = international trade regulator." }, ] },
    { number: 5, title: "Money Markets and Capital Markets", topics: ["Indian financial system", "Money markets and capital markets", "SEBI, stock exchanges, investor protection"], explanation: "Financial markets channel funds from savers to borrowers.", keyConcepts: ["Money market", "Capital market", "SEBI"], qa: [{ q: "Money market vs capital market?", a: "Money market: short-term funds (<1 year). Capital market: long-term funds (>1 year).", explanation: "Money market deals in treasury bills, commercial paper; capital market in stocks, bonds.", oneShotPreview: "Money market=short-term; Capital market=long-term." }, ] }],
});

export const LABS = [
  { code: "23CS0514", name: "Operating Systems Lab", branch: "CSE", semester: 2 },
  { code: "23CS0515", name: "Database Management Systems Lab", branch: "CSE", semester: 2 },
  { code: "23CS0550", name: "Full Stack Development – I", branch: "CSE", semester: 2 }];

// Merge labs into SUBJECTS as lab entries (coming soon)
// Append labs to SUBJECTS so they appear in subject lists (marked coming soon)
for (const l of LABS) {
  SUBJECTS.push({
    id: l.code,
    code: l.code,
    name: l.name,
    shortName: l.code.slice(-4),
    branch: l.branch,
    semester: l.semester,
    regulation: "R23",
    isLab: true,
    faculty: "TBD",
    credits: 1,
    questionBankUrl: null,
    description: "Laboratory subject. Content coming soon.",
    units: [],
  });
}

export default SUBJECTS;
