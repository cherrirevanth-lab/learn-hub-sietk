/**
 * SIETK Study App — Real Question Bank Questions
 *
 * Auto-generated from SIETK R23 question bank PDFs by 30 parallel agents.
 * Contains every question (including a/b/c subparts) with clear answers,
 * explanations and one-shot previews. 586 questions across 30 units.
 */

export const QB_QUESTIONS = {
  "23CS0512": {
    "1": {
      "unitTitle": "Introduction and ER Model",
      "totalQuestions": 24,
      "questions": [
        {
          "q": "a) Define DBMS. List two differences between a file system and a database system.",
          "a": "A Database Management System (DBMS) is a collection of interrelated data together with a set of programs that store, manage, retrieve and update that data efficiently and securely. In a traditional file system, data is kept in separate independent files, which causes duplication, inconsistency and difficulty in accessing related data, whereas a DBMS keeps an integrated, centralized repository with controlled redundancy. A file system provides little sharing, security, concurrency control or recovery support, while a DBMS offers controlled sharing, authorization, transaction management, backup/recovery and data independence through a query language such as SQL.",
          "explanation": "These are the standard distinctions between file processing and database systems: redundancy/inconsistency, access convenience, sharing, security, concurrency and recovery.",
          "oneShotPreview": "DBMS = managed data + access programs; file systems duplicate data, DBMS adds sharing, security, concurrency and recovery."
        },
        {
          "q": "b) What is data abstraction?",
          "a": "Data abstraction is the technique of hiding low-level details of how data is physically stored and maintained, and presenting users with only the information they need. It is implemented through three levels of schema: the internal/physical level, the conceptual/logical level and the external/view level. Because users interact only with their view, the internal storage structures can be changed without changing user programs, which is the essence of data independence.",
          "explanation": "Abstraction simplifies the user's view by suppressing storage details and is realized by the three-level ANSI/SPARC architecture.",
          "oneShotPreview": "Hiding storage details and showing users only what they need through three schema levels."
        },
        {
          "q": "c) What is an entity? Give an example.",
          "a": "An entity is a distinguishable real-world object or concept about which data is stored; it may be a person, place, thing or event. In the ER model an entity is represented as a rectangle and belongs to an entity type. For example, in a university database a particular student (roll number 101, name Arun) is an entity, as are a course and a teacher; each entity has attributes that describe it.",
          "explanation": "An entity is the basic 'thing' of the ER model, distinguishable from other objects and described by attribute values.",
          "oneShotPreview": "Entity = a distinguishable real-world object (e.g., one student) about which data is stored."
        },
        {
          "q": "d) What are composite attributes? Give an example.",
          "a": "Composite attributes are attributes that can be subdivided into smaller sub-attributes, each having an independent meaning. For example, the attribute Address can be split into street, city, state and pin code, and Name can be split into first, middle and last name. In an ER diagram they are drawn as an oval connected to further ovals for the component attributes, and they are useful when an individual component must be queried separately.",
          "explanation": "Composite attributes differ from simple (atomic) attributes precisely because they have meaningful sub-parts.",
          "oneShotPreview": "Attributes with sub-parts, e.g., Address = street + city + state + pin code."
        },
        {
          "q": "e) What is a super class and subclass in ER diagrams?",
          "a": "A superclass is a general entity type that contains the attributes and relationships common to a group of related entity types, while a subclass is a more specific entity type that inherits those attributes and relationships and may add its own. For example, PERSON can be a superclass with STUDENT and TEACHER as subclasses; both inherit name and date of birth but add roll number or employee id respectively. The 'is a' (ISA) relationship, drawn as a triangle, connects subclasses to their superclass and supports specialization and generalization.",
          "explanation": "The superclass/subclass (ISA) hierarchy allows shared properties to be defined once and inherited by specialized types.",
          "oneShotPreview": "Superclass = general entity type (Person); subclass = specific type (Student) linked by an ISA relationship."
        },
        {
          "q": "a) Define Database. Discuss about applications of Database Systems.",
          "a": "A database is an organized, shared collection of logically related data and its metadata, managed by a DBMS so that it can be efficiently stored, queried and updated. Database systems are used in banking for accounts and transactions, in airline and railway reservation systems, in universities for student and course records, in healthcare for patient records, and in e-commerce for customers, products and orders. They are also the foundation of inventory control, payroll/accounting, social networks, library systems and government record keeping, wherever large amounts of structured data must be shared reliably by many users.",
          "explanation": "A database is a persistent, integrated collection of related data, and these examples are the classic application domains where shared, reliable data management is essential.",
          "oneShotPreview": "Database = organized related data; used in banking, reservations, universities, healthcare and e-commerce."
        },
        {
          "q": "b) Identify the purpose of Database Systems.",
          "a": "The purpose of a database system is to provide a convenient, efficient, reliable and safe way to store and retrieve large volumes of information. It overcomes the problems of file-processing systems: data redundancy and inconsistency, difficulty accessing data, data isolation, integrity and security violations. A DBMS also supports concurrent access by many users, atomic transactions and recovery from failures, authorization, and data independence so that applications remain unaffected by changes in storage structure.",
          "explanation": "These purposes directly address the well-known limitations of traditional file processing systems described in standard DBMS texts.",
          "oneShotPreview": "Manage data with less redundancy, easy access, integrity, security, concurrency and recovery."
        },
        {
          "q": "a) Outline the Data Abstraction and discuss levels of Abstraction.",
          "a": "Data abstraction hides implementation details and presents simplified views of the database to different users. The three levels are: (1) the physical or internal level, which describes how data is actually stored, including file structures and indexes; (2) the logical or conceptual level, which describes what data is stored and the relationships and constraints among all users' data; and (3) the view or external level, which describes only the portion of the database visible to a particular user or application. Mappings between external-conceptual and conceptual-internal levels translate requests between them, providing logical and physical data independence.",
          "explanation": "The three-level ANSI/SPARC architecture is the standard answer; mappings between adjacent levels are what make data independence possible.",
          "oneShotPreview": "Three levels: physical (how stored), logical (what stored), view (what user sees); mappings give independence."
        },
        {
          "q": "b) Differentiate between Database users and administrators.",
          "a": "Database users are people who interact with the database to retrieve, insert, update or delete data and produce reports; they include naive/end users using application interfaces, application programmers who write programs using DML, and sophisticated users who write SQL queries directly. A Database Administrator (DBA) is responsible for managing and controlling the database system: defining the schema, granting authorizations and access rights, monitoring performance and tuning, ensuring security and integrity, and performing backup and recovery. Thus users consume or manipulate data, whereas the DBA manages, protects and maintains the whole system.",
          "explanation": "The distinction is between consumers of data and the central authority responsible for schema, security, performance and recovery.",
          "oneShotPreview": "Users query/update data; DBA defines schema, controls access, tunes performance and handles backups."
        },
        {
          "q": "a) Discuss about various data models.",
          "a": "A data model is a set of concepts and notation for describing data, relationships, semantics and constraints. The main models are: the relational model, which organizes data into tables of rows and columns and is the most widely used; the Entity-Relationship (ER) model, a high-level conceptual model using entities, attributes and relationships, commonly used for database design; the hierarchical model, which organizes data as a tree of parent-child records; the network model, which allows a record to have multiple parents in a graph structure; and the object-oriented model, which stores objects with methods, identity and inheritance. Other models include object-relational, semi-structured (XML/JSON) and various NoSQL models.",
          "explanation": "These are the standard data models taught in DBMS, classified by how they structure data and relationships; ER is conceptual while relational is the implementation model.",
          "oneShotPreview": "Main data models: relational, ER, hierarchical, network, object-oriented and NoSQL."
        },
        {
          "q": "b) Explain the following terms: I. Schema II. Instance III. Data independence",
          "a": "A schema is the overall logical structure or blueprint of the database, including tables, attributes, data types and constraints; it is defined at design time and changes rarely. An instance is the actual content of the database at a particular moment in time, which changes whenever rows are inserted, deleted or updated. Data independence is the ability to modify a schema at one level without affecting the level above it: logical data independence protects external views from conceptual schema changes, and physical data independence protects the conceptual schema from changes in storage structures and access methods.",
          "explanation": "Schema is the stable type-level description, instance is the time-varying data, and data independence is the insulation provided by the three-schema architecture.",
          "oneShotPreview": "Schema = blueprint; instance = data at an instant; data independence = insulation between schema levels."
        },
        {
          "q": "a) Design a Three tier schema Architecture of Database with a neat diagram.",
          "a": "The three-tier (three-schema) architecture has three levels: the external or view level, consisting of the individual views seen by different users; the conceptual or logical level, describing the entire database structure and constraints for all users; and the internal or physical level, describing how data is actually stored on disk. Mappings between the external and conceptual levels and between the conceptual and internal levels translate requests and results between adjacent levels. This design gives logical data independence (changing the conceptual schema need not change user views) and physical data independence (changing storage structures need not change the conceptual schema). Diagram: User Views -> external/conceptual mapping -> Conceptual Schema -> conceptual/internal mapping -> Internal Schema -> Physical Storage.",
          "explanation": "The ANSI/SPARC three-schema architecture with two mappings is the canonical design that delivers both forms of data independence.",
          "oneShotPreview": "External -> Conceptual -> Internal schemas linked by mappings; yields logical and physical independence."
        },
        {
          "q": "b) Illustrate about Database system structure.",
          "a": "A database system is built from two main subsystems: the storage manager and the query processor. The storage manager interacts with the operating system and contains the transaction manager, buffer manager, file manager and authorization manager, which handle storage, in-memory buffers, transaction atomicity, concurrency and access control. The query processor contains the DDL interpreter, DML compiler and query evaluation engine, which translate user commands into low-level instructions and execute them. Together they provide a consistent interface for defining, storing, retrieving and updating data while guaranteeing integrity, security and recovery.",
          "explanation": "The standard DBMS component diagram splits responsibilities between the storage manager (data side) and query processor (query side).",
          "oneShotPreview": "Storage manager (files, buffers, transactions, authorization) + query processor (DDL/DML, evaluation engine)."
        },
        {
          "q": "a) Define Environment in DBMS. Explain its components.",
          "a": "The DBMS environment is the complete setting in which a database system operates, consisting of hardware, software, data, people and procedures. Hardware includes the servers, disks and network used to run the system; software includes the DBMS, the operating system and application programs; data includes the database itself and the catalog/metadata that describes it. People include end users, application programmers and the database administrator, while procedures are the documented rules for designing, using, securing and maintaining the database. All these components interact so data can be defined, stored, retrieved and managed reliably.",
          "explanation": "This is the standard five-component framework (hardware, software, data, people, procedures) used to describe any information system, applied to a DBMS.",
          "oneShotPreview": "DBMS environment = hardware, software, data, people (users/DBA) and procedures."
        },
        {
          "q": "b) Construct a Centralized and Client Server architecture for the database",
          "a": "In a centralized architecture, the database, DBMS and all application programs reside on one central computer; users interact through terminals and all processing happens at that single site. In a client-server architecture, the work is divided between client machines, which run front-end application programs and send requests over a network, and a database server, which runs the DBMS, stores the data, processes queries and returns results. The client-server model scales to many concurrent users, distributes processing load and supports remote access, whereas a centralized system is simpler to manage but has a single point of failure and limited scalability and flexibility.",
          "explanation": "The two architectures differ in where data and processing reside; the client-server split is the basis of modern distributed database access.",
          "oneShotPreview": "Centralized = one machine holds and processes everything; client-server = clients request, server stores and processes."
        },
        {
          "q": "a) Explain the Entity-Relationship (ER) Model in detail.",
          "a": "The Entity-Relationship (ER) model is a high-level conceptual data model that describes a database in terms of entities, their attributes and the relationships between them, usually expressed as an ER diagram. Entities (real-world objects) are drawn as rectangles, attributes (properties) as ellipses, and relationships (associations) as diamonds; key attributes are underlined and multi-valued attributes are drawn with double ovals. The model captures cardinality constraints (one-to-one, one-to-many, many-to-many), participation constraints, weak entities and keys. Enhanced ER features add specialization/generalization (ISA hierarchies) and aggregation, making the ER model the standard tool for conceptual database design before mapping to the relational model.",
          "explanation": "This covers the defining constructs and notation of the ER model and its role as a conceptual design tool, which is what 'in detail' requires.",
          "oneShotPreview": "Conceptual model: entities (rectangles), attributes (ovals), relationships (diamonds), keys and cardinality constraints."
        },
        {
          "q": "b) Define and explain Entity and Entity Set in DBMS with examples.",
          "a": "An entity is a distinguishable real-world object or concept about which data is stored, such as one particular student or one particular course. An entity set is a collection of entities of the same type that share the same properties, such as the set of all students enrolled in a university. An entity type is described by its attributes, and an entity has a specific value for each attribute. For example, the STUDENT entity set may have attributes rollno, name and branch, and the tuple (101, Arun, CSE) represents one entity in that set; in an ER diagram the entity set is shown as a rectangle with its attributes as ovals.",
          "explanation": "An entity is a single instance while an entity set is the collection of all such instances of that type, analogous to a tuple and a relation in the relational model.",
          "oneShotPreview": "Entity = one object (a student); entity set = all objects of that type (all students)."
        },
        {
          "q": "a) What are attributes in the ER Model? Illustrate different types with examples.",
          "a": "Attributes are the properties or characteristics that describe an entity or a relationship and are drawn as ellipses in an ER diagram. Simple (atomic) attributes cannot be divided further, e.g., age; composite attributes have sub-parts, e.g., Address = street + city + pin code. Single-valued attributes hold one value (date of birth) while multi-valued attributes hold several values (multiple phone numbers, shown as a double oval). Derived attributes are computed from others (age derived from date of birth), and a key attribute uniquely identifies an entity (roll number, underlined). Attributes may describe entities or, when appropriate, relationships such as the date on which a student borrows a book.",
          "explanation": "These are the standard classifications of attributes in the ER model, each with distinct notation and examples.",
          "oneShotPreview": "Properties of entities: simple, composite, single/multi-valued, derived and key attributes."
        },
        {
          "q": "b) Distinguish between Relationship and Relationship set.",
          "a": "A relationship is a single association among two or more entities, for example the specific student Ravi enrolled in the DBMS course. A relationship set is the collection of all relationships of the same type and is a set of tuples drawn from the participating entity sets, for example every (student, course) enrollment pair in the university. A relationship is to a relationship set as an entity is to an entity set: the former is one instance, the latter is the whole collection. In an ER diagram the relationship type is represented by a diamond, while the relationship set is the corresponding set of entity tuples at a point in time.",
          "explanation": "The distinction is instance versus collection, exactly parallel to entity versus entity set.",
          "oneShotPreview": "Relationship = one association instance; relationship set = all associations of that type."
        },
        {
          "q": "a) What are Superclass and Subclass in DBMS? Illustrate with an ER diagram.",
          "a": "A superclass is a generic entity type containing attributes common to several related types, while subclasses are specialized entity types that inherit those attributes and add their own. For example, PERSON (attributes name, date of birth) is a superclass of the subclasses STUDENT (roll number, department) and TEACHER (employee id, salary). In an ER diagram the superclass rectangle is connected downward through an ISA triangle to the subclass rectangles; the circle 'o' denotes overlapping subclasses and 'd' denotes disjoint subclasses, and total or partial participation can be shown. Attributes specific to a subclass are attached to it, while inherited attributes are attached to the superclass.",
          "explanation": "This describes the enhanced ER 'is-a' hierarchy with its standard notation (ISA triangle, disjoint/overlapping, participation).",
          "oneShotPreview": "PERSON superclass with STUDENT and TEACHER subclasses in an ISA hierarchy (disjoint/overlapping)."
        },
        {
          "q": "b) Illustrate the Inheritance in the ER Model with an example.",
          "a": "Inheritance in the ER model is the property by which a subclass automatically receives all the attributes and relationships of its superclass in addition to its own specific ones. For example, if EMPLOYEE is a superclass with attributes emp_id, name and salary, and MANAGER is a subclass with an additional attribute department, then every MANAGER entity has emp_id, name, salary and department. This 'is-a' property inheritance avoids storing the common attributes repeatedly in each subclass and accurately models real-world hierarchies. It is represented in the ER diagram by an ISA triangle connecting the subclasses to the superclass.",
          "explanation": "Inheritance is the defining benefit of ISA hierarchies: shared properties are defined once at the superclass and reused by all subclasses.",
          "oneShotPreview": "Subclass inherits all superclass attributes plus its own (MANAGER inherits EMPLOYEE's attributes)."
        },
        {
          "q": "a) Define and explain Specialization in ER Model with examples.",
          "a": "Specialization is a top-down design process in which subclasses are defined from an existing superclass by identifying subgroups of entities that have distinguishing attributes or relationships. Starting with the superclass PERSON (name, address), we can specialize it into STUDENT (roll number, department) and TEACHER (employee id, salary); each subclass inherits the superclass attributes and adds its own. Specialization is represented by an ISA triangle, with subclasses marked disjoint (d) or overlapping (o) and having total or partial participation. It models real-world hierarchies and avoids storing redundant attributes on every subtype.",
          "explanation": "Specialization is the top-down direction of the ISA hierarchy, identified by the distinguishing features of subgroups.",
          "oneShotPreview": "Top-down creation of subclasses from a superclass (PERSON to STUDENT/TEACHER) via ISA."
        },
        {
          "q": "b) Define Generalization in ER Model. How is it different from Specialization?",
          "a": "Generalization is a bottom-up design process in which common features of several entity types are extracted to form a single higher-level superclass. For example, from STUDENT and TEACHER we generalize the common attributes name and address into the superclass PERSON. The difference is direction and emphasis: specialization begins with one superclass and derives subclasses (top-down), whereas generalization begins with several entity types and combines their common features into a superclass (bottom-up). The resulting ISA hierarchy and ER notation are identical, so the two terms are often used interchangeably in practice.",
          "explanation": "Both produce the same ISA structure; the only real difference is whether the design process is bottom-up (generalization) or top-down (specialization).",
          "oneShotPreview": "Generalization = bottom-up merging into a superclass; specialization = top-down splitting into subclasses."
        },
        {
          "q": "11 Construct ER Diagram for any two with neat explanation (i.e. Banking system, Hospital management system, Railway Reservation system, Online Shopping)",
          "a": "Banking system: entities CUSTOMER (cust_id, name, address) and ACCOUNT (acc_no, type, balance) are connected by a many-to-many 'owns' relationship (a customer may hold several accounts and an account may have several joint holders), with attributes such as access_date on the relationship. Online Shopping: entities CUSTOMER, PRODUCT, ORDER and ORDER_ITEM, where a customer 'places' orders (one-to-many), an order 'contains' products through ORDER_ITEM (many-to-many with quantity and price as relationship attributes), and each product 'belongs to' a category. Hospital management uses DOCTOR, PATIENT and APPOINTMENT, while Railway Reservation uses PASSENGER, TICKET and TRAIN with 'books' and 'reserved_on' relationships. In every case the ER diagram uses rectangles for entities, ovals for attributes (key attributes underlined) and diamonds for relationships, annotated with cardinality ratios such as 1:M or M:N.",
          "explanation": "These are complete, standard ER designs for two of the listed domains with clearly identified entities, key attributes, relationships and cardinalities, plus the correct diagram notation.",
          "oneShotPreview": "Banking: CUSTOMER-ACCOUNT (M:N owns); Shopping: CUSTOMER-ORDER-PRODUCT (places/contains) with 1:M and M:N."
        }
      ]
    },
    "2": {
      "unitTitle": "Relational Model and Basic SQL",
      "totalQuestions": 21,
      "questions": [
        {
          "q": "1 a) Differentiate between primary key and candidate key.",
          "a": "A candidate key is any attribute, or minimal set of attributes, that can uniquely identify every tuple in a relation; a relation may have several candidate keys. The primary key is the single candidate key chosen by the designer as the official unique row identifier, and it can never be NULL or duplicated. Thus every primary key is a candidate key, but only one candidate key is promoted to primary key while the others become alternate keys. For example, in STUDENT(rollno, aadhaar, email) all three could be candidate keys and rollno may be selected as the primary key.",
          "explanation": "The core distinction is that candidate keys are all the minimal unique identifiers whereas the primary key is the one chosen from them; the example makes the relationship concrete.",
          "oneShotPreview": "Candidate key = any minimal unique identifier; primary key = the one chosen (rest are alternate keys)."
        },
        {
          "q": "1 b) Define super key with an example.",
          "a": "A super key is any set of one or more attributes whose combined values uniquely identify each tuple of a relation. It may include extra attributes that are not actually needed for uniqueness, so a super key is not required to be minimal. For example, in EMPLOYEE(empid, name, salary), {empid} is a super key, and so are {empid, name} and {empid, name, salary}. A candidate key is simply a minimal super key with no superfluous attributes.",
          "explanation": "Defines the term, stresses that extra attributes are allowed, and gives examples that distinguish super keys from minimal candidate keys.",
          "oneShotPreview": "Any attribute set that uniquely identifies rows, may carry extras; {empid, name} is a super key."
        },
        {
          "q": "1 c) What is the importance of null values in a database?",
          "a": "A NULL represents a missing, unknown, or not-applicable value and is not the same as zero or a blank string. Nulls allow a database to store incomplete information, such as an employee with no phone number or a task with no assigned manager, without inventing fake values. They are important for optional attributes and for outer joins that must keep unmatched rows, but they need special handling: comparisons use IS NULL / IS NOT NULL, and aggregates such as COUNT ignore nulls. Where a value is mandatory or must be unique, NOT NULL constraints disallow nulls.",
          "explanation": "Explains what NULL means, why it is useful for optional data, and the special SQL handling it requires.",
          "oneShotPreview": "NULL = missing/unknown, not zero; supports optional data and outer joins, tested with IS NULL."
        },
        {
          "q": "1 d) What is the purpose of the WHERE clause in SQL?",
          "a": "The WHERE clause filters rows in a SELECT, UPDATE, or DELETE statement, keeping only rows whose search condition is TRUE. It appears after FROM and before GROUP BY, and its condition can use comparison operators (=, <, >), logical operators (AND, OR, NOT), BETWEEN, IN, LIKE, and IS NULL. For example, SELECT * FROM EMP WHERE salary > 50000 returns only employees earning more than 50,000. Without a WHERE clause the statement applies to every row of the table.",
          "explanation": "Correctly describes WHERE as a row filter, lists its operators and position, and gives a concrete example.",
          "oneShotPreview": "WHERE filters rows by a condition before grouping; e.g. SELECT ... WHERE salary > 50000."
        },
        {
          "q": "1 e) Distinguish between CHAR and VARCHAR data types.",
          "a": "CHAR(n) is a fixed-length character type: a shorter value is padded with trailing spaces so every stored value occupies n characters. VARCHAR(n) is variable length: it stores only the characters actually supplied, up to the maximum n, plus a small length overhead. CHAR is slightly faster and suits values of uniform length such as a two-letter code, while VARCHAR saves storage for values of varying length such as names or addresses. Using VARCHAR avoids wasted space at the cost of minor overhead when a value grows.",
          "explanation": "Captures the essential fixed-versus-variable distinction, padding behaviour, and when each type is preferred.",
          "oneShotPreview": "CHAR(n) fixed length and padded; VARCHAR(n) variable length, stores only actual characters — saves space."
        },
        {
          "q": "2 a) Discuss the significance of domain, attribute, tuple, and relation with examples.",
          "a": "A domain is the set of permitted values for an attribute, such as the positive integers or the valid department names. An attribute is a named column representing one property of an entity, such as name or salary, whose values come from a domain. A tuple is one row, an ordered set of attribute values representing a single record, for example (101, 'Ravi', 50000). A relation is a table: a set of tuples sharing the same attributes, such as the EMPLOYEE relation. Together these terms formalise a table — a relation is a set of tuples, each tuple holds values of attributes, and each attribute draws its values from a domain.",
          "explanation": "Defines all four fundamental relational-model terms with consistent examples and shows how they combine into a table.",
          "oneShotPreview": "Domain = allowed values; attribute = column; tuple = row; relation = table of tuples."
        },
        {
          "q": "2 b) What are null values in the relational model? Explain their importance with examples.",
          "a": "In the relational model NULL is a special marker used when an attribute value is unknown, unavailable, or not applicable; it is distinct from every value in that attribute's domain, including zero and the empty string. For example, an employee with no phone number has NULL in the phone column, and a new hire with no project has NULL in proj_id. Nulls are important because they let a relation represent incomplete or inapplicable information without fabricating dummy values, and they enable outer joins that preserve unmatched rows. However they complicate the model: SQL uses three-valued logic (TRUE/FALSE/UNKNOWN), comparisons require IS NULL, keys and NOT NULL constraints exclude them where required, and aggregate functions ignore them.",
          "explanation": "Defines NULL as a value outside the domain, supplies examples, and covers both its usefulness and the special logic it demands.",
          "oneShotPreview": "NULL = unknown/not-applicable, outside the domain; enables missing data and outer joins, needs IS NULL and 3-valued logic."
        },
        {
          "q": "3 Classify various types of constraints in the relational model with suitable examples.",
          "a": "Relational constraints keep stored data valid and are classified as: Domain constraints — each value must belong to its declared domain, e.g., age an integer between 0 and 120. Key or entity-integrity constraints — the primary key must be unique and non-null, e.g., rollno cannot be NULL or repeated. Referential-integrity constraints — a foreign key must match an existing primary key or be NULL, e.g., EMP.deptno must exist in DEPT. NOT NULL and CHECK constraints — a column is mandatory and a condition limits its values, e.g., CHECK(salary >= 0). UNIQUE constraints — enforce uniqueness on a non-primary column, e.g., email UNIQUE. Together they preserve entity integrity, referential integrity, and user-defined semantic rules.",
          "explanation": "Lists the main constraint categories with a concrete example for each and ties them to overall data integrity.",
          "oneShotPreview": "Domain, key/entity integrity, referential integrity, NOT NULL, CHECK and UNIQUE — each restricts legal data."
        },
        {
          "q": "4 a) Identify relational database query language.",
          "a": "A query language is used to retrieve and manipulate data in a relational database. Relational algebra is a procedural query language: the user states what is wanted and the exact steps to get it using operations such as select, project, and join. Relational calculus is declarative: the user states only the desired result as a logical predicate. SQL (Structured Query Language) is the de facto standard query language for commercial relational DBMSs and is declarative in style, while internally relying on relational-algebra operations for execution. SQL combines data definition, manipulation, and control in one language, so it is the practical answer to what the relational database query language is.",
          "explanation": "Identifies SQL as the standard language and correctly positions it between procedural algebra and declarative calculus.",
          "oneShotPreview": "SQL is the standard declarative query language; relational algebra is procedural, relational calculus declarative."
        },
        {
          "q": "4 b) Illustrate different operations in Relational algebra with an example.",
          "a": "Relational algebra is a procedural language whose operations take relations as input and return new relations. The fundamental unary operations are Selection (sigma), which keeps rows satisfying a predicate, and Projection (pi), which keeps specified columns. Binary set operations require union compatibility: Union, Intersection, Difference, and Cartesian Product. Additional operations include Join, Division, and Rename. For example, on STUDENT(rollno, name, dept, marks), pi_name(sigma_marks>75(STUDENT)) returns the names of toppers, sigma_dept='CSE'(STUDENT) returns CSE students, and STUDENT join ENROLL combines student rows with their enrollment rows on a common attribute.",
          "explanation": "Covers unary, set, and join operations and demonstrates them with a single consistent STUDENT example.",
          "oneShotPreview": "σ selects rows, π projects columns, ∪ ∩ − sets, × product, ⋈ join, ÷ division, ρ rename; e.g. π_name(σ_marks>75(S))."
        },
        {
          "q": "5 a) Compare the Selection and Projection in key constraints.",
          "a": "Although the question mentions key constraints, Selection and Projection are unary relational-algebra operators, not key constraints. Selection (sigma) works horizontally: it returns only the tuples that satisfy a predicate, leaving every column present. Projection (pi) works vertically: it keeps only the named attributes and discards the other columns, also removing duplicate rows. They are usually combined, for example pi_name, salary(sigma_salary>50000(EMP)) first filters rows and then keeps two columns. In short, selection filters rows while projection filters columns.",
          "explanation": "Clarifies the likely intent and gives the correct row-versus-column comparison with a combined expression.",
          "oneShotPreview": "Selection σ filters rows by a predicate; Projection π picks columns and removes duplicates; combine as π(σ(R))."
        },
        {
          "q": "5 b) Develop the working on union, intersection and set differences operations.",
          "a": "Union, intersection, and set difference are binary relational-algebra operations and require the two relations to be union-compatible, meaning the same number of attributes with compatible domains. Union (R union S) returns every tuple present in R or S or both, with duplicates removed. Intersection (R intersection S) returns only tuples present in both relations. Set difference (R minus S) returns tuples present in R but not in S. For example, if R = {1, 2, 3} and S = {3, 4, 5}, then R union S = {1, 2, 3, 4, 5}, R intersection S = {3}, and R minus S = {1, 2}. In SQL these map to UNION, INTERSECT, and EXCEPT (or MINUS).",
          "explanation": "Defines all three operations, states the union-compatibility requirement, and works through a concrete example with SQL equivalents.",
          "oneShotPreview": "Union = in R or S; Intersection = in both; Difference = in R not S; SQL UNION/INTERSECT/EXCEPT."
        },
        {
          "q": "6 a) Compare and contrast Relational Algebra and Relational Calculus.",
          "a": "Relational algebra is procedural: the user specifies both the desired result and the sequence of operations (sigma, pi, join) used to compute it. Relational calculus is declarative, based on first-order logic: the user writes a predicate describing the result without saying how to obtain it. Algebra is closed, since every operator returns a relation so expressions can be nested, whereas calculus uses logical formulas and appears in tuple and domain forms. Algebra is operational and directly implementable as query-execution plans, while calculus is closer to a natural specification and underpins query optimisation theory. Both are equally expressive for relational queries, that is, relationally complete.",
          "explanation": "Contrasts procedural versus declarative, closure versus logic, and practical roles, while noting equal expressive power.",
          "oneShotPreview": "Algebra = procedural, step-by-step, closed; Calculus = declarative logic (tuple/domain); both relationally complete."
        },
        {
          "q": "6 b) Discuss about the operators renaming, division with examples.",
          "a": "Rename (rho) changes the name of a relation and/or its attributes. It is needed because algebra results are otherwise unnamed and when the same relation is used twice, as in a self-join: rho_x(EMPLOYEE) gives the table an alias x so E1 join E2 can compare rows of the same table, while rho_E(empid, ename)(EMPLOYEE) renames both relation and columns. Division (R division S) returns the values from R associated with every tuple of S; R must have more attributes than S and share some of them. If R = {(a,1), (a,2), (a,3), (b,1), (b,3)} and S = {1, 2}, then R division S = {a} because b lacks 2. A typical use is finding students enrolled in ALL courses.",
          "explanation": "Explains rename as aliasing needed for self-joins and division as an all-values predicate, each with a worked example.",
          "oneShotPreview": "Rename ρ aliases relations/columns for self-joins; Division R÷S gives R values matching every tuple of S."
        },
        {
          "q": "7 What is Relational Calculus? Differentiate between Tuple Relational Calculus and Domain Relational Calculus with examples.",
          "a": "Relational calculus is a declarative, non-procedural query language based on first-order logic: a query is a formula describing the properties of the required result, not the steps to fetch it. In Tuple Relational Calculus (TRC) variables range over whole tuples (rows) and a query is written {t | P(t)}; for example {t | EMPLOYEE(t) and t.salary > 50000} returns all highly paid employee rows. In Domain Relational Calculus (DRC) variables range over single domain values and a query is written {<x1, ..., xn> | P(x1, ..., xn)}; for example {<n, s> | exists e (<e, n, s> in EMPLOYEE and s > 50000)} returns name-salary pairs. The key difference is the variable type — tuples versus individual values — while both are declarative and equally expressive.",
          "explanation": "Defines calculus, gives formal notation and an example for each variant, and states the core tuple-versus-value difference.",
          "oneShotPreview": "Declarative logic query; TRC uses tuple variables {t | P(t)}, DRC uses value variables {<x> | P(x)}."
        },
        {
          "q": "8 a) List and identify a common data types used in SQL with examples.",
          "a": "SQL provides several built-in data type families. Numeric types include INT/INTEGER (25), SMALLINT, BIGINT, and DECIMAL(p,s) or NUMERIC (DECIMAL(8,2) holds 12345.67), plus FLOAT/REAL/DOUBLE for approximate values. Character types include CHAR(n), fixed length (CHAR(2) for 'TS'), VARCHAR(n), variable length (VARCHAR(50) for a name), and TEXT/CLOB for long strings. Date/time types include DATE ('2026-11-24'), TIME, and TIMESTAMP ('2026-11-24 10:30:00'). BOOLEAN stores TRUE/FALSE and BLOB stores binary large objects. These types define each column's domain and let the DBMS enforce value validity.",
          "explanation": "Enumerates the standard SQL type families with an example of each, directly answering 'list and identify with examples'.",
          "oneShotPreview": "INT, DECIMAL/NUMERIC, FLOAT; CHAR, VARCHAR, TEXT; DATE, TIME, TIMESTAMP; BOOLEAN; BLOB."
        },
        {
          "q": "8 b) Design a table Employee using appropriate SQL data types(like INT,VARCHAR and DATE)",
          "a": "A suitable definition is: CREATE TABLE Employee (emp_id INT PRIMARY KEY, emp_name VARCHAR(50) NOT NULL, dept VARCHAR(30), salary DECIMAL(10,2) CHECK (salary >= 0), doj DATE, is_active BOOLEAN DEFAULT TRUE). emp_id is an integer primary key uniquely identifying each employee, emp_name and dept use VARCHAR because names vary in length, salary uses DECIMAL(10,2) for exact currency with a non-negative check, doj (date of joining) is a DATE, and is_active is a BOOLEAN with a default. This design matches each attribute to its real domain and adds sensible integrity constraints.",
          "explanation": "Provides concrete SQL using the requested types and justifies each choice, which is what 'design with appropriate types' requires.",
          "oneShotPreview": "CREATE TABLE Employee(emp_id INT PK, emp_name VARCHAR(50), dept VARCHAR(30), salary DECIMAL(10,2), doj DATE, is_active BOOLEAN)."
        },
        {
          "q": "9 Design a table student using appropriate SQL data types(like INT, FLOAT, CHAR,VARCHAR , BOOLEAN and DATE)",
          "a": "A suitable definition is: CREATE TABLE Student (rollno INT PRIMARY KEY, name VARCHAR(50) NOT NULL, gender CHAR(1) CHECK (gender IN ('M','F','O')), percentage FLOAT, dept VARCHAR(30), is_hosteller BOOLEAN DEFAULT FALSE, dob DATE). rollno is an INT primary key, name uses VARCHAR for variable-length text, gender uses CHAR(1) because it is one fixed character, percentage uses FLOAT for a fractional value, dept uses VARCHAR, is_hosteller is a BOOLEAN, and dob is a DATE. This deliberately uses every requested type and reflects each attribute's real domain.",
          "explanation": "Supplies concrete SQL that uses all six requested types (INT, FLOAT, CHAR, VARCHAR, BOOLEAN, DATE) and explains each choice.",
          "oneShotPreview": "CREATE TABLE Student(rollno INT PK, name VARCHAR(50), gender CHAR(1), percentage FLOAT, dept VARCHAR(30), is_hosteller BOOLEAN, dob DATE)."
        },
        {
          "q": "10 Classify Database languages with examples.",
          "a": "Database languages are classified into four groups. Data Definition Language (DDL) defines the schema: CREATE, ALTER, DROP, TRUNCATE, RENAME, e.g., CREATE TABLE Student(...). Data Manipulation Language (DML) changes and retrieves data: SELECT, INSERT, UPDATE, DELETE, e.g., INSERT INTO Student VALUES(101,'Ravi','CSE'). Data Control Language (DCL) manages authorisation: GRANT and REVOKE, e.g., GRANT SELECT ON Student TO user1. Transaction Control Language (TCL) manages transactions: COMMIT, ROLLBACK, SAVEPOINT. Some texts also separate SELECT as Data Query Language (DQL). Together these allow defining, querying, updating, securing, and reliably committing database work.",
          "explanation": "Gives the standard four-way classification with commands and an example of each, covering 'classify with examples'.",
          "oneShotPreview": "DDL (CREATE/ALTER/DROP), DML (SELECT/INSERT/UPDATE/DELETE), DCL (GRANT/REVOKE), TCL (COMMIT/ROLLBACK/SAVEPOINT)."
        },
        {
          "q": "11 a) Create the DDL Commands – Table Creation, Altering the table structures, truncating a table and dropping a table.",
          "a": "DDL commands define and modify database objects. Table creation: CREATE TABLE Student (rollno INT PRIMARY KEY, name VARCHAR(50), dept VARCHAR(30));. Altering the structure: ALTER TABLE Student ADD COLUMN email VARCHAR(50); or ALTER TABLE Student MODIFY name VARCHAR(100);. Truncating removes all rows but keeps the structure: TRUNCATE TABLE Student;. Dropping removes the table entirely: DROP TABLE Student;. These illustrate the CREATE, ALTER, TRUNCATE, and DROP operations used to build and reshape a schema; TRUNCATE is usually not rollback-able whereas DROP deletes the object itself.",
          "explanation": "Gives correct SQL for all four requested DDL operations and notes the key difference between TRUNCATE and DROP.",
          "oneShotPreview": "CREATE TABLE ...; ALTER TABLE ... ADD/MODIFY; TRUNCATE TABLE ... (empty, keep structure); DROP TABLE ... (remove table)."
        },
        {
          "q": "11 b) Develop the DML Commands – Insert, Select Commands, update& delete Commands.",
          "a": "DML commands operate on the data inside tables. Insert adds rows: INSERT INTO Student (rollno, name, dept) VALUES (101, 'Ravi', 'CSE');. Select retrieves rows: SELECT rollno, name FROM Student WHERE dept = 'CSE';. Update modifies existing rows: UPDATE Student SET dept = 'IT' WHERE rollno = 101;. Delete removes rows: DELETE FROM Student WHERE rollno = 101;. Together these cover adding, retrieving, changing, and removing data; the WHERE clause in UPDATE and DELETE limits which rows are affected, and omitting it would affect every row.",
          "explanation": "Gives correct SQL for all four requested DML commands with WHERE-clause examples and a caution about unrestricted updates and deletes.",
          "oneShotPreview": "INSERT INTO ... VALUES; SELECT ... FROM ... WHERE; UPDATE ... SET ... WHERE; DELETE FROM ... WHERE."
        }
      ]
    },
    "3": {
      "unitTitle": "SQL",
      "totalQuestions": 23,
      "questions": [
        {
          "q": "1 a) What is the purpose of the SELECT statement in SQL?",
          "a": "The SELECT statement retrieves data from one or more tables in a database. It is the primary Data Query Language (DQL) command: it chooses specific columns (projection), filters rows with WHERE, sorts with ORDER BY, and can combine with joins, grouping and aggregate functions. A basic form is SELECT column1, column2 FROM table_name WHERE condition; or SELECT * FROM table_name; to fetch every column. SELECT does not modify data; it only returns a result set, which is itself a new relation.",
          "explanation": "SELECT is the fundamental command for reading data, so naming its column-selection, filtering and sorting roles captures its purpose exactly as the two-mark question asks.",
          "oneShotPreview": "Retrieves rows/columns from tables; the core DQL command (SELECT ... FROM ... WHERE ...)."
        },
        {
          "q": "1 b) What is the difference between AND and OR logical operators in SQL?",
          "a": "AND and OR combine multiple conditions in a WHERE clause. AND returns a row only when all combined conditions are true, e.g., WHERE salary > 5000 AND dept = 20; OR returns a row when at least one condition is true, e.g., WHERE dept = 20 OR dept = 30. AND has higher precedence than OR, so parentheses should be used to force the intended grouping. AND narrows the result set (intersection of conditions), while OR widens it (union of conditions).",
          "explanation": "The essential distinction is all-conditions-true versus any-condition-true, and precedence plus parentheses are important practical details for writing correct conditions.",
          "oneShotPreview": "AND = all conditions true (narrows); OR = any condition true (widens); AND binds tighter than OR."
        },
        {
          "q": "1 c) Name any two SQL functions used to work with date and time.",
          "a": "Common SQL date and time functions include SYSDATE() / NOW() (current date and time), EXTRACT(YEAR FROM date_col) and EXTRACT(MONTH FROM date_col) (parts of a date), YEAR() and MONTH(), DATEDIFF(d1, d2) (difference between dates), ADD_MONTHS() / DATE_ADD() (add an interval), and TO_CHAR() / DATE_FORMAT() (format a date). For example, SELECT EXTRACT(YEAR FROM order_date) FROM orders; returns the year part of each order date. Any two of these functions are acceptable for the two marks.",
          "explanation": "These are standard built-in date/time functions in dialects such as MySQL and Oracle; naming two with a usage example satisfies the question.",
          "oneShotPreview": "Any two of: EXTRACT(YEAR FROM d), MONTH(d), NOW()/SYSDATE(), DATEDIFF(), DATE_ADD(), TO_CHAR()."
        },
        {
          "q": "1 d) Explain the purpose of the CHECK constraint with an example.",
          "a": "The CHECK constraint enforces domain integrity by restricting the values that may be stored in a column: an INSERT or UPDATE succeeds only if the specified Boolean condition evaluates to TRUE (or UNKNOWN). For example, CREATE TABLE Employees (age INT CHECK (age >= 18), salary INT CHECK (salary > 0)); prevents under-age employees and negative salaries. CHECK can be declared at column level (inline) or table level and can reference multiple columns. It keeps invalid data out of the table at write time.",
          "explanation": "CHECK validates column values against a condition, so a definition plus a concrete CREATE TABLE example is exactly what the question requires.",
          "oneShotPreview": "Restricts column values to a condition, e.g., CHECK (age >= 18); rejects invalid INSERT/UPDATE."
        },
        {
          "q": "1 e) What is a view in SQL?",
          "a": "A view is a virtual table whose contents are defined by a stored SELECT query rather than being physically stored as data. It is created with CREATE VIEW view_name AS SELECT ...; and can be queried like an ordinary table, presenting a tailored, simplified or restricted perspective of the underlying base tables. Views give data independence, hide complex queries, and improve security by exposing only permitted columns. Changes in the base tables are reflected in the view; some views are updatable, while views involving aggregation, DISTINCT or joins are read-only.",
          "explanation": "A view is a stored query presented as a table, so this definition together with its benefits and updatability covers the two-mark answer.",
          "oneShotPreview": "A virtual table defined by a stored SELECT; queryable like a table, gives security and simplicity."
        },
        {
          "q": "2 a) Illustrate about Basic SQL Querying (SELECT & WHERE) with examples.",
          "a": "Basic SQL querying uses SELECT to choose columns and FROM to name the table, with WHERE to filter rows by a condition. The general form is SELECT column_list FROM table_name WHERE condition;. For an Employee table, SELECT name, salary FROM Employee WHERE salary > 50000; lists the names and salaries of highly paid staff, and SELECT * FROM Employee WHERE dept = 'CS' AND salary > 50000; combines two conditions. Without a WHERE clause, SELECT returns all rows. WHERE supports comparison operators (=, <>, >, <), logical operators (AND, OR, NOT), and the BETWEEN, IN, LIKE and IS NULL predicates, and is evaluated before grouping and sorting.",
          "explanation": "Showing the SELECT ... FROM ... WHERE structure with concrete filtering examples is what 'illustrate with examples' requires.",
          "oneShotPreview": "SELECT columns FROM table WHERE condition; e.g., SELECT name, salary FROM Employee WHERE salary > 50000."
        },
        {
          "q": "2 b) Develop a query to display the names and salaries of employees earning more than 50,000.",
          "a": "SELECT name, salary FROM employees WHERE salary > 50000; This query selects only the name and salary columns from the employees table and filters the rows to those whose salary exceeds 50000 using a WHERE clause with the greater-than operator.",
          "explanation": "The query uses the required columns and table together with a '>' comparison for the 'more than 50,000' condition, matching the four-mark requirement exactly.",
          "oneShotPreview": "SELECT name, salary FROM employees WHERE salary > 50000;"
        },
        {
          "q": "3 a) What are the different types of operators explain with examples.",
          "a": "SQL operators are grouped into several types: (1) Arithmetic operators +, -, *, /, % used in expressions, e.g., salary * 1.15; (2) Comparison or relational operators =, <> or !=, >, <, >=, <=, e.g., WHERE marks > 75; (3) Logical operators AND, OR, NOT, e.g., WHERE dept = 'CS' AND marks > 75; (4) Range, membership and pattern operators BETWEEN, IN, LIKE and IS NULL, e.g., WHERE marks BETWEEN 60 AND 80, WHERE dept IN ('CS', 'IT'), WHERE name LIKE 'A%'; (5) Set operators UNION, INTERSECT and EXCEPT/MINUS. Each type serves a distinct purpose in forming query conditions and expressions.",
          "explanation": "Listing the operator categories with an example of each demonstrates the different operator types the question asks for.",
          "oneShotPreview": "Arithmetic (+ - * / %), comparison (= <> > <), logical (AND OR NOT), BETWEEN/IN/LIKE/IS NULL, and set operators."
        },
        {
          "q": "3 b) Given a table STUDENTS(student_id, name, age, department, marks), develop SQL queries to: i) Display the names and departments of all students. ii) Display the details of students with marks greater than 75. iii) Display students from the 'Computer Science' department.",
          "a": "i) SELECT name, department FROM STUDENTS; ii) SELECT * FROM STUDENTS WHERE marks > 75; iii) SELECT * FROM STUDENTS WHERE department = 'Computer Science'; Each query selects the columns asked for and uses the appropriate filter: none for (i), marks > 75 for (ii), and department = 'Computer Science' for (iii), all on the given STUDENTS schema.",
          "explanation": "Each of the three queries uses the correct columns and WHERE condition for its sub-task, which is what the five-mark question requires.",
          "oneShotPreview": "i) SELECT name, department FROM STUDENTS; ii) ... WHERE marks > 75; iii) ... WHERE department = 'Computer Science';"
        },
        {
          "q": "4 a) Compare an Arithmetic and Logical Operations with examples.",
          "a": "Arithmetic operations perform numeric calculations using +, -, *, / and % and return a numeric value, e.g., SELECT salary * 1.15 AS new_salary FROM employees;. Logical operations combine Boolean conditions with AND, OR and NOT and return a truth value used to decide which rows pass a filter, e.g., SELECT * FROM employees WHERE salary > 5000 AND department_id = 20;. The key difference is purpose: arithmetic computes new numeric values and may appear in expressions or the SELECT list, while logical operators combine predicates and appear in WHERE or HAVING to filter rows.",
          "explanation": "Comparing purpose, operators and examples directly addresses the 'compare with examples' requirement for arithmetic versus logical operations.",
          "oneShotPreview": "Arithmetic (+ - * / %) computes numbers; logical (AND OR NOT) combines conditions to filter rows."
        },
        {
          "q": "4 b) Using a table EMPLOYEES(emp_id, name, salary, department_id), develop SQL queries to: i) Increase each employee's salary by 15% and display the new salary. ii) Display employees who earn more than 5000 and belong to department 20. iii) Display employees whose salary is not equal to 6000 and department is not 30.",
          "a": "i) SELECT name, salary * 1.15 AS new_salary FROM EMPLOYEES; ii) SELECT * FROM EMPLOYEES WHERE salary > 5000 AND department_id = 20; iii) SELECT * FROM EMPLOYEES WHERE salary <> 6000 AND department_id <> 30; Query (i) uses an arithmetic expression with an alias to compute the 15% increase; (ii) uses AND to require both conditions; (iii) uses the not-equal operator (<>, or !=) with AND to exclude both specified values.",
          "explanation": "Each query correctly implements its sub-requirement on the given EMPLOYEES schema: a computed column, a two-condition AND, and a pair of not-equal conditions.",
          "oneShotPreview": "i) salary * 1.15 AS new_salary; ii) WHERE salary > 5000 AND department_id = 20; iii) WHERE salary <> 6000 AND department_id <> 30."
        },
        {
          "q": "5 a) List and Identify the SQL Functions like (Date, Numeric, String) with examples.",
          "a": "SQL provides built-in functions in categories. Numeric functions: ABS(x), ROUND(x, d), CEIL(x), FLOOR(x), MOD(x, y), POWER(x, y), SQRT(x), e.g., ROUND(1234.56, 1) gives 1234.6. String functions: UPPER(s), LOWER(s), LENGTH(s), SUBSTRING(s, start, len), CONCAT(s1, s2), TRIM(s), REPLACE(s, old, new), e.g., UPPER('hello') gives 'HELLO'. Date/Time functions: SYSDATE()/NOW(), EXTRACT(YEAR FROM d), MONTH(d), YEAR(d), DATEDIFF(d1, d2), ADD_MONTHS(d, n), TO_CHAR()/DATE_FORMAT(), e.g., YEAR(order_date) returns the year. Aggregate functions such as COUNT, SUM and AVG form another category. These functions are used in SELECT lists and in WHERE/HAVING clauses to transform and format data.",
          "explanation": "Grouping the functions into Date, Numeric and String categories with a concrete example for each satisfies 'list and identify' for the five marks.",
          "oneShotPreview": "Numeric: ROUND, ABS; String: UPPER, LOWER, LENGTH, SUBSTRING; Date: NOW, EXTRACT, DATEDIFF — each with an example."
        },
        {
          "q": "5 b) Given a table ORDERS(order_id, customer_name, order_date, amount), develop queries to: i) Extract the year and month from the order date. ii) Display amount rounded off to the nearest 100. iii) Display customer names in UPPERCASE and lowercase formats.",
          "a": "i) SELECT order_id, EXTRACT(YEAR FROM order_date) AS yr, EXTRACT(MONTH FROM order_date) AS mon FROM ORDERS; (in MySQL: YEAR(order_date), MONTH(order_date)). ii) SELECT order_id, ROUND(amount, -2) AS rounded_amount FROM ORDERS; a negative precision of -2 rounds to the nearest hundred (equivalently ROUND(amount / 100) * 100). iii) SELECT UPPER(customer_name) AS upper_name, LOWER(customer_name) AS lower_name FROM ORDERS;",
          "explanation": "These use EXTRACT (or YEAR/MONTH) for date parts, ROUND with precision -2 for rounding to the nearest 100, and UPPER/LOWER for case conversion, all on the given ORDERS schema.",
          "oneShotPreview": "i) EXTRACT(YEAR/MONTH FROM order_date); ii) ROUND(amount, -2); iii) UPPER(customer_name), LOWER(customer_name)."
        },
        {
          "q": "6 Discuss the super key, candidate key, primary key, alternate key, composite key, and Foreign key.",
          "a": "A super key is any set of attributes that uniquely identifies every tuple in a relation, though it may contain extra attributes. A candidate key is a minimal super key: no proper subset of it is a super key, and a relation may have several candidate keys. The primary key is the candidate key chosen by the designer to identify rows; it is unique and cannot be NULL. An alternate key is a candidate key not selected as the primary key. A composite key is a key consisting of two or more columns used together, e.g., (student_id, course_id). A foreign key is a column or set of columns in one table that references the primary key of another table, enforcing referential integrity. For example, in Employee(emp_id, dept_id), emp_id is the primary key and dept_id is a foreign key referencing Department(dept_id).",
          "explanation": "Defining all six key types and relating them with a concrete example covers the full ten-mark discussion.",
          "oneShotPreview": "super = unique set; candidate = minimal super; primary = chosen candidate; alternate = other candidate; composite = multi-column; foreign = references another table's PK."
        },
        {
          "q": "7 a) Discuss about Complex integrity constraints in SQL.",
          "a": "Beyond simple constraints such as NOT NULL, UNIQUE, PRIMARY KEY, CHECK and FOREIGN KEY, SQL supports complex integrity constraints. An ASSERTION (CREATE ASSERTION) states a Boolean condition that must always hold for the whole database, e.g., that total enrollment never exceeds a room's capacity; the DBMS checks it whenever relevant tables change. A TRIGGER (CREATE TRIGGER) is a procedural constraint that automatically fires a block of SQL on an INSERT, UPDATE or DELETE, allowing business rules that span multiple tables, such as keeping a derived total in sync. CREATE DOMAIN defines a reusable value domain, and referential actions such as ON DELETE CASCADE or SET NULL specify behaviour on referenced-row deletion. These mechanisms enforce semantic integrity that simple column constraints cannot express.",
          "explanation": "Naming assertions, triggers, domains and referential actions and explaining what each enforces answers what makes an integrity constraint 'complex'.",
          "oneShotPreview": "ASSERTIONs and TRIGGERs enforce database-wide/business rules that simple column constraints cannot, plus domains and referential actions."
        },
        {
          "q": "7 b) Create a sub query to establish the WHERE, ANY, AS and ALL sub queries with example.",
          "a": "A subquery is a SELECT nested inside another SQL statement. Using Employees(emp_id, name, salary, dept_id): WHERE with a scalar subquery: SELECT name FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees); returns employees earning above average. ANY: SELECT name FROM Employees WHERE salary > ANY (SELECT salary FROM Employees WHERE dept_id = 10); means greater than at least one department-10 salary. ALL: SELECT name FROM Employees WHERE salary > ALL (SELECT salary FROM Employees WHERE dept_id = 10); means greater than every department-10 salary. AS aliases a subquery used as a derived table in the FROM clause: SELECT E.name, D.avg_sal FROM Employees E, (SELECT dept_id, AVG(salary) AS avg_sal FROM Employees GROUP BY dept_id) AS D WHERE E.dept_id = D.dept_id;",
          "explanation": "The examples show a subquery in a WHERE condition, quantified comparisons with ANY and ALL, and an alias (AS) for a derived table, covering every construct requested.",
          "oneShotPreview": "WHERE salary > (subquery); > ANY; > ALL; and (SELECT ...) AS alias in FROM — each with an example."
        },
        {
          "q": "8 a) Differentiate between Nested Queries & Sub queries with examples.",
          "a": "A subquery is any SELECT statement embedded inside another SQL statement (in its WHERE, HAVING, FROM or SELECT clause); the containing statement is the outer query and the embedded one is the inner query. A nested query is a more specific case in which a subquery is itself nested inside another subquery, giving multiple levels of nesting. Thus every nested query is a subquery, but 'nested' emphasises several levels, and the two terms are often used interchangeably. Simple subquery example: SELECT name FROM Employee WHERE salary > (SELECT AVG(salary) FROM Employee); Nested query example: SELECT name FROM Employee WHERE dept_id IN (SELECT dept_id FROM Department WHERE location IN (SELECT location FROM Branch WHERE city = 'Chennai')); A correlated subquery refers to columns of the outer query, while a non-correlated subquery does not.",
          "explanation": "Clarifying that subquery is the general term while nested query means subqueries within subqueries, with an example of each, satisfies the differentiation.",
          "oneShotPreview": "Subquery = SELECT inside another statement; nested query = subquery inside another subquery (multi-level); the terms often overlap."
        },
        {
          "q": "8 b) Evaluate Order by, Group by and Having Clauses with example.",
          "a": "GROUP BY groups rows sharing a common value into summary rows, normally with aggregate functions. HAVING filters those groups after grouping and may use aggregate functions, whereas WHERE filters individual rows before grouping. ORDER BY sorts the final result in ascending (default) or descending order. The logical evaluation order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Example: SELECT dept_id, COUNT(*) AS emp_count, AVG(salary) AS avg_sal FROM Employees WHERE salary > 3000 GROUP BY dept_id HAVING COUNT(*) > 2 ORDER BY avg_sal DESC; this filters rows, groups by department, keeps groups with more than two employees, and sorts by average salary descending.",
          "explanation": "Defining all three clauses, stating their evaluation order and showing one query that uses them together is what 'evaluate with example' requires.",
          "oneShotPreview": "GROUP BY groups rows, HAVING filters groups, ORDER BY sorts results; order: WHERE → GROUP BY → HAVING → ORDER BY."
        },
        {
          "q": "9 Distinguish different types of aggregate operators with examples in SQL.",
          "a": "Aggregate operators summarise many rows into a single value. COUNT(*) counts all rows, COUNT(column) counts non-NULL values, and COUNT(DISTINCT column) counts distinct values; SUM(column) gives the total, AVG(column) the arithmetic mean, and MAX(column) and MIN(column) the largest and smallest values. For example, SELECT COUNT(*), SUM(salary), AVG(salary), MAX(salary), MIN(salary) FROM Employee; returns five summary figures in one row. They can be combined with GROUP BY for per-group summaries and filtered with HAVING. Except for COUNT(*), aggregates ignore NULL values. Unlike scalar functions that act on a single value, aggregates operate on an entire set of rows.",
          "explanation": "Listing and illustrating COUNT, SUM, AVG, MAX and MIN with a query distinguishes the aggregate operators as the ten-mark question asks.",
          "oneShotPreview": "COUNT, SUM, AVG, MAX, MIN — summarise row sets into one value; ignore NULLs (except COUNT(*)); used with GROUP BY/HAVING."
        },
        {
          "q": "10 a) Classify different join operations and explain with example SQL Joins (INNER, LEFT, RIGHT, FULL)",
          "a": "Joins combine rows from two or more tables using a related column. An INNER JOIN returns only rows with matching values in both tables. A LEFT (OUTER) JOIN returns every row from the left table plus matched rows from the right, placing NULLs where no match exists. A RIGHT (OUTER) JOIN returns every row from the right table plus matched rows from the left. A FULL (OUTER) JOIN returns all rows from both tables, with NULLs on whichever side lacks a match. For Employee(emp_id, dept_id, name) and Department(dept_id, dept_name): SELECT E.name, D.dept_name FROM Employee E INNER JOIN Department D ON E.dept_id = D.dept_id; shows matched pairs, and replacing INNER with LEFT keeps employees who have no department. A CROSS JOIN gives the Cartesian product and a SELF JOIN joins a table to itself.",
          "explanation": "Classifying the four join types by which unmatched rows they retain, with a concrete ON-clause example, answers the five-mark question.",
          "oneShotPreview": "INNER = matches only; LEFT = all left; RIGHT = all right; FULL = all both; e.g., ... ON E.dept_id = D.dept_id."
        },
        {
          "q": "10 b) Illustrate about different Views like (Updatable and Non-updatable) with examples.",
          "a": "An updatable view is one through which INSERT, UPDATE and DELETE can be applied, with the changes propagating to the underlying base table; it is typically a simple view on a single table without DISTINCT, GROUP BY, HAVING, aggregate functions or computed expressions. Example: CREATE VIEW Emp_View AS SELECT emp_id, name, salary FROM Employee; then UPDATE Emp_View SET salary = 60000 WHERE emp_id = 101; succeeds. A non-updatable (read-only) view has derived or computed rows that cannot be modified; example: CREATE VIEW Dept_Salary AS SELECT dept_id, AVG(salary) AS avg_sal FROM Employee GROUP BY dept_id; an UPDATE of avg_sal fails because it is an aggregate. Views also improve security by hiding columns, and WITH CHECK OPTION can restrict updates to rows satisfying the view's condition.",
          "explanation": "Distinguishing updatable from non-updatable views by their structure, with an example of each, covers the illustration requested.",
          "oneShotPreview": "Updatable view (simple, one table) allows DML; non-updatable (aggregate/DISTINCT/join) is read-only — e.g., AVG(salary) GROUP BY."
        },
        {
          "q": "11 a) Explain about Relational Set Operations with examples",
          "a": "Relational set operations treat relations as sets of tuples and require union compatibility, meaning the two relations have the same number of attributes with compatible domains. UNION returns every tuple present in either relation without duplicates (SELECT ... FROM A UNION SELECT ... FROM B;). INTERSECT returns tuples present in both relations. EXCEPT (or MINUS) returns tuples present in the first relation but not the second. CARTESIAN PRODUCT combines every tuple of one relation with every tuple of the other, while a JOIN combines related tuples. UNION ALL is like UNION but keeps duplicates. For example, listing student IDs in either the CS or IT branch uses UNION, and students enrolled in both uses INTERSECT.",
          "explanation": "Defining the set operations, noting the union-compatibility requirement and giving SQL-style examples covers the relational set operations question.",
          "oneShotPreview": "UNION (distinct in either), INTERSECT (in both), EXCEPT/MINUS (in first only), CARTESIAN PRODUCT; require union compatibility."
        },
        {
          "q": "11 b) Given two tables OLD_CUSTOMERS(customer_id) and NEW_CUSTOMERS(customer_id) develop queries to: i) Display customer IDs present in both tables (INTERSECT). ii) Display customers present in OLD_CUSTOMERS but not in NEW_CUSTOMERS. iii) Display all unique customer IDs from both tables (UNION).",
          "a": "i) SELECT customer_id FROM OLD_CUSTOMERS INTERSECT SELECT customer_id FROM NEW_CUSTOMERS; ii) SELECT customer_id FROM OLD_CUSTOMERS EXCEPT SELECT customer_id FROM NEW_CUSTOMERS; (in Oracle use MINUS, or use NOT IN / NOT EXISTS). iii) SELECT customer_id FROM OLD_CUSTOMERS UNION SELECT customer_id FROM NEW_CUSTOMERS; Each query applies the set operator that matches the requirement to the two given single-column tables: INTERSECT for customers in both, EXCEPT for old-but-not-new, and UNION for all distinct IDs.",
          "explanation": "Each query uses the correct set operator on the two given tables, so the three sub-requirements are each satisfied exactly.",
          "oneShotPreview": "i) INTERSECT; ii) EXCEPT (or MINUS / NOT IN); iii) UNION — applied to the two customer_id tables."
        }
      ]
    },
    "4": {
      "unitTitle": "Schema Refinement (Normalization)",
      "totalQuestions": 21,
      "questions": [
        {
          "q": "1 a) Give an example of a functional dependency.",
          "a": "A functional dependency X → Y means that the value of X uniquely determines the value of Y: any two tuples agreeing on X must also agree on Y. For example, in EMPLOYEE(emp_id, name, salary), emp_id → name and emp_id → salary, because each employee id identifies exactly one name and one salary. Here emp_id is the determinant.",
          "explanation": "This is the standard definition of a functional dependency from the relational model; the example shows a key attribute determining non-key attributes.",
          "oneShotPreview": "FD X→Y: X determines Y; e.g. emp_id → name, salary."
        },
        {
          "q": "1 b) What is the main purpose of normalization in database design?",
          "a": "The main purpose of normalization is to organize data into well-structured tables so as to minimize redundancy and eliminate insertion, update, and deletion anomalies. It applies a sequence of normal forms using keys and functional dependencies to produce a consistent, easy-to-maintain design. The goal is a lossless, dependency-preserving decomposition that protects data integrity.",
          "explanation": "Normalization is defined as reducing redundancy and anomalies while preserving dependencies and information, which is the core objective of schema refinement.",
          "oneShotPreview": "Normalization removes redundancy and anomalies via normal forms and lossless, dependency-preserving decomposition."
        },
        {
          "q": "1 c) Why do we convert tables to 1NF?",
          "a": "First Normal Form requires that every column contain a single, atomic (indivisible) value and that there be no repeating groups or nested/multivalued attributes. Converting a table to 1NF removes repeating groups so each row-column intersection holds one value and every row can be identified by a key. This is the minimum requirement for a relation and is the necessary first step before applying 2NF, 3NF, and higher normal forms.",
          "explanation": "1NF eliminates repeating groups and multivalued attributes, making the table a proper relation and enabling further normalization.",
          "oneShotPreview": "1NF enforces atomic values and no repeating groups — the base step before higher normal forms."
        },
        {
          "q": "1 d) What is a transitive dependency?",
          "a": "A transitive dependency is an indirect dependency: if A → B and B → C hold (and B does not determine A), then A → C, so C depends on A through B. For example, emp_id → dept_id and dept_id → dept_name implies emp_id → dept_name. Transitive dependencies of non-key attributes cause redundancy and update anomalies and are removed in Third Normal Form.",
          "explanation": "It follows by the transitivity rule of Armstrong's axioms and is exactly the kind of dependency 3NF eliminates.",
          "oneShotPreview": "A→B and B→C ⇒ A→C indirectly; removed in 3NF (e.g. emp_id→dept_id→dept_name)."
        },
        {
          "q": "1 e) What is a lossless join decomposition?",
          "a": "A decomposition of a relation R into R1, R2, ..., Rn is lossless (lossless-join) if the natural join of the decomposed relations reproduces exactly the original relation, with no spurious or missing tuples. It guarantees that decomposing does not lose any information. A decomposition R1, R2 is lossless with respect to F if F+ contains a dependency R1 ∩ R2 → R1 or R1 ∩ R2 → R2.",
          "explanation": "Lossless join means the decomposition is reversible and adds no fake tuples — a required property for any valid decomposition.",
          "oneShotPreview": "Lossless join: joining the decomposed tables reproduces the original exactly, no spurious tuples."
        },
        {
          "q": "2 a) Explain about Purpose of Normalization or schema refinement.",
          "a": "Schema refinement (normalization) is the process of decomposing a relation into smaller, well-structured relations using keys and functional dependencies. Its purpose is to reduce data redundancy, avoid insertion, update, and deletion anomalies, and enforce data integrity and consistency. It also makes the database easier to query and maintain, and aims for decompositions that are lossless and dependency-preserving. The outcome is a schema in a desired normal form (typically 3NF or BCNF).",
          "explanation": "This states the goals of schema refinement — remove redundancy/anomalies while keeping information and dependencies intact.",
          "oneShotPreview": "Schema refinement reduces redundancy/anomalies, ensures integrity, and yields lossless, dependency-preserving tables."
        },
        {
          "q": "2 b) Illustrate about Functional Dependency.",
          "a": "A functional dependency, written X → Y, holds if for every pair of tuples in a relation, equal values of X imply equal values of Y; X is the determinant and Y is determined. For example, in STUDENT(roll_no, name, dept, hod), roll_no → name and roll_no → dept, and dept → hod. FDs are constraints derived from the semantics of the data and are reasoned about using Armstrong's axioms (reflexivity, augmentation, transitivity, plus union, decomposition, and pseudotransitivity). They form the basis for keys and for normal forms up to BCNF.",
          "explanation": "The answer defines an FD, illustrates it with a concrete relation, and connects it to the axioms and normalization.",
          "oneShotPreview": "FD X→Y: equal X ⇒ equal Y (e.g. roll_no→name, dept→hod); reasoned via Armstrong axioms."
        },
        {
          "q": "3 a) Explain the following with suitable example. (i) Full functional dependency. (ii) Partial dependency.",
          "a": "(i) A full functional dependency X → Y holds when Y depends on the entire set X and not on any proper subset of X; removing any attribute from X breaks the dependency. Example: in ENROLL(roll_no, course_id, grade), grade depends on the whole composite key {roll_no, course_id}. (ii) A partial dependency occurs when a non-key attribute depends on only part of a composite candidate key. Example: in the same relation, if course_id → course_name, then course_name is partially dependent on the key because it depends only on course_id. Partial dependencies are eliminated in Second Normal Form.",
          "explanation": "Both concepts are defined relative to a composite key; full dependence uses the whole key while partial dependence uses a proper subset, which 2NF removes.",
          "oneShotPreview": "Full FD: depends on whole key; Partial FD: depends on part of composite key — removed in 2NF."
        },
        {
          "q": "4 b) Compare Trivial and Non – Trivial Functional Dependencies with example.",
          "a": "A functional dependency X → Y is trivial if Y is a subset of X (Y ⊆ X); it always holds and imposes no real constraint, e.g., A → A or {A, B} → A. It is non-trivial if Y is not a subset of X (Y ⊄ X), e.g., roll_no → name, which expresses a genuine relationship. A completely non-trivial FD has X ∩ Y = ∅. Only non-trivial dependencies are meaningful for schema design and normalization, because trivial ones are automatically satisfied.",
          "explanation": "The distinction is based on set containment of Y in X; trivial FDs are self-evident while non-trivial FDs constrain data.",
          "oneShotPreview": "Trivial FD: Y ⊆ X (A→A, always true); Non-trivial: Y ⊄ X (roll_no→name), constrains data."
        },
        {
          "q": "5 Outline the terminologies: Partial Dependency, Transitive Dependency, Determinant, MVD, Join Dependency.",
          "a": "Partial dependency: a non-key attribute depends on only a proper subset of a composite candidate key (removed in 2NF). Transitive dependency: an indirect dependency where A → B and B → C imply A → C (removed in 3NF). Determinant: the attribute or set of attributes on the left-hand side of a functional dependency (X in X → Y). MVD (multivalued dependency): X →→ Y, meaning for each X value there is a set of Y values independent of the remaining attributes Z; handled by 4NF. Join dependency: a constraint that a relation equals the natural join of several of its projections; handled by 5NF/PJNF.",
          "explanation": "These are the core dependency concepts that motivate the successive normal forms 2NF, 3NF, 4NF and 5NF.",
          "oneShotPreview": "Partial (2NF), Transitive (3NF), Determinant (LHS of FD), MVD (4NF), Join dependency (5NF)."
        },
        {
          "q": "6 a) Consider the schema: R (A, B, C, G, H, I) and the set of FDs (A → B, A → C, CG → H, CG → I, B → H). Prove the members of F+: A → H, CG → HI, AG → I with axioms is true.",
          "a": "Proof using Armstrong's axioms: (1) A → H: A → B is given and B → H is given, so by transitivity A → H. (2) CG → HI: CG → H and CG → I are both given, so by the union rule CG → HI. (3) AG → I: from A → C, augment both sides with G to get AG → CG; since CG → I is given, by transitivity AG → I. Hence all three dependencies belong to F+.",
          "explanation": "Each inference is justified by a specific Armstrong axiom (transitivity, union, augmentation), which is how closure F+ is derived.",
          "oneShotPreview": "A→H (transitivity via B), CG→HI (union), AG→I (augment A→C with G then transitivity)."
        },
        {
          "q": "6 b) Consider the relation scheme R = {E, F, G, H, I, J, K, L, M, N} and the set of functional dependencies {E, F} → {G}, {F} → {I, J}, {E, H} → {K, L}, K → {M}, L → {N} on R. What is the key for R?",
          "a": "Attributes E, F, and H never appear on the right-hand side of any FD, so they must be part of every key. Compute the closure of {E, F, H}: {E,F,H}+ = {E,F,H, G (from E,F→G), I,J (from F→I,J), K,L (from E,H→K,L), M (from K→M), N (from L→N)} = all attributes of R. No proper subset works ({E,F}+ lacks H,K,L,M,N; {E,H}+ lacks F,G,I,J; {F,H}+ lacks E,G,K,L,M,N). Therefore the candidate key (and the only key) is {E, F, H}.",
          "explanation": "The key is found by attribute closure using the FDs; only {E,F,H} determines all attributes and is minimal.",
          "oneShotPreview": "Key = {E, F, H}, since {E,F,H}+ covers every attribute and no smaller set does."
        },
        {
          "q": "7 a) Discuss about preserving Decomposition.",
          "a": "A decomposition of R into R1, ..., Rn is dependency-preserving if the set of functional dependencies that can be enforced on the individual relations (the union of the projections of F onto each Ri) is equivalent to F — that is, (F1 ∪ ... ∪ Fn)+ = F+. This means every original FD can be checked on a single decomposed relation without computing a natural join, which makes updates efficient and validates data locally. Dependency preservation is a desirable property alongside lossless join; some BCNF decompositions sacrifice it, whereas a 3NF synthesis guarantees both lossless join and dependency preservation.",
          "explanation": "Dependency preservation lets constraints be checked locally; it is a key quality criterion that can conflict with BCNF but is guaranteed by 3NF synthesis.",
          "oneShotPreview": "Dependency-preserving: all FDs checkable on individual relations without joining; 3NF synthesis guarantees it."
        },
        {
          "q": "7 b) Define Decomposition. Identify the properties of decomposition.",
          "a": "Decomposition is the replacement of a relation R by a collection of relations R1, ..., Rn whose combined attributes cover R, done to remove redundancy and anomalies. The key properties of a good decomposition are: (1) attribute preservation — the union of the attributes of Ri equals the attributes of R; (2) lossless-join — the natural join of the Ri reconstructs exactly the original relation with no spurious tuples; (3) dependency preservation — all functional dependencies of F can be checked on the individual Ri; and (4) each Ri should be in a desirable normal form (e.g., 3NF or BCNF) to minimize redundancy.",
          "explanation": "These are the standard criteria used to judge any decomposition before it is accepted as a valid schema refinement.",
          "oneShotPreview": "Decomposition = split R into Ri with attribute preservation, lossless join, dependency preservation, good NF."
        },
        {
          "q": "8 a) Illustrate the types of anomalies with example.",
          "a": "In a redundant relation such as EMP_DEPT(emp_id, emp_name, dept_id, dept_name, dept_loc), three anomalies occur: (1) Insertion anomaly — a new department with no employees cannot be recorded without a dummy employee. (2) Update/modification anomaly — changing a department's location requires updating every employee row of that department, and missing one leaves the data inconsistent. (3) Deletion anomaly — deleting the last employee of a department also loses the department's details. Normalization removes these by separating EMPLOYEE and DEPARTMENT.",
          "explanation": "These three anomaly types are the classic motivation for normalization, illustrated with redundant department data.",
          "oneShotPreview": "Anomalies: insertion (can't add dept), update (many rows), deletion (lose dept data) — fixed by decomposition."
        },
        {
          "q": "8 b) What is Normalization? Describe the importance of normalization.",
          "a": "Normalization is the process of structuring a relational database into tables and normal forms according to functional dependencies and keys so that data redundancy is minimized. Its importance lies in eliminating insertion, update, and deletion anomalies, guaranteeing data consistency and integrity, reducing storage, and making queries and maintenance simpler. It provides a systematic, theoretically grounded method (via 1NF through BCNF and beyond) for evaluating and improving a schema design.",
          "explanation": "Normalization's importance is defined by anomaly removal, integrity, and a principled design process.",
          "oneShotPreview": "Normalization organizes tables into normal forms to cut redundancy, remove anomalies, and ensure integrity."
        },
        {
          "q": "9 Explain in detail about 1NF, 2NF, 3NF and BCNF with example.",
          "a": "1NF: all attribute values are atomic with no repeating groups or multivalued attributes. 2NF: the relation is in 1NF and every non-prime attribute is fully functionally dependent on the whole candidate key, so there are no partial dependencies. 3NF: the relation is in 2NF and has no transitive dependency of non-prime attributes on the key; formally for every nontrivial X → Y, X is a superkey or Y is prime. BCNF: stronger than 3NF, for every nontrivial X → Y, X is a superkey, eliminating anomalies even when the determined attribute is prime. Example: R(roll, course, grade, instructor, instructor_dept) with roll,course → grade and course → instructor and instructor → instructor_dept; decomposing stepwise removes partial and transitive dependencies until each relation satisfies BCNF.",
          "explanation": "Each normal form adds a stricter condition over the previous one, targeting a specific dependency type (atomicity, partial, transitive, then all determinants as superkeys).",
          "oneShotPreview": "1NF atomic; 2NF no partial dep; 3NF no transitive dep; BCNF every determinant is a superkey."
        },
        {
          "q": "10 a) What is the use of Fourth normal form? Explain by listing some of its major advantages.",
          "a": "Fourth Normal Form (4NF) is used to eliminate redundancy caused by multivalued dependencies (MVDs). A relation is in 4NF if for every nontrivial MVD X →→ Y, X is a superkey. It is applied when two or more independent multivalued facts about the same entity are mixed in one table. Major advantages: it removes redundancy due to MVDs, avoids the update anomalies that BCNF alone cannot fix in such cases, preserves more semantic meaning than blindly applying BCNF, and produces cleaner, independently maintainable relations.",
          "explanation": "4NF extends normalization to multivalued dependencies, removing redundancy that remains even in BCNF.",
          "oneShotPreview": "4NF removes redundancy from multivalued dependencies (X→→Y ⇒ X superkey), fixing anomalies BCNF can't."
        },
        {
          "q": "10 b) Differentiate between about 4NF/MVD with example.",
          "a": "An MVD (multivalued dependency) is a constraint of the form X →→ Y: for a given X there is a set of Y values independent of the remaining attributes Z. 4NF is the normal form built on MVDs: a relation is in 4NF if every nontrivial MVD has a superkey as its determinant. Thus the MVD is the dependency type, while 4NF is the rule that removes the redundancy it causes. Example: in COURSE(course, teacher, book), a course has several teachers and several books independently, giving course →→ teacher and course →→ book; decomposing into (course, teacher) and (course, book) yields 4NF.",
          "explanation": "The distinction is between a dependency (MVD) and the normal form (4NF) that enforces it, illustrated with a course-teacher-book example.",
          "oneShotPreview": "MVD X→→Y (independent multi-values); 4NF requires X be a superkey — e.g. split (course,teacher),(course,book)."
        },
        {
          "q": "11 a) What is the use of Fifth normal form? Explain by listing some of its major advantages.",
          "a": "Fifth Normal Form (5NF), also called Project-Join Normal Form (PJNF), is used to eliminate redundancy arising from join dependencies that are not implied by candidate keys. A relation is in 5NF if every join dependency it satisfies is a consequence of its candidate keys. It handles complex cyclic constraints involving three or more attributes that 4NF cannot address. Major advantages: it removes all FD-, MVD-, and JD-based redundancy, guarantees that any decomposition into projections is lossless, ensures no update anomalies from join dependencies, and represents the highest practical level of normalization.",
          "explanation": "5NF/PJNF addresses join dependencies beyond FDs and MVDs, completing the normalization hierarchy.",
          "oneShotPreview": "5NF/PJNF removes redundancy from join dependencies not implied by keys — the highest normal form."
        },
        {
          "q": "11 b) Discover about 5NF/PJNF with example.",
          "a": "Fifth Normal Form (5NF), or Project-Join Normal Form (PJNF), requires that a relation be in 4NF and that every join dependency it satisfies be implied by its candidate keys; such a relation cannot be losslessly decomposed further. Example: a relation SUPPLIER_PART_PROJECT(supplier, part, project) with the constraint that whenever (s,p), (p,j) and (s,j) pairs exist, the triple (s,p,j) must exist — a join dependency not implied by any key. If this JD is not implied by the keys, the table is not in 5NF and must be decomposed into the three binary projections to avoid redundancy. In practice, most relations already in 4NF are also in 5NF, so it is needed only in rare cases.",
          "explanation": "5NF/PJNF is defined via join dependencies implied by keys; the supplier-part-project example shows a genuine cyclic JD case.",
          "oneShotPreview": "5NF=PJNF: JDs implied by keys; decompose SUPPLIER-PART-PROJECT into binary projections when a cyclic JD exists."
        }
      ]
    },
    "5": {
      "unitTitle": "Transaction Concept and Indexing",
      "totalQuestions": 21,
      "questions": [
        {
          "q": "1 a) What are the different states of a transaction?",
          "a": "A transaction passes through a sequence of states: active (its read/write operations are executing), partially committed (all operations done but changes not yet written permanently to disk), committed (successfully completed and changes made permanent), failed (an error/abort occurred and normal progress cannot continue), and aborted (the transaction is rolled back and the database is restored to its prior consistent state). From active it may go to failed (then aborted), and from partially committed it goes to committed or failed.",
          "explanation": "These five states form the standard transaction state diagram and show how a transaction progresses from start to commit or abort.",
          "oneShotPreview": "Active -> Partially committed -> Committed; failure path -> Failed -> Aborted."
        },
        {
          "q": "1 b) Name two types of serializability.",
          "a": "The two main types are conflict serializability and view serializability. Conflict serializability tests whether a schedule can be transformed into a serial one by swapping adjacent non-conflicting operations (operations on the same item where at least one is a write). View serializability is a weaker test based on whether the schedule has the same read-from relationships and final writes as some serial schedule. Every conflict-serializable schedule is also view serializable, but not every view-serializable schedule is conflict serializable.",
          "explanation": "These are the two standard equivalence criteria used to decide whether a concurrent schedule preserves consistency.",
          "oneShotPreview": "Conflict serializability and view serializability."
        },
        {
          "q": "1 c) What is the Two-Phase Locking (2PL) protocol?",
          "a": "Two-Phase Locking is a concurrency-control protocol in which a transaction acquires all its locks during a growing phase and releases them during a shrinking phase, never acquiring a new lock after it has released any lock. In the growing phase it may acquire shared or exclusive locks but cannot release locks; in the shrinking phase it may release locks but cannot acquire new ones. This discipline guarantees that the resulting schedule is conflict serializable. A variant, strict 2PL, holds exclusive locks until commit/abort to also ensure recoverability.",
          "explanation": "The rule that no new locks may be acquired after the first release is what guarantees conflict serializability.",
          "oneShotPreview": "Growing (acquire locks) then shrinking (release) phase - no new lock after a release; ensures serializability."
        },
        {
          "q": "1 d) What is the purpose of a recovery algorithm?",
          "a": "A recovery algorithm restores the database to a consistent, correct state after a failure such as a transaction abort, system crash, or disk (media) failure. It uses the log to undo the effects of incomplete or aborted transactions (UNDO) and to redo the effects of committed transactions whose changes were not yet written to disk (REDO). Its purpose is to preserve the atomicity and durability properties of transactions, ensuring no partial results remain and no committed work is lost.",
          "explanation": "Recovery maintains the A and D of ACID by undoing uncommitted work and redoing committed work after a crash.",
          "oneShotPreview": "Restore consistency after failure using logs - UNDO incomplete transactions, REDO committed ones."
        },
        {
          "q": "1 e) What is hash-based indexing?",
          "a": "Hash-based indexing (a hash index) is an index structure that maps a search-key value directly to a bucket or disk address using a hash function, so the desired record can be located with ideally one or two disk accesses. It is very efficient for equality searches such as finding all records where dept = CSE, but it is inefficient for range queries because hashing destroys the natural order of the keys. Collisions, where different keys map to the same bucket, are handled using overflow buckets or chaining.",
          "explanation": "Hashing gives near-constant-time lookup for equality conditions but cannot support ordered or range retrieval.",
          "oneShotPreview": "Hash index maps key to bucket via a hash function; fast equality lookups, poor for range queries."
        },
        {
          "q": "2 a) Define a Transaction. Illustrate the properties of transaction.",
          "a": "A transaction is a logical unit of work: a sequence of database read and write operations that must execute as a single, indivisible unit, bounded by BEGIN TRANSACTION and COMMIT or ROLLBACK. Its defining properties are the ACID properties - Atomicity (all-or-nothing), Consistency (preserves database integrity constraints), Isolation (concurrent transactions do not interfere with each other), and Durability (committed changes survive failures). For example, transferring money between two accounts is a transaction: the debit and the credit must both happen together, or neither should happen.",
          "explanation": "Defines the unit-of-work concept and its four guarantees, illustrated with the classic banking example.",
          "oneShotPreview": "Transaction = indivisible sequence of DB operations bounded by BEGIN/COMMIT; properties = ACID."
        },
        {
          "q": "2 b) How do you implement Atomicity and Durability?",
          "a": "Atomicity and durability are implemented with a log-based recovery scheme using the write-ahead logging (WAL) protocol. Before a database item is modified, a log record describing the change is written to stable storage, and a transaction is considered committed only after its COMMIT record is safely in the log. If a crash occurs, recovery uses the log to UNDO the changes of uncommitted transactions (ensuring atomicity) and REDO the changes of committed transactions whose updates were not yet flushed to disk (ensuring durability). Shadow paging is an alternative implementation technique.",
          "explanation": "Write-ahead logging plus UNDO/REDO recovery is the standard mechanism guaranteeing all-or-nothing execution and permanence of committed results.",
          "oneShotPreview": "Use write-ahead log + recovery: UNDO incomplete transactions (atomicity), REDO committed ones (durability)."
        },
        {
          "q": "3 Explain the ACID properties of a transaction with suitable examples.",
          "a": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity means a transaction is all-or-nothing: if a funds transfer debits one account but fails before crediting the other, both operations are rolled back. Consistency means a transaction takes the database from one valid state to another while preserving integrity constraints, e.g., the total balance across the two accounts stays the same after a transfer. Isolation means concurrently executing transactions do not see each other's intermediate uncommitted data, so the outcome is as if they ran one at a time. Durability means that once a transaction commits, its changes persist even after a system crash, guaranteed by logging and recovery. Together these four properties ensure reliable transaction processing.",
          "explanation": "These four guarantees are the foundation of transaction correctness, and the banking scenario makes each one concrete.",
          "oneShotPreview": "ACID = Atomicity (all-or-nothing), Consistency (valid state), Isolation (no interference), Durability (committed changes persist)."
        },
        {
          "q": "4 a) Describe the different states of a transaction with a state diagram.",
          "a": "A transaction moves through five states: (1) Active - the initial state while its read/write operations execute; (2) Partially committed - after the final operation, with changes in buffers but not yet on disk; (3) Committed - after a successful COMMIT, when changes are permanent; (4) Failed - when an operation fails or the system detects it cannot continue; (5) Aborted - after ROLLBACK, when changes are undone. The transitions are active -> partially committed -> committed, or active -> failed -> aborted, and a failed transaction may also be restarted. A state diagram draws these as nodes connected by arrows labeled with the triggering event (read/write, commit, abort, etc.).",
          "explanation": "Describes all five states and their transitions - the content of the standard transaction state diagram.",
          "oneShotPreview": "Active -> Partially committed -> Committed; failure path -> Failed -> Aborted (with restart option)."
        },
        {
          "q": "4 b) Illustrate Concurrent execution of transaction with examples",
          "a": "Concurrent execution means multiple transactions run at the same time, interleaving their operations to improve CPU and disk utilization and increase throughput. For example, with two fund-transfer transactions T1 and T2, an interleaving such as T1: read(A), T2: read(B), T1: write(A), T2: write(B) can complete faster than running them strictly one after another. However, uncontrolled interleaving can cause lost updates, dirty reads, or inconsistent results, so concurrency-control mechanisms such as locking and timestamp ordering are used to keep the schedule serializable - equivalent to some serial order. Only serializable interleavings preserve database correctness.",
          "explanation": "Explains why concurrency is used (performance and throughput) and why it must be controlled (anomalies and serializability).",
          "oneShotPreview": "Interleaving transactions boosts throughput but can cause anomalies - use concurrency control to keep schedules serializable."
        },
        {
          "q": "5 Develop the TCL and DCL Commands - Commit, Rollback, Savepoint, Grant and Revoke.",
          "a": "TCL (Transaction Control Language) commands manage the changes made by transactions: COMMIT makes all changes since the last commit permanent; ROLLBACK undoes all changes since the last commit; SAVEPOINT sets a named point within a transaction to which you can roll back partially (ROLLBACK TO savepoint); and SET TRANSACTION sets transaction properties. Example statements are COMMIT; SAVEPOINT sp1; ROLLBACK TO sp1; and ROLLBACK;. DCL (Data Control Language) commands control access rights: GRANT gives privileges to users (e.g., GRANT SELECT, INSERT ON Employee TO user1;) and REVOKE removes them (e.g., REVOKE SELECT ON Employee FROM user1;). Together, TCL manages transaction boundaries while DCL enforces authorization and security.",
          "explanation": "Distinguishes the two SQL sublanguages, naming the requested commands and giving concrete syntax for each.",
          "oneShotPreview": "TCL = COMMIT, ROLLBACK, SAVEPOINT (manage transaction changes); DCL = GRANT, REVOKE (access control)."
        },
        {
          "q": "6 What is serializability? Explain conflict serializability and view serializability with examples.",
          "a": "Serializability is the property that a concurrent schedule produces the same result as some serial (non-interleaved) execution of the same transactions; it is the correctness criterion for concurrency control. A schedule is conflict serializable if it can be transformed into a serial schedule by swapping adjacent non-conflicting operations, where two operations conflict if they access the same data item and at least one is a write (for example, R1(A), W1(A), R2(A), W2(A) can be reduced to the serial order T1 then T2). A schedule is view serializable if it has the same read-from relationships (which transaction's write each read observes) and the same final writes as some serial schedule; blind writes can make a non-conflict-serializable schedule view serializable. Every conflict-serializable schedule is view serializable, but not vice versa.",
          "explanation": "Defines serializability and distinguishes the conflict (operation-ordering) and view (read-from and final-write) tests with examples.",
          "oneShotPreview": "Serializability = equivalent to a serial run; conflict (swap non-conflicting ops) vs view (same read-from and final writes)."
        },
        {
          "q": "7 a) Compare and contrast lock-based, timestamp-based, and optimistic concurrency control protocols.",
          "a": "Lock-based protocols let transactions acquire shared or exclusive locks on data items before accessing them; Two-Phase Locking guarantees serializability but can cause blocking and deadlocks. Timestamp-based protocols assign each transaction a timestamp and order conflicting operations by it, giving priority to older transactions and resolving conflicts by aborting/restarting the younger one; they avoid deadlocks but may cause restarts. Optimistic (validation-based) protocols let transactions run without blocking and validate at commit that no conflicting transaction committed meanwhile, rolling back on failure; they are efficient when conflicts are rare but costly when conflicts are frequent. In short, locking is pessimistic and blocks, timestamp ordering is pessimistic and restarts, and optimistic control defers checking until commit.",
          "explanation": "Compares the three protocols on mechanism, serializability guarantee, and tradeoffs such as deadlocks, blocking, and restarts.",
          "oneShotPreview": "Lock-based = block via locks (deadlocks possible); timestamp = order by time (no deadlock, restarts); optimistic = validate at commit."
        },
        {
          "q": "7 b) Compare serializibility and non-serializibility",
          "a": "A serializable schedule is one whose outcome is equivalent to some serial execution of the transactions, so it preserves database consistency. A non-serializable schedule interleaves operations in a way that cannot be matched to any serial order and can produce incorrect results. For example, a serializable schedule of two balance-update transactions yields the same final balances as running them one at a time, whereas a non-serializable interleaving can cause a lost update in which one transaction's write overwrites the other's. Serializable schedules are accepted by concurrency control, while non-serializable ones must be prevented, detected, and resolved, for example by aborting a transaction. Thus serializability is the correctness standard and non-serializability is an anomaly to be avoided.",
          "explanation": "Contrasts the two on consistency and uses a lost-update example to show why non-serializable schedules are unsafe.",
          "oneShotPreview": "Serializable = equivalent to a serial run (correct); non-serializable = no serial equivalent (e.g., lost update), must be prevented."
        },
        {
          "q": "8 a) What is Schedule? Explain the serial schedule with examples.",
          "a": "A schedule is an ordering of the read and write operations of a set of transactions that preserves the order of operations within each individual transaction. A serial schedule is one in which transactions execute one at a time with no interleaving - all operations of T1 complete before T2 begins. For example, R1(A), W1(A), R1(B), W1(B), R2(A), W2(A) is a serial schedule because T1 runs completely before T2. Serial schedules are always correct (consistent) and serve as the benchmark against which concurrent schedules are judged for serializability, but they allow no concurrency and therefore give poor resource utilization.",
          "explanation": "Defines a schedule and the serial schedule with an example, noting correctness versus low concurrency.",
          "oneShotPreview": "Schedule = ordered read/write operations; serial schedule = no interleaving, T1 fully then T2 - always correct but low throughput."
        },
        {
          "q": "8 b) What is a deadlock? Explain deadlock detection, prevention, and recovery in DBMS.",
          "a": "A deadlock is a condition in which two or more transactions are blocked forever, each waiting for a lock held by another transaction in the cycle - for example, T1 holds a lock on A and waits for B while T2 holds B and waits for A. Deadlock prevention avoids cycles by requiring transactions to lock all items at once or by using ordering/timestamp rules (wait-die, wound-wait), so a deadlock never occurs. Deadlock detection allows deadlocks to happen but periodically builds a wait-for graph and checks for cycles, choosing a victim when one is found. Deadlock recovery breaks the cycle by aborting and rolling back one or more victim transactions, typically the youngest or the one with the least work, releasing its locks so the others can proceed.",
          "explanation": "Defines deadlock and covers all three strategies: prevent (no cycles), detect (wait-for graph), and recover (abort a victim).",
          "oneShotPreview": "Deadlock = circular wait for locks; handle by prevention (ordering), detection (wait-for graph), recovery (abort victim)."
        },
        {
          "q": "9 a) Explain recoverability in transaction schedules. Differentiate between Recoverable, cascade less, and strict schedules.",
          "a": "Recoverability refers to whether a schedule lets the database be restored to a consistent state after a transaction fails, without having to undo committed transactions. A recoverable schedule requires that if Tj reads a value written by Ti, then Ti must commit before Tj commits; otherwise a committed Tj could depend on an uncommitted Ti that later aborts. A cascadeless (no cascading abort) schedule is stricter: a transaction may read a value only after the writing transaction has committed, so a failing transaction never forces others to roll back. A strict schedule is stricter still: no transaction may read or write a data item until the transaction that last wrote it has committed or aborted, simplifying recovery. The containment hierarchy is strict subset of cascadeless subset of recoverable: every strict schedule is cascadeless and every cascadeless schedule is recoverable, but not conversely.",
          "explanation": "Defines recoverability and distinguishes the three schedule classes by how they constrain reading uncommitted data, noting their containment relationship.",
          "oneShotPreview": "Recoverable (writer commits before reader) - Cascadeless (read only committed data) - Strict (no access until writer ends)."
        },
        {
          "q": "9 b) Describe the different types of failures in database systems.",
          "a": "Database failures are classified as: (1) Transaction or logical failures - a transaction aborts due to an error such as bad input, arithmetic overflow, or an integrity violation, requiring only that transaction to be rolled back; (2) System or crash failures - a power loss or OS/DBMS crash that loses main-memory contents but leaves disk intact, requiring recovery of all in-flight transactions from the log; (3) Media or storage failures - a disk crash that destroys stored data, requiring restoration from backups and archived logs; and (4) Catastrophic failures - physical destruction of the facility, handled by remote backups and disaster recovery. Each type is handled by progressively stronger recovery techniques, with logging, checkpointing, and backups as the main tools.",
          "explanation": "Lists the standard failure categories with their causes and the corresponding recovery scope.",
          "oneShotPreview": "Failures: transaction-level (rollback), system crash (log recovery), media/disk (restore from backup), catastrophic (disaster recovery)."
        },
        {
          "q": "10 What is a B+ Tree? Explain its structure and operations (search, insert, delete) With diagrams.",
          "a": "A B+ tree is a balanced, multiway tree index in which all data records (or record pointers) are stored only in the leaf nodes, while internal nodes hold only search-key values and child pointers used for routing. The leaf nodes are linked together in a sorted chain, which makes range queries efficient, and every root-to-leaf path has the same length so the tree stays balanced. Search starts at the root, follows key ranges down to the correct leaf, then scans the leaf chain for the desired key(s). Insertion locates the target leaf and adds the key; if the leaf overflows it splits into two and the middle key is promoted to the parent, possibly cascading up to split the root and grow the tree. Deletion removes the key from the leaf; if the leaf underflows it borrows a key from a sibling or merges with a sibling, with parent adjustments propagating upward. A typical diagram shows a root, internal levels of separator keys, and a bottom level of linked leaves holding the actual data pointers.",
          "explanation": "Covers the defining structure (internal routing nodes, linked sorted leaves, balance) and all three operations with split/merge details, describing the diagrams in words.",
          "oneShotPreview": "B+ tree = balanced multiway tree, data in linked leaves; search descend, insert splits, delete borrows/merges; great for range queries."
        },
        {
          "q": "11 a) Compare B+ Tree indexing and hash-based indexing. What are the advantages and disadvantages of each?",
          "a": "B+ tree indexing stores keys in a sorted, balanced tree with linked leaves, so it supports both equality and range queries (e.g., salary BETWEEN 1000 AND 2000) and ordered retrieval; its disadvantages are more disk accesses proportional to tree height and update overhead from node splits and merges. Hash-based indexing maps keys directly to buckets via a hash function, giving very fast equality lookups (often one or two disk I/Os) and simple insertion and deletion, but it cannot efficiently answer range queries or ordered scans because keys are not stored in order, and performance degrades with many collisions and overflow buckets. In short, choose a B+ tree when range or ordered access matters, and a hash index when equality lookups dominate.",
          "explanation": "Compares the two on query support, speed, update overhead, and collision behavior, with a clear rule of thumb.",
          "oneShotPreview": "B+ tree = sorted, supports range queries, O(log n); hash = O(1) equality only, no ranges; pick by query type."
        },
        {
          "q": "11 b) Discuss the importance of indexing in database systems.",
          "a": "Indexing is important because it dramatically speeds up data retrieval: instead of scanning every row of a table (a full table scan), the DBMS uses an index to locate matching rows quickly, reducing disk I/O from O(n) to roughly O(log n) or better. Indexes accelerate SELECT queries, WHERE-clause filtering, JOIN operations, ORDER BY sorting, and grouping/aggregate operations, and unique indexes enforce uniqueness constraints. They are especially valuable on large tables and for primary-key and foreign-key lookups. The tradeoff is that indexes consume extra storage and slow down INSERT, UPDATE, and DELETE because the index must be maintained. Good indexing therefore balances faster reads against slower writes and extra space.",
          "explanation": "Explains how indexes improve performance and what they cost, giving a complete picture of their importance.",
          "oneShotPreview": "Indexes cut query time (no full scan) and speed joins/sorting/uniqueness, at the cost of extra storage and slower writes."
        }
      ]
    }
  },
  "23HS0815": {
    "1": {
      "unitTitle": "Introduction to Design Thinking",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) What is Design Thinking?",
          "a": "Design thinking is a human-centred, iterative problem-solving approach that uses empathy, creativity and experimentation to understand users' needs and develop innovative solutions. It was popularised by IDEO and the Stanford d.school and is commonly described as a five-stage process: empathize, define, ideate, prototype and test. Rather than relying only on logic or past experience, it combines analytical and imaginative thinking to reframe problems and generate user-focused ideas. It is widely applied in product design, services, business and social innovation.",
          "explanation": "It gives the standard definition, emphasising human-centredness, iteration and the five-stage framework while distinguishing design thinking from purely analytical methods.",
          "oneShotPreview": "A human-centred, iterative approach that uses empathy and experimentation to create innovative, user-focused solutions."
        },
        {
          "q": "1 b) Name the five stages of the Design Thinking process.",
          "a": "The five stages of the design thinking process are: (1) Empathize — understand users and their needs through observation and interviews; (2) Define — clearly state the user's problem and needs; (3) Ideate — generate a wide range of ideas; (4) Prototype — build inexpensive, tangible representations of the best ideas; and (5) Test — try the prototypes with real users and gather feedback. These stages are iterative and non-linear, so teams often move back and forth between them rather than following a rigid sequence.",
          "explanation": "It names and briefly describes the five canonical d.school/IDEO stages, which is exactly what a \"name the stages\" question requires.",
          "oneShotPreview": "Empathize → Define → Ideate → Prototype → Test."
        },
        {
          "q": "1 c) How is Design Thinking different from traditional problem-solving?",
          "a": "Traditional problem-solving is typically linear, analytical and solution-focused, relying on past experience, established procedures and logical deduction to reach a single \"correct\" answer quickly. Design thinking is iterative, human-centred and exploratory: it begins by empathising with users, reframes the problem before solving it, generates many alternative ideas, and tests prototypes with real people. It tolerates ambiguity and failure as part of learning, whereas traditional approaches try to eliminate uncertainty and optimise an existing solution. Design thinking therefore produces more innovative, user-validated outcomes, while traditional methods remain efficient for well-defined, routine problems.",
          "explanation": "It contrasts the linear, logic-driven nature of traditional methods with the iterative, empathetic and experimentation-driven nature of design thinking.",
          "oneShotPreview": "Traditional = linear, analytical, one answer; design thinking = iterative, empathetic, many ideas tested with users."
        },
        {
          "q": "1 d) Who popularized the concept of Design Thinking?",
          "a": "Design thinking was popularised as a formal framework by the design consultancy IDEO and by the Stanford University School of Design (the d.school). David Kelley, founder of both IDEO and the d.school, is widely credited with bringing the approach into mainstream business and education, while IDEO's CEO Tim Brown popularised it through his book \"Change by Design\" (2009). Its earlier intellectual roots lie in Herbert Simon's \"The Sciences of the Artificial\" (1969) and in the practice of designers such as Bill Moggridge. Together, IDEO and the Stanford d.school developed and spread the five-stage model used worldwide today.",
          "explanation": "It credits IDEO and Stanford d.school (with David Kelley and Tim Brown) as asked, while acknowledging the approach's earlier roots.",
          "oneShotPreview": "IDEO and Stanford's d.school — especially David Kelley and Tim Brown — made design thinking a mainstream framework."
        },
        {
          "q": "1 e) How does Design Thinking help in product development?",
          "a": "Design thinking helps product development by keeping the user at the centre of every decision, so the final product solves a real, validated need. Empathy and definition uncover genuine user problems; ideation generates a broad set of possible solutions; and prototypes are tested early with real users, reducing the risk of building something nobody wants. This iterative loop catches usability issues early, lowers development cost and encourages creative, differentiated features. It also aligns cross-functional teams around a shared understanding of the customer, speeding decisions and improving the chances of market success.",
          "explanation": "It links each design-thinking stage to concrete product-development benefits — validated needs, early testing, lower risk and better team alignment.",
          "oneShotPreview": "It grounds products in real user needs and tests ideas early, cutting risk and producing more usable, innovative products."
        },
        {
          "q": "2 a) Explain the primary focus of traditional thinking.",
          "a": "Traditional thinking focuses primarily on logic, analysis and past experience to reach a correct, efficient solution to a well-defined problem. It follows a linear, step-by-step process and relies on established rules, data and proven methods in order to minimise risk and uncertainty. In business and product contexts it concentrates on optimising existing solutions, improving efficiency, cutting cost and applying known best practices rather than exploring radically new directions. It values consistency, predictability and accuracy, and treats deviation or failure as something to be avoided.",
          "explanation": "It captures the defining features of traditional thinking — logic, linearity, reliance on the past, efficiency and risk avoidance.",
          "oneShotPreview": "Logic, experience and linear analysis aimed at an efficient, low-risk, \"correct\" answer."
        },
        {
          "q": "2 b) How does it differ from the focus of design thinking?",
          "a": "While traditional thinking concentrates on analysing and optimising a known problem with proven methods, design thinking focuses on understanding people and exploring new possibilities before deciding on a solution. Design thinking is empathetic (it starts from users' feelings and needs), iterative (it cycles through prototyping and testing) and divergent (it generates many ideas before converging), whereas traditional thinking is largely convergent and solution-driven from the start. Design thinking embraces ambiguity, experimentation and even failure as learning opportunities, and seeks desirability together with feasibility and viability. In short, traditional thinking prioritises efficiency and optimisation, while design thinking prioritises innovation and user value.",
          "explanation": "It contrasts the two mindsets on the key dimensions of user focus, divergence versus convergence, iteration and attitude to failure.",
          "oneShotPreview": "Traditional optimises the known; design thinking explores user needs and experiments to create something new."
        },
        {
          "q": "3 Explain the fundamental components of design and their role in visual composition.",
          "a": "The fundamental components (elements) of design are line, shape, form, colour, texture, space and typography. A line directs the eye and defines edges; shape and form give objects structure and mass; colour sets mood, creates contrast and groups information; texture adds visual and tactile interest; space (positive and negative) provides balance and breathing room; and typography communicates content and hierarchy. In visual composition these elements are organised using the principles of design — balance, contrast, emphasis, rhythm or movement, proportion, repetition and unity — to guide the viewer's attention, communicate meaning clearly and create an aesthetically pleasing, coherent whole.",
          "explanation": "It lists the core elements, explains the role of each and connects them to the principles that govern visual composition, as the question asks.",
          "oneShotPreview": "Line, shape, form, colour, texture, space and type are arranged by design principles into clear, balanced compositions."
        },
        {
          "q": "4 Demonstrate the principles of design such as balance, contrast, emphasis, and movement, with examples",
          "a": "Balance is the even distribution of visual weight — symmetrical, as in a centred logo, or asymmetrical, as in a large photograph offset by a block of smaller text. Contrast creates visual difference to highlight elements, for example black text on a white background or a bright call-to-action button on a muted page. Emphasis establishes a focal point that draws the eye first, such as a bold heading, a highlighted price or a red \"Buy Now\" button. Movement (rhythm) leads the viewer's eye through a composition, for example through a repeating pattern, a diagonal line or the ordered steps of an infographic. Together these principles make a design stable, readable, engaging and purposeful.",
          "explanation": "It demonstrates each named principle with a concrete example and explains its visual purpose, which is exactly what this question requires.",
          "oneShotPreview": "Balance = even weight; contrast = difference; emphasis = focal point; movement = eye flow — each with an example."
        },
        {
          "q": "5 a) Illustrate the design thinking process and its application in solving complex problems.",
          "a": "The design thinking process runs through Empathize, Define, Ideate, Prototype and Test, and is iterative rather than strictly linear. To solve a complex (\"wicked\") problem, a team first empathises with the people affected through interviews and observation, then defines the real underlying need instead of the obvious symptom. It ideates broadly to generate many possible solutions, builds low-cost prototypes of the most promising ones, and tests them with real users, using feedback to refine both the solution and the problem definition before repeating the cycle. This approach is applied to complex problems such as reducing hospital waiting times, improving banking access for rural users or redesigning emergency-response services, where human needs are unclear and no single right answer exists. The result is a user-validated solution that addresses the root cause rather than just the symptoms.",
          "explanation": "It illustrates the five stages and shows how their iterative application turns an ill-defined problem into testable, human-centred solutions.",
          "oneShotPreview": "Empathize → Define → Ideate → Prototype → Test, repeated iteratively to turn messy problems into user-tested solutions."
        },
        {
          "q": "5 b) Develop a case study of a successful design thinking project.",
          "a": "A well-documented case study is IDEO's Embrace infant warmer, designed for premature babies in rural India where hospitals lacked expensive incubators. The team empathised with nurses and mothers in villages, defined the core need as keeping a newborn warm continuously even during power cuts, and ideated many concepts before prototyping a low-cost, portable sleeping bag with a phase-change gel pouch that is reheated in hot water. They tested prototypes with caregivers and refined the design for local manufacture and use. The device costs a fraction of an incubator and has helped thousands of infants, showing how empathy, ideation and iterative prototyping can produce a genuinely useful, scalable solution.",
          "explanation": "It presents a real, widely taught case study that walks through the design-thinking stages, the outcome and the lesson learned, as \"develop a case study\" demands.",
          "oneShotPreview": "IDEO's Embrace warmer: observe caregivers → redefine the need → prototype → test, yielding an affordable life-saving product."
        },
        {
          "q": "6 a) Explain the importance of empathy in design thinking.",
          "a": "Empathy is the foundation of design thinking because it lets designers understand the real needs, emotions and context of the people they are designing for instead of relying on assumptions. By observing, listening and engaging with users, designers uncover latent needs that users may not be able to articulate, leading to more relevant and effective solutions. Empathy builds trust with stakeholders and encourages teams to reframe problems from the user's point of view, reducing the risk of building products that fail in the real world. It shifts the question from \"what can we build?\" to \"what do people actually need?\", producing solutions that are desirable as well as feasible and viable.",
          "explanation": "It explains empathy's role as the first stage, its methods (observation and listening) and its benefits — uncovering real needs and reducing failure risk.",
          "oneShotPreview": "Empathy grounds solutions in real user needs and emotions instead of assumptions, so designs are relevant and effective."
        },
        {
          "q": "6 b) In what ways can designers utilize empathy to develop effective user-centered solutions?",
          "a": "Designers can practise empathy through in-depth interviews, contextual observation (shadowing users in their own environment), ethnographic research, surveys, empathy maps and personas. They should listen without judgement, note both what users say and what they actually do, and pay attention to emotions, pain points and workarounds. These insights are then synthesised into explicit user needs and translated into design criteria that guide ideation and evaluation. Designers can also involve users directly in co-creation and prototype testing, iterating on the feedback they receive. Keeping empathy active throughout the process — not only at the start — ensures the solution remains genuinely user-centred and desirable.",
          "explanation": "It names practical empathy tools and explains how the resulting insights become user-centred design decisions and iterative tests.",
          "oneShotPreview": "Use interviews, observation, personas and empathy maps; turn insights into needs; co-create and test with users throughout."
        },
        {
          "q": "7 Explain the role of prototyping in design thinking. How can prototyping help designers refine their ideas and create innovative solutions?",
          "a": "Prototyping is the stage in which designers build quick, inexpensive, tangible versions of their ideas — from paper sketches and wireframes to clickable mock-ups or crude physical models. Its role is to make ideas testable: a prototype lets teams \"fail early and often\", expose flaws and gather concrete user feedback before investing in a full solution. Because prototypes are low-cost, designers can explore multiple alternatives, take creative risks and combine ideas in new ways, which fosters innovation. Testing reveals whether a concept is desirable, feasible and viable, and the feedback loop drives successive refinement until the solution truly meets user needs. In short, prototyping converts abstract ideas into evidence, reducing uncertainty and improving the final design.",
          "explanation": "It describes what prototyping is, its role in testing and learning, and how low cost plus iteration encourages risk-taking and better, more innovative outcomes.",
          "oneShotPreview": "Cheap, rapid prototypes make ideas testable, expose flaws early, and let feedback drive refinement and innovation."
        },
        {
          "q": "8 What is Design Thinking, and how does it influence to problem-solving and innovation?",
          "a": "Design thinking is a human-centred, iterative approach to problem-solving that combines empathy, creative ideation, prototyping and testing (the five stages: empathize, define, ideate, prototype, test). It influences problem-solving by reframing problems from the user's perspective, exploring multiple possible solutions before converging, and validating ideas with real people instead of relying on assumptions. This reduces the risk of solving the wrong problem and yields solutions that are desirable, feasible and viable. It drives innovation by encouraging divergent thinking, experimentation, cross-functional collaboration and a tolerance for failure, enabling breakthrough products, services and business models. Organisations from Apple and IDEO to hospitals and governments use it to tackle complex, ambiguous challenges.",
          "explanation": "It defines design thinking and then addresses both parts of the question — its effect on problem-solving (reframing, validation) and on innovation (divergence, experimentation).",
          "oneShotPreview": "A human-centred, iterative method that reframes problems and validates ideas, driving creative, user-validated innovation."
        },
        {
          "q": "9 Interpret IDEO and Stanford d.school played a crucial role in developing the Design Thinking framework.",
          "a": "IDEO, the global design consultancy, and the Stanford University School of Design (the d.school), founded in 2005, were instrumental in formalising and spreading design thinking as a structured five-stage framework — Empathize, Define, Ideate, Prototype and Test. David Kelley, who founded both IDEO and the d.school, championed the idea that design methods could be applied to any problem, not just physical products. IDEO's projects, such as the Embrace infant warmer and the redesign of everyday products, demonstrated the approach in practice, while the d.school taught it to students and business leaders worldwide through programmes such as the Design Thinking Bootcamp. Tim Brown's book \"Change by Design\" further popularised it. Together they turned an informal designer's practice into a mainstream framework for innovation used in business, education and social change.",
          "explanation": "It explains the specific contributions of IDEO and the d.school — the five-stage model, teaching, real projects and publications — which is what \"interpret their crucial role\" requires.",
          "oneShotPreview": "IDEO and Stanford's d.school formalised and taught the five-stage empathy-to-test framework, making design thinking a global method."
        },
        {
          "q": "10 Explain the impact of new materials in industrial design and their role in shaping sustainable practices.",
          "a": "New materials — such as bioplastics, recycled composites, graphene, nanomaterials and smart or self-healing materials — expand what industrial designers can achieve: lighter, stronger, more durable and more functional products with reduced environmental impact. They enable miniaturisation, energy efficiency, longer product life and easier recycling, supporting sustainable design by cutting resource use, waste and carbon footprints. For example, biodegradable packaging reduces landfill waste, recycled aluminium lowers energy consumption, and smart materials that change shape or colour can replace several separate components. Designers must still weigh the full life-cycle impact, including sourcing, manufacturability, cost and end-of-life disposal, to avoid superficial \"green\" claims. Overall, new materials are a key enabler of eco-design and circular-economy products.",
          "explanation": "It covers both parts — the design possibilities created by new materials and their contribution to sustainability — while noting responsible life-cycle assessment.",
          "oneShotPreview": "New materials enable lighter, longer-lasting, recyclable products, driving eco-design and sustainable, circular manufacturing."
        },
        {
          "q": "11 Illustrate the properties and applications of graphene, nanomaterials, and smart materials. How are these materials transforming various industries?",
          "a": "Graphene is a single layer of carbon atoms with exceptional strength (about 200 times that of steel), high electrical and thermal conductivity, transparency and flexibility; it is used in electronics, batteries, sensors, composites and coatings. Nanomaterials, engineered at the nanoscale (for example nanoparticles, nanotubes and nanofibres), show unique optical, electrical, magnetic and mechanical properties because of their high surface-area-to-volume ratio; they are applied in medicine (drug delivery, imaging), electronics, catalysts, textiles and water purification. Smart materials respond to stimuli such as heat, light, pressure, electricity or magnetic fields — examples include shape-memory alloys, piezoelectric materials, thermochromic materials and self-healing polymers — and are used in actuators, sensors, medical devices and adaptive structures. Together these materials are transforming industries by enabling smaller, faster, lighter and more efficient products: quicker-charging batteries and flexible electronics, targeted drug delivery and better diagnostics, stronger lightweight aircraft and vehicles, and responsive, self-monitoring infrastructure. They also support sustainability through energy-efficient, longer-lasting designs.",
          "explanation": "It gives the defining property and representative applications of each material class, then explains the cross-industry transformation asked for.",
          "oneShotPreview": "Graphene = super-strong conductive sheets; nanomaterials = tuned nanoscale properties; smart materials = stimuli-responsive — enabling lighter, faster, smarter products."
        }
      ]
    },
    "2": {
      "unitTitle": "Design Thinking Process",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) What are the five stages of the Design Thinking process?",
          "a": "The five stages are Empathize, Define, Ideate, Prototype and Test. In Empathize the team understands users through observation and interviews; in Define it frames a clear problem statement; in Ideate it generates many possible solutions; in Prototype it builds quick tangible versions of the best ideas; and in Test it checks those versions with real users. The stages form an iterative, non-linear loop rather than a rigid one-way sequence, as popularised by the Stanford d.school and IDEO.",
          "explanation": "This is the standard five-stage d.school/IDEO design-thinking model, and naming the stages in order is exactly what a 2-mark recall question asks.",
          "oneShotPreview": "Empathize → Define → Ideate → Prototype → Test."
        },
        {
          "q": "1 b) Define the Empathize stage in Design Thinking.",
          "a": "Empathize is the first stage of design thinking, in which designers set aside their own assumptions and try to understand users deeply by observing, listening to and interacting with them in their real context. Common methods are interviews, field observation, immersion and empathy maps. The aim is to discover users' needs, emotions, behaviours and pain points so that the solution is built around real people rather than guessed requirements.",
          "explanation": "It identifies Empathize as the user-research stage and names its methods and goal, which is the required definition.",
          "oneShotPreview": "Deeply understand users' needs and feelings through observation and interviews."
        },
        {
          "q": "1 c) Why Define stage is important in problem-solving?",
          "a": "The Define stage converts the broad findings of the Empathize stage into a clear, specific and actionable problem statement, often expressed as a point of view or a 'How might we...?' question. It is important because it prevents the team from solving the wrong problem or merely treating symptoms, and focuses attention on the underlying user need. A well-defined problem also gives direction and evaluation criteria for judging ideas later in the process.",
          "explanation": "It explains the reframing role of Define and why a precise problem statement improves the quality of subsequent solutions.",
          "oneShotPreview": "Turns research into a clear problem statement so teams solve the right problem."
        },
        {
          "q": "1 d) What is the purpose of the Ideate phase?",
          "a": "The purpose of the Ideate phase is to generate a wide and diverse range of possible solutions to the defined problem before judging any of them. Techniques such as brainstorming, mind mapping, 'How might we' prompts and SCAMPER encourage quantity, creativity and even wild ideas that can be combined or improved. Once the options are on the table, the team clusters and selects the most promising ones for prototyping.",
          "explanation": "It captures the core rule of ideation — defer judgement while expanding the solution space — and its link to prototyping.",
          "oneShotPreview": "Generate many creative solutions before choosing which ones to prototype."
        },
        {
          "q": "1 e) How does prototyping help in refining an idea?",
          "a": "Prototyping turns an abstract idea into a quick, low-cost tangible artefact such as a sketch, paper mock-up, cardboard model or clickable wireframe that can actually be seen and tried. This exposes weaknesses and wrong assumptions early, while changes are still cheap, and invites concrete feedback from users and teammates. Each revised prototype refines the concept, so the final product is less likely to fail because of an unnoticed flaw.",
          "explanation": "It explains the value of low-fidelity, early testing and iteration, which is precisely how a prototype refines an idea.",
          "oneShotPreview": "Cheap tangible models expose flaws early and let ideas improve through feedback."
        },
        {
          "q": "2 a) List and Construct Five stages of Design Thinking process.",
          "a": "The five stages are: (1) Empathize — observe and interview users to understand their needs and emotions; (2) Define — synthesise the findings into a clear, focused problem statement; (3) Ideate — brainstorm a broad set of possible solutions; (4) Prototype — build inexpensive, tangible versions of the best ideas; and (5) Test — give the prototypes to real users and collect feedback. Constructed in this order, the stages form an iterative loop: what is learned in testing can send the team back to redefine the problem, generate new ideas or build another prototype. This human-centred structure keeps decisions grounded in evidence rather than assumptions.",
          "explanation": "It both lists all five stages and briefly constructs/describes each one, including the iterative relationship between them, as the question demands.",
          "oneShotPreview": "Empathize, Define, Ideate, Prototype, Test — a repeating, user-centred loop."
        },
        {
          "q": "2 b) Explain five stages of Design Thinking process with suitable examples.",
          "a": "In a project to improve hospital registration, the Empathize stage has the team interview patients and staff and observe the waiting area to find where frustration occurs. In Define they state the problem as 'How might we reduce the perceived waiting time and anxiety of patients at the counter?' In Ideate they brainstorm mobile tokens, self-check-in kiosks and a better queue display. In Prototype they make a paper mock-up of the kiosk screen and a simple clickable app flow. In Test they watch a few patients use the prototype, learn that large readable fonts matter most, and revise the design before building the real system. Since findings from testing can loop back to any earlier stage, the final solution stays grounded in actual user needs.",
          "explanation": "It explains every stage and carries one consistent example through all five, which is what a 5-mark 'explain with examples' answer requires.",
          "oneShotPreview": "Each of the five stages shown through a hospital queue redesign example."
        },
        {
          "q": "3 Why is the Empathize stage crucial in Design Thinking, and how does it impact the final solution?",
          "a": "Empathize is crucial because it grounds the entire process in the real needs, emotions and context of the people the solution is for, instead of the design team's assumptions. By observing and interviewing users, designers uncover latent needs and pain points that users may not even be able to state directly. This insight produces a meaningful problem definition and ideas that genuinely resonate with the users. Consequently the final solution is more usable, relevant and readily accepted because it has been shaped around real behaviour; skipping empathy often leads to technically sound products that nobody wants.",
          "explanation": "It links empathy directly to problem framing and to the fit and acceptance of the end product, answering both parts of the question.",
          "oneShotPreview": "It replaces assumptions with real user insight, so the final solution actually fits users."
        },
        {
          "q": "4 Discuss the role of prototyping and testing in refining an idea during the Design Thinking process.",
          "a": "Prototyping converts ideas into quick, low-fidelity tangible artefacts — sketches, paper mock-ups, cardboard models or clickable screens — so that abstract concepts can be examined and tried. Testing puts these prototypes in front of real users to observe behaviour, gather feedback and reveal usability problems early, when mistakes are still cheap to fix. Together they create a rapid build–test–learn cycle in which each round of feedback produces an improved prototype, progressively reducing risk and uncertainty. They also let teams compare alternatives and give stakeholders something concrete to discuss. Insights from testing may even send the team back to redefine the problem or brainstorm again, which is why design thinking is iterative rather than strictly linear.",
          "explanation": "It covers the distinct roles of both activities and their combined iterative effect on refining an idea, matching the 10-mark discussion question.",
          "oneShotPreview": "Build cheap prototypes, test with users, learn, and iterate until the idea works."
        },
        {
          "q": "5 a) List and explain the Design Thinking drive new inventions?",
          "a": "Design thinking drives invention through its five stages: Empathize reveals unmet human needs that become invention opportunities; Define sharpens them into a clear challenge; Ideate generates a large pool of novel concepts; Prototype turns the promising ones into tangible, testable forms; and Test validates and improves them with real users. Its habits of experimentation, willingness to fail fast and cross-disciplinary collaboration help unexpected combinations of ideas emerge. Because every concept is checked against user feedback, the resulting invention is both creative and practical. This approach has contributed to user-friendly medical devices, assistive products and app-based services built around real behaviours.",
          "explanation": "It explains stage by stage how the method and its mindset generate and validate inventions, rather than merely listing the stages.",
          "oneShotPreview": "Needs → ideas → prototypes → feedback turns creativity into usable inventions."
        },
        {
          "q": "5 b) Choose some examples of innovative products developed using this approach.",
          "a": "Examples include Airbnb, whose founders redesigned their listings after observing that poor photos and trust concerns were hurting bookings, and Apple's iPod and iPhone, whose interfaces were shaped by studying how people actually use music and communication devices. IDEO's OXO Good Grips kitchen tools were created after watching people with arthritis struggle with ordinary handles. In healthcare, the Embrace infant warmer was designed after observing the lack of affordable, electricity-free incubators in rural Nepal. User-centred banking apps and airport or hospital self-check-in kiosks are further examples. All of them share the same pattern of deep user observation followed by iterative prototyping and testing.",
          "explanation": "It supplies several concrete, well-known products and identifies the common design-thinking pattern behind them.",
          "oneShotPreview": "Airbnb, Apple devices, Embrace warmer, OXO Good Grips — all user-driven."
        },
        {
          "q": "6 Demonstrate the essential steps involved in implementing a structured innovation process within an organization?",
          "a": "Implementation starts with leadership commitment and an innovation goal aligned to the organisation's strategy, followed by cross-functional teams trained in design-thinking methods. The team then identifies and prioritises opportunities using customer research, market data and employee insight. Next it runs iterative Empathize–Define–Ideate–Prototype–Test cycles with time boxes and clear checkpoints for selecting and funding the best concepts. Enablers such as an idea-management system, protected time and budget, prototyping space and metrics like validated learnings keep the process disciplined. Finally the winning solution is piloted, its results measured, and what works is scaled while lessons feed into the next cycle, making innovation repeatable instead of accidental.",
          "explanation": "It demonstrates the full implementation chain from strategy and people through structured cycles to pilot, scaling and feedback.",
          "oneShotPreview": "Strategy → team → opportunities → design-thinking cycles → pilot → scale and review."
        },
        {
          "q": "7 Apply the Design Thinking process to solve social innovation. Provide examples.",
          "a": "To address a social problem such as unsafe sanitation, poor school attendance or lack of clean water, the team first empathises by living with or interviewing the affected community to understand the real root of the problem. It then defines a specific need, ideates together with community members rather than for them, builds low-cost prototypes of a product or service, and tests them in the field while revising from feedback. For instance, a clean-water project might prototype a simple low-cost filter and a new collection routine and measure actual use before scaling. The Embrace infant warmer likewise emerged from observing rural Nepal's neonatal-care constraints, and IDEO's school-lunch redesign from studying students' experience of lunch. Because the community helps shape the solution, it is affordable, locally accepted and more sustainable.",
          "explanation": "It applies all five stages to social challenges and gives relevant examples with an explanation of why the approach succeeds.",
          "oneShotPreview": "Use the five stages with communities to build affordable, accepted social solutions."
        },
        {
          "q": "8 Discuss a real-world case study where Design Thinking was used for a social innovation.",
          "a": "A well-documented case is the Embrace infant warmer, developed by a Stanford design team working with health workers in rural Nepal. Empathising with families and nurses showed that conventional incubators were expensive, needed reliable electricity and were unavailable in villages, so low-birth-weight babies were often warmed with unsafe methods. The team defined the need as an affordable, portable, electricity-free warmer, then ideated and prototyped a lightweight sleeping bag with a phase-change material pouch heated in warm water that retains heat for hours. They tested successive prototypes with caregivers and clinicians, simplifying the design until it was usable and culturally acceptable. The resulting low-cost warmer has helped thousands of infants and led to the nonprofit Embrace Global, showing how user-centred iteration produces scalable social impact.",
          "explanation": "It presents a genuine case study with the empathy findings, problem definition, prototype, testing and outcome required for a full discussion.",
          "oneShotPreview": "Embrace infant warmer: empathy in Nepal led to a low-cost, portable warmer."
        },
        {
          "q": "9 a) Illustrate about Personas in design thinking.",
          "a": "A persona is a fictional but research-based archetype representing a key user group, built from patterns in interviews and observations. It usually includes a name, picture, demographics, goals, behaviours, frustrations and a short narrative, and may be labelled primary, secondary or anti-persona. Personas make the target user concrete and memorable, so the team discusses real needs rather than stereotypes or its own preferences. They guide the Define and Ideate stages and help decide whose needs matter most. For example, a banking app might use 'Riya, a busy working mother who checks her balance on a low-end phone between tasks', pushing the team to design for speed and low data usage.",
          "explanation": "It defines personas, describes their contents and purpose, and illustrates one, covering all parts of the question.",
          "oneShotPreview": "Research-based fictional user profiles that keep the team focused on real needs."
        },
        {
          "q": "9 b) Survey the importance of customer journey maps in understanding user experience.",
          "a": "A customer journey map is a visual timeline of every step a user takes with a product or service, from first awareness through purchase, use and after-sales support. It records the actions, touchpoints, thoughts, emotions and pain points at each stage, often as an emotional curve. This makes hidden experiences visible and shows exactly where users struggle or abandon the process, such as a confusing sign-up step or poor delivery updates. It also aligns cross-functional teams around one end-to-end view and highlights the moments that matter most. Designers use it to prioritise improvements, generate ideas and later check whether changes actually improved the experience.",
          "explanation": "It explains what the map shows and why it is valuable for spotting pain points and aligning teams, which is the importance being surveyed.",
          "oneShotPreview": "Visual timeline of user steps and emotions that reveals pain points to fix."
        },
        {
          "q": "10 Explain the role of brainstorming in the design thinking process.",
          "a": "Brainstorming is the central idea-generation technique of the Ideate stage, used to produce many varied solutions to the defined problem. Its rules — defer judgement, welcome wild ideas, build on others' ideas and aim for quantity — reduce the fear of criticism and allow creative connections to form. Facilitators use prompts such as 'How might we...?', silent idea writing, mind maps or SCAMPER to include quieter members and avoid groupthink. Afterwards the ideas are clustered, voted on and selected for prototyping, so brainstorming feeds directly into the following stages. Its role is therefore to expand the solution space before the team converges, increasing the chance of a genuinely innovative answer.",
          "explanation": "It covers the rules, techniques and position of brainstorming between Define and Prototype, explaining its role in the process.",
          "oneShotPreview": "Judgement-free group idea generation that expands options before convergence."
        },
        {
          "q": "11 Assess the effectiveness of design thinking in product development with case studies.",
          "a": "Design thinking is effective in product development because it combines creative ideation with continuous validation by real users, lowering the risk of launching products nobody wants. Airbnb is a cited case: its founders redid listing photos and trust features after observing problems, which substantially improved bookings. Apple's intuitive devices and OXO Good Grips utensils, designed after observing people with arthritis, show the same user-centred pattern. In each case the team empathised, reframed the problem, prototyped quickly and tested before scaling, improving usability, satisfaction and market fit while avoiding late, expensive rework. The limitations are that it needs genuine user access, time to iterate and management support; as a one-off workshop it produces little benefit.",
          "explanation": "It assesses effectiveness using concrete case studies, names the benefits and adds balanced limitations, as a 10-mark evaluation question expects.",
          "oneShotPreview": "User-validated iteration improves fit and cuts rework — when genuinely applied."
        }
      ]
    },
    "3": {
      "unitTitle": "Innovation",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) What are the key principles of the art of innovation? [L1, CO3] [2M]",
          "a": "The art of innovation rests on a few core principles: stay customer-centric by observing real users to find unmet needs, generate many ideas before judging them, and turn the best ideas into quick, low-cost prototypes that can be tested. It also values collaboration across diverse, motivated teams, a willingness to take calculated risks and learn from failure, and cross-pollination of ideas from other fields. Innovation is therefore a repeatable process and culture, not a one-off flash of genius.",
          "explanation": "These principles (empathy, idea fluency, prototyping, teamwork and risk tolerance) are the ones emphasized in Tom Kelley's 'The Art of Innovation' and IDEO's practice, so they directly answer the two-mark list.",
          "oneShotPreview": "Observe users, generate many ideas, prototype fast, collaborate, and embrace risk."
        },
        {
          "q": "b) How does design thinking contribute to innovation? [L1, CO3] [2M]",
          "a": "Design thinking supplies a structured, human-centred process - empathize, define, ideate, prototype, test - that turns vague problems into clear, actionable opportunities. Empathy reveals latent user needs, ideation widens the solution space, and rapid prototyping and testing reduce the risk of building the wrong thing. This makes innovation less random and more repeatable while keeping solutions grounded in real customer value.",
          "explanation": "Design thinking contributes both a mindset (user focus, experimentation) and a step-by-step method that converts insights into viable innovations.",
          "oneShotPreview": "Human-centred stages turn user insights into tested, viable innovations."
        },
        {
          "q": "c) What role does risk-taking play in innovation? [L1, CO3] [2M]",
          "a": "Innovation requires risk-taking because every genuinely new idea carries uncertainty about customer acceptance, technical feasibility and returns. Calculated risks - small, reversible experiments and prototypes - let organizations test assumptions cheaply, learn from failure and pivot before committing large resources. Without a tolerance for risk, teams stick to safe incremental changes and miss breakthrough opportunities.",
          "explanation": "Risk is inherent in trying something new; managed, small-scale risk converts uncertainty into learning while limiting the downside, which is why it is a key innovation principle.",
          "oneShotPreview": "Calculated risk and fast failure turn uncertainty into learning; no risk, no breakthroughs."
        },
        {
          "q": "d) Why is customer-centric thinking important in innovation? [L1, CO4] [2M]",
          "a": "Customer-centric thinking keeps innovation focused on solving real problems that people actually have, rather than on interesting technology nobody needs. By observing and empathizing with customers, teams uncover latent needs, validate demand early, and shape features, pricing and delivery around user value. This raises adoption and commercial success while reducing the chance of wasting effort on solutions with no market.",
          "explanation": "Innovation succeeds only when customers adopt it; centring their needs ensures real demand and makes the two-mark reason explicit.",
          "oneShotPreview": "Build what customers truly need, so adoption rises and wasted effort falls."
        },
        {
          "q": "e) Compare creativity and innovation. [L2, CO4] [2M]",
          "a": "Creativity is the ability to generate new, original and useful ideas; innovation is the successful implementation of those ideas into a product, service or process that delivers value. Creativity is about thinking and imagination, while innovation adds execution, commercialization and adoption. In short, creativity is the input and innovation is the outcome - an idea becomes innovation only when it reaches and benefits users.",
          "explanation": "The comparison hinges on idea generation versus implementation and value delivery, which is the standard textbook distinction.",
          "oneShotPreview": "Creativity = new ideas; Innovation = ideas implemented and creating value."
        },
        {
          "q": "2 a) Explain the concept of the art of innovation. [L2, CO3] [3M]",
          "a": "The art of innovation is the practice of consistently turning fresh ideas into valuable outcomes by combining creativity with a disciplined, people-centred process and a supportive culture. Popularized by Tom Kelley and IDEO, it treats innovation as a team activity built on observing customers, brainstorming freely, prototyping rapidly and learning from mistakes. It balances imaginative thinking with practical execution so new solutions are both desirable and feasible, and it can be developed as an organizational capability rather than left to chance.",
          "explanation": "This defines the term through its process, culture and outcome focus, which matches the three-mark conceptual question.",
          "oneShotPreview": "Innovation as a repeatable team process: observe, imagine, prototype, learn - not random genius."
        },
        {
          "q": "b) Demonstrate the key principles of art of innovation. [L2, CO3] [7M]",
          "a": "The key principles are: (1) customer focus - observe users and uncover unmet needs; (2) collaboration - diverse, enthusiastic teams and 'yes, and' thinking; (3) idea generation - produce many ideas and defer judgement; (4) rapid prototyping - make ideas tangible quickly and cheaply; (5) learn from failure - fail fast, iterate and keep what works; (6) cross-pollination - borrow insights from other industries and disciplines; (7) culture and space - give people time, resources and permission to experiment; and (8) persistence and passion to carry an idea through to implementation. Taken together, these make innovation a repeatable organizational capability rather than a lucky accident.",
          "explanation": "A seven-mark answer needs a broad, enumerated set of principles with a short explanation of each; this list covers the IDEO/Kelley canon.",
          "oneShotPreview": "Customer focus, teamwork, many ideas, fast prototypes, learning from failure, cross-pollination, supportive culture."
        },
        {
          "q": "3 Evaluate the effectiveness of design thinking in driving innovation across its different stages. [L5, CO3] [10M]",
          "a": "Design thinking is effective across all five stages. In Empathize, deep observation reveals latent needs that spark relevant ideas; in Define, framing the right problem prevents solving the wrong issue; in Ideate, divergent thinking generates a wide range of options before convergence; in Prototype, cheap tangible models expose flaws early; and in Test, real user feedback validates or redirects the solution. Its main strength is that it reduces uncertainty and risk step by step while keeping innovation anchored to user value. Its limits are that it needs genuine user access, time and organizational support, and it can produce attractive concepts that are hard to scale. Overall it is a highly effective innovation engine when combined with business and technical feasibility checks.",
          "explanation": "A ten-mark evaluation must cover each stage, judge the benefits and note the limitations before giving a balanced verdict, which this answer does.",
          "oneShotPreview": "Empathize to Test makes innovation user-validated and low-risk, but it needs time, access and support."
        },
        {
          "q": "4 How do organizations build an innovation-friendly culture? Provide examples. [L3, CO3] [10M]",
          "a": "Organizations build an innovation-friendly culture by encouraging open communication, cross-functional collaboration and the free flow of ideas across hierarchies. They reward experimentation, treat failures as learning opportunities, and give employees time and resources through innovation labs, hackathons or '20% time'. Leadership must lead by example, flatten decision-making, celebrate small wins and protect teams from premature criticism. Examples include Google's 20% time that produced Gmail, 3M's Post-it Notes born from a 'failed' weak adhesive, and IDEO's multidisciplinary 'hot teams' and prototyping culture. Such practices make experimentation safe and expected rather than exceptional.",
          "explanation": "The answer names concrete cultural practices and supports them with well-known examples, as the ten-mark question requires.",
          "oneShotPreview": "Open ideas, reward experiments, tolerate failure, give resources - e.g. Google 20% time, 3M Post-its."
        },
        {
          "q": "5 Assess the impact of digital transformation on innovation strategies in leading organizations. [L5, CO3] [10M]",
          "a": "Digital transformation has reshaped innovation strategies by making them faster, data-driven and more customer-centric. Cloud computing, AI, big-data analytics and digital platforms let organizations sense market changes in real time, run rapid experiments and co-create with users through digital channels. It enables business-model innovation such as subscription, platform and ecosystem models, automates routine work so people can focus on creative tasks, and shortens time-to-market through agile digital toolchains. Leading firms such as Amazon, Netflix and Tesla use data and platforms to iterate products and services continuously. The main challenges are legacy systems, data privacy, cybersecurity and the need for new skills and a supporting culture.",
          "explanation": "The answer covers positive impacts, concrete mechanisms, leading-organization examples and caveats - the balance expected in a ten-mark assessment.",
          "oneShotPreview": "Digital tools make innovation real-time, data-led and platform-based, but they demand skills, governance and security."
        },
        {
          "q": "6 a) Define creativity and innovation with suitable examples. [L2, CO3] [5M]",
          "a": "Creativity is the capacity to produce original, imaginative and useful ideas - for example, a designer sketching a novel foldable-phone concept or a chef inventing a new fusion dish. Innovation is the implementation of such ideas to create tangible value - for example, the foldable phone actually reaching the market or the dish becoming a successful new product line. Creativity is about generating possibilities; innovation is about delivering them to users. Both are complementary: without creative ideas there is nothing to implement, and without implementation the ideas remain unrealized.",
          "explanation": "Definitions plus one clear example for each term satisfy the five-mark 'define with examples' requirement.",
          "oneShotPreview": "Creativity = a novel idea (foldable-phone sketch); Innovation = the idea delivered to market (the phone launched)."
        },
        {
          "q": "b) Distinguish between creativity and innovation. [L4, CO3] [5M]",
          "a": "Creativity is a mental process of generating new and useful ideas, while innovation is the practical process of converting those ideas into a working, adopted solution. Creativity is concerned with imagination, divergence and 'what could be', whereas innovation adds convergence, execution, risk and 'what works in the market'. Creativity need not involve commercialization or users, but innovation is judged by adoption and value delivered. Creativity may be an individual or team activity, while innovation is an organizational outcome that usually requires resources, collaboration and persistence.",
          "explanation": "The distinction is drawn along the standard dimensions of idea versus implementation, imagination versus execution, and thinking versus value delivery.",
          "oneShotPreview": "Creativity imagines; Innovation implements and delivers value to users."
        },
        {
          "q": "7 a) How do organizations transform creative ideas into innovative solutions? [L2, CO3] [5M]",
          "a": "Organizations transform creative ideas through a pipeline: capture and screen ideas, select the most promising against strategy and customer value, develop them through rapid prototypes, test with real users, and refine the solution from feedback. They provide resources, cross-functional teams and methods such as design thinking, stage-gate reviews or agile development to move from concept to market. Leadership support, clear selection criteria and tolerance for early failure keep the pipeline moving. Finally, the validated solution is launched, measured and scaled across the organization.",
          "explanation": "The answer gives the practical sequence from idea capture to scaled launch, which is exactly what the question asks.",
          "oneShotPreview": "Screen, prototype, test, refine, launch and scale, backed by teams, resources and leadership."
        },
        {
          "q": "b) Choose some real world examples of creativity leading to innovation. [L3, CO3] [5M]",
          "a": "Well-known examples include the Post-it Note, which came from a 'failed' weak adhesive that 3M turned into a reusable sticky note; the iPhone, which combined existing ideas such as a touchscreen, music player and phone into a new product category; Airbnb, which turned the simple idea of sharing spare rooms into a global lodging platform; and Netflix, which moved from DVD rental to online streaming. Each began as a creative insight and became an innovation only after being developed, tested and brought to market. These cases show that creativity supplies the spark while execution turns it into value.",
          "explanation": "Every example shows a creative idea converted into a widely adopted product or service, matching the request for real-world instances.",
          "oneShotPreview": "Post-its, iPhone, Airbnb and Netflix: creative ideas that became innovations after execution."
        },
        {
          "q": "8 Explain the importance of creativity and innovation in achieving organizational success, with examples. [L2, CO4] [10M]",
          "a": "Creativity and innovation are vital because they let organizations differentiate their offerings, enter new markets and respond to changing customer needs and competition. They drive growth through new products and services, improve internal processes, reduce costs and build resilience by creating multiple future options. Innovation also attracts talent and investors and strengthens a company's reputation as forward-looking. Examples include Apple's steady stream of innovative products that sustain premium pricing, Tesla's electric-vehicle innovation that reshaped the auto industry, and Netflix's shift to streaming that saved it from decline. Without continuous innovation, firms stagnate and eventually lose relevance.",
          "explanation": "The answer links creativity and innovation to concrete success outcomes - growth, differentiation, efficiency and resilience - and proves each with examples, as a ten-mark answer requires.",
          "oneShotPreview": "Innovation drives growth, differentiation, efficiency and resilience; firms without it stagnate."
        },
        {
          "q": "9 Demonstrate the role of collaboration in the creativity and innovation process. Provide examples. [L2, CO4] [10M]",
          "a": "Collaboration brings together diverse knowledge, skills and perspectives, generating more and better ideas than individuals working alone. Team members challenge and build on each other's thinking through 'yes, and' behaviour, combine complementary expertise, and catch weaknesses early. Cross-functional collaboration also aligns design, engineering and marketing so ideas become both feasible and marketable. Examples include IDEO's multidisciplinary 'hot teams', Google's cross-functional product teams and open-innovation platforms where customers and partners co-create. Collaboration therefore widens the idea pool and smooths the path from idea to implementation.",
          "explanation": "The answer explains the mechanism - diversity, idea combination, early critique and feasibility alignment - and gives named examples, fitting a ten-mark question.",
          "oneShotPreview": "Diverse teams generate more ideas and spot flaws early - IDEO hot teams, Google product teams."
        },
        {
          "q": "10 Assess the effectiveness of different metrics used to measure innovation success within organizations. [L5, CO4] [10M]",
          "a": "Organizations use a mix of input, process, output and outcome metrics. Input and process metrics include R&D spending as a share of revenue, the number of ideas generated and the number of experiments or prototypes. Output metrics include new products launched, patents filed and time-to-market. Outcome metrics are the most meaningful: share of revenue from new products, customer adoption and satisfaction, market-share gain and return on investment. Effective measurement combines leading and lagging indicators in a balanced scorecard rather than relying on a single figure; counting ideas alone rewards quantity over value and patents alone ignore commercial impact.",
          "explanation": "An assessment should categorize the metrics, judge their strengths and limits, and give a clear verdict on what makes measurement effective, all of which this answer provides.",
          "oneShotPreview": "Measure inputs, outputs and outcomes; new-product revenue and ROI matter most, not raw idea counts."
        },
        {
          "q": "11 Evaluate the effectiveness of current practices used by companies to measure creativity and innovation outcomes. [L5, CO4] [10M]",
          "a": "Companies commonly use stage-gate reviews, innovation dashboards and balanced scorecards, new-product revenue and launch metrics, customer feedback and Net Promoter Score, patent counts, R&D return on investment, and agile measures such as experiment velocity and learning milestones. Many now add design-thinking measures such as assumption validation and prototype-to-launch conversion. These practices are effective when they combine quantitative results with qualitative learning and align with business strategy. Their weaknesses are an overemphasis on easily counted outputs such as patents and ideas, a short-term bias that punishes useful failures, and difficulty attributing revenue to a single creative idea. Overall they are moderately effective and become more useful when they are balanced, longer-term and learning-oriented.",
          "explanation": "The answer surveys current practices, weighs their strengths and limitations and delivers a reasoned judgment, which is the essence of a ten-mark evaluation.",
          "oneShotPreview": "Dashboards, stage-gates, patents, NPS and agile metrics help, but output over-counting and short-term bias weaken them."
        }
      ]
    },
    "4": {
      "unitTitle": "Product Design",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) What is problem formation in product design? [L1, CO5] [2M]",
          "a": "Problem formation is the opening stage of product design in which the real problem to be solved is identified, framed and stated clearly before any solution is generated. It involves observing users, gathering their needs, studying the context and analysing the gap between the current situation and the desired one. The result is a precise, actionable problem statement that guides ideation and keeps the team focused on user value.",
          "explanation": "Defining the problem first prevents the common failure of solving the wrong problem and gives the later design stages a clear target.",
          "oneShotPreview": "Problem formation = identify, frame and state the real user problem before designing any solution."
        },
        {
          "q": "1 b) Define product design and its key components. [L1, CO5] [2M]",
          "a": "Product design is the process of conceiving, planning and developing a product that satisfies user needs while being feasible to produce and viable in the market. Its key components are user research and problem definition, ideation and concept development, prototyping, testing and refinement, and final production specifications. It blends functionality, usability, aesthetics, materials, cost and sustainability into one coherent offering.",
          "explanation": "These components cover the full journey from understanding a need to a manufacturable, market-ready product, which is what the definition of product design requires.",
          "oneShotPreview": "Product design turns a user need into a feasible, viable product via research, concepts, prototypes, tests and specs."
        },
        {
          "q": "1 c) What are the different types of product strategies? [L1, CO5] [2M]",
          "a": "Common product strategies include differentiation (unique features, quality or design), cost leadership (lowest price through efficiency), focus or niche strategy (serving a narrow segment), product development and line extension (new or improved products for existing markets), market penetration, diversification, and innovation or blue-ocean strategy (creating entirely new demand). Firms often combine these strategies rather than use only one.",
          "explanation": "Each strategy describes a distinct way of competing and growing, whether by uniqueness, price, segment focus, portfolio expansion or new-market creation.",
          "oneShotPreview": "Strategies: differentiation, cost leadership, focus/niche, product development, penetration, diversification, innovation."
        },
        {
          "q": "1 d) How does product value impact a company’s success? [L1, CO5] [2M]",
          "a": "Product value is the benefit customers perceive relative to the price paid and the alternatives available. Higher perceived value drives purchases, repeat business, loyalty and positive word-of-mouth, which increase revenue and market share. It supports premium pricing, lowers the cost of acquiring new customers and ultimately creates sustainable competitive advantage and profit.",
          "explanation": "Customers buy value rather than features alone, so value directly shapes demand, pricing power and long-term profitability.",
          "oneShotPreview": "Higher product value means more sales, loyalty, pricing power and long-term company profitability."
        },
        {
          "q": "1 e) What factors influence product planning? [L1, CO5] [2M]",
          "a": "Product planning is influenced by customer needs and market demand, competitor offerings, company goals and available resources, technology and innovation trends, cost and pricing targets, production capability, legal and regulatory requirements, and sustainability concerns. Timing, distribution channels and expected product lifecycle also shape the plan.",
          "explanation": "A product plan must balance what customers want with what the organisation can profitably and legally deliver, so both market and internal factors matter.",
          "oneShotPreview": "Planning is shaped by market needs, competition, resources, technology, cost, regulations and sustainability."
        },
        {
          "q": "2 Describe the steps involved in problem formation and its importance in product design [L2, CO5] [10M]",
          "a": "Problem formation proceeds through these steps: (1) identify a need or opportunity by observing users and the market; (2) collect evidence through interviews, surveys, observation and data analysis; (3) analyse the findings to find the gap between the current and desired state; (4) segment users and build personas to understand who has the problem; (5) prioritise the most critical needs; (6) write a clear, specific problem statement; and (7) validate and refine it with stakeholders and users. Its importance is that it ensures the team solves the right problem, aligns everyone on a shared goal, saves time and money by avoiding misdirected work, establishes criteria for judging ideas, and creates the foundation for ideation, prototyping and testing.",
          "explanation": "Because every later design decision depends on the problem statement, a rigorous formation process is what turns a vague need into a solvable, testable design challenge.",
          "oneShotPreview": "Observe, collect data, find the gap, segment users, prioritise needs, write and validate a problem statement — so the right problem is solved."
        },
        {
          "q": "3 a) State product design and List out the different types of product strategies. [L1, CO5] [3M]",
          "a": "Product design is the systematic process of identifying a user need and creating a product concept, prototype and final specification that satisfies that need within technical and business constraints. The main types of product strategies are differentiation, cost leadership, focus/niche, product development, market penetration, diversification, and innovation or blue-ocean strategy. Product-line extension and platform strategy are additional common variants.",
          "explanation": "The statement captures the user-need-to-product journey, while the listed strategies are the standard ways firms position and grow products.",
          "oneShotPreview": "Product design = need to product; strategies = differentiation, cost leadership, focus, development, penetration, diversification, innovation."
        },
        {
          "q": "3 b) Write the key stages in the product design process. [L3, CO5] [7M]",
          "a": "The key stages are: (1) research and empathy — understand users and the market; (2) problem definition — frame a clear problem statement; (3) ideation — generate a wide range of concepts; (4) concept selection — evaluate and choose the most promising ideas; (5) prototyping — build low- to high-fidelity models; (6) testing and evaluation — get user feedback and measure performance; (7) refinement — iterate on the design; and (8) specification and launch — finalise drawings, materials and production details and release the product. These stages are iterative, so findings from testing often send the team back to earlier stages.",
          "explanation": "The sequence moves from understanding to making and validating, and iteration is essential because user feedback repeatedly reshapes the design.",
          "oneShotPreview": "Research, define, ideate, select, prototype, test, refine, specify and launch — an iterative loop."
        },
        {
          "q": "4 Compare and contrast different product strategies used by companies. [L4, CO5] [10M]",
          "a": "Differentiation competes on unique features, quality, design or brand and earns higher margins but needs heavy R&D and marketing; cost leadership competes on low price through scale and efficiency and accepts thinner margins with high volume. A focus or niche strategy targets a narrow customer group deeply, while product development and line extension grow the portfolio for existing markets with moderate risk. Diversification enters new markets with new products and offers high growth but high risk, and innovation or blue-ocean strategy creates new demand instead of fighting rivals, offering big rewards but high uncertainty. In short, they differ in competitive basis, target market, investment, risk and expected return, yet all aim to create customer value and a sustainable advantage, and most companies blend several of them.",
          "explanation": "A comparison must show both the distinguishing dimensions (how each competes, its risk and investment) and the shared goal, giving a balanced contrast.",
          "oneShotPreview": "Differentiation = uniqueness, cost leadership = low price, focus = niche, diversification = new markets; each has different risk and return."
        },
        {
          "q": "5 Analyze the role of perceived product value in shaping customer perception and market success. [L4, CO5] [10M]",
          "a": "Perceived product value is the customer's subjective judgement of the benefits received — functional, emotional and social — against the costs incurred, such as price, effort and risk. It shapes perception by forming expectations of quality and trust before purchase, and it determines willingness to pay, choice among alternatives, satisfaction after use and the likelihood of recommending the product. High perceived value leads to stronger purchase intent, brand loyalty, repeat sales, positive reviews and the ability to charge a premium, all of which drive market share and revenue. Companies influence it through design, branding, packaging, service and the overall customer experience, so two objectively similar products can succeed very differently.",
          "explanation": "Because buying decisions are based on what customers believe they receive rather than on objective specifications alone, perceived value is a direct driver of both perception and commercial results.",
          "oneShotPreview": "Perceived value (benefits vs costs) drives choice, loyalty, premium pricing and market success, not specifications alone."
        },
        {
          "q": "6 Discuss the significance of product planning in ensuring business success. [L2, CO5] [10M]",
          "a": "Product planning is the forward-looking process of deciding which products to develop, for whom, when and with what resources. It aligns new products with corporate objectives and market opportunities, sets priorities and a realistic roadmap, and allocates budget, people and technology efficiently. It reduces the risk of failure by testing demand and feasibility before heavy investment, coordinates design, production, marketing and finance, and manages the product portfolio and lifecycle so that old and new products are balanced. Effective planning also shortens time to market, supports timely launches, anticipates competition and regulation, and builds a pipeline of innovations that sustains growth and competitive advantage.",
          "explanation": "Planning converts strategy into an executable, coordinated sequence of decisions, which is why it links product ideas to lasting business success.",
          "oneShotPreview": "Product planning aligns products with goals and demand, allocates resources, cuts risk and keeps a healthy innovation pipeline."
        },
        {
          "q": "7 a) Define product specifications and describe their key components. [L2, CO5] [5M]",
          "a": "Product specifications are formal documents that state exactly what a product must be and do, including its required characteristics, performance levels and acceptance criteria. Key components are functional requirements, physical and technical attributes such as size, weight and materials, performance targets, safety and regulatory compliance, appearance and finishing standards, cost or target price, and testing and quality-control criteria. They may also include packaging, labelling, warranty and environmental requirements.",
          "explanation": "Specifications remove ambiguity by recording measurable requirements, which is exactly what a design-to-production document must do.",
          "oneShotPreview": "Specs state the required functions, dimensions, materials, performance, compliance, cost and test criteria."
        },
        {
          "q": "7 b) Explain the importance of product specifications in guiding the design and development process. [L2, CO5] [5M]",
          "a": "Specifications give designers, engineers, suppliers and manufacturers one unambiguous reference, so everyone works toward the same targets. They convert user needs into measurable criteria, help evaluate concepts, guide material and process choices, and form the basis of testing and quality assurance. They also support accurate costing and scheduling, reduce errors, rework and disputes, and provide the benchmark for verifying that the final product actually meets customer requirements.",
          "explanation": "Without a clear specification, teams interpret needs differently and cannot objectively judge whether the product is correct or ready.",
          "oneShotPreview": "Specs align teams, enable objective testing, control cost and quality, and verify the product meets user needs."
        },
        {
          "q": "8 a) Describe innovation drive product design. [L2, CO5] [5M]",
          "a": "Innovation drives product design by introducing new ideas, technologies, materials, processes and business models that let designers solve user problems in better or entirely new ways. It pushes design beyond incremental improvements toward breakthrough concepts, improving usability, performance, aesthetics and sustainability while opening new markets. Innovation can be technological, aesthetic, process-based or value-proposition based, and it gives a company a competitive edge and stronger product value.",
          "explanation": "New possibilities from innovation expand the solution space, so design can deliver products that were not feasible or imagined before.",
          "oneShotPreview": "Innovation supplies new ideas and technologies that let design create better, novel and more competitive products."
        },
        {
          "q": "8 b) Identify the key challenges in implementing innovation. [L3, CO5] [5M]",
          "a": "Key challenges include resistance to change and risk-averse culture, uncertainty and high risk of failure, limited budget and skills, poor cross-functional collaboration, and difficulty converting a prototype into a manufacturable, scalable product. Market acceptance, intellectual-property protection, regulatory approval, integration with existing systems and measuring the return on innovation also create obstacles.",
          "explanation": "These challenges span people, resources, processes and the market, which is why many promising ideas fail to reach successful implementation.",
          "oneShotPreview": "Barriers: resistance, risk, scarce resources, scaling problems, market acceptance, IP rules and hard-to-measure returns."
        },
        {
          "q": "9 Analyze a case study where innovation transformed a product or industry. [L4, CO5] [10M]",
          "a": "A clear example is Apple's iPhone, launched in 2007. Instead of adding another keypad phone, Apple combined a multi-touch full-screen interface, a music player, a web browser and a phone in one device, and later added the App Store to create an ecosystem of third-party applications. This innovation reshaped customer expectations, made physical keyboards and small screens obsolete, forced competitors to copy the touch-screen model and created the modern mobile-app economy. The case shows that transformation comes from rethinking the whole user experience and business ecosystem, not merely from adding features, and that early user-centred design plus continuous iteration can redefine an industry.",
          "explanation": "The iPhone case demonstrates a product-level innovation that changed both the product category and the surrounding market, matching the demand for an analysed transformation.",
          "oneShotPreview": "iPhone: multi-touch plus app ecosystem replaced keypad phones and reshaped the entire mobile industry."
        },
        {
          "q": "10 Describe how sustainability principles can be applied to the design of a common consumer product. [L3, CO5] [10M]",
          "a": "Sustainability can be applied by using recycled, renewable, non-toxic and biodegradable materials, designing for durability, repairability, easy disassembly and recycling, and reducing energy, water and waste during manufacture and transport. Packaging should be minimal or reusable, and a life-cycle perspective should guide decisions from raw material extraction to disposal, for example through take-back or refill systems. As an illustration, a reusable stainless-steel or recycled-plastic water bottle can replace single-use plastic bottles: it is long-lasting, washable, recyclable at end of life and backed by refill stations, cutting waste and carbon footprint while still meeting the user's need for safe, portable hydration.",
          "explanation": "A life-cycle view ensures improvements at one stage are not offset by harm at another, making the product genuinely rather than superficially sustainable.",
          "oneShotPreview": "Use eco-materials, durability, repair/recycle design, lean packaging and life-cycle thinking — e.g. a refillable reusable bottle."
        },
        {
          "q": "11 Assess the effectiveness of various methods used to measure post-launch product success. [L5, CO5] [10M]",
          "a": "Post-launch success can be measured through sales volume, revenue, profit and market share; customer satisfaction scores, Net Promoter Score and reviews; usage and engagement analytics; retention, repeat-purchase and churn rates; return and warranty rates; and financial measures such as ROI and payback period. Sales data show commercial uptake but not why customers behave as they do, while surveys and reviews explain satisfaction and loyalty but can be biased and slow. Usage analytics and retention reveal real behaviour, and returns signal quality problems; therefore no single metric is sufficient. The most effective approach combines quantitative and qualitative measures, compares them with pre-set targets and baselines, and tracks them over time to distinguish a lasting success from an initial spike.",
          "explanation": "Assessment requires weighing each method's strengths and limits and recognising that a balanced, time-based set of metrics gives a more reliable verdict than any one number.",
          "oneShotPreview": "Combine sales, satisfaction, usage, retention, returns and ROI; compare with targets over time for a valid verdict."
        }
      ]
    },
    "5": {
      "unitTitle": "Design Thinking in Business Processes",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) Define design thinking, and how is it applied in business innovation?",
          "a": "Design thinking is a human-centred, iterative problem-solving approach that combines empathy, creativity and rational analysis to understand users, redefine problems and generate innovative solutions. It is applied in business innovation through the five stages - empathize, define, ideate, prototype and test - which help teams discover unmet customer needs, frame the right problem, brainstorm ideas and validate solutions quickly. Businesses use it to develop new products, services, processes and business models that are genuinely customer-centric. By testing low-cost prototypes early, companies reduce risk and bring more relevant innovations to market.",
          "explanation": "Gives the standard definition and maps the five-stage process directly to business innovation, matching the 2-mark L1 question.",
          "oneShotPreview": "Design thinking = human-centred, iterative problem-solving (empathize to define to ideate to prototype to test) applied to create customer-centric business innovations."
        },
        {
          "q": "1 b) How does design thinking help businesses solve complex problems?",
          "a": "Design thinking helps businesses solve complex, ill-defined or 'wicked' problems by first using empathy and observation of real users to understand the situation, then reframing the problem from the user's perspective before jumping to solutions. It encourages divergent thinking to generate many candidate ideas and relies on rapid prototyping and testing to learn what actually works instead of acting on assumptions. This iterative, evidence-based cycle reduces uncertainty, uncovers hidden needs and produces solutions that fit real market conditions. It also aligns cross-functional teams around a shared understanding of the problem.",
          "explanation": "Explains empathy-based reframing, ideation and prototype-driven learning as the mechanisms that make complex problems tractable.",
          "oneShotPreview": "It reframes 'wicked' problems via user empathy, generates many ideas and tests prototypes early - cutting uncertainty and assumption risk."
        },
        {
          "q": "1 c) What are the key principles of design thinking that redefine businesses?",
          "a": "The key principles are human-centricity (empathy for the end user), reframing the problem before solving it, divergent ideation that generates many ideas and postpones judgement, a bias to action through rapid prototyping, iterative testing and learning from failure, and collaboration across multidisciplinary teams. Together these principles shift a business from an inward, product-first mindset to an outward, customer-first culture. They redefine how companies identify opportunities, make decisions and innovate. This customer-centric orientation is what distinguishes design-thinking-driven organizations.",
          "explanation": "Lists the core principles (empathy, reframing, ideation, prototyping, iteration, collaboration) and links them to the cultural shift in business.",
          "oneShotPreview": "Principles: empathy/human-centricity, reframe problems, diverge ideas, prototype fast, test and iterate, collaborate - shifting business to customer-first."
        },
        {
          "q": "1 d) Why is empathy important in design thinking for business?",
          "a": "Empathy is the foundation of design thinking because it lets businesses understand the genuine needs, emotions, pains and contexts of their customers rather than relying on internal assumptions. By observing and listening to users, teams can define the right problem and create products and services that truly resonate with the market. Empathy builds trust and loyalty, reveals unmet or latent needs and reduces the risk of building solutions nobody wants. In business it therefore directly improves customer satisfaction and the commercial success of innovations.",
          "explanation": "Identifies empathy as the stage that grounds problem definition in real user needs, lowering the risk of unwanted solutions.",
          "oneShotPreview": "Empathy grounds decisions in real customer needs and pains, so solutions fit the market and build loyalty instead of guessing."
        },
        {
          "q": "1 e) How can businesses use design thinking to create customer-centric products?",
          "a": "Businesses create customer-centric products by starting with empathy - researching and observing how customers actually live and work - and using those insights to define the problem from the customer's point of view. They then ideate solutions with cross-functional teams, build low-fidelity prototypes and put them in customers' hands for feedback. Iterating on that feedback ensures the final product reflects real needs and preferences rather than the company's own assumptions. Throughout the process, continuous customer input guides features, usability and the overall experience.",
          "explanation": "Describes the empathy to define to ideate to prototype to test loop with continuous customer feedback as the route to customer-centric products.",
          "oneShotPreview": "Use empathy research, define the user problem, co-ideate, prototype, then test with customers and iterate until the product fits real needs."
        },
        {
          "q": "2 a) Explain the concept of design thinking",
          "a": "Design thinking is a human-centred, non-linear problem-solving methodology that applies a designer's mindset of empathy, creativity and experimentation to any business or social challenge. It is commonly described in five stages: empathize (understand users), define (frame the problem), ideate (generate ideas), prototype (build tangible representations) and test (validate with users). The stages are iterative, so teams revisit them as new insights emerge rather than following a rigid sequence. The approach values collaboration, bias to action and learning from failure, and is used to develop innovative products, services and processes grounded in real user needs. Its goal is to reduce uncertainty and deliver solutions that are both desirable to people and viable for the business.",
          "explanation": "Provides a complete 5-mark explanation covering the definition, the five stages, iteration, the underlying mindset and the overall purpose.",
          "oneShotPreview": "Design thinking = iterative, human-centred five-stage method (empathize, define, ideate, prototype, test) for innovation grounded in user needs."
        },
        {
          "q": "2 b) Apply the design thinking process in driving business and strategic innovation.",
          "a": "To drive business and strategic innovation, a company first empathizes with customers and stakeholders to uncover latent needs and market shifts, then defines strategic problems such as declining relevance or poor customer experience. It ideates broadly with cross-functional teams to generate new products, services, business models and process improvements, selects the most promising ideas and builds quick prototypes. These prototypes are tested in the market or with users, and the resulting feedback is used to refine both the offering and the underlying strategy. The outcome is evidence-based innovation aligned with real demand and an organizational culture able to adapt continuously to change. Companies such as IBM and Apple use this loop to shape strategy as well as products.",
          "explanation": "Applies each stage to strategic-level concerns such as market shifts, business models and culture rather than only product design, as a 5-mark application answer requires.",
          "oneShotPreview": "Empathize with the market, define a strategic problem, ideate new models, prototype, test and refine - making strategy evidence-based and adaptive."
        },
        {
          "q": "3 a) What are the key principles of design thinking that redefine businesses and Provide examples?",
          "a": "The principles that redefine businesses are: (1) Human-centricity, e.g. Airbnb's founders photographed hosts' homes to understand trust concerns and redesigned listings around user experience; (2) Problem reframing, e.g. a hospital reframed 'reduce waiting time' into 'reduce waiting anxiety' and improved patient satisfaction; (3) Divergent ideation with deferred judgement, e.g. IDEO's brainstorming sessions generate many ideas before one is chosen; (4) Rapid, low-cost prototyping, e.g. GE and SAP test services before full rollout; (5) Iteration and learning from failure, e.g. Google's failed products inform later successes; (6) Multidisciplinary collaboration, e.g. Apple's design and engineering teams work together; and (7) Bias to action and experimentation. These principles transform a business from intuition-driven and siloed into customer-driven, collaborative and experimental.",
          "explanation": "Lists the principal design-thinking principles and pairs each with a concrete company example, matching the 6-mark principles-and-examples demand.",
          "oneShotPreview": "Principles with examples: empathy (Airbnb), reframing (hospital), ideation (IDEO), prototyping (GE/SAP), iteration (Google), collaboration (Apple)."
        },
        {
          "q": "3 b) How companies that have successfully implemented design thinking principles.",
          "a": "Companies successfully implement design thinking by embedding it in their culture and processes rather than treating it as a one-off workshop. They build cross-functional teams, secure visible leadership support and train employees in empathy and experimentation. They also create psychologically safe spaces where failure is treated as learning, integrate the five-stage loop into product and strategy cycles, and use real customer research to drive decisions while measuring outcomes such as satisfaction and speed of learning. Well-known examples include Apple (user-friendly products), Airbnb (redesigned booking experience), IBM (culture-wide design thinking), and GE and SAP (enterprise services).",
          "explanation": "Explains the organizational enablers - culture, leadership, cross-functional teams, training and process integration - and cites real adopters for the 4-mark question.",
          "oneShotPreview": "Success comes from embedding design thinking in culture and process with leadership support, cross-functional teams, customer research and safe experimentation."
        },
        {
          "q": "4 a) Explain how design thinking helps businesses address growth challenges and improve predictability in their operations.",
          "a": "Design thinking addresses growth challenges by uncovering unmet customer needs and new market opportunities through empathy and research, then generating and testing innovative offerings before committing large resources. This evidence-based, iterative approach reduces the risk of failed launches and makes customer response more predictable because ideas are validated with real users early. Applying the same loop internally to operations - mapping employee and process pain points, prototyping new workflows and testing them - produces more efficient, repeatable processes. Design thinking applied to service blueprints and customer journeys also standardizes good experiences while leaving room for refinement. As a result, businesses can scale with less uncertainty and make better-informed forecasts and investments.",
          "explanation": "Connects empathy, early validation and process prototyping to reduced risk and more predictable growth and operations, as the 6-mark prompt asks.",
          "oneShotPreview": "Design thinking finds growth via user insight, de-risks launches through early prototype testing and makes operations predictable by iteratively validating processes."
        },
        {
          "q": "4 b) Discuss how design thinking supports businesses in maintaining relevance and competitive markets.",
          "a": "Design thinking keeps a business relevant by continuously sensing changing customer needs and market conditions through empathy and ongoing user research, so offerings evolve with demand instead of becoming outdated. It fosters a culture of innovation and experimentation that lets the company respond quickly to competitors and technological shifts. By constantly testing and refining products, services and experiences, a firm differentiates itself through superior customer experience and fresh value propositions. This adaptive, customer-focused capability helps it retain customers and sustain a competitive edge in dynamic markets.",
          "explanation": "Identifies continuous customer sensing, experimentation and differentiation as the mechanisms that maintain relevance and competitiveness.",
          "oneShotPreview": "Continuous empathy and iteration keep offerings current, enabling fast adaptation and customer-experience differentiation that sustains competitive relevance."
        },
        {
          "q": "5 Compare and contrast the application of design thinking in large organizations versus startups. How does each benefit from this approach?",
          "a": "In large organizations, design thinking is applied through structured cross-functional teams, formal innovation programmes and dedicated design labs; it helps break down silos, align many stakeholders and bring customer focus to complex, layered processes and established products. The benefits are renewed customer orientation, coordinated strategy and innovation at scale with managed risk, although hierarchy and bureaucracy can slow the process. In startups, design thinking is typically informal, fast and embedded in daily decisions: small teams empathize directly with users, iterate constantly and pivot quickly with minimal resources. Startups gain agility, rapid validation of the business model and earlier product-market fit, but may lack the resources and diverse expertise that large firms possess. Both use the same empathy-to-test cycle, but large organizations emphasize coordination and scale while startups emphasize speed and flexibility. In both settings the method reduces the risk of building unwanted solutions and aligns the offering with real user needs, showing that it is scalable across contexts.",
          "explanation": "Gives a balanced 10-mark comparison of application, benefits and constraints for each setting, plus a common-ground conclusion.",
          "oneShotPreview": "Large firms: structured, cross-functional, scale and silo-breaking; startups: informal, fast, pivot-ready. Both use empathy to test to cut risk and fit user needs."
        },
        {
          "q": "6 Analyze how design thinking helps businesses navigate extreme competition and adapt to market changes. Provide real-world examples.",
          "a": "In intensely competitive and fast-changing markets, design thinking keeps businesses close to the customer so they can detect shifting preferences early and respond before rivals do. Empathy and continuous research reveal new needs and underserved segments, while ideation and rapid prototyping let companies experiment with differentiated offerings at low cost. Iterative testing supplies fast feedback, so strategy can be adjusted quickly instead of relying on long, rigid planning cycles. For example, Apple repeatedly redesigned the user experience with the iPod and iPhone to stay ahead in consumer electronics; Airbnb used design thinking to rebuild trust and grow in the crowded travel market; IBM embedded design thinking across the organization to transform its services; and Netflix pivoted from DVD rentals to streaming by constantly re-evaluating customer behaviour. These cases show that design thinking converts market uncertainty into actionable insight, enabling adaptation, differentiation and resilience in hypercompetitive environments.",
          "explanation": "Analyses the mechanisms - customer proximity, fast experimentation, feedback-driven strategy - and supplies several named real-world examples, satisfying both parts of the 10-mark question.",
          "oneShotPreview": "Design thinking tracks shifting needs via empathy, experiments via prototypes and pivots fast - Apple, Airbnb, IBM and Netflix show competitive adaptation."
        },
        {
          "q": "7 Businesses often struggle with balancing standardization and innovation. Evaluate How does design thinking provide a solution to this challenge?",
          "a": "Design thinking resolves the standardization-versus-innovation tension by separating the stable core of an experience from the parts that need to vary, and by testing changes before they are standardized. Empathy identifies which elements customers truly value and must remain consistent, and which cause friction and need reinvention. Prototyping and testing let a company experiment with new ideas in a low-risk space; once a better solution is validated, it can be codified into new standards and repeated at scale. This creates a cycle in which standardization provides efficiency and reliability while continuous, user-informed innovation prevents rigidity and obsolescence. For example, a fast-food chain can standardize food quality and service basics while using design thinking to innovate its ordering kiosks or delivery experience, then standardize the successful version. Design thinking therefore treats standards as living, evidence-based guidelines rather than fixed rules, making the balance dynamic instead of a one-time compromise.",
          "explanation": "Evaluates how empathy plus prototype-and-test turns standards into validated, updatable baselines - answering the 10-mark evaluation with reasoning and an example.",
          "oneShotPreview": "Design thinking identifies what to standardize versus reinvent via empathy, tests innovations safely, then codifies winners into living standards - a dynamic balance."
        },
        {
          "q": "8 Make use of design thinking to define and test business models? Explain the process with case studies.",
          "a": "Design thinking defines and tests business models by applying the same human-centred, iterative loop to the model itself, not just to products. The process is: (1) Empathize - research target customers, their jobs-to-be-done and their pains; (2) Define - frame the value proposition and the business-model problem; (3) Ideate - generate alternative revenue streams, channels, customer segments and partnerships; (4) Prototype - express each candidate model visually using tools such as the Business Model Canvas or a lean experiment; (5) Test - validate assumptions with real customers through pilot offers, landing pages or small-scale trials, then refine or pivot. As case studies, Airbnb tested its lodging marketplace with a small, photographed-listing experiment before scaling; Dropbox used a prototype video to validate demand before building the product; Netflix tested and pivoted from DVDs to a subscription streaming model; and IBM and GE applied design thinking to reshape service business models. This process replaces speculative business plans with evidence-based models that fit real customer behaviour.",
          "explanation": "Maps the five stages onto business-model definition and testing and backs the process with recognizable case studies, as required for 10 marks.",
          "oneShotPreview": "Apply empathize, define, ideate, prototype on the Business Model Canvas, then test pilots to validate business models - Airbnb, Dropbox and Netflix are cases."
        },
        {
          "q": "9 Outline the key steps involved in developing and testing a prototype to ensure it meets customer needs and expectations",
          "a": "The key steps are: (1) define the purpose and the specific customer need or assumption the prototype must address; (2) identify the target users and the critical features or hypotheses to test; (3) choose the right fidelity, from a low-fidelity sketch, storyboard or paper prototype for early feedback to a higher-fidelity working model for later validation; (4) build the prototype quickly and cheaply, focusing only on what is needed to test the idea; (5) plan realistic test scenarios and tasks that mirror actual customer use; (6) put the prototype in users' hands, observe behaviour and collect qualitative and quantitative feedback; (7) analyse the results against the defined needs and note what worked and what failed; (8) iterate by refining the prototype and retesting until it satisfies customer needs; and (9) decide whether to proceed, pivot or discard the concept. This structured loop ensures the final solution is validated by real users rather than by internal assumption.",
          "explanation": "Lists the complete prototype development-and-testing sequence from defining the need through building, testing, analysing and iterating, matching the 10-mark outline request.",
          "oneShotPreview": "Define need, choose fidelity, build cheap prototype, test with real users, analyse, iterate until needs are met, then proceed or pivot or discard."
        },
        {
          "q": "10 Analyze the elements of a business model created through design thinking, using real-world company examples.",
          "a": "A business model shaped by design thinking contains the classic Business Model Canvas elements - customer segments, value propositions, channels, customer relationships, revenue streams, key activities, key resources, key partners and cost structure - but each is derived from empathy and validated by testing rather than assumed. For example, Airbnb's customer segments (hosts and travellers), value proposition (affordable, local stays built on trust), platform channels and commission-based revenue all emerged from observing real user friction and were refined through experiments. Apple's model combines a strong user-experience value proposition, integrated hardware and software activities, premium pricing and brand-driven customer relationships built on deep understanding of users. Netflix's segments and revenue shifted to subscription streaming after continuous testing of customer viewing behaviour. In each case design thinking ensures the value proposition addresses genuine needs, the channels and relationships fit how customers behave, and the revenue and cost structure remain viable. A design-thinking business model is therefore customer-validated, coherent across its elements and adaptable to change.",
          "explanation": "Enumerates the canvas elements, explains how design thinking validates them and illustrates with three named companies, fulfilling the 10-mark analysis.",
          "oneShotPreview": "Design-thinking business model = canvas elements (segments, value prop, channels, revenue, resources, partners, costs) validated by user insight - Airbnb, Apple, Netflix."
        },
        {
          "q": "11 Describe the future of design thinking in business and strategic innovation?",
          "a": "The future of design thinking lies in wider integration into business strategy, digital transformation and organizational culture rather than remaining an isolated tool of the design team. It will increasingly combine with data analytics, artificial intelligence and emerging technologies to generate deeper customer insight and test solutions faster and at greater scale. Businesses will apply it to complex challenges such as sustainability, social innovation, digital platforms and changing work models, and to non-product domains such as services, policies and ecosystems. Design thinking will become a continuous organizational capability, embedded in agile and lean practices, supported by cross-functional teams and leadership, and measured by outcomes such as customer experience and adaptability. As markets grow more volatile, its emphasis on empathy, experimentation and rapid learning will make it central to strategic innovation and resilient growth, evolving from a method for making things into a way of shaping strategies and organizations.",
          "explanation": "Projects the trend from a niche tool to a strategic, technology-augmented, organization-wide capability applied to broader challenges, fitting the 10-mark descriptive question.",
          "oneShotPreview": "Future: design thinking becomes an organization-wide, data/AI-augmented strategic capability for sustainability, services and volatile markets - shaping strategy, not just products."
        }
      ]
    }
  },
  "23HS0848": {
    "1": {
      "unitTitle": "Introduction to Managerial Economics",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) Definition of Managerial Economics.",
          "a": "Managerial economics is the application of economic theory, concepts and analytical methods to the problems of business management. It bridges economics and business practice to help managers allocate scarce resources, analyse demand, cost, production, pricing and investment, and take rational decisions. It is also called business economics or applied economics. In short, it uses economic reasoning to facilitate decision-making and forward planning by management.",
          "explanation": "This is the standard textbook definition of managerial economics, describing it as applied economics that links theory to business decision-making.",
          "oneShotPreview": "Application of economic theory and tools to solve practical business management and planning problems."
        },
        {
          "q": "1 b) What is law of demand?",
          "a": "The law of demand states that, other things being equal (ceteris paribus), the quantity demanded of a commodity rises when its price falls and falls when its price rises. Price and quantity demanded are therefore inversely related, which is shown by a downward-sloping demand curve. The law holds only when non-price factors such as income, tastes and prices of related goods remain unchanged.",
          "explanation": "It states the inverse price-quantity relationship and the ceteris paribus condition, the core of the law of demand.",
          "oneShotPreview": "Higher price, lower quantity demanded (and vice versa), other things constant."
        },
        {
          "q": "1 c) What is Elastic Demand and inelastic demand?",
          "a": "Elastic demand (Ed > 1) exists when a small percentage change in price causes a larger percentage change in quantity demanded, so consumers are highly responsive to price; luxuries and non-essential goods usually show this. Inelastic demand (Ed < 1) exists when a price change causes a smaller percentage change in quantity demanded, as with necessities like salt, medicines and petrol. The extreme cases are perfectly elastic (Ed = infinite, horizontal curve) and perfectly inelastic (Ed = 0, vertical curve).",
          "explanation": "It distinguishes the two cases by the size of the responsiveness (Ed greater or less than one) and gives typical examples.",
          "oneShotPreview": "Elastic: big demand response to price (Ed>1); inelastic: small response (Ed<1)."
        },
        {
          "q": "1 d) List out the interdisciplinary of managerial economics.",
          "a": "Managerial economics draws on several disciplines. The main ones are microeconomics (demand, production, cost, market structure), macroeconomics (national income, inflation, business cycles, monetary and fiscal policy), accounting (financial statements and cost data), finance (capital budgeting, cost of capital, working capital), marketing (demand forecasting, pricing, promotion), statistics and econometrics (data analysis and forecasting models), mathematics (calculus and optimisation), and operations research (linear programming and decision theory). Law, psychology and sociology also contribute through the business environment and consumer behaviour.",
          "explanation": "It names the contributing disciplines and briefly links each to a managerial-economics topic, which is what a listing question requires.",
          "oneShotPreview": "Micro/macroeconomics, accounting, finance, marketing, statistics, maths, operations research, law and psychology."
        },
        {
          "q": "1 e) What are the advantages of managerial economics?",
          "a": "Managerial economics provides a systematic, analytical framework for decision-making and forward planning. It helps in demand forecasting, pricing, product-mix and production decisions, cost control and profit planning, capital budgeting and investment appraisal. It enables optimal allocation of scarce resources, reduces guesswork and risk by using data and theory, and helps the firm respond to competition, inflation and government policy. Overall it improves the quality, consistency and profitability of managerial decisions.",
          "explanation": "It lists the practical benefits of the subject — better analysis, resource allocation, planning and risk reduction — matching an advantages question.",
          "oneShotPreview": "Better decisions, optimal resource use, accurate forecasting, cost control, profit planning and risk reduction."
        },
        {
          "q": "2 a) Identify nature of managerial economics through its definitions.",
          "a": "The nature of managerial economics is clear from the definitions given by various authors: Spencer and Siegelman call it \"the application of economic theory and methodology to business administration practice\", while Evans describes it as a \"marriage of economics and business\". It is essentially applied and pragmatic, being problem-solving and decision-oriented rather than pure theory. It is both positive (factual analysis) and normative (prescriptive), mainly microeconomic but making use of macro inputs, and interdisciplinary in character. It is also regarded as both a science, because it uses systematic theories and analytical tools, and an art, because applying those tools requires judgement and experience.",
          "explanation": "It uses well-known definitions to bring out the applied, decision-oriented, interdisciplinary and science-plus-art nature of the subject.",
          "oneShotPreview": "Applied, decision-oriented, interdisciplinary, positive + normative, and a science as well as an art."
        },
        {
          "q": "2 b) Analyze the significance of managerial economics in decision-making?",
          "a": "Managerial economics is significant because it supplies the analytical tools needed for rational business decisions. It guides demand analysis and forecasting, pricing, production and cost optimisation, profit planning, break-even analysis and capital investment appraisal. It also helps the firm assess its external environment — competition, inflation, business cycles and government policy — and choose the best among alternative courses of action. By converting abstract theory into practical decision rules, it reduces uncertainty and guesswork, improving the quality, consistency and profitability of decisions and supporting long-run forward planning.",
          "explanation": "It analyses importance by linking the tools of the subject to concrete managerial decisions and to reduced risk and better planning.",
          "oneShotPreview": "Turns economic theory into practical rules for pricing, output, investment and planning under uncertainty."
        },
        {
          "q": "3 a) What is Managerial Economics? Briefly explain the role of managerial economics in business decision making.",
          "a": "Managerial economics is the application of economic principles, concepts and analytical techniques to business decision-making. Its role is to help management decide what to produce, how much to produce, at what price to sell and how to allocate scarce resources. It aids demand analysis and forecasting, cost and production decisions, pricing, profit planning, break-even analysis and capital investment decisions. It provides concepts such as opportunity cost, marginal analysis and elasticity that make decisions logical and consistent. Thus it helps the manager maximise profit or shareholder value while recognising constraints, competition, government policy and risk.",
          "explanation": "It defines the subject and then explains its role across the major business decision areas, as the question asks.",
          "oneShotPreview": "Uses economic concepts to guide decisions on demand, pricing, output, cost, profit and investment."
        },
        {
          "q": "3 b) Define Elasticity of demand? Explain various measures of Elasticity of Demand?",
          "a": "Elasticity of demand is the degree of responsiveness of quantity demanded to a change in its price or another determinant; numerically it is the percentage change in quantity demanded divided by the percentage change in the factor. The main measures are: (1) Price elasticity — point elasticity at a point on the curve (using calculus, Ed = (dQ/dP) x (P/Q)) or arc elasticity over a range using the midpoint formula. (2) Income elasticity — percentage change in demand divided by percentage change in income (positive for normal goods, negative for inferior goods). (3) Cross elasticity — percentage change in demand of one good divided by percentage change in price of another (positive for substitutes, negative for complements). (4) Promotional or advertising elasticity — percentage change in demand divided by percentage change in advertising expenditure.",
          "explanation": "It defines elasticity as a responsiveness ratio and explains the four standard measures with their formulas and signs.",
          "oneShotPreview": "Price, income, cross and advertising elasticity — each = % change in demand / % change in the determinant."
        },
        {
          "q": "4 \"Managerial economics is the integration of economic theory with business practice for the purpose of facilitating decision making and forward planning by Management\". Comment.",
          "a": "This statement, given by Spencer and Siegelman, correctly captures the essence of managerial economics. Economic theory supplies the concepts and tools — demand, elasticity, production, cost, market structure, national income and policy — while business practice supplies real problems and data. Integrating the two enables managers to take rational, evidence-based decisions on pricing, output and investment and to plan ahead under uncertainty. The discipline is therefore applied, interdisciplinary, forward-looking and both positive and normative, with the ultimate objective of efficient resource use and profit maximisation. The comment is fully justified because managerial economics is not pure theory but theory directed at practical managerial action.",
          "explanation": "It explains both halves of the quoted definition — theory plus practice, decision-making plus forward planning — and agrees with the statement with reasons.",
          "oneShotPreview": "Correct: it is applied economics that joins theory to practice for better decisions and future planning."
        },
        {
          "q": "5 a) What is demand analysis and its types in detail.",
          "a": "Demand analysis is the study of the relationship between the demand for a product and the factors influencing it, used to estimate sales and guide business decisions. Its main types are: price demand (quantity at different prices), income demand (demand at different income levels) and cross demand (demand for one good in relation to another's price). Other important types are individual and market demand, short-run and long-run demand, derived demand (for factors of production), joint demand (for complementary goods), competitive demand (for substitutes), composite demand (a good with several uses), direct and indirect demand, and demand for durable versus non-durable goods. Demand analysis uses demand schedules and curves, elasticity concepts and forecasting techniques.",
          "explanation": "It defines demand analysis and systematically lists its principal types with a brief explanation of each, as the question demands.",
          "oneShotPreview": "Study of demand and its determinants; types include price, income, cross, derived, joint, competitive and composite demand."
        },
        {
          "q": "5 b) The demand for a particular product depends on several factors –Discuss.",
          "a": "The demand for a product depends on many factors. The most important is its own price, with demand varying inversely with price. Other determinants are consumers' income (normal goods rise with income, inferior goods fall), prices of related goods (substitutes and complements), tastes and fashion, population size and composition, expectations about future prices and income, advertising and promotional effort, government policy such as taxes and subsidies, seasonal and climatic conditions, the distribution of income, availability of credit, and habits, customs and social attitudes. Of these, the firm can usually control price, product quality and promotion, while the rest form the external environment it must adapt to.",
          "explanation": "It discusses the full set of standard demand determinants and distinguishes the firm's controllable factors from external ones.",
          "oneShotPreview": "Demand depends on price, income, related-good prices, tastes, population, expectations, advertising, policy, season and habits."
        },
        {
          "q": "6 Describe the \"Law of Demand\" and its exceptions with diagram.",
          "a": "The law of demand states that, other things being equal, when the price of a good falls its quantity demanded rises and when price rises quantity demanded falls. With price on the vertical axis and quantity on the horizontal axis this is shown by a downward-sloping demand curve DD: at the high-price point A the quantity is small, and at the lower-price point B the quantity is larger, so the movement is down and along the curve. Important exceptions are: (1) Giffen goods — inferior staples where the income effect outweighs the substitution effect, so a price rise increases demand; (2) Veblen or status goods — high price adds prestige and raises demand; (3) speculative goods — buyers expect prices to keep rising and buy more at higher prices; (4) ignorance or habit — consumers judge quality by price or buy out of habit; and (5) panic buying of necessities in emergencies. Changes in income, tastes or related prices shift the whole curve and only appear to violate the law because ceteris paribus no longer holds.",
          "explanation": "It states the law, describes the downward-sloping demand curve as the diagram, and lists the recognised exceptions with reasons.",
          "oneShotPreview": "Inverse price-demand relation (downward DD curve); exceptions: Giffen goods, Veblen goods, speculation, habit, panic buying."
        },
        {
          "q": "7 What do you mean by elasticity of demand? State the different types of elasticity of demand.",
          "a": "Elasticity of demand measures how responsive quantity demanded is to a change in price (or another determinant); it is the percentage change in quantity demanded divided by the percentage change in price. The types are: (1) perfectly elastic demand (Ed = infinite) — a horizontal curve where a tiny price change causes an unlimited change in demand; (2) perfectly inelastic demand (Ed = 0) — a vertical curve where demand is unchanged whatever the price; (3) unitary elastic demand (Ed = 1) — proportionate change in price and quantity; (4) relatively elastic demand (Ed > 1) — demand changes more than price, typical of luxuries; and (5) relatively inelastic demand (Ed < 1) — demand changes less than price, typical of necessities. Classified by determinant, demand may also have price, income, cross and promotional elasticity.",
          "explanation": "It defines elasticity as a responsiveness measure and states all five standard types with their Ed values.",
          "oneShotPreview": "Five types: perfectly elastic, perfectly inelastic, unitary, relatively elastic and relatively inelastic demand."
        },
        {
          "q": "8 Define the elasticity of demand? List out the factors governing elasticity of demand.",
          "a": "Elasticity of demand is the degree of responsiveness of quantity demanded to a change in price, measured as the percentage change in quantity demanded divided by the percentage change in price. The factors governing it are: the nature of the commodity (necessities inelastic, luxuries elastic), the availability of close substitutes (more substitutes make demand more elastic), the proportion of income spent on the good (a larger share makes it more elastic), the time period (demand is more elastic in the long run), durability (durable goods are more elastic), the number of uses of the commodity, habit and addiction (addictive goods are inelastic), the price range, consumer income and social status, government taxes and policy, and how widely the market is defined (broad markets inelastic, a single brand elastic).",
          "explanation": "It defines elasticity and lists the standard determinants that make demand elastic or inelastic, which is exactly what the question asks for.",
          "oneShotPreview": "Governed by necessity vs luxury, substitutes, income share, time, durability, uses, habits and market definition."
        },
        {
          "q": "9 How do you measure elasticity of demand? Illustrate How you interpret the different Type of elasticity.",
          "a": "Elasticity of demand can be measured in four main ways. (1) The percentage or ratio method: Ed = percentage change in quantity demanded / percentage change in price. (2) The total expenditure (outlay) method: if price and total expenditure move in opposite directions demand is elastic (Ed>1); if they move in the same direction it is inelastic (Ed<1); if expenditure is unchanged it is unitary (Ed=1). (3) The point elasticity method: at a point on the curve, Ed = (dQ/dP) x (P/Q), or for a straight-line demand curve the ratio of the lower segment to the upper segment. (4) The arc elasticity method using the midpoint formula over a range. Interpretation: Ed>1 means a price cut raises total revenue, Ed<1 means a price cut lowers revenue, Ed=1 leaves revenue unchanged, Ed=0 is perfectly inelastic and Ed=infinite is perfectly elastic; similarly income elasticity is positive for normal and negative for inferior goods, and cross elasticity is positive for substitutes and negative for complements.",
          "explanation": "It explains all four measurement methods and then interprets each elasticity value, covering both parts of the question.",
          "oneShotPreview": "Measure by percentage, total outlay, point or arc method; Ed>1 elastic, <1 inelastic, =1 unitary."
        },
        {
          "q": "10 What do you mean by demand forecasting? Explain various demand forecasting techniques.",
          "a": "Demand forecasting is the process of estimating the future demand for a product or service using past data, present trends and relevant factors. It supports production planning, inventory control, pricing, budgeting and capacity decisions. Its techniques fall into two broad groups. Qualitative methods include consumer surveys, sales-force opinion, executive opinion, the Delphi method of experts and market tests. Quantitative methods include time-series analysis — trend projection by least squares, moving averages, exponential smoothing and seasonal analysis — and causal or econometric methods such as regression analysis relating demand to price, income and advertising, and input-output analysis. Other simple approaches are the naive method (last period's demand) and barometric methods using leading indicators. The choice depends on data availability, the time horizon and the accuracy required.",
          "explanation": "It defines demand forecasting, states its uses and explains the main qualitative, time-series and causal techniques.",
          "oneShotPreview": "Estimating future demand; techniques: surveys/Delphi, moving averages, trend projection, exponential smoothing and regression."
        },
        {
          "q": "11 Define demand forecasting and explain factors governing demand forecasting.",
          "a": "Demand forecasting is the estimation of the future demand for a product or service based on past data, current trends and relevant influencing factors, so that the firm can plan production, inventory, pricing and capacity. The factors governing it are: the time horizon (longer-range forecasts are less reliable), the availability and quality of past data, the nature of the product (durable, perishable, industrial or consumer), market conditions such as competition and business cycles, changes in consumer income, tastes and population, price changes and competitors' strategies, government policy, taxation and regulation, seasonal and climatic variation, advertising and promotional effort, technological change and substitutes, and the accuracy required versus the cost of forecasting. The expertise of the forecaster and the techniques available also affect the result.",
          "explanation": "It defines forecasting and lists the main factors that determine the choice and accuracy of a demand forecast.",
          "oneShotPreview": "Future-demand estimation governed by horizon, data quality, product type, market conditions, competition, policy and season."
        }
      ]
    },
    "2": {
      "unitTitle": "Production & Cost Analysis",
      "totalQuestions": 16,
      "questions": [
        {
          "q": "1 a) Define production function?",
          "a": "A production function is the technological relationship that specifies the maximum output obtainable from a given combination of inputs (factors of production such as labour and capital) per period of time, using the best available technology. It is written as Q = f(L, K, ...), where Q is output and L and K are the quantities of labour and capital. It expresses technical/engineering efficiency rather than economic efficiency, since it shows the physical maximum achievable from each input set. In the short run at least one factor is fixed, while in the long run all factors are variable.",
          "explanation": "The definition captures the input-output relationship, the 'maximum output' condition and the role of technology, which are the essential elements examined in production theory.",
          "oneShotPreview": "Q = f(L,K): max output from given inputs and technology; technical, not economic, efficiency."
        },
        {
          "q": "1 b) What is Breakeven point?",
          "a": "The break-even point (BEP) is the level of output or sales at which total revenue exactly equals total cost, so the firm earns zero profit and incurs no loss. At this point total contribution (sales minus variable cost) just covers total fixed cost. It may be expressed in physical units (break-even volume) or in money terms (break-even sales value). It is the central tool of cost-volume-profit analysis used in pricing, production and profit-planning decisions.",
          "explanation": "Defining BEP as TR = TC (zero profit) and noting its two measurement forms covers what examiners expect for a 2-mark definition.",
          "oneShotPreview": "BEP = output where Total Revenue = Total Cost, profit = 0; stated in units or sales value."
        },
        {
          "q": "1 c) Define fixed cost with examples?",
          "a": "Fixed costs are costs that do not change with the level of output in the short run; they remain the same whether the firm produces zero units or its full capacity. Examples include factory/building rent, depreciation of machinery, salaries of permanent staff, insurance premiums, property tax and interest on borrowed capital. Because they are incurred even at zero output, fixed costs must be recovered before a firm begins to earn profit. In the long run, however, all costs become variable as the firm can change its scale of operations.",
          "explanation": "The answer states the constancy-with-output property, gives standard examples and adds the short-run/long-run qualification that distinguishes fixed cost correctly.",
          "oneShotPreview": "Fixed cost = cost unchanged by output (rent, depreciation, salaries); incurred even at zero output."
        },
        {
          "q": "1 d) Write formula for BEP?",
          "a": "Break-even point in units = Total Fixed Cost / Contribution per unit = F / (P - V), where P is selling price per unit and V is variable cost per unit. Break-even sales value = BEP (units) x P, or equivalently Fixed Cost / (P/V ratio), where P/V ratio = Contribution / Sales. The related Margin of Safety = Actual Sales - Break-even Sales. These formulas assume a constant selling price and constant variable cost per unit within the relevant range of output.",
          "explanation": "Giving both the unit and sales-value formulas plus the P/V-ratio form and the margin-of-safety relation covers the complete expected answer.",
          "oneShotPreview": "BEP units = Fixed Cost / (Price - Variable cost); BEP sales = Fixed Cost / P-V ratio."
        },
        {
          "q": "1 e) What are isoquants features?",
          "a": "An isoquant (equal-product curve) shows all combinations of two inputs, such as labour and capital, that produce the same quantity of output. Its main features are: (1) it slopes downward to the right, so reducing one input requires increasing the other to keep output constant; (2) it is convex to the origin because of diminishing marginal rate of technical substitution; (3) higher isoquants represent larger output levels and two isoquants can never intersect; (4) isoquants are continuous and smooth when inputs are divisible. Isoquants are the production-theory counterpart of indifference curves in consumer theory.",
          "explanation": "Listing the four standard properties - negative slope, convexity, non-intersection/higher-is-better and continuity - is the textbook answer for this definition question.",
          "oneShotPreview": "Isoquant = equal-output curve; downward sloping, convex to origin, non-intersecting, higher = more output."
        },
        {
          "q": "2 Given a production scenario where labor is the only variable input, apply the production function to determine how changes in the number of workers affect output.",
          "a": "With labour (L) as the only variable input and capital fixed, the short-run production function is Q = f(L, K-bar). As more workers are employed, total product (TP) first rises at an increasing rate, then at a decreasing rate, and eventually falls. This pattern follows the law of diminishing marginal returns: because the fixed capital must be shared among more workers, the marginal product (MP = change in TP / change in L) declines and may become negative. Average product (AP = TP/L) rises while MP exceeds AP and falls once MP drops below AP. The rational firm stops adding workers where the value of the marginal product equals the wage rate (VMPL = w), which lies in stage II of production.",
          "explanation": "The answer applies the short-run production function through TP, AP and MP and identifies diminishing returns and the profit-maximising employment rule, which is exactly what the question asks.",
          "oneShotPreview": "With capital fixed, more workers -> TP up, then MP falls (diminishing returns); hire until VMPL = wage."
        },
        {
          "q": "3 Explain the concept of isoquants and iso-costs. How do they help firms determine the least cost combination of inputs?",
          "a": "An isoquant shows every combination of two inputs (labour and capital) yielding the same output, while an isocost line shows every combination costing the same total amount, given by C = wL + rK (w = wage, r = rental rate of capital). The least-cost combination for producing a target output occurs where the isoquant is tangent to the lowest attainable isocost line. At that tangency the slopes are equal, giving the producer-equilibrium condition MRTS(L for K) = w/r, or equivalently MPL/MPK = w/r. The same tangency also gives the maximum output for a given cost when the highest attainable isoquant just touches the isocost line.",
          "explanation": "Defining both curves, locating the optimum at tangency and stating the MRTS = input-price-ratio condition fully answers how the tools yield the least-cost input mix.",
          "oneShotPreview": "Least-cost mix = tangency of isoquant and isocost, where MRTS(L,K) = w/r (MPL/MPK = price ratio)."
        },
        {
          "q": "4 Explain the assumptions made during Break-even Analysis. How do these assumptions impact the validity of the analysis?",
          "a": "Break-even analysis assumes: (1) selling price per unit is constant; (2) variable cost per unit is constant and changes linearly with output; (3) fixed costs remain constant over the relevant range; (4) all units produced are sold, so inventory is unchanged; (5) a single product or a constant sales mix; and (6) technology, efficiency and the time value of money are ignored. These assumptions make the model simple and quick to apply, but they restrict its validity because in practice prices change with discounts, costs vary with overtime or bulk buying, fixed costs rise in steps at capacity limits, and inventories fluctuate. Consequently the computed break-even point is only an approximation, reliable within a narrow relevant range and for a short period; it should be treated as an estimate and revised whenever prices or costs change.",
          "explanation": "The answer lists the standard assumptions and then directly addresses their effect on validity - simplicity gained at the cost of realism - which is the second half of the question.",
          "oneShotPreview": "Assumes constant price, linear costs, no inventory change -> simple but only an approximation in the relevant range."
        },
        {
          "q": "5 Analyze a graph showing total costs and revenue. At what point do the two lines intersect, and what does this tell you about the business's financial situation?",
          "a": "On a break-even chart the total cost (TC) line and total revenue (TR) line intersect at the break-even point, the output level where TR equals TC and profit is zero. To the left of this point TC lies above TR, so the business is losing money because sales have not yet covered fixed costs. To the right of it TR lies above TC, and the vertical gap between the two lines measures the profit earned at each output level. The intersection therefore reveals the minimum sales volume needed to avoid losses and how profit grows as output expands beyond it.",
          "explanation": "It identifies the intersection as the break-even point and interprets the loss region, profit region and gap on both sides, which is precisely what a graph-analysis question requires.",
          "oneShotPreview": "TR and TC cross at BEP (zero profit); left = loss zone, right = profit zone, gap = profit."
        },
        {
          "q": "6 What is break even analysis? How do you determine breakeven point? Illustrate. [L1] [CO2] [10M]",
          "a": "Break-even analysis is a cost-volume-profit technique that examines the relationship between costs, sales volume and profit to find the level of output at which total revenue equals total cost, giving zero profit or loss. The break-even point in units is found as Fixed Cost / Contribution per unit = F / (P - V); in sales value it is Fixed Cost / (P/V ratio), and graphically it is where the TR and TC lines cross on a break-even chart. For illustration, with fixed cost Rs 50,000, selling price Rs 50 and variable cost Rs 25, contribution is Rs 25 per unit, so BEP = 50,000 / 25 = 2,000 units, i.e. sales of Rs 1,00,000. Below 2,000 units the firm loses; above it, each extra unit adds Rs 25 to profit. The analysis also gives the margin of safety as actual sales minus break-even sales.",
          "explanation": "It defines the technique, gives both computational methods with formulas, illustrates with a worked numeric example and notes the margin of safety, matching a 10-mark theory question.",
          "oneShotPreview": "BEA = cost-volume-profit tool; BEP = F/(P-V); example F=50,000, P=50, V=25 -> 2,000 units."
        },
        {
          "q": "7 A firm has a fixed cost of Rs 50,000/-, selling price per unit Rs 50/- and variable cost per unit Rs 25/-; present level of production is 3,500 units. i) Determine BEP in terms of volume and also sales value. ii) Calculate the margin of safety. iii) What is the change in BEP and margin of safety if fixed cost increases from Rs 50,000/- to Rs 60,000/-? [L4] [CO2] [10M]",
          "a": "Contribution per unit = P - V = Rs 50 - Rs 25 = Rs 25. (i) BEP (volume) = Fixed Cost / Contribution = 50,000 / 25 = 2,000 units; BEP (sales value) = 2,000 x Rs 50 = Rs 1,00,000. (ii) Actual sales = 3,500 x Rs 50 = Rs 1,75,000, so Margin of Safety = Rs 1,75,000 - Rs 1,00,000 = Rs 75,000 (equivalently 3,500 - 2,000 = 1,500 units). (iii) With fixed cost of Rs 60,000, new BEP = 60,000 / 25 = 2,400 units = Rs 1,20,000 and new MOS = Rs 1,75,000 - Rs 1,20,000 = Rs 55,000 (1,100 units). Thus a Rs 10,000 rise in fixed cost increases BEP by 400 units (Rs 20,000) and reduces the margin of safety by Rs 20,000.",
          "explanation": "Each subpart is solved with the standard contribution approach, and part (iii) correctly compares the new BEP and MOS with the original values to state the change.",
          "oneShotPreview": "Contribution 25; BEP 2,000 units / Rs 1,00,000; MOS Rs 75,000; at F=60,000 -> BEP 2,400, MOS Rs 55,000."
        },
        {
          "q": "8 a) A firm has fixed cost of Rs 10,000/-, selling price per unit Rs 5/- and variable cost per unit Rs 3/-. Determine break-even point in terms of volume and also sales value. [L4] [CO2] [10M]",
          "a": "Contribution per unit = Selling price - Variable cost = Rs 5 - Rs 3 = Rs 2. BEP in volume (units) = Fixed Cost / Contribution per unit = 10,000 / 2 = 5,000 units. BEP in sales value = 5,000 units x Rs 5 = Rs 25,000 (also obtainable as Fixed Cost / (P/V ratio), where the P/V ratio = 2/5 = 40%). At 5,000 units total revenue of Rs 25,000 exactly equals total cost of Rs 10,000 fixed plus Rs 15,000 variable.",
          "explanation": "The worked solution applies the contribution formula to find both break-even volume and value and verifies the equality of revenue and cost at that point.",
          "oneShotPreview": "Contribution Rs 2; BEP = 10,000/2 = 5,000 units = Rs 25,000 sales (40% P/V ratio)."
        },
        {
          "q": "8 b) Calculate the margin of safety considering that the actual production is 8,000 units. (Fixed cost Rs 10,000/-, selling price Rs 5/- and variable cost Rs 3/- per unit.) [L4] [CO2] [10M]",
          "a": "Break-even sales = 5,000 units x Rs 5 = Rs 25,000 (from part a). Actual sales at 8,000 units = 8,000 x Rs 5 = Rs 40,000. Margin of Safety = Actual Sales - Break-even Sales = Rs 40,000 - Rs 25,000 = Rs 15,000. In physical terms it is 8,000 - 5,000 = 3,000 units, meaning the firm can withstand a fall of 3,000 units in sales before it starts making a loss. As a percentage of actual sales the MOS is 15,000/40,000 = 37.5%.",
          "explanation": "It computes actual sales, subtracts the previously found break-even sales, and expresses the margin of safety in value, units and percentage for completeness.",
          "oneShotPreview": "Actual sales Rs 40,000 - BEP Rs 25,000 = MOS Rs 15,000 = 3,000 units = 37.5% of sales."
        },
        {
          "q": "9 From the following information relating to Hi-Tech publishers, you are required to find out i) Break-even point and ii) Margin of Safety. Year 1 (Rs.): Sales 50,000; Fixed cost 10,000; Variable cost 30,000. Year 2 (Rs.): Sales 1,20,000; Fixed cost 20,000; Variable cost 60,000. [L5] [CO2] [10M]",
          "a": "Year 1: Contribution = Sales - Variable cost = 50,000 - 30,000 = Rs 20,000; P/V ratio = 20,000/50,000 = 40%. (i) BEP = Fixed cost / P/V ratio = 10,000 / 0.40 = Rs 25,000. (ii) Margin of Safety = Actual sales - BEP sales = 50,000 - 25,000 = Rs 25,000. Year 2: Contribution = 1,20,000 - 60,000 = Rs 60,000; P/V ratio = 60,000/1,20,000 = 50%. (i) BEP = 20,000 / 0.50 = Rs 40,000. (ii) Margin of Safety = 1,20,000 - 40,000 = Rs 80,000. The higher P/V ratio in Year 2 lowers the break-even sales relative to turnover and raises the margin of safety.",
          "explanation": "Using the contribution/P-V-ratio method for both years gives each required figure and the closing comparison explains the effect of the improved contribution margin.",
          "oneShotPreview": "Year 1: P/V 40%, BEP Rs 25,000, MOS Rs 25,000; Year 2: P/V 50%, BEP Rs 40,000, MOS Rs 80,000."
        },
        {
          "q": "10 Explain the concepts of short-run and long-run production in the production function. How does the level of variable and fixed inputs differ between the two? [L2] [CO2] [10M]",
          "a": "In the short run at least one factor of production is fixed, usually capital/plant, while other factors such as labour and raw materials are variable. Output can change only by applying more or fewer variable inputs to the fixed factor, which gives rise to the law of diminishing marginal returns and the familiar S-shaped total product curve. In the long run all factors are variable: the firm can change plant size, machinery and the entire scale of operations, so there are no fixed costs and it can choose the most efficient scale. The short run is therefore a period too brief to alter fixed inputs, whereas the long run is long enough to adjust every input. This distinction underlies short-run cost curves with a fixed-cost component and the long-run average cost curve exhibiting economies and diseconomies of scale.",
          "explanation": "The answer contrasts the two periods by the fixity of inputs, links the short run to diminishing returns and the long run to scale adjustments and cost behaviour, covering both parts of the question.",
          "oneShotPreview": "Short run: some fixed input (capital), only labour varies -> diminishing returns. Long run: all inputs variable, scale can change."
        },
        {
          "q": "11 A high-tech rail can carry a maximum of 36,000 passengers per annum at a fare of Rs 400. The variable cost per passenger is Rs 150 while the fixed costs are Rs 25,00,000 per year. Find the break-even point in terms of number of passengers and also in terms of fare collections. [L5] [CO2] [10M]",
          "a": "Contribution per passenger = Fare - Variable cost = Rs 400 - Rs 150 = Rs 250. Break-even point in passengers = Fixed cost / Contribution per passenger = 25,00,000 / 250 = 10,000 passengers per year. Break-even in fare collections = 10,000 x Rs 400 = Rs 40,00,000 (Rs 40 lakh). This is about 27.8% of the 36,000-passenger capacity, so the service covers all costs well before running full; at full capacity it would earn a profit of (36,000 x Rs 250) - Rs 25,00,000 = Rs 65,00,000.",
          "explanation": "It computes the per-passenger contribution, applies the BEP formula in both units and money, and relates the result to capacity to interpret the figure.",
          "oneShotPreview": "Contribution Rs 250; BEP = 25,00,000/250 = 10,000 passengers = Rs 40 lakh fare collections (~28% capacity)."
        }
      ]
    },
    "3": {
      "unitTitle": "Business Organizations and Markets",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "a) Define sole trader?",
          "a": "A sole trader (sole proprietorship) is a business owned, controlled and managed by a single individual who alone enjoys all the profits and bears all the losses and risks. There is no separate legal entity: the owner and the business are one, so the owner has unlimited liability for business debts. It is the simplest and most common form of business organization, typically used for small shops and personal service businesses.",
          "explanation": "This defines the sole trader form and states its three identifying traits: a single owner, no separate legal personality, and unlimited liability.",
          "oneShotPreview": "Sole trader = one owner, full control, unlimited liability."
        },
        {
          "q": "a) What are meant Partnership Deed?",
          "a": "A Partnership Deed is a written legal agreement between the partners that records the terms and conditions governing the partnership. It specifies the profit-and-loss sharing ratio, capital contributions, roles, interest on capital, partner salaries, admission or retirement of partners, and dispute resolution. Although it is not legally compulsory, it is strongly recommended because it prevents misunderstandings and serves as evidence if disputes arise.",
          "explanation": "The deed is the documentary basis of a partnership; defining rights, duties and profit-sharing is exactly what the question asks for.",
          "oneShotPreview": "Partnership Deed = written agreement recording partners' terms and profit-sharing ratio."
        },
        {
          "q": "b) Define market structure?",
          "a": "Market structure refers to the organizational and competitive characteristics of a market — the features that determine how buyers and sellers interact, how prices are set and how firms compete. It is classified mainly by the number of buyers and sellers, the degree of product differentiation and the ease of entry and exit. The main types are perfect competition, monopolistic competition, oligopoly and monopoly.",
          "explanation": "The answer defines market structure by its determining features and names the standard classification, matching the 2-mark definition.",
          "oneShotPreview": "Market structure = competitive features of a market; ranges from perfect competition to monopoly."
        },
        {
          "q": "c) Explain about marker Penetration?",
          "a": "Market penetration (spelt 'marker' in the question paper) is a growth strategy and measure of how deeply a product has captured an existing market — the share of current customers compared with total potential customers. It is achieved by winning competitors' customers, increasing usage among existing customers, and using aggressive pricing, promotion and wider distribution. High penetration means a large share of an established market with little focus on developing new markets.",
          "explanation": "The question intends market penetration; the answer explains it as growing share in an existing market rather than entering new markets.",
          "oneShotPreview": "Market penetration = growing share in an existing market through pricing, promotion and distribution."
        },
        {
          "q": "d) What is meant by monopoly?",
          "a": "Monopoly is a market structure in which there is a single seller of a product that has no close substitutes, so the firm controls the entire market supply and can influence the price. Entry of new firms is blocked by barriers such as patents, licences or high setup costs. Common examples are public utilities and patented products.",
          "explanation": "Monopoly is correctly defined by a single seller, absence of close substitutes and strong entry barriers, which give the firm price-making power.",
          "oneShotPreview": "Monopoly = single seller, no close substitutes, price maker."
        },
        {
          "q": "I'm deciding between starting a business as a sole trader or entering a partnership. What are the key advantages and disadvantages of each structure?",
          "a": "A sole trader is easy and cheap to start, enjoys full control and all profits, keeps affairs private and has minimal legal formalities, but suffers unlimited liability, limited capital, no continuity and bears all risk alone. A partnership combines the skills, capital and resources of two or more partners and shares the risk, and is still easy to form with few legal restrictions, but it brings shared control, joint and unlimited liability, possible disputes between partners and limited growth capital. In short, choose sole trader for a simple one-person venture and a partnership when complementary skills and pooled capital justify sharing control and risk.",
          "explanation": "The answer compares both forms on formation ease, control, liability, capital, risk and continuity, which is what a 10-mark comparison requires.",
          "oneShotPreview": "Sole trader = simple, full control, unlimited liability; partnership = pooled skills and capital, shared control and risk."
        },
        {
          "q": "a) What is an oligopoly, and what are its key features?",
          "a": "Oligopoly is a market structure in which a few large firms dominate the market and each firm's pricing or output decisions affect the others, so firms are highly interdependent. Its key features are: a small number of sellers, high barriers to entry, products that may be identical or differentiated, heavy advertising and brand competition, and a tendency toward price rigidity or collusion through cartels. Firms often follow a price leader instead of competing freely on price.",
          "explanation": "The answer identifies oligopoly and lists its defining features — few interdependent firms, entry barriers and price rigidity or collusion.",
          "oneShotPreview": "Oligopoly = few dominant interdependent firms with entry barriers and price rigidity."
        },
        {
          "q": "b) Explain the key features of perfect competition and imperfect competition. How do they differ in terms of market structure and pricing?",
          "a": "Perfect competition has a very large number of buyers and sellers, homogeneous products, free entry and exit and perfect information, so each firm is a price taker, price equals marginal cost and only normal profit is earned in the long run. Imperfect competition (monopolistic competition, oligopoly and monopoly) has fewer sellers, differentiated or unique products and entry barriers, so firms have some price-making power and can earn supernormal profits. The central difference is that under perfect competition the market sets the price and the firm simply accepts it, while under imperfect competition each firm can influence price through product differentiation, branding or restricted output.",
          "explanation": "The answer contrasts both structures on number of firms, product nature, entry freedom and pricing power, directly answering both parts of the question.",
          "oneShotPreview": "Perfect competition = price takers with uniform products; imperfect competition = firms influence price through differentiation."
        },
        {
          "q": "Given a scenario where an individual wants to start a small local shop, how would the sole trader form of business organization benefit this individual?",
          "a": "For a small local shop, sole tradership is ideal because it can be started with minimal cost and legal formalities, the owner keeps all profits and has complete control over decisions, and the business can be run using personal savings and family labour. The owner can adapt quickly to local customer needs and keep business information private. The main caution is unlimited liability — personal assets are at risk — but for a small, low-risk local shop the simplicity, autonomy and low overhead usually outweigh that drawback.",
          "explanation": "The answer applies the sole trader advantages of easy formation, low cost, full control and quick decisions to the specific small-local-shop context while noting the liability caveat.",
          "oneShotPreview": "Sole trader suits a small local shop: cheap, simple, full control and all profits."
        },
        {
          "q": "Explain the concept of a Joint Stock Company. How does it differ from other forms of business organizations such as sole proprietorships or partnerships?",
          "a": "A Joint Stock Company is a business owned by many shareholders whose capital is divided into transferable shares, and it is registered as a separate legal entity distinct from its members. Unlike a sole proprietorship or partnership, it has perpetual existence, limited liability for shareholders and the ability to raise large capital by issuing shares to the public. Management is handled by a board of directors and ownership can be transferred easily through share transactions. Sole proprietorships and partnerships depend on the personal resources of one or a few owners, carry unlimited liability and lack a separate legal identity and continuity.",
          "explanation": "The answer explains the company form and contrasts it on legal identity, liability, capital raising, continuity and transferability of ownership.",
          "oneShotPreview": "Joint Stock Company = separate legal entity, share capital, limited liability and perpetual life."
        },
        {
          "q": "What is a partnership? What are the key characteristics of a partnership form of organization?",
          "a": "A partnership is a business arrangement in which two or more persons agree to share the profits of a business run by them jointly or by one of them on behalf of all. Its key characteristics are: two or more partners, a written partnership deed, sharing of profits and losses in an agreed ratio, joint and unlimited liability, mutual agency (each partner can bind the firm), no separate legal entity, and dissolution on the death, insolvency or retirement of a partner unless otherwise agreed.",
          "explanation": "The answer defines partnership and lists its essential features, covering both parts of the 10-mark question.",
          "oneShotPreview": "Partnership = 2+ partners sharing profits, mutual agency, unlimited joint liability, no separate legal entity."
        },
        {
          "q": "Explain the concept of market structure. How are markets classified based on the degree of competition?",
          "a": "Market structure is the set of features that determine the competitive environment in which a firm operates — chiefly the number of buyers and sellers, the nature of the product and the freedom of entry and exit. Based on the degree of competition, markets are classified into four types: perfect competition (many sellers, identical products, no barriers), monopolistic competition (many sellers, differentiated products), oligopoly (a few large interdependent sellers) and monopoly (a single seller with no close substitutes). As competition falls from perfect competition to monopoly, an individual firm's control over price increases.",
          "explanation": "The answer defines market structure and gives the standard four-way classification ordered from most to least competitive.",
          "oneShotPreview": "Markets classified by competition: perfect, monopolistic, oligopoly, monopoly."
        },
        {
          "q": "a) Define market and explain features of monopoly.",
          "a": "A market is any arrangement or place where buyers and sellers come together to exchange goods or services at an agreed price. A monopoly is a market with a single seller and no close substitutes for its product. Its main features are: one seller controlling the entire supply, absence of close substitutes, strong barriers to entry (patents, licences, economies of scale), the firm as a price maker, and the likelihood of supernormal profit in the long run; price discrimination may also be present.",
          "explanation": "The answer first defines a market and then lists the defining features of monopoly, covering both parts of the sub-question.",
          "oneShotPreview": "Market = exchange venue; monopoly = one seller, no substitutes, price maker, entry barriers."
        },
        {
          "q": "b) What is meant by perfect competition? Explain its features.",
          "a": "Perfect competition is a market structure with a very large number of buyers and sellers where all firms sell an identical (homogeneous) product and no single firm can influence the market price. Its features are: many buyers and sellers, uniform product, free entry and exit, perfect knowledge and price-taking firms. Since price is determined by industry demand and supply, each firm earns only normal profit in the long run and produces where price equals marginal cost.",
          "explanation": "The answer defines perfect competition and lists its standard features together with the price-taking and normal-profit implications.",
          "oneShotPreview": "Perfect competition = many firms, identical product, free entry, price takers."
        },
        {
          "q": "Define a Monopoly market? How the Price-Output determination is made under Monopoly Markets? Explain with a diagram.",
          "a": "A monopoly is a market in which a single seller controls the entire supply of a product having no close substitutes. The monopolist fixes the profit-maximizing output where marginal revenue equals marginal cost (MR = MC), then reads the corresponding price from the downward-sloping demand (average revenue) curve, so the price is above marginal cost. In the diagram, draw the downward-sloping AR/D curve with a steeper MR curve, plus the MC and AC curves: the MR = MC intersection determines output Qm, and the price Pm is read upward on the demand curve; supernormal profit equals (Pm − AC) × Qm. Unlike perfect competition, the monopolist has no unique supply curve and can earn long-run excess profit.",
          "explanation": "The answer defines monopoly and explains the MR = MC profit-maximizing rule and demand-curve price reading, which is exactly what the diagram question tests.",
          "oneShotPreview": "Monopoly price-output: set MR = MC, read price on demand curve; P > MC, possible supernormal profit."
        },
        {
          "q": "If you were to start a new business, which form of business organization would you choose and why?",
          "a": "For a small new venture I would choose the sole proprietorship because it is the easiest and cheapest to establish, needs minimal legal formalities, gives complete control and all profits to the owner, and allows quick decisions suited to local customers. If the venture needed pooled capital or complementary skills, a partnership would be a good alternative, while a company would be preferable only for a large, high-growth business needing public capital and limited liability. The right choice therefore depends on scale, capital requirement and willingness to bear risk; for a typical small start-up the simplicity and autonomy of a sole proprietorship outweigh its unlimited-liability drawback.",
          "explanation": "The answer makes a justified choice and explains the reasoning while acknowledging alternatives, as expected of a 10-mark application question.",
          "oneShotPreview": "Choose sole proprietorship for a small start-up: cheap, simple, full control; scale decides."
        },
        {
          "q": "a) If you were launching a new product in a competitive market, which of the five pricing methods would you choose and why?",
          "a": "The five pricing methods are cost-plus (mark-up) pricing, target-return pricing, demand/value-based pricing, competition-based pricing and new-product penetration or skimming pricing. For a new product in a competitive market I would choose penetration pricing — a low initial price to capture market share quickly, discourage rivals and build customer loyalty — because buyers can be attracted away from established brands. Once a loyal base is built the price can be raised gradually. For a highly innovative product, skimming or value-based pricing might be better, but for an ordinary competitive launch penetration pricing best balances share gain and risk.",
          "explanation": "The answer names the five methods and justifies penetration pricing with reasons tied specifically to a competitive market, satisfying both parts of the question.",
          "oneShotPreview": "Pick penetration pricing for a competitive launch: a low price wins share fast."
        },
        {
          "q": "b) Distinguish between monopoly and perfect competition.",
          "a": "Under perfect competition there are many buyers and sellers, products are homogeneous, entry and exit are free, and firms are price takers with price equal to marginal cost and only normal profit in the long run. Under monopoly there is a single seller, no close substitutes, strong entry barriers, and the firm is a price maker with price above marginal cost and possible long-run supernormal profit. A perfectly competitive firm faces a horizontal demand curve and has a well-defined supply curve, whereas the monopolist faces the downward-sloping market demand curve and has no unique supply curve; monopolists may also practise price discrimination, which is impossible under perfect competition.",
          "explanation": "The answer distinguishes the two structures on number of sellers, products, entry barriers, price control, profits and demand curve — the standard comparison points.",
          "oneShotPreview": "Perfect competition = many price takers; monopoly = one price maker with barriers and supernormal profit."
        }
      ]
    },
    "4": {
      "unitTitle": "Capital Budgeting",
      "totalQuestions": 20,
      "questions": [
        {
          "q": "1 a) Explain types of capital?",
          "a": "Capital employed in a business can be classified in several ways. By ownership/source: (1) Equity capital - the owners' funds such as ordinary share capital, preference share capital and retained earnings, which carry ownership rights and no fixed repayment; and (2) Debt capital - borrowed funds such as debentures, bonds and term loans, which carry a fixed interest obligation and must be repaid. By purpose: (3) Fixed capital - long-term funds invested in fixed assets like land, building and machinery; and (4) Working capital - short-term funds needed for day-to-day operations such as stock, debtors and cash. By time horizon: long-term capital (over one year) and short-term capital. By origin: internal capital (retained profits, depreciation) and external capital (shares, debentures, bank loans). The right mix of these types determines a firm's cost of capital and financial risk.",
          "explanation": "It gives the standard classifications of capital - equity vs debt, fixed vs working, long vs short term and internal vs external - which is what a 'types of capital' question expects.",
          "oneShotPreview": "Equity vs debt; fixed vs working; long-term vs short-term; internal vs external capital."
        },
        {
          "q": "1 b) What are tangible assets?",
          "a": "Tangible assets are assets that have a physical existence - they can be seen, touched and measured. Examples are land, buildings, plant and machinery, furniture, vehicles, tools and inventories (stock). Because they have physical form, they can be valued, insured, bought and sold, and (except land, which is not depreciated) they are depreciated over their useful life. In the balance sheet they appear at cost less accumulated depreciation. They are contrasted with intangible assets such as goodwill, patents, trademarks and copyrights, which have no physical substance but still carry monetary value.",
          "explanation": "It defines tangible assets by their physical existence, gives examples, notes depreciation treatment and contrasts them with intangible assets.",
          "oneShotPreview": "Assets with physical form (land, building, machinery, stock); depreciated over life; opposite of intangibles."
        },
        {
          "q": "1 c) Define Net Present Value.",
          "a": "Net Present Value (NPV) is the difference between the present value of all future cash inflows from a project and the present value of its cash outflows (initial investment), all discounted at the firm's cost of capital: NPV = Sum of [CFt / (1 + r)^t] - Initial Outlay. Since money received in the future is worth less than money today, each future cash flow is discounted to its present worth. If NPV is positive, the project earns more than the required rate of return and should be accepted; if NPV is negative it should be rejected. NPV directly measures the amount of wealth the project adds to the firm and is therefore considered the most reliable capital-budgeting technique.",
          "explanation": "It gives the definition, the formula, the discounting logic and the accept/reject rule, which fully answer 'define NPV'.",
          "oneShotPreview": "NPV = PV of future cash inflows - initial outlay; accept if NPV > 0; measures wealth created."
        },
        {
          "q": "1 d) Example for current assets.",
          "a": "Current assets are short-term assets that are expected to be converted into cash, sold or used up within one year or one operating cycle. Common examples are: cash in hand and cash at bank; accounts receivable (debtors/sundry debtors) and bills receivable; inventories - raw materials, work-in-progress and finished goods; prepaid expenses such as prepaid rent or insurance; short-term marketable securities; and advances to suppliers and employees. They are listed in the balance sheet in order of liquidity and are essential for meeting the firm's day-to-day working-capital needs.",
          "explanation": "It defines current assets and lists the standard examples, which is exactly what an 'example' question asks for.",
          "oneShotPreview": "Cash, bank, debtors, stock, prepaid expenses, short-term securities - assets realised within a year."
        },
        {
          "q": "1 e) Define Payback period.",
          "a": "The payback period is the length of time required for a project's cumulative cash inflows to recover the original investment. When annual cash inflows are equal, Payback Period = Initial Investment / Annual Cash Inflow; when they are unequal, the inflows are accumulated year by year until the investment is fully recovered (with a fraction of a year for the balance). For example, an outlay of Rs 50,000 yielding Rs 25,000 a year has a payback of 2 years. A shorter payback is preferred because it means faster recovery and lower risk. The method is simple but ignores the time value of money and all cash flows received after the payback date.",
          "explanation": "It defines the term, gives both the equal-flow formula and the unequal-flow method, an example, the decision rule and the main limitation.",
          "oneShotPreview": "Time to recover initial outlay from cash inflows; equal flows: outlay / annual inflow; shorter is better."
        },
        {
          "q": "2 a) What is capital, and why is it needed by businesses?",
          "a": "Capital is the stock of long-term funds and financial resources that a business uses to acquire assets and carry on its operations; it represents the owners' and lenders' stake in the firm. Businesses need capital to purchase fixed assets such as land, buildings, plant and machinery, to provide working capital for raw materials, wages, stock and debtors, to finance expansion and diversification, to replace worn-out or obsolete assets, to repay existing debts and to maintain a cushion against losses and uncertainty. A firm also needs capital simply to begin operations and to meet its day-to-day obligations as they fall due. Without adequate and well-mixed capital a business cannot start, grow, or even survive.",
          "explanation": "It defines capital and then lists the practical reasons a firm needs it - fixed assets, working capital, growth, replacement, debt repayment and risk cushion.",
          "oneShotPreview": "Capital = long-term funds for assets and operations; needed for fixed assets, working capital, growth, replacement and risk cover."
        },
        {
          "q": "2 b) If a company is planning to expand its operations, how might the factors determining the requirement of working capital change?",
          "a": "When a company expands, its working-capital requirement usually rises because a higher level of activity needs more stock, more debtors and more cash. The main factors that determine the requirement are: the scale and growth rate of sales (higher output needs more current assets); the length of the operating/production cycle (a longer cycle locks up funds longer); inventory turnover and the availability of raw materials; the credit policy of the firm - the collection period for debtors and the credit period allowed by suppliers; the turnover of receivables; price levels and inflation; seasonality of demand; and the firm's operating efficiency. During expansion, faster sales growth, larger inventories to support output, more liberal credit to customers and rising prices all increase the funds tied up in working capital, whereas better inventory control, quicker collections and longer supplier credit reduce it.",
          "explanation": "It identifies the determinants of working capital and explains how expansion changes each of them, which is what the question asks.",
          "oneShotPreview": "Expansion raises working capital via higher sales, bigger stock, more debtors and inflation; turnover and credit terms modify the need."
        },
        {
          "q": "3 a) What is the importance of capital budgeting, and what are its limitations?",
          "a": "Capital budgeting is important because it helps a firm choose the most profitable long-term projects, allocate scarce funds efficiently, compare alternative investments on a scientific basis, assess the risk and return of each proposal, maximise shareholder wealth and provide a basis for long-range planning and control. It forces management to forecast cash flows and think carefully about the future. Its limitations are that it depends on uncertain estimates of future cash flows and discount rates, which are difficult to predict; the cost of capital is hard to determine accurately; different techniques may rank projects differently; it often ignores non-financial or qualitative factors; it can be time-consuming and expensive; and its decisions are only as good as the assumptions on which they rest.",
          "explanation": "It balances the benefits of capital budgeting against its practical weaknesses, covering both halves of the question.",
          "oneShotPreview": "Importance: best project selection, efficient fund allocation, wealth maximisation; limits: uncertain forecasts, cost of capital, conflicting rankings."
        },
        {
          "q": "3 b) What is capital budgeting? Explain the significance of capital budgeting.",
          "a": "Capital budgeting is the process of identifying, evaluating, comparing and selecting long-term investment proposals - expenditures on fixed assets whose benefits are spread over several years - in order to allocate the firm's scarce financial resources to the most worthwhile projects. It involves estimating future cash flows, determining an appropriate discount rate (cost of capital) and applying appraisal techniques such as payback period, accounting rate of return, NPV and IRR. Its significance is high because such decisions usually involve large amounts of money, are long-term and often irreversible, directly affect the firm's profitability, growth and risk, and determine its future competitive position. Proper capital budgeting maximises shareholders' wealth by accepting only projects that earn more than the required return and by rejecting unprofitable ones.",
          "explanation": "It defines capital budgeting, describes the evaluation process and explains why the decision is significant - large, long-term, irreversible and value-determining.",
          "oneShotPreview": "Evaluating and selecting long-term investments using NPV/IRR/payback; significant because decisions are large, long-lived and value-determining."
        },
        {
          "q": "4 a) Explain the different major sources of finance that a business can use. How do these sources help in funding business operations?",
          "a": "The major sources of finance are: (1) Equity - owners' capital, ordinary and preference shares and retained earnings, which provide permanent funds without fixed repayment but dilute ownership; (2) Debt - debentures, bonds, term loans from banks and financial institutions and public deposits, which must be repaid with interest but do not dilute control; (3) Short-term sources - trade credit, bills discounting, bank cash credit/overdraft, commercial paper and factoring, which finance day-to-day working capital; (4) Internal sources - retained profits and depreciation provisions; and (5) Other sources - venture capital, leasing, hire purchase and government grants. Together they fund business operations by providing the long-term capital needed to buy fixed assets and the short-term liquidity needed for stock, debtors and routine expenses; the mix chosen affects the firm's cost of capital, risk and control.",
          "explanation": "It enumerates the main sources grouped by type and explains how each contributes to funding fixed and current assets.",
          "oneShotPreview": "Equity, debt, short-term credit, internal profits/depreciation, leasing/venture capital - fund fixed assets and working capital."
        },
        {
          "q": "4 b) What are the advantages and disadvantages of the Payback Method in capital budgeting?",
          "a": "The payback method calculates the time needed to recover the initial investment from project cash inflows. Its advantages are: it is simple to understand and easy to calculate; it gives a quick indication of liquidity and risk because faster recovery means less exposure; it uses cash flows rather than accounting profits; it is useful for screening small projects and for firms facing liquidity constraints; and it helps compare similar projects. Its disadvantages are: it completely ignores the time value of money; it disregards all cash flows generated after the payback period, so it may reject a highly profitable long-term project; its acceptable payback cutoff is arbitrary; it does not measure profitability or wealth creation; and it ignores the salvage value and the pattern of cash flows within the payback period.",
          "explanation": "It lists the recognised merits and demerits of the payback method, balancing simplicity and liquidity insight against its failure to measure true profitability.",
          "oneShotPreview": "Pros: simple, shows liquidity/risk, uses cash flows. Cons: ignores time value, post-payback flows and real profitability."
        },
        {
          "q": "5 a) The cost of project-A is Rs 50,000 and cost of project-B is Rs 1,00,000; the annual cash inflow for the next 4 years is Rs 25,000. What is the payback period for project A and B?",
          "a": "Since the annual cash inflow is equal each year, Payback Period = Initial Investment / Annual Cash Inflow. Project A: 50,000 / 25,000 = 2 years. Project B: 1,00,000 / 25,000 = 4 years. Project A recovers its cost in 2 years and Project B in 4 years, both within the 4-year life. Because a shorter payback means quicker recovery and lower risk, Project A is preferable on this criterion. Note that the method ignores the time value of money and anything that happens after recovery.",
          "explanation": "With level inflows the simple division formula applies; the computed answers are 2 years for A and 4 years for B, and the shorter one is preferred.",
          "oneShotPreview": "Payback A = 50,000/25,000 = 2 years; B = 1,00,000/25,000 = 4 years; A is better."
        },
        {
          "q": "5 b) The cost of a project is Rs. 50,000, which has an expected life of 5 years. The cash inflows for the next 5 years are Rs. 24,000; Rs. 26,000; Rs. 20,000; Rs. 17,000 and Rs. 16,000 respectively. Determine the payback period.",
          "a": "Because the inflows are unequal, cumulative inflows are built up year by year: Year 1 = Rs 24,000; Year 2 = 24,000 + 26,000 = Rs 50,000; Year 3 = Rs 70,000; and so on. The initial outlay of Rs 50,000 is fully recovered exactly at the end of Year 2. Therefore the payback period is exactly 2 years (with no fractional year needed). If part of a year were required, it would be added as (balance still unrecovered / cash inflow of that year).",
          "explanation": "Cumulative cash inflows reach the Rs 50,000 investment precisely after the second year, so the payback is 2 years.",
          "oneShotPreview": "Cumulative inflows: 24,000 then 50,000 - investment recovered exactly in 2 years."
        },
        {
          "q": "6 Two projects, costing Rs 2,50,000 each, have the following cash inflows. Which one do you choose and why? Years 1 2 3 4; Machine X: 90,000; 1,60,000; 1,20,000; 70,000; Machine Y: 1,60,000; 1,20,000; 90,000; 50,000. Calculate: i) Payback period ii) Accounting rate of return.",
          "a": "Payback period (initial outlay Rs 2,50,000): Machine X - cumulative inflows are 90,000; 2,50,000; 3,70,000; 4,40,000, so the cost is recovered exactly at the end of year 2: Payback = 2 years. Machine Y - cumulative inflows are 1,60,000; 2,80,000; 3,70,000; 4,20,000; at the end of year 1, Rs 90,000 remains to be recovered from a year-2 inflow of Rs 1,20,000, so Payback = 1 + 90,000/1,20,000 = 1.75 years. Accounting rate of return: assuming zero salvage, average investment = 2,50,000/2 = Rs 1,25,000 and annual depreciation = 2,50,000/4 = Rs 62,500. Average annual cash inflow = 4,40,000/4 = Rs 1,10,000 for X and 4,20,000/4 = Rs 1,05,000 for Y. Average annual profit = 1,10,000 - 62,500 = Rs 47,500 (X) and 1,05,000 - 62,500 = Rs 42,500 (Y). Hence ARR of X = 47,500/1,25,000 = 38% and ARR of Y = 42,500/1,25,000 = 34%. Machine Y recovers the money faster (1.75 vs 2 years), while Machine X gives the higher return (38% vs 34% ARR) and higher total inflow (Rs 4,40,000 vs Rs 4,20,000). If profitability is the main objective, choose Machine X; if early recovery and liquidity are more important, choose Machine Y.",
          "explanation": "The step-by-step cumulative inflows give paybacks of 2 and 1.75 years, and average profit over average investment gives ARRs of 38% and 34%; the recommendation follows from the trade-off between them.",
          "oneShotPreview": "Payback: X=2 yrs, Y=1.75 yrs; ARR: X=38%, Y=34% - X for profit, Y for quick recovery."
        },
        {
          "q": "7 Consider a company with the following two investment alternatives, each costing Rs. 9 lakhs. Details of cash inflows: Year 1 2 3; Project A: 3,00,000; 5,00,000; 6,00,000; Project B: 6,00,000; 4,00,000; 3,00,000. The cost of capital is 10% per year. Determine NPV for the two projects.",
          "a": "Discount factors at 10% are: Year 1 = 1/1.10 = 0.9091, Year 2 = 1/1.21 = 0.8264, Year 3 = 1/1.331 = 0.7513. Project A: PV = 3,00,000(0.9091) + 5,00,000(0.8264) + 6,00,000(0.7513) = 2,72,727 + 4,13,223 + 4,50,789 = Rs 11,36,739; NPV = 11,36,739 - 9,00,000 = Rs 2,36,739. Project B: PV = 6,00,000(0.9091) + 4,00,000(0.8264) + 3,00,000(0.7513) = 5,45,455 + 3,30,579 + 2,25,394 = Rs 11,01,427; NPV = 11,01,427 - 9,00,000 = Rs 2,01,427. Both projects have positive NPVs, so both are acceptable, but Project A has the higher NPV (Rs 2,36,739 vs Rs 2,01,427) and should be chosen because it adds more wealth, even though Project B receives its cash earlier.",
          "explanation": "Discounting each inflow at 10% and subtracting the Rs 9 lakh outlay gives NPVs of about Rs 2.37 lakh (A) and Rs 2.01 lakh (B); the higher NPV project is preferred.",
          "oneShotPreview": "NPV A = Rs 2,36,739; NPV B = Rs 2,01,427; both positive - choose Project A (higher NPV)."
        },
        {
          "q": "8 a) Explain the concept of the payback period and how it is used in capital budgeting decisions.",
          "a": "The payback period is the number of years required for a project's cumulative cash inflows to equal the original investment; with even inflows it is Initial Investment / Annual Cash Inflow, and with uneven inflows it is found by accumulation plus a fractional year. In capital budgeting it is used as a screening and risk indicator: management sets a maximum acceptable payback (often related to the firm's liquidity or the project's life) and accepts projects that repay within that period, rejecting slower ones. It is especially useful to firms short of cash, for small projects and for ranking projects of similar size and risk, because quicker recovery means less exposure to uncertainty. However, because it ignores the time value of money, cash flows after the payback date and overall profitability, it is normally used together with NPV or IRR rather than as the sole decision rule.",
          "explanation": "It explains what payback measures, how the cutoff rule is applied as a screening/liquidity device and why it is supplemented by discounted methods.",
          "oneShotPreview": "Years to recover investment; accept if below a set cutoff - a simple liquidity/risk screen, used with NPV/IRR."
        },
        {
          "q": "8 b) The cost of the project is Rs. 10,00,000, which has an expected life of five years. The cash inflows for the next five years are Rs. 3,20,000; Rs. 3,80,000; Rs. 3,00,000; Rs. 3,00,000 and Rs. 2,60,000 respectively. Determine the payback period.",
          "a": "Accumulate the unequal cash inflows year by year: end of Year 1 = Rs 3,20,000; end of Year 2 = 3,20,000 + 3,80,000 = Rs 7,00,000; end of Year 3 = 7,00,000 + 3,00,000 = Rs 10,00,000. The cumulative inflows equal the initial cost of Rs 10,00,000 exactly at the end of the third year. Therefore the payback period is exactly 3 years, well within the project's 5-year life.",
          "explanation": "Cumulative cash inflows reach Rs 10,00,000 precisely at the close of year 3, so no fractional year is required and the payback is 3 years.",
          "oneShotPreview": "Cumulative: 3.2 lakh, 7 lakh, 10 lakh - cost recovered exactly in 3 years."
        },
        {
          "q": "9 Imagine you are a financial manager in a company. How would you use capital budgeting techniques to assess a new investment project?",
          "a": "As a financial manager I would follow a structured capital-budgeting process: first define the investment proposal and the strategic objective; then estimate the relevant incremental cash flows (initial outlay, operating inflows, working capital and terminal value) over the project's life; next determine the appropriate discount rate, i.e. the cost of capital adjusted for the project's risk. I would then evaluate the project using several complementary techniques - payback period for liquidity/risk, accounting rate of return for accounting profitability, and above all discounted cash-flow methods such as NPV and IRR (and PI where capital is rationed). A project is accepted if its NPV is positive and its IRR exceeds the cost of capital. I would also test sensitivity and scenarios for key variables, compare mutually exclusive alternatives, consider qualitative factors and risk, and finally recommend the project that maximises shareholder wealth, followed by a post-completion audit to compare actual with forecast results.",
          "explanation": "It describes the practical decision-making sequence - cash-flow estimation, cost of capital, applying multiple appraisal techniques, risk analysis and wealth-maximising selection.",
          "oneShotPreview": "Estimate cash flows and cost of capital, apply payback/ARR/NPV/IRR, test risk and choose the wealth-maximising project."
        },
        {
          "q": "10 How would you apply Net Present Value (NPV) to assess the feasibility of a new investment project for your company? What are some advantages and disadvantages you should consider?",
          "a": "To apply NPV I would: (1) estimate the initial investment (cash outflow) and all expected future net cash inflows over the project's life, including working capital and terminal/salvage value; (2) choose the discount rate, normally the company's cost of capital adjusted for the project's risk; (3) discount each future cash flow to its present value using CFt/(1+r)^t and sum them; and (4) subtract the initial outlay. If NPV is positive the project is feasible and adds value; if negative it should be rejected, and among mutually exclusive projects the one with the highest NPV is preferred. Advantages: NPV recognises the time value of money, uses all cash flows, measures the absolute wealth created, is consistent with the objective of shareholder wealth maximisation and is additive across projects. Disadvantages: it needs reliable forecasts of cash flows and a correct discount rate, which are hard to estimate; it is more complex than payback; it can give misleading rankings for projects of very different sizes or lives; and it does not capture managerial flexibility or real options.",
          "explanation": "It gives the step-by-step NPV procedure, the decision rule and a balanced list of the method's strengths and weaknesses.",
          "oneShotPreview": "Discount all cash flows at cost of capital, subtract outlay; accept if NPV>0. Pros: time value, wealth measure; cons: forecast sensitivity."
        },
        {
          "q": "11 A company is considering two investment opportunities (A and B) that cost Rs 4,00,000 and Rs 3,00,000 respectively. The first project generates Rs 1,00,000 each year over a 4-year period. The second generates Rs 60,000, Rs 1,00,000, Rs 80,000, Rs 90,000 and Rs 70,000 over a 5-year period. The company's cost of capital is 8%. Which one do you choose under the NPV method?",
          "a": "Discounting at 8% (factors: 1/1.08 = 0.9259, 1/1.1664 = 0.8573, 1/1.2597 = 0.7938, 1/1.3605 = 0.7350, 1/1.4693 = 0.6806). Project A: PV of inflows = 1,00,000/1.08 + 1,00,000/1.1664 + 1,00,000/1.259712 + 1,00,000/1.36048896 = 92,593 + 85,734 + 79,383 + 73,503 = Rs 3,31,213; NPV = 3,31,213 - 4,00,000 = -Rs 68,787 (negative). Project B: PV of inflows = 60,000/1.08 + 1,00,000/1.1664 + 80,000/1.259712 + 90,000/1.36048896 + 70,000/1.469328 = 55,556 + 85,734 + 63,507 + 66,153 + 47,640 = Rs 3,18,590; NPV = 3,18,590 - 3,00,000 = +Rs 18,590 (positive). Since Project A has a negative NPV it would destroy value and must be rejected, while Project B has a positive NPV and adds value. Under the NPV method, choose Project B.",
          "explanation": "At an 8% cost of capital project A's discounted inflows (Rs 3,31,213) fall short of its Rs 4 lakh cost, whereas project B's (Rs 3,18,590) exceed its Rs 3 lakh cost; hence only B is acceptable.",
          "oneShotPreview": "NPV A = -Rs 68,787 (reject); NPV B = +Rs 18,590 (accept) - choose Project B."
        }
      ]
    },
    "5": {
      "unitTitle": "Financial Accounting and Analysis",
      "totalQuestions": 19,
      "questions": [
        {
          "q": "1 a) Define journal.",
          "a": "A journal is the book of original entry in which business transactions are recorded first, in chronological order, in a systematic debit-and-credit format. Each entry, called a journal entry, shows the date, the accounts to be debited and credited with their amounts, and a short narration explaining the transaction. It provides a permanent chronological record that serves as the basis for posting to the ledger.",
          "explanation": "This defines the journal as the primary book of record where transactions are first entered with debit, credit and narration before being posted to the ledger.",
          "oneShotPreview": "Book of original entry where transactions are first recorded chronologically with debit, credit and narration."
        },
        {
          "q": "1 b) List out the types of Accounts.",
          "a": "Accounts are commonly classified in two ways. On the modern/element basis they are assets, liabilities, equity (capital), revenue (income) and expenses. On the traditional basis they are personal accounts (individuals, firms, institutions), real accounts (assets and properties such as cash, land and machinery) and nominal accounts (expenses, losses, incomes and gains such as salary, rent and discount).",
          "explanation": "It lists both accepted classifications of accounts, which is exactly what the question asks for.",
          "oneShotPreview": "Assets, liabilities, equity, revenue, expenses; traditionally personal, real and nominal accounts."
        },
        {
          "q": "1 c) Format of Ledger Account.",
          "a": "A ledger account is drawn as a two-sided tabular form headed by the name of the account. The left side is the debit side and the right side is the credit side; each side has columns for Date, Particulars, Voucher/Folio (V/F) reference and Amount (Rs). The balance is worked out after each entry, and a separate page is maintained for every account.",
          "explanation": "It describes the standard ledger format with separate debit and credit sides and the date, particulars, folio and amount columns, which is the expected answer.",
          "oneShotPreview": "Two-sided account: Date | Particulars | V/F | Amount on debit (left) and credit (right) sides."
        },
        {
          "q": "1 d) Define Accounting.",
          "a": "Accounting is the process of identifying, measuring, recording, classifying and summarising financial transactions in a systematic manner, and then interpreting and communicating the resulting information to interested users. It is often called the language of business because it converts day-to-day transactions into meaningful financial statements such as the Trading and Profit and Loss Account and the Balance Sheet.",
          "explanation": "This is the standard definition covering recording, classifying, summarising, interpreting and communicating financial information.",
          "oneShotPreview": "Systematic recording, classifying, summarising and interpreting of financial transactions for decision-makers."
        },
        {
          "q": "1 e) Write formula of current Ratio.",
          "a": "Current Ratio = Current Assets / Current Liabilities. Current assets include stock, debtors, cash, bank, prepaid expenses and marketable securities; current liabilities include creditors, bills payable, outstanding expenses and short-term loans. A ratio of about 2:1 is generally considered satisfactory.",
          "explanation": "It gives the exact formula and defines its components, which is all the question asks.",
          "oneShotPreview": "Current Ratio = Current Assets ÷ Current Liabilities (ideal around 2:1)."
        },
        {
          "q": "2 What is meant by Ratio? Explain briefly about various types of ratios.",
          "a": "A ratio is a simple numerical relationship between two related figures expressed as a quotient, percentage or number of times, used to compare and interpret financial performance. Ratios are classified by purpose: liquidity ratios (current, quick, cash) test short-term solvency; activity or turnover ratios (inventory, debtors, creditors, total asset turnover) measure operating efficiency; profitability ratios (gross profit, net profit, return on capital) measure earnings; and solvency or leverage ratios (debt-equity, interest coverage) measure long-term financial strength. They may also be grouped as balance-sheet ratios and profit-and-loss ratios depending on the statements from which they are drawn.",
          "explanation": "It defines a ratio and briefly lists the main categories with examples, matching the request for various types of ratios.",
          "oneShotPreview": "Ratio = comparison of two figures; main types: liquidity, activity, profitability and solvency ratios."
        },
        {
          "q": "3 Define accounting with the significance of accounting and its advantages.",
          "a": "Accounting is the systematic identification, measurement, recording, classification and summarisation of financial transactions, followed by interpretation and communication of the results. Its significance lies in providing reliable financial information for planning, control and decision-making by management and in reporting stewardship to owners, investors, creditors, employees and the government. Its advantages are: it discloses profit or loss and the true financial position; it helps in budgeting, cost control and performance evaluation; it supplies data for taxation, statutory compliance and audit; it helps in raising finance and in comparing results over time; and it acts as a check against fraud and errors through a systematic record.",
          "explanation": "It defines accounting and then covers both its significance and its concrete advantages, as the question requires.",
          "oneShotPreview": "Accounting records and interprets financial data; aids planning, control, reporting, tax compliance and fraud prevention."
        },
        {
          "q": "4 Write short notes on Journal and Ledger with format. Trading account with format",
          "a": "Journal: the book of original (prime) entry where transactions are recorded first in chronological order; each entry shows date, particulars with debit and credit, amount and narration. Its columns are Date | Particulars | V/F | Debit (Rs) | Credit (Rs). Ledger: the book of final entry containing separate accounts for assets, liabilities, capital, incomes and expenses, posted from the journal; each account has Date | Particulars | V/F | Debit (Rs) | Credit (Rs), with debit on the left and credit on the right. Trading Account: prepared to ascertain gross profit or loss for a period. Its debit side shows Opening Stock, Purchases, Returns Inwards and Direct Expenses, while its credit side shows Sales, Returns Outwards and Closing Stock; the balancing figure is Gross Profit (or Gross Loss), which is transferred to the Profit and Loss Account.",
          "explanation": "It gives short notes on all three requirements — journal, ledger and trading account — along with their column formats.",
          "oneShotPreview": "Journal = chronological original entry; Ledger = classified final accounts; Trading A/c finds gross profit."
        },
        {
          "q": "5 a) Elucidate the accounting cycle.",
          "a": "The accounting cycle is the complete sequence of steps repeated every accounting period: (1) analyse and identify transactions from source documents; (2) record them as journal entries; (3) post the entries to the respective ledger accounts; (4) prepare an unadjusted trial balance to check that total debits equal total credits; (5) record adjusting entries for accruals, provisions, depreciation and closing stock; (6) prepare an adjusted trial balance; (7) prepare the financial statements — Trading and Profit and Loss Account and Balance Sheet; (8) pass closing entries to transfer revenues, expenses and drawings; and (9) prepare a post-closing trial balance to start the next period.",
          "explanation": "It lists the full accounting cycle in order, from analysing transactions through to the post-closing trial balance, which is what elucidate requires.",
          "oneShotPreview": "Analyse → Journal → Ledger → Trial Balance → Adjustments → Financial Statements → Closing entries."
        },
        {
          "q": "5 b) State the concept of double entry book keeping.",
          "a": "Double entry bookkeeping is a system in which every business transaction is recorded in two accounts with equal and opposite effects: one account is debited and another is credited for the same amount. Total debits therefore always equal total credits and the accounting equation Assets = Liabilities + Capital is maintained. For example, when goods are purchased for cash, the Purchases Account is debited and the Cash Account is credited. The system gives a complete record of each transaction and an in-built arithmetic check on the books.",
          "explanation": "It states the core principle of two-sided equal entries and its self-checking nature, which is the concept asked for.",
          "oneShotPreview": "Every transaction affects two accounts — equal debit and equal credit; total debits always equal total credits."
        },
        {
          "q": "6 a) Write about various types of accounts and their rules governing each account",
          "a": "Accounts are classified as personal, real and nominal in the traditional system, or as assets, liabilities, capital, revenue and expenses in the modern system. Traditional (golden) rules: Personal Account — debit the receiver, credit the giver; Real Account — debit what comes in, credit what goes out; Nominal Account — debit all expenses and losses, credit all incomes and gains. Modern rules follow the accounting equation: assets increase by debit and decrease by credit; liabilities and capital increase by credit and decrease by debit; expenses and losses are debited and incomes and gains are credited.",
          "explanation": "It lists the types of accounts and states both the traditional golden rules and the modern debit/credit rules governing each type.",
          "oneShotPreview": "Personal: debit receiver, credit giver; Real: debit in, credit out; Nominal: debit expenses, credit incomes."
        },
        {
          "q": "6 b) write short notes of activity ratio.",
          "a": "Activity ratios, also called turnover or efficiency ratios, measure how efficiently a firm uses its assets and resources to generate sales. Common examples are Inventory Turnover = Cost of Goods Sold / Average Inventory, Debtors Turnover = Credit Sales / Average Debtors, Creditors Turnover, Fixed Asset Turnover and Total Asset Turnover = Sales / Total Assets. Higher turnover generally indicates better utilisation and smoother operations, while a low ratio signals idle stock, slow collections or underused assets. The results are expressed in times or converted into days by dividing 365 by the turnover.",
          "explanation": "It explains what activity ratios are, gives the main examples with formulas and states their interpretation, which is the expected short note.",
          "oneShotPreview": "Activity ratios measure asset-use efficiency — inventory, debtors and total asset turnover (higher is better)."
        },
        {
          "q": "7 From the following balance Sheet of XYZ Co. Ltd., Calculate liquidity ratios. Balance Sheet of XYZ Co. Ltd. as on 31.12.2022. Liabilities (Rs): Preference share capital 100; Equity share capital 150; General reserve 250; Debentures 400; Creditors 200; Bills Payable 50; Outstanding Expenses 50; Profit and loss account 100; Bank Loan 200; Total 1500. Assets (Rs): Lands and buildings 225; Plant and Machinery 250; Furniture and Fixtures 100; Stock 250; Debtors 125; Cash at Bank 250; Cash in hand 125; Prepaid expenses 50; Marketable securities 125; Total 1500.",
          "a": "Current Assets = Stock 250 + Debtors 125 + Cash at Bank 250 + Cash in Hand 125 + Prepaid Expenses 50 + Marketable Securities 125 = Rs 925. Current Liabilities (short-term) = Creditors 200 + Bills Payable 50 + Outstanding Expenses 50 = Rs 300; debentures, share capital, reserves and the bank loan are treated as long-term. Current Ratio = 925 / 300 = 3.08 : 1. Quick Assets = Current Assets − Stock − Prepaid Expenses = 925 − 250 − 50 = Rs 625, so Quick Ratio = 625 / 300 = 2.08 : 1. Cash Ratio = (Cash in hand + Cash at Bank + Marketable Securities) / Current Liabilities = (125 + 250 + 125) / 300 = 1.67 : 1. Both main liquidity ratios exceed the usual norms of 2:1 and 1:1, indicating a very comfortable short-term liquidity position.",
          "explanation": "It identifies current and quick assets and liabilities from the balance sheet, applies the standard formulas and interprets the results.",
          "oneShotPreview": "Current ratio = 925/300 = 3.08:1; Quick ratio = 625/300 = 2.08:1 — strong liquidity."
        },
        {
          "q": "8 Write short notes on Inventory Turnover Ratio and Inventory holding periods. And also calculate with following data. A Firm sold goods worth Rs 5,00,000 and its gross profit is 20 percent of sales value. The inventory at the beginning of the year was Rs 16000 and at end of the year was 14000.",
          "a": "Inventory Turnover Ratio = Cost of Goods Sold / Average Inventory; it shows how many times stock is sold and replaced during a period. Cost of Goods Sold = Sales − Gross Profit = 5,00,000 − (20% of 5,00,000 = 1,00,000) = Rs 4,00,000. Average Inventory = (Opening Stock 16,000 + Closing Stock 14,000) / 2 = Rs 15,000. Inventory Turnover = 4,00,000 / 15,000 = 26.67 times. Inventory Holding Period = 365 / 26.67 = 13.7 days (about 0.45 months), i.e. Average Inventory / Cost of Goods Sold × 365. A high turnover with a short holding period shows that stock is moving quickly and is efficiently managed.",
          "explanation": "It first derives the cost of goods sold from sales and gross profit, computes average inventory, and then applies both ratio formulas correctly.",
          "oneShotPreview": "COGS 4,00,000 ÷ average stock 15,000 = 26.67 times; holding period ≈ 13.7 days."
        },
        {
          "q": "9 a) Write a short note on the following Liquidity ratio.",
          "a": "A liquidity ratio measures a firm's ability to meet its short-term obligations as they fall due. The main liquidity ratios are the Current Ratio (Current Assets / Current Liabilities, ideal about 2:1), the Quick or Acid-Test Ratio ((Current Assets − Stock − Prepaid Expenses) / Current Liabilities, ideal about 1:1) and the Cash Ratio ((Cash + Bank + Marketable Securities) / Current Liabilities). They are computed from the balance sheet and are the primary test of short-term solvency: a higher ratio gives creditors a greater cushion, while a very low ratio warns of possible liquidity distress.",
          "explanation": "It defines liquidity ratios, lists the main ones with formulas and benchmarks, and states their purpose.",
          "oneShotPreview": "Liquidity ratios test short-term solvency — current (2:1), quick (1:1) and cash ratio."
        },
        {
          "q": "9 b) A firm's sales during the year were Rs. 4,00,000 of which 60 percent were on credit basis. The balance of debtors at the beginning and end of the year were 25,000 and 15,000 respectively. Calculate debtor's turnover ratio of the firm, also find out Debt collection period.",
          "a": "Credit Sales = 60% of 4,00,000 = Rs 2,40,000. Average Debtors = (Opening Debtors 25,000 + Closing Debtors 15,000) / 2 = Rs 20,000. Debtors Turnover Ratio = Credit Sales / Average Debtors = 2,40,000 / 20,000 = 12 times. Debt Collection Period = 365 / 12 = 30.4 days (approximately one month). The firm thus collects its receivables about twelve times a year, roughly every 30 days, which indicates reasonably prompt collection.",
          "explanation": "It correctly uses credit sales rather than total sales, averages opening and closing debtors, and converts the turnover into a collection period.",
          "oneShotPreview": "Credit sales 2,40,000 ÷ average debtors 20,000 = 12 times; collection period ≈ 30 days."
        },
        {
          "q": "10 a) Write short notes on Liquidity ratios.",
          "a": "Liquidity ratios judge a company's capacity to pay off its current liabilities out of its current assets. Current Ratio = Current Assets / Current Liabilities (norm 2:1); Quick Ratio = (Current Assets − Stock − Prepaid Expenses) / Current Liabilities (norm 1:1); Cash Ratio = (Cash + Bank + Marketable Securities) / Current Liabilities. Working Capital = Current Assets − Current Liabilities is a related measure. A ratio above the norm indicates safety and a below-norm ratio indicates risk, though an excessively high ratio may mean funds are lying idle.",
          "explanation": "It provides the short note with definitions, formulas, accepted norms and interpretation of liquidity ratios.",
          "oneShotPreview": "Current 2:1, Quick 1:1 and Cash ratio — measure ability to pay short-term debts."
        },
        {
          "q": "10 b) Explain Gross profit ratio and Net profit ratio.",
          "a": "Gross Profit Ratio = Gross Profit / Net Sales × 100, where Gross Profit = Net Sales − Cost of Goods Sold. It shows the margin left after direct costs and reflects pricing policy and production efficiency. Net Profit Ratio = Net Profit (after tax) / Net Sales × 100; it shows what percentage of sales finally remains as profit for shareholders after all expenses, interest and tax. Both are profitability ratios: the gross ratio measures trading efficiency, while the net ratio measures overall operating efficiency and is normally lower.",
          "explanation": "It gives both formulas, defines the components and distinguishes what each ratio measures.",
          "oneShotPreview": "GP ratio = Gross Profit / Net Sales × 100; NP ratio = Net Profit / Net Sales × 100."
        },
        {
          "q": "11 Journalize the following transactions in the books of Ms Ambani: 2023 Jan 1 Ambani commenced business with cash Rs.5,00,000; 2 Purchased goods for cash Rs.20,000; 3 Purchased goods from Mohan Rs.6,000; 7 Paid into bank Rs.5,000; 10 Purchased furniture Rs.2000; 20 Sold goods to Suresh on credit Rs.5,000; 25 Cash sales Rs. 3,500; 26 Paid to Mohan on account Rs.3,000, Paid salaries Rs.2,800.",
          "a": "Journal entries in the books of Ms Ambani: Jan 1 — Cash A/c Dr 5,00,000; To Capital A/c 5,00,000 (business commenced with cash). Jan 2 — Purchases A/c Dr 20,000; To Cash A/c 20,000. Jan 3 — Purchases A/c Dr 6,000; To Mohan A/c 6,000 (credit purchase). Jan 7 — Bank A/c Dr 5,000; To Cash A/c 5,000. Jan 10 — Furniture A/c Dr 2,000; To Cash A/c 2,000. Jan 20 — Suresh A/c Dr 5,000; To Sales A/c 5,000 (credit sale). Jan 25 — Cash A/c Dr 3,500; To Sales A/c 3,500. Jan 26 — Mohan A/c Dr 3,000; To Cash A/c 3,000, and Salaries A/c Dr 2,800; To Cash A/c 2,800.",
          "explanation": "Each entry follows double-entry rules — the asset, expense or receiver is debited and the source of value (cash, creditor, sales or capital) is credited — so every transaction balances.",
          "oneShotPreview": "Cash Dr / Capital Cr; Purchases Dr / Cash or Mohan Cr; Suresh Dr / Sales Cr; Mohan and salaries paid in cash."
        }
      ]
    }
  },
  "23CS0511": {
    "1": {
      "unitTitle": "Operating System Overview & System Structures",
      "totalQuestions": 19,
      "questions": [
        {
          "q": "a) Define Operating System.",
          "a": "An operating system (OS) is system software that acts as an intermediary between computer hardware and the user, managing hardware and software resources and providing common services for application programs. It is a resource allocator (deciding which process gets which resource and when) and a control program (managing program execution to prevent errors and misuse). It also provides a convenient, efficient environment in which users can run programs.",
          "explanation": "This captures the three classic roles of an OS: interface/abstraction over hardware, resource manager, and control program (the standard Silberschatz definition).",
          "oneShotPreview": "OS = intermediary between hardware & users; resource allocator + control program + convenient execution environment."
        },
        {
          "q": "b) How is Computer systems divided? List and define.",
          "a": "A computer system is commonly divided into four layers: (1) Hardware — the physical components (CPU, memory, I/O devices); (2) Operating System — the system software that manages hardware and provides services to programs; (3) System Programs — utilities and tools (shell, editors, compilers) that use OS services to support development and execution; and (4) Application Programs — end-user software that solves specific problems. This layered division shows where the OS sits between raw hardware and the user.",
          "explanation": "The hardware -> OS -> system programs -> application programs hierarchy is the standard view of a computer system and clarifies the OS role.",
          "oneShotPreview": "4 layers: Hardware -> Operating System -> System programs -> Application programs."
        },
        {
          "q": "c) List and define the Operating system modes of operations",
          "a": "Modern CPUs provide at least two modes: user mode and kernel (supervisor/monitor/system) mode. In user mode, applications run with restricted privileges and cannot execute privileged instructions or directly access hardware and protected memory. In kernel mode, the OS runs with full privileges and can execute any instruction and access any resource. A mode bit in the CPU indicates the current mode; switches occur through system calls, interrupts, and traps, which protects the OS and other users from a faulty or malicious program.",
          "explanation": "Dual-mode operation with a mode bit is the fundamental hardware protection mechanism that lets the OS guard resources.",
          "oneShotPreview": "User mode (restricted) vs Kernel mode (full privilege); mode bit switches via syscalls/interrupts/traps."
        },
        {
          "q": "d) What is a System Call?",
          "a": "A system call is the programming interface through which a user process requests a service from the operating system kernel, such as creating a process, performing I/O, or accessing a file. It is the controlled mechanism that switches the CPU from user mode to kernel mode via a trap/interrupt at a defined entry point. To the programmer a system call looks like an ordinary function call (e.g., open(), read(), fork()), but it actually performs a protected transfer into the kernel.",
          "explanation": "System calls are the gateway between user programs and kernel services and the primary cause of mode switches, central to both protection and service delivery.",
          "oneShotPreview": "System call = user program's controlled request into kernel (trap -> mode switch) for OS services."
        },
        {
          "q": "e) What is Booting? List and define its types.",
          "a": "Booting is the process of starting a computer and loading the operating system into main memory so that it can take control of the machine. The initial bootstrap program (firmware such as BIOS or UEFI) is stored in ROM and locates and loads the OS kernel. The two main types are cold booting — starting the machine from a powered-off state, including the Power-On Self-Test — and warm booting — restarting an already-powered system (e.g., a reboot) without a full hardware test. Modern systems may also use a multi-stage boot loader and secure boot.",
          "explanation": "Booting bridges hardware power-on to a running OS; the cold/warm distinction is based on whether hardware is powered up from scratch.",
          "oneShotPreview": "Booting = load OS via bootstrap (BIOS/UEFI); types: cold (power-on, full POST) and warm (restart)."
        },
        {
          "q": "a) List and discuss the different functions of an operating system",
          "a": "The main functions of an OS are: process management (creation, deletion, scheduling, synchronization, communication); memory management (allocation/deallocation, virtual memory); file management (files, directories, access control); device management (drivers, buffering, I/O scheduling); secondary-storage management (disk allocation, RAID); protection and security (access control, authentication); networking; and a user interface (CLI/GUI) plus system calls. It also performs accounting, error detection, and resource allocation. Together these functions make the system efficient, safe, and convenient to use.",
          "explanation": "These are the standard OS functions; discussing each covers resource management, protection, and user convenience.",
          "oneShotPreview": "OS functions: process, memory, file, device & storage management + protection, networking, UI, accounting/error handling."
        },
        {
          "q": "b) Explain different operations performed by the operating system.",
          "a": "The OS performs operations such as process creation and termination, process scheduling and context switching, interprocess communication and synchronization, memory allocation and deallocation (paging/swapping), file operations (open, read, write, close), device I/O with buffering and caching, filesystem mounting, and protection checks. When an interrupt or system call occurs it saves the current context, dispatches the appropriate handler, and restores context afterward. It also detects errors, keeps accounting data, and maintains system state. These operations are triggered by user requests, hardware interrupts, or timer events.",
          "explanation": "This describes the actual runtime operations the kernel executes in response to calls and interrupts, as distinct from its high-level roles.",
          "oneShotPreview": "OS ops: create/schedule processes, context switch, allocate memory, file & I/O ops, protect, handle interrupts/errors."
        },
        {
          "q": "3 Discuss the types of Operating System in detail. [L2][CO1] [10M]",
          "a": "Major OS types include: batch systems (collect and run jobs without user interaction using job control language and spooling); multiprogramming systems (keep several jobs in memory to maximize CPU utilization); time-sharing/multitasking systems (many users share the CPU by rapid switching for interactive response); multiprocessing systems (multiple CPUs); distributed systems (networked computers cooperating as one); real-time systems (hard or soft timing guarantees, e.g., embedded control); embedded systems (specialized, resource-constrained, dedicated function); and personal/mobile, network, and cluster systems. Each type trades off responsiveness, utilization, determinism, and complexity.",
          "explanation": "A detailed 10-mark answer should enumerate and explain each classic category along with its goal and defining characteristics.",
          "oneShotPreview": "OS types: batch, multiprogrammed, time-sharing, multiprocessing, distributed, real-time, embedded, mobile/network."
        },
        {
          "q": "4 Describe various Computing Environments available. [L2][CO1] [10M]",
          "a": "Computing environments include: traditional standalone/desktop systems; client-server systems (clients request services from servers); peer-to-peer systems (peers share resources directly); distributed systems (multiple machines cooperate over a network); centralized systems (one main host); real-time and embedded environments; mobile computing; cloud computing (virtualized, on-demand resources over the internet); grid and cluster computing; and virtualization, where multiple OS instances run on one physical machine. Each environment changes how resources, users, and processes interact and what the OS must manage.",
          "explanation": "The question asks for the spectrum of environments in which modern operating systems operate, from a single machine to virtualized/cloud settings.",
          "oneShotPreview": "Environments: standalone, client-server, P2P, distributed, centralized, real-time/embedded, mobile, cloud, virtualized."
        },
        {
          "q": "a) Define Free and Open-Source Operating Systems. How does Open-Source Operating System work? List the Advantages and Disadvantages of Open-Source Operating System.",
          "a": "Free software is software users can run, copy, distribute, study, modify, and share freely — freedom, not necessarily zero price. Open-source software has publicly available source code under a license (e.g., GPL) permitting use, modification, and redistribution. An open-source OS such as Linux is built collaboratively: contributors submit code, maintainers review and merge it, and releases are published; users can inspect, patch, and customize the kernel. Advantages include low/no cost, security through peer review, high customizability, portability, community support, and freedom from vendor lock-in. Disadvantages include a steeper learning curve, less formal support/accountability, possible driver or hardware compatibility gaps, and fragmentation among distributions.",
          "explanation": "This covers definitions, the community-based development model, and a balanced list of pros and cons, with Linux as the canonical example.",
          "oneShotPreview": "Free = freedoms; open-source = source available. Community-driven dev. Pros: cheap, secure, customizable; cons: learning curve, support, drivers."
        },
        {
          "q": "b) Analyze the User and Operating-System Interfaces available",
          "a": "OS interfaces split into user interfaces and the programming (system-call) interface. User interfaces include command-line interfaces (CLI/shell such as bash, where users type commands) and graphical user interfaces (GUI with windows, icons, menus, and pointing), plus modern touch and voice interfaces. The operating-system interface proper is the system-call interface/API (e.g., POSIX, Win32) through which programs request kernel services. A CLI is powerful, scriptable, and low-overhead but requires learning commands; a GUI is intuitive for beginners but consumes more resources and is harder to automate; the system-call interface is the essential programmatic boundary to the kernel.",
          "explanation": "This analyzes the two user-facing interface styles, contrasts them, and identifies the program-facing system-call interface.",
          "oneShotPreview": "Interfaces: CLI (powerful, scriptable) vs GUI (intuitive, resource-heavy); program interface = system calls/API."
        },
        {
          "q": "6 List and explain the common services provided by an operating system with neat diagram. [L2][CO1] [10M]",
          "a": "Common OS services are: program execution (load and run programs); I/O operations (handle input/output devices); file-system manipulation (create, delete, read, write, directories); communications (processes exchange data via messages or shared memory); error detection (detect and report hardware/software errors); resource allocation (allocate CPU time, memory, files, devices); accounting (track resource usage); and protection and security (access control and authentication). In a typical layered diagram, users and application programs sit at the top and call down into this service layer, which in turn uses the kernel and hardware below. These services are exposed to programs through system calls.",
          "explanation": "These are the canonical OS services; describing the layered diagram shows where each service sits relative to users, programs, and hardware.",
          "oneShotPreview": "Services: program execution, I/O, filesystem, communication, error detection, resource allocation, accounting, protection/security."
        },
        {
          "q": "a) Explain why you need system calls in Operating System and how they work. [L2][CO1] [10M]",
          "a": "System calls are needed because user programs run in user mode and cannot directly access privileged hardware or kernel data structures, so a controlled, protected gateway is required to request OS services and ensure consistent resource management and security. When a program invokes a call through a library wrapper (e.g., printf leading to write), a trap instruction switches the CPU to kernel mode and transfers control to a system-call handler selected by a call number in a system-call table. The kernel validates and executes the requested service, returns a result and status, then restores user mode and returns to the caller; parameters are passed via registers, a table, or the stack. This mechanism protects the OS, supports multiprogramming, and gives every program a uniform interface to hardware.",
          "explanation": "This explains both the motivation (protection and abstraction) and the complete mechanism (trap, mode switch, dispatch, execution, return) of system calls.",
          "oneShotPreview": "Need syscalls for protection + services; trap -> kernel mode -> handler via call number -> execute -> return to user mode."
        },
        {
          "q": "b) Evaluate the importance of system programs in the computing environments. [L5][CO1] [5M]",
          "a": "System programs (system utilities) provide a convenient environment for program development and execution by building on OS services; examples include file management tools, status/information utilities, file editors, programming-language support (compilers, interpreters), program loading and execution facilities, communication tools, and command interpreters (shells). They bridge the raw system-call interface and the user, hiding low-level complexity and increasing productivity. Their importance lies in letting users manage files and processes, supporting software development, and being extensible with new utilities; they run as user-level processes distinct from the kernel itself.",
          "explanation": "System programs are the user-facing utilities built on OS services; evaluating their role shows why they are vital for usability and development.",
          "oneShotPreview": "System programs = utilities (shell, editors, compilers, file tools) built on OS services; make the system usable & productive."
        },
        {
          "q": "8 Analyze the different types of System calls available in OS [L4][CO1] [10M]",
          "a": "System calls are broadly categorized into: process control (create/terminate process, load and execute a program, wait for an event, get/set process attributes); file management (create, delete, open, close, read, write, reposition, get/set file attributes); device management (request/release device, read/write device, get/set device attributes, attach/detach); information maintenance (get/set time, get system or process/file/device information); communications (create/delete connections, send/receive messages, get/set connection attributes); and protection (get/set file permissions, allow/deny user access). Some systems also provide windowing and multimedia calls. Each category gives programs controlled access to a different class of resources.",
          "explanation": "A 10-mark answer must enumerate and analyze the standard categories of system calls with representative examples for each.",
          "oneShotPreview": "Syscall types: process control, file mgmt, device mgmt, information maintenance, communication, protection."
        },
        {
          "q": "9 Imagine you're developing a lightweight open-source operating system. What key design goals would you prioritize, and how would you implement them? [L2][CO1] [10M]",
          "a": "Key goals for a lightweight open-source OS are a small memory/CPU footprint, modularity, portability, security, power efficiency, and standards compliance. I would implement them by using a microkernel or modular design with loadable modules to keep the core small; coding in a safe, efficient language (C/Rust); providing virtual memory and demand paging only where needed; exposing a minimal POSIX-like API; using a clear layered architecture; shipping a small set of system programs and a package manager; adding a hardware abstraction layer for portability; and using a simple scheduler suited to light workloads. For the open-source aspect, I would use a permissive license, thorough documentation, automated testing, and security review to encourage community contributions.",
          "explanation": "This maps each stated design goal to a concrete implementation strategy, which is exactly what the question asks.",
          "oneShotPreview": "Goals: tiny footprint, modular, portable, secure. Implement: microkernel/modules, safe language, HAL, POSIX API, docs + community."
        },
        {
          "q": "a) Design a boot sequence for an operating system and outline the steps involved in system start up. [L6][CO1] [5M]",
          "a": "A typical boot sequence is: (1) Power-on — the CPU begins executing firmware (BIOS/UEFI) from ROM at the reset vector. (2) POST — the Power-On Self-Test checks memory, CPU, and devices. (3) Firmware discovers boot devices and loads a boot loader (e.g., GRUB) from the boot sector or EFI partition. (4) The boot loader loads the kernel image into RAM (with an optional initrd/initramfs) and transfers control to it. (5) The kernel initializes memory management, interrupts, scheduling, and drivers, then mounts the root filesystem. (6) The kernel starts the first user process (init/systemd), which runs startup scripts, starts services, and presents a login prompt or desktop. Control thus passes from firmware to boot loader to kernel to user space.",
          "explanation": "This outlines the standard firmware -> boot loader -> kernel -> init chain and the key initialization at each stage.",
          "oneShotPreview": "Boot: power-on -> POST -> firmware loads bootloader -> load kernel -> kernel init -> init/systemd -> login."
        },
        {
          "q": "b) How would you use log files, core dumps, and trace listings to debug a system that is intermittently failing? [L2][CO1] [5M]",
          "a": "For intermittent failures I would first enable detailed, timestamped logging (syslog/journal) and centralize logs to correlate the failure time with errors and device events, adjusting log levels as needed. When a crash occurs I would analyze the core dump with a debugger such as gdb to inspect memory, registers, and the call stack at the moment of failure, pinpointing the exact instruction and state. I would also capture trace listings — system-call traces (strace), kernel traces (ftrace/perf), or event traces — to reconstruct the sequence of calls and interrupts leading to the fault. Correlating timestamps across the logs, the core-dump stack, and the event trace reveals the triggering sequence; for rare events I would add targeted instrumentation to narrow the time window and confirm the root cause.",
          "explanation": "This explains the distinct contribution of each diagnostic artifact and how correlating them isolates an intermittent bug.",
          "oneShotPreview": "Correlate timestamps in logs + analyze core dump stack + trace syscalls/events -> find root cause of intermittent fault."
        },
        {
          "q": "11 Illustrate any two operating system structures. [L3][CO1] [10M]",
          "a": "Two common OS structures are: (1) Monolithic structure — the OS is one large program in which all services (process, memory, file, device management) run in kernel mode and call one another directly; it is efficient but harder to maintain and a single bug can crash the system (e.g., traditional UNIX, Linux). (2) Microkernel structure — only a minimal core (IPC, scheduling, basic memory) runs in kernel mode while most services such as the file system and drivers run as user-level servers communicating by message passing; it is modular, secure, and extensible but incurs message-passing overhead (e.g., Mach, MINIX, QNX). A diagram would contrast a single large kernel block with a small kernel surrounded by user-level servers. Other structures include layered, modular, and client-server designs.",
          "explanation": "A 10-mark answer should illustrate two structures with their organization, advantages/disadvantages, and examples.",
          "oneShotPreview": "Monolithic (all services in kernel, fast but fragile) vs Microkernel (minimal kernel + user servers, modular but slower IPC)."
        }
      ]
    },
    "2": {
      "unitTitle": "Processes, Threads and CPU Scheduling",
      "totalQuestions": 23,
      "questions": [
        {
          "q": "1 a) Define Process and give its structure in memory",
          "a": "A process is a program in execution, with a current state, a program counter, a stack and a data section; it is the basic unit of work in an operating system. Its memory image is laid out as a text (code) segment, a data segment for global/static variables, a heap for dynamically allocated memory that grows upward, and a stack for parameters, return addresses and local variables that grows downward. The kernel also keeps a Process Control Block for the process. The text segment is usually read-only and sharable, while heap and stack grow toward each other within the process address space.",
          "explanation": "This gives the standard definition of a process and the four classic memory segments, which is exactly what the two-mark question asks for.",
          "oneShotPreview": "Program in execution; memory = text, data, heap (up), stack (down) plus a PCB."
        },
        {
          "q": "1 b) Interpret the difference between preemptive and non-preemptive scheduling.",
          "a": "In non-preemptive scheduling, once a process gets the CPU it keeps it until it terminates or voluntarily blocks for I/O. In preemptive scheduling, the OS can forcibly take the CPU away, for example when a time quantum expires, a higher-priority process arrives, or a shorter job arrives (SRTF). Preemption gives better response time and stops one long job from monopolising the CPU, but it costs extra context switches and needs care with shared data. Non-preemptive scheduling is simpler with lower overhead but can cause the convoy effect.",
          "explanation": "The essential distinction is whether the OS can forcibly reclaim the CPU; the examples and trade-offs demonstrate understanding of both modes.",
          "oneShotPreview": "Non-preemptive: runs till done or blocked. Preemptive: OS forcibly switches on quantum, priority or shorter job."
        },
        {
          "q": "1 c) List Scheduling Criteria",
          "a": "The main scheduling criteria are CPU utilisation (keep the CPU busy), throughput (processes completed per unit time), turnaround time (submission to completion), waiting time (time spent in ready queues), response time (request to first response), and fairness or determinism (predictable service with no starvation). Different algorithms optimise different criteria: SJF minimises average waiting time, while FCFS is simple and fair but can make short jobs wait a long time.",
          "explanation": "These are the standard scheduling criteria listed in operating-system texts, with a brief meaning for each.",
          "oneShotPreview": "CPU utilisation, throughput, turnaround time, waiting time, response time and fairness."
        },
        {
          "q": "1 d) Describe Gantt chart with an example.",
          "a": "A Gantt chart is a horizontal timeline used to visualise a CPU schedule: time increases left to right and each process appears as a labelled block covering the interval in which it holds the CPU. For example, under FCFS with P1 (burst 5) and P2 (burst 3) starting at time 0, the chart is [0–5 P1][5–8 P2]; P1 waits 0 and P2 waits 5, giving an average waiting time of 2.5. From the chart we can read completion times directly and then calculate turnaround and waiting times.",
          "explanation": "The answer defines the chart, supplies a concrete timeline and shows how scheduling metrics are derived from it.",
          "oneShotPreview": "CPU timeline, e.g. [0-5 P1][5-8 P2]; used to read completion and waiting times."
        },
        {
          "q": "1 e) What is meant by convoy effect?",
          "a": "The convoy effect occurs with non-preemptive FCFS when one long CPU-bound process holds the CPU while many short I/O-bound processes queue up behind it waiting for the CPU before they can perform their next I/O. Both CPU and I/O device utilisation fall, because the devices are idle while everything waits for the single long job. For instance, a 24 ms job ahead of several 3 ms jobs makes each short job wait more than 20 ms. Preemptive, SJF or SRTF scheduling avoids this effect.",
          "explanation": "It links the effect to FCFS with a long CPU-bound process and explains the resulting drop in CPU and device utilisation.",
          "oneShotPreview": "One long CPU job makes short I/O jobs bunch up; FCFS gives poor CPU and I/O utilisation."
        },
        {
          "q": "2 a) With a neat sketch, explain process state diagram.",
          "a": "A process passes through five basic states: new (being created), ready (in main memory, waiting for the CPU), running (executing), waiting or blocked (waiting for an event such as I/O), and terminated (finished). The transitions are new→ready (admitted), ready→running (dispatch), running→ready (preemption or time slice expiry), running→waiting (I/O request or wait), waiting→ready (event completed), and running→terminated (exit). A sketch draws these five states as boxes with arrows for each transition; adding suspend introduces ready-suspended and blocked-suspended states for swapped-out processes.",
          "explanation": "The five-state model and its transitions are the standard process state diagram; describing the arrows represents the sketch in text form.",
          "oneShotPreview": "New→Ready→Running→Waiting→Terminated, with Running↔Ready and Waiting→Ready arrows."
        },
        {
          "q": "2 b) Explain Process Control Block with neat diagram.",
          "a": "The Process Control Block (PCB), or task control block, is the kernel data structure holding all information needed to manage a process. It stores the process state, PID and parent PID, program counter, CPU registers, CPU-scheduling information such as priority and queue pointers, memory-management information such as page tables or base/limit registers, accounting information such as CPU time used, and I/O status information such as open files and allocated devices. The OS saves the running process state into its PCB on a context switch and reloads it when that process is dispatched again. A diagram shows a box with these fields linked to the ready queue and the various device queues.",
          "explanation": "Lists all standard PCB fields and explains its role as the saved context of a process, which is the core of the expected answer.",
          "oneShotPreview": "Kernel record of state, PID, PC, registers, priority, memory, accounting and I/O status; saved on a switch."
        },
        {
          "q": "3 a) What are scheduling queues in operating systems, and how do they manage processes during execution?",
          "a": "Scheduling queues are the lists that hold processes, represented by their PCBs, while they wait for service. The job queue contains all processes in the system, the ready queue contains processes in main memory that are ready to run, and device queues contain processes waiting for a particular I/O device. Each queue is normally a linked list of PCBs. A process moves from the ready queue to the CPU when dispatched, to a device queue when it requests I/O, and back to the ready queue when the I/O completes, and the scheduler chooses which PCB to run next.",
          "explanation": "Correctly distinguishes job, ready and device queues and traces how a PCB moves among them during execution.",
          "oneShotPreview": "Job, ready and device queues of PCBs; processes move between them while waiting for CPU or I/O."
        },
        {
          "q": "3 b) Describe about the different types of Schedulers in operating system.",
          "a": "There are three schedulers. The long-term or job scheduler selects jobs from the job queue into the ready queue, controls the degree of multiprogramming and runs infrequently. The short-term or CPU scheduler selects which ready process gets the CPU and runs every few milliseconds. The medium-term scheduler swaps processes between main memory and disk to reduce the degree of multiprogramming when memory is pressured. In time-sharing systems the long-term scheduler is often absent or minimal, while the short-term scheduler uses algorithms such as FCFS, SJF, round robin or priority.",
          "explanation": "Names all three schedulers and distinguishes them by function and frequency of invocation, matching the textbook classification.",
          "oneShotPreview": "Long-term admits jobs, short-term picks the next CPU job, medium-term swaps processes in and out."
        },
        {
          "q": "4 a) Describe Context Switching and the types of context switching triggers in detail.",
          "a": "A context switch is the mechanism in which the OS saves the state of the running process into its PCB and loads the saved state of another process so that it can run. Typical triggers are expiry of the time quantum in round robin, preemption by a higher-priority process, arrival of a shorter job under SRTF, a process blocking on I/O or a wait call, an interrupt, and process termination. The steps are to save the old process registers and program counter, update its PCB state, select a new process, load its registers, program counter and memory map, and begin execution. A context switch is pure overhead, so the OS minimises it; its cost depends on how many registers must be saved and whether caches or TLBs must be flushed.",
          "explanation": "Defines the save-and-restore operation, lists the main triggers and notes the overhead, covering all parts of the question.",
          "oneShotPreview": "Save old process state into its PCB, load new one; triggered by quantum expiry, preemption, I/O block, interrupt or exit."
        },
        {
          "q": "4 b) Give the difference between Process and Thread",
          "a": "A process is a program in execution with its own address space and resources, while a thread is a lightweight unit of execution inside a process that shares the process code, data and open files. A thread has its own thread ID, program counter, register set and stack, and switching between threads of the same process avoids changing the memory map, so thread switches are cheaper than process context switches. Processes are isolated, so a crash in one does not directly affect another, whereas threads share memory and need synchronisation to avoid races. Thread creation and communication are faster and easier, but processes give better protection.",
          "explanation": "Highlights resource ownership versus execution state, isolation and switching cost, which are the standard process-thread distinctions.",
          "oneShotPreview": "Process owns address space and resources; thread has PC/registers/stack but shares them — cheaper, less isolated."
        },
        {
          "q": "5 Analyze the different types of process operations in operating system.",
          "a": "The fundamental process operations are creation, termination, wait and exec. fork() creates a child as a copy of the parent, initially sharing the same code, data and stack values, and returns 0 to the child and the child PID to the parent. exec() replaces the current process memory image with a new program. wait() suspends the parent until a child terminates and collects the child exit status, while exit() ends a process, closes its resources and notifies the parent. In addition, processes can block or sleep on an event, be woken up when the event occurs, and in some systems be suspended and later resumed. These primitives let shells and servers spawn and coordinate work.",
          "explanation": "Covers fork, exec, wait and exit with their effects, plus blocking, wakeup and suspension, which are the classic process operations.",
          "oneShotPreview": "fork creates a child, exec replaces the image, wait collects child status, exit terminates; plus block, wakeup and suspend."
        },
        {
          "q": "6 a) Examine in detail about Inter Process Communication.",
          "a": "Interprocess communication (IPC) lets processes exchange data and synchronise their actions. The two basic models are shared memory, where processes map a common memory region and read and write it directly, which is fast but needs explicit synchronisation such as semaphores, and message passing, where the kernel supplies send() and receive() primitives to transfer messages through a queue, which is simpler and safer but slower because of kernel copying. Message passing may be direct, naming the receiver, or indirect, using a mailbox or port, and operations may be blocking or non-blocking. Common IPC mechanisms include pipes, named pipes, message queues, semaphores, shared-memory segments and sockets, with sockets also supporting communication across a network.",
          "explanation": "Covers both IPC models, direct and indirect and blocking and non-blocking message passing, plus concrete OS mechanisms.",
          "oneShotPreview": "Shared memory is fast but needs sync; message passing uses send/receive via queues; pipes, semaphores and sockets."
        },
        {
          "q": "6 b) Define thread. Analyze the difference between User-Level & Kernel- Level Thread",
          "a": "A thread is a lightweight unit of execution within a process, having its own program counter, registers and stack but sharing the process address space, code, data and resources. User-level threads are managed entirely by a user-space library and are invisible to the kernel, so they are cheap to create and switch and can use a custom scheduling policy, but one blocking system call or page fault blocks the whole process and they cannot run on multiple CPUs. Kernel-level threads are managed by the kernel and are individually schedulable, so a blocking thread does not stop its siblings and they can execute in parallel on a multiprocessor, but creation and switching are more expensive. Hybrid many-to-many models combine both approaches.",
          "explanation": "Defines a thread and contrasts management, blocking behaviour, parallelism and cost, the core differences between ULTs and KLTs.",
          "oneShotPreview": "ULT: library-managed, cheap, blocks whole process, no parallelism. KLT: kernel-managed, parallel, costlier."
        },
        {
          "q": "7 a) Discuss multithreading models with neat diagrams",
          "a": "Three multithreading models map user threads to kernel threads. In the many-to-one model many user threads map to a single kernel thread, so it is cheap but a blocking call blocks all of them and there is no parallelism. In the one-to-one model each user thread maps to one kernel thread, giving true parallelism and independent blocking at the cost of expensive kernel thread creation, as in Windows and Linux. In the many-to-many model many user threads are multiplexed onto a smaller or equal pool of kernel threads, balancing cost and parallelism and allowing a blocked thread to be replaced by another kernel thread, as in Solaris and the Java VM. A two-level variant lets a user thread be bound permanently to one kernel thread. The diagrams show n user threads above one kernel thread, one above one, and m above n respectively.",
          "explanation": "Lists all three models with their trade-offs and examples and describes the corresponding diagrams.",
          "oneShotPreview": "Many-to-one is cheap but blocks; one-to-one is parallel but costly; many-to-many gives both."
        },
        {
          "q": "7 b) Explain in detail about Thread Libraries and its implementations",
          "a": "A thread library is a collection of user-space API routines for creating, synchronising and destroying threads, typically providing operations such as thread create, join, yield and mutex or condition-variable functions. It can be implemented entirely in user space with no kernel support, as in the early POSIX Pthreads or GNU Pth, in which case the kernel sees only one thread. It can also be kernel-supported, as in Win32 threads, Java threads and modern Pthreads, where each library thread is backed by a kernel thread created through a system call. POSIX Pthreads is an API standard that may be implemented either way, Win32 is kernel-level, and Java threads are managed by the JVM and usually mapped to kernel threads. The library hides scheduling and context-switch details from the programmer.",
          "explanation": "Defines thread libraries, lists typical API operations and distinguishes user-space from kernel-supported implementations with examples.",
          "oneShotPreview": "Thread API for create/join/yield/sync; implemented in user space or backed by kernel threads (Pthreads, Win32, Java)."
        },
        {
          "q": "8 a) What are common threading issues in concurrent programming, and how can they be effectively prevented or managed?",
          "a": "Common threading issues include race conditions from interleaved updates to shared data, lost updates, deadlock from circular waiting for locks, livelock, starvation, inconsistent data from unsynchronised access, and hard-to-reproduce nondeterministic bugs. They are managed with synchronisation primitives such as mutexes, semaphores, monitors and condition variables that enforce mutual exclusion, and by preventing circular wait through a consistent lock ordering and timeouts. Designing with immutable data, thread-safe structures or message passing instead of shared mutable state removes many races, while race detectors and stress testing catch the rest. The producer-consumer and readers-writers problems are classic settings where these techniques are applied.",
          "explanation": "Names the main concurrency hazards and pairs each with a concrete prevention or management technique.",
          "oneShotPreview": "Races, deadlock and starvation are handled with locks, semaphores, lock ordering, immutable data and message passing."
        },
        {
          "q": "8 b) Evaluate FCFS CPU Scheduling algorithm for given Problem: [Process P1 P2 P3 P4; Process Time 24 3 5 6]",
          "a": "FCFS runs processes in arrival order without preemption. With P1=24, P2=3, P3=5 and P4=6, all arriving at time 0, the Gantt chart is [0–24 P1][24–27 P2][27–32 P3][32–38 P4]. Completion times are 24, 27, 32 and 38; turnaround times are the same because arrivals are at 0; waiting times are 0, 21, 22 and 26. Average waiting time is (0+21+22+26)/4 = 17.25 ms and average turnaround time is (24+27+32+38)/4 = 30.25 ms. The very large waiting times show the convoy effect: short jobs are stuck behind the long first job even though the CPU stays 100 percent busy.",
          "explanation": "Gives the complete FCFS timeline and metric calculations, and the large waiting times illustrate why FCFS is unfair to short jobs.",
          "oneShotPreview": "[P1 0-24][P2 24-27][P3 27-32][P4 32-38]; average waiting time 17.25 ms — convoy effect."
        },
        {
          "q": "9 a) Consider 3 processes P1, P2 and P3, which require 5, 7 and 4 time units and arrive at time 0, 1 and 3. Draw the Gant chart calculate averages process completion and average waiting time using SJF scheduling algorithm.",
          "a": "Non-preemptive SJF selects the shortest available job whenever the CPU becomes free. At time 0 only P1 has arrived, so it runs 0–5; at time 5 both P2 (7, arrived at 1) and P3 (4, arrived at 3) are waiting, so P3 runs 5–9 and then P2 runs 9–16. The Gantt chart is [0–5 P1][5–9 P3][9–16 P2]. Completion times are P1=5, P3=9 and P2=16; turnaround times are P1=5, P2=15 and P3=6; waiting times are P1=0, P2=8 and P3=2. Average waiting time is (0+8+2)/3 = 3.33 time units, average turnaround is 8.67, and average completion time is (5+9+16)/3 = 10.",
          "explanation": "Correctly applies non-preemptive SJF with arrival times and computes every requested average from the Gantt chart.",
          "oneShotPreview": "SJF: [P1 0-5][P3 5-9][P2 9-16]; average wait 3.33, average completion 10."
        },
        {
          "q": "9 b) Deploy SRJF CPU Scheduling algorithms for given Problem: [Process P1 P2 P3 P4; Burst Time 8 10 3 4; Arrival Time 0 4 4 10]",
          "a": "SRJF, or shortest remaining time first, always runs the process with the least remaining burst. P1 runs from 0 to 4; at time 4 P3 arrives with burst 3, shorter than P1 remaining 4, so P3 runs 4–7. P1 then runs 7–11, and although P4 (4) arrives at time 10 it does not preempt because P1 has only 3 left. P4 runs 11–15 and P2 runs 15–25. The Gantt chart is [0–4 P1][4–7 P3][7–11 P1][11–15 P4][15–25 P2]. Completion times are P1=11, P2=25, P3=7 and P4=15; waiting times are P1=3, P2=11, P3=0 and P4=1. Average waiting time is 3.75 ms and average turnaround time is (11+21+3+5)/4 = 10 ms.",
          "explanation": "Correctly handles the preemption at time 4 and the non-preemption at time 10, then derives the metrics accurately.",
          "oneShotPreview": "SRTF: [P1 0-4][P3 4-7][P1 7-11][P4 11-15][P2 15-25]; average wait 3.75 ms."
        },
        {
          "q": "10 a) Build Priority CPU Scheduling algorithms for given Problem: [Process P1 P2 P3 P4; Process Time 8 4 9 5; Priority 3 2 4 1]",
          "a": "Assuming a lower priority number means higher priority and that scheduling is non-preemptive, the execution order is P4 (1), P2 (2), P1 (3) and P3 (4). With all processes arriving at 0 the Gantt chart is [0–5 P4][5–9 P2][9–17 P1][17–26 P3]. Completion times are 5, 9, 17 and 26; waiting times are P4=0, P2=5, P1=9 and P3=17. Average waiting time is (0+5+9+17)/4 = 7.75 ms and average turnaround time is (5+9+17+26)/4 = 14.25 ms. Priority scheduling can starve low-priority processes, which is normally fixed by aging, gradually increasing the priority of a process that has waited a long time.",
          "explanation": "States the priority convention explicitly, produces the correct schedule and metrics and notes the classic starvation and aging issue.",
          "oneShotPreview": "Priority (lower is higher): [P4 0-5][P2 5-9][P1 9-17][P3 17-26]; average wait 7.75 ms."
        },
        {
          "q": "10 b) Evaluate Round Robin CPU Scheduling algorithm for given Problem: Time slice =3 ms. [Process P1 P2 P3 P4; Process Time 10 5 18 6; Arrival Time 5 3 0 4]",
          "a": "Round Robin gives each ready process a 3 ms quantum in FIFO order. The simulation is [0–3 P3][3–6 P3][6–9 P2][9–12 P4][12–15 P3][15–18 P1][18–20 P2][20–23 P4][23–26 P3][26–29 P1][29–32 P3][32–35 P1][35–38 P3][38–39 P1]. Completion times are P1=39, P2=20, P3=38 and P4=23; turnaround times are 34, 17, 38 and 19; waiting times are P1=24, P2=12, P3=20 and P4=13. Average waiting time is 17.25 ms and average turnaround time is 27 ms. Round robin is fair and responsive for time sharing, but a small quantum raises context-switch overhead while a large quantum degenerates toward FCFS.",
          "explanation": "Shows the complete quantum-by-quantum timeline with correct arrivals, derives all metrics and notes the quantum trade-off.",
          "oneShotPreview": "RR with q=3: completions P1@39, P2@20, P3@38, P4@23; average wait 17.25 ms."
        },
        {
          "q": "11 Illustrate the scheduling strategy for a modern cloud-based system that effectively handles both CPU-bound and I/O-bound processes using multiple processors.",
          "a": "A modern cloud scheduler combines a multi-level feedback queue with preemptive round robin inside each queue and SMP load balancing across processors. New jobs enter a high-priority queue with a short quantum; I/O-bound jobs block early and stay in high-priority queues for quick response, while CPU-bound jobs exhaust their quantum and are demoted to lower-priority queues with longer quanta. On a multiprocessor each core has its own ready queue and work stealing or migration balances the load, with CPU affinity used to keep threads on cache-warm cores. Fair-share or credit-based scheduling such as the Completely Fair Scheduler tracks virtual runtime, and aging prevents low-priority jobs from starving. This mix gives low latency to interactive work, high throughput for batch work and good utilisation of all cores.",
          "explanation": "Combines multi-level feedback queues, SMP load balancing and fair-share scheduling and explains how each class of job is served.",
          "oneShotPreview": "MLFQ plus SMP load balancing: I/O jobs stay high priority, CPU jobs demote; aging or CFS keeps it fair."
        }
      ]
    },
    "3": {
      "unitTitle": "Synchronization Tools and Deadlocks",
      "totalQuestions": 21,
      "questions": [
        {
          "q": "1 a) List and define the conditions that critical section problem must satisfy. [L1][CO3] [2M]",
          "a": "A solution to the critical-section problem must satisfy three conditions: (1) Mutual Exclusion — if one process is executing in its critical section, no other process may be executing in its critical section. (2) Progress — if no process is in its critical section and some processes wish to enter, only those not in their remainder section may participate in deciding which one enters next, and this decision cannot be postponed indefinitely. (3) Bounded Waiting — after a process requests entry, there is a bound on the number of times other processes may enter their critical sections before that request is granted. It is also assumed that each process executes at nonzero speed and that no assumption is made about relative process speeds or the number of CPUs.",
          "explanation": "These are the three classic requirements (mutual exclusion, progress, bounded waiting) that any valid critical-section protocol must meet.",
          "oneShotPreview": "3 conditions: Mutual Exclusion (only one in CS), Progress (decision not deferred), Bounded Waiting (no indefinite starvation)."
        },
        {
          "q": "1 b) Give the benefits and drawbacks of Mutex Locks. [L1][CO3] [2M]",
          "a": "A mutex lock is a synchronization tool that enforces mutual exclusion: a process must acquire() the lock before entering a critical section and release() it on exit, and acquire() blocks or spins while the lock is held by another. Benefits: simple to understand and implement, directly supported by hardware atomic instructions (test-and-set/compare-and-swap), reliably guarantee mutual exclusion, and are efficient for short critical sections in kernel and user code. Drawbacks: spinlock versions waste CPU cycles through busy-waiting, blocking versions incur context-switch overhead, they provide no guaranteed bounded waiting (a thread can starve), they can cause deadlock if a holder fails to release or locks are taken in inconsistent order, and they are vulnerable to priority inversion. Forgetting to release a mutex can leave it permanently unavailable.",
          "explanation": "Mutex locks trade simplicity and hardware support for risks such as busy-waiting, starvation, deadlock and priority inversion.",
          "oneShotPreview": "Mutex = acquire/release lock; benefits: simple, hardware-friendly, reliable; drawbacks: busy-wait, starvation, deadlock, priority inversion."
        },
        {
          "q": "1 c) What is Resource-Allocation Graphs? List its properties. [L1][CO5] [2M]",
          "a": "A resource-allocation graph (RAG) is a directed graph used to model the state of a system for deadlock detection. Nodes are of two types: process nodes Pi (circles) and resource-type nodes Rj (rectangles, with dots representing individual instances). Edges are Pi -> Rj, a request edge (process is requesting an instance), and Rj -> Pi, an assignment edge (an instance is currently allocated to the process). Properties: (1) a request edge is converted to an assignment edge when the request is granted and back when the resource is released; (2) if the graph has no cycles, no process is deadlocked; (3) if every resource type has exactly one instance, a cycle is a necessary and sufficient condition for deadlock; (4) if multiple instances exist, a cycle is only a necessary (not sufficient) condition — deadlock occurs only when every process in the cycle is blocked on a resource held by another member of the cycle.",
          "explanation": "The RAG is the standard deadlock-detection model; the meaning of a cycle depends on whether resource types have single or multiple instances.",
          "oneShotPreview": "RAG: circles=processes, rectangles=resources; request/assignment edges; cycle => deadlock only if single-instance (else necessary, not sufficient)."
        },
        {
          "q": "1 d) Describe Deadlock and the methods to handling them. [L1][CO5] [2M]",
          "a": "Deadlock is a state in which a set of processes is permanently blocked because each holds at least one resource and is waiting to acquire another resource held by another process in the set, so none can proceed. It can occur only when all four Coffman conditions hold simultaneously: mutual exclusion, hold-and-wait, no preemption, and circular wait. The methods for handling deadlocks are: (1) Deadlock prevention — design the system so at least one of the four conditions cannot hold (e.g., request all resources at once, allow preemption, impose resource ordering). (2) Deadlock avoidance — use runtime information such as the Banker's algorithm to keep the system out of unsafe states. (3) Deadlock detection and recovery — allow deadlocks, detect them with a resource-allocation/wait-for graph or detection algorithm, then recover by terminating processes or preempting resources. (4) Ignore the problem (ostrich algorithm) — assume deadlocks are rare, as most general-purpose OSes do.",
          "explanation": "Deadlock requires all four Coffman conditions, and the four handling strategies range from structural prevention to simply ignoring the issue.",
          "oneShotPreview": "Deadlock = cycle of processes holding & waiting; 4 Coffman conditions. Handle via prevention, avoidance (Banker's), detection+recovery, or ignore."
        },
        {
          "q": "1 e) Give the difference between deadlock and starvation. [L4][CO5] [2M]",
          "a": "Deadlock is a state in which a group of processes are each blocked waiting for resources held by one another in a closed cycle, so none of them can ever make progress without external intervention. Starvation (indefinite blocking) is a state in which a single process is perpetually denied the resource or CPU time it needs because other processes are always favored, although the system as a whole continues to make progress. In deadlock there is a genuine circular wait and no process progresses; in starvation there is no cycle — only unfair allocation that repeatedly overlooks one waiting process. Deadlock can be detected by a cycle in a wait-for graph, whereas starvation is prevented by fairness mechanisms such as aging or fair scheduling.",
          "explanation": "The key distinction is a circular wait with zero progress (deadlock) versus unfair allocation where others keep progressing (starvation).",
          "oneShotPreview": "Deadlock = circular wait, nobody progresses; starvation = one process perpetually skipped while others progress (fix: aging)."
        },
        {
          "q": "2 a) What is critical section problem? Explain with example. [L2][CO3] [5M]",
          "a": "The critical-section problem is the challenge of designing a protocol so that cooperating processes do not concurrently execute the part of their code (the critical section) that accesses and modifies shared data, which could otherwise corrupt it. A correct solution must guarantee mutual exclusion, progress, and bounded waiting. Example: two processes P1 and P2 both increment a shared variable counter with the statement counter++. If both read the value 5 and then both write back 6, the final value is 6 instead of the correct 7 — a race condition caused by interleaved read-modify-write operations. A synchronization tool such as a mutex lock or Peterson's solution ensures only one process at a time executes the critical section, so no increment is lost.",
          "explanation": "The counter++ interleaving is the textbook example of a race condition that the critical-section protocol must prevent.",
          "oneShotPreview": "Critical-section problem: protect shared data updates; e.g., two processes doing counter++ can lose an increment (race) — need mutual exclusion."
        },
        {
          "q": "2 b) Describe deadlock recovery and how it is performed. [L2][CO5] [5M]",
          "a": "Deadlock recovery is the phase carried out after a deadlock has been detected, in which the system breaks the circular wait so that processes can proceed. Two main approaches exist: (1) Process termination — either abort all deadlocked processes (simple but drastic, discarding all their work) or abort one process at a time until the cycle is broken (less destructive but requires repeated detection). The victim is chosen using criteria such as least work done, fewest resources held, lowest priority cost, and least CPU time consumed. (2) Resource preemption — select a victim and take away some of its resources, give them to a blocked process to break the cycle, then roll the victim back to a previously saved safe checkpoint and restart it. A cost-based preemption scheme with rollback (and aging) is used to avoid repeatedly preempting the same process and to prevent starvation.",
          "explanation": "Recovery breaks the cycle either by killing deadlocked processes or by preempting resources from a victim and rolling it back, with victim choice minimizing cost.",
          "oneShotPreview": "Recovery: abort all/one deadlocked process (pick victim by cost) or preempt resources + roll back victim to break the cycle."
        },
        {
          "q": "3 Define process synchronization and explain Peterson solution algorithms. [L2][CO3] [10M]",
          "a": "Process synchronization is the coordination of the execution order of cooperating processes so that they can safely share data and resources and avoid race conditions, by ensuring mutually exclusive access to critical sections. Peterson's solution is a classical software-based algorithm for two processes, P0 and P1, using two shared variables: int turn and boolean flag[2]. A process Pi sets flag[i] = true (announcing interest) and turn = j (yielding priority to the other), then waits in the loop while (flag[j] && turn == j); when it exits the loop it enters the critical section, and on exit sets flag[i] = false. Mutual exclusion holds because both processes cannot simultaneously have their flag true with the turn favoring themselves; progress and bounded waiting are satisfied because the turn variable alternates priority, so neither waits indefinitely. It assumes atomic reads and writes and is limited to two processes, but it elegantly satisfies all three critical-section requirements without hardware lock instructions.",
          "explanation": "Peterson's algorithm uses flags plus the turn variable to satisfy all three critical-section requirements for two processes, though its atomicity assumption and two-process limit restrict practical use.",
          "oneShotPreview": "Sync = coordinate processes to avoid races. Peterson (2 proc): flag[i]=true, turn=j, wait while flag[j]&&turn==j; satisfies all 3 conditions."
        },
        {
          "q": "4 Discuss in detail about the hardware-based solution for synchronization. [L2][CO3] [10M]",
          "a": "Hardware-based synchronization uses special atomic machine instructions to achieve mutual exclusion without complex software protocols. (1) Disabling interrupts: on a single-CPU system a process disables interrupts while in its critical section so no context switch can occur; it is simple but fails on multiprocessors and grants user processes dangerous power. (2) Test-and-Set (TSL): an atomic instruction that reads a memory word and sets it to true in one indivisible operation; a shared boolean lock is repeatedly tested until the old value is false, then the lock is held and cleared on exit. (3) Compare-and-Swap (CAS): atomically compares a memory word with an expected value and writes a new value only if they match, returning the old value; widely used in modern lock implementations. (4) Swap/XCHG: atomically exchanges the contents of two words. These primitives implement spinlocks (busy-wait locks) and underpin higher-level tools such as mutexes and semaphores. They work on multiple CPUs but busy-waiting wastes CPU cycles and can cause starvation and priority inversion.",
          "explanation": "Atomic hardware instructions make the read-modify-write indivisible, which is the foundation of all hardware locks and higher-level synchronization tools.",
          "oneShotPreview": "Hardware sync: disable interrupts (uni-CPU), Test-and-Set, Compare-and-Swap, Swap -> atomic read-modify-write -> spinlocks; fast but busy-waits."
        },
        {
          "q": "5 What are Mutex Locks? List its Components and analyze the different types with example. [L4][CO3] [10M]",
          "a": "A mutex lock (mutual exclusion lock) is the simplest synchronization tool: it is a lock variable that a process must acquire before entering a critical section and release afterward, so that only one process holds it at a time and others block or spin. Its components are a lock variable/flag (available or acquired), an acquire() operation that atomically tests and sets the lock (waiting if unavailable), and a release() operation that atomically clears the lock and hands it to a waiter. Types: (1) Spinlock (busy-wait mutex) — the process repeatedly polls the lock using atomic test-and-set; suitable for very short critical sections on multiprocessors, e.g., short kernel locks, but wastes CPU. (2) Blocking/sleeping mutex — a failed acquire puts the thread to sleep and the OS wakes it on release, avoiding CPU waste at the cost of context switches, e.g., pthread_mutex_t. (3) Recursive/reentrant mutex — may be re-acquired multiple times by the same thread. (4) A binary semaphore acts as a mutex. Example: pthread_mutex_lock(&m); counter++; pthread_mutex_unlock(&m); prevents lost updates on a shared counter.",
          "explanation": "Mutex types differ mainly in how a failed acquire is handled (spin vs sleep), trading CPU idling for context-switch cost; the components are the lock variable plus atomic acquire/release.",
          "oneShotPreview": "Mutex = lock with acquire()/release(); types: spinlock (busy-wait, short CS), blocking mutex (sleep/wake), recursive; e.g., pthread_mutex protecting counter++."
        },
        {
          "q": "6 a) What is Semaphore? Explain its types with example. [L2][CO3] [5M]",
          "a": "A semaphore is an integer synchronization variable that, apart from initialization, is accessed only through two atomic operations: wait() (also called P, down, or acquire), which decrements the value and blocks the calling process if the result is negative, and signal() (V, up, or release), which increments the value and wakes a waiting process. Types: (1) Binary semaphore — the value is restricted to 0 or 1; it is used for mutual exclusion and behaves like a mutex. (2) Counting semaphore — the value may range over any integer and is used to control access to a finite number of identical resources, initialized to the number available. (Some texts also distinguish strong/weak semaphores.) Example: a binary semaphore S initialized to 1 protects a critical section via wait(S); critical_section; signal(S); while counting semaphores empty = n and full = 0 coordinate a producer and consumer over an n-slot buffer.",
          "explanation": "Semaphores generalize locks through an integer count; wait/signal are atomic, and binary versus counting determines whether they enforce mutual exclusion or resource counting.",
          "oneShotPreview": "Semaphore = int with atomic wait(P)/signal(V); binary (0/1 mutex) vs counting (resource count); e.g., S=1 guards CS, empty/full for producer-consumer."
        },
        {
          "q": "6 b) Explain producer consumer problem using semaphore. [L2][CO3] [5M]",
          "a": "The producer-consumer problem has a producer that generates items into a buffer of size n and a consumer that removes them; the producer must not write to a full buffer, the consumer must not read from an empty one, and access must be mutually exclusive. The semaphore solution uses three semaphores: mutex = 1 (binary, for exclusive buffer access), empty = n (number of free slots), and full = 0 (number of occupied slots). Producer: produce item; wait(empty); wait(mutex); insert item into buffer; signal(mutex); signal(full). Consumer: wait(full); wait(mutex); remove item; signal(mutex); signal(empty); consume item. The empty and full semaphores enforce the capacity constraints, while mutex prevents simultaneous modification of the buffer. The order of the two waits matters — taking mutex before empty/full can deadlock — while the two signals may be in any order.",
          "explanation": "empty/full enforce the buffer capacity bounds and mutex serializes the shared buffer, so no busy-waiting or race occurs; the wait order avoids deadlock.",
          "oneShotPreview": "Producer-consumer: empty=n, full=0, mutex=1; producer wait(empty)->wait(mutex)->add->signal(mutex)->signal(full); consumer reverse."
        },
        {
          "q": "7 a) Describe how monitor achieve process synchronization. Also, mention its advantages and disadvantages. [L2][CO3] [5M]",
          "a": "A monitor is a high-level, language-level synchronization construct that encapsulates shared data together with the procedures that operate on it, and provides an implicit lock ensuring that only one process/thread can be active inside the monitor at a time. Processes enter the monitor by calling one of its procedures, so mutual exclusion is automatic. Condition variables support condition-based blocking through wait(c) and signal(c): wait(c) releases the monitor lock and suspends the caller, while signal(c) wakes a process waiting on that condition. Advantages: easier and safer than semaphores because the compiler/language enforces mutual exclusion, reducing errors such as wrong wait order or a forgotten signal; more readable and maintainable; no busy-waiting. Disadvantages: requires language/compiler support (not native in C/C++), is less flexible than semaphores for some problems, any process inside the monitor blocks all others, and correct condition-variable semantics (signal-and-wait vs signal-and-continue) are subtle.",
          "explanation": "Monitors move the correctness burden from the programmer to the language by combining shared data, procedures, an implicit lock, and condition variables.",
          "oneShotPreview": "Monitor = shared data + procedures + implicit lock + condition variables (wait/signal); safer than semaphores but language-supported & less flexible."
        },
        {
          "q": "7 b) Discuss in detail about the Reader and Writer Problem using semaphore [L2][CO3] [5M]",
          "a": "The readers-writers problem concerns a shared database in which reader processes only read data and writer processes modify it; many readers may read concurrently, but a writer requires exclusive access with no readers and no other writers. The classic reader-preference semaphore solution uses mutex = 1 to protect the shared counter readcount and wrt = 1 to lock the database against writers. Reader: wait(mutex); readcount++; if (readcount == 1) wait(wrt); signal(mutex); perform read; wait(mutex); readcount--; if (readcount == 0) signal(wrt); signal(mutex). Writer: wait(wrt); perform write; signal(wrt). The first reader locks out writers and the last reader releases them, so concurrent reads are allowed but writes are exclusive. This solution favors readers, so writers may starve under a continuous stream of readers; a writer-preference variant adds a semaphore read = 1 to block arriving readers once a writer is waiting.",
          "explanation": "readcount guarded by mutex lets the first reader block writers and the last reader release them, giving concurrent reads but exclusive writes; reader preference can starve writers.",
          "oneShotPreview": "Readers-writers: wrt=1, mutex=1, readcount; 1st reader wait(wrt), last signal(wrt); writers exclusive; reader-preference can starve writers."
        },
        {
          "q": "8 a) Illustrate Bounded Buffer Problem using semaphore [L3][CO3] [5M]",
          "a": "The bounded-buffer problem is the producer-consumer problem for a buffer of finite size n. It is solved with three semaphores: mutex = 1 for mutual exclusion of buffer access, empty = n (number of empty slots), and full = 0 (number of filled slots). Producer: wait(empty) reserves a free slot, wait(mutex) obtains exclusive access, inserts the item, signal(mutex), then signal(full) records a new item. Consumer: wait(full) waits for an item, wait(mutex), removes the item, signal(mutex), then signal(empty) records the freed slot. The empty semaphore prevents writing into a full buffer and full prevents reading from an empty one, while mutex prevents interleaved modification of the buffer. This gives a race-free, busy-wait-free solution; reversing the two waits (taking mutex before empty/full) can deadlock.",
          "explanation": "Counting semaphores empty/full track buffer capacity while mutex serializes access — the canonical bounded-buffer solution.",
          "oneShotPreview": "Bounded buffer: empty=n, full=0, mutex=1; producer wait(empty)->wait(mutex)->insert->signal(mutex)->signal(full); consumer reverse."
        },
        {
          "q": "8 b) What is Deadlock? Discuss its system Model and characterization. [L2][CO5] [5M]",
          "a": "Deadlock is a permanent blocking state in which a set of processes each hold some resources and wait for additional resources held by other processes in the set, so no member can proceed. System model: the system has a finite set of resource types R1..Rm (e.g., CPU cycles, memory, files, printers), each with a fixed number of identical instances. A process requests a resource via a system call, waits if it is unavailable, uses it, and releases it when done; resources may be reusable (memory, a printer) or consumable (messages, signals). The state is modeled by a resource-allocation graph containing process nodes, resource nodes, and request/assignment edges. Characterization: deadlock exists if and only if all four Coffman conditions hold simultaneously — mutual exclusion (at least one nonsharable resource), hold-and-wait (a process holds resources while waiting for more), no preemption (resources cannot be forcibly taken), and circular wait (a closed chain of processes each waiting for a resource held by the next). A cycle in the graph signals deadlock (necessary and sufficient when each resource has one instance).",
          "explanation": "The model views resources as typed, instanced entities; the four Coffman conditions are the necessary and sufficient characterization of deadlock.",
          "oneShotPreview": "Deadlock = permanent block; model: finite resources/instances + request/use/release, RAG; characterized by mutual exclusion, hold-and-wait, no preemption, circular wait."
        },
        {
          "q": "9 Explain the solutions for Dining-Philosophers Problem. [L2][CO5] [10M]",
          "a": "The dining-philosophers problem models five philosophers alternating between thinking and eating, with five chopsticks placed between them; each philosopher needs both adjacent chopsticks to eat, and naively taking one at a time can cause deadlock (everyone holds one and waits for the other) or starvation. Solutions: (1) semaphore/monitor solution — treat each chopstick as a binary semaphore chopstick[5] = 1 and use wait(chopstick[i]) and wait(chopstick[(i+1) mod 5]) before eating and signal on both after; useful but the naive form can deadlock. (2) Break circular wait by asymmetry — odd-numbered philosophers pick left then right, even-numbered ones pick right then left. (3) Allow a philosopher to pick up chopsticks only when both are available, using an atomic double pickup guarded by a mutex. (4) Limit at most four philosophers at the table with a semaphore room = 4, guaranteeing at least one can always eat. (5) Monitor solution with states THINKING, HUNGRY, EATING and condition variables — a philosopher signals neighbors only when both are not eating, avoiding deadlock and ensuring fairness.",
          "explanation": "The core problem is circular waiting on shared chopsticks; solutions either break the cycle (ordering, limiting to four) or use atomic pickup/monitor states.",
          "oneShotPreview": "Dining philosophers: chopsticks as semaphores; avoid deadlock via odd/even pickup order, atomic both-chopstick pickup, room=4, or monitor with states."
        },
        {
          "q": "10 a) Suppose there are 2 copies of resource A, 3 copies of resource B, and 3 copies of resource C. Suppose further that process 1 holds one unit of resources B and C and is waiting for a unit of A; that process 2 is holding a unit of A and waiting on a unit of B; and that process 3 is holding one unit of A, two units of B, and one unit of C. (a) Draw the resource allocation graph with description. [L6][CO5] [5M]",
          "a": "Allocation state: A has 2 instances, both held (one by P2, one by P3); B has 3 instances, all held (one by P1, two by P3); C has 3 instances, two held (one by P1, one by P3) so one is free. Build the RAG with process nodes P1, P2, P3 (circles) and resource nodes A, B, C (rectangles whose dots show instances). Assignment edges (resource -> process): B -> P1, C -> P1, A -> P2, A -> P3, two edges B -> P3, and C -> P3. Request edges (process -> resource): P1 -> A (P1 waits for A) and P2 -> B (P2 waits for B); P3 has no request edge. Description: P1 holds B and C and requests A; P2 holds A and requests B; P3 holds A, two B and one C and requests nothing. This graph contains the cycle P1 -> A -> P2 -> B -> P1, while P3 is not part of any cycle.",
          "explanation": "Mapping holdings to assignment edges and pending requests to request edges reveals the cycle P1-A-P2-B-P1 and shows P3 is outside it.",
          "oneShotPreview": "RAG: P1 holds B,C waits A; P2 holds A waits B; P3 holds A,2B,C. Edges show cycle P1->A->P2->B->P1."
        },
        {
          "q": "10 a) Suppose there are 2 copies of resource A, 3 copies of resource B, and 3 copies of resource C. Process 1 holds one unit of B and C and is waiting for a unit of A; process 2 holds a unit of A and is waiting on a unit of B; process 3 holds one unit of A, two units of B, and one unit of C. (b) Is the system in a deadlocked state? Why or why not? [L6][CO5] [5M]",
          "a": "No, the system is not deadlocked. Although the resource-allocation graph contains a cycle (P1 -> A -> P2 -> B -> P1), a cycle is only a sufficient condition for deadlock when every resource type has exactly one instance; here A, B and C have multiple instances. Process P3 has no outstanding request, so it can complete and release its resources (one A, two B and one C). Once P3 releases them, an instance of A becomes free and can be allocated to P1; after P1 finishes it releases its A, B and C, allowing P2 to obtain the B it needs and complete. Because the blocked processes can eventually acquire their needed resources through P3's release, no set of processes is permanently blocked, so there is no deadlock.",
          "explanation": "A cycle in a multi-instance RAG is necessary but not sufficient for deadlock; here P3 is outside the cycle and can finish, freeing A and B so P1 and P2 can complete.",
          "oneShotPreview": "No deadlock: cycle exists but P3 (no pending requests) can finish, freeing A/B so P1 then P2 complete — cycle not sufficient with multiple instances."
        },
        {
          "q": "10 b) Describe about Deadlock Prevention Methods. [L2][CO5] [5M]",
          "a": "Deadlock prevention ensures that at least one of the four necessary conditions — mutual exclusion, hold-and-wait, no preemption, circular wait — can never hold. Methods: (1) Attack mutual exclusion by making resources sharable wherever possible, e.g., use spooling so a printer appears shared, or allow concurrent read-only file access. (2) Attack hold-and-wait by requiring a process to request and be allocated all the resources it will need at once before it starts (all-or-nothing allocation); the process waits until all are available. (3) Attack no preemption: if a process holding resources requests an unavailable one, its currently held resources are preempted (released) and it must re-request them later; resources may also be preempted from a process that is itself waiting. (4) Attack circular wait by imposing a total ordering (numbering) of all resource types and requiring processes to request resources strictly in increasing order. These methods guarantee deadlock cannot occur, but they can be inefficient — resources may be held idle, concurrency and utilization drop, and some schemes can cause starvation.",
          "explanation": "Prevention structurally negates one of the four Coffman conditions; the price is lower resource utilization and possible starvation.",
          "oneShotPreview": "Prevention: negate a Coffman condition — share resources, request all at once (no hold-and-wait), preempt, or order resources (no circular wait); safe but lower utilization."
        },
        {
          "q": "11 Explain the Banker's algorithm for deadlock avoidance with an example. [L2][CO5] [10M]",
          "a": "The Banker's algorithm is a deadlock-avoidance scheme for systems with multiple resource instances. On every request it checks whether granting it would leave the system in a safe state — one in which there exists a safe sequence <P1, P2, ..., Pn> where each process can obtain its remaining needs from the currently available resources plus those released by processes that have already finished. It uses four data structures: Available (free instances per resource type), Max (maximum demand of each process), Allocation (instances currently allocated), and Need = Max - Allocation. When process Pi makes a Request: (1) verify Request <= Need; (2) verify Request <= Available; (3) tentatively grant it (Available -= Request, Allocation += Request, Need -= Request); (4) run the safety algorithm — set Work = Available and Finish = false for all, repeatedly find a process with Need <= Work, mark it finished and add its Allocation to Work; if all processes finish the state is safe and the request is granted, otherwise it is denied and the tentative state is rolled back. Example: in the classic five-process, three-resource system with Available = (3,3,2), a request by P1 for (1,0,2) can be granted because a safe sequence such as <P1, P3, P4, P2, P0> still exists; a request leaving no process executable would be refused.",
          "explanation": "By allowing a request only if a safe sequence still exists, the Banker's algorithm guarantees the system never reaches a state from which deadlock is unavoidable.",
          "oneShotPreview": "Banker's: grant only if safe state remains; Available/Max/Allocation/Need; request <= Need & Available, tentatively allocate, run safety check; deny if unsafe."
        }
      ]
    },
    "4": {
      "unitTitle": "Memory Management and Virtual Memory",
      "totalQuestions": 20,
      "questions": [
        {
          "q": "a) List out the methods involved in memory management. [L1][CO6] [2M]",
          "a": "The main memory-management methods are: (1) contiguous allocation — single-partition and multiple-partition schemes using fixed or variable (dynamic) partitions; (2) non-contiguous allocation — paging and segmentation, and their combination segmented paging; (3) swapping, in which a whole process is rolled out to a backing store and back in; and (4) virtual memory techniques — demand paging and demand segmentation. These methods are often combined, for example paging with swapping and demand paging. Each method aims to maximize memory utilization and the number of resident processes while providing isolation and protection.",
          "explanation": "This lists the standard taxonomy of memory-management schemes from simple contiguous allocation through paging/segmentation to virtual memory and swapping.",
          "oneShotPreview": "Methods: contiguous (fixed/variable partitions), paging, segmentation, swapping, demand paging/virtual memory."
        },
        {
          "q": "b) Describe virtual memory with neat diagram. [L1][CO6] [2M]",
          "a": "Virtual memory is a technique that allows a process to execute even when it is not entirely resident in main memory: its logical (virtual) address space is mapped to physical memory by the memory-management unit (MMU), and only the currently needed pages are kept in RAM while the rest stay on a disk backing (swap) area. In a typical diagram the CPU sends a logical address (page number + offset) to the MMU, which consults the page table to obtain the frame number and access physical memory; a miss triggers demand paging that transfers the page from the swap area on disk into a free frame. This separation of logical and physical memory lets more processes run concurrently, frees programs from physical-memory limits and contiguity requirements, and enables sharing and protection. The OS maintains the page table with valid/invalid bits to distinguish resident pages from those on disk.",
          "explanation": "The answer explains the logical-to-physical mapping, the backing store and demand paging, and the benefits shown in the conventional CPU → MMU → memory/disk diagram.",
          "oneShotPreview": "Virtual memory = logical addresses mapped by MMU/page table to RAM frames; non-resident pages fetched from disk on demand."
        },
        {
          "q": "c) What is meant by Paging and Page fault? [L1][CO6] [2M]",
          "a": "Paging is a non-contiguous memory-management scheme in which physical memory is split into fixed-size blocks called frames and a process's logical address space into equal-size blocks called pages; a page table maps each logical page to a physical frame, so a page may be placed anywhere in RAM and external fragmentation is eliminated. A page fault is an exception raised by the MMU when a process references a page whose page-table entry is marked invalid (the page is not in main memory). The OS services it by locating the page on the backing store, obtaining a free frame (evicting a victim page if needed), loading the page, updating the page table and TLB, and then restarting the faulting instruction.",
          "explanation": "This defines both terms precisely and connects them: paging supplies the page/frame mapping, and a page fault is the trap that implements demand paging when a mapped page is absent.",
          "oneShotPreview": "Paging: fixed-size pages → frames via page table. Page fault: trap when referenced page is not in RAM; OS loads it."
        },
        {
          "q": "d) Discuss Belady’s Anomaly phenomenon in OS. [L1][CO6] [2M]",
          "a": "Belady's anomaly is the counter-intuitive situation in which, for certain reference strings, allocating more page frames results in more page faults instead of fewer. It is exhibited by FIFO (and other non-stack) replacement algorithms, which do not guarantee that the set of pages resident with n frames is a subset of the set resident with n+1 frames. A classic example is the string 1,2,3,4,1,2,5,1,2,3,4,5: FIFO produces 9 faults with three frames but 10 faults with four frames. Stack algorithms such as LRU and Optimal never show this anomaly, which is why they are preferred. The anomaly arises because a recently used page can be evicted early under FIFO even though extra frames were available.",
          "explanation": "The definition, the stack-property explanation, and a concrete counterexample fully account for the phenomenon and why it matters.",
          "oneShotPreview": "Belady: more frames → more faults under FIFO (e.g. 9 faults/3 frames vs 10/4); LRU & Optimal never show it."
        },
        {
          "q": "e) What is Seek time and Rotational Latency? [L1][CO6] [2M]",
          "a": "Seek time is the time required for the disk arm/actuator to move the read-write head from its current track to the track containing the requested block; it is usually the dominant part of a disk access. Rotational latency (rotational delay) is the additional time the platter must spin until the desired sector rotates under the head, averaging half a revolution. Together with transfer time and queuing delay, these components determine the total access time to a disk block. Disk-scheduling algorithms such as SSTF, SCAN and C-SCAN mainly try to reduce seek time, while placing related blocks close together reduces rotational latency.",
          "explanation": "This distinguishes head movement time from platter rotation time, the two principal mechanical delays in magnetic-disk access.",
          "oneShotPreview": "Seek time = arm moves to target track; rotational latency = wait for sector to spin under head (avg ½ revolution)."
        },
        {
          "q": "2 a) What is memory management? List and discuss about various techniques of managing memory in operating systems. [L2][CO6] [5M]",
          "a": "Memory management is the OS function of allocating main memory to processes, tracking what is resident, protecting one process's area from another, and reclaiming memory when it is no longer needed. Its techniques include: contiguous allocation, where each process gets one block (single partition, fixed partitions/MFT, or variable partitions/MVT with first-fit, best-fit or worst-fit); paging, which divides memory into fixed-size frames and a process into pages mapped by a page table; segmentation, which divides a program into logical variable-size segments with base and limit registers; segmented paging, a combination of both; swapping, which moves whole processes between memory and backing store; and virtual memory with demand paging, which loads only the pages currently required. Contiguous schemes are simple but fragment memory, while paging and segmentation remove external fragmentation and, with demand paging, allow processes larger than physical memory.",
          "explanation": "The answer defines the function, enumerates the recognized techniques, and discusses their distinguishing behavior and trade-offs, as expected for a 5-mark question.",
          "oneShotPreview": "Memory management = allocate, track, protect, reclaim RAM; techniques: contiguous, paging, segmentation, swapping, virtual memory."
        },
        {
          "q": "b) Explain about contiguous memory allocation in detail [L2][CO6] [5M]",
          "a": "Contiguous memory allocation assigns each process a single continuous block of main memory. In the simplest single-partition scheme, the OS occupies one part of memory and the single user process occupies the rest. In fixed-partition allocation (MFT), memory is divided into a set of fixed-size partitions, each holding one process — simple, but an oversized program cannot fit and small jobs waste space through internal fragmentation. In variable-partition allocation (MVT), the OS maintains a list of available holes and allocates a hole of the right size using first-fit, best-fit or worst-fit, which leads to external fragmentation as holes accumulate between processes. Protection is provided by base and limit (relocation/limit) registers that check every address, and fragmentation can be reduced by compaction, which shifts processes together to create one large free block (requiring dynamic relocation).",
          "explanation": "It covers the single-partition, fixed-partition and variable-partition variants, allocation strategies, fragmentation types, protection registers and compaction — the standard detail for this topic.",
          "oneShotPreview": "Contiguous allocation: one block per process; fixed vs variable partitions, first/best/worst-fit, internal & external fragmentation, base/limit registers, compaction."
        },
        {
          "q": "3 What is paging in operating systems, and how does it help manage memory efficiently? Give example. [L2][CO6] [10M]",
          "a": "Paging is a non-contiguous memory-management scheme that divides physical memory into fixed-size blocks called frames and a process's logical address space into blocks of the same size called pages; a page table maintained by the OS maps each logical page number to a physical frame number, while the offset within the page is unchanged. A logical address generated by the CPU is split into a page number p (used as an index into the page table) and an offset d (added to the frame base address) to form the physical address. Because pages may be placed in any free frame, paging eliminates external fragmentation and the need for a process to occupy contiguous memory; it also makes sharing of code and protection bits per page straightforward, and it is the basis of demand paging and virtual memory. For example, with a 32-bit address space and 4 KB (2^12 byte) pages, an address is divided into a 20-bit page number and a 12-bit offset, giving 2^20 (about one million) pages; if page 4 of a process is mapped to frame 9, then logical address (4, offset 100) maps to physical address 9×4096 + 100. The cost is internal fragmentation of at most one partial page per process and the memory needed for page tables, which is why TLBs and multilevel tables are used.",
          "explanation": "This gives the definition, address-translation mechanism, efficiency benefits, a concrete numeric example and the trade-offs — the breadth required for a 10-mark answer.",
          "oneShotPreview": "Paging maps equal-size logical pages to physical frames via a page table; removes external fragmentation, enables virtual memory. Example: 32-bit, 4 KB pages → 20-bit page + 12-bit offset."
        },
        {
          "q": "4 Explain the different techniques used to structure page tables in operating systems, and how do they help manage large address spaces efficiently? [L2][CO6] [10M]",
          "a": "A simple flat page table maps every virtual page to a frame in one table, but a 32-bit space with 4 KB pages would need about 2^20 entries per process — far too much memory to keep contiguous. Hierarchical (multilevel) page tables solve this by dividing the page number into levels: the first-level table indexes second-level tables, and unused portions of the address space need no lower-level tables, so only the tables for actually used regions are allocated. For a 64-bit space, four or more levels are used; each level adds a memory access, but a translation lookaside buffer (TLB) caches recent translations so most lookups need no table walk. An inverted page table keeps one entry per physical frame (number of frames, not virtual pages), storing the process id and virtual page for each frame; it is compact but makes sharing harder and lookup slower, so it is often combined with a hash table. Hashed page tables use a hash of the virtual page number with chaining to handle collisions, which is efficient for sparse, large address spaces. Combining these structures with a TLB makes virtual memory practical: memory use for tables stays proportional to physical memory or to allocated regions rather than to the entire virtual space.",
          "explanation": "It covers hierarchical, inverted and hashed page tables plus the TLB and explicitly explains how each reduces table memory for large address spaces.",
          "oneShotPreview": "Page-table structures: multilevel/hierarchical, inverted, hashed + TLB caching — reduce table size for huge virtual address spaces."
        },
        {
          "q": "5 a) Describe about Swapping in memory management with its advantage and disadvantages. [L2][CO6] [5M]",
          "a": "Swapping is a memory-management technique in which a process that is blocked or needs memory is moved (rolled out) from main memory to a backing store such as a disk swap area, and later brought back (rolled in) when it is ready to run again. A swap-out frees the memory it occupied for another process, and a swap-out/swap-in pair is triggered by the scheduler when memory is overcommitted or a higher-priority process needs space. Advantages include allowing more processes to be resident than physical memory can hold, supporting multiprogramming with limited RAM, and giving better response by suspending inactive processes. Disadvantages are the high disk I/O cost and transfer time, which can severely degrade performance when swapping is frequent; only whole processes can be swapped in simple schemes, and context/state must be saved and restored. Swapping is often combined with demand paging, where individual pages rather than whole processes are moved.",
          "explanation": "The answer defines roll-out/roll-in, gives the mechanism and context, and lists balanced advantages and disadvantages as the question requests.",
          "oneShotPreview": "Swapping = move idle processes to disk and back. Pros: more resident processes; cons: slow disk I/O, overhead."
        },
        {
          "q": "b) Analyze the difference between Paging and Segmentation. [L4][CO6] [5M]",
          "a": "Paging divides both physical memory and a process's logical address space into fixed-size blocks (frames and pages, typically 4 KB) managed by a page table, chosen by the OS for efficient memory use; the user is unaware of the division. Segmentation divides a program into variable-size logical units such as code, data, stack and heap, each with a base and a limit, managed by a segment table; segments are visible to the programmer and correspond to meaningful program units. Paging suffers only internal fragmentation (up to one partial page per segment) and no external fragmentation, whereas segmentation suffers external fragmentation because segments vary in size but has no internal fragmentation. Paging therefore supports virtual memory and simple allocation well, while segmentation better supports sharing, protection, and dynamic data structures. A segmented-paging system combines both to gain the logical structure of segments and the allocation efficiency of pages.",
          "explanation": "The comparison covers unit size, table used, fragmentation behavior, visibility to the programmer, and sharing/protection trade-offs — the dimensions expected in an analysis question.",
          "oneShotPreview": "Paging: fixed-size pages/frames, page table, internal fragmentation. Segmentation: variable logical segments, segment table, external fragmentation."
        },
        {
          "q": "6 Discuss segmentation in operating system with an example. [L2][CO6] [10M]",
          "a": "Segmentation is a non-contiguous memory-management scheme in which a program is divided into several variable-length logical segments, typically main code, data, stack and heap, rather than into uniform pages. Each segment has a base address (its starting physical location) and a limit (its length), stored in a segment table; a logical address consists of a segment number and an offset, and the hardware checks that the offset is less than the limit before adding it to the base to form the physical address. This makes sharing and protection natural — a code segment can be marked read-only and shared by several processes while data segments remain private — and it matches the programmer's view of a program. For example, if the code segment (number 0) has base 1000 and limit 500, then logical address (0, 120) maps to physical address 1120, while (0, 600) is trapped as an addressing error. Because segments are allocated dynamically, segmentation creates external fragmentation (holes between segments) which may require compaction; combining segmentation with paging (segmented paging) avoids this by paging each segment. Segmentation can also be combined with demand loading (demand segmentation) to support virtual memory.",
          "explanation": "It explains the segment table with base/limit, the logical-address format, sharing and protection benefits, a worked example, and the fragmentation drawback plus the segmented-paging remedy — appropriate depth for 10 marks.",
          "oneShotPreview": "Segmentation: variable-size code/data/stack segments with base+limit and offset checks; enables sharing/protection but causes external fragmentation."
        },
        {
          "q": "7 Illustrate the procedure for page fault in demand paging with neat diagram. [L3][CO6] [10M]",
          "a": "In demand paging a page is loaded into memory only when it is first referenced; if the page is not resident, the MMU raises a page-fault trap. The procedure is: (1) the CPU generates a logical address and the MMU checks the page-table entry; if the valid/invalid bit is invalid, a page fault traps to the OS. (2) The OS saves the current process context (registers, program counter) and checks that the reference is legal; if it is invalid it terminates the process, otherwise it continues. (3) The OS finds a free frame in main memory; if none is free it runs a page-replacement algorithm (FIFO, LRU, Optimal, etc.) to select a victim frame, writes the victim out to disk if it was modified (using the dirty bit). (4) It issues a disk read to bring the required page from the backing store into the free frame. (5) It updates the page table (and invalidates/updates the TLB) so the entry maps to the new frame and marks it valid. (6) It restores the saved context and restarts the instruction that caused the fault, so the memory reference now succeeds transparently. A typical diagram shows CPU → MMU/page table → physical memory, with an arrow from the page fault handler to the swap area on disk and back. Effective access time is EAT = (1 − p) × memory access time + p × page-fault service time, so a low fault rate p is essential.",
          "explanation": "This gives the complete, correctly ordered fault-handling sequence, the role of the valid/dirty bits and replacement algorithm, a diagram description, and the EAT relationship.",
          "oneShotPreview": "Page fault: invalid PTE → trap → save context → find/evict frame → read page from disk → update PTE/TLB → restart instruction."
        },
        {
          "q": "8 a) Describe in detail about CoW technique [L2][CO6] [5M]",
          "a": "Copy-on-Write (CoW) is an optimization used when a page might be shared by two or more processes, most famously during fork(). Instead of immediately duplicating the parent's pages, the parent and child initially share the same physical frames, and both page-table entries are marked read-only with a CoW flag. As long as neither process writes, no copy is made, saving memory and time. When either process writes to a shared page, the MMU raises a protection fault; the OS checks the CoW flag, allocates a new frame, copies the page contents into it, updates the writing process's page-table entry to point to the private copy with write permission, and restarts the instruction, leaving the other process with the original page. CoW therefore makes process creation fast and memory-efficient by deferring copying until it is actually needed, while still preserving process isolation; it is also used by file systems, snapshotting and memory-mapping facilities.",
          "explanation": "It explains the shared read-only pages, fault-triggered duplication, and the resulting benefit, which is the complete mechanism of copy-on-write.",
          "oneShotPreview": "CoW: fork shares frames read-only; first write faults, copies the page, gives writer a private frame — fast, memory-saving."
        },
        {
          "q": "b) Consider the following reference string 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1. Assume there are three frames. Apply LRU replacement algorithm to the reference sting above and find out how many page faults are produced. Illustrate the LRU page replacement algorithm in detail. [L3][CO6] [5M]",
          "a": "LRU (Least Recently Used) replaces the page that has not been referenced for the longest time, using recent past access as a prediction of future behavior; it can be implemented with counters or a stack and is a stack algorithm, so it never suffers Belady's anomaly. Simulating the string with three initially empty frames: 7(F) → [7]; 0(F) → [7,0]; 1(F) → [7,0,1]; 2(F, evict 7) → [0,1,2]; 0(hit) → [1,2,0]; 3(F, evict 1) → [2,0,3]; 0(hit) → [2,3,0]; 4(F, evict 2) → [3,0,4]; 2(F, evict 3) → [0,4,2]; 3(F, evict 0) → [4,2,3]; 0(F, evict 4) → [2,3,0]; 3(hit) → [2,0,3]; 2(hit) → [0,3,2]; 1(F, evict 0) → [3,2,1]; 2(hit) → [3,1,2]; 0(F, evict 3) → [1,2,0]; 1(hit) → [2,0,1]; 7(F, evict 2) → [0,1,7]; 0(hit) → [1,7,0]; 1(hit) → [7,0,1]. The three initial references are compulsory (cold) faults, and subsequent faults occur when a needed page is absent and the least recently used page is evicted. Total page faults = 12 (8 hits out of 20 references), giving a fault rate of 60%.",
          "explanation": "The frame-by-frame trace shows every hit, fault and victim, so the count of 12 is reproducible; the implementation and stack-property notes cover the 'illustrate in detail' part.",
          "oneShotPreview": "LRU on 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames = 12 page faults."
        },
        {
          "q": "9 Given page reference string: 1,2,3,2,1,5,2,1,6,2,5,6,3,1,3,6,1,2,4,3. Compare the number of page faults for LRU, FIFO and Optimal page replacement algorithm. [L4][CO6] [10M]",
          "a": "Assuming three page frames (the standard assumption for this problem), simulate each policy on the 20-reference string. FIFO replaces the oldest page regardless of use: faults occur at references 1,2,3,5,8,9,10,11,13,14,16,18,19,20, giving 14 page faults. LRU replaces the least recently used page: faults at 1,2,3,6,9,11,13,14,18,19,20, giving 11 page faults. Optimal (MIN) replaces the page whose next use is farthest in the future (or never): faults at 1,2,3,6,9,13,14,18,19, giving 9 page faults. Thus Optimal < LRU < FIFO in fault count, confirming that Optimal is the theoretical lower bound, LRU approximates it well, and FIFO is weakest (and can even exhibit Belady's anomaly). LRU and Optimal are stack algorithms, so increasing frames never increases their faults, while FIFO is not. If a different frame count is assumed the exact numbers change, but the ordering Optimal ≤ LRU ≤ FIFO generally holds.",
          "explanation": "The answer states the frame assumption, gives all three fault counts, explains each policy's victim choice, and draws the correct comparison that Optimal is best and FIFO worst.",
          "oneShotPreview": "3 frames: FIFO = 14 faults, LRU = 11 faults, Optimal = 9 faults — Optimal best, FIFO worst."
        },
        {
          "q": "10 a) Discuss about frame allocation and the algorithms used to achieve it. [L2][CO6] [5M]",
          "a": "Frame allocation decides how many physical frames each process receives when demand paging is used. The minimum number of frames a process needs is determined by its instruction set (e.g., a machine that needs up to N operands per instruction must have at least N frames), while the maximum is the number of frames in physical memory. The equal-allocation strategy splits m frames among n processes (m/n each, with leftovers distributed), which is simple but ignores process size. Proportional allocation gives frames in proportion to each process's size, so larger processes get more frames. Priority allocation reserves extra frames for high-priority processes, sometimes taking them from lower-priority ones. Replacement can be global, where any process's frame may be chosen as victim, or local, where a process can only replace its own frames; local replacement gives more predictable per-process performance. The working-set model and the page-fault frequency (PFF) algorithm are used to tune allocation dynamically: increase frames when the fault rate is high and decrease it when it is low, which also helps prevent thrashing.",
          "explanation": "It defines minimum/maximum frame needs and covers equal, proportional, priority, global vs local allocation plus working-set/PFF tuning — the complete set of allocation algorithms.",
          "oneShotPreview": "Frame allocation: equal, proportional, priority; global vs local replacement; working set & PFF tune frames to avoid thrashing."
        },
        {
          "q": "b) What is thrashing? Explain the causes of thrashing in detail. [L2][CO6] [5M]",
          "a": "Thrashing is a condition in which a process spends more time swapping pages in and out than executing useful instructions, causing a severe drop in CPU utilization and system throughput. It happens when the total number of frames demanded by the active processes exceeds the available physical memory, so each process lacks the frames needed to hold its working set (the set of pages it actively uses in a locality). A page fault frees a frame that is then immediately needed by another process, producing a chain of continuous page faults and disk I/O; the CPU sits idle while the disk is saturated. Causes include over-committing memory by admitting too many processes, poor locality or a program jumping between many pages, bad replacement choices, and global replacement that lets one process take frames from others. Remedies include local or priority-based replacement, working-set and page-fault-frequency algorithms to adjust each process's frame allocation, suspending some processes (swap out) to reduce the degree of multiprogramming, and providing more physical memory.",
          "explanation": "It defines thrashing, explains the working-set and paging-storm mechanism, lists its causes and gives standard remedies, which is the expected detailed treatment.",
          "oneShotPreview": "Thrashing = constant paging, little execution; caused by too many processes/small working sets; fix via working-set/PFF, local replacement, lower multiprogramming."
        },
        {
          "q": "11 a) Describe Mass Storage Structure Devices. [L2][CO6] [5M]",
          "a": "Mass-storage devices are secondary-storage media used to store large amounts of data persistently. Magnetic disks (hard disks) consist of one or more rotating platters coated with magnetic material; data is recorded in concentric tracks divided into sectors, and tracks at the same radius on all platters form a cylinder; a read-write head on a movable arm accesses a sector after seeking to its track and waiting for rotation. Access time is the sum of seek time, rotational latency and transfer time. Solid-state drives (SSDs) use flash memory with no moving parts, giving much faster random access and lower latency but higher cost per bit and limited write endurance. Optical disks (CD, DVD, Blu-ray) store data on a reflective track read by a laser and are mainly used for distribution and archival. Magnetic tape stores data sequentially on a moving ribbon; it is slow for random access but cheap and suitable for backups and archives. These devices differ in capacity, speed, cost and access pattern, and form the storage hierarchy below main memory.",
          "explanation": "It describes the principal mass-storage device types, the magnetic-disk geometry and access-time components, and their relative trade-offs.",
          "oneShotPreview": "Mass storage: magnetic disks (tracks/sectors/cylinders; seek+rotation+transfer), SSDs (flash, no moving parts), optical disks, tapes."
        },
        {
          "q": "b) Explain in detail about Disk management. [L2][CO6] [5M]",
          "a": "Disk management is the set of OS activities that make a raw disk usable for storing files. It begins with low-level (physical) formatting, which divides each track into sectors and writes the header/trailer information and error-correcting codes the controller needs. The disk is then partitioned into independent logical volumes, and each partition may be high-level formatted with a file system that records its metadata (including a boot block containing the bootstrap loader used at startup). The OS keeps track of free space with a free-space list implemented as a bitmap or a linked list of free blocks, allocating and reclaiming blocks as files are created and deleted. Bad blocks are detected and either marked unusable or remapped to spare sectors by the controller. Disk-scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK) decide the order of I/O requests to minimize seek time, and RAID (redundant arrays of independent disks) combines multiple disks with mirroring, parity and striping to improve performance and reliability. The OS also handles disk I/O through device drivers with buffering and caching and may provide disk quotas and defragmentation.",
          "explanation": "It covers the full lifecycle — formatting, partitioning, boot blocks, free-space management, bad-block handling, scheduling and RAID — which is what a detailed disk-management answer requires.",
          "oneShotPreview": "Disk management: physical format → partitioning → file system/boot block → free-space list → bad blocks → disk scheduling/RAID → quotas."
        }
      ]
    },
    "5": {
      "unitTitle": "File System and Protection",
      "totalQuestions": 20,
      "questions": [
        {
          "q": "a) List out the directory support operations on the file.",
          "a": "A directory is a table that maps symbolic file names to their underlying file control blocks or inodes. The basic directory-management operations are: search for a file (resolve a name to its directory entry), create a file (add a new name-to-entry mapping), delete a file (remove the mapping), list a directory (enumerate names and attributes), rename a file (change the name while keeping the same file), and traverse the file system (navigate the path from the root). These primitives are invoked by higher-level commands such as open, create, delete, and rename.",
          "explanation": "These six operations are the standard directory-management primitives in the file-system interface and directly support name resolution and file organization.",
          "oneShotPreview": "Directory ops: search, create, delete, list, rename, traverse - name-to-inode mappings."
        },
        {
          "q": "b) Give the different layers of file system.",
          "a": "A file system is built as a stack of layers: (1) I/O control - device drivers and interrupt handlers that move data between memory and the storage device; (2) basic file system - issues generic block read/write commands to the driver and manages buffers and caches; (3) file organization module - translates logical block addresses into physical block addresses and manages free space and allocation methods; (4) logical file system - manages directories, file control blocks (inodes), name resolution, and protection/access control. Each layer uses the services of the layer below it and hides those details from the layer above, giving modularity and portability.",
          "explanation": "This layered design separates low-level device details from user-level naming and protection, a standard OS structuring principle.",
          "oneShotPreview": "Layers: I/O control -> basic FS -> file-organization module -> logical FS (dirs, FCBs, protection)."
        },
        {
          "q": "c) List the reasons for local file system failures.",
          "a": "Local file systems fail for several reasons: hardware faults such as head crashes, bad sectors, or worn-out flash memory cells; sudden power loss or system crashes that interrupt writes and leave metadata inconsistent; software bugs in the OS or file-system driver that corrupt structures such as the FAT or inode tables; human error such as accidental deletion or formatting; and malicious software that damages data. Failures may be partial (a few bad blocks) or catastrophic (loss of the whole disk), and they often require consistency checking and recovery.",
          "explanation": "Distinguishing hardware, power, software, and human causes explains why backups and consistency checkers (fsck) are needed.",
          "oneShotPreview": "Failures: disk/bad blocks, power loss, software bugs, human error, malware - inconsistent metadata."
        },
        {
          "q": "d) Describe the goals of protection.",
          "a": "The main goal of protection is to control access to system resources so that only authorized users or processes can use them, preventing both accidental misuse and deliberate attacks. It enforces the three classic security goals: confidentiality (prevent unauthorized reading), integrity (prevent unauthorized modification), and availability (prevent denial of service). Protection mechanisms also define clear access rights through access-control lists or capability lists, enforce the principle of least privilege, and provide a way to detect and recover from violations.",
          "explanation": "Protection is about mediating access to resources; confidentiality, integrity, and availability are its canonical goals, with least privilege limiting damage.",
          "oneShotPreview": "Protection goals: authorized access only; confidentiality, integrity, availability; least privilege."
        },
        {
          "q": "e) Analyze the Advantages and disadvantages of Protection Rings",
          "a": "Protection rings arrange code into concentric privilege levels, with the kernel in ring 0 and user applications in outer rings such as ring 3. Advantages: they provide hardware-enforced isolation, so user programs cannot execute privileged instructions or access kernel memory directly, a faulty application cannot crash or compromise the OS, and ring switches occur only through controlled gates (system calls and traps). Disadvantages: ring crossings add performance overhead, multi-level design and debugging are complex, most hardware supports only a few levels, and rings alone cannot defend against attacks such as buffer overflows within a single level.",
          "explanation": "Rings implement the kernel/user split with a mode bit and gates; the trade-off is strong protection versus transition cost and limited levels.",
          "oneShotPreview": "Rings: strong hardware isolation and OS safety, but transition overhead, complexity, few levels."
        },
        {
          "q": "a) What is file? Explain its structure and attributes in detail.",
          "a": "A file is a named collection of related information stored on secondary storage (disk, SSD, tape) that the OS presents as a single logical unit. Logically, a file may be structured as a stream of bytes, a sequence of fixed- or variable-length records, or a tree of records; physically it is stored as blocks on a device. Common attributes include name (the human-readable identifier), type or extension, size (current and maximum), location (a pointer to where the file resides), protection/access-control information (owner, group, and read/write/execute rights), and timestamps (creation, last modification, last access). The OS keeps these attributes in a file control block (inode), while the directory maps the file name to that control block.",
          "explanation": "A file is the fundamental storage abstraction; its logical structure defines how applications see it, and attributes are the metadata needed to locate and manage it.",
          "oneShotPreview": "File = named byte/record stream on disk; attributes: name, type, size, location, protection, timestamps."
        },
        {
          "q": "b) Analyze the different file types available.",
          "a": "Files are commonly classified by content and use: text files (ASCII/Unicode, e.g., .txt, .doc), source-code files (.c, .java), object files (.o, compiled machine code not yet linked), executable files (.exe, .out, ready to run), library files (.lib, .a, .so), archive files (.zip, .tar, which group other files), and multimedia/binary files (.jpg, .mp3, .pdf). The OS and applications often infer the type from the filename extension and use it to choose default operations, such as opening with the right application or treating a .exe as executable. Internally the OS also distinguishes regular files from directories and special files such as character-device, block-device, FIFO, and socket files.",
          "explanation": "Extensions let the OS and users select meaningful operations on a file; distinguishing regular, directory, and special files explains the OS internal view.",
          "oneShotPreview": "Types: text, source, object, executable, library, archive, multimedia; plus regular/dir/special files."
        },
        {
          "q": "Explain about file access methods with Example.",
          "a": "The three principal file access methods are: (1) Sequential access - information is read in order, one record after another, using an implicit position pointer (read next / write next), e.g., a compiler reading a source file from beginning to end or a text editor reading a document. (2) Direct (random) access - any block or record can be read or written quickly by specifying its relative block/record number, e.g., a database lookup that reads a record by its address. (3) Indexed access - an index block or file maps keys or record numbers to the actual data blocks, so the index is searched first and then the desired block is read directly, e.g., a database index or an ISAM file. Most systems support sequential access, and many also support direct access.",
          "explanation": "Access methods define how the OS locates data inside a file; sequential, direct, and indexed represent increasing flexibility with different cost and use cases.",
          "oneShotPreview": "Access: sequential (read next), direct (by block number), indexed (search index then read)."
        },
        {
          "q": "Analyze the different types of directory implementations methodologies with neat diagram.",
          "a": "The two main directory implementation methods are: (1) Linear list - the directory is a list of file-name/entry pairs searched sequentially; it is simple but search is O(n). A sorted list allows binary search to reduce search time, though insertion and deletion become costlier. (2) Hash table - the file name is hashed to a bucket pointing to the directory entry or to a chain of entries (separate chaining), giving near O(1) lookup, but requiring collision handling and management of table size, especially with dynamic resizing. A typical diagram shows the linear list as consecutive [name | inode] entries, versus a hash table as an array of buckets each pointing to a linked list of entries whose names hash to that bucket.",
          "explanation": "Directory implementation is a trade-off between simple linear search and fast hashed lookup with collision handling, usually depicted as list versus bucketed hash table.",
          "oneShotPreview": "Directory impl: linear list (simple, O(n)) vs hash table (fast, needs collision chaining)."
        },
        {
          "q": "a) List and explain the various types of file operations.",
          "a": "The basic file operations provided by the OS are: create (make a new file by allocating an entry and file control block); write (put data at the current file position); read (get data from the current position); seek/reposition (move the position pointer to a given offset); delete (remove the file from the directory and free its blocks); truncate (erase contents but keep attributes such as name and permissions); append (add data at the end); and rename (change the name). Because most operations need the file attributes and location, open() loads the file control block into memory and returns a handle, and close() writes back modified information and releases the handle. Multi-user systems also provide copy, link, and lock operations.",
          "explanation": "These operations form the file API; the open/close pair is essential because it avoids repeated name resolution and tracks the file position and state.",
          "oneShotPreview": "Ops: create, write, read, seek, delete, truncate, append, rename, plus open/close handle."
        },
        {
          "q": "b) Describe different file allocation methods in detail.",
          "a": "File allocation methods decide how disk blocks are assigned to a file: (1) Contiguous allocation - each file occupies consecutive blocks, giving fast sequential and direct access and simple implementation, but causing external fragmentation and requiring the file size in advance. (2) Linked allocation - each block holds data plus a pointer to the next block, so blocks can be scattered, which eliminates external fragmentation and needs no size declaration, but makes random access slow and a lost pointer destroys the chain (improved by the FAT, which keeps pointers in a separate table). (3) Indexed allocation - a dedicated index block holds pointers to all data blocks, supporting efficient random access with no external fragmentation, but using extra space for the index and potentially overflowing for very large files (handled by linked index blocks, multi-level indexing, or combined schemes as in Unix inodes).",
          "explanation": "These are the classic alternatives; the comparison turns on access speed, fragmentation, and space overhead, with FAT and Unix inodes as practical refinements.",
          "oneShotPreview": "Allocation: contiguous (fast, fragmentation), linked (no fragmentation, slow random), indexed (fast random, overhead)."
        },
        {
          "q": "Illustrate the different directory structures in operating system with its advantages and disadvantages.",
          "a": "Directory structures organize files as follows: (1) Single-level - one flat directory for all files; simple, but name collisions occur and no grouping is possible. (2) Two-level - one directory per user (first level = user, second = files); avoids name clashes between users but cannot form subdirectories. (3) Tree-structured - directories may contain files and subdirectories, forming a hierarchy from the root; supports logical grouping and unique path names, but sharing across branches is awkward. (4) Acyclic graph - allows shared files/subdirectories via links while forbidding cycles; sharing is easy but link maintenance is more complex. (5) General graph - permits cycles and arbitrary links for maximum flexibility but needs cycle detection (e.g., garbage collection) to avoid infinite traversals. Most modern OSes use a tree with links.",
          "explanation": "The progression from flat to graph directories trades simplicity for organization and sharing; cycle handling distinguishes acyclic from general graphs.",
          "oneShotPreview": "Structures: single, two-level, tree, acyclic graph, general graph - simplicity vs. organization/sharing."
        },
        {
          "q": "Explain in detail how free space management is performed in operating system.",
          "a": "Free-space management tracks which disk blocks are available for allocation. Common techniques are: (1) Bit vector (bitmap) - one bit per block (0 = free, 1 = allocated); simple and fast for finding contiguous runs, but the bitmap must be kept in memory and can be large. (2) Linked list (free list) - free blocks are chained together with a pointer to the first free block; it wastes no space but scanning is slow and it cannot easily find contiguous blocks. Variants improve this: grouping stores a block of free-block addresses in each free block, and counting stores a block address plus a count of following free blocks. The OS updates these structures whenever blocks are allocated or freed, balancing memory overhead, speed of finding contiguous space, and reliability.",
          "explanation": "Free-space lists and bitmaps are the core of allocation; bitmaps give fast contiguous search at memory cost, linked lists save space but are slower.",
          "oneShotPreview": "Free space: bitmap (fast, memory), free list (compact, slow), plus grouping/counting variants."
        },
        {
          "q": "Describe file system mounting in operating systems with an example and how does it manage access to files across different storage devices and partitions?",
          "a": "Mounting attaches a file system on a storage device to an existing directory (the mount point) in the root tree so its files become accessible through one namespace. For example, a USB drive formatted as ext4 on /dev/sdb1 can be mounted at /mnt/usb; afterwards /mnt/usb/file.txt reads that file from the device. The OS verifies the file-system type by reading the volume superblock (or boot record), installs its driver through the Virtual File System (VFS) layer, and records the device-to-mount-point mapping in a mount table. The VFS translates operations on pathnames into operations on the correct underlying file system and device, so users see a single unified directory tree spanning multiple disks and partitions. Unmounting detaches the device safely and flushes cached data.",
          "explanation": "Mounting integrates separate volumes into one namespace via a mount point and VFS; the superblock identifies the FS and the mount table records the mapping.",
          "oneShotPreview": "Mount = attach FS at a directory (mount point); VFS unifies devices into one tree (e.g., /dev/sdb1 to /mnt/usb)."
        },
        {
          "q": "Discuss how operating systems handle file sharing, protection, and consistency in multi-user and distributed environments, and what are the different semantics used to manage changes to shared files.",
          "a": "In multi-user systems the OS protects shared files through access-control lists or capability lists attached to each file (owner/group/others with read, write, execute rights) and enforces them on every open/read/write, often using locks to serialize concurrent updates. In distributed systems (e.g., NFS, AFS) a server holds the authoritative copy while clients cache files, so consistency protocols, file locks, and cache-coherence rules maintain a coherent view. The semantics defining when a write becomes visible to other processes are: UNIX semantics (each write is immediately visible to all users); MS-DOS semantics (changes become visible only after the file is closed); session semantics (changes visible only when a session closes, with concurrent sessions seeing separate versions, last closer wins); immutable-files semantics (files cannot be modified after creation); and transactional semantics (updates grouped into all-or-nothing atomic transactions, e.g., copy-on-write). These trade immediacy of sharing against concurrency control and consistency overhead.",
          "explanation": "Sharing requires protection (ACLs/locks) and consistency (caching/coherence); the listed semantics are the standard classifications of when modifications become visible.",
          "oneShotPreview": "Sharing: ACLs plus locks; distributed caching/coherence. Semantics: UNIX, MS-DOS, session, immutable, transactional."
        },
        {
          "q": "a) What is meant by Threats? List and describe few.",
          "a": "A threat is any potential event or action that could violate the security of a system, i.e., harm the confidentiality, integrity, or availability (CIA) of data and resources. Threats may be accidental (human error, software bugs, hardware failure) or intentional/malicious. Common examples include: viruses and worms that self-replicate and damage systems; Trojan horses that hide malicious code inside legitimate-looking software; phishing/social engineering that tricks users into revealing credentials; eavesdropping or sniffing that secretly captures network traffic (loss of confidentiality); denial-of-service attacks that flood resources and make services unavailable; and unauthorized modification or fabrication of data (loss of integrity). A threat is a potential danger, whereas an attack is the actual attempt to exploit it.",
          "explanation": "Threats map directly to the CIA goals; separating accidental vs. intentional and passive vs. active explains how protection mechanisms are chosen.",
          "oneShotPreview": "Threat = potential security violation (CIA); e.g., virus, worm, Trojan, phishing, sniffing, DoS."
        },
        {
          "q": "b) Explain about the domain of Protection.",
          "a": "A protection domain is an abstract environment that specifies the set of resources (objects) a process may access and the operations it may perform on each. Each domain is described using an access matrix, whose rows are domains and columns are objects, and whose cells list allowed rights (read, write, execute, etc.). A process runs inside a domain and can only use objects for which that domain has rights, but it may switch domains - for example, a user process enters the kernel domain through a system call (a domain switch implemented by the mode bit and a controlled gate). Domains can be realized as the user/kernel domains of a CPU, as per-user domains, or as per-process domains, with rights stored as access-control lists (column-wise) or capability lists (row-wise).",
          "explanation": "The domain is the unit of access control in the access-matrix model, and switching domains (user to kernel) is how controlled privilege escalation happens.",
          "oneShotPreview": "Domain = set of (object, rights) a process may use; access matrix rows=domains, cols=objects; switch via syscalls."
        },
        {
          "q": "i) Uses of Protection rings",
          "a": "Protection rings are used to enforce privilege separation between the operating system kernel and user applications. Ring 0 (kernel mode) runs trusted code that can execute privileged instructions and access all memory and devices, while outer rings such as ring 3 (user mode) stop applications from directly manipulating hardware or kernel data. Rings also provide controlled transitions: a user program enters a more privileged ring only through gates such as system calls, traps, and interrupts, which protects the OS from accidental or malicious misuse. They support different levels of trust, allowing drivers or system services to run at intermediate privilege, and form the hardware basis for policies such as least privilege.",
          "explanation": "Rings use hardware privilege levels and gates to isolate the kernel and control how user code requests privileged services.",
          "oneShotPreview": "Uses: isolate kernel from user apps, guard privileged instructions/memory, gate via syscalls and traps."
        },
        {
          "q": "ii) Levels of Protection rings",
          "a": "Protection rings are numbered concentric privilege levels, with ring 0 the most privileged and outer rings progressively less privileged. The x86 architecture, for example, defines four rings: ring 0 for the kernel, rings 1 and 2 for system services and device drivers (rarely used), and ring 3 for user applications. Each level can access resources allocated to it or to less-privileged rings, and moving inward requires passing through a controlled gate. Most general-purpose operating systems (Windows, Linux) use only two levels - ring 0 for kernel mode and ring 3 for user mode - to keep design and transitions simple, while the extra rings remain for specialized or virtualized systems.",
          "explanation": "The ring number indicates privilege (lower is more privileged), and practical OSes typically collapse the four hardware rings into just kernel and user modes.",
          "oneShotPreview": "Levels: ring 0 kernel (highest) then 1/2 services then 3 user (lowest); common OSes use only 0 and 3."
        },
        {
          "q": "iii) Modes of Protection Ring",
          "a": "The modes associated with protection rings are kernel (supervisor/system) mode and user mode, indicated by a mode bit in the CPU. In kernel mode (ring 0) all instructions, including privileged ones, can execute and all memory and devices are accessible; in user mode (outer rings) only a subset of instructions is allowed and access to protected memory or hardware causes a trap. A process normally runs in user mode and switches to kernel mode only through controlled events - system calls (software traps), hardware interrupts, and exceptions/faults - returning to user mode when the kernel service completes. This dual-mode operation is the practical implementation of ring protection in most operating systems.",
          "explanation": "Modes are the CPU-visible realization of rings; the mode bit plus trap/interrupt gates ensure privileged operations happen only in kernel mode.",
          "oneShotPreview": "Modes: kernel (privileged, ring 0) vs. user (restricted); switch via syscalls/interrupts/traps (mode bit)."
        }
      ]
    }
  },
  "23HS0838": {
    "1": {
      "unitTitle": "Descriptive Statistics",
      "totalQuestions": 17,
      "questions": [
        {
          "q": "a) Define Population and Sample.",
          "a": "A population is the entire set of items, individuals or observations about which information is desired, for example all students of a college or all bulbs produced in a factory. A sample is a finite subset of the population selected for study, such as 50 students chosen from that college. We compute statistics (such as the sample mean) from the sample and use them to estimate population parameters (such as the population mean). Sampling is preferred when studying the whole population is too costly, time-consuming or impossible.",
          "explanation": "Population is the complete group under study while a sample is a representative part of it; statistical inference moves from sample statistics to population parameters.",
          "oneShotPreview": "Population = whole group under study; sample = representative subset used to estimate population parameters."
        },
        {
          "q": "b) What is Primary and Secondary data in statistics?",
          "a": "Primary data are data collected directly by the investigator for the specific purpose of the study, using methods such as surveys, interviews, experiments or questionnaires. Secondary data are data already collected by someone else for another purpose and then reused, for example census reports, government publications, research journals or company records. Primary data are original, current and tailored to the problem but costly and time-consuming to gather; secondary data are inexpensive and quickly available but may be outdated or not exactly suited to the problem at hand.",
          "explanation": "The distinction rests on who collected the data and why: first-hand for the current study versus previously collected and reused for a new purpose.",
          "oneShotPreview": "Primary = first-hand data collected for your study; secondary = already-collected data reused from other sources."
        },
        {
          "q": "c) The weights of 6 competitors in a game are given below 58,62,56,63,55,61 kgs. Find arithmetic mean of weight of competitors.",
          "a": "The arithmetic mean of ungrouped data is the sum of all observations divided by their number. Sum of weights = 58 + 62 + 56 + 63 + 55 + 61 = 355 kg, and the number of competitors is 6. Hence mean = 355/6 = 59.1667 kg, or approximately 59.17 kg. The average weight of the competitors is therefore about 59.17 kg.",
          "explanation": "Applying the direct mean formula Σx/n to the six raw weights gives 355/6 = 59.1667 kg.",
          "oneShotPreview": "Mean weight = 355/6 ≈ 59.17 kg."
        },
        {
          "q": "d) What is skewness in statistics with example?",
          "a": "Skewness measures the lack of symmetry in a frequency distribution, that is, the extent to which observations are drawn out more on one side of the mode than the other. If the tail is longer on the right (towards higher values), the distribution is positively skewed, with mean > median > mode; income distribution is an example, since a few very rich people pull the mean upward. If the tail is longer on the left, the distribution is negatively skewed, with mean < median < mode; marks on a very easy test, where most students score high and a few score very low, are an example. A perfectly symmetric distribution has zero skewness.",
          "explanation": "Skewness describes the direction and degree of asymmetry, and the ordering of mean, median and mode reveals its sign.",
          "oneShotPreview": "Skewness = asymmetry; right tail gives positive skew (mean>median>mode), left tail gives negative skew."
        },
        {
          "q": "e) Define Kurtosis in statistics.",
          "a": "Kurtosis measures the degree of peakedness or flatness of a frequency distribution relative to a normal distribution. It is measured by the coefficient β2 = μ4/μ2² (fourth central moment divided by the square of the variance), or by excess kurtosis γ2 = β2 − 3. For a normal distribution β2 = 3 (γ2 = 0), which is called mesokurtic. If β2 > 3 the distribution is leptokurtic, having a narrow high peak and heavy tails; if β2 < 3 it is platykurtic, having a flatter peak and light tails.",
          "explanation": "Kurtosis is based on the fourth standardized moment, and 3 is the benchmark value for a normal (mesokurtic) distribution.",
          "oneShotPreview": "Kurtosis = peakedness/tail heaviness; β2=μ4/μ2²; >3 leptokurtic, =3 mesokurtic, <3 platykurtic."
        },
        {
          "q": "a) Find arithmetic mean to the following data using step deviation method Marks 10-20 20-30 30-40 40-50 50-60 frequency 5 8 25 22 10",
          "a": "Take the assumed mean A = 35 and class width h = 10. The class mid-values are 15, 25, 35, 45 and 55, so the step deviations u = (x − A)/h are −2, −1, 0, 1 and 2. Multiplying by frequencies gives fu = −10, −8, 0, 22 and 20, hence Σfu = 24 with N = 5 + 8 + 25 + 22 + 10 = 70. Therefore mean = A + h(Σfu/N) = 35 + 10(24/70) = 35 + 3.43 = 38.43 marks (approximately).",
          "explanation": "The step-deviation formula A + h(Σfu/N) is algebraically identical to the direct mean but simplifies calculation by scaling deviations by the class width.",
          "oneShotPreview": "A=35, h=10, Σfu=24, N=70 → mean = 35 + 10(24/70) ≈ 38.43."
        },
        {
          "q": "b) Find the median to the following data; x 5 8 11 14 17 20 23 f 2 8 12 20 10 6 3",
          "a": "The cumulative frequencies are 2, 10, 22, 42, 52, 58 and 61, so N = 61 and N/2 = 30.5. The cumulative frequency just greater than 30.5 is 42, which corresponds to the value x = 14. Hence the median of the distribution is 14. Equivalently, since N is odd, the median is the (N+1)/2 = 31st observation, which also falls at x = 14.",
          "explanation": "For a discrete frequency distribution the median is the smallest value whose cumulative frequency is at least N/2, which here is 14.",
          "oneShotPreview": "N=61, cf ≥ 30.5 is 42 at x=14 → median = 14."
        },
        {
          "q": "a) Find arithmetic mean to the following data; X 1 2 3 4 5 F 5 8 10 12 6",
          "a": "Using the direct method for a discrete frequency distribution, compute ΣfX = 1×5 + 2×8 + 3×10 + 4×12 + 5×6 = 5 + 16 + 30 + 48 + 30 = 129. Total frequency N = 5 + 8 + 10 + 12 + 6 = 41. Therefore the arithmetic mean = ΣfX/N = 129/41 = 3.146, or about 3.15.",
          "explanation": "Frequencies act as weights, so the correct mean is the weighted average ΣfX/Σf rather than the simple average of the X values.",
          "oneShotPreview": "Mean = ΣfX/N = 129/41 ≈ 3.146."
        },
        {
          "q": "b) Find mode to the following data; X 0-5 5-10 10-15 15-20 20-25 25-30 30-35 35-40 F 5 7 10 18 20 12 8 2",
          "a": "The largest frequency is 20, so the modal class is 20–25. Here L = 20, f = 20, the preceding class frequency f1 = 18, the following class frequency f2 = 12 and class width h = 5. Applying the grouped-data mode formula: Mode = L + h(f − f1)/(2f − f1 − f2) = 20 + 5(20 − 18)/(40 − 18 − 12) = 20 + 5×2/10 = 21. Hence the mode is 21.",
          "explanation": "The interpolation formula estimates the mode inside the modal class using the neighbouring class frequencies, and the arithmetic gives exactly 21.",
          "oneShotPreview": "Modal class 20–25 → mode = 20 + 5(2/10) = 21."
        },
        {
          "q": "4 The first four moments of a distribution about the value 5 of the variables are 2, 20, 40 and 50. Calculate mean, Variance, and of the distribution. [L5][CO1] [10M]",
          "a": "Given moments about A = 5: μ'1 = 2, μ'2 = 20, μ'3 = 40, μ'4 = 50. Mean = A + μ'1 = 5 + 2 = 7. Variance μ2 = μ'2 − μ'1² = 20 − 4 = 16, so S.D. = 4. Central moments: μ3 = μ'3 − 3μ'1μ'2 + 2μ'1³ = 40 − 120 + 16 = −64; μ4 = μ'4 − 4μ'1μ'3 + 6μ'1²μ'2 − 3μ'1⁴ = 50 − 320 + 480 − 48 = 162. Hence β1 = μ3²/μ2³ = 4096/4096 = 1 (γ1 = −1, negatively skewed) and β2 = μ4/μ2² = 162/256 = 0.633 (γ2 = −2.367, platykurtic). The PDF text is truncated after 'and'; the intended missing quantities are the skewness and kurtosis coefficients β1 and β2.",
          "explanation": "Moments about an arbitrary origin are converted to central moments with the standard transformation formulas, from which mean, variance, β1 and β2 follow directly.",
          "oneShotPreview": "Mean = 7, variance = 16 (SD = 4), β1 = 1 (γ1 = −1), β2 = 0.633 (γ2 = −2.37)."
        },
        {
          "q": "5 Calculate correlation coefficient to the following data; X 10 15 12 17 13 16 24 14 22 20 Y 30 42 45 46 33 34 40 35 39 38 [L5][CO1] [10M]",
          "a": "Using Pearson's product-moment formula with deviations from X̄ = 16.3 and Ȳ = 38.2: Σxy = 66.4, Σx² = 182.1 and Σy² = 247.6. Therefore r = Σxy/√(Σx²·Σy²) = 66.4/√(182.1 × 247.6) = 66.4/212.36 = 0.313. The correlation coefficient is about +0.31, indicating only a weak positive linear relationship between X and Y.",
          "explanation": "Pearson's r is the covariance divided by the product of the standard deviations; the cross-product and square sums give it directly.",
          "oneShotPreview": "r = 66.4/√(182.1×247.6) ≈ +0.313 (weak positive correlation)."
        },
        {
          "q": "6 Calculate the correlation coefficient for the following heights (in inches) of fathers(X) and their sons(Y) X 65 66 67 67 68 69 70 72 Y 67 68 65 68 72 72 69 71 [L5][CO1] [10M]",
          "a": "Here X̄ = 68 and Ȳ = 69. The sums of squared and cross-product deviations are Σxy = 24, Σx² = 36 and Σy² = 44. Hence r = Σxy/√(Σx²·Σy²) = 24/√(36 × 44) = 24/39.80 = 0.603. There is a moderate positive correlation of about +0.60 between the heights of fathers and their sons.",
          "explanation": "Applying Pearson's formula to the eight pairs of heights gives r ≈ 0.60, showing a moderate tendency for taller fathers to have taller sons.",
          "oneShotPreview": "r = 24/√(36×44) ≈ +0.603 (moderate positive correlation)."
        },
        {
          "q": "7 Compute rank correlation coefficient for the following data; X 20 14 36 29 5 11 Y 19 9 25 10 2 6 [L5][CO1] [10M]",
          "a": "Assigning ranks in ascending order, X gets ranks 4, 3, 6, 5, 1, 2 and Y gets ranks 5, 3, 6, 4, 1, 2. The rank differences are d = −1, 0, 0, 1, 0, 0, so Σd² = 2 with n = 6 and no ties. Spearman's rank correlation is ρ = 1 − 6Σd²/[n(n²−1)] = 1 − 12/(6×35) = 1 − 0.0571 = 0.943. The rank correlation is about +0.94, a very strong positive association.",
          "explanation": "With no repeated values Spearman's simple formula applies directly, and Σd² = 2 yields ρ ≈ 0.943.",
          "oneShotPreview": "Σd² = 2, n = 6 → ρ = 1 − 12/210 ≈ +0.943."
        },
        {
          "q": "8 Ten competitors in a musical test were ranked by the three judges A, B and C in the following order Ranks by A 1 6 5 10 3 2 4 9 7 8 Ranks by B 3 5 8 4 7 10 2 1 6 9 Ranks by C 6 4 9 8 1 2 3 10 5 7 Using rank correlation coefficient method, discuss which pair of judges has the nearest approach to common likings in music. [L3][CO1] [10M]",
          "a": "Compute Spearman's rho for each pair; with n = 10 the denominator n(n²−1) = 990. For A and B, Σd² = 200, so ρ = 1 − 6(200)/990 = −0.212. For A and C, Σd² = 60, so ρ = 1 − 6(60)/990 = +0.636. For B and C, Σd² = 214, so ρ = 1 − 6(214)/990 = −0.297. The largest and only positive coefficient is that between judges A and C (ρ ≈ +0.64). Hence judges A and C have the nearest approach to common likings in music, while judge B tends to disagree with both.",
          "explanation": "A higher, more positive rank correlation means closer agreement between two judges, so comparing the three pairwise coefficients identifies the closest pair.",
          "oneShotPreview": "ρ(A,B) = −0.21, ρ(A,C) = +0.64, ρ(B,C) = −0.30 → judges A and C agree most."
        },
        {
          "q": "9 Obtain the rank correlation coefficient for the following data; X 68 64 75 50 64 80 75 40 55 64 Y 62 58 68 45 81 60 68 48 50 70 [L5][CO1] [10M]",
          "a": "Repeated values receive average ranks: X ranks are 7, 5, 8.5, 2, 5, 10, 8.5, 1, 3, 5 (64 occurs three times and 75 twice), and Y ranks are 6, 4, 7.5, 1, 10, 5, 7.5, 2, 3, 9 (68 occurs twice). Here Σd² = 72, so the uncorrected coefficient is ρ = 1 − 6(72)/(10×99) = 0.564. With tie corrections, Σ(t³−t) = 30 for X and 6 for Y, giving ρ = [165 − 72 − (30+6)/12]/√[(165 − 15)(165 − 3)] = 90/155.89 = 0.577. Thus the rank correlation is about +0.56, or +0.58 with the tie correction — a moderate positive association.",
          "explanation": "Tied observations must be given average ranks, and the tie-corrected Spearman formula adjusts the numerator and denominator for those ties to give the more accurate value.",
          "oneShotPreview": "Average ranks, Σd² = 72 → ρ ≈ +0.564 (+0.577 with tie correction)."
        },
        {
          "q": "10 Find the regression line by the method of least squares for the following data X 10 12 13 16 17 20 25 y 10 22 24 27 29 33 37 [L3][CO1] [10M]",
          "a": "Here n = 7, X̄ = 113/7 = 16.143 and ȳ = 26, with Σxy = 248 and Σx² = 158.857. The regression coefficient of y on x is b_yx = Σxy/Σx² = 248/158.857 = 1.561. The least-squares line passes through (X̄, ȳ), so y − 26 = 1.561(x − 16.143), which simplifies to y = 0.799 + 1.561x. The corresponding correlation is r ≈ 0.921, confirming a strong positive fit.",
          "explanation": "The least-squares regression line of y on x passes through the means and has slope b_yx = Σxy/Σx², minimizing the sum of squared vertical errors.",
          "oneShotPreview": "y − 26 = 1.561(x − 16.143), i.e. y ≈ 0.80 + 1.561x."
        },
        {
          "q": "11 Find two regression equations from the following data; X 10 25 34 42 37 35 36 45 Y 56 64 63 58 73 75 82 77 [L1][CO1] [10M]",
          "a": "Here n = 8, X̄ = 264/8 = 33 and Ȳ = 548/8 = 68.5, with Σxy = 397, Σx² = 848 and Σy² = 634. Regression of y on x: b_yx = Σxy/Σx² = 397/848 = 0.468, giving y − 68.5 = 0.468(x − 33), i.e. y = 53.05 + 0.468x. Regression of x on y: b_xy = Σxy/Σy² = 397/634 = 0.626, giving x − 33 = 0.626(y − 68.5), i.e. x = −9.89 + 0.626y. Their product b_yx·b_xy ≈ 0.293 = r², consistent with r ≈ 0.54.",
          "explanation": "Each least-squares regression line passes through (X̄, Ȳ); the two slopes are Σxy/Σx² and Σxy/Σy² respectively.",
          "oneShotPreview": "y = 53.05 + 0.468x; x = −9.89 + 0.626y."
        }
      ]
    },
    "2": {
      "unitTitle": "Probability",
      "totalQuestions": 19,
      "questions": [
        {
          "q": "1 a) Define Probability. [L1][CO2] [2M]",
          "a": "Probability is a numerical measure of the likelihood that an event will occur, and it always lies between 0 and 1. For an experiment with equally likely outcomes it is defined as P(E) = (number of outcomes favourable to E)/(total number of equally likely outcomes). Axiomatically, P is a set function with 0 <= P(E) <= 1, P(S) = 1, and P(E1 union E2) = P(E1) + P(E2) for mutually exclusive events. P(E) = 0 means the event is impossible and P(E) = 1 means it is certain.",
          "explanation": "This is the classical and axiomatic definition that underlies every probability calculation; the simple ratio formula is valid only when outcomes are equally likely.",
          "oneShotPreview": "Probability = favourable outcomes / total equally likely outcomes; a number in [0,1]."
        },
        {
          "q": "1 b) Evaluate P(A/B), if P(A) = 7/13, P(B) = 9/13 and P(A ∩ B) = 4/13. [L5][CO2] [2M]",
          "a": "Using the conditional probability formula, P(A/B) = P(A ∩ B)/P(B). Substituting the given values, P(A/B) = (4/13)/(9/13) = 4/9. The value P(A) = 7/13 is extra information and is not needed here.",
          "explanation": "Conditioning on B restricts the sample space to B, so the chance of A inside it is the joint probability divided by P(B).",
          "oneShotPreview": "P(A/B) = (4/13)/(9/13) = 4/9."
        },
        {
          "q": "1 c) State Baye's theorem. [L1][CO2] [2M]",
          "a": "If B1, B2, ..., Bn form a partition of the sample space S with P(Bi) > 0, and A is any event with P(A) > 0, then P(Bi/A) = P(Bi) P(A/Bi) / sum over j of [P(Bj) P(A/Bj)]. The denominator is the total probability of A. In words: posterior probability = (prior probability x likelihood) / evidence.",
          "explanation": "Bayes' theorem converts a known conditional probability P(A/Bi) into the unknown reverse probability P(Bi/A) using the partition and the law of total probability.",
          "oneShotPreview": "P(Bi|A) = P(Bi)P(A|Bi) / Σ P(Bj)P(A|Bj) — prior x likelihood / evidence."
        },
        {
          "q": "1 d) Explain types of random variables. [L2][CO2] [2M]",
          "a": "A discrete random variable takes a finite or countably infinite set of values (for example, the number of heads in three tosses) and is described by a probability mass function p(x) = P(X=x) with sum p(x) = 1. A continuous random variable takes any value in an interval (for example, height or time) and is described by a probability density function f(x) >= 0 with integral of f(x) equal to 1, where P(a < X < b) is the integral of f from a to b. Mixed variables have both discrete and continuous parts. Binomial and Poisson are discrete; uniform, exponential and normal are continuous.",
          "explanation": "The distinction decides whether probabilities are found by summing a PMF (discrete) or integrating a PDF (continuous).",
          "oneShotPreview": "Discrete = countable values with a PMF; continuous = interval values with a PDF."
        },
        {
          "q": "1 e) Define expected value of a discrete random variable. [L1][CO2] [2M]",
          "a": "The expected value (mean) of a discrete random variable X with probability mass function p(x) is E(X) = sum over all x of x*p(x), the probability-weighted average of all possible values. More generally, E[g(X)] = sum g(x)*p(x). It represents the long-run average value observed when the experiment is repeated a very large number of times.",
          "explanation": "Weighting each possible value by its probability gives the centre of the distribution, the quantity that remains stable across repeated trials.",
          "oneShotPreview": "E(X) = Σ x·p(x); the probability-weighted long-run average."
        },
        {
          "q": "2 a) A class consists of 6 girls and 10 boys. If a committee of 3 is chosen at random from the class, find the Probability that (i) 3 boys are selected (ii) Exactly 2 girls are selected. [L1][CO2] [5M]",
          "a": "The total number of ways to choose 3 of the 16 students is C(16,3) = 560. (i) Choosing 3 boys from 10 gives C(10,3) = 120, so P = 120/560 = 3/14. (ii) Exactly 2 girls means 2 of 6 girls and 1 of 10 boys: C(6,2)*C(10,1) = 15*10 = 150, so P = 150/560 = 15/56.",
          "explanation": "Every committee of 3 is equally likely, so each probability is the number of favourable combinations divided by the total number of combinations.",
          "oneShotPreview": "C(10,3)/C(16,3) = 3/14; C(6,2)C(10,1)/C(16,3) = 15/56."
        },
        {
          "q": "2 b) If three coins are tossed. Find the probability of getting i) 3 heads ii) 2 heads only iii) no heads. [L1][CO2] [5M]",
          "a": "Three fair coins produce 2^3 = 8 equally likely outcomes. (i) 3 heads: only HHH, so P = 1/8. (ii) exactly 2 heads: HHT, HTH, THH (3 outcomes), so P = 3/8. (iii) no heads: only TTT, so P = 1/8.",
          "explanation": "This uses the classical definition: count the outcomes matching each event and divide by the 8 equally likely outcomes.",
          "oneShotPreview": "3 heads = 1/8, exactly 2 heads = 3/8, no heads = 1/8."
        },
        {
          "q": "3 a) Two cards are selected at random from 10 cards numbered 1 to 10. Find the probability that the sum is even if (i) The two cards are drawn together. (ii) The two cards drawn one after other with replacement. [L5][CO2] [5M]",
          "a": "Among 1 to 10 there are 5 odd and 5 even numbers, and the sum is even when both cards are odd or both are even. (i) Drawn together (without replacement): [C(5,2)+C(5,2)]/C(10,2) = (10+10)/45 = 20/45 = 4/9. (ii) With replacement: (5/10)(5/10) + (5/10)(5/10) = 1/4 + 1/4 = 1/2.",
          "explanation": "Odd+odd and even+even are the only ways to obtain an even sum; with replacement the chance of each draw being odd or even stays at 1/2.",
          "oneShotPreview": "Even sum: 4/9 without replacement, 1/2 with replacement."
        },
        {
          "q": "3 b) Determine (i) P(B/A) (ii) P(A/B^c) if A and B are events with P(A) = 1/3, P(B) = 1/4, P(A ∪ B) = 1/2. [L5][CO2] [5M]",
          "a": "First obtain the intersection from the addition rule: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 1/3 + 1/4 - 1/2 = 1/12. (i) P(B/A) = P(A ∩ B)/P(A) = (1/12)/(1/3) = 1/4. (ii) P(A ∩ B^c) = P(A) - P(A ∩ B) = 1/3 - 1/12 = 1/4, and P(B^c) = 1 - 1/4 = 3/4, so P(A/B^c) = (1/4)/(3/4) = 1/3.",
          "explanation": "The addition rule supplies the missing joint probability, and each conditional probability is the appropriate joint probability divided by the probability of the given event.",
          "oneShotPreview": "P(A∩B) = 1/12; P(B|A) = 1/4; P(A|B^c) = 1/3."
        },
        {
          "q": "4 a) In a certain town 40% have brown hair, 25% have brown eyes and 15% have both brown hair and brown eyes. A person is selected at random from the town. i) If he has brown hair, what is the probability that he has brown eyes also? ii) If he has brown eyes, determine the probability that he does not have brown hair? [L1][CO2] [5M]",
          "a": "Let H be brown hair and E be brown eyes, with P(H)=0.40, P(E)=0.25 and P(H ∩ E)=0.15. (i) P(E/H) = P(H ∩ E)/P(H) = 0.15/0.40 = 3/8 = 0.375. (ii) P(H^c ∩ E) = P(E) - P(H ∩ E) = 0.25 - 0.15 = 0.10, so P(H^c/E) = 0.10/0.25 = 2/5 = 0.4.",
          "explanation": "A conditional probability restricts the sample space to the given characteristic, so only the part of the joint event lying inside that characteristic is counted.",
          "oneShotPreview": "P(eyes|hair) = 0.15/0.40 = 0.375; P(no hair|eyes) = 0.10/0.25 = 0.4."
        },
        {
          "q": "4 b) The probability that students A,B,C,D solve the problem are 1/3, 2/5, 1/5 and 1/4 respectively If all of them try to solve the problem, What is the probability that the problem is solved? [L3][CO2] [5M]",
          "a": "Assuming the students work independently, the problem is solved if at least one of them succeeds. P(none solves) = (1-1/3)(1-2/5)(1-1/5)(1-1/4) = (2/3)(3/5)(4/5)(3/4) = 6/25 = 0.24. Therefore P(problem is solved) = 1 - 6/25 = 19/25 = 0.76.",
          "explanation": "It is easier to use the complement: the problem stays unsolved only when all four fail, and independence lets their failure probabilities multiply.",
          "oneShotPreview": "1 - (2/3)(3/5)(4/5)(3/4) = 1 - 6/25 = 19/25 = 0.76."
        },
        {
          "q": "5 Two dice are thrown. Let A be the event that the sum of the point on the faces is 9. Let B be the event that at least one number is 6. Find (i) P(A ∩ B) (ii) P(A ∪ B) (iii) P(A^c ∪ B^c) (iv) P(A^c ∩ B^c) (v) P(A ∩ B^c) [L1][CO2] [10M]",
          "a": "There are 36 equally likely outcomes. A = {(3,6),(4,5),(5,4),(6,3)} so P(A)=4/36; B (at least one 6) has 11 outcomes so P(B)=11/36; A ∩ B = {(3,6),(6,3)} so P(A ∩ B)=2/36=1/18. Hence (i) P(A ∩ B)=1/18; (ii) P(A ∪ B)=4/36+11/36-2/36=13/36; (iii) P(A^c ∪ B^c)=1-P(A ∩ B)=17/18 by De Morgan's law; (iv) P(A^c ∩ B^c)=1-P(A ∪ B)=23/36; (v) P(A ∩ B^c)=P(A)-P(A ∩ B)=2/36=1/18.",
          "explanation": "Counting the outcomes in A, B and A ∩ B and then applying the addition rule, complement rule and De Morgan's laws yields all five requested probabilities.",
          "oneShotPreview": "A∩B=1/18; A∪B=13/36; A^c∪B^c=17/18; A^c∩B^c=23/36; A∩B^c=1/18."
        },
        {
          "q": "6 In a certain college 25% of boys and 10% of girls are studying mathematics. The girls Constitute 60% of the student body. (a) What is the probability that mathematics is being studied? (b) If a student is selected at random and is found to be studying mathematics, find the probability that the student is a girl? (c) a boy [L1][CO2] [10M]",
          "a": "Let G be girl, B be boy and M be studying mathematics. P(G)=0.6, P(B)=0.4, P(M/G)=0.10, P(M/B)=0.25. (a) By the law of total probability, P(M)=0.6(0.10)+0.4(0.25)=0.06+0.10=0.16. (b) By Bayes' theorem, P(G/M)=0.06/0.16=3/8=0.375. (c) P(B/M)=0.10/0.16=5/8=0.625.",
          "explanation": "Total probability gives the overall rate of studying mathematics, and Bayes' theorem reverses it to identify which group a randomly selected mathematics student belongs to.",
          "oneShotPreview": "P(M)=0.16; P(girl|M)=3/8; P(boy|M)=5/8."
        },
        {
          "q": "7 Two dice are thrown. Let X assign to each point (a, b) in S the maximum of its numbers i.e, X(a,b)= max (a,b). Find the probability distribution. X is a random variable with X(s)={1,2,3,4,5,6}. Also find the mean and variance of the distribution. [L5][CO2] [10M]",
          "a": "For X = k the pairs with maximum k are (k,1)...(k,k) and (1,k)...(k-1,k), i.e. 2k-1 outcomes, so P(X=k)=(2k-1)/36 for k=1..6: 1/36, 3/36, 5/36, 7/36, 9/36, 11/36. E(X)=[1(1)+2(3)+3(5)+4(7)+5(9)+6(11)]/36=161/36≈4.472. E(X^2)=[1(1)+4(3)+9(5)+16(7)+25(9)+36(11)]/36=791/36≈21.972. Var(X)=791/36-(161/36)^2=2555/1296≈1.971.",
          "explanation": "Counting the 2k-1 pairs whose maximum is k builds the PMF, and the formulas E(X)=sum x p(x) and Var(X)=E(X^2)-[E(X)]^2 give the mean and variance.",
          "oneShotPreview": "P(X=k)=(2k-1)/36; mean=161/36≈4.47; variance=2555/1296≈1.97."
        },
        {
          "q": "8 A random variable X has the following probability function: X = 0,1,2,3,4,5,6,7 with P(x) = 0, K, 2K, 2K, 3K, K^2, 2K^2, 7K^2+K. Determine (i) K (ii) Evaluate P(X>=6) and P(0<X<5) (iii) if P(X<=K)>1/2, find the minimum value of K (iv) variance. [L5][CO2] [10M]",
          "a": "Summing all probabilities gives 9K+10K^2=1, i.e. 10K^2+9K-1=0, so the positive root is K=1/10. (ii) P(X>=6)=2K^2+(7K^2+K)=9K^2+K=0.19; P(0<X<5)=K+2K+2K+3K=8K=0.8. (iii) Reading K here as the value k of X, the cumulative probabilities are P(X<=3)=0.5 and P(X<=4)=0.8, so the minimum integer k with P(X<=k)>1/2 is 4. (iv) With probabilities 0, 0.1, 0.2, 0.2, 0.3, 0.01, 0.02, 0.17: E(X)=3.66 and E(X^2)=16.8, hence Var(X)=16.8-(3.66)^2=3.4044.",
          "explanation": "Normalising the PMF fixes K; every other quantity is then found by summing the appropriate probabilities and applying Var(X)=E(X^2)-[E(X)]^2.",
          "oneShotPreview": "K=1/10; P(X>=6)=0.19; P(0<X<5)=0.8; minimum k=4; Var=3.4044."
        },
        {
          "q": "9 a) Find the mean and variance of the uniform probability distribution given by f(x) = 1/n for x = 1,2,...,n. [L1][CO2] [5M]",
          "a": "For the discrete uniform distribution on 1,...,n, E(X)=(1/n) times the sum of x from 1 to n = (1/n)*n(n+1)/2 = (n+1)/2. Also E(X^2)=(1/n) times the sum of x^2 = (n+1)(2n+1)/6. Therefore Var(X)=(n+1)(2n+1)/6 - (n+1)^2/4 = (n^2-1)/12.",
          "explanation": "Substituting the standard sums of the first n integers and their squares into the moment formulas gives closed-form mean and variance.",
          "oneShotPreview": "Mean = (n+1)/2; Variance = (n^2-1)/12."
        },
        {
          "q": "a) If a random variable has a Probability density f(x) as f(x) = {2e^{-2x}, for x > 0; 0, for x <= 0}. Find the Probabilities that it will take on a value (i) Between 1&3 (ii) Greater than 0.5 [L1][CO2] [5M]",
          "a": "This is the exponential distribution with rate 2. (i) P(1<X<3) = integral from 1 to 3 of 2e^{-2x} dx = e^{-2} - e^{-6} ≈ 0.1353 - 0.0025 = 0.1329. (ii) P(X>0.5) = integral from 0.5 to infinity of 2e^{-2x} dx = e^{-1} ≈ 0.3679.",
          "explanation": "Integrating the density over the required interval gives the probability, and for an exponential density the tail integral from a to infinity simplifies to e^{-2a}.",
          "oneShotPreview": "P(1<X<3)=e^-2-e^-6≈0.133; P(X>0.5)=e^-1≈0.368."
        },
        {
          "q": "10 A continuous random variable has the probability density function. f(x) = {k(1 - x^2); 0 < x < 1; 0; Otherwise}. Determine i) Constant 'k' ii) Mean and iii) Variance. [L5][CO2] [10M]",
          "a": "Normalising the density: integral from 0 to 1 of k(1-x^2) dx = k[x - x^3/3]_0^1 = 2k/3 = 1, so k = 3/2. Mean E(X) = (3/2) integral from 0 to 1 of x(1-x^2) dx = (3/2)(1/4) = 3/8 = 0.375. E(X^2) = (3/2) integral from 0 to 1 of x^2(1-x^2) dx = (3/2)(2/15) = 1/5. Variance = 1/5 - (3/8)^2 = 19/320 ≈ 0.0594.",
          "explanation": "The normalisation condition fixes k, and integrating x f(x) and x^2 f(x) gives the mean and second moment required for the variance.",
          "oneShotPreview": "k=3/2; mean=3/8; variance=19/320≈0.0594."
        },
        {
          "q": "11 Probability density function of a random variable X is f(x) = {(1/2) sin x, for 0 <= x <= pi; 0, elsewhere}. Find the mean, mode and median of the distribution and also find the probability between 0 and pi/2. [L1][CO2] [10M]",
          "a": "The density is symmetric about pi/2. Mean E(X) = (1/2) integral from 0 to pi of x sin x dx = (1/2)[-x cos x + sin x]_0^pi = pi/2. The density is greatest where sin x = 1, i.e. at x = pi/2, so the mode is pi/2; by symmetry the median is also pi/2. P(0<X<pi/2) = (1/2) integral from 0 to pi/2 of sin x dx = (1/2)[-cos x]_0^{pi/2} = 1/2.",
          "explanation": "The symmetric sine density is centred at pi/2 so the mean, mode and median coincide there, and the integral over half the support is exactly half the total probability.",
          "oneShotPreview": "Mean = mode = median = pi/2; P(0<X<pi/2) = 1/2."
        }
      ]
    },
    "3": {
      "unitTitle": "Probability Distributions",
      "totalQuestions": 19,
      "questions": [
        {
          "q": "1 a) State the formula for Binomial distribution. [L1][CO3] [2M]",
          "a": "If X is the number of successes in n independent Bernoulli trials, each with success probability p and failure probability q = 1 - p, then X follows a binomial distribution. Its probability mass function is P(X = x) = nCx * p^x * q^(n-x), for x = 0, 1, 2, ..., n. The mean is np and the variance is npq. It is a discrete distribution used when there are a fixed number of independent trials with only two possible outcomes per trial.",
          "explanation": "Each of the x successes contributes p and the remaining n-x trials contribute q; the factor nCx counts the number of ways to choose which trials are successes. Independence of trials allows the probabilities to be multiplied.",
          "oneShotPreview": "Binomial: P(X=x) = nCx p^x q^(n-x); mean = np, variance = npq."
        },
        {
          "q": "1 b) A coin is tossed 9 times. Find the probability of getting 5 heads? [L1][CO3] [2M]",
          "a": "Here n = 9 trials, p = 1/2 (head) and q = 1/2 (tail), so X ~ Binomial(9, 1/2). P(X = 5) = 9C5 * (1/2)^5 * (1/2)^4 = 126 / 2^9 = 126/512 = 63/256. Therefore the probability of getting exactly 5 heads is about 0.2461 (24.61%).",
          "explanation": "A fair coin gives equal success/failure probability, so the answer reduces to the number of favourable arrangements (9C5 = 126) divided by the total 2^9 = 4096 equally likely outcomes.",
          "oneShotPreview": "P(5 heads in 9 tosses) = 126/512 = 0.2461."
        },
        {
          "q": "1 c) Define Poisson distribution. [L1][CO3] [2M]",
          "a": "The Poisson distribution is a discrete probability distribution that gives the probability of a given number of events occurring in a fixed interval of time, space, or volume when the events occur independently and at a constant average rate λ. Its probability mass function is P(X = x) = e^(-λ) * λ^x / x!, for x = 0, 1, 2, ... . Both the mean and the variance of the distribution equal λ. It is often used as an approximation to the binomial distribution when n is large and p is small.",
          "explanation": "It models rare, random, independent occurrences such as the number of defective items or incoming calls, where only the average rate λ is known. The single parameter λ completely determines the distribution.",
          "oneShotPreview": "Poisson: P(X=x)=e^-λ λ^x/x!, modelling random events; mean = variance = λ."
        },
        {
          "q": "1 d) If the variance of a Poisson variate is 3. Find P(1 ≤ X < 4) ? [L1][CO4] [2M]",
          "a": "For a Poisson distribution, variance = mean = λ, so λ = 3. We need P(1 ≤ X < 4) = P(X=1) + P(X=2) + P(X=3). Using P(X=x) = e^-3 * 3^x / x!, this is e^-3 (3 + 9/2 + 27/6) = e^-3 (3 + 4.5 + 4.5) = 12 e^-3. Since e^-3 ≈ 0.049787, the probability is 12 * 0.049787 ≈ 0.5974.",
          "explanation": "The Poisson variance equals its parameter, fixing λ = 3; summing the three integer probabilities in the interval gives the required range probability.",
          "oneShotPreview": "λ = 3; P(1≤X<4) = 12e^-3 ≈ 0.5974."
        },
        {
          "q": "1 e) State Normal probability density formula. [L1][CO4] [2M]",
          "a": "A continuous random variable X with mean μ and standard deviation σ is normally distributed, written X ~ N(μ, σ²), with probability density function f(x) = (1 / (σ sqrt(2π))) * exp[ -(x - μ)² / (2σ²) ], for -∞ < x < ∞. The curve is bell-shaped and symmetric about x = μ. The standard normal distribution has μ = 0 and σ = 1, with z = (x - μ)/σ.",
          "explanation": "The density integrates to 1 over the real line; the exponent measures the squared distance from the mean, giving the characteristic symmetric bell shape controlled by σ.",
          "oneShotPreview": "Normal pdf: f(x) = (1/(σ√(2π))) e^{-(x-μ)²/(2σ²)}."
        },
        {
          "q": "2 a) Derive mean of Binomial distribution. [L3][CO3] [5M]",
          "a": "Mean E[X] = Σ_{x=0}^{n} x * nCx * p^x * q^(n-x). The x = 0 term is zero, so E[X] = Σ_{x=1}^{n} x * n!/(x!(n-x)!) * p^x * q^(n-x). Cancelling x with x! gives x * nCx = n * (n-1)C(x-1), hence E[X] = np * Σ_{x=1}^{n} (n-1)C(x-1) * p^(x-1) * q^(n-x). Putting y = x-1, the sum becomes Σ_{y=0}^{n-1} (n-1)Cy * p^y * q^((n-1)-y) = (p + q)^(n-1) = 1 by the binomial theorem. Therefore E[X] = np.",
          "explanation": "The factor x nCx is rewritten as n(n-1)C(x-1), leaving a complete binomial expansion that sums to 1, so only np remains.",
          "oneShotPreview": "Mean of Binomial, E[X] = Σ x·nCx p^x q^(n-x) = np."
        },
        {
          "q": "2 b) 20% of items produced from a factory are defective. Find the probability that in a sample of 5 chosen at random (i) one is defective (ii) P(1 < x < 4) [L1][CO3] [5M]",
          "a": "Here p = 0.20 (defective), q = 0.80 and n = 5, so X ~ Binomial(5, 0.2). (i) P(X=1) = 5C1 (0.2)(0.8)^4 = 5 * 0.2 * 0.4096 = 0.4096. (ii) P(1 < X < 4) = P(X=2) + P(X=3) = 10(0.2)^2(0.8)^3 + 10(0.2)^3(0.8)^2 = 0.2048 + 0.0512 = 0.2560.",
          "explanation": "Each item is an independent Bernoulli trial with defect probability 0.2; applying the binomial pmf and summing over the requested values gives the two probabilities.",
          "oneShotPreview": "n=5, p=0.2: P(X=1)=0.4096; P(1<X<4)=0.2560."
        },
        {
          "q": "3 Fit a Binomial distribution to the following frequency distribution: x: 0, 1, 2, 3, 4, 5; f: 2, 14, 20, 34, 22, 8 [L3][CO3] [10M]",
          "a": "Total frequency N = 100. Mean = Σfx/N = (14 + 40 + 102 + 88 + 40)/100 = 284/100 = 2.84. Since mean = np with n = 5, p = 2.84/5 = 0.568 and q = 0.432. Expected frequency = N * 5Cx * p^x * q^(5-x). The fitted frequencies are: x=0 → 1.5, x=1 → 9.9, x=2 → 26.0, x=3 → 34.2, x=4 → 22.5, x=5 → 5.9 (total ≈ 100). These are close to the observed frequencies, so the binomial fit with p = 0.568 is reasonable.",
          "explanation": "Fitting means equating the theoretical mean np to the observed sample mean to estimate p, then using the binomial pmf scaled by N to generate expected counts for comparison.",
          "oneShotPreview": "Fit: p = 0.568, q = 0.432 → expected f ≈ 1.5, 9.9, 26.0, 34.2, 22.5, 5.9."
        },
        {
          "q": "4 a) Out of 800 families with 5 children each, how many would you expect to have (i) 3 boys (ii) 5 girls (iii) either 2 or 3 boys. Assume equal probabilities for boys and girls. [L3][CO3] [5M]",
          "a": "With p = q = 1/2 and n = 5, X ~ Binomial(5, 1/2). (i) P(3 boys) = 5C3 (1/2)^5 = 10/32 = 0.3125, so expected families = 800 * 0.3125 = 250. (ii) P(5 girls) = P(0 boys) = (1/2)^5 = 1/32 = 0.03125, so expected = 800 * 0.03125 = 25. (iii) P(2 or 3 boys) = 10/32 + 10/32 = 0.625, so expected = 800 * 0.625 = 500 families.",
          "explanation": "Equal boy/girl probabilities make all 2^5 = 32 birth sequences equally likely; multiplying each probability by 800 gives the expected number of families.",
          "oneShotPreview": "Expected families: (i) 250, (ii) 25, (iii) 500."
        },
        {
          "q": "4 b) Two dice are thrown five times. Find the probability of getting 7 as sum i) At least once (ii) P(1 < x < 5) [L1][CO3] [5M]",
          "a": "For one throw of two dice, P(sum = 7) = 6/36 = 1/6, so with five throws X ~ Binomial(5, 1/6), q = 5/6. (i) P(X ≥ 1) = 1 - P(X=0) = 1 - (5/6)^5 = 1 - 3125/7776 ≈ 0.5981. (ii) P(1 < X < 5) = P(2) + P(3) + P(4) = 1250/7776 + 250/7776 + 25/7776 = 1525/7776 ≈ 0.1961.",
          "explanation": "Each throw of the dice is an independent trial with success probability 1/6; the complement rule handles 'at least once' and direct summation handles the strict inequality range.",
          "oneShotPreview": "p=1/6, n=5: P(at least one 7) ≈ 0.5981; P(1<X<5) ≈ 0.1961."
        },
        {
          "q": "5 a) Derive mean of Poisson distribution. [L3][CO3] [5M]",
          "a": "For X ~ Poisson(λ), E[X] = Σ_{x=0}^∞ x * e^-λ * λ^x / x!. The x = 0 term vanishes, so E[X] = e^-λ * Σ_{x=1}^∞ x * λ^x / x! = e^-λ * Σ_{x=1}^∞ λ^x / (x-1)!. Factor out λ: E[X] = λ e^-λ * Σ_{x=1}^∞ λ^(x-1) / (x-1)!. Let y = x-1; then the sum is Σ_{y=0}^∞ λ^y / y! = e^λ. Hence E[X] = λ e^-λ * e^λ = λ. Thus the mean of a Poisson distribution is λ (which also equals its variance).",
          "explanation": "Cancelling x against x! and shifting the index leaves the exponential series, so the entire sum collapses to the single parameter λ.",
          "oneShotPreview": "Poisson mean: E[X] = Σ x·e^-λ λ^x/x! = λ."
        },
        {
          "q": "5 b) If 2% of light bulbs are defective. Find the probability that (i) 2 defective items (ii) at least 3 defective items (iii) P(2 < x < 5) in a sample of 100. [L1][CO3] [5M]",
          "a": "Here n = 100, p = 0.02, so λ = np = 2 and X ~ Poisson(2). (i) P(X=2) = e^-2 * 2^2/2! = 2e^-2 ≈ 0.2707. (ii) P(X ≥ 3) = 1 - P(X ≤ 2) = 1 - e^-2(1 + 2 + 2) = 1 - 5e^-2 ≈ 1 - 0.6767 = 0.3233. (iii) P(2 < X < 5) = P(3) + P(4) = e^-2(8/6 + 16/24) = 2e^-2 ≈ 0.2707.",
          "explanation": "With large n and small p the Poisson approximation is appropriate; the mean λ = 2 drives all three probability calculations.",
          "oneShotPreview": "λ=2: P(X=2)=0.2707; P(X≥3)=0.3233; P(2<X<5)=0.2707."
        },
        {
          "q": "6 Fit a Poisson distribution to the following data: x: 0, 1, 2, 3, 4, 5, Total; f: 142, 156, 69, 27, 5, 1, 400 [L3][CO4] [10M]",
          "a": "Total N = 400. Mean = Σfx/N = (156 + 138 + 81 + 20 + 5)/400 = 400/400 = 1, so λ = 1. Expected frequency = N * e^-1 * 1^x / x! = 400 * e^-1 / x!. Using e^-1 ≈ 0.3679, the fitted frequencies are: x=0 → 147.2, x=1 → 147.2, x=2 → 73.6, x=3 → 24.5, x=4 → 6.1, x=5 → 1.2 (sum ≈ 400). These closely match the observed frequencies, confirming a good Poisson fit with λ = 1.",
          "explanation": "For a Poisson fit the sample mean estimates λ; multiplying the pmf by N gives expected counts that can be compared directly with the given frequencies.",
          "oneShotPreview": "Fit with λ=1: expected f ≈ 147.2, 147.2, 73.6, 24.5, 6.1, 1.2."
        },
        {
          "q": "7 a) An insurance agent policy of 5 men all of identical age and good in health. The probability that a man of this age will be alive 30 years is 2/3. Find the probability that in 30 years. (i) At least one-man (ii) Atmost three will be alive [L1][CO4] [5M]",
          "a": "Let X be the number alive after 30 years; n = 5, p = 2/3, q = 1/3, so X ~ Binomial(5, 2/3). (i) P(X ≥ 1) = 1 - P(X=0) = 1 - (1/3)^5 = 1 - 1/243 = 242/243 ≈ 0.9959. (ii) P(X ≤ 3) = P(0)+P(1)+P(2)+P(3) = (1 + 10 + 40 + 80)/243 = 131/243 ≈ 0.5391.",
          "explanation": "Each man's survival is an independent Bernoulli trial with p = 2/3; the complement rule gives 'at least one' and direct summation gives 'at most three'.",
          "oneShotPreview": "n=5, p=2/3: P(at least 1 alive)=0.9959; P(at most 3)=0.5391."
        },
        {
          "q": "7 b) If X is a Poisson variate such that 2P(X = 0) = P(X = 2) find (i) Mean (ii) P(2 < X ≤ 5) iii) P(X ≥ 3). [L1][CO4] [5M]",
          "a": "Given 2P(X=0) = P(X=2): 2e^-λ = e^-λ λ²/2!, so 2 = λ²/2 and λ² = 4, giving λ = 2. (i) Mean = λ = 2. (ii) P(2 < X ≤ 5) = P(3)+P(4)+P(5) = e^-2(8/6 + 16/24 + 32/120) = (34/15)e^-2 ≈ 0.3068. (iii) P(X ≥ 3) = 1 - P(X ≤ 2) = 1 - e^-2(1 + 2 + 2) = 1 - 5e^-2 ≈ 0.3233.",
          "explanation": "The given relation determines λ from the Poisson pmf; all requested quantities then follow by substituting λ = 2 into the pmf and summing the relevant terms.",
          "oneShotPreview": "λ = 2 (mean); P(2<X≤5) ≈ 0.3068; P(X≥3) ≈ 0.3233."
        },
        {
          "q": "8 If X is a normal variate with mean 30 and standard deviation 5. Find i) P(26 ≤ X ≤ 40) and ii) P(X ≥ 45) [L1][CO4] [10M]",
          "a": "X ~ N(30, 5²), so Z = (X - 30)/5. (i) For X = 26, z = -0.8; for X = 40, z = 2. Hence P(26 ≤ X ≤ 40) = Φ(2) - Φ(-0.8) = 0.9772 - 0.2119 = 0.7654. (ii) For X = 45, z = (45-30)/5 = 3, so P(X ≥ 45) = P(Z ≥ 3) = 1 - Φ(3) = 1 - 0.99865 = 0.00135 (about 0.0014).",
          "explanation": "Standardizing converts the normal variable to Z ~ N(0,1), and standard normal table areas give the required interval and right-tail probabilities.",
          "oneShotPreview": "μ=30, σ=5: P(26≤X≤40)=0.7654; P(X≥45)=0.00135."
        },
        {
          "q": "9 In a sample of 1000 cases, the mean of certain test is 14 and standard deviation is 2.5. Assuming the distribution to be normal find (i) How many students score between 12 and 15 (ii) How many students score above 18? (iii) How many students score below 8? [L3][CO4] [10M]",
          "a": "μ = 14, σ = 2.5, N = 1000, with Z = (X - 14)/2.5. (i) z values are (12-14)/2.5 = -0.8 and (15-14)/2.5 = 0.4, so P = Φ(0.4) - Φ(-0.8) = 0.6554 - 0.2119 = 0.4435, giving about 444 students. (ii) z = (18-14)/2.5 = 1.6, P(Z > 1.6) = 1 - 0.9452 = 0.0548, giving about 55 students. (iii) z = (8-14)/2.5 = -2.4, P(Z < -2.4) = 0.0082, giving about 8 students.",
          "explanation": "After standardizing, each probability is an area under the standard normal curve; multiplying by the sample size converts the proportion into an expected number of students.",
          "oneShotPreview": "≈444 students between 12-15; ≈55 above 18; ≈8 below 8."
        },
        {
          "q": "10 If the masses of 300 students are normally distributed with mean 68kgs and standard deviation 3kgs. How many students have masses i) Greater than 72kgs ii) Less than or equal to 64kg iii) Between 65 and 71 kgs inclusive. [L3][CO4] [10M]",
          "a": "μ = 68, σ = 3, N = 300, with Z = (X - 68)/3. (i) z = (72-68)/3 ≈ 1.33, so P(Z > 1.33) = 1 - 0.9082 = 0.0918, giving about 28 students (27-28). (ii) z = (64-68)/3 ≈ -1.33, so P(Z ≤ -1.33) = 0.0918 by symmetry, again about 28 students. (iii) z = -1 and +1 for 65 and 71 kg, so P(-1 ≤ Z ≤ 1) = 2(0.8413) - 1 = 0.6826, giving about 205 students.",
          "explanation": "Standardizing each mass to a z-score lets us use symmetry and standard normal areas; multiplying by 300 converts each proportion into an expected count.",
          "oneShotPreview": ">72kg ≈ 28; ≤64kg ≈ 28; 65-71kg ≈ 205 students."
        },
        {
          "q": "11 If p is probability of getting head in tossing a coin and a coin is tossed 12 times then Find P(3≤X≤6) using i) Binomial distribution ii) Normal distribution. [L3][CO4] [10M]",
          "a": "Assuming a fair coin, p = 1/2, q = 1/2, n = 12. (i) Binomial: P(3≤X≤6) = (12C3 + 12C4 + 12C5 + 12C6)/2^12 = (220 + 495 + 792 + 924)/4096 = 2431/4096 ≈ 0.5935. (ii) Normal approximation: μ = np = 6, σ = sqrt(npq) = sqrt(3) ≈ 1.732. With continuity correction, P(2.5 < Y < 6.5) gives z = -2.02 and 0.29, so P = Φ(0.29) - Φ(-2.02) ≈ 0.6141 - 0.0217 = 0.5924, which closely agrees with the exact binomial result.",
          "explanation": "The exact binomial sum is compared with the normal approximation (using the continuity correction); both agree closely because np and nq exceed 5, validating the approximation.",
          "oneShotPreview": "Fair coin: Binomial P(3≤X≤6)=0.5935; Normal approx ≈0.592."
        }
      ]
    },
    "4": {
      "unitTitle": "Estimation and Testing of Hypothesis",
      "totalQuestions": 22,
      "questions": [
        {
          "q": "1 a) What is Point Estimation in Statistics?",
          "a": "Point estimation is the technique of using a single numerical value, computed from sample data, to estimate an unknown population parameter. That single value is the point estimate, and the statistic used to obtain it (for example the sample mean x̄ for the population mean μ) is the point estimator. Unlike interval estimation it gives one best-guess number rather than a range of plausible values. A good point estimator is unbiased, consistent, efficient and sufficient.",
          "explanation": "Point estimation is defined by a single-number estimate derived from a sample, in contrast to interval estimation which supplies a confidence interval.",
          "oneShotPreview": "A single sample-based number used to estimate an unknown population parameter."
        },
        {
          "q": "1 b) Find the value of correction factor if n=10 and N=1000.",
          "a": "The finite population correction (FPC) factor is √[(N−n)/(N−1)] = √[(1000−10)/(1000−1)] = √(990/999) ≈ √0.99099 ≈ 0.9955. The common approximation √(1−n/N) = √(1−10/1000) = √0.99 ≈ 0.995 gives essentially the same result. Since n/N = 0.01 is small, the correction factor is close to 1 and is often ignored.",
          "explanation": "The FPC reduces the standard error when sampling without replacement from a finite population; substituting n = 10, N = 1000 gives about 0.995.",
          "oneShotPreview": "FPC = √[(N−n)/(N−1)] ≈ 0.9955 for n=10, N=1000."
        },
        {
          "q": "1 c) The variance of a population is 2. The size of the sample collected from the population is 169. What is the standard error of mean?",
          "a": "Population variance σ² = 2, so σ = √2 ≈ 1.4142. With n = 169, √n = 13. The standard error of the mean is σ/√n = √2/13 ≈ 1.4142/13 ≈ 0.1088, i.e. about 0.109.",
          "explanation": "The standard error of the mean is σ/√n, so dividing √2 by 13 gives approximately 0.109.",
          "oneShotPreview": "SE = σ/√n = √2/13 ≈ 0.109."
        },
        {
          "q": "1 d) Define Critical region.",
          "a": "The critical region (or rejection region) is the set of values of a test statistic for which the null hypothesis H0 is rejected. Its boundaries, called critical values, are fixed by the chosen significance level α and by whether the test is one-tailed or two-tailed. If the computed statistic falls inside the region the result is significant and H0 is rejected; otherwise H0 is not rejected.",
          "explanation": "It is correct because the critical region is precisely the rejection rule of a hypothesis test, determined by α and the tails of the sampling distribution.",
          "oneShotPreview": "Set of test-statistic values that lead to rejecting H0, fixed by α."
        },
        {
          "q": "1 e) Define i) Null hypothesis ii) Alternative hypothesis.",
          "a": "The null hypothesis (H0) is a statement about a population parameter assumed true until sample evidence contradicts it; it represents the status quo or \"no difference / no effect\" claim and is the hypothesis actually tested. The alternative hypothesis (H1 or Ha) contradicts H0 and is the statement the investigator seeks to establish, such as μ ≠ μ0, μ > μ0 or μ < μ0. A test either rejects H0 in favour of H1 or fails to reject H0.",
          "explanation": "This captures the standard roles: H0 is the default assumption being tested, while H1 is the competing claim accepted only when H0 is rejected.",
          "oneShotPreview": "H0 = default no-effect claim under test; H1 = competing claim we seek to establish."
        },
        {
          "q": "2 a) A population consists of six numbers 4, 8, 12, 16, 20, 24. Find the population mean.",
          "a": "The population mean is μ = (4 + 8 + 12 + 16 + 20 + 24)/6 = 84/6 = 14.",
          "explanation": "The population mean is the sum of all population values divided by the population size N = 6, giving 14.",
          "oneShotPreview": "Population mean = 84/6 = 14."
        },
        {
          "q": "2 b) A population consists of six numbers 4, 8, 12, 16, 20, 24. Find the population standard deviation.",
          "a": "Deviations from μ = 14 are −10, −6, −2, 2, 6, 10, whose squares are 100, 36, 4, 4, 36, 100 and sum to 280. The population variance is σ² = 280/6 ≈ 46.67, so the population standard deviation is σ = √(280/6) ≈ 6.83.",
          "explanation": "Population standard deviation is √[Σ(X−μ)²/N]; dividing the sum of squared deviations 280 by N = 6 and taking the square root gives ≈ 6.83.",
          "oneShotPreview": "σ = √(280/6) ≈ 6.83."
        },
        {
          "q": "2 c) For samples of size two drawn without replacement from the population 4, 8, 12, 16, 20, 24, find the mean of the sampling distribution of means.",
          "a": "The mean of the sampling distribution of the sample mean equals the population mean, so μ_x̄ = μ = 14. This holds for all samples of size two drawn without replacement from this population.",
          "explanation": "By a fundamental property of sampling distributions, E(x̄) = μ, so the average of all possible sample means is 14.",
          "oneShotPreview": "Mean of the sampling distribution of means = population mean = 14."
        },
        {
          "q": "2 d) For samples of size two drawn without replacement from the population 4, 8, 12, 16, 20, 24, find the standard deviation of the sampling distribution of means.",
          "a": "For n = 2 drawn without replacement from N = 6, σ_x̄ = (σ/√n)·√[(N−n)/(N−1)] = (6.8313/√2)·√(4/5) ≈ 4.8305 × 0.8944 ≈ 4.32. Direct enumeration of all 15 possible samples gives variance 280/15 ≈ 18.67 and standard deviation √18.67 ≈ 4.32, confirming the result.",
          "explanation": "The without-replacement standard error formula, and direct enumeration of the 15 sample means, both give about 4.32.",
          "oneShotPreview": "Standard error of the mean ≈ 4.32 (n=2, N=6, without replacement)."
        },
        {
          "q": "3 A random sample of size 100 is taken from an infinite population having the mean μ = 76 and variance σ² = 256. What is the probability that x̄ will be between 75 and 78?",
          "a": "Here σ = 16, so the standard error of the mean is σ/√n = 16/10 = 1.6. Standardising the limits gives z₁ = (75 − 76)/1.6 = −0.625 and z₂ = (78 − 76)/1.6 = 1.25. Hence P(75 < x̄ < 78) = Φ(1.25) − Φ(−0.625) ≈ 0.8944 − 0.2660 ≈ 0.6284, or about 62.8%.",
          "explanation": "By the central limit theorem x̄ is approximately normal with mean 76 and SE 1.6; the area between z = −0.625 and z = 1.25 is about 0.628.",
          "oneShotPreview": "P(75 < x̄ < 78) ≈ 0.6284 using z = −0.625 and z = 1.25."
        },
        {
          "q": "4 a) What is the maximum error one can expect to make with probability 0.9 when using the mean of a random sample of size n=64 to estimate the mean of a population with σ² = 2.56?",
          "a": "Here σ = √2.56 = 1.6 and the standard error is 1.6/√64 = 1.6/8 = 0.2. For probability 0.9 (90% confidence) the critical value is z = 1.645, so the maximum error is E = z·σ/√n = 1.645 × 0.2 = 0.329, about 0.33. Thus with probability 0.9 the sample mean differs from the population mean by no more than roughly 0.33.",
          "explanation": "The margin of error is z times the standard error; with z = 1.645 for 90% confidence and SE = 0.2, E ≈ 0.329.",
          "oneShotPreview": "Maximum error ≈ 0.329 (z = 1.645 × SE = 0.2)."
        },
        {
          "q": "4 b) A random sample of size 100 is taken from a population with σ = 5.1. Given that the sample mean is x̄ = 21.6, construct a 95% confidence interval for the population mean μ.",
          "a": "The standard error is σ/√n = 5.1/10 = 0.51 and z₀.₀₂₅ = 1.96. The 95% confidence interval is x̄ ± 1.96·SE = 21.6 ± (1.96 × 0.51) = 21.6 ± 0.9996 ≈ (20.60, 22.60). We are 95% confident that the true population mean lies between about 20.6 and 22.6.",
          "explanation": "A large-sample 95% confidence interval is x̄ ± z₀.₀₂₅·σ/√n; substituting the given values yields 21.6 ± 1.0.",
          "oneShotPreview": "95% confidence interval for μ ≈ (20.60, 22.60)."
        },
        {
          "q": "5 a) A sample of 400 items is taken from a population whose standard deviation is 10. The mean of the sample is 40. Test whether the sample has come from a population with mean 38.",
          "a": "Take H0: μ = 38 against H1: μ ≠ 38. The standard error is 10/√400 = 0.5 and z = (40 − 38)/0.5 = 4. Since |z| = 4 exceeds the 5% critical value 1.96 (and the 1% value 2.58), H0 is rejected. The sample has not come from a population with mean 38; its mean is significantly higher.",
          "explanation": "A large-sample z-test of the population mean gives z = 4, far beyond the rejection threshold, so the claimed mean of 38 is untenable.",
          "oneShotPreview": "z = 4 > 1.96; reject H0 — sample is not from a mean-38 population."
        },
        {
          "q": "5 b) In a random sample of 125 cool drinkers 68 said they prefer Thumsup to Pepsi. Test the null hypothesis P = 0.5 against the alternative hypothesis P > 0.5.",
          "a": "H0: P = 0.5, H1: P > 0.5. The sample proportion is p̂ = 68/125 = 0.544 and the standard error under H0 is √(0.5 × 0.5 /125) ≈ 0.0447. Hence z = (0.544 − 0.5)/0.0447 ≈ 0.98. Since 0.98 < 1.645 (one-tailed 5% critical value), H0 is not rejected; the data do not give significant evidence that more than half of cool drinkers prefer Thumsup.",
          "explanation": "The one-sample proportion z-test gives z ≈ 0.98, below the 1.645 cut-off, so the observed excess is attributable to sampling variation.",
          "oneShotPreview": "z ≈ 0.98 < 1.645; do not reject P = 0.5."
        },
        {
          "q": "6 a) A sample of 64 students have mean weight of 70 kgs. Can this be regarded as a sample from a population with mean weight 56 kgs and standard deviation 25 kgs?",
          "a": "H0: μ = 56 against H1: μ ≠ 56. The standard error is 25/√64 = 25/8 = 3.125, so z = (70 − 56)/3.125 = 4.48. Since |z| = 4.48 is far greater than 1.96 (5%) and 2.58 (1%), H0 is rejected. The sample with mean weight 70 kg cannot be regarded as drawn from a population with mean 56 kg and standard deviation 25 kg.",
          "explanation": "The z-statistic of 4.48 lies deep in the rejection region, showing the observed mean is incompatible with a population mean of 56 kg.",
          "oneShotPreview": "z = 4.48 → reject; not a sample from the mean-56 population."
        },
        {
          "q": "6 b) In a big city 325 men out of 600 men were found to be smokers. Does this information support the conclusion that the majority of men in this city are smokers?",
          "a": "H0: P = 0.5, H1: P > 0.5 (a majority). Here p̂ = 325/600 ≈ 0.5417 and the standard error under H0 is √(0.25/600) ≈ 0.0204, so z = (0.5417 − 0.5)/0.0204 ≈ 2.04. Since 2.04 > 1.645, H0 is rejected at the 5% one-tailed level: the data do support the conclusion that a majority of men are smokers (though not at the 1% level).",
          "explanation": "The one-tailed proportion test yields z ≈ 2.04, exceeding the 5% critical value 1.645, so the majority claim is supported at that level.",
          "oneShotPreview": "z ≈ 2.04 > 1.645; yes, a majority are smokers at the 5% level."
        },
        {
          "q": "7 The means of two large samples of sizes 1000 and 2000 members are 67.5 inches and 68.0 inches respectively. Can the samples be regarded as drawn from the same population of standard deviation 2.5 inches?",
          "a": "H0: μ₁ = μ₂. The standard error of the difference is σ√(1/n₁ + 1/n₂) = 2.5√(1/1000 + 1/2000) = 2.5√0.0015 ≈ 0.0968, so z = (68.0 − 67.5)/0.0968 ≈ 5.16. Since |z| = 5.16 > 1.96, H0 is rejected. The samples cannot be regarded as drawn from the same population; the second sample mean is significantly higher.",
          "explanation": "The two-sample z-test gives z ≈ 5.16, far beyond the 5% critical value, so the 0.5-inch difference is not due to chance.",
          "oneShotPreview": "z ≈ 5.16 > 1.96; the samples come from different populations."
        },
        {
          "q": "8 Samples of students were drawn from two universities and their weights in kilograms gave: University A — mean 55, S.D. 10, sample size 400; University B — mean 57, S.D. 15, sample size 100. Make a large sample test for the significance of the difference between the means.",
          "a": "H0: μ_A = μ_B. The standard error of the difference is √(σ_A²/n_A + σ_B²/n_B) = √(100/400 + 225/100) = √(0.25 + 2.25) = √2.5 ≈ 1.581, so z = |57 − 55|/1.581 ≈ 1.26. Since 1.26 < 1.96 (two-tailed 5% critical value), H0 is not rejected. There is no statistically significant difference between the mean weights of the two universities.",
          "explanation": "The large-sample test for the difference of two means gives z ≈ 1.26, below the 5% critical value, so the 2 kg difference is within sampling error.",
          "oneShotPreview": "z ≈ 1.26 < 1.96; no significant difference in mean weights."
        },
        {
          "q": "9 In two large populations there are 30% and 25% respectively of fair haired people. Is this difference likely to be hidden in samples of 1200 and 900 respectively from the two populations?",
          "a": "H0: P₁ = P₂. The pooled proportion is (0.30×1200 + 0.25×900)/2100 = 585/2100 ≈ 0.2786, giving SE = √[p(1−p)(1/1200 + 1/900)] ≈ √0.000391 ≈ 0.0198. Hence z = (0.30 − 0.25)/0.0198 ≈ 2.53. Since 2.53 > 1.96, H0 is rejected at 5%; the difference is significant and is therefore not likely to be hidden — samples of this size would reveal it.",
          "explanation": "The two-proportion z-test gives z ≈ 2.53, exceeding 1.96, so the observed difference would be detected rather than concealed by these sample sizes.",
          "oneShotPreview": "z ≈ 2.53 > 1.96; the difference is significant, not hidden."
        },
        {
          "q": "10 a) An ambulance service claims that it takes on the average less than 10 minutes to reach its destination in emergency calls. A sample of 36 calls has a mean of 11 minutes and variance of 16 minutes. Test the significance at 0.05 level.",
          "a": "H0: μ = 10, H1: μ < 10 (the claim). With s = √16 = 4 and n = 36 the standard error is 4/6 ≈ 0.667, so z = (11 − 10)/0.667 = 1.5. For a left-tailed test at α = 0.05 the critical value is −1.645; the computed z = +1.5 is not in the rejection region, so H0 is not rejected. The sample does not support the claim of an average response time below 10 minutes — it actually indicates 11 minutes.",
          "explanation": "The claim requires a significantly small mean, but the sample mean of 11 minutes gives a positive z of 1.5, so the claim cannot be accepted.",
          "oneShotPreview": "z = +1.5 (not < −1.645); claim of mean < 10 minutes not supported."
        },
        {
          "q": "10 b) Experience had shown that 20% of a manufactured product is of top quality. In one day's production of 400 articles only 50 are of top quality. Test the hypothesis at 0.05 level.",
          "a": "H0: P = 0.20, H1: P ≠ 0.20. The observed proportion is p̂ = 50/400 = 0.125 and SE = √(0.2 × 0.8 /400) = √0.0004 = 0.02, so z = (0.125 − 0.20)/0.02 = −3.75. Since |z| = 3.75 > 1.96, H0 is rejected at 5% (indeed even at 1%). The day's production contains a significantly lower proportion of top-quality articles than the expected 20%.",
          "explanation": "The one-sample proportion test yields z = −3.75, far beyond the critical value, showing the drop from 20% to 12.5% is not due to chance.",
          "oneShotPreview": "z = −3.75; reject P = 0.20 — top-quality rate significantly lower."
        },
        {
          "q": "11 A sample of the heights of 6400 Englishmen has a mean of 67.85 inches and a standard deviation of 2.5 inches, while a sample of the heights of 1600 Australians has a mean of 68.55 inches and a standard deviation of 2.52 inches. Do the data indicate that the Australians are on the average taller than the Englishmen?",
          "a": "H0: μ_E = μ_A, H1: μ_A > μ_E. The standard error of the difference is √(2.5²/6400 + 2.52²/1600) = √(0.0009766 + 0.003969) ≈ √0.004946 ≈ 0.0703, so z = (68.55 − 67.85)/0.0703 ≈ 0.70/0.0703 ≈ 9.95. Since 9.95 far exceeds 1.645 (one-tailed 5%) and 2.33 (1%), H0 is decisively rejected. Yes — Australians are on average significantly taller than Englishmen.",
          "explanation": "The two-sample z-test gives z ≈ 9.95, an overwhelmingly significant result, so the 0.7-inch difference reflects a real difference rather than sampling variation.",
          "oneShotPreview": "z ≈ 9.95; yes, Australians are significantly taller."
        }
      ]
    },
    "5": {
      "unitTitle": "Small Sample Tests",
      "totalQuestions": 16,
      "questions": [
        {
          "q": "a) Define t-test for single mean.",
          "a": "The t-test for a single mean tests whether the mean of one small sample, drawn from a normal population with unknown variance, differs significantly from a specified (hypothesized) population mean μ0. The test statistic is t = (x̄ − μ0)/(s/√n), where x̄ is the sample mean, s is the sample standard deviation and n is the sample size; under H0 it follows Student's t distribution with n−1 degrees of freedom. The calculated |t| is compared with the table value at the chosen significance level; if |t| exceeds the table value, H0 is rejected and the sample mean is declared significantly different from μ0.",
          "explanation": "It is a small-sample test used when the population standard deviation is unknown, so the sample S.D. replaces it and the t-distribution, not the normal distribution, is used.",
          "oneShotPreview": "One-sample t-test: t = (x̄−μ0)/(s/√n), df = n−1; compare |t| with table value."
        },
        {
          "q": "b) Write the formula for F-test.",
          "a": "The F-test compares two population variances using the ratio F = s1²/s2², where s1² = Σ(x−x̄)²/(n1−1) and s2² = Σ(y−ȳ)²/(n2−1) are the two sample variances (the larger variance is conventionally placed in the numerator so F ≥ 1). Under H0: σ1² = σ2² the statistic follows the F-distribution with (n1−1, n2−1) degrees of freedom; if the calculated F is less than the table value the variances are accepted as equal. In ANOVA the same F-ratio appears as (variance between samples)/(variance within samples).",
          "explanation": "F is a ratio of two independent variance estimates, each proportional to a chi-square variate, so it is the correct statistic for comparing two variances and for testing several means in ANOVA.",
          "oneShotPreview": "F = larger variance / smaller variance; df = (n1−1, n2−1); F < table ⇒ equal variances."
        },
        {
          "q": "c) What is the Null hypothesis and Alternative hypothesis for F-test?",
          "a": "For the F-test the null hypothesis is H0: σ1² = σ2² — the two samples come from populations having equal variances. The alternative hypothesis is H1: σ1² ≠ σ2² (a two-tailed test of unequal variances); when the direction is known it may be written one-tailed as H1: σ1² > σ2² or σ1² < σ2². Rejection of H0 means the variability of the two populations differs significantly.",
          "explanation": "The F-test is concerned with population variances, so its hypotheses are statements about σ² rather than about means.",
          "oneShotPreview": "H0: σ1² = σ2²; H1: σ1² ≠ σ2² (or a one-sided inequality)."
        },
        {
          "q": "d) What is the difference between F-test and t-tests?",
          "a": "A t-test compares averages — a sample mean with a hypothesized mean, the means of two independent samples, or paired before/after observations — and uses the t-distribution with one degrees-of-freedom value. An F-test compares variances (or, in ANOVA, several group means through a ratio of variances) and uses the F-distribution with two degrees-of-freedom values. In short, t asks \"are the means different?\" while F asks \"are the variances different?\" (or \"is the between-group variation larger than the within-group variation?\"). The F-test is also used before a two-sample t-test to verify the equal-variance assumption.",
          "explanation": "Both are small-sample tests, but t is built from a difference of means divided by a standard error, whereas F is built from a ratio of two variance estimates.",
          "oneShotPreview": "t compares means (t-dist, one df); F compares variances / ANOVA means (F-dist, two df)."
        },
        {
          "q": "e) Write the formula for Chi-square test for goodness of fit.",
          "a": "The chi-square goodness-of-fit statistic is χ² = Σ (Oi − Ei)²/Ei, summed over all k classes, where Oi is the observed frequency and Ei is the frequency expected under the hypothesized distribution. The degrees of freedom are k − 1 − m, where m is the number of parameters estimated from the data. If the calculated χ² is less than the table value at the desired level, H0 is accepted and the data are said to fit the theoretical distribution; a large χ² indicates a poor fit. Expected frequencies should preferably be at least 5 in each class.",
          "explanation": "The statistic measures the total squared discrepancy between observed and expected counts scaled by the expected counts, so a value of zero would mean a perfect fit.",
          "oneShotPreview": "χ² = Σ(O−E)²/E; df = k−1−m; χ² < table ⇒ good fit."
        },
        {
          "q": "a) A sample of 26 bulbs gives a mean life of 990 hours with a S.D of 20 hours. The manufacturer claims that the mean life of bulbs is 1000 hours. Is the sample not up to the standard.",
          "a": "Here n = 26, x̄ = 990 hrs, s = 20 hrs and the claimed mean is μ0 = 1000 hrs. Take H0: μ = 1000 (up to standard) against H1: μ < 1000 (not up to standard). Then t = (990 − 1000)/(20/√26) = −10/3.922 ≈ −2.55 (the s/√(n−1) convention gives −2.5), with df = 25. Since |t| ≈ 2.55 exceeds t(0.05, 25) = 2.06 (and even the one-tailed 1% value ≈ 2.49), H0 is rejected: the mean life is significantly below 1000 hours, so the sample is not up to the standard.",
          "explanation": "A single-sample t-test is appropriate because the population S.D. is unknown and the sample is small; the observed mean lies more than two standard errors below the claimed value.",
          "oneShotPreview": "t ≈ −2.55, df 25 > 2.06 ⇒ reject H0 ⇒ sample below standard."
        },
        {
          "q": "b) Find the maximum difference that we can expect with probability 0.95 between the mean of samples of sizes 10 and 12 from a normal population if their standard deviations are found to be 2 and 3 respectively.",
          "a": "The standard error of the difference between the two sample means is SE = √(σ1²/n1 + σ2²/n2) = √(4/10 + 9/12) = √1.15 ≈ 1.072. For 95% probability the normal deviate is z = 1.96. Hence the maximum expected difference is 1.96 × 1.072 ≈ 2.10 (in the units of measurement). A difference larger than about 2.1 would be expected by chance in only 5% of such pairs of samples.",
          "explanation": "Because the population standard deviations are known, the difference of the sample means is normally distributed, so the 95% limits are ±1.96 standard errors.",
          "oneShotPreview": "SE = √(4/10+9/12) ≈ 1.072; max difference = 1.96 × 1.072 ≈ 2.10."
        },
        {
          "q": "Two independent samples of 8 and 7 items had the following values: Sample-I 11 11 13 11 15 9 12 14; Sample-II 9 11 10 13 9 8 10. Is the difference between the means of samples significant?",
          "a": "Sample-I: n1 = 8, x̄1 = 96/8 = 12, Σ(x−x̄1)² = 26; Sample-II: n2 = 7, x̄2 = 70/7 = 10, Σ(y−ȳ)² = 16. The pooled variance is sp² = (26 + 16)/(8 + 7 − 2) = 42/13 ≈ 3.23. Then t = (12 − 10)/√[3.23(1/8 + 1/7)] = 2/0.930 ≈ 2.15 with df = 13. Since 2.15 is just below the table value t(0.05, 13) = 2.16, H0 is accepted: the difference between the means is not significant at the 5% level.",
          "explanation": "The two-sample pooled t-test is correct for independent small samples from normal populations with equal variances; the observed 2-point gap is about two standard errors and falls just short of significance.",
          "oneShotPreview": "x̄1 = 12, x̄2 = 10, t ≈ 2.15 (df 13) < 2.16 ⇒ not significant."
        },
        {
          "q": "Samples of two types of electrical light bulbs were tested for length of life and the following data were obtained: Type I — sample number 8, sample mean 1234 hrs, sample S.D 36 hrs; Type II — sample number 7, sample mean 1036 hrs, sample S.D 40 hrs. Is the difference in the means sufficient to warrant that type I is superior to type II regarding length of life?",
          "a": "n1 = 8, x̄1 = 1234, s1 = 36; n2 = 7, x̄2 = 1036, s2 = 40. The pooled variance is sp² = [7(36²) + 6(40²)]/13 = 18672/13 ≈ 1436.3, so sp ≈ 37.9 and SE = 37.9√(1/8 + 1/7) ≈ 19.6. Hence t = (1234 − 1036)/19.6 ≈ 10.1 with df = 13, far above t(0.05, 13) = 2.16. H0 is rejected: the difference is highly significant and Type I bulbs have a significantly longer life, so Type I is superior to Type II.",
          "explanation": "A difference of 198 hours is roughly ten standard errors, so it cannot be explained by sampling fluctuation; the two-sample t-test confirms the real superiority of Type I.",
          "oneShotPreview": "t ≈ 10.1 (df 13) ≫ 2.16 ⇒ significant; Type I is superior."
        },
        {
          "q": "To examine the hypothesis that the husbands are more intelligent than the wives, an investigator took a sample of 10 couples and administered them a test which measures the I.Q. The results are as follows: Husbands 117 105 97 105 123 109 86 78 103 107; Wives 106 98 87 104 116 95 90 69 108 85. Test the hypothesis with a reasonable test at the level of significance of 0.05 and also calculate F-test.",
          "a": "Use the paired differences d = Husband − Wife: 11, 7, 10, 1, 7, 14, −4, 9, −5, 22, giving d̄ = 7.2 and Σ(d−d̄)² = 603.6, so sd = √(603.6/9) ≈ 8.19. Then t = 7.2/(8.19/√10) ≈ 2.78 with df = 9; since 2.78 > t(0.05, 9) = 2.26, H0 is rejected and husbands are significantly more intelligent at the 5% level. For the F-test, sH² ≈ 178.4 and sW² ≈ 186.6, so F = 186.6/178.4 ≈ 1.05 with (9, 9) df, well below the 5% table value ≈ 3.18, showing the two variances do not differ significantly.",
          "explanation": "Husbands and wives form natural pairs, so a paired t-test on within-couple differences removes couple-to-couple variation; the F-test confirms the equal-variance assumption behind the comparison.",
          "oneShotPreview": "Paired t ≈ 2.78 > 2.26 ⇒ husbands smarter; F ≈ 1.05 ⇒ variances equal."
        },
        {
          "q": "Scores obtained in a shooting competition by 10 soldiers before and after intensive training are given below: Before 67 24 57 55 63 54 56 68 33 43; After 70 38 58 58 56 67 68 75 42 38. Test whether the intensive training is useful at 0.05 level of significance.",
          "a": "Take d = After − Before: 3, 14, 1, 3, −7, 13, 12, 7, 9, −5, so d̄ = 5.0 and Σ(d−d̄)² = 482. The paired statistic is t = 5/√(482/9)/√10 = 5/2.31 ≈ 2.16 with df = 9. This is just below the two-tailed 5% critical value t(0.05, 9) = 2.262, so on a two-sided test the gain of 5 points is not quite significant at 5%; with a one-sided test of improvement (t(0.05, 9) = 1.833) the training would be judged useful.",
          "explanation": "The same soldiers were measured twice, so the paired t-test on before-after differences is the correct test; the result is borderline at the 5% two-tailed level.",
          "oneShotPreview": "Paired t ≈ 2.16 (df 9), just below 2.26 two-tailed ⇒ borderline; gain +5 points."
        },
        {
          "q": "a) Blood pressure of 5 women before and after intake of a certain drug are given below: Before 110 120 125 132 125; After 120 118 125 136 121. Test whether there is a significant change in blood pressure at 1% level of significance.",
          "a": "The differences d = After − Before are 10, −2, 0, 4, −4 with d̄ = 1.6 and Σ(d−d̄)² = 123.2. Hence sd = √(123.2/4) ≈ 5.55 and t = 1.6/(5.55/√5) ≈ 0.64 with df = 4. Since 0.64 is far below the 1% table value t(0.01, 4) = 4.604 (and the 5% value 2.776), H0 is accepted: the drug produces no significant change in blood pressure.",
          "explanation": "Paired readings on the same women call for a paired t-test; the average change of 1.6 mm is small relative to the variability among the changes.",
          "oneShotPreview": "Paired t ≈ 0.64 (df 4) ≪ 4.604 ⇒ no significant BP change at 1%."
        },
        {
          "q": "The nicotine in milligrams of two samples of tobacco were found to be as follows. Can it be said that the two samples have come from the same normal population.",
          "a": "This is a test of equality of two population variances, so the F-test is used: compute F = larger sample variance / smaller sample variance with degrees of freedom (n1−1, n2−1) and compare it with the tabulated F value at 5%. If Fcalc < Ftable, H0: σ1² = σ2² is accepted and the two samples may be regarded as coming from the same normal population; if Fcalc > Ftable, their variances differ significantly. The numerical data table for the two tobacco samples is not legible in the source PDF, so only the correct method and decision rule can be stated.",
          "explanation": "\"Same normal population\" here means equal variances, and the ratio of two sample variances follows the F-distribution; the source table of nicotine values could not be extracted.",
          "oneShotPreview": "F-test of variances: F = larger s² / smaller s²; F < table ⇒ same population."
        },
        {
          "q": "A pair of dice are thrown 360 times and the frequency of each sum is indicated below: Sum 2 3 4 5 6 7 8 9 10 11 12; Frequency 8 24 35 37 44 65 51 42 26 14 14. Would you say that the dice are fair on the basis of the chi-square test at 0.05 level of significance?",
          "a": "For two fair dice the probabilities of sums 2…12 are proportional to 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 out of 36, so in 360 throws the expected frequencies are 10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10. Then χ² = Σ(O−E)²/E = 0.4 + 0.8 + 0.833 + 0.225 + 0.72 + 0.417 + 0.02 + 0.1 + 0.533 + 1.8 + 1.6 ≈ 7.45 with df = 11 − 1 = 10. Since 7.45 < χ²(0.05, 10) = 18.31, H0 is accepted: the observed frequencies agree with the theoretical distribution and the dice may be considered fair.",
          "explanation": "The chi-square goodness-of-fit test compares observed counts with the known distribution of the sum of two dice; the total discrepancy is well within sampling error.",
          "oneShotPreview": "χ² ≈ 7.45 (df 10) < 18.31 ⇒ dice are fair."
        },
        {
          "q": "a) A die is thrown 264 times with the following results. Show that the die is biased. (χ² = 11.07 at 5 d.f. & 5% L.S). Number on the die 1 2 3 4 5 6; Frequency 40 32 28 58 54 52.",
          "a": "For a fair die the expected frequency of each face in 264 throws is 264/6 = 44. Then χ² = Σ(O−E)²/E = (16 + 144 + 256 + 196 + 100 + 64)/44 = 776/44 ≈ 17.64 with df = 6 − 1 = 5. Since 17.64 exceeds the given table value χ²(0.05, 5) = 11.07, H0 of a fair die is rejected: the die is biased.",
          "explanation": "A chi-square this large means the observed face counts deviate from the uniform expectation of 44 each by more than chance can explain.",
          "oneShotPreview": "E = 44 each; χ² ≈ 17.64 (df 5) > 11.07 ⇒ die is biased."
        },
        {
          "q": "The following table gives the classification of 100 workers according to gender and nature of work. Test whether the nature of work is independent of the gender of the worker (χ² = 3.84 at 1 d.f): Stable — Males 40, Females 10, Total 50; Unstable — Males 20, Females 30, Total 50; Grand total 100.",
          "a": "Under the hypothesis of independence the expected counts are Males-Stable = 60×50/100 = 30, Males-Unstable = 30, Females-Stable = 40×50/100 = 20 and Females-Unstable = 20. Then χ² = (40−30)²/30 + (20−30)²/30 + (10−20)²/20 + (30−20)²/20 = 3.33 + 3.33 + 5 + 5 = 16.67 with df = (2−1)(2−1) = 1. Since 16.67 exceeds the given χ²(0.05, 1) = 3.84, H0 is rejected: nature of work is not independent of gender (males are more often in stable work and females more often in unstable work).",
          "explanation": "The chi-square test of independence compares observed cell counts with the counts expected under independence; here the discrepancy is far beyond the 5% threshold.",
          "oneShotPreview": "Expected 30/30/20/20; χ² = 16.67 (df 1) > 3.84 ⇒ gender and work are related."
        }
      ]
    }
  },
  "23CS0513": {
    "1": {
      "unitTitle": "Introduction and Software Life Cycle Models",
      "totalQuestions": 23,
      "questions": [
        {
          "q": "a) Define software engineering.",
          "a": "Software engineering is the systematic application of engineering approaches, methods and techniques to the development of software. IEEE defines it as the application of a systematic, disciplined and quantifiable approach to the development, operation and maintenance of software. It means using well-defined scientific principles and procedures to produce software that is reliable, efficient, maintainable, delivered on time and within budget.",
          "explanation": "This is the standard IEEE definition; it captures the three key ideas of being systematic, disciplined and measurable, plus the goal of quality software.",
          "oneShotPreview": "Software engineering = systematic, disciplined, quantifiable engineering of software development and maintenance."
        },
        {
          "q": "b) What is software crisis.",
          "a": "Software crisis is the situation in which software projects fail to meet their objectives: they are delivered late, exceed their budget, have poor quality, or do not satisfy the users actual requirements. It became prominent in the 1960s as programs grew larger and more complex while development remained ad hoc. This crisis gave rise to the term software engineering and to the search for disciplined development processes.",
          "explanation": "The answer gives the classic symptoms (late, over-budget, low quality, unmet needs) and the historical reason, which is why the discipline was created.",
          "oneShotPreview": "Software crisis = late, over-budget, poor-quality software failing requirements, caused by growing complexity and ad-hoc methods."
        },
        {
          "q": "c) List out the phases of Software life development models?",
          "a": "The usual phases are: (1) feasibility study or problem definition, (2) requirements gathering and analysis, (3) specification/SRS, (4) design (architectural and detailed), (5) coding or implementation, (6) testing at unit, integration, system and acceptance levels, (7) deployment/delivery, and (8) operation and maintenance. Different models such as waterfall, prototyping, spiral and RAD order and iterate these phases differently, but all of them cover specification, design, implementation, testing and maintenance.",
          "explanation": "These are the core activities every life cycle model must perform; models differ only in how they sequence and repeat them.",
          "oneShotPreview": "Phases: feasibility → requirements → specification → design → coding → testing → deployment → maintenance."
        },
        {
          "q": "d) What is Exploratory style of software development.",
          "a": "The exploratory style is an informal, ad-hoc way of developing software in which a programmer starts coding immediately with only a vague idea of the requirement, then writes code, runs it, examines the output, and modifies the code again until the result looks correct. It involves no systematic requirements analysis, design or documentation, and testing is done casually by the programmer. It may work for small, throwaway programs but becomes unmanageable for large software.",
          "explanation": "It captures the informal code-run-modify cycle and the absence of planning and documentation, which is the defining contrast with disciplined development.",
          "oneShotPreview": "Exploratory style = informal code → run → inspect → fix loop with no planning, design or documentation."
        },
        {
          "q": "e) Name three popular Agile development models.",
          "a": "Three popular Agile development models are Scrum, Extreme Programming (XP) and Kanban. Other well-known Agile methods include Feature Driven Development (FDD), Adaptive Software Development (ASD) and DSDM. All of them emphasise iterative and incremental delivery, working software, close customer collaboration and quick response to change, as stated in the Agile Manifesto.",
          "explanation": "Scrum, XP and Kanban are the most widely used Agile frameworks, and the final sentence links them to the defining Agile values.",
          "oneShotPreview": "Scrum, Extreme Programming (XP) and Kanban — iterative, customer-focused Agile methods."
        },
        {
          "q": "a) Explain About software engineering? Is software engineering a science or an art?",
          "a": "Software engineering is the application of engineering principles, methods and tools to build software systematically, covering requirements, design, coding, testing, deployment and maintenance. It has a scientific side because it relies on established theories, algorithms, formal specification, measurable processes and software metrics. It also has an artistic side because design requires creativity, judgement and the skill to choose the best trade-offs for a particular problem. Therefore software engineering is best seen as a blend of the two: a disciplined science applied with human creativity, an engineering art rather than pure science or pure art.",
          "explanation": "The answer defines the field and addresses both halves of the question, giving concrete reasons for the scientific and the artistic character before concluding it is a blend.",
          "oneShotPreview": "Software engineering = disciplined engineering of software; a blend of science (methods, metrics) and art (creative design judgement)."
        },
        {
          "q": "b) Evaluate the exploratory style of software development? Graphically depict the activities that a programmer typically carries out while developing a programming solution using the exploratory style.",
          "a": "In the exploratory style the programmer starts with a vague idea and repeatedly performs: write or modify code → compile and run → examine the output → if wrong, modify code and repeat → if correct, stop. Graphically: [Vague need] → Code → Compile/Run → Inspect output → (No, incorrect) → back to Code; (Yes, correct) → [Working program]. Evaluation: it is quick, needs no documentation and is useful for small programs, prototypes and learning. But it is unplanned: requirements, design and documentation are skipped, testing is unsystematic, defects are found late and the resulting code is hard to maintain. Hence it is unsuitable for large, professionally developed software, which needs a disciplined life cycle model.",
          "explanation": "It describes the iterative loop with a simple diagram and evaluates the style fairly, listing both its speed advantage and its serious weaknesses for large projects.",
          "oneShotPreview": "Exploratory = code → run → inspect → fix loop; fast for small programs but no design, docs or systematic testing."
        },
        {
          "q": "a) Explain in detail software development projects.",
          "a": "A software development project is a temporary, planned effort to produce a software product that satisfies a stated need. It moves through feasibility study, requirements gathering and specification, design, coding, testing, delivery/deployment and maintenance. It is managed by defining scope, schedule, cost and quality goals; estimating size and effort with metrics such as LOC, function points or COCOMO; planning and tracking progress; managing risks; ensuring quality through reviews and testing; and controlling changes. A successful project balances time, cost and quality while keeping the customer involved throughout.",
          "explanation": "A detailed answer needs both the life cycle phases and the management dimensions of estimation, planning, risk, quality and change control.",
          "oneShotPreview": "Software project = planned effort through feasibility → requirements → design → code → test → deploy → maintain, controlled for time, cost and quality."
        },
        {
          "q": "b) Distinguish between a program and a professionally developed software.",
          "a": "A program is a relatively small, self-contained set of instructions written by an individual, often for personal or one-time use, with little or no documentation and no real concern for maintenance. Professionally developed software is a large, complex product built by a team for many users: it is based on systematic requirements analysis and design, is thoroughly documented and tested, is portable and maintainable, and is delivered with manuals, support and planned releases. In short, a program is something you write for yourself, whereas software is a product engineered for others and evolved over time.",
          "explanation": "The distinction rests on size, individual versus team, documentation, testing, maintenance and use by others, which is the classic program-versus-software-product comparison.",
          "oneShotPreview": "Program = small, personal, ad-hoc code; software = large, team-built, documented, tested and maintained product."
        },
        {
          "q": "a) Explain Waterfall model with a neat diagram and list out the merits and demerits of waterfall model.",
          "a": "The waterfall model is a linear sequential life cycle model in which each phase must finish before the next one starts and phases do not overlap. Diagram: Requirements → Design → Coding → Testing → Deployment → Maintenance, shown as successive downward steps with a feedback arrow from maintenance to earlier phases. Merits: simple to understand and manage, clear milestones and documentation, works well when requirements are stable and well understood. Demerits: no feedback from later phases to earlier ones, changes are difficult and costly, errors are detected late because working software appears only near the end, it is unsuitable for complex or changing projects, and integration and testing can become a bottleneck.",
          "explanation": "This gives the sequential phase order, a text diagram and the standard advantages and limitations of the classical waterfall model.",
          "oneShotPreview": "Waterfall = strict sequence Requirements → Design → Code → Test → Deploy → Maintain; simple but rigid with late error detection."
        },
        {
          "q": "b) List and explain the major differences between the exploratory and modern software development practices.",
          "a": "In the exploratory practice, coding starts immediately from a vague need and the code is repeatedly modified until it works; requirements analysis, design, documentation and systematic testing are skipped. Modern disciplined practice starts with requirements gathering and specification, followed by planning, design, implementation, systematic testing, deployment and maintenance, with reviews and documents at every step. Major differences: (1) planning is absent versus explicit; (2) requirements are assumed versus analysed and documented in an SRS; (3) design is ad hoc versus architectural and detailed; (4) documentation is absent versus deliberate; (5) testing is casual versus planned unit, integration and acceptance testing; (6) work is individual versus team-based with standards; (7) outcome is unpredictable versus estimated and tracked. Modern practice costs more effort upfront but is essential for large, reliable software.",
          "explanation": "A point-by-point contrast on planning, requirements, design, documentation, testing and quality is exactly what a question asking for major differences expects.",
          "oneShotPreview": "Exploratory = ad-hoc code-and-fix with no records; modern = planned requirements → design → code → test → maintain with reviews."
        },
        {
          "q": "a) Define software crisis? Identify the reasons for software crisis.",
          "a": "Software crisis is the difficulty of producing large, reliable software on time and within budget: projects run late, costs overrun, quality is poor and the delivered system often fails to meet user needs. Its main reasons are: (1) requirements are incomplete, ambiguous or constantly changing; (2) software is intangible and complex, so progress is hard to measure; (3) lack of planning, estimation methods and disciplined processes; (4) rapid growth in hardware capability and user expectations while development methods lag behind; (5) poor communication between users and developers; (6) inadequate testing, documentation and quality control; and (7) the heavy burden of repeatedly modifying and maintaining software. These problems motivated the discipline of software engineering.",
          "explanation": "The answer defines the crisis through its symptoms and lists the standard causes: complexity, changing requirements, weak methods, communication gaps and maintenance burden.",
          "oneShotPreview": "Software crisis = late, over-budget, low-quality software; causes include changing requirements, complexity, weak methods and poor communication."
        },
        {
          "q": "b) Elaborate on the key phases of the RAD life cycle. Describe the primary objectives, key activities involved, and the expected deliverables.",
          "a": "RAD (Rapid Application Development) is an iterative, prototype-based model that aims to deliver a system quickly, typically in 60 to 90 days, through heavy user involvement and reuse of components. Its key phases are: (1) Requirements planning — management and users agree on objectives, scope, schedule and constraints; deliverables are a project plan and requirement list. (2) User design — users and developers jointly define the design in JAD workshops using prototypes that are refined until users approve; deliverables are design specifications and approved prototypes. (3) Rapid construction — the design is converted into a working system using code generators, CASE tools and reusable components with continuous user feedback; deliverable is working software. (4) Cutover — testing, data conversion, user training and installation; deliverables are the deployed system and user documentation. The primary objectives are faster delivery, better requirement clarity and easier accommodation of change.",
          "explanation": "It lists the four canonical RAD phases with the objective, activities and deliverables of each, matching the three parts asked in the question.",
          "oneShotPreview": "RAD phases: requirements planning → user design workshops → rapid construction → cutover; goal is fast delivery with heavy user involvement."
        },
        {
          "q": "a) Infer the different stages involved in the computer system engineering lifecycle, highlighting the key activities in each stage.",
          "a": "The computer system engineering life cycle treats software as one part of a larger system. Its stages are: (1) system engineering/feasibility — define the problem, objectives, scope and constraints and study technical, economic and operational feasibility; (2) requirements analysis — gather and analyse the needs of users, hardware, software and procedures and specify functional and non-functional requirements; (3) system design — allocate requirements to hardware, software, people and procedures and design the architecture and interfaces; (4) software design — design modules, data structures and algorithms for the software part; (5) implementation — code and integrate the components; (6) testing — verify and validate the whole system through unit, integration, system and acceptance testing; (7) deployment and operation — install, train users and operate the system; (8) maintenance — correct defects, adapt to change and improve the system. Each stage produces documents that feed the next.",
          "explanation": "It covers the system-level stages and names the key activity of each, from feasibility and requirements through design, implementation, testing, operation and maintenance.",
          "oneShotPreview": "System lifecycle: feasibility → requirements → system design → software design → code → test → deploy → maintain."
        },
        {
          "q": "b) Build the Rapid Application Development model. Discuss each phase in detail.",
          "a": "RAD is a compressed, time-boxed development model built on prototyping, reuse and close user participation, usually finishing in 60 to 90 days. Phase 1, requirements planning: users and managers agree on business needs, scope, schedule and constraints, producing a project plan. Phase 2, user design: users take part in Joint Application Development workshops, prototypes are built and iteratively refined until the users approve, producing the design specification. Phase 3, construction: developers rapidly generate and integrate code using fourth-generation languages, CASE tools and reusable components while users review the growing system, producing a working product. Phase 4, cutover: data conversion, testing, training and installation hand over the operational system with documentation. Because it depends on user availability and reusable tools, RAD suits moderately sized, well-scoped projects rather than large complex ones.",
          "explanation": "It describes how RAD is constructed from time boxes, JAD workshops, prototyping and code generation, discusses all four phases and notes its limitation.",
          "oneShotPreview": "RAD = time-boxed requirements planning → JAD user design → rapid construction with 4GL/CASE tools → cutover."
        },
        {
          "q": "a) Express what do you understand by the term software development life cycle? Why is it important while developing a software product?",
          "a": "The software development life cycle (SDLC) is the framework of phases used to build software: requirements analysis, specification, design, coding, testing, deployment and maintenance. It is important because it provides a disciplined, structured path from an idea to a working product. Each phase has defined inputs, activities and deliverables, so progress can be planned and measured; errors and missing requirements are found early instead of after delivery; quality is built in through reviews and testing at each stage; and cost, schedule and risk stay under control. Without an SDLC, development is ad hoc, unpredictable and likely to produce unreliable software.",
          "explanation": "It defines SDLC as the structured set of phases and clearly explains its value: planning, early defect detection, quality assurance and management control.",
          "oneShotPreview": "SDLC = structured phases from requirements to maintenance; it enables planning, early defect detection, quality and cost/schedule control."
        },
        {
          "q": "b) Explain notable changes in software development.",
          "a": "Notable changes include the shift from ad-hoc individual programming to disciplined team-based engineering with documented life cycle models, and from a code-only focus to requirement- and customer-focused processes. Development has moved from big sequential waterfall releases to iterative, incremental and Agile methods such as Scrum and XP with frequent working software. There is far greater reuse of components, libraries, frameworks and open-source code, along with automated testing, continuous integration and DevOps. Applications have moved from standalone desktop programs to web, mobile and cloud services, and because software now lives for many years, continuous maintenance and evolution receive much more attention. Quality, security, usability and globally distributed teams are also far more important than before.",
          "explanation": "It summarises the main evolution in methods, tools, delivery style and deployment platforms, which is what the broad question asks for.",
          "oneShotPreview": "Changes: ad-hoc → disciplined, waterfall → Agile/DevOps, reuse and automation, cloud/mobile apps, continuous maintenance and quality focus."
        },
        {
          "q": "a) Discuss the prototyping model. What is the effect of designing a prototype on the overall cost of the software project?",
          "a": "In the prototyping model a quick, partial version of the system, often just the user interface, is built so that users and developers can understand the requirements. The steps are: identify the vague requirements, build a prototype, let users experiment with it, collect feedback, revise the prototype until requirements are clear, and then design and implement the real product, usually discarding the prototype. Effect on cost: a prototype adds some initial expense, but it clarifies requirements early and therefore avoids expensive changes after implementation; the saved rework and fewer misunderstandings usually reduce the total project cost when requirements are unclear. If a prototype is over-engineered or continuously polished instead of being discarded, however, it can increase cost and blur the line between prototype and final product.",
          "explanation": "It describes the build-evaluate-refine cycle and gives a balanced cost analysis: small upfront cost versus savings from fewer late changes.",
          "oneShotPreview": "Prototyping = quick partial system refined from user feedback; small upfront cost, but less rework and lower overall cost."
        },
        {
          "q": "b) Explain the spiral model of software development. What are the Limitations of such model?",
          "a": "The spiral model, proposed by Barry Boehm, combines the systematic phases of the waterfall with iterative prototyping and explicit risk analysis. Development proceeds through repeated loops, each with four sectors: (1) determine objectives, alternatives and constraints; (2) evaluate alternatives and identify and analyse risks, often using prototypes; (3) develop and verify the next level of the product; (4) plan the next iteration. Each loop ends with a customer review and produces a more complete version, making the model suitable for large, complex, high-risk projects. Limitations: it is complex to manage, expensive and time consuming, requires skilled risk analysts, its success depends heavily on that expertise, and it is not appropriate for small or low-risk projects or for fixed-price contracts where the number of cycles is uncertain.",
          "explanation": "It presents the four spiral quadrants and Boehm's risk-driven idea, then lists the standard limitations of complexity, cost and dependence on risk expertise.",
          "oneShotPreview": "Spiral = repeated objectives → risk analysis → build/verify → plan cycles; ideal for high-risk projects but complex and costly."
        },
        {
          "q": "9 Explain in detail the following Waterfall Model and its Extensions. i) V-Model ii) Prototyping Model. [L2][CO1] 10M",
          "a": "The V-Model is a verification-oriented extension of the waterfall in which each development phase on the left arm of a V has a matching test phase on the right arm: requirements ↔ acceptance testing, system design ↔ system testing, architectural design ↔ integration testing, detailed design ↔ unit testing, with coding at the bottom. Test plans are prepared as early as the corresponding design activity, so defects are found earlier and quality improves; however it is as rigid as the waterfall and copes poorly with changing requirements. The prototyping model adds an iterative loop to the waterfall: a rapid partial system is built, users try it and give feedback, and it is refined until requirements are clear before the full product is developed. This improves requirement clarity and user involvement but can increase cost if the prototype is never discarded and may create unrealistic expectations. Both are extensions that fix waterfall weaknesses: the V-Model strengthens verification, while prototyping clarifies requirements.",
          "explanation": "The answer explains both named extensions in detail with their structure, benefits and drawbacks, and relates each to the specific waterfall weakness it addresses.",
          "oneShotPreview": "V-Model pairs each design phase with a test phase; prototyping adds user-driven quick builds to clarify requirements."
        },
        {
          "q": "10 Explain in detail the following Waterfall Model and its Extensions. i) Classical Waterfall Model ii) Incremental Development Model. [L1][CO1] 10M",
          "a": "The classical waterfall model is a strictly sequential life cycle with phases of feasibility, requirements analysis and specification, design, coding and unit testing, integration and system testing, deployment, and maintenance. Each phase must be completed and documented before the next begins and no phases overlap. It is simple, easy to manage and suitable for stable, well-understood requirements, but it is rigid: changes are costly, errors are discovered late and working software appears only near the end. The incremental development model instead splits the product into a series of smaller builds: the core features are delivered first and each later increment adds more functionality until the system is complete. Every increment passes through its own mini life cycle of requirements, design, coding, testing and delivery, so users receive working software early, feedback is incorporated, risk is spread and changes are easier. It does require a good modular architecture and careful planning of increment boundaries.",
          "explanation": "It describes both models with their phases, merits and demerits, and shows how incremental development softens the rigidity of the classical waterfall.",
          "oneShotPreview": "Classical waterfall = one strict sequential pass; incremental = repeated small working builds, each adding new features."
        },
        {
          "q": "a) Examine the concept of iterative and incremental development within the context of Agile methodologies.",
          "a": "Iterative development means repeating the development cycle of plan, design, code, test and review in short time-boxed rounds, each producing a refined version of the product. Incremental development means building the product in small functional pieces and adding them one at a time, so the working system grows with each release. Agile combines the two: short iterations such as one-to-four-week Scrum sprints each deliver an increment of potentially shippable software, and feedback from the customer and team is used to reprioritise the next iteration. The result is early and continuous delivery of working software, fast response to changing requirements, frequent inspection and adaptation, and lower risk compared with a single big-bang waterfall delivery.",
          "explanation": "It defines each concept separately, explains how Agile merges them in short iterations and lists the resulting benefits.",
          "oneShotPreview": "Iterative = repeated plan-build-test cycles; incremental = add small working pieces; Agile combines both in short sprints."
        },
        {
          "q": "b) Explain evolutionary process model in software engineering.",
          "a": "An evolutionary process model develops software by growing it through repeated cycles instead of delivering it in one attempt. Since requirements are only partly known at the start, each cycle refines the requirements, design and implementation into a more complete version of the product. Examples are the prototyping model, the spiral model and the incremental model. Two common forms are evolutionary prototyping, where a rough prototype is continuously refined into the final system, and throwaway prototyping, where the prototype is used only to clarify requirements and then discarded. The model suits projects with changing or uncertain requirements because user feedback is incorporated continuously and risk is reduced, but it needs close user involvement and careful version control and is harder to plan and estimate than a sequential process.",
          "explanation": "It defines the evolutionary idea, gives examples and the two prototyping variants, then states its suitability and trade-offs.",
          "oneShotPreview": "Evolutionary model = software grows through repeated feedback-driven refinement (prototype, spiral, incremental); suits changing requirements."
        }
      ]
    },
    "2": {
      "unitTitle": "Software Project Management and Requirements",
      "totalQuestions": 22,
      "questions": [
        {
          "q": "1 a) Define software project management?",
          "a": "Software project management is the application of knowledge, skills, tools and methods to plan, organise, estimate, schedule and control software development activities so that the project is completed on time, within budget and at the required quality. Its main activities are project planning, size and effort estimation, risk management, scheduling, resource allocation, progress monitoring and quality assurance. Because software is intangible and changes easily, the manager must rely on estimates and visibility tools rather than on physical inspection. The overall goal is to deliver a product that satisfies customer needs while keeping cost, schedule and quality under control.",
          "explanation": "This is the standard definition of software project management and names its core activities and goal, which is what a two-mark definition question expects.",
          "oneShotPreview": "Planning, estimating, scheduling and controlling software work to deliver on time, on budget and to quality."
        },
        {
          "q": "1 b) Identify skills necessary for Managing Software Projects.",
          "a": "A software project manager needs both technical and managerial skills. Technical skills include knowledge of software life cycle models, estimation methods (LOC, Function Points, COCOMO), risk analysis, testing and software quality practices. Managerial skills include leadership, team building, communication, negotiation, decision-making, planning, scheduling and budgeting. The manager should also understand the customer's application domain and be able to use project-tracking tools. Above all, the manager must balance people, process and product concerns and resolve conflicts within the team.",
          "explanation": "The answer lists the technical, managerial and domain skill groups that standard texts associate with an effective software project manager.",
          "oneShotPreview": "Technical (lifecycle, estimation, risk, quality) + managerial (leadership, communication, planning) + domain knowledge."
        },
        {
          "q": "1 c) What are the three stages of COCOMO estimation technique and express general form of the COCOMO.",
          "a": "COCOMO (Constructive Cost Model) has three stages. (1) Basic COCOMO: a static model that estimates effort and schedule from program size in KLOC using only a set of constants. (2) Intermediate COCOMO: adds an effort adjustment factor built from 15 cost drivers covering product, hardware, personnel and project attributes. (3) Detailed COCOMO: applies those cost drivers separately at each phase of the life cycle using a hierarchical, three-level model. The general form is Effort = a x (KLOC)^b person-months, where a and b depend on the project class: organic (2.4, 1.05), semi-detached (3.0, 1.12) and embedded (3.6, 1.20). Development time and average staffing are then derived from the effort estimate.",
          "explanation": "It names all three COCOMO stages and gives the standard effort formula with the usual constants, matching the question's two requirements.",
          "oneShotPreview": "Basic, Intermediate, Detailed; Effort = a x (KLOC)^b person-months."
        },
        {
          "q": "1 d) Name the characteristics of a Good SRS Document.",
          "a": "A good Software Requirements Specification (SRS) should be correct, complete, consistent, unambiguous, verifiable, modifiable, traceable and testable. It must be precise and easy to read, have a clear structure and state the scope explicitly. It should avoid over-specification (design details) and incompleteness (unresolved TBDs), and should distinguish functional from non-functional requirements. It should also be stable enough to serve as a baseline, prioritised, and allow each requirement to be traced to its source and later to design, code and test cases.",
          "explanation": "These are the classic qualities of a good SRS listed in software engineering texts, with a short clarification of the key ones.",
          "oneShotPreview": "Correct, complete, consistent, unambiguous, verifiable, modifiable, traceable and testable."
        },
        {
          "q": "1 e) What is a Formal Technique?",
          "a": "A formal technique is a mathematically rigorous method for specifying, developing and verifying software, based on a notation with precisely defined syntax and semantics. It uses formal specification languages such as Z, VDM, B, algebraic or axiomatic specifications, and temporal logic to describe a system without ambiguity. Because the specification is mathematical, one can reason about it and even prove that an implementation satisfies it. Formal techniques are used mainly for safety-critical and high-reliability systems; their benefits are precision and provable correctness, while their drawbacks are high cost, extra effort and a steep learning curve.",
          "explanation": "The answer defines formal methods by their mathematical basis and notation, and notes where they are used and their trade-offs.",
          "oneShotPreview": "Math-based rigorous specification and verification; precise and provable but costly and hard to learn."
        },
        {
          "q": "2 a) Discuss Few points about project size? What are the popular metrics to measure project size? How can the size of a project be estimated during the project planning stage?",
          "a": "Project size is a primary input to effort, cost and schedule estimation: larger projects require more effort and time, and the relationship is nonlinear because large projects add communication and integration overhead. The popular size metrics are Lines of Code (LOC, usually expressed in KLOC), which counts delivered source lines, and Function Points (FP), which measure functionality from counts of inputs, outputs, inquiries, files and interfaces. Other measures include use-case points, story points and number of functions or transactions. During planning, size is estimated from the requirements or SRS by analogy with similar completed projects, by expert judgement or Delphi, by counting functions/use cases and converting them using a productivity ratio, or by building a prototype to reduce uncertainty. The estimate is refined as design details become available.",
          "explanation": "It explains why size matters, names the two main metrics and gives the practical early-estimation methods used during planning.",
          "oneShotPreview": "Size drives effort/cost; metrics LOC and FP; estimate from the SRS by analogy, experts or function/use-case counts."
        },
        {
          "q": "2 b) Identify and explain factors contributing to the complexity of managing a software project.",
          "a": "Software projects are complex because the product is intangible and its progress is visible only through documents and code. Major contributing factors are large project size, unclear or frequently changing requirements, use of new or unfamiliar technology, a new application domain, distributed or heterogeneous teams, tight schedules and budgets, high reliability and quality demands, and many stakeholders with conflicting interests. Estimation uncertainty and the difficulty of measuring real progress add further problems, as does the need to coordinate many interdependent tasks. If these factors are not controlled, they lead to cost and schedule overruns and poor quality, which is why risk and change management are essential.",
          "explanation": "The answer identifies the standard complexity factors and explains why each makes management harder.",
          "oneShotPreview": "Intangibility, changing requirements, size, new technology, distributed teams, tight deadlines and many stakeholders."
        },
        {
          "q": "3 a) List the important shortcomings of LOC metric when used as a software size metric for carrying out project estimations.",
          "a": "LOC is simple to count but has several serious drawbacks as an estimation metric. It is language-dependent: a line of code in a high-level language does not represent the same work as a line in assembly, so it unfairly penalises high-level languages and concise design. It measures implementation rather than functionality, so it rewards code bloat and discourages reuse, refactoring and short solutions. It is hard to estimate early because coding details are unknown during planning. It is sensitive to comments, blank lines and individual coding style, and different counting conventions give different numbers. It also ignores complexity, data and interfaces, and works poorly for object-oriented, generated or non-procedural software.",
          "explanation": "This is the standard critique of LOC as a size metric: language bias, late availability, style dependence and poor link to functionality.",
          "oneShotPreview": "Language-dependent, rewards bloat, measures code not function, hard to estimate early, style-sensitive, ignores complexity."
        },
        {
          "q": "3 b) Demonstrate the Responsibilities of a software project manager? Explain it.",
          "a": "A software project manager plans the project and estimates its size, effort, cost and schedule, then allocates resources and forms the team. They assign tasks, set milestones and monitor actual progress against the plan, taking corrective action when there is a deviation. They identify and mitigate risks, control quality and manage changes to requirements. They act as the interface with the customer and other stakeholders, reporting status, negotiating scope and handling expectations. They also provide the team with the required environment, tools and support, and ensure that deliverables meet the agreed standards. In short, the manager is accountable for delivering the product on time, within budget and at the required quality.",
          "explanation": "It covers the planning, organising, leading and controlling responsibilities of a project manager as described in standard texts.",
          "oneShotPreview": "Plans, estimates, staffs, schedules, monitors, manages risk/quality/change and reports to stakeholders."
        },
        {
          "q": "4 a) Compare the following project size estimation techniques. i) Expert judgement ii) Delphi technique.",
          "a": "Expert judgement asks one or a few experienced people to estimate project size from their memory of similar completed projects. It is quick and cheap but can be biased, subjective and dominated by one person's opinion. The Delphi technique is a structured, group form of expert judgement: several experts estimate independently and anonymously, a moderator circulates the estimates and reasons, and further rounds are held until a consensus is reached. Delphi reduces the influence of dominant personalities and groupthink and is generally more accurate, but it takes more time. Both techniques rely on human experience rather than a formula and work best when comparable historical project data exists; Delphi is essentially a more disciplined, iterative version of expert judgement.",
          "explanation": "The comparison covers method, number of participants, bias, time and accuracy, and correctly identifies Delphi as structured expert judgement.",
          "oneShotPreview": "Expert judgement = one/few experts, fast but biased; Delphi = anonymous multi-round consensus, slower and more reliable."
        },
        {
          "q": "4 b) Interpret an overview of the different categories of estimation techniques.",
          "a": "Software estimation techniques can be grouped into several categories. Analogous or top-down estimation compares the new project with similar past projects and scales by size or complexity. Expert judgement and Delphi rely on the experience of one or more experts. Bottom-up estimation decomposes the work into small tasks, estimates each one and sums them. Parametric or algorithmic models use a formula, such as COCOMO or Function Points, to derive effort from size and cost drivers. Model-based or machine-learning approaches use historical project data to build a predictive model. Each category involves a trade-off: top-down is fast but coarse, bottom-up is detailed but time-consuming, and algorithmic models are repeatable but need calibration. In practice several techniques are used together and the results cross-checked.",
          "explanation": "It lists the standard categories of estimation techniques and states their relative strengths and weaknesses.",
          "oneShotPreview": "Analogous, expert/Delphi, bottom-up, parametric (COCOMO/FP) and model-based — fast vs detailed, coarse vs calibrated."
        },
        {
          "q": "5 Explain in detail the following project size estimation techniques. i) Lines of Code (LOC) ii) Function Point (FP) Metric",
          "a": "i) Lines of Code (LOC): LOC counts the number of source code lines delivered in a program, normally expressed in KLOC (thousands of lines), usually excluding comments and blank lines. Because effort and schedule grow with the amount of code to be written, LOC is a simple, automatable size measure and is the size input to basic COCOMO. It can be estimated early by analogy, by counting functions or use cases and applying a lines-per-function ratio, or through expert judgement. Its weaknesses are that it is language-dependent, penalises high-level languages, reuse and concise design, measures implementation rather than user functionality, is difficult to estimate before design, is sensitive to coding style and counting conventions, and ignores complexity, data and interfaces. It also encourages bloated code. \n\nii) Function Point (FP) Metric: Function Point analysis measures the functional size of a system from the user's viewpoint, independent of programming language. It counts five component types: External Inputs (EI), External Outputs (EO), External Inquiries (EQ), Internal Logical Files (ILF) and External Interface Files (EIF). Each item is rated simple, average or complex and given a weight; the total is the Unadjusted Function Point (UFP) count. A Value Adjustment Factor based on 14 general system characteristics (data communications, performance, transaction rate, etc.) gives FP = UFP x (0.65 + 0.01 x sum of the 14 ratings). FP can be estimated from the requirements early, is language-independent and reflects user value, but the counting is somewhat subjective and requires trained people. FP values can be converted to equivalent LOC for use in effort models.",
          "explanation": "This gives a detailed treatment of both techniques: counting rules, formulas, estimation use and advantages/limitations of each, as required by a ten-mark question.",
          "oneShotPreview": "LOC = source lines (KLOC), simple but language-dependent; FP = weighted EI/EO/EQ/ILF/EIF x VAF, language-independent functional size."
        },
        {
          "q": "6 Define Risk Management and Explain types of risk management?",
          "a": "Risk management is the systematic process of identifying, analysing, prioritising and mitigating risks that could prevent a software project from achieving its goals. It is proactive: it tries to reduce the probability and impact of adverse events before they happen rather than reacting to crises. Its activities are risk identification, risk analysis (estimating probability and impact), risk prioritisation, mitigation planning, risk resolution and continuous risk monitoring. Risks are commonly classified as project risks (budget, schedule, staffing, resources, scope), technical risks (design, implementation, technology, complexity, changing requirements), business risks (market, legal, contractual, third parties) and product risks (defects, performance, usability). They are also described as known risks, predictable risks and unpredictable risks, the last needing contingency plans. Mitigation strategies are to avoid the risk, transfer it, reduce it or accept it; a risk management plan records the likely risks, their indicators, owners and responses.",
          "explanation": "It defines risk management, lists its activities, the main risk categories and the standard mitigation strategies, which is what the question asks for.",
          "oneShotPreview": "Identify, analyse, prioritise, mitigate and monitor risks; types: project, technical, business and known/predictable/unpredictable."
        },
        {
          "q": "7 a) Analyze the concept of COCOMO model and its extension.",
          "a": "COCOMO (Constructive Cost Model), proposed by Boehm, is an empirical algorithmic model that estimates effort and schedule from program size. Basic COCOMO uses Effort = a x (KLOC)^b person-months, with a and b set by project class: organic (2.4, 1.05), semi-detached (3.0, 1.12) and embedded (3.6, 1.20); development time is TDEV = c x (Effort)^d and average staffing = Effort / TDEV. Intermediate COCOMO multiplies the estimate by an effort adjustment factor derived from 15 cost drivers (product, hardware, personnel and project attributes), and Detailed COCOMO applies them phase by phase. Its main extension is COCOMO II, designed for modern iterative, object-oriented and reuse-oriented development. COCOMO II has three models: Application Composition (point-based for prototypes), Early Design (use-case points with 7 scale factors and 17 effort multipliers) and Post-Architecture (full model with 22 effort multipliers and 5 scale factors). Its general form is PM = A x Size^E x product(EM), where E represents the diseconomy of scale, and it supports incremental development and reused code.",
          "explanation": "It explains the original model's formula and classes and then describes COCOMO II and its three sub-models, covering both parts of the question.",
          "oneShotPreview": "COCOMO effort = a(KLOC)^b; COCOMO II = A x Size^E x product(EM) for iterative, reuse-based projects."
        },
        {
          "q": "7 b) Evaluate the analytical technique 'Halstead's Software Science' with example",
          "a": "Halstead's software science is an analytical, white-box metric that treats a program as a set of operators and operands and derives its size, complexity and effort from the source code. Its basic counts are n1 (distinct operators), n2 (distinct operands), N1 (total operator occurrences) and N2 (total operand occurrences). From these it computes vocabulary n = n1 + n2, length N = N1 + N2, estimated length = n1 log2(n1) + n2 log2(n2), volume V = N log2(n) bits, difficulty D = (n1/2) x (N2/n2), effort E = D x V, and estimated delivered bugs B = V / 3000. For example, for a tiny routine with operators main, int, =, + and ; (n1 = 5, N1 = 7) and operands a, b, c (n2 = 3, N2 = 5), we get n = 8, N = 12, V = 12 log2(8) = 36 bits and D = (5/2) x (5/3) about 4.17, giving E about 150. Evaluation: the metrics are objective, language-independent and automatically computable, and useful for comparing programs and studying productivity. However, they can only be applied after coding, ignore control flow, algorithm quality and user functionality, and their empirically derived formulas correlate weakly with real effort, so they are mostly a research and quality-analysis tool.",
          "explanation": "It defines the Halstead measures and formulas, works through a small counted example and then evaluates strengths and limitations, satisfying an evaluate-with-example question.",
          "oneShotPreview": "Counts operators/operands to get volume V = N log2(n) and effort E = D x V; objective but code-only and late."
        },
        {
          "q": "8 a) Illustrate basic classes of software development projects with examples.",
          "a": "Software development projects fall into several basic classes. (1) Generic software products built for a mass market by a vendor, such as a word processor or a mobile app, where customers are unknown at development time. (2) Custom or contracted systems built for a specific client, such as a bank's online banking system or a hospital information system, where the customer defines the requirements. (3) Embedded and real-time systems, such as aircraft flight control, automotive engine control or medical devices, where software is part of a larger hardware system with safety and timing constraints. (4) System software such as operating systems, compilers, database systems and device drivers. (5) Web and distributed applications such as e-commerce sites and cloud services. (6) Research or prototype projects and maintenance/re-engineering projects. Projects are also classed as organic, semi-detached or embedded in COCOMO. The classes differ in requirements stability, quality demands, risk and the development process used.",
          "explanation": "It lists the main classes with concrete examples and notes how they differ, matching the two-mark-per-class marking scheme.",
          "oneShotPreview": "Generic products, custom/contract, embedded/real-time, system software, web/distributed and prototypes — differing risks and processes."
        },
        {
          "q": "8 b) Describe the main activities carried out during requirements analysis and specification phase? Explain it.",
          "a": "The requirements analysis and specification phase converts a vague user need into a precise, documented specification. Its main activities are: (1) Requirements elicitation, gathering needs from customers, users and other stakeholders by interviews, questionnaires, observation, workshops and prototyping. (2) Analysis and negotiation, classifying requirements as functional or non-functional, checking feasibility, consistency and completeness, resolving conflicts and setting priorities. (3) Specification, documenting the agreed requirements in an SRS using natural language, structured notation, use cases or a formal specification. (4) Requirements validation, reviewing the SRS with the customer to confirm it is correct, complete, unambiguous, verifiable and traceable. (5) Requirements management, controlling changes and maintaining traceability throughout the project. A prototype is often built to clarify uncertain requirements. The outcome is an approved SRS that forms the basis for design and a contract between customer and developer.",
          "explanation": "The answer names and explains the standard five activities of requirements engineering and states the phase's outcome.",
          "oneShotPreview": "Elicit, analyse and negotiate, specify in an SRS, validate with the customer, then manage changes."
        },
        {
          "q": "9 a) Identify and illustrate the important uses of a well-formulated SRS document.",
          "a": "A well-formulated SRS has many important uses. It acts as a contract between customer and developer by stating what the system will do. It is the basis for design, coding and testing: test cases are derived directly from the requirements. It supports effort, cost and schedule estimation and project planning. It enables verification and validation because every requirement can be checked and tested. It improves communication among stakeholders, serves as a training document for new team members, and supports maintenance, enhancement and porting. It also provides a baseline for change control through requirements traceability. For example, when a customer requests a change, the SRS is consulted to see which functions and tests are affected.",
          "explanation": "It enumerates the standard uses of an SRS and illustrates them with concrete examples such as test derivation and change control.",
          "oneShotPreview": "Contract, basis for design/test, estimation, validation, communication, training, maintenance and change control."
        },
        {
          "q": "9 b) Contrast the following categories of requirements. i) Functional requirements ii) Non-functional requirements",
          "a": "Functional requirements state what the system must do: the functions, inputs, processing and outputs, for example 'the system shall allow a user to log in' or 'the system shall generate a monthly report'. They describe observable behaviour, can be mapped to use cases and are tested for correctness. Non-functional requirements state how the system behaves, that is, its quality attributes and constraints, such as response time under two seconds, security, reliability, availability, usability, maintainability, portability and standards compliance. They apply to the system as a whole rather than to one function and are often called quality-of-service requirements. Functional requirements are comparatively easy to specify and verify, while non-functional ones need measurable targets and are harder to test. Both belong in the SRS, and non-functional requirements strongly influence architectural decisions, for example adding a cache to meet a performance target.",
          "explanation": "It contrasts the two categories by what they describe, scope, verifiability and design impact, which is what a contrast question requires.",
          "oneShotPreview": "Functional = what the system does; non-functional = how well (performance, security, reliability, usability)."
        },
        {
          "q": "10 a) What is a Formal Technique? Identify important concepts in formal methods, and examine the merits and demerits of using formal techniques",
          "a": "A formal technique is a rigorously mathematical approach to specifying, developing and verifying software using a language with precisely defined syntax and semantics. Important concepts in formal methods are: formal specification languages such as Z, VDM, B, algebraic and axiomatic specifications and temporal logic; a specification as a mathematical model of the system; refinement, the stepwise transformation of a specification into code with correctness preserved at each step; and verification or proof that the implementation satisfies the specification. Approaches are either model-oriented (describing state and operations, e.g. Z) or property-oriented (describing behaviour by axioms and equations). Merits are precision, absence of ambiguity, early detection of inconsistencies, the ability to prove correctness, higher reliability and a solid basis for testing. Demerits are a steep learning curve, high cost and time, need for specialist skills, difficulty with large or rapidly changing systems, limited tool support and weak direct connection to user needs, so formal methods are used mainly in safety-critical domains.",
          "explanation": "The answer defines formal techniques, names the key concepts and then explicitly examines both merits and demerits.",
          "oneShotPreview": "Math-based specification with refinement and proof; precise and provable but expensive, slow and specialist."
        },
        {
          "q": "10 b) What is Axiomatic Specification? How to develop an axiomatic specification with an example",
          "a": "Axiomatic specification is a property-oriented formal method that defines a system or abstract data type by a set of axioms: logical statements describing the properties its operations must satisfy, rather than by an algorithm or a state model. To develop one: (1) identify the abstract type and its operations; (2) define the signature, that is the sorts and operation names with their argument and result types; (3) write axioms giving the meaning of each operation, including base cases and general rules; (4) check the axioms for consistency and completeness; and (5) use them for reasoning about or verifying an implementation. For example, a stack with operations empty, push, pop, top and isempty can be specified by the axioms: isempty(empty) = true, isempty(push(s,x)) = false, top(push(s,x)) = x, and pop(push(s,x)) = s. These axioms completely characterise stack behaviour without saying how the stack is implemented.",
          "explanation": "It defines axiomatic specification, gives the development steps and illustrates them with the classic stack axioms, covering both parts of the question.",
          "oneShotPreview": "Define type, operations and logical axioms; e.g. top(push(s,x)) = x and pop(push(s,x)) = s for a stack."
        },
        {
          "q": "11 Explain in details Algebraic Specification. Identify Pros and Cons of algebraic specifications with an example.",
          "a": "Algebraic specification is a property-oriented formal method that specifies an abstract data type (ADT) or component by giving its syntax (sorts and operations) and its semantics as a set of equations or axioms over terms. It describes what the operations do rather than how they are implemented. A specification has a signature listing the sorts and operation symbols with their arities, and equational axioms defining their behaviour; specifications can be built incrementally by enrichment and instantiation, and properties are proved by equational reasoning or term rewriting. Example - a Stack ADT: sorts Stack, Integer, Boolean; operations empty -> Stack, push(Stack, Integer) -> Stack, pop(Stack) -> Stack, top(Stack) -> Integer, isempty(Stack) -> Boolean; axioms: isempty(empty) = true, isempty(push(s,x)) = false, top(push(s,x)) = x, pop(push(s,x)) = s, and top(empty) = error. Any correct implementation must satisfy these equations. Pros: precise and unambiguous, implementation-independent, supports verification, theorem proving and test generation, encourages clean abstract design, suits reusable ADTs, and can be executed as a term-rewriting prototype. Cons: hard and time-consuming to write, requires mathematical skill, large specifications become complex, poorly captures non-functional aspects such as performance and concurrency, limited industrial tool support, and can be overkill for ordinary projects.",
          "explanation": "This is a detailed answer: it defines algebraic specification, explains its structure, gives a complete worked stack example and lists both pros and cons as a ten-mark question requires.",
          "oneShotPreview": "ADT spec = signature + equational axioms (e.g. pop(push(s,x)) = s); precise and verifiable but hard, slow and weak on non-functional aspects."
        }
      ]
    },
    "3": {
      "unitTitle": "Software Design and Agility",
      "totalQuestions": 18,
      "questions": [
        {
          "q": "1 a) Write the difference between Coupling and Cohesion. [L3] [CO3] [2M]",
          "a": "Coupling is the degree of interdependence between modules - how much one module depends on the internal details of another. Cohesion is how closely related the elements within a single module are, i.e., how well the functions inside one module belong together. Good design aims for low coupling (independent modules) and high cohesion (each module focused on one task). This makes the system easier to understand, test, maintain, and reuse.",
          "explanation": "Coupling and cohesion are the two core measures of module independence; minimizing dependencies between modules while maximizing internal relatedness reduces ripple effects and complexity.",
          "oneShotPreview": "Coupling = inter-module dependency (keep low); Cohesion = intra-module relatedness (keep high)."
        },
        {
          "q": "1 b) Define Data Flow Diagram [L3] [CO3] [2M]",
          "a": "A Data Flow Diagram (DFD) is a graphical representation of how data flows through an information system, showing data moving from external sources into processes, being transformed, stored in data stores, and delivered to destinations (sinks). It uses bubbles/circles for processes, arrows for data flows, rectangles for external entities, and parallel lines or open rectangles for data stores. DFDs are built at multiple levels (context, level 0, level 1, ...) to show increasing detail. They are a core tool of structured analysis for modeling system functionality independently of implementation.",
          "explanation": "A DFD captures what a system does with data rather than how it does it, giving an implementation-independent view useful to both technical and non-technical stakeholders.",
          "oneShotPreview": "DFD = diagram of data moving through processes, stores, sources and sinks."
        },
        {
          "q": "1 c) Define Design Review. [L3] [CO3] [2M]",
          "a": "A design review is a formal, systematic evaluation of a software design document or model by a group of developers or stakeholders before implementation begins. Its purpose is to find defects, ambiguities, inconsistencies, and omissions early, and to verify the design meets requirements and standards. Reviews are conducted as walkthroughs, inspections, or technical reviews. They improve quality, reduce rework, and confirm the design is complete and feasible.",
          "explanation": "Reviewing the design before coding catches errors at the cheapest stage and verifies the design actually satisfies the specified requirements.",
          "oneShotPreview": "Design review = formal group evaluation of a design before coding to catch defects early."
        },
        {
          "q": "1 d) Define LOC. [L3] [CO3] [2M]",
          "a": "LOC stands for Lines of Code, a software metric that counts the number of lines in a program's source code. It is used as a simple measure of program size and, indirectly, of complexity, effort, and productivity. It may count physical lines or logical source statements, often excluding comments and blank lines. Because it is easy to collect, LOC feeds estimation models such as COCOMO, though it should not be the sole measure of quality.",
          "explanation": "LOC gives an objective, easily measured size figure that supports effort estimation and productivity comparison, but it reflects quantity rather than quality or functionality.",
          "oneShotPreview": "LOC = Lines of Code; a size/complexity metric used for estimation and productivity."
        },
        {
          "q": "1 e) What are the types of User-Interfaces [L3] [CO3] [2M]",
          "a": "The main types of user interfaces are: (1) command-line interfaces (CLI) where users type text commands, (2) graphical user interfaces (GUI) using windows, icons, menus, and a pointer, (3) menu-driven interfaces where users select from displayed options, (4) form-based interfaces for data entry, and (5) natural interfaces such as touchscreens, voice user interfaces (VUI), and gesture-based interaction. They can also be classified as batch versus interactive, or as direct-manipulation interfaces. The choice depends on the users, the task, and the device.",
          "explanation": "Classifying interfaces by interaction style helps designers choose the medium best suited to the users and tasks at hand.",
          "oneShotPreview": "UI types: CLI, GUI, menu-driven, form-based, and touch/voice natural interfaces."
        },
        {
          "q": "2 a) Compose and Explain briefly about Design Processes. [L6] [CO3] [5M]",
          "a": "Software design is the process of transforming a specification or requirements model into a detailed plan (blueprint) for implementation. It typically includes understanding the requirements, designing the system architecture, identifying modules and their interfaces (high-level or architectural design), and specifying algorithms and data structures for each module (detailed design). Design also covers data design and user-interface design, evaluation of quality attributes, followed by design review and documentation. The output is a design document that guides coding and testing.",
          "explanation": "Design bridges analysis and coding by converting what the system must do into how it will be structured, addressing architecture, data, interfaces, and detail at each step.",
          "oneShotPreview": "Design process = architecture + data + interface + detailed design, turning requirements into a buildable blueprint."
        },
        {
          "q": "2 b) Discuss Layered Arrangements of modules [L2] [CO3] [5M]",
          "a": "A layered arrangement organizes modules into hierarchical levels (layers), where each layer provides services to the layer above and uses services of the layer below. Lower layers hold primitive, general-purpose functions such as device drivers or data access, while higher layers implement application logic and the user interface. Modules interact mainly with adjacent layers, which limits complexity and dependency. This supports separation of concerns, modularity, easier maintenance, and reuse of lower layers. Layering is common in operating systems, networks (the OSI model), and enterprise applications.",
          "explanation": "Layering controls complexity by restricting communication to nearby layers, so a change in one layer has limited impact on the others.",
          "oneShotPreview": "Layered modules = hierarchy where each layer serves the one above and uses the one below."
        },
        {
          "q": "3 Classify and explain types of Cohesion and Coupling with neat sketch [L2] [CO3] [10M]",
          "a": "Cohesion measures how strongly the elements within a module belong together; from weakest to strongest its levels are coincidental, logical, temporal, procedural, communicational, sequential, and functional (functional being best). Coupling measures dependence between modules; from strongest (worst) to weakest (best) its levels are content, common/global, control, stamp, data, and no coupling (data/message coupling being ideal). The design goal is high cohesion and low coupling. A typical sketch shows two spectra: cohesion increasing from weak to strong and coupling decreasing from tight to loose, with arrows pointing toward the ideal state. High cohesion and low coupling produce independent, reusable, and easily maintained modules.",
          "explanation": "Classifying these levels gives designers a concrete scale for evaluating module independence and guides refactoring toward functional cohesion with data coupling.",
          "oneShotPreview": "Cohesion: coincidental -> functional (aim high); Coupling: content -> data (aim low); sketch as a spectrum."
        },
        {
          "q": "4 a) Explain approaches of software design [L2] [CO3] [5M]",
          "a": "The main approaches to software design are: (1) function-oriented (structured/procedural) design, which decomposes the system into functions or modules arranged hierarchically using DFDs and structure charts; (2) object-oriented design, which models the system as interacting objects with encapsulated data and behavior using classes, inheritance, and polymorphism; and (3) component-based design, which assembles the system from reusable self-contained components with well-defined interfaces. Supporting approaches include data-centered and model-driven design. Function-oriented design focuses on what the system does, while object-oriented design focuses on what objects exist and how they collaborate.",
          "explanation": "These approaches represent different ways of decomposing a system - by function, by object, or by reusable component - each with strengths suited to different problem domains.",
          "oneShotPreview": "Design approaches: function-oriented, object-oriented, and component-based decomposition."
        },
        {
          "q": "4 b) Demonstrate on Agile Process Models [L2] [CO3] [5M]",
          "a": "Agile process models are iterative and incremental approaches emphasizing customer collaboration, working software, responding to change, and frequent delivery. Well-known agile models include Scrum (time-boxed sprints, roles such as Scrum Master and Product Owner, ceremonies like daily stand-ups and reviews), Extreme Programming or XP (pair programming, test-driven development, continuous integration, frequent releases), Feature-Driven Development, DSDM, and Crystal. All are founded on the Agile Manifesto values: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. They deliver small increments quickly and adapt to changing requirements.",
          "explanation": "Agile models replace heavyweight plan-driven development with short feedback loops and adaptive planning, improving responsiveness to changing customer needs.",
          "oneShotPreview": "Agile models = iterative, people-focused delivery (Scrum, XP, FDD, DSDM) guided by the Agile Manifesto."
        },
        {
          "q": "5 Explain briefly about the concept of the following. i) Structured Analysis ii) Structured Design [L2] [CO3] [5M]",
          "a": "(i) Structured Analysis is a requirements-analysis technique that models a system functionally using graphical tools such as Data Flow Diagrams, a data dictionary, and structured English or decision tables. It breaks the system into processes and data flows to show what the system does, independent of implementation. (ii) Structured Design is the complementary technique that converts the analysis model into a modular design using structure charts, emphasizing high cohesion, low coupling, top-down decomposition, and module independence. Together they form the structured analysis and design method, progressing from a logical model of requirements to a physical, implementable design.",
          "explanation": "Structured analysis defines what the system must do in a clear graphical form, and structured design turns that specification into a modular how, ensuring traceability from requirements to code.",
          "oneShotPreview": "Structured analysis models 'what' with DFDs; structured design models 'how' with structure charts."
        },
        {
          "q": "6 a) Explain Developing the DFD model of a system [L3] [CO3] [5M]",
          "a": "Developing a DFD model begins with a context diagram (level 0) showing the whole system as a single process interacting with external entities. The system is then decomposed into subprocesses at level 1 and refined further at level 2 and lower levels, each showing more detail. The model uses four symbols: external entities (sources and sinks of data), processes (transformations), data flows (arrows), and data stores. Each process is numbered and a data dictionary documents all data elements and flows. Balancing is maintained so input and output flows stay consistent between levels, producing a complete hierarchical set of DFDs.",
          "explanation": "Building DFDs top-down from a context diagram to detailed levels keeps the model understandable while progressively revealing functional detail and preserving consistency through balancing.",
          "oneShotPreview": "DFD development = context diagram -> level 1 -> level 2, decomposing processes with balanced flows."
        },
        {
          "q": "6 b) Discuss about Structured design & detailed design [L3] [CO3] [5M]",
          "a": "Structured design (high-level or architectural design) defines the overall structure of the system: its modules, their hierarchy, interfaces, and the flow of control and data between them, typically shown with structure charts. It applies top-down decomposition, modularity, high cohesion, and low coupling. Detailed design (low-level design) specifies each module's internals: algorithms, data structures, logic, and precise processing steps, described with pseudocode, flowcharts, or program design language. Structured design answers what modules exist and how they connect, while detailed design answers how each module works internally. Both are documented in the design document and guide implementation and testing.",
          "explanation": "Separating architectural design from detailed design lets designers first get the overall structure right and then specify each module precisely, improving clarity and maintainability.",
          "oneShotPreview": "Structured design = module architecture/structure charts; detailed design = per-module algorithms and data."
        },
        {
          "q": "7 What are the characteristics of a good user interface? Explain in detail. [L3] [CO3] [10M]",
          "a": "A good user interface is easy to learn, with clear, consistent terminology, layout, and behavior. It is efficient, letting experienced users accomplish tasks quickly through shortcuts and sensible defaults. It gives helpful feedback and clear error messages that guide recovery from mistakes, and treats errors gracefully. Consistency in menus, commands, and colors reduces the learning curve. It supports user control and flexibility, offers good visual hierarchy and uncluttered aesthetics, and is accessible to users with disabilities. It also provides documentation or help and is responsive. Overall, a good UI minimizes user effort and errors while maximizing satisfaction and productivity.",
          "explanation": "These characteristics directly determine usability - they reduce learning time and errors while improving efficiency and satisfaction, the core goals of interface design.",
          "oneShotPreview": "Good UI = learnable, efficient, consistent, forgiving, accessible, and visually clear."
        },
        {
          "q": "8 a) Discuss User interface design basic concepts [L3] [CO3] [5M]",
          "a": "User interface design rests on several basic concepts. User-centered design puts the users' needs, goals, and characteristics at the center of the process. Key concepts include visibility (making options apparent), affordance (showing how an object can be used), feedback (informing the user of results), and consistency (uniform behavior). Designers build user, task, and system models, reduce cognitive load, provide clear navigation, and support error prevention and recovery. Usability goals - learnability, efficiency, memorability, low error rate, and satisfaction - guide evaluation, and iterative prototyping with user feedback is essential.",
          "explanation": "These concepts give designers the vocabulary and principles to create interfaces that match users' mental models and support efficient, error-free interaction.",
          "oneShotPreview": "UI basics = user-centered design, visibility, affordance, feedback, consistency, and usability goals."
        },
        {
          "q": "8 b) What are the types of user interface [L3] [CO3] [5M]",
          "a": "The principal types of user interface are command-line interfaces (CLI) where users type commands, graphical user interfaces (GUI) using windows, icons, menus, and pointing devices, menu-driven interfaces where users choose from displayed options, form-based interfaces for structured data entry, and natural interfaces such as touchscreens, voice (VUI), and gesture-based interaction. Interfaces may also be described as batch versus interactive, or as direct-manipulation interfaces. GUIs suit general users, CLIs suit technical users, and voice or touch suit mobile and hands-free contexts.",
          "explanation": "Distinguishing interface types by interaction style helps select the design most suitable for the users, tasks, and devices involved.",
          "oneShotPreview": "UI types: CLI, GUI, menu-driven, form-based, and touch/voice natural interfaces."
        },
        {
          "q": "10 a) Discuss about fundamentals of Component based GUI development. [L2] [CO3] [5M]",
          "a": "Component-based GUI development builds an interface by assembling reusable, self-contained software components such as buttons, menus, text boxes, and panels. Each component encapsulates its own data and behavior and exposes well-defined interfaces through properties, methods, and events, so it can be plugged into different applications. Components are placed in containers with layout managers controlling placement, and they communicate through events (event-driven programming). This approach promotes reuse, faster development, easier maintenance, and consistency. Frameworks such as Java Swing/AWT, .NET Windows Forms/WPF, and web component libraries supply ready-made GUI components.",
          "explanation": "Treating GUI elements as reusable components with standard interfaces reduces development effort and promotes consistent, maintainable interfaces.",
          "oneShotPreview": "Component-based GUI = assemble reusable widgets with properties/methods/events in containers."
        },
        {
          "q": "10 b) Explain a UI design methodology [L2] [CO3] [5M]",
          "a": "A UI design methodology is a structured, iterative process for creating an effective interface. It begins with user and task analysis to understand who will use the system and what they need to do, then defines usability goals and produces interface prototypes (paper or software mockups). These prototypes are evaluated with users through usability testing, and feedback drives refinement; the cycle repeats until the interface meets its goals. Common methodologies include user-centered design, participatory design, and iterative prototyping, guided by principles such as consistency, visibility, and feedback. The result is an interface that is usable, efficient, and aligned with user needs.",
          "explanation": "A methodology makes design systematic and evidence-based, using repeated user feedback to converge on an interface that genuinely satisfies user needs.",
          "oneShotPreview": "UI methodology = analyze users/tasks -> prototype -> evaluate with users -> refine iteratively."
        }
      ]
    },
    "4": {
      "unitTitle": "Coding and Testing and Software Reliability",
      "totalQuestions": 19,
      "questions": [
        {
          "q": "What do you mean by black-box testing?",
          "a": "Black-box testing (also called behavioral or functional testing) examines the software's functionality without any knowledge of its internal code structure. The tester treats the program as an opaque 'black box', supplies inputs, and verifies that the outputs conform to the specification. Test cases are derived from requirements and expected behavior rather than from program logic, using techniques such as equivalence partitioning, boundary value analysis, decision tables and cause-effect graphing.",
          "explanation": "It is correct because the tester validates 'what' the system does against its requirements without needing to know 'how' it is implemented internally.",
          "oneShotPreview": "Testing functionality against specifications without viewing internal code."
        },
        {
          "q": "Give two advantages of integration testing.",
          "a": "First, it detects interface and interaction defects early — such as mismatched parameters, incorrect data formats and wrong call sequences — which unit testing of isolated modules cannot catch. Second, it verifies that individually tested modules work together correctly as a group, giving confidence that the assembled system satisfies its functional requirements before system testing begins.",
          "explanation": "Integration testing focuses on inter-module interfaces, so it exposes faults that appear only when components are combined, which is the key reason for performing it.",
          "oneShotPreview": "Finds interface defects early and confirms modules work together correctly."
        },
        {
          "q": "Define smoke testing.",
          "a": "Smoke testing is a shallow, quick preliminary test run on a new software build to verify that the most critical functions work and that the build is stable enough for deeper testing. It is often called 'build verification testing' because it checks that the basic build has not broken in a catastrophic way. A build that fails the smoke test is rejected immediately, avoiding wasted effort on expensive further testing. The name originates in hardware testing, where a device was powered on simply to check that it did not emit smoke.",
          "explanation": "This is correct because smoke testing is intentionally broad but shallow, acting as an early gate that filters out unstable builds before rigorous testing.",
          "oneShotPreview": "Quick build-verification check of critical functions before deeper testing."
        },
        {
          "q": "Define the terms software reliability and software quality.",
          "a": "Software reliability is the probability that a software system will operate without failure for a specified period of time under specified conditions. Software quality is the degree to which software conforms to stated requirements, implicit user needs and established standards, covering attributes such as correctness, maintainability, usability, efficiency and portability. Reliability is therefore one measurable facet of the broader concept of software quality.",
          "explanation": "Reliability quantifies failure-free operation over time, whereas quality is a wider, multi-attribute notion of fitness for purpose and conformance to standards.",
          "oneShotPreview": "Reliability = failure-free probability over time; quality = overall conformance to requirements."
        },
        {
          "q": "What is statistical testing?",
          "a": "Statistical testing is a black-box testing approach in which test cases are generated randomly according to a probability distribution that reflects how the software is expected to be used in practice. Its goal is to estimate the software's reliability by observing how often failures occur under realistic usage conditions. It treats testing as a statistical sampling process, allowing reliability measures such as mean time between failures to be estimated from the observed results.",
          "explanation": "It is correct because statistical testing models the operational usage profile so that reliability can be inferred from sampled failures rather than from exhaustive testing.",
          "oneShotPreview": "Random, usage-profile-based testing used to estimate software reliability statistically."
        },
        {
          "q": "Discuss different types of code reviews.",
          "a": "Code reviews are static quality-assurance techniques in which source code is examined by people other than its author to find defects early. Formal inspections (Fagan inspections) are highly structured, with defined roles (moderator, author, inspector, recorder), individual preparation, a review meeting and a rework/follow-up phase. Walkthroughs are less formal and are led by the author, who explains the code to peers while they raise questions and comments. Peer reviews or informal reviews are casual discussions between colleagues, and modern practice also includes tool-assisted reviews through version-control pull requests. All types aim to detect errors, improve code quality and share knowledge, but they differ in structure and rigor.",
          "explanation": "These are the standard review types taught in software engineering — inspections, walkthroughs and peer reviews — each balancing defect-finding rigor against process overhead.",
          "oneShotPreview": "Inspections, walkthroughs and peer/tool-assisted reviews for finding defects early."
        },
        {
          "q": "What is the difference between internal and external documentation?",
          "a": "Internal documentation is embedded within the source code itself — comments, headers, meaningful identifier names and a clear code layout — and is intended mainly for programmers who maintain or modify the code. External documentation is produced separately, such as user manuals, design specifications, SRS documents and help files, aimed at users, managers, testers and other stakeholders. Internal documentation explains 'how' the code works, while external documentation describes 'what' the system does and 'how' to use or manage it. Both are essential: internal documentation supports maintenance, while external documentation supports communication with non-developers.",
          "explanation": "The distinction lies in location and audience: internal documentation lives in the code for developers, while external documentation lives outside it for a broader audience.",
          "oneShotPreview": "Internal = in-code comments for maintainers; external = separate manuals and specs for stakeholders."
        },
        {
          "q": "Classify the different types of program analysis tools used during program development.",
          "a": "Program analysis tools are broadly classified as static or dynamic analysis tools. Static analysis tools examine source code without executing it — examples are cross-reference generators, pretty-printers/formatters, linters and static analyzers, complexity analyzers and code-metrics tools that reveal style violations, structure and potential defects. Dynamic analysis tools analyze the program while it runs — examples are profilers, test coverage analyzers, debuggers, memory analyzers and execution tracers. A further category includes program transformation and reverse-engineering tools that restructure or visualize code. Together these tools support code review, debugging, testing and maintenance by automatically exposing defects, complexity and performance problems.",
          "explanation": "The standard classification is by whether the code is executed (static versus dynamic), with each family of tools serving different development and quality needs.",
          "oneShotPreview": "Static tools analyze code without running it; dynamic tools analyze it during execution."
        },
        {
          "q": "Distinguish between software verification and software validation.",
          "a": "Verification asks 'Are we building the product right?' — it checks that the software conforms to its specifications and design documents through reviews, inspections and static analysis. Validation asks 'Are we building the right product?' — it checks that the finished software actually meets the user's real needs and intended use, typically through testing and user evaluation. Verification is concerned with internal consistency and correctness against documents, while validation is concerned with fitness for purpose from the user's perspective. Both are complementary quality-assurance activities performed throughout the software lifecycle.",
          "explanation": "This is the classic distinction: verification checks conformance to specifications, while validation checks conformance to actual user needs.",
          "oneShotPreview": "Verification = conforms to specifications; validation = meets real user needs."
        },
        {
          "q": "What is the difference between black-box testing and white-box testing?",
          "a": "Black-box testing derives test cases from requirements and external behavior without knowledge of internal code, using techniques such as equivalence partitioning and boundary value analysis. White-box testing (glass-box or structural testing) uses knowledge of the internal logic to design tests that exercise specific statements, branches, conditions and paths. Black-box testing validates functional correctness from a user's viewpoint, while white-box testing verifies completeness of the internal logic. The two are complementary: black-box testing finds missing or incorrect functions, whereas white-box testing finds logic and path errors.",
          "explanation": "The key difference is whether the tester knows and uses the program's internal structure when designing the test cases.",
          "oneShotPreview": "Black-box tests behavior from specs; white-box tests internal code paths and logic."
        },
        {
          "q": "What do you understand by the term integration testing? Briefly explain the important strategies used for integration testing of procedural programs.",
          "a": "Integration testing is the phase in which individual, already unit-tested modules are combined and tested as a group to verify that they interact correctly and that their interfaces work as intended. Important strategies for procedural programs include the big-bang approach, where all modules are combined and tested at once; top-down integration, which starts with the main module and uses stubs for lower-level modules, adding modules in depth-first or breadth-first order; bottom-up integration, which starts with the leaf modules using drivers to invoke them and builds upward; and the sandwich (mixed) approach, which combines top-down and bottom-up. Incremental strategies make fault isolation easier than the big-bang method.",
          "explanation": "These are the canonical integration testing strategies — big-bang, top-down, bottom-up and sandwich — which determine the order and manner in which modules are combined.",
          "oneShotPreview": "Combining unit-tested modules; strategies are big-bang, top-down, bottom-up and sandwich."
        },
        {
          "q": "What are the activities carried out during testing a software?",
          "a": "Testing activities normally proceed through unit testing of individual modules, integration testing of module interfaces and groups, system testing of the complete product against requirements, and acceptance testing for user validation before delivery. Supporting activities include test planning and test-case design, executing the tests, recording and reporting defects, retesting after fixes (confirmation testing and regression testing), and test closure and reporting. Test cases are derived both from specifications (black-box) and from code (white-box), and actual results are compared with expected outcomes. Verification activities such as reviews and static analysis accompany these dynamic testing steps.",
          "explanation": "These are the standard testing levels and associated tasks in the software testing life cycle, progressing from small units to the full delivered system.",
          "oneShotPreview": "Unit to integration to system to acceptance testing, plus planning, defect tracking and regression."
        },
        {
          "q": "What do you understand by a reliability growth model?",
          "a": "A reliability growth model is a mathematical model that describes how software reliability improves over time as defects are discovered and removed during testing. It relates the failure rate or mean time between failures to testing time or the number of faults fixed, so that managers can predict when a target reliability level will be achieved. Well-known examples include the Jelinski-Moranda model, the Goel-Okumoto model and Musa's basic execution-time model. Such models help decide when testing can stop and help estimate the number of defects remaining in the software.",
          "explanation": "It is correct because reliability growth models mathematically capture the observed decline in failure intensity as faults are progressively removed.",
          "oneShotPreview": "Mathematical model predicting reliability improvement as defects are found and fixed."
        },
        {
          "q": "Why is regression testing important? Explain in detail.",
          "a": "Regression testing is important because a change made to fix a defect, add a feature or refactor code can unintentionally introduce new faults in parts of the software that previously worked correctly. It involves re-running a carefully selected subset of existing test cases to confirm that the modifications have not degraded existing functionality. This is essential in iterative development and maintenance-heavy projects where the code changes frequently. By catching unintended side effects early, regression testing preserves the stability and trustworthiness of the product across releases; because the tests must be repeated often, automated regression suites are commonly used.",
          "explanation": "It is correct because the primary purpose of regression testing is to detect new defects introduced into already-tested code by subsequent changes.",
          "oneShotPreview": "Re-running existing tests after changes to catch newly introduced defects."
        },
        {
          "q": "Define three metrics to measure software reliability.",
          "a": "Mean Time Between Failures (MTBF) is the average elapsed time between one failure and the next during operation. Failure rate or failure intensity is the number of failures observed per unit of time or per execution, essentially the reciprocal of MTBF. Reliability R(t) is the probability that the software will operate without failure for a specified time interval t under stated conditions. Closely related metrics include Mean Time To Failure (MTTF) and Mean Time To Repair (MTTR). These quantitative measures allow reliability to be specified, measured and predicted.",
          "explanation": "These are standard quantitative reliability measures that express failure-free operation over time and allow reliability goals to be tracked objectively.",
          "oneShotPreview": "MTBF, failure rate and reliability R(t) quantify failure-free operation over time."
        },
        {
          "q": "Define the term total quality management (TQM). What are the advantages of TQM?",
          "a": "Total Quality Management (TQM) is a management philosophy in which every member of an organization participates in continuously improving the quality of all processes, products and services in order to achieve long-term customer satisfaction. It emphasizes customer focus, continuous improvement (Kaizen), employee involvement, process-centered thinking and data-driven decision making. Its advantages include higher product quality, greater customer satisfaction, reduced waste and rework, lower costs, improved employee morale and teamwork, and a lasting culture of continuous improvement. In software engineering, TQM means building quality into every phase of the development lifecycle rather than inspecting for defects only at the end.",
          "explanation": "This captures TQM's core principles — organization-wide, continuous, customer-focused quality improvement — and its well-documented business benefits.",
          "oneShotPreview": "Organization-wide continuous quality improvement focused on customer satisfaction."
        },
        {
          "q": "What is the Six Sigma quality initiative?",
          "a": "Six Sigma is a disciplined, data-driven quality improvement methodology whose goal is to reduce defects and process variation to no more than 3.4 defects per million opportunities. It uses the DMAIC cycle — Define, Measure, Analyze, Improve, Control — to improve existing processes, and DMADV for designing new ones. The approach relies on statistical analysis, defined roles such as Green Belts, Black Belts and Master Black Belts, and a strong focus on eliminating the root causes of errors. In software engineering, Six Sigma can be applied to reduce defects in development and maintenance processes.",
          "explanation": "It is correct because Six Sigma's defining features are its stringent defect-reduction target, statistical rigor and the structured DMAIC improvement cycle.",
          "oneShotPreview": "Data-driven quality method targeting 3.4 defects per million using DMAIC."
        },
        {
          "q": "Explain the significance of ISO 9000 standards in Software Engineering.",
          "a": "ISO 9000 is a family of international standards for quality management systems, with ISO 9001 specifying the requirements an organization's quality system must satisfy. Applying ISO 9000 in software engineering means defining, documenting and consistently following processes for development, testing, configuration management and project management, so that quality is planned and repeatable rather than accidental. Its significance lies in providing a globally recognized framework for quality assurance, improving customer confidence, supporting audits and certification, and enforcing disciplined documentation and process control. Software-specific guidance is provided by standards such as ISO/IEC 90003.",
          "explanation": "ISO 9000 matters because it institutionalizes documented, auditable quality processes, giving management and customers confidence in the consistency of the software.",
          "oneShotPreview": "International quality-system standards enforcing documented, repeatable, auditable software processes."
        },
        {
          "q": "Briefly discuss some general issues associated with testing.",
          "a": "A fundamental issue is that exhaustive testing is impossible — the input and path space is so large that every case cannot be executed, so tests must be selected strategically. Testing can reveal the presence of defects but can never prove their absence. Other practical issues include the high cost and time required, difficulty in designing effective test cases and determining expected outputs, balancing testing effort against schedule pressure, testing nonfunctional attributes, and dealing with false results. Tests also become outdated as the software changes, so they require ongoing maintenance, and teams must avoid both insufficient testing and wasteful over-testing.",
          "explanation": "These are the well-known limitations of testing — non-exhaustiveness, inability to prove correctness, cost and test upkeep — that every test effort must manage.",
          "oneShotPreview": "Testing cannot be exhaustive or prove absence of bugs; it is costly, time-bound and needs upkeep."
        }
      ]
    },
    "5": {
      "unitTitle": "CASE, Software Maintenance and Reuse",
      "totalQuestions": 17,
      "questions": [
        {
          "q": "1 a) What is programming environment?",
          "a": "A programming environment is the integrated set of tools, facilities and services that support a programmer in writing, editing, compiling, debugging and managing software. It typically includes an editor, compiler/interpreter, debugger, linker, libraries and a file/system interface, all working within one consistent framework (a modern IDE). By providing these facilities in one place it improves programmer productivity, reduces errors and shortens development time.",
          "explanation": "Defines the environment as the supporting tool set for all programming activities, the standard software-engineering meaning of the term.",
          "oneShotPreview": "Programming environment = integrated tools (editor, compiler, debugger, libraries) that support all software development activities."
        },
        {
          "q": "1 b) Mention any two Benefits of CASE.",
          "a": "Two major benefits of CASE (Computer-Aided Software Engineering) tools are: (1) higher productivity, because routine tasks such as diagram drawing, documentation and code generation are automated, and (2) better software quality and consistency, because the tools enforce standard methods and detect errors and inconsistencies early. Additional benefits include easier maintenance, improved traceability, and reduced development time and cost.",
          "explanation": "Names the two most widely cited CASE advantages - productivity through automation and quality through standards/early error detection.",
          "oneShotPreview": "CASE benefits: higher productivity via automation and better quality/consistency via standards and early error detection."
        },
        {
          "q": "1 c) Define about code generation.",
          "a": "Code generation is the automatic production of source code (or executable code) from a higher-level specification, design model or other abstract representation, using a generator tool. In CASE, a code generator translates design diagrams or specifications into program code in a target language, reducing manual coding effort and coding errors. The generated code is often complete enough to compile, leaving only implementation-specific details to be filled in, which improves consistency between the design and the final code.",
          "explanation": "Defines code generation as automated translation from an abstract design/specification into source code, a core CASE implementation capability.",
          "oneShotPreview": "Code generation = automatically producing source code from a design/specification using a CASE generator tool."
        },
        {
          "q": "1 d) Discuss about test case generator.",
          "a": "A test case generator is a CASE tool that automatically produces test cases - test inputs, expected outputs and test procedures - for a program or specification. It may derive tests from requirements/design specifications (specification-based testing) or from the program's code structure (e.g., path, statement or branch coverage), and can create data for boundary values or particular execution paths. This reduces the manual effort of writing tests and improves test coverage and consistency. The generated cases are then executed by a test harness/runner that compares actual results with expected results to detect defects.",
          "explanation": "Explains the tool's function of auto-creating test inputs and expected outputs from specs or code, boosting coverage while cutting manual effort.",
          "oneShotPreview": "Test case generator = CASE tool that auto-creates test inputs/expected outputs from specs or code to improve coverage."
        },
        {
          "q": "1 e) List out the Types of Software Maintenance.",
          "a": "The four standard types of software maintenance are: (1) Corrective maintenance - fixing defects and bugs discovered after delivery; (2) Adaptive maintenance - modifying the software so it works in a changed environment such as a new operating system, hardware or standard; (3) Perfective maintenance - improving performance, functionality or maintainability in response to user requests; and (4) Preventive maintenance - making changes to prevent future problems, such as refactoring code or updating documentation. Some classifications also treat emergency maintenance as a subtype of corrective maintenance.",
          "explanation": "Lists the four accepted maintenance categories defined in software engineering standards (ISO/IEC 14764).",
          "oneShotPreview": "Maintenance types: corrective (fix bugs), adaptive (new environment), perfective (improve), preventive (avoid future faults)."
        },
        {
          "q": "2 Explain about the characteristics of case tools.",
          "a": "CASE tools are characterized by: (1) integration - tools share a common repository/data dictionary so information flows freely between them; (2) support for all life-cycle phases, from analysis and design through coding, testing and maintenance; (3) automation of routine tasks such as diagram drawing, code and documentation generation; (4) enforcement of standard methods with consistency checks; (5) graphical interfaces and modeling/diagramming facilities such as DFD and UML editors; (6) automatic documentation and report generation; (7) version/configuration management and team coordination; (8) validation facilities that detect errors and inconsistencies early; and (9) code generation and reverse-engineering support. Together these characteristics improve productivity, quality and maintainability of the software being developed.",
          "explanation": "Enumerates the defining features of CASE tools - a shared repository, full life-cycle coverage, automation, consistency enforcement and documentation - as expected for a detailed answer.",
          "oneShotPreview": "CASE tool characteristics: integrated repository, life-cycle-wide support, task automation, consistency checks, diagramming, documentation, version control."
        },
        {
          "q": "3 Describe about software reverse engineering with examples.",
          "a": "Software reverse engineering is the process of analyzing an existing software system to recover its design, architecture, structure and specifications from its source code, documentation or executable form, in order to reconstruct the 'what' and 'how' of the system when original design documents are missing or outdated. It is widely used in legacy-system maintenance, re-engineering and migration. Common techniques include static analysis of code, control-flow and data-flow analysis, and regeneration of design representations such as structure charts, data-flow diagrams or UML diagrams from the code. For example, a legacy COBOL payroll program can be analyzed to extract its module structure and data flow into a design specification that supports understanding or re-engineering; another example is recovering the class model of a Java application from its bytecode.",
          "explanation": "Defines reverse engineering as recovering higher-level design from existing code and gives concrete legacy/migration examples, matching the descriptive question.",
          "oneShotPreview": "Reverse engineering = derive design/specs from existing code (e.g., extract DFD/UML from legacy COBOL or Java code) for maintenance and re-engineering."
        },
        {
          "q": "4 Explain in detail about case support in software life cycle.",
          "a": "CASE tools support every phase of the software life cycle. During requirements analysis they help capture, model and validate requirements using diagrams and a shared repository. During design they support structured and object-oriented design (DFDs, structure charts, UML) with consistency checking. During coding they provide editors, code generators and configuration/version management. During testing they generate test cases, run tests and track defects. During deployment and maintenance they support documentation, change control and reverse engineering of legacy code. Upper CASE tools cover the early phases (analysis and design) while lower CASE tools cover implementation, testing and maintenance. Because all phases share one integrated repository, information produced in one phase is immediately available to all others, improving consistency, traceability and productivity across the entire life cycle.",
          "explanation": "Maps CASE tools to each life-cycle phase and distinguishes upper from lower CASE, showing repository-based integration throughout.",
          "oneShotPreview": "CASE supports all phases: analysis/design (upper CASE: DFD/UML), coding/testing/maintenance (lower CASE), all tied by a shared repository."
        },
        {
          "q": "5 Explain detail second generation case tool.",
          "a": "Second-generation CASE tools are integrated, repository-based environments that overcome the limitations of first-generation tools, which were isolated, single-purpose utilities. Their key characteristics are: a central shared repository/data dictionary that stores all project artifacts and enforces consistency; tight integration so a change in one artifact automatically propagates to related artifacts; support for a broad range of life-cycle activities from analysis through maintenance; graphical front-ends and automatic documentation generation; and often code generation and reverse-engineering capabilities. They typically support structured and object-oriented methods and run on workstations/PCs, often in a client-server architecture. An example is an integrated environment combining a design tool, a code generator and a test tool around one repository. This integration yields better productivity, data consistency and traceability than stand-alone first-generation tools.",
          "explanation": "Describes second-generation CASE as integrated, repository-centred toolsets and contrasts them with isolated first-generation tools.",
          "oneShotPreview": "Second-generation CASE = integrated, repository-based tools spanning all phases, replacing isolated first-generation single-purpose tools."
        },
        {
          "q": "6 Illustrate about software maintenance process models.",
          "a": "Software maintenance process models describe how a change request is handled from identification to release. Common models include: (1) the IEEE 1219 standard maintenance process, with stages of change identification, analysis, design, implementation, testing and release; (2) the spiral maintenance model, which repeats cycles of planning, risk analysis, engineering (change implementation) and evaluation for each change; (3) the iterative or enhancement model, which applies repeated small increments of maintenance; and (4) reuse-oriented or re-engineering models, where changes are made by reusing or restructuring existing components. In general the process begins with a change request, classifies it as corrective, adaptive or perfective, performs impact analysis, designs and implements the change, tests it (including regression testing), updates documentation and deploys the new version. Change/configuration control lies at the core of these models, ensuring maintenance is systematic, traceable and controlled.",
          "explanation": "Presents the standard maintenance process models and the common change-request workflow, fitting an illustration/description question.",
          "oneShotPreview": "Maintenance process models = structured change workflows (identify -> analyze -> design -> implement -> test -> release), e.g., IEEE 1219 and spiral maintenance."
        },
        {
          "q": "7 Discuss about estimation of maintenance cost.",
          "a": "Maintenance cost estimation predicts the effort and resources needed to maintain a system after delivery, and maintenance often accounts for 60-80% of total life-cycle cost. Influencing factors include system size and complexity, programming language, documentation quality, team familiarity, the number and type of change requests, and the maintenance category (corrective, adaptive or perfective). A widely used approach is Boehm's COCOMO maintenance model, which estimates maintenance effort from an annual change traffic (ACT) factor and a maintenance effort adjustment factor, of the form PM = A x (Size)^B x EAF, where the multipliers reflect maintainability factors. Other techniques use the software maturity index, lines of code multiplied by change ratios, or function-point-based estimates, supported by historical data from similar projects. Accurate estimation helps budget staffing and plan future releases.",
          "explanation": "Covers the importance, influencing factors and standard models (COCOMO maintenance, ACT, maturity index), matching a detailed 10-mark discussion.",
          "oneShotPreview": "Maintenance cost estimation = predict post-delivery effort (often 60-80% of lifecycle cost) using COCOMO/ACT, size, complexity and change volume."
        },
        {
          "q": "8 a) Explain about case environment in software engineering in detail.",
          "a": "A CASE environment is the integrated combination of hardware, software tools, a shared repository and methods/standards that supports the entire software engineering process. It brings together upper CASE tools (analysis and design) and lower CASE tools (coding, testing, maintenance) around a common data dictionary, so all artifacts are stored centrally and remain consistent. The environment typically provides a graphical user interface, a repository manager, diagramming and modeling tools, code generators, test tools, documentation generators, and configuration/version management, along with integration mechanisms that let tools interoperate and propagate changes. By standardizing methods and automating tasks, a CASE environment improves productivity, software quality, traceability and communication among team members.",
          "explanation": "Describes a CASE environment as an integrated tool/repository framework spanning all phases, with its components and benefits.",
          "oneShotPreview": "CASE environment = integrated tools + shared repository + standards covering analysis-to-maintenance, improving productivity, quality and traceability."
        },
        {
          "q": "8 b) Describe about Evolution of a reuse domain.",
          "a": "A reuse domain evolves as an organization repeatedly builds similar systems and comes to recognize common, reusable artifacts. It progresses from ad hoc reuse of code fragments, to identifying common components and patterns, to establishing a systematic reuse program with a repository of certified reusable assets such as components, designs, specifications and test cases. Over time the domain matures: domain analysis identifies commonalities and variabilities, domain modeling produces a reference architecture, and the reusable asset base grows and is refined using feedback from new projects. Standards, a reuse library and a supporting organization sustain this growth, eventually leading to product-line engineering where new systems are assembled largely from existing assets. Thus reuse evolves from isolated, opportunistic reuse into a managed, domain-wide discipline.",
          "explanation": "Traces reuse-domain maturity from ad hoc reuse to systematic, repository-based product-line reuse, matching the 'evolution' framing.",
          "oneShotPreview": "Reuse domain evolves: ad hoc code reuse -> common components/patterns -> managed repository and reference architecture -> product-line engineering."
        },
        {
          "q": "9 Describe about architecture of a case environment with neat sketch.",
          "a": "The architecture of a CASE environment is commonly described as layers built around a central repository. At the core is the repository/data dictionary, which stores all artifacts (requirements, designs, code, tests, documents) and enforces consistency. Around it sit the integrated tools: upper CASE tools (requirements analyzers and design/modeling tools such as DFD/UML editors), lower CASE tools (code generators, compilers, debuggers, test generators) and management tools (configuration/version control, project management, documentation generation). These tools communicate through a message/integration service and present a common graphical user interface to users. A typical sketch shows a user-interface layer on top, a tool layer in the middle and the shared repository at the centre, with arrows for data exchange between tools and the repository and a message server enabling tool-to-tool communication; some architectures are drawn as client-server, with tools as clients and the repository as the server. This integrated architecture ensures information produced in one phase is immediately available to all tools, maintaining consistency and traceability.",
          "explanation": "Describes the layered, repository-centred architecture and the elements of the requested sketch - the core of a 10-mark architecture question.",
          "oneShotPreview": "CASE architecture = central repository + integrated upper/lower tools + GUI + message/integration layer (client-server), drawn as a layered sketch."
        },
        {
          "q": "10 Evaluate in detail about basic issues in any reuse program.",
          "a": "Basic issues in a software reuse program include: (1) identifying and classifying reusable assets - deciding what to reuse and how to catalogue it, e.g., Prieto-Diaz's faceted classification; (2) creating and maintaining a repository/library of certified components; (3) quality and reliability of reused components, since a defective component can spread errors widely; (4) adaptation, because components often need modification to fit a new context, which can erode the benefits of reuse; (5) understanding and trust, since developers must understand a component's behaviour and interfaces before reusing it; (6) organizational and cultural resistance, such as the 'not invented here' syndrome and lack of incentives; (7) legal, licensing and intellectual-property concerns; (8) the cost of establishing and running the reuse program, including tooling, training and upkeep of assets; and (9) measuring reuse and its benefits. Addressing these issues through standards, a searchable repository, certification and management support is essential for a successful reuse program.",
          "explanation": "Enumerates the technical, organizational and economic issues any reuse program must handle, fitting an 'evaluate in detail' question.",
          "oneShotPreview": "Reuse program issues: asset identification/classification, repository, component quality/trust, adaptation cost, 'not invented here' resistance, licensing, program cost."
        },
        {
          "q": "11 a) Discuss about Characteristics of Software Evolution.",
          "a": "Software evolution - the continuing change of software after it is deployed - is characterized by Lehman's laws: continuing change (a system must continually adapt to its changing environment), increasing complexity (structure degrades as changes accumulate unless work is done to reduce it), self-regulation (evolution is feedback-driven and statistically regular), conservation of organizational stability (work content and output rate stay roughly invariant), and conservation of familiarity (change is limited by developers' understanding). Other characteristics include continuing growth in functionality, declining quality unless actively maintained, and the need for regular maintenance and re-engineering. These traits imply that evolution is inevitable and must be managed through disciplined maintenance, refactoring and version control.",
          "explanation": "Presents Lehman's laws and inherent traits (continual change, growing complexity, declining quality) that define software evolution.",
          "oneShotPreview": "Software evolution traits (Lehman's laws): continual change, increasing complexity, self-regulation, stable organizational rate/familiarity, growing functionality."
        },
        {
          "q": "11 b) Define Prieto-Diaz’s classification scheme.",
          "a": "Prieto-Diaz's classification scheme is a faceted classification method for organizing reusable software components in a reuse library. Rather than a rigid hierarchical taxonomy, it describes each component with a set of independent facets (attributes or dimensions) such as function/purpose, the object or entity the component operates on, implementation language, environment/platform and domain, each with a controlled vocabulary of terms. A component is indexed by a combination of values across these facets, allowing users to retrieve it by multiple search criteria. A thesaurus handles synonyms and term relationships to improve retrieval precision. Its main advantage is flexibility - facets can be combined freely and extended as the collection grows - making it well suited to classifying reusable components in a software reuse program.",
          "explanation": "Defines the faceted classification approach with its facets, controlled vocabulary/thesaurus and the benefit of flexible multi-dimensional retrieval.",
          "oneShotPreview": "Prieto-Diaz scheme = faceted classification of reusable components by independent attributes (function, object, language, domain) with a thesaurus for flexible retrieval."
        }
      ]
    }
  }
};

export default QB_QUESTIONS;
