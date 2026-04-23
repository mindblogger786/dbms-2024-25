export interface Question {
  id: string;
  questionNumber: string;
  part: string;
  title: string;
  marks: number;
  tags: string[];
  content: QuestionContent;
}

export interface QuestionContent {
  fullQuestion: string;
  definition: string;
  coreConcepts: CoreConcept[];
  visual?: Visual;
  technicalImpl?: TechnicalImpl[];
  keyPoints: string[];
}

export interface CoreConcept {
  heading: string;
  body: string;
}

export interface Visual {
  type: "table" | "diagram" | "flowchart" | "code-diagram";
  title: string;
  description?: string;
  tableData?: TableData;
  diagramLines?: string[];
  flowchartSteps?: FlowchartStep[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface FlowchartStep {
  shape: "oval" | "rect" | "diamond" | "parallelogram";
  label: string;
  sublabel?: string;
}

export interface TechnicalImpl {
  heading: string;
  type: "algorithm" | "code" | "example" | "sql";
  language?: string;
  content: string;
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // QUESTION 1a
  // ─────────────────────────────────────────────
  {
    id: "1a",
    questionNumber: "1",
    part: "a",
    title: "Data Independence",
    marks: 5,
    tags: ["Schema", "Architecture", "Core"],
    content: {
      fullQuestion: "Discuss the term Data Independence.",
      definition:
        "**Data Independence** is the ability to modify the schema at one level of the database system without affecting the schema at the next higher level. It is one of the most important advantages of using a DBMS over traditional file systems. Data independence ensures that changes in the physical storage or logical organization of data do not require changes to the application programs that use the data. It decouples the data from the applications, providing flexibility, ease of maintenance, and long-term scalability of database systems.",
      coreConcepts: [
        {
          heading: "Why Data Independence?",
          body: "In traditional file systems, data and programs are tightly coupled. Any change in the file structure forces programmers to rewrite all affected programs. DBMS solves this by introducing abstraction layers (schemas), separating the physical storage from the logical view and the user's external view.",
        },
        {
          heading: "Types of Data Independence",
          body: "There are two types: **Physical Data Independence** — the ability to change the internal (physical) schema without changing the conceptual schema. For example, switching from sequential files to B-tree indexes does not affect the logical schema. **Logical Data Independence** — the ability to change the conceptual schema without changing the external schema or application programs. For example, adding a new attribute to a table should not break existing queries. Logical data independence is harder to achieve than physical data independence.",
        },
        {
          heading: "How it Works (Three-Schema Architecture)",
          body: "The ANSI/SPARC three-schema architecture defines: External Schema (user views), Conceptual Schema (logical structure), and Internal Schema (physical storage). Mappings between these layers — External/Conceptual mapping and Conceptual/Internal mapping — enable data independence.",
        },
      ],
      visual: {
        type: "diagram",
        title: "Data Independence via Three-Schema Architecture",
        diagramLines: [
          "┌─────────────────────────────────────────────┐",
          "│         EXTERNAL LEVEL (User Views)         │",
          "│   View A  │   View B  │   View C            │",
          "└─────────────────┬───────────────────────────┘",
          "                  │  External/Conceptual Mapping",
          "                  │  ← LOGICAL DATA INDEPENDENCE →",
          "┌─────────────────▼───────────────────────────┐",
          "│        CONCEPTUAL LEVEL (Logical Schema)     │",
          "│    Tables, Attributes, Relationships         │",
          "└─────────────────┬───────────────────────────┘",
          "                  │  Conceptual/Internal Mapping",
          "                  │  ← PHYSICAL DATA INDEPENDENCE →",
          "┌─────────────────▼───────────────────────────┐",
          "│         INTERNAL LEVEL (Physical Storage)    │",
          "│    B-Trees, Hash Files, Sequential Files     │",
          "└─────────────────────────────────────────────┘",
        ],
      },
      keyPoints: [
        "Data independence separates application programs from data storage details.",
        "**Physical Data Independence**: Change storage structures without affecting conceptual schema.",
        "**Logical Data Independence**: Change conceptual schema without affecting external views.",
        "Logical data independence is harder to achieve than physical.",
        "Achieved through the ANSI/SPARC three-schema architecture.",
        "Reduces maintenance cost and increases system flexibility.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1b
  // ─────────────────────────────────────────────
  {
    id: "1b",
    questionNumber: "1",
    part: "b",
    title: "Composite Attributes",
    marks: 5,
    tags: ["ER Model", "Attributes", "Core"],
    content: {
      fullQuestion: "What do you mean by composite attributes?",
      definition:
        "**Composite Attributes** are attributes that can be divided into smaller sub-parts, each representing a more basic attribute with its own independent meaning. Unlike simple (atomic) attributes which cannot be further subdivided, composite attributes are composed of multiple components. For example, the attribute 'Name' of a person can be divided into 'First Name', 'Middle Name', and 'Last Name'. Composite attributes are used in ER (Entity-Relationship) diagrams to model complex, multi-part data fields in a structured and meaningful way.",
      coreConcepts: [
        {
          heading: "Simple vs Composite Attributes",
          body: "A **Simple Attribute** is atomic and cannot be broken down further (e.g., Age, Employee_ID). A **Composite Attribute** can be split into multiple meaningful parts (e.g., Address → Street, City, State, ZIP). The decision to model an attribute as composite depends on whether the sub-parts are individually useful.",
        },
        {
          heading: "Why Use Composite Attributes?",
          body: "Composite attributes allow queries on individual components (e.g., search by City only). They provide better data organization and normalization. They avoid redundancy and allow flexible querying of partial data.",
        },
        {
          heading: "Representation in ER Diagram",
          body: "In an ER diagram, composite attributes are shown as an ellipse connected to sub-ellipses. Each sub-ellipse represents a component of the composite attribute. The composite attribute itself is connected to the entity rectangle.",
        },
      ],
      visual: {
        type: "diagram",
        title: "Composite Attribute — ER Diagram Representation",
        diagramLines: [
          "                ┌──────────────┐",
          "                │   EMPLOYEE   │  (Entity)",
          "                └──────┬───────┘",
          "                       │",
          "          ┌────────────┼────────────┐",
          "          │            │            │",
          "      (Emp_ID)      ( Name )    ( Address )   ← Composite",
          "                   /   |   \\      /    |   \\",
          "              (First)(Mid)(Last) (Street)(City)(ZIP)",
          "                                              ↑",
          "                               Sub-attributes (simple)",
        ],
      },
      keyPoints: [
        "Composite attributes can be divided into smaller, meaningful sub-parts.",
        "Example: **Name** → First Name, Middle Name, Last Name.",
        "Example: **Address** → Street, City, State, Pincode.",
        "Represented in ER diagrams as an ellipse with child ellipses.",
        "Opposite of simple (atomic) attributes which cannot be subdivided.",
        "Allow queries on individual components for greater flexibility.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1c
  // ─────────────────────────────────────────────
  {
    id: "1c",
    questionNumber: "1",
    part: "c",
    title: "Primary Key",
    marks: 5,
    tags: ["Keys", "SQL", "Core"],
    content: {
      fullQuestion: "Define Primary Key with example.",
      definition:
        "A **Primary Key** is a column (or a set of columns) in a relational database table that uniquely identifies each row (tuple) in that table. No two rows can have the same primary key value, and the primary key column(s) cannot contain NULL values. Every table should have exactly one primary key, chosen from the candidate keys available. The primary key enforces entity integrity, which is a fundamental constraint in the relational model, ensuring that each record can be uniquely identified and referenced.",
      coreConcepts: [
        {
          heading: "Properties of Primary Key",
          body: "**Uniqueness**: No two tuples can have the same primary key value. **Not Null**: Primary key columns must always have a value. **Minimal**: In a composite primary key, all attributes must be necessary — no subset should be sufficient to uniquely identify a row. **Stable**: Primary key values should not change frequently.",
        },
        {
          heading: "Types of Keys Related to Primary Key",
          body: "**Super Key**: Any set of attributes that can uniquely identify a tuple. **Candidate Key**: A minimal super key (no redundant attributes). **Primary Key**: The candidate key chosen by the database designer. **Foreign Key**: A primary key of one table referenced in another table.",
        },
        {
          heading: "Example",
          body: "In a Student table, Roll_No uniquely identifies each student. It cannot be NULL and no two students share the same Roll_No. Hence, Roll_No is chosen as the Primary Key.",
        },
      ],
      visual: {
        type: "table",
        title: "Student Table — Primary Key Example",
        tableData: {
          headers: ["Roll_No (PK)", "Student_Name", "Department", "Semester"],
          rows: [
            ["101", "Aarav Sharma", "CSE", "4th"],
            ["102", "Priya Patel", "ECE", "4th"],
            ["103", "Rohan Gupta", "IT", "6th"],
            ["104", "Sneha Joshi", "CSE", "2nd"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "SQL Syntax for Primary Key",
          type: "sql",
          language: "sql",
          content: `-- Method 1: Inline definition
CREATE TABLE Student (
    Roll_No    INT         PRIMARY KEY,
    Name       VARCHAR(50) NOT NULL,
    Department VARCHAR(30),
    Semester   INT
);

-- Method 2: Composite Primary Key (at table level)
CREATE TABLE Enrollment (
    Student_ID  INT,
    Course_ID   INT,
    Enroll_Date DATE,
    PRIMARY KEY (Student_ID, Course_ID)  -- Composite PK
);`,
        },
      ],
      keyPoints: [
        "Primary key **uniquely identifies** each row in a table.",
        "Cannot contain **NULL** values.",
        "A table can have only **one** primary key.",
        "Chosen from available **candidate keys**.",
        "Enforces **Entity Integrity** constraint.",
        "Can be **simple** (single column) or **composite** (multiple columns).",
        "Example: Roll_No in Student table, Employee_ID in Employee table.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1d
  // ─────────────────────────────────────────────
  {
    id: "1d",
    questionNumber: "1",
    part: "d",
    title: "INSERT Clause in SQL",
    marks: 5,
    tags: ["SQL", "DML", "Core"],
    content: {
      fullQuestion: "What is the syntax of Insert clause used in SQL?",
      definition:
        "The **INSERT** statement in SQL is a Data Manipulation Language (DML) command used to add new rows (records/tuples) into a database table. It allows inserting a single row at a time or multiple rows together. Values can be inserted for all columns or selectively for specific columns. The INSERT statement is one of the four fundamental DML operations in SQL — along with SELECT, UPDATE, and DELETE — and is essential for populating database tables with data.",
      coreConcepts: [
        {
          heading: "Forms of INSERT Statement",
          body: "**Form 1 — Insert with all columns**: Values are provided for every column in the table in the order they were defined. **Form 2 — Insert with selected columns**: Column names are explicitly listed, and only those columns receive values; others get their default/NULL values. **Form 3 — Insert from another table**: Uses a SELECT query to copy rows from one table into another.",
        },
        {
          heading: "Rules and Constraints",
          body: "Values must match the data type of each column. NOT NULL columns must receive a value. PRIMARY KEY columns must receive a unique value. FOREIGN KEY values must exist in the referenced table. String values must be enclosed in single quotes (' ').",
        },
      ],
      visual: {
        type: "diagram",
        title: "INSERT Statement — Syntax Forms",
        diagramLines: [
          "┌──────────────────────────────────────────────────────────────┐",
          "│                    SQL INSERT SYNTAX                         │",
          "├──────────────────────────────────────────────────────────────┤",
          "│ FORM 1 (All Columns):                                        │",
          "│   INSERT INTO table_name                                     │",
          "│   VALUES (val1, val2, val3, ...);                            │",
          "├──────────────────────────────────────────────────────────────┤",
          "│ FORM 2 (Selective Columns):                                  │",
          "│   INSERT INTO table_name (col1, col2, col3)                  │",
          "│   VALUES (val1, val2, val3);                                 │",
          "├──────────────────────────────────────────────────────────────┤",
          "│ FORM 3 (Insert from SELECT):                                 │",
          "│   INSERT INTO table_name (col1, col2)                        │",
          "│   SELECT colA, colB FROM another_table                       │",
          "│   WHERE condition;                                           │",
          "└──────────────────────────────────────────────────────────────┘",
        ],
      },
      technicalImpl: [
        {
          heading: "SQL Examples",
          type: "sql",
          language: "sql",
          content: `-- FORM 1: Insert all column values
INSERT INTO Student
VALUES (101, 'Aarav Sharma', 'CSE', 4);

-- FORM 2: Insert selected columns only
INSERT INTO Student (Roll_No, Name, Department)
VALUES (102, 'Priya Patel', 'ECE');
-- Note: Semester gets NULL by default

-- FORM 3: Multiple rows insert (SQL Server / MySQL)
INSERT INTO Student (Roll_No, Name, Department, Semester)
VALUES 
  (103, 'Rohan Gupta', 'IT', 6),
  (104, 'Sneha Joshi', 'CSE', 2);

-- FORM 4: Insert from another table
INSERT INTO CSE_Students (Roll_No, Name)
SELECT Roll_No, Name
FROM Student
WHERE Department = 'CSE';`,
        },
      ],
      keyPoints: [
        "INSERT is a **DML (Data Manipulation Language)** command.",
        "Syntax: `INSERT INTO table_name VALUES (val1, val2, ...);`",
        "Can insert **selective columns** by specifying column names explicitly.",
        "Omitted columns get **NULL** or their **DEFAULT** value.",
        "Can insert from another table using **INSERT INTO ... SELECT**.",
        "String values must be in **single quotes** ('value').",
        "Must satisfy all **constraints** (PK, FK, NOT NULL, CHECK).",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1e
  // ─────────────────────────────────────────────
  {
    id: "1e",
    questionNumber: "1",
    part: "e",
    title: "Functional Dependency",
    marks: 5,
    tags: ["Normalization", "FD", "Core"],
    content: {
      fullQuestion: "Define the term Functional Dependency.",
      definition:
        "A **Functional Dependency (FD)** is a constraint between two sets of attributes in a relation. Given a relation R, a set of attributes X is said to functionally determine another set of attributes Y (written as X → Y) if, for any two tuples t1 and t2 in R, whenever t1[X] = t2[X], it must be that t1[Y] = t2[Y]. In simpler terms, if we know the value of X, we can uniquely determine the value of Y. Functional dependencies are the foundation of normalization theory and are used to design well-structured, redundancy-free relational database schemas.",
      coreConcepts: [
        {
          heading: "Notation and Meaning",
          body: "X → Y is read as 'X functionally determines Y' or 'Y is functionally dependent on X'. X is called the **determinant** and Y is called the **dependent**. Example: Roll_No → Name means knowing a Roll_No uniquely gives us the student's Name.",
        },
        {
          heading: "Types of Functional Dependencies",
          body: "**Full FD**: Y is fully dependent on X (no proper subset of X can determine Y). **Partial FD**: Y depends on only part of X (relevant in composite keys). **Transitive FD**: X → Y and Y → Z implies X → Z (transitively). **Trivial FD**: X → Y where Y ⊆ X (e.g., {A,B} → A). **Non-Trivial FD**: X → Y where Y ⊄ X.",
        },
        {
          heading: "Armstrong's Axioms (Inference Rules)",
          body: "**Reflexivity**: If Y ⊆ X, then X → Y. **Augmentation**: If X → Y, then XZ → YZ. **Transitivity**: If X → Y and Y → Z, then X → Z. These three are sound and complete — all other FD rules (union, decomposition, pseudotransitivity) can be derived from them.",
        },
      ],
      visual: {
        type: "table",
        title: "Types of Functional Dependencies — Comparison",
        tableData: {
          headers: ["Type", "Definition", "Example"],
          rows: [
            ["Full FD", "Y depends on whole X, not any subset", "Roll_No → Name"],
            ["Partial FD", "Y depends on a proper subset of X", "{Roll_No, Course} → Name (partial on Roll_No)"],
            ["Transitive FD", "X→Y, Y→Z implies X→Z", "Roll_No→Dept, Dept→HOD implies Roll_No→HOD"],
            ["Trivial FD", "Y is a subset of X", "{A, B} → A"],
            ["Non-Trivial FD", "Y is not a subset of X", "Roll_No → Name"],
          ],
        },
      },
      keyPoints: [
        "**X → Y**: X functionally determines Y.",
        "If two tuples agree on X, they must agree on Y.",
        "X is the **determinant**; Y is the **dependent**.",
        "**Full FD**: Y depends on the entire key, not part of it.",
        "**Partial FD**: Y depends on part of a composite key — violates 2NF.",
        "**Transitive FD**: Indirect dependency — violates 3NF.",
        "Armstrong's Axioms: Reflexivity, Augmentation, Transitivity.",
        "FDs are the basis of all normalization (1NF → BCNF).",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1f
  // ─────────────────────────────────────────────
  {
    id: "1f",
    questionNumber: "1",
    part: "f",
    title: "Transaction in Databases",
    marks: 5,
    tags: ["Transaction", "ACID", "Core"],
    content: {
      fullQuestion: "What do you mean by Transaction in databases?",
      definition:
        "A **Transaction** in a database is a logical unit of work that consists of one or more database operations (read, write, update, delete) that must be executed atomically — either all operations succeed and are committed, or all fail and are rolled back. Transactions ensure data consistency and integrity, especially in multi-user and concurrent database environments. The concept of transactions is governed by the ACID properties: Atomicity, Consistency, Isolation, and Durability. Transactions provide a reliable mechanism for error recovery and concurrent access control.",
      coreConcepts: [
        {
          heading: "Why Transactions?",
          body: "Consider a bank transfer: debit from Account A and credit to Account B. If the system crashes after debit but before credit, the database becomes inconsistent. Transactions ensure both operations complete together or neither does — maintaining data integrity.",
        },
        {
          heading: "ACID Properties",
          body: "**Atomicity**: All-or-nothing execution. **Consistency**: Database moves from one valid state to another. **Isolation**: Concurrent transactions don't interfere. **Durability**: Once committed, changes persist even after a crash.",
        },
        {
          heading: "Transaction Operations",
          body: "**READ(X)**: Read value of X from database into a variable. **WRITE(X)**: Write the value of variable X to the database. **COMMIT**: Save all changes permanently. **ROLLBACK (ABORT)**: Undo all changes made during the transaction.",
        },
      ],
      visual: {
        type: "flowchart",
        title: "Transaction Life Cycle",
        flowchartSteps: [
          { shape: "oval", label: "BEGIN TRANSACTION" },
          { shape: "rect", label: "Execute Operations", sublabel: "READ / WRITE / UPDATE" },
          { shape: "diamond", label: "All Operations Successful?" },
          { shape: "rect", label: "COMMIT", sublabel: "Changes saved permanently" },
          { shape: "rect", label: "ROLLBACK", sublabel: "All changes undone" },
          { shape: "oval", label: "END TRANSACTION" },
        ],
      },
      technicalImpl: [
        {
          heading: "Bank Transfer Transaction Example",
          type: "sql",
          language: "sql",
          content: `-- Bank Transfer: Transfer ₹500 from Account A to Account B
BEGIN TRANSACTION;

    -- Step 1: Read Account A balance
    READ(A);         -- A = 1000

    -- Step 2: Debit from A
    A := A - 500;
    WRITE(A);        -- A = 500

    -- Step 3: Read Account B balance
    READ(B);         -- B = 2000

    -- Step 4: Credit to B
    B := B + 500;
    WRITE(B);        -- B = 2500

    -- If all steps succeed:
COMMIT;

    -- If any step fails:
-- ROLLBACK;  -- Undo all changes, A and B restored`,
        },
      ],
      keyPoints: [
        "A transaction is a **logical unit of work** — all-or-nothing.",
        "Governed by **ACID** properties: Atomicity, Consistency, Isolation, Durability.",
        "Operations: **READ**, **WRITE**, **COMMIT**, **ROLLBACK**.",
        "**COMMIT** makes changes permanent; **ROLLBACK** undoes them.",
        "Transactions maintain **data integrity** in concurrent environments.",
        "Classic example: Bank fund transfer between two accounts.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 1g
  // ─────────────────────────────────────────────
  {
    id: "1g",
    questionNumber: "1",
    part: "g",
    title: "Timestamping in Concurrency Control",
    marks: 5,
    tags: ["Concurrency", "Timestamp", "Core"],
    content: {
      fullQuestion: "Define Time Stamping in terms of concurrency control.",
      definition:
        "**Timestamping** is a concurrency control technique in which each transaction is assigned a unique timestamp when it enters the system. The timestamp is typically based on the system clock or a logical counter. The DBMS uses these timestamps to order transactions and detect conflicts. Unlike locking-based methods, timestamping is a **non-locking, optimistic** approach — it does not use locks but instead aborts and restarts transactions that violate the timestamp ordering. It ensures serializable execution by enforcing a time-based ordering among conflicting transactions.",
      coreConcepts: [
        {
          heading: "How Timestamping Works",
          body: "Each data item X maintains two timestamps: **Read Timestamp (RTS(X))** — the largest timestamp of any transaction that has successfully read X. **Write Timestamp (WTS(X))** — the largest timestamp of any transaction that has successfully written X. When transaction Ti tries to read or write X, the DBMS checks these timestamps to decide whether to allow or abort the operation.",
        },
        {
          heading: "Timestamp Ordering Protocol Rules",
          body: "**Read(X) by Ti**: If TS(Ti) < WTS(X) — Ti is too old, it must read a value already overwritten → ABORT Ti. Otherwise, allow read and update RTS(X) = max(RTS(X), TS(Ti)). **Write(X) by Ti**: If TS(Ti) < RTS(X) — a newer transaction has already read X → ABORT Ti. If TS(Ti) < WTS(X) — a newer transaction has already written X → ABORT Ti (Thomas Write Rule can skip this). Otherwise, allow write and update WTS(X) = TS(Ti).",
        },
        {
          heading: "Advantages & Disadvantages",
          body: "**Advantages**: No deadlocks (no locks used), ensures serializability based on timestamp order. **Disadvantages**: Cascading rollbacks possible, starvation can occur if a transaction is repeatedly aborted and restarted.",
        },
      ],
      visual: {
        type: "table",
        title: "Timestamp Ordering Protocol — Rules Summary",
        tableData: {
          headers: ["Operation", "Condition", "Action"],
          rows: [
            ["Read(X) by Ti", "TS(Ti) < WTS(X)", "ABORT & Restart Ti (reads outdated value)"],
            ["Read(X) by Ti", "TS(Ti) ≥ WTS(X)", "Allow Read; RTS(X) = max(RTS(X), TS(Ti))"],
            ["Write(X) by Ti", "TS(Ti) < RTS(X)", "ABORT & Restart Ti (value already read by newer T)"],
            ["Write(X) by Ti", "TS(Ti) < WTS(X)", "ABORT & Restart Ti (value already overwritten)"],
            ["Write(X) by Ti", "TS(Ti) ≥ both", "Allow Write; WTS(X) = TS(Ti)"],
          ],
        },
      },
      keyPoints: [
        "Each transaction gets a **unique timestamp** at the start.",
        "Each data item maintains **RTS** (Read Timestamp) and **WTS** (Write Timestamp).",
        "Conflicts are resolved by **aborting** the older (conflicting) transaction.",
        "**No locks** used → No deadlocks possible.",
        "Older transactions trying to read/write already-updated data are **aborted**.",
        "**Thomas Write Rule**: Allows safe ignoring of obsolete writes.",
        "Disadvantage: Possible **cascading rollbacks** and **starvation**.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 2a
  // ─────────────────────────────────────────────
  {
    id: "2a",
    questionNumber: "2",
    part: "a",
    title: "Three Schema Architecture",
    marks: 15,
    tags: ["Architecture", "Schema", "Core"],
    content: {
      fullQuestion: "What is three schema architecture? Discuss in detail.",
      definition:
        "The **Three-Schema Architecture** (also called the ANSI/SPARC Architecture) is a framework proposed by the American National Standards Institute (ANSI) to achieve data independence and separate user applications from the physical database. It divides the database system into three distinct levels of abstraction: the **External Level** (user view), the **Conceptual Level** (logical structure), and the **Internal Level** (physical storage). Each level has its own schema — a description of the data at that level. Mappings between adjacent levels transform requests and results, enabling changes at one level without impacting others.",
      coreConcepts: [
        {
          heading: "1. External Level (View Level)",
          body: "The highest level of abstraction. It represents the individual user's view of the database. Different users may see different views of the same database — a student sees their own records, an administrator sees all records. Each view is defined by an **external schema** (or subschema). This level hides unnecessary details from end users and provides **data security** by restricting access to only relevant data.",
        },
        {
          heading: "2. Conceptual Level (Logical Level)",
          body: "The middle level — the community view of the entire database. It describes **what** data is stored and the **relationships** among them, without concern for physical storage details. It includes all entities, attributes, relationships, integrity constraints, and access rights. Defined by the **conceptual schema**, this level is maintained by the **Database Administrator (DBA)**. This is the most important level for database designers.",
        },
        {
          heading: "3. Internal Level (Physical Level)",
          body: "The lowest level of abstraction — describes **how** data is physically stored. It includes storage structures (B-trees, hash tables, sequential files), record formats, access paths, and indexing. Defined by the **internal schema**. This level is concerned with efficiency, storage optimization, and performance.",
        },
        {
          heading: "Mappings Between Levels",
          body: "**External/Conceptual Mapping**: Transforms requests between external and conceptual schemas. Supports **Logical Data Independence**. **Conceptual/Internal Mapping**: Transforms requests between conceptual and internal schemas. Supports **Physical Data Independence**. The DBMS engine handles these transformations automatically.",
        },
      ],
      visual: {
        type: "diagram",
        title: "Three-Schema Architecture — Detailed Diagram",
        diagramLines: [
          "  USER 1       USER 2       USER 3       USER 4",
          "    │            │            │            │",
          "    ▼            ▼            ▼            ▼",
          "┌────────────────────────────────────────────────┐",
          "│              EXTERNAL LEVEL                    │",
          "│  ┌──────────┐ ┌──────────┐ ┌──────────────┐   │",
          "│  │ View 1   │ │ View 2   │ │   View 3     │   │",
          "│  │(Students)│ │(Faculty) │ │(Admin Panel) │   │",
          "│  └──────────┘ └──────────┘ └──────────────┘   │",
          "└───────────────────┬────────────────────────────┘",
          "                    │  External / Conceptual Mapping",
          "                    │  [LOGICAL DATA INDEPENDENCE]",
          "┌───────────────────▼────────────────────────────┐",
          "│             CONCEPTUAL LEVEL                   │",
          "│   Entities: Student, Faculty, Course           │",
          "│   Relationships: Enrolls, Teaches              │",
          "│   Constraints: PK, FK, NOT NULL                │",
          "│   Maintained by: DBA                          │",
          "└───────────────────┬────────────────────────────┘",
          "                    │  Conceptual / Internal Mapping",
          "                    │  [PHYSICAL DATA INDEPENDENCE]",
          "┌───────────────────▼────────────────────────────┐",
          "│              INTERNAL LEVEL                    │",
          "│   Storage: B+ Tree Indexes, Hash Tables        │",
          "│   File Organization: Sequential / Clustered    │",
          "│   Record Formats, Buffer Management            │",
          "│   Physical Database on Disk                   │",
          "└────────────────────────────────────────────────┘",
        ],
      },
      keyPoints: [
        "Proposed by **ANSI/SPARC** to achieve data independence.",
        "**External Level**: Individual user views — hides complexity.",
        "**Conceptual Level**: Logical structure — entities, relationships, constraints.",
        "**Internal Level**: Physical storage — files, indexes, access paths.",
        "**External/Conceptual Mapping** → Logical Data Independence.",
        "**Conceptual/Internal Mapping** → Physical Data Independence.",
        "DBA manages the **conceptual schema**; users interact with **external schemas**.",
        "Each level has its own **schema** (description of data at that level).",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 2b
  // ─────────────────────────────────────────────
  {
    id: "2b",
    questionNumber: "2",
    part: "b",
    title: "Relational Algebra Operations",
    marks: 15,
    tags: ["Relational Algebra", "SQL", "Core"],
    content: {
      fullQuestion: "Discuss basic operations of Relational Algebra with examples.",
      definition:
        "**Relational Algebra** is a formal query language for the relational model, consisting of a set of operations that take one or two relations as input and produce a new relation as output. It was developed by E.F. Codd and forms the theoretical foundation for SQL. Relational algebra operations are divided into **fundamental (basic)** operations and **additional (derived)** operations. The six basic operations are: Selection (σ), Projection (π), Union (∪), Set Difference (−), Cartesian Product (×), and Rename (ρ). Derived operations like Join, Intersection, and Division are built from these fundamentals.",
      coreConcepts: [
        {
          heading: "1. Selection (σ) — Unary Operation",
          body: "Selects rows (tuples) from a relation that satisfy a given predicate/condition. Syntax: **σ_condition(R)**. Operates on rows — analogous to the WHERE clause in SQL. Example: σ_Dept='CSE'(Student) — selects all students from CSE department.",
        },
        {
          heading: "2. Projection (π) — Unary Operation",
          body: "Selects specific columns (attributes) from a relation and eliminates duplicates. Syntax: **π_attr1,attr2(R)**. Operates on columns — analogous to SELECT column_list in SQL. Example: π_Name,Dept(Student) — returns only Name and Department columns.",
        },
        {
          heading: "3. Union (∪) — Binary Operation",
          body: "Combines tuples from two union-compatible relations and removes duplicates. Syntax: **R ∪ S**. Both relations must have the same number of attributes with compatible domains. Example: UG_Students ∪ PG_Students — returns all students.",
        },
        {
          heading: "4. Set Difference (−) — Binary Operation",
          body: "Returns tuples in relation R that are NOT in relation S. Syntax: **R − S**. Relations must be union-compatible. Example: All_Students − Passed_Students — gives failed students.",
        },
        {
          heading: "5. Cartesian Product (×) — Binary Operation",
          body: "Combines every tuple of R with every tuple of S. Syntax: **R × S**. If R has m tuples and n attributes, and S has p tuples and q attributes, then R×S has m×p tuples and n+q attributes. The basis for JOIN operations.",
        },
        {
          heading: "6. Rename (ρ) — Unary Operation",
          body: "Renames a relation or its attributes. Syntax: **ρ_new_name(R)** or **ρ_new_name(A1,A2,...)(R)**. Useful for self-joins and avoiding naming conflicts.",
        },
      ],
      visual: {
        type: "table",
        title: "Relational Algebra Operations — Summary Table",
        tableData: {
          headers: ["Operation", "Symbol", "Type", "SQL Equivalent", "Example"],
          rows: [
            ["Selection", "σ", "Unary", "WHERE clause", "σ_age>20(Student)"],
            ["Projection", "π", "Unary", "SELECT columns", "π_Name,Dept(Student)"],
            ["Union", "∪", "Binary", "UNION", "R ∪ S"],
            ["Set Difference", "−", "Binary", "EXCEPT / MINUS", "R − S"],
            ["Cartesian Product", "×", "Binary", "CROSS JOIN", "Student × Course"],
            ["Rename", "ρ", "Unary", "AS (alias)", "ρ_S(Student)"],
            ["Natural Join", "⋈", "Derived", "JOIN ON", "Student ⋈ Enroll"],
            ["Intersection", "∩", "Derived", "INTERSECT", "R ∩ S"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "Worked Examples with Sample Data",
          type: "example",
          content: `STUDENT Table:
┌─────────┬──────────┬──────┬──────┐
│ Roll_No │ Name     │ Dept │ CGPA │
├─────────┼──────────┼──────┼──────┤
│   101   │ Aarav    │ CSE  │ 8.5  │
│   102   │ Priya    │ ECE  │ 7.2  │
│   103   │ Rohan    │ CSE  │ 9.1  │
│   104   │ Sneha    │ IT   │ 8.0  │
└─────────┴──────────┴──────┴──────┘

1. SELECTION: σ_Dept='CSE'(STUDENT)
   → Returns rows where Dept = 'CSE'
   Result: {(101, Aarav, CSE, 8.5), (103, Rohan, CSE, 9.1)}

2. PROJECTION: π_Name,CGPA(STUDENT)
   → Returns only Name and CGPA columns
   Result: {(Aarav,8.5),(Priya,7.2),(Rohan,9.1),(Sneha,8.0)}

3. COMBINED: π_Name(σ_Dept='CSE'(STUDENT))
   → Names of CSE students
   Result: {Aarav, Rohan}

4. CARTESIAN PRODUCT: STUDENT × COURSE
   If COURSE has 3 tuples → Result has 4×3 = 12 tuples`,
        },
      ],
      keyPoints: [
        "Relational Algebra has **6 basic operations**: σ, π, ∪, −, ×, ρ.",
        "**Selection (σ)**: Filters rows based on condition (horizontal partition).",
        "**Projection (π)**: Selects columns (vertical partition), removes duplicates.",
        "**Union (∪)**: Combines two union-compatible relations.",
        "**Set Difference (−)**: Tuples in R but not in S.",
        "**Cartesian Product (×)**: Every tuple of R paired with every tuple of S.",
        "**Rename (ρ)**: Gives new names to relations/attributes.",
        "JOIN is a **derived operation** = σ(R × S).",
        "Forms the theoretical basis for **SQL**.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 2c
  // ─────────────────────────────────────────────
  {
    id: "2c",
    questionNumber: "2",
    part: "c",
    title: "Normalization — 1NF, 2NF, 3NF",
    marks: 15,
    tags: ["Normalization", "FD", "Core"],
    content: {
      fullQuestion: "What do you mean by Normalization? Discuss 1NF, 2NF, and 3NF.",
      definition:
        "**Normalization** is the process of organizing a relational database schema to reduce data redundancy, eliminate data anomalies (insertion, update, and deletion anomalies), and improve data integrity. It was introduced by E.F. Codd and works by decomposing large, poorly structured tables into smaller, well-structured ones using a set of rules called **Normal Forms**. Each normal form builds upon the previous, imposing increasingly strict conditions on the relation's structure based on functional dependencies. The common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF, and 5NF.",
      coreConcepts: [
        {
          heading: "Why Normalization? — Data Anomalies",
          body: "Without normalization, data is stored redundantly, causing: **Insertion Anomaly**: Cannot insert data without other unrelated data. **Deletion Anomaly**: Deleting one fact accidentally deletes another. **Update Anomaly**: Updating data in one place requires updates in many places, risking inconsistency.",
        },
        {
          heading: "First Normal Form (1NF)",
          body: "A relation is in **1NF** if: (1) All attributes contain only **atomic (indivisible) values** — no multi-valued or composite attributes. (2) Each column contains values of a **single domain**. (3) Each row is **uniquely identifiable** (has a primary key). (4) No **repeating groups** of columns. Example Violation: A table with a 'Phone' column that stores multiple phone numbers in one cell is NOT in 1NF.",
        },
        {
          heading: "Second Normal Form (2NF)",
          body: "A relation is in **2NF** if: (1) It is in **1NF**. (2) Every non-key attribute is **fully functionally dependent** on the **entire** primary key — no partial dependencies. This applies only when the primary key is composite. Example Violation: In (Student_ID, Course_ID) → Student_Name — Student_Name depends only on Student_ID (partial dependency). Fix: Decompose into separate tables.",
        },
        {
          heading: "Third Normal Form (3NF)",
          body: "A relation is in **3NF** if: (1) It is in **2NF**. (2) No non-key attribute is **transitively dependent** on the primary key — no transitive dependencies. A transitive dependency exists when A → B → C (non-key). Example Violation: Student_ID → Dept_ID → HOD_Name — HOD_Name transitively depends on Student_ID via Dept_ID. Fix: Decompose to remove transitive dependency.",
        },
      ],
      visual: {
        type: "table",
        title: "Normal Forms — Comparison Table",
        tableData: {
          headers: ["Normal Form", "Requirement", "Eliminates", "Condition"],
          rows: [
            ["1NF", "Atomic values, no repeating groups", "Multi-valued & composite attributes", "PK must exist"],
            ["2NF", "1NF + No Partial Dependencies", "Partial FDs on composite keys", "Full dependency on PK"],
            ["3NF", "2NF + No Transitive Dependencies", "Transitive FDs among non-key attrs", "No X→Y→Z chains"],
            ["BCNF", "3NF + Every determinant is a candidate key", "Remaining anomalies in 3NF", "Stronger than 3NF"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "Step-by-Step Normalization Example",
          type: "example",
          content: `UNNORMALIZED TABLE:
┌────────┬─────────┬──────────────────┬───────┬─────────┬─────────┐
│Stu_ID  │ Name    │ Courses          │Dept   │Dept_Head│ Grade   │
├────────┼─────────┼──────────────────┼───────┼─────────┼─────────┤
│  101   │ Aarav   │ DBMS, OS, CN     │ CSE   │  Dr.X   │ A, B, A │
└────────┴─────────┴──────────────────┴───────┴─────────┴─────────┘
Problem: Multi-valued 'Courses' and 'Grade' → Not in 1NF

─────────────────────────────────────────────
STEP 1 → Convert to 1NF:
Make all values atomic; create one row per course.
┌────────┬─────────┬─────────┬───────┬──────────┬───────┐
│Stu_ID  │ Name    │ Course  │Dept   │Dept_Head │ Grade │
├────────┼─────────┼─────────┼───────┼──────────┼───────┤
│  101   │ Aarav   │ DBMS    │ CSE   │  Dr.X    │  A    │
│  101   │ Aarav   │ OS      │ CSE   │  Dr.X    │  B    │
│  101   │ Aarav   │ CN      │ CSE   │  Dr.X    │  A    │
└────────┴─────────┴─────────┴───────┴──────────┴───────┘
PK = (Stu_ID, Course) ← Composite Key
Now in 1NF ✓

─────────────────────────────────────────────
STEP 2 → Convert to 2NF:
Identify partial dependencies:
  (Stu_ID, Course) → Grade   ← FULL FD ✓
  Stu_ID → Name             ← PARTIAL FD ✗
  Stu_ID → Dept             ← PARTIAL FD ✗
  Stu_ID → Dept_Head        ← PARTIAL FD ✗

Decompose:
TABLE 1: STUDENT(Stu_ID [PK], Name, Dept, Dept_Head)
TABLE 2: ENROLLMENT(Stu_ID, Course, Grade) [PK = (Stu_ID, Course)]
Now in 2NF ✓

─────────────────────────────────────────────
STEP 3 → Convert to 3NF:
In TABLE 1: Stu_ID → Dept → Dept_Head (TRANSITIVE FD) ✗

Decompose TABLE 1:
STUDENT(Stu_ID [PK], Name, Dept)
DEPARTMENT(Dept [PK], Dept_Head)

Final Tables (3NF ✓):
• STUDENT(Stu_ID, Name, Dept)
• DEPARTMENT(Dept, Dept_Head)
• ENROLLMENT(Stu_ID, Course, Grade)`,
        },
      ],
      keyPoints: [
        "Normalization reduces **redundancy** and eliminates **data anomalies**.",
        "**1NF**: All attributes must be **atomic** — no multi-valued or repeating groups.",
        "**2NF**: 1NF + No **partial dependencies** (applies to composite keys).",
        "**3NF**: 2NF + No **transitive dependencies** among non-key attributes.",
        "Each normal form is **stricter** than the previous.",
        "Anomalies eliminated: **Insertion**, **Deletion**, **Update** anomalies.",
        "**BCNF** is stronger than 3NF — every determinant must be a candidate key.",
        "Normalization may involve **decomposing** tables into smaller ones.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 2d
  // ─────────────────────────────────────────────
  {
    id: "2d",
    questionNumber: "2",
    part: "d",
    title: "States of a Transaction",
    marks: 15,
    tags: ["Transaction", "States", "Core"],
    content: {
      fullQuestion: "Discuss various states of a transaction.",
      definition:
        "A **transaction** goes through a series of well-defined states during its lifetime — from the moment it begins until it is either committed or aborted. The state model of a transaction describes all possible stages a transaction can be in. Understanding these states is essential for implementing crash recovery, concurrency control, and ensuring ACID properties. The five primary states of a transaction are: **Active**, **Partially Committed**, **Committed**, **Failed**, and **Aborted**. Additionally, a **Terminated** state marks the complete end of a transaction.",
      coreConcepts: [
        {
          heading: "1. Active State",
          body: "The **initial state** of every transaction. The transaction is currently executing its operations — reading, writing, updating data. All read and write operations happen while the transaction is in the active state. It remains in this state until it finishes all its operations or encounters an error.",
        },
        {
          heading: "2. Partially Committed State",
          body: "The transaction has executed its **last statement** but changes have NOT yet been permanently written to the database. The system performs final checks (e.g., constraints, durability conditions). If checks pass → moves to Committed state. If any issue → moves to Failed state.",
        },
        {
          heading: "3. Committed State",
          body: "The transaction has **successfully completed** all operations and all changes have been **permanently saved** to the database. The changes are now visible to other transactions. A COMMIT statement brings the transaction to this state. After commit, **rollback is not possible**.",
        },
        {
          heading: "4. Failed State",
          body: "The transaction has encountered an **error** that prevents normal execution — either during the Active state (error while executing) or during Partially Committed state (failed final checks). The transaction cannot proceed and must be rolled back.",
        },
        {
          heading: "5. Aborted State",
          body: "The transaction has been **rolled back** — all changes made during the transaction have been **undone** and the database is restored to its state before the transaction began. After abort, the DBMS can either restart the transaction (if it was a system error) or kill it (if it was a logical error).",
        },
      ],
      visual: {
        type: "flowchart",
        title: "Transaction State Transition Diagram",
        flowchartSteps: [
          { shape: "oval", label: "ACTIVE", sublabel: "Transaction begins, executing operations" },
          { shape: "diamond", label: "Last Statement Executed?" },
          { shape: "rect", label: "PARTIALLY COMMITTED", sublabel: "Last op done, awaiting final checks" },
          { shape: "rect", label: "COMMITTED", sublabel: "All changes saved permanently" },
          { shape: "rect", label: "FAILED", sublabel: "Error encountered during execution" },
          { shape: "rect", label: "ABORTED", sublabel: "Rollback complete, DB restored" },
          { shape: "oval", label: "TERMINATED", sublabel: "Transaction ends (committed or aborted)" },
        ],
      },
      technicalImpl: [
        {
          heading: "State Transitions — Summary",
          type: "example",
          content: `STATE TRANSITION TABLE:
┌───────────────────────┬──────────────────────────────────────────┐
│   FROM State          │   TO State (Condition)                   │
├───────────────────────┼──────────────────────────────────────────┤
│ Active                │ Partially Committed (last op done)        │
│ Active                │ Failed (error during execution)          │
│ Partially Committed   │ Committed (all checks pass)              │
│ Partially Committed   │ Failed (output to disk fails)            │
│ Failed                │ Aborted (after rollback)                 │
│ Committed             │ Terminated (end)                         │
│ Aborted               │ Terminated (end)                         │
│ Aborted               │ Active (if restarted by DBMS)            │
└───────────────────────┴──────────────────────────────────────────┘

EXAMPLE — Bank Transfer T:
1. BEGIN → State: ACTIVE
2. READ(A), A=A-500, WRITE(A) → State: ACTIVE
3. READ(B), B=B+500, WRITE(B) → State: ACTIVE
4. Last WRITE done → State: PARTIALLY COMMITTED
5. Final checks pass → State: COMMITTED ✓
   OR disk failure → State: FAILED → ABORTED → ROLLBACK`,
        },
      ],
      keyPoints: [
        "**Active**: Transaction is executing (initial state).",
        "**Partially Committed**: Last statement executed, awaiting final persistence.",
        "**Committed**: Changes saved permanently — cannot be undone.",
        "**Failed**: Error encountered — cannot proceed normally.",
        "**Aborted**: Rollback complete — database restored to prior state.",
        "**Terminated**: Final state — transaction is done (either committed or aborted).",
        "After abort, DBMS may **restart** (system error) or **kill** (logical error) the transaction.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 2e
  // ─────────────────────────────────────────────
  {
    id: "2e",
    questionNumber: "2",
    part: "e",
    title: "Problems in Concurrency Control",
    marks: 15,
    tags: ["Concurrency", "Problems", "Core"],
    content: {
      fullQuestion: "What are various problems encountered during concurrency control? Discuss each of them.",
      definition:
        "**Concurrency control** manages simultaneous execution of transactions to maintain database consistency. When multiple transactions execute concurrently without proper control, several anomalies or problems can arise that violate the ACID properties — particularly Isolation and Consistency. The four major problems in concurrency control are: **Dirty Read (Temporary Update Problem)**, **Lost Update Problem**, **Unrepeatable Read (Incorrect Summary Problem)**, and **Phantom Read Problem**. Each of these can lead to data inconsistencies if not handled properly by the DBMS.",
      coreConcepts: [
        {
          heading: "1. Dirty Read (Temporary Update Problem)",
          body: "Occurs when Transaction T2 reads a value written by T1, but T1 later **rolls back**. T2 has read a 'dirty' (uncommitted) value that no longer exists. This violates the **Isolation** property. Example: T1 writes X=500, T2 reads X=500, T1 rolls back (X back to 1000). T2 used an incorrect value.",
        },
        {
          heading: "2. Lost Update Problem",
          body: "Occurs when two transactions both read an old value and update it. The second transaction's update **overwrites** the first's update, effectively losing the first update. Example: T1 reads X=100, T2 reads X=100, T1 writes X=150, T2 writes X=120. T1's update (X=150) is lost.",
        },
        {
          heading: "3. Unrepeatable Read (Inconsistent Retrievals)",
          body: "Occurs when a transaction reads the same data item **twice** and gets different values each time, because another transaction modified and committed it in between. Example: T1 reads X=100, T2 updates X=200 and commits, T1 reads X again → gets 200. The same read gives different results.",
        },
        {
          heading: "4. Phantom Read Problem",
          body: "Occurs when a transaction **re-executes a query** and finds a different set of rows — because another transaction inserted or deleted rows that satisfy the query condition. Example: T1 counts rows WHERE dept='CSE' → gets 10. T2 inserts a new CSE student and commits. T1 re-counts → gets 11. A phantom row appeared.",
        },
      ],
      visual: {
        type: "table",
        title: "Concurrency Problems — Comparison Table",
        tableData: {
          headers: ["Problem", "Cause", "Effect", "Solution"],
          rows: [
            ["Dirty Read", "T2 reads uncommitted data of T1", "T1 rollback makes T2's read invalid", "Strict 2PL / MVCC"],
            ["Lost Update", "Two Tx update same item concurrently", "One update is overwritten and lost", "Exclusive locks on write"],
            ["Unrepeatable Read", "Another Tx updates between two reads", "Same read returns different values", "Shared locks held till end"],
            ["Phantom Read", "Another Tx inserts/deletes matching rows", "Re-query returns different row set", "Range locks / Serializable level"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "Timeline Diagrams for All Problems",
          type: "example",
          content: `1. DIRTY READ:
   T1:  READ(X)  WRITE(X=500)              ROLLBACK
   T2:                       READ(X=500)   ← reads dirty value!

2. LOST UPDATE:
   T1:  READ(X=100)           WRITE(X=150)
   T2:            READ(X=100)              WRITE(X=120) ← T1's write LOST!

3. UNREPEATABLE READ:
   T1:  READ(X=100)                        READ(X=200) ← different!
   T2:               WRITE(X=200) COMMIT

4. PHANTOM READ:
   T1:  SELECT COUNT(*) WHERE Dept='CSE' → 10
   T2:                                    INSERT CSE student → COMMIT
   T1:  SELECT COUNT(*) WHERE Dept='CSE' → 11 ← phantom row!

ISOLATION LEVELS (SQL Standard):
┌─────────────────────┬───────────┬──────────────────┬─────────┐
│ Isolation Level     │ Dirty Read│ Unrepeatable Read│ Phantom │
├─────────────────────┼───────────┼──────────────────┼─────────┤
│ READ UNCOMMITTED    │   YES     │      YES         │  YES    │
│ READ COMMITTED      │   NO      │      YES         │  YES    │
│ REPEATABLE READ     │   NO      │      NO          │  YES    │
│ SERIALIZABLE        │   NO      │      NO          │  NO     │
└─────────────────────┴───────────┴──────────────────┴─────────┘`,
        },
      ],
      keyPoints: [
        "**Dirty Read**: Reading uncommitted data that may be rolled back.",
        "**Lost Update**: Two transactions update same data; one update is overwritten.",
        "**Unrepeatable Read**: Same read returns different values within one transaction.",
        "**Phantom Read**: Re-query returns new/missing rows due to another transaction's insert/delete.",
        "**Serializable** isolation level prevents ALL four problems.",
        "**READ UNCOMMITTED** allows all four problems — lowest isolation.",
        "Solutions: Locking protocols, MVCC, and proper isolation levels.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 3a
  // ─────────────────────────────────────────────
  {
    id: "3a",
    questionNumber: "3",
    part: "a",
    title: "ER Diagram",
    marks: 15,
    tags: ["ER Model", "Diagram", "Core"],
    content: {
      fullQuestion: "Discuss ER diagram with the help of an example.",
      definition:
        "An **Entity-Relationship (ER) Diagram** is a high-level conceptual data model that graphically represents the structure of a database. Proposed by Peter Chen in 1976, it depicts **entities** (objects), **attributes** (properties of entities), and **relationships** (associations between entities). The ER diagram is used during the database design phase to communicate the logical structure of the database to both technical and non-technical stakeholders. It forms the blueprint for creating the relational schema. ER diagrams use standard notations: rectangles for entities, ellipses for attributes, diamonds for relationships, and lines for connections.",
      coreConcepts: [
        {
          heading: "Basic Components of ER Diagram",
          body: "**Entity**: A real-world object distinguishable from others (e.g., Student, Course). Represented by a **rectangle**. **Strong Entity**: Has its own primary key. **Weak Entity**: Depends on a strong entity; represented by a **double rectangle**. **Attribute**: Property of an entity (e.g., Name, Age). Represented by **ellipse**. **Key Attribute**: Uniquely identifies an entity — **underlined** in ellipse. **Multivalued Attribute**: Can have multiple values — **double ellipse**. **Derived Attribute**: Computed from other attributes — **dashed ellipse**. **Relationship**: Association between entities — represented by **diamond**.",
        },
        {
          heading: "Cardinality and Participation",
          body: "**Cardinality** defines the number of entities that can participate in a relationship: **One-to-One (1:1)**: One entity relates to exactly one other. **One-to-Many (1:N)**: One entity relates to many. **Many-to-One (N:1)**: Many relate to one. **Many-to-Many (M:N)**: Many entities relate to many. **Participation**: **Total Participation** (double line): Every entity must participate. **Partial Participation** (single line): Entity may or may not participate.",
        },
        {
          heading: "ER Diagram Notations",
          body: "Rectangles = Entities | Ellipses = Attributes | Underlined Ellipse = Key Attribute | Double Ellipse = Multivalued Attribute | Dashed Ellipse = Derived Attribute | Diamond = Relationship | Double Rectangle = Weak Entity | Double Diamond = Identifying Relationship.",
        },
      ],
      visual: {
        type: "diagram",
        title: "ER Diagram — University Database Example",
        diagramLines: [
          "         (Roll_No)  (Name)   (Age)",
          "              \\       |       /",
          "               \\      |      /",
          "            ┌──────────────────┐",
          "            │     STUDENT      │  ← Strong Entity",
          "            └────────┬─────────┘",
          "                     │  (Total Participation)",
          "             ════════╪════════",
          "             ║   ENROLLS   ║  ← Relationship (M:N)",
          "             ════════╪════════",
          "                     │  (Partial Participation)",
          "            ┌────────┴─────────┐",
          "            │      COURSE      │",
          "            └──────────────────┘",
          "               /     |      \\",
          "         (C_ID) (C_Name) (Credits)",
          "",
          "         ┌──────────────────┐",
          "         │    DEPARTMENT    │",
          "         └────────┬─────────┘",
          "              /   |   \\",
          "        (D_ID)(D_Name)(Location)",
          "                  │",
          "         ◇── BELONGS_TO ──◇  (1:N)",
          "                  │",
          "         ┌────────┴─────────┐",
          "         │    FACULTY       │",
          "         └──────────────────┘",
          "           (Fac_ID)(Name)(Designation)",
        ],
      },
      technicalImpl: [
        {
          heading: "ER Diagram → Relational Schema Mapping",
          type: "sql",
          language: "sql",
          content: `-- Mapping ER Diagram to Relational Tables

-- STUDENT Entity
CREATE TABLE Student (
    Roll_No    INT PRIMARY KEY,
    Name       VARCHAR(50),
    Age        INT
);

-- COURSE Entity
CREATE TABLE Course (
    C_ID     INT PRIMARY KEY,
    C_Name   VARCHAR(50),
    Credits  INT
);

-- ENROLLS Relationship (M:N → Separate Table)
CREATE TABLE Enrollment (
    Roll_No  INT,
    C_ID     INT,
    Grade    CHAR(1),
    PRIMARY KEY (Roll_No, C_ID),
    FOREIGN KEY (Roll_No) REFERENCES Student(Roll_No),
    FOREIGN KEY (C_ID) REFERENCES Course(C_ID)
);

-- DEPARTMENT Entity
CREATE TABLE Department (
    D_ID     INT PRIMARY KEY,
    D_Name   VARCHAR(50),
    Location VARCHAR(50)
);`,
        },
      ],
      keyPoints: [
        "ER Diagram is a **conceptual model** for designing databases.",
        "**Entities**: Rectangles | **Attributes**: Ellipses | **Relationships**: Diamonds.",
        "**Key attribute** is underlined in the ellipse.",
        "**Weak entity** depends on a strong entity (double rectangle).",
        "**Cardinality**: 1:1, 1:N, M:N defines relationship participation.",
        "**Total participation** = double line; **Partial** = single line.",
        "M:N relationships are converted to a **separate table** in relational schema.",
        "ER Diagrams bridge the gap between **real-world** requirements and **database design**.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 3b
  // ─────────────────────────────────────────────
  {
    id: "3b",
    questionNumber: "3",
    part: "b",
    title: "Generalization, Specialization & Aggregation",
    marks: 15,
    tags: ["ER Model", "EER", "Core"],
    content: {
      fullQuestion: "Explain the terms Generalization, Specialization and Aggregation.",
      definition:
        "**Generalization**, **Specialization**, and **Aggregation** are three abstraction mechanisms used in the **Enhanced Entity-Relationship (EER)** model to represent complex real-world relationships that the basic ER model cannot express. Generalization and Specialization define IS-A hierarchies (supertype-subtype relationships), while Aggregation allows a relationship itself to be treated as an entity and participate in other relationships. Together, these concepts extend the expressive power of ER diagrams for modeling complex database schemas.",
      coreConcepts: [
        {
          heading: "1. Specialization",
          body: "**Specialization** is a **top-down** design process where a higher-level entity (superclass) is divided into lower-level sub-entities (subclasses) based on distinguishing characteristics. The subclass inherits all attributes of the superclass and may have additional specific attributes. It represents an **IS-A** relationship. Example: EMPLOYEE is specialized into ENGINEER, MANAGER, and CLERK. Each inherits attributes from EMPLOYEE and has its own specific attributes.",
        },
        {
          heading: "2. Generalization",
          body: "**Generalization** is the **bottom-up** reverse process of specialization — multiple lower-level entities are combined into a single higher-level generalized entity. Common attributes from multiple entities are abstracted into a superclass. Example: CAR and TRUCK both have Vehicle_ID, Speed, Fuel_Type → Generalized into VEHICLE superclass.",
        },
        {
          heading: "3. Aggregation",
          body: "**Aggregation** is the process of treating a **relationship set** (along with its participating entity sets) as a higher-level entity. This is needed when a relationship must participate in another relationship. In standard ER, relationships cannot directly participate in other relationships. Aggregation is shown by drawing a **rectangle around the relationship diamond and its entities**. Example: The relationship WORKS_ON between EMPLOYEE and PROJECT may itself be evaluated — MANAGES the WORKS_ON relationship.",
        },
        {
          heading: "Constraints in Generalization/Specialization",
          body: "**Disjoint Constraint**: A subclass member can belong to only one subclass at a time (marked 'd'). **Overlap Constraint**: A member can belong to multiple subclasses simultaneously (marked 'o'). **Total Specialization**: Every superclass member must be in at least one subclass (double line). **Partial Specialization**: Superclass members may not belong to any subclass (single line).",
        },
      ],
      visual: {
        type: "diagram",
        title: "Specialization / Generalization and Aggregation Diagrams",
        diagramLines: [
          "SPECIALIZATION (Top-Down):              GENERALIZATION (Bottom-Up):",
          "",
          "      ┌──────────────┐                    ┌──────────────┐",
          "      │   EMPLOYEE   │ ← Superclass        │   VEHICLE    │ ← Generalized",
          "      └──────┬───────┘                    └──────┬───────┘",
          "             │  IS-A                             │  IS-A",
          "       ┌─────┴──────┐                     ┌─────┴──────┐",
          "       ▼            ▼                      ▼            ▼",
          "  ┌─────────┐ ┌──────────┐          ┌─────────┐ ┌─────────┐",
          "  │ENGINEER │ │MANAGER   │          │  CAR    │ │  TRUCK  │",
          "  └─────────┘ └──────────┘          └─────────┘ └─────────┘",
          "  (Specific)  (Specific)              (Specific)  (Specific)",
          "",
          "─────────────────────────────────────────────────────────────",
          "AGGREGATION:",
          "",
          " ┌─────────────────────────────────────┐",
          " │  ┌──────────┐  ◇WORKS_ON◇  ┌───────┐│ ← Aggregated as entity",
          " │  │ EMPLOYEE │─────────────│PROJECT ││",
          " │  └──────────┘             └────────┘│",
          " └───────────────────┬─────────────────┘",
          "                     │",
          "               ◇ MANAGES ◇",
          "                     │",
          "             ┌───────────────┐",
          "             │   MANAGER     │",
          "             └───────────────┘",
        ],
      },
      keyPoints: [
        "**Specialization**: Top-down — splits superclass into specialized subclasses.",
        "**Generalization**: Bottom-up — merges common entities into a superclass.",
        "Both create **IS-A hierarchies** (superclass ↔ subclass).",
        "Subclasses **inherit** all attributes of the superclass.",
        "**Disjoint**: Member belongs to only one subclass at a time.",
        "**Overlapping**: Member can belong to multiple subclasses.",
        "**Aggregation**: Treats a relationship as an entity so it can participate in another relationship.",
        "These are features of the **Enhanced ER (EER)** model.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 4a
  // ─────────────────────────────────────────────
  {
    id: "4a",
    questionNumber: "4",
    part: "a",
    title: "Integrity Constraints",
    marks: 15,
    tags: ["SQL", "Constraints", "Core"],
    content: {
      fullQuestion: "What are the various Integrity Constraints? Discuss each of them.",
      definition:
        "**Integrity Constraints** are rules or conditions enforced by the DBMS to ensure the accuracy, consistency, and validity of data stored in a database. They prevent invalid data from being entered and maintain the correctness of relationships between tables. Integrity constraints are defined as part of the database schema and are automatically enforced by the DBMS during all insert, update, and delete operations. The major types of integrity constraints in relational databases are: **Domain Constraint**, **Entity Integrity (Primary Key Constraint)**, **Referential Integrity (Foreign Key Constraint)**, **Key Constraint**, **NOT NULL Constraint**, and **Check Constraint**.",
      coreConcepts: [
        {
          heading: "1. Domain Constraint",
          body: "Specifies that each attribute value must come from a valid **domain** (set of permissible values). The data type, range, and format of attribute values are defined here. Example: Age must be an integer between 0 and 150; Gender must be 'M' or 'F'. Enforced by data types, CHECK constraints, and ENUM types.",
        },
        {
          heading: "2. Entity Integrity (Primary Key Constraint)",
          body: "States that the **primary key** of a table must be **unique** and **NOT NULL**. Every table must have a primary key that uniquely identifies each row. Ensures that no two rows are identical and that every row is individually identifiable. Violation: Inserting two students with the same Roll_No, or inserting NULL as Roll_No.",
        },
        {
          heading: "3. Referential Integrity (Foreign Key Constraint)",
          body: "States that a **foreign key** value in one table must either be NULL or must correspond to an existing primary key value in the referenced table. Maintains consistency between related tables. Example: Enrollment.Student_ID must exist in Student.Roll_No. Actions on violation: RESTRICT, CASCADE, SET NULL, SET DEFAULT.",
        },
        {
          heading: "4. NOT NULL Constraint",
          body: "Ensures that an attribute cannot have a **NULL value**. Critical for attributes that must always have a meaningful value. Example: Student Name cannot be NULL.",
        },
        {
          heading: "5. UNIQUE Constraint",
          body: "Ensures all values in a column are **distinct** (no duplicates). Unlike PRIMARY KEY, UNIQUE columns can contain NULL values (multiple NULLs are allowed in most DBMS). Example: Email column must be unique for each user.",
        },
        {
          heading: "6. CHECK Constraint",
          body: "Specifies a **condition** that must be satisfied for all values in a column. Enforces domain-specific business rules. Example: CHECK (Age >= 18), CHECK (Salary > 0), CHECK (Gender IN ('M', 'F', 'Other')).",
        },
      ],
      visual: {
        type: "table",
        title: "Integrity Constraints — Summary Table",
        tableData: {
          headers: ["Constraint", "Ensures", "SQL Keyword", "Example"],
          rows: [
            ["Domain", "Values within valid domain/data type", "Data Types, CHECK", "Age INT, Gender IN ('M','F')"],
            ["Entity Integrity", "PK is unique and NOT NULL", "PRIMARY KEY", "Roll_No INT PRIMARY KEY"],
            ["Referential Integrity", "FK references valid PK", "FOREIGN KEY ... REFERENCES", "FOREIGN KEY (Dept_ID) REFERENCES Dept"],
            ["NOT NULL", "Column cannot have NULL values", "NOT NULL", "Name VARCHAR(50) NOT NULL"],
            ["UNIQUE", "All column values are distinct", "UNIQUE", "Email VARCHAR UNIQUE"],
            ["CHECK", "Column values satisfy a condition", "CHECK (condition)", "CHECK (Age >= 18)"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "SQL Implementation of All Integrity Constraints",
          type: "sql",
          language: "sql",
          content: `CREATE TABLE Department (
    Dept_ID   INT          PRIMARY KEY,        -- Entity Integrity
    Dept_Name VARCHAR(50)  NOT NULL UNIQUE,    -- NOT NULL + UNIQUE
    Location  VARCHAR(50)
);

CREATE TABLE Student (
    Roll_No    INT          PRIMARY KEY,        -- Entity Integrity (PK)
    Name       VARCHAR(50)  NOT NULL,           -- NOT NULL Constraint
    Age        INT          CHECK (Age >= 17 AND Age <= 35),  -- CHECK (Domain)
    Gender     CHAR(1)      CHECK (Gender IN ('M', 'F')),    -- CHECK (Domain)
    Email      VARCHAR(100) UNIQUE,             -- UNIQUE Constraint
    CGPA       DECIMAL(3,1) CHECK (CGPA >= 0.0 AND CGPA <= 10.0),
    Dept_ID    INT,
    FOREIGN KEY (Dept_ID)                       -- Referential Integrity
        REFERENCES Department(Dept_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);`,
        },
      ],
      keyPoints: [
        "**Domain Constraint**: Values must belong to a specified domain/data type.",
        "**Entity Integrity**: Primary key must be UNIQUE and NOT NULL.",
        "**Referential Integrity**: Foreign key must reference a valid primary key.",
        "**NOT NULL**: Column must always have a value.",
        "**UNIQUE**: All values in column must be distinct.",
        "**CHECK**: Values must satisfy a specified condition.",
        "Constraints are enforced automatically by the **DBMS engine**.",
        "Violation of constraints causes the **transaction to be rejected**.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 4b
  // ─────────────────────────────────────────────
  {
    id: "4b",
    questionNumber: "4",
    part: "b",
    title: "PL/SQL Procedures and Functions",
    marks: 15,
    tags: ["PL/SQL", "Procedures", "Functions"],
    content: {
      fullQuestion: "Discuss PL/SQL Procedures and Functions with example.",
      definition:
        "**PL/SQL (Procedural Language/SQL)** is Oracle's procedural extension to SQL, which allows combining SQL statements with procedural programming constructs like loops, conditionals, and exception handling. **Procedures** and **Functions** are two types of named PL/SQL blocks (subprograms) that are stored in the database and can be called repeatedly. A **Procedure** performs a specific task and may or may not return a value. A **Function** always returns a single value and can be used in SQL expressions. Both can accept parameters (IN, OUT, IN OUT) and improve code reusability, modularity, and performance.",
      coreConcepts: [
        {
          heading: "PL/SQL Block Structure",
          body: "Every PL/SQL block has: **DECLARE** section (optional) — for declaring variables, constants, cursors. **BEGIN** section (mandatory) — executable statements including SQL and procedural code. **EXCEPTION** section (optional) — error handling. **END** keyword to close the block.",
        },
        {
          heading: "Stored Procedure",
          body: "A **Procedure** is a named PL/SQL block stored in the database. It performs an action and may or may not return values. Parameters: **IN** (input — default), **OUT** (output), **IN OUT** (both). Syntax: CREATE OR REPLACE PROCEDURE proc_name (params) IS ... BEGIN ... END; Called with: EXECUTE proc_name(args) or CALL proc_name(args).",
        },
        {
          heading: "Stored Function",
          body: "A **Function** is similar to a procedure but **always returns a single value** using the RETURN statement. It can be used directly in SQL queries (e.g., in SELECT clause). Syntax: CREATE OR REPLACE FUNCTION func_name (params) RETURN datatype IS ... BEGIN ... RETURN value; END;",
        },
        {
          heading: "Key Differences",
          body: "Procedure: may or may not return value | Function: must return exactly one value. Procedure: called as a statement | Function: called in an expression. Function can be used in SQL queries; Procedure cannot (in most DBMS). Both support IN/OUT/IN OUT parameters.",
        },
      ],
      visual: {
        type: "table",
        title: "Procedure vs Function — Comparison",
        tableData: {
          headers: ["Feature", "Procedure", "Function"],
          rows: [
            ["Return Value", "Optional (via OUT parameter)", "Mandatory (via RETURN)"],
            ["Return Type", "No return type in header", "Must declare RETURN datatype"],
            ["Used in SQL", "Cannot use in SELECT", "Can use in SELECT expression"],
            ["Call Syntax", "EXEC proc_name(args)", "SELECT func_name(args) FROM DUAL"],
            ["Purpose", "Perform an action", "Compute and return a value"],
            ["Parameters", "IN, OUT, IN OUT", "IN (OUT rarely used)"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "PL/SQL Procedure Example — Calculate Bonus",
          type: "code",
          language: "sql",
          content: `-- PROCEDURE: Calculate and update employee bonus
CREATE OR REPLACE PROCEDURE Calculate_Bonus (
    p_emp_id  IN  Employee.Emp_ID%TYPE,    -- IN parameter
    p_bonus   OUT NUMBER                   -- OUT parameter
)
IS
    v_salary  NUMBER;
    v_dept    VARCHAR2(30);
BEGIN
    -- Fetch employee salary
    SELECT Salary, Department INTO v_salary, v_dept
    FROM Employee
    WHERE Emp_ID = p_emp_id;

    -- Business logic: Bonus calculation
    IF v_dept = 'CSE' THEN
        p_bonus := v_salary * 0.20;  -- 20% bonus for CSE
    ELSE
        p_bonus := v_salary * 0.10;  -- 10% bonus for others
    END IF;

    -- Update bonus in table
    UPDATE Employee
    SET Bonus = p_bonus
    WHERE Emp_ID = p_emp_id;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus calculated: ' || p_bonus);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found!');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        ROLLBACK;
END Calculate_Bonus;
/

-- Calling the Procedure:
DECLARE
    v_bonus NUMBER;
BEGIN
    Calculate_Bonus(101, v_bonus);
    DBMS_OUTPUT.PUT_LINE('Bonus for Emp 101: ' || v_bonus);
END;
/`,
        },
        {
          heading: "PL/SQL Function Example — Get Grade",
          type: "code",
          language: "sql",
          content: `-- FUNCTION: Returns grade based on CGPA
CREATE OR REPLACE FUNCTION Get_Grade (
    p_cgpa  IN  NUMBER
) RETURN VARCHAR2
IS
    v_grade VARCHAR2(2);
BEGIN
    IF p_cgpa >= 9.0 THEN
        v_grade := 'O';    -- Outstanding
    ELSIF p_cgpa >= 8.0 THEN
        v_grade := 'A+';
    ELSIF p_cgpa >= 7.0 THEN
        v_grade := 'A';
    ELSIF p_cgpa >= 6.0 THEN
        v_grade := 'B+';
    ELSIF p_cgpa >= 5.0 THEN
        v_grade := 'B';
    ELSE
        v_grade := 'F';    -- Fail
    END IF;

    RETURN v_grade;
END Get_Grade;
/

-- Using Function in SQL Query:
SELECT Student_Name, CGPA, Get_Grade(CGPA) AS Grade
FROM Student;

-- Output:
-- Aarav   | 8.5 | A+
-- Rohan   | 9.1 | O
-- Priya   | 6.8 | B+`,
        },
      ],
      keyPoints: [
        "PL/SQL = **SQL + Procedural constructs** (IF, LOOP, EXCEPTION).",
        "**Procedure**: Named block that performs an action; return via OUT parameter.",
        "**Function**: Named block that **always returns** a single value via RETURN.",
        "Both are stored in the database — called **stored subprograms**.",
        "Parameters: **IN** (input), **OUT** (output), **IN OUT** (both).",
        "Functions can be used in **SELECT** statements; Procedures cannot.",
        "PL/SQL blocks: **DECLARE → BEGIN → EXCEPTION → END**.",
        "Benefits: Code reuse, better performance, security, modularity.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 5a
  // ─────────────────────────────────────────────
  {
    id: "5a",
    questionNumber: "5",
    part: "a",
    title: "Minimal Cover for Functional Dependencies",
    marks: 15,
    tags: ["Normalization", "FD", "Minimal Cover"],
    content: {
      fullQuestion: "Define Minimal Cover for a set of functional dependencies. Discuss with the help of example.",
      definition:
        "A **Minimal Cover** (also called **Canonical Cover** or **Irreducible Set**) of a set of functional dependencies F is an equivalent, simplified set of FDs Fc such that: (1) Every FD in Fc has a single attribute on the right-hand side. (2) No FD in Fc is redundant — removing any FD from Fc changes the closure. (3) No attribute in any FD in Fc is extraneous — removing any attribute from the left side changes the closure. Fc ≡ F (both have the same closure: F+ = Fc+). Minimal cover is used in normalization to find the minimum set of FDs needed to define a relation.",
      coreConcepts: [
        {
          heading: "Properties of Minimal Cover",
          body: "**Right-Hand Side (RHS) is Singleton**: Every FD has exactly one attribute on the right. **No Redundant FD**: No FD can be derived from the others (removing it changes F+). **No Extraneous Attribute**: No attribute on the LHS is unnecessary (all are needed to determine the RHS).",
        },
        {
          heading: "Algorithm to Find Minimal Cover",
          body: "**Step 1**: Decompose RHS — Split each FD so that each has a single attribute on the right. **Step 2**: Remove Extraneous Attributes — For each FD X → Y, check if any attribute A in X is extraneous (i.e., (X−A)+ includes Y using remaining FDs). If yes, remove A. **Step 3**: Remove Redundant FDs — For each FD, check if it can be derived from the rest of the set. If yes, remove it.",
        },
      ],
      visual: {
        type: "flowchart",
        title: "Algorithm to Find Minimal Cover",
        flowchartSteps: [
          { shape: "oval", label: "Start with FD Set F" },
          { shape: "rect", label: "Step 1: Decompose RHS", sublabel: "Each FD has exactly one attribute on RHS" },
          { shape: "rect", label: "Step 2: Remove Extraneous LHS Attributes", sublabel: "Check if any LHS attribute is unnecessary" },
          { shape: "rect", label: "Step 3: Remove Redundant FDs", sublabel: "Check if any FD is derivable from others" },
          { shape: "oval", label: "Result: Minimal Cover Fc" },
        ],
      },
      technicalImpl: [
        {
          heading: "Worked Example — Finding Minimal Cover",
          type: "example",
          content: `Given FD Set F:
  F = { A → BC, B → C, AB → C, A → B }

─────────────────────────────────────────
STEP 1: Decompose RHS (make each FD have single attribute on RHS)

  A → BC  splits into:  A → B  and  A → C
  B → C   (already single)
  AB → C  (already single)
  A → B   (already single)

After Step 1:
  F = { A→B, A→C, B→C, AB→C, A→B }
  Remove duplicate A→B:
  F = { A→B, A→C, B→C, AB→C }

─────────────────────────────────────────
STEP 2: Remove Extraneous Attributes from LHS

Check AB → C:
  Is 'A' extraneous in LHS?
  Compute (B)+ using remaining FDs {A→B, A→C, B→C}:
  (B)+ = {B, C}   (B→C gives C)
  Since C ∈ (B)+, A is extraneous in AB → C
  Replace AB → C with  B → C

After Step 2:
  F = { A→B, A→C, B→C, B→C }
  Remove duplicate B→C:
  F = { A→B, A→C, B→C }

─────────────────────────────────────────
STEP 3: Remove Redundant FDs

Can A → C be derived from {A→B, B→C}?
  From A→B and B→C: A→C by transitivity ✓
  So A→C is REDUNDANT → Remove it.

Can A → B be derived from {B→C}?
  (B)+ = {B,C} — does not include A.
  Not redundant ✓

Can B → C be derived from {A→B}?
  (A)+ = {A,B} — A→B used. Does not derive B→C independently.
  Not redundant ✓

─────────────────────────────────────────
MINIMAL COVER Fc:
  Fc = { A → B, B → C }

Verification: 
  A → B → C  so  A→B, B→C implies A→C ✓
  Fc+ = F+ ✓`,
        },
      ],
      keyPoints: [
        "Minimal cover = **Equivalent but simplified** set of functional dependencies.",
        "Also called **Canonical Cover** or **Irreducible Set**.",
        "**Step 1**: Decompose RHS → each FD has a **single RHS attribute**.",
        "**Step 2**: Remove **extraneous LHS attributes** (those not needed for determination).",
        "**Step 3**: Remove **redundant FDs** (those derivable from others).",
        "Minimal cover has the same **closure (F+)** as the original set.",
        "Used in **3NF synthesis** algorithm for lossless, dependency-preserving decomposition.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 5b
  // ─────────────────────────────────────────────
  {
    id: "5b",
    questionNumber: "5",
    part: "b",
    title: "Lossless Join Decomposition",
    marks: 15,
    tags: ["Normalization", "Decomposition", "Lossless Join"],
    content: {
      fullQuestion: "Discuss lossless join with the help of an example.",
      definition:
        "A **Lossless Join Decomposition** (also called a lossless-join or non-additive join decomposition) is a decomposition of a relation R into sub-relations R1 and R2 such that the original relation R can be **perfectly reconstructed** by performing a natural join of R1 and R2. No information is lost, and no spurious (extra, incorrect) tuples are generated. A decomposition that generates spurious tuples when joined is called a **lossy decomposition**. Lossless join property is a critical requirement for good database design and is essential during normalization.",
      coreConcepts: [
        {
          heading: "Why Lossless Join Matters",
          body: "When we decompose a relation during normalization (e.g., to achieve 3NF or BCNF), we must ensure the decomposition is lossless. A lossy decomposition creates spurious tuples when the tables are joined back — leading to incorrect query results. The test for lossless join ensures data integrity is preserved after decomposition.",
        },
        {
          heading: "Lossless Join Condition (Heath's Theorem)",
          body: "A decomposition of R into R1(X,Y) and R2(X,Z) is lossless if and only if: **X → Y** (X is a superkey of R1) OR **X → Z** (X is a superkey of R2). Where X = R1 ∩ R2 (common attributes). If the common attributes form a key (or superkey) in at least one of the decomposed relations, the join is lossless.",
        },
        {
          heading: "Tabular Test for Lossless Join",
          body: "The tabular (Chase) algorithm can be used to test lossless join for any number of decomposed relations. Each relation gets a row in a table representing all attributes of R. Cells are filled with the attribute name if it appears in the relation (marked as 'a'), or with a unique variable (b_ij) if it doesn't. FDs are applied to equate rows. If any row becomes all 'a' values, the decomposition is lossless.",
        },
      ],
      visual: {
        type: "diagram",
        title: "Lossless vs Lossy Decomposition",
        diagramLines: [
          "ORIGINAL RELATION R (A, B, C):     FD: A → B",
          "┌───┬───┬───┐",
          "│ A │ B │ C │",
          "├───┼───┼───┤",
          "│ 1 │ x │ p │",
          "│ 2 │ y │ q │",
          "│ 1 │ x │ r │",
          "└───┴───┴───┘",
          "",
          "DECOMPOSITION: R1(A,B) and R2(A,C)",
          "Common attr: A. Does A→B or A→C? A→B holds ✓",
          "",
          "R1(A,B):           R2(A,C):",
          "┌───┬───┐          ┌───┬───┐",
          "│ A │ B │          │ A │ C │",
          "├───┼───┤          ├───┼───┤",
          "│ 1 │ x │          │ 1 │ p │",
          "│ 2 │ y │          │ 2 │ q │",
          "│   │   │          │ 1 │ r │",
          "└───┴───┘          └───┴───┘",
          "",
          "R1 ⋈ R2 (Natural Join on A):",
          "┌───┬───┬───┐  ← Same as original R ✓ LOSSLESS!",
          "│ A │ B │ C │",
          "├───┼───┼───┤",
          "│ 1 │ x │ p │",
          "│ 1 │ x │ r │",
          "│ 2 │ y │ q │",
          "└───┴───┴───┘",
        ],
      },
      technicalImpl: [
        {
          heading: "Detailed Example — Lossless Join Test",
          type: "example",
          content: `RELATION: R(A, B, C, D)
FDs: A → B, B → C, C → D

DECOMPOSITION: R1(A,B), R2(B,C), R3(C,D)

TEST (Using Heath's Theorem on each pair):

Step 1: R1∩R2 = {B}. Does B→B? Yes (reflexivity). 
         Does B→A? NO. Does B→C? YES ✓
         → R1 ⋈ R2 is LOSSLESS

Step 2: Intermediate = R1⋈R2 = (A,B,C). 
         (A,B,C)∩R3 = {C}. Does C→C? Yes. 
         Does C→A? No. Does C→D? YES ✓
         → Joining with R3 is LOSSLESS

CONCLUSION: The full decomposition {R1, R2, R3} is LOSSLESS ✓

─────────────────────────────────────────────────────
LOSSY DECOMPOSITION EXAMPLE:

R(A, B, C):  FD: A → B only
┌───┬───┬───┐
│ A │ B │ C │
├───┼───┼───┤
│ 1 │ x │ p │
│ 1 │ x │ q │
│ 2 │ y │ p │
└───┴───┴───┘

BAD Decomposition: R1(A,C) and R2(B,C)
Common attr: {C}. Does C→A? No. Does C→B? No. ✗

R1(A,C) ⋈ R2(B,C) would generate SPURIOUS tuples
like (1,y,p), (2,x,p) which don't exist in original R.
→ LOSSY DECOMPOSITION ✗`,
        },
      ],
      keyPoints: [
        "Lossless join = Natural join of decomposed relations **exactly recreates** original relation.",
        "No **spurious (extra) tuples** are generated — no information loss.",
        "**Test**: R1 ∩ R2 must be a superkey of R1 or R2 (Heath's Theorem).",
        "If common attributes determine one side → decomposition is **lossless**.",
        "**Lossy decomposition**: Extra/incorrect tuples appear after join.",
        "Lossless join is a **mandatory requirement** during normalization.",
        "Works with any number of relations using the **Chase Algorithm** (tabular test).",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 6a
  // ─────────────────────────────────────────────
  {
    id: "6a",
    questionNumber: "6",
    part: "a",
    title: "ACID Properties of a Transaction",
    marks: 15,
    tags: ["Transaction", "ACID", "Core"],
    content: {
      fullQuestion: "What do you mean by ACID properties of a transaction? Discuss each of them.",
      definition:
        "**ACID** is an acronym for the four fundamental properties that every database transaction must possess to ensure data validity, consistency, and reliability — even in the presence of errors, system crashes, or concurrent access. The four properties are: **Atomicity**, **Consistency**, **Isolation**, and **Durability**. These properties were formalized by Jim Gray and Andreas Reuter in the 1980s and form the cornerstone of reliable transaction processing in any DBMS. A transaction that satisfies all four ACID properties is considered a reliable unit of work.",
      coreConcepts: [
        {
          heading: "1. Atomicity — 'All or Nothing'",
          body: "**Atomicity** guarantees that a transaction is treated as a **single indivisible unit** — either ALL of its operations are executed successfully and committed, or NONE of them take effect (rollback). There is no partial execution. Maintained by: **Transaction Manager** using logging and rollback mechanisms. Example: In a bank transfer (debit A, credit B), if crediting B fails, debiting A is also undone.",
        },
        {
          heading: "2. Consistency — 'Valid State to Valid State'",
          body: "**Consistency** ensures that a transaction takes the database from one **valid, consistent state to another valid, consistent state**. Before and after the transaction, all integrity constraints (PK, FK, CHECK, etc.) must be satisfied. The transaction itself is responsible for writing correct logic. Example: Total money in the banking system remains the same before and after a transfer transaction.",
        },
        {
          heading: "3. Isolation — 'As if Alone'",
          body: "**Isolation** ensures that the **intermediate states of a transaction are not visible** to other concurrently executing transactions. Each transaction executes as if it were the only transaction running, even if many are executing simultaneously. Achieved by: **Concurrency Control mechanisms** (locking, MVCC, timestamp ordering). Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.",
        },
        {
          heading: "4. Durability — 'Permanent Change'",
          body: "**Durability** guarantees that once a transaction is **committed**, its changes are **permanently recorded** in the database and will survive any subsequent system failures (crashes, power outages, etc.). Achieved by: **Write-Ahead Logging (WAL)**, persistent storage, and recovery mechanisms like REDO logs.",
        },
      ],
      visual: {
        type: "table",
        title: "ACID Properties — Detailed Comparison",
        tableData: {
          headers: ["Property", "Guarantee", "Managed By", "Bank Transfer Example"],
          rows: [
            ["Atomicity", "All operations succeed or none do", "Transaction Manager, Undo Logs", "Both debit & credit happen, or neither"],
            ["Consistency", "DB moves between valid states", "Application Logic + Constraints", "Total balance unchanged after transfer"],
            ["Isolation", "Transactions don't interfere", "Concurrency Control (Locks, MVCC)", "No other Tx sees partial transfer"],
            ["Durability", "Committed changes are permanent", "Redo Logs, Write-Ahead Logging", "Transfer survives system crash"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "ACID Properties — Bank Transfer Transaction",
          type: "sql",
          language: "sql",
          content: `-- BANK TRANSFER: Transfer ₹5000 from Account 101 to Account 102
BEGIN TRANSACTION;

    -- ATOMICITY: Both operations in one unit
    UPDATE Account SET Balance = Balance - 5000 WHERE Acc_No = 101;
    UPDATE Account SET Balance = Balance + 5000 WHERE Acc_No = 102;

    -- CONSISTENCY CHECK: Balance cannot go negative
    -- (Enforced by CHECK constraint: Balance >= 0)

    -- If both succeed:
COMMIT;  -- DURABILITY: Changes written to disk permanently

-- If any step fails:
-- ROLLBACK;  -- ATOMICITY: All changes undone, DB back to valid state

-- ISOLATION: During this transaction, no other transaction
-- should see Account 101's balance as 95000 (partially debited)
-- This is handled by the DBMS concurrency control.

-- Checking balances after transaction:
SELECT Acc_No, Balance FROM Account WHERE Acc_No IN (101, 102);`,
        },
      ],
      keyPoints: [
        "**A — Atomicity**: All-or-nothing; partial execution is not allowed.",
        "**C — Consistency**: DB moves from one valid state to another; constraints are preserved.",
        "**I — Isolation**: Concurrent transactions don't interfere; intermediate states are hidden.",
        "**D — Durability**: Committed data survives crashes; written to persistent storage.",
        "Atomicity is enforced by **undo logs** and rollback mechanisms.",
        "Isolation is enforced by **locking** and **MVCC** (Multi-Version Concurrency Control).",
        "Durability is enforced by **Write-Ahead Logging (WAL)** and redo logs.",
        "ACID is the **gold standard** for reliable transaction processing.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 6b
  // ─────────────────────────────────────────────
  {
    id: "6b",
    questionNumber: "6",
    part: "b",
    title: "Testing of Serializability",
    marks: 15,
    tags: ["Concurrency", "Serializability", "Schedule"],
    content: {
      fullQuestion: "Write short notes on Testing of serializability.",
      definition:
        "**Serializability** is the gold standard for correctness in concurrent transaction execution. A schedule (sequence of operations from multiple concurrent transactions) is said to be **serializable** if its execution produces the same result as some **serial schedule** (where transactions run one at a time without interleaving). Testing serializability is critical to ensuring that concurrent execution does not lead to data inconsistencies. There are two types: **Conflict Serializability** (tested using a Precedence Graph) and **View Serializability** (more general but NP-hard to test).",
      coreConcepts: [
        {
          heading: "Conflict Serializability",
          body: "Two operations conflict if: (1) They belong to **different transactions**. (2) They access the **same data item**. (3) At least one of them is a **WRITE** operation. Three conflict pairs: R-W (read-write), W-R (write-read), W-W (write-write). A schedule is **conflict serializable** if it is equivalent to some serial schedule through a series of non-conflicting operation swaps.",
        },
        {
          heading: "Precedence Graph (Serialization Graph)",
          body: "A directed graph where: **Nodes** = transactions (T1, T2, T3...). **Directed Edge Ti → Tj**: Ti must precede Tj because they have a conflicting operation and Ti's operation comes first. A schedule is conflict serializable **if and only if its precedence graph has NO CYCLE**. A cycle means the transactions are mutually dependent and cannot be serialized.",
        },
        {
          heading: "View Serializability",
          body: "View serializability is more general than conflict serializability. A schedule S is view serializable if there exists a serial schedule S' such that: (1) **Initial Read**: If Ti reads initial value of X in S, Ti reads initial value in S'. (2) **Read from Write**: If Ti reads a value written by Tj in S, same in S'. (3) **Final Write**: If Ti does the final write of X in S, Ti does the final write in S'. Every conflict serializable schedule is view serializable (but not vice versa).",
        },
      ],
      visual: {
        type: "diagram",
        title: "Precedence Graph — Testing Conflict Serializability",
        diagramLines: [
          "SCHEDULE S:",
          "T1: R(A)        W(A)      R(B)      W(B)",
          "T2:      R(A)        W(A)      R(B)      W(B)",
          "         ─────────────────────────────────────",
          "Time:   1    2    3    4    5    6    7    8",
          "",
          "CONFLICT ANALYSIS:",
          "  T1 R(A) ─── T2 R(A): Not a conflict (both reads)",
          "  T1 W(A) ─── T2 R(A): Conflict! T1→T2 (W-R)",
          "  T1 R(A) ─── T2 W(A): Conflict! T1→T2 (R-W)",
          "  T1 W(B) ─── T2 R(B): Conflict! T1→T2 (W-R)",
          "",
          "PRECEDENCE GRAPH:",
          "",
          "         ┌────────────────────┐",
          "         │         T1         │",
          "         └──────────┬─────────┘",
          "                    │  (Multiple edges T1→T2)",
          "                    ▼",
          "         ┌──────────────────────┐",
          "         │          T2          │",
          "         └──────────────────────┘",
          "",
          "  No cycle detected → Schedule IS Conflict Serializable ✓",
          "  Equivalent Serial Schedule: T1, T2",
        ],
      },
      technicalImpl: [
        {
          heading: "Complete Example — Testing Serializability",
          type: "example",
          content: `EXAMPLE 1 — SERIALIZABLE SCHEDULE:
Schedule S1:
T1: R(A)  W(A)
T2:            R(A)  W(A)  R(B)  W(B)
T3:                              R(B)  W(B)

Conflicts:
  T1 W(A) before T2 R(A) → Edge T1→T2
  T2 W(B) before T3 R(B) → Edge T2→T3

Precedence Graph: T1 → T2 → T3 (no cycle) ✓
SERIALIZABLE (Equivalent to: T1, T2, T3)

────────────────────────────────────────────
EXAMPLE 2 — NON-SERIALIZABLE SCHEDULE:
Schedule S2:
T1: R(A)       W(B)
T2:      R(B)       W(A)

Conflicts:
  T1 R(A) before T2 W(A) → Edge T1→T2 (R-W conflict)
  T2 R(B) before T1 W(B) → Edge T2→T1 (R-W conflict)

Precedence Graph:
  T1 → T2
  T2 → T1
  CYCLE: T1 → T2 → T1 ✗

NOT SERIALIZABLE ✗
This schedule may cause data inconsistency.

────────────────────────────────────────────
TYPES OF SERIALIZABILITY:
┌────────────────────┬───────────────────────┐
│ Conflict Serial.   │ View Serializable      │
├────────────────────┼───────────────────────┤
│ Tests via          │ Tests via 3 conditions │
│ Precedence Graph   │ (Init read, Read-from, │
│                    │  Final write)           │
│ No cycle → Serial. │ More general           │
│ Easier to test     │ NP-hard to test        │
│ Subset of View S.  │ Superset of Conflict S.│
└────────────────────┴───────────────────────┘`,
        },
      ],
      keyPoints: [
        "**Serializable schedule**: Equivalent to some serial (non-concurrent) schedule.",
        "**Conflict**: Two ops conflict if different Tx, same data item, at least one write.",
        "**Conflict serializability**: Test using **Precedence Graph** — no cycle = serializable.",
        "**Edge Ti → Tj**: Ti's conflicting operation precedes Tj's conflicting operation.",
        "**Cycle in graph** → NOT conflict serializable.",
        "**View serializability**: More general; tested using initial-read, read-from, final-write.",
        "Every conflict serializable schedule is also **view serializable** (not vice versa).",
        "Non-serializable schedules can lead to **data inconsistency**.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 7a
  // ─────────────────────────────────────────────
  {
    id: "7a",
    questionNumber: "7",
    part: "a",
    title: "Locking Techniques for Concurrency Control",
    marks: 15,
    tags: ["Concurrency", "Locking", "2PL"],
    content: {
      fullQuestion: "Discuss Locking Techniques for concurrency control.",
      definition:
        "**Locking** is the most widely used technique for concurrency control in database systems. A **lock** is a variable associated with a data item that describes its current status with respect to possible operations applied to it. Before accessing a data item, a transaction must acquire an appropriate lock. If another transaction holds a conflicting lock, the requesting transaction must wait. Locking ensures that conflicting operations from different transactions are not executed concurrently, thereby maintaining database consistency and preventing anomalies like dirty reads, lost updates, and unrepeatable reads.",
      coreConcepts: [
        {
          heading: "Types of Locks",
          body: "**Shared Lock (S-Lock / Read Lock)**: Allows a transaction to READ a data item. Multiple transactions can hold shared locks on the same item simultaneously. **Exclusive Lock (X-Lock / Write Lock)**: Allows a transaction to both READ and WRITE a data item. Only one transaction can hold an exclusive lock at a time — no other lock (shared or exclusive) is compatible. **Update Lock (U-Lock)**: Intermediate lock — prevents deadlocks in scenarios where a transaction upgrades from read to write.",
        },
        {
          heading: "Lock Compatibility Matrix",
          body: "Determines whether a new lock request is compatible with existing locks. S+S: Compatible (both can read). S+X: Not Compatible. X+S: Not Compatible. X+X: Not Compatible. If incompatible, the requesting transaction must wait.",
        },
        {
          heading: "Two-Phase Locking (2PL) Protocol",
          body: "The most important locking protocol. A transaction must acquire all locks before releasing any lock. **Phase 1 (Growing Phase)**: Transaction can acquire locks but cannot release any. **Phase 2 (Shrinking Phase)**: Transaction can release locks but cannot acquire new ones. The point where the first lock is released is called the **Lock Point**. Theorem: Any schedule produced by 2PL is **conflict serializable**.",
        },
        {
          heading: "Variants of 2PL",
          body: "**Strict 2PL**: All exclusive (write) locks are held until the transaction commits/aborts. Prevents cascading rollbacks. **Rigorous 2PL**: All locks (shared and exclusive) are held until commit/abort. Produces serializable, recoverable schedules. **Conservative 2PL (Static 2PL)**: All locks acquired before the transaction begins. No deadlocks, but may cause starvation.",
        },
        {
          heading: "Deadlock in Locking",
          body: "**Deadlock**: A situation where two or more transactions are waiting for each other to release locks — forming a circular wait. Detection: Using **Wait-For Graph** — cycle = deadlock. Prevention: Use timeouts, wound-wait, or wait-die schemes. Recovery: Abort one transaction (victim selection).",
        },
      ],
      visual: {
        type: "table",
        title: "Lock Compatibility Matrix",
        tableData: {
          headers: ["Lock Requested →", "Shared (S)", "Exclusive (X)"],
          rows: [
            ["Current: None", "✅ GRANT", "✅ GRANT"],
            ["Current: Shared (S)", "✅ GRANT", "❌ WAIT"],
            ["Current: Exclusive (X)", "❌ WAIT", "❌ WAIT"],
          ],
        },
      },
      technicalImpl: [
        {
          heading: "Two-Phase Locking — Detailed Example",
          type: "example",
          content: `TRANSACTION T1 and T2 accessing items A and B:

TWO-PHASE LOCKING PROTOCOL:

T1 Schedule:
  Step 1: lock-X(A)     ← Growing Phase
  Step 2: READ(A)
  Step 3: A = A - 100
  Step 4: WRITE(A)
  Step 5: lock-X(B)     ← Growing Phase (Lock Point approaching)
  Step 6: unlock(A)     ← Shrinking Phase starts
  Step 7: READ(B)
  Step 8: B = B + 100
  Step 9: WRITE(B)
  Step 10: unlock(B)    ← Shrinking Phase ends

T2 must wait at Step 6 (lock-X(A)) until T1 releases A ✓

STRICT 2PL:
  All X-locks held until COMMIT → prevents dirty reads

RIGOROUS 2PL:
  All locks (S+X) held until COMMIT → fully serializable

DEADLOCK EXAMPLE:
  T1: lock-X(A) ... waits for lock-X(B)
  T2: lock-X(B) ... waits for lock-X(A)
  → CIRCULAR WAIT → DEADLOCK!

  Wait-For Graph:
  T1 → T2 (T1 waits for T2 to release B)
  T2 → T1 (T2 waits for T1 to release A)
  Cycle detected → Deadlock → Abort one transaction (T2)`,
        },
      ],
      keyPoints: [
        "**Shared Lock (S)**: Read only — multiple transactions can share.",
        "**Exclusive Lock (X)**: Read + Write — only one transaction at a time.",
        "**2PL Protocol**: Growing phase (acquire locks) + Shrinking phase (release locks).",
        "2PL guarantees **conflict serializability**.",
        "**Strict 2PL**: X-locks held till commit → prevents dirty reads & cascading rollbacks.",
        "**Rigorous 2PL**: All locks held till commit → strongest guarantee.",
        "**Deadlock**: Circular wait — detected using **Wait-For Graph**.",
        "Deadlock resolution: Abort the **victim transaction** and restart it.",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // QUESTION 7b
  // ─────────────────────────────────────────────
  {
    id: "7b",
    questionNumber: "7",
    part: "b",
    title: "Granularity and Multiple Granularity",
    marks: 15,
    tags: ["Concurrency", "Granularity", "Locking"],
    content: {
      fullQuestion: "What do you mean by Granularity? Discuss Multiple Granularity.",
      definition:
        "**Granularity** in database concurrency control refers to the **size of the data unit** on which a lock is applied. A lock can be placed on different sizes of data objects — from a single attribute (finest granularity) to an entire database (coarsest granularity). **Multiple Granularity Locking** is a protocol that allows transactions to lock data items at different granularity levels simultaneously — database, table, page, tuple, or attribute. It balances the trade-off between **concurrency** (fine granularity) and **locking overhead** (coarse granularity) by allowing transactions to lock the appropriate size of data based on their access pattern.",
      coreConcepts: [
        {
          heading: "Granularity Levels",
          body: "From coarsest to finest: **Database** → **Table (Relation)** → **Page (Block)** → **Tuple (Row)** → **Attribute (Column)**. Coarse granularity (e.g., lock entire table): Low overhead, low concurrency — other transactions blocked from entire table. Fine granularity (e.g., lock individual row): High concurrency, high overhead — many locks needed.",
        },
        {
          heading: "Intention Locks",
          body: "To support multiple granularity, three **intention lock modes** are introduced: **IS (Intention Shared)**: The transaction intends to set a Shared lock on some descendant node. **IX (Intention Exclusive)**: The transaction intends to set an Exclusive lock on some descendant node. **SIX (Shared + Intention Exclusive)**: The node is locked in Shared mode and the transaction intends to set Exclusive locks on some descendants. Before locking a node, appropriate intention locks must be set on its ancestors.",
        },
        {
          heading: "Multiple Granularity Protocol Rules",
          body: "**Rule 1**: A transaction must observe the lock compatibility matrix (including intention locks). **Rule 2**: The root of the granularity tree must be locked first. **Rule 3**: A node can be locked in S or IS mode only if the parent is locked in IS or IX mode. **Rule 4**: A node can be locked in X, IX, or SIX mode only if the parent is locked in IX or SIX mode. **Rule 5**: Locks are released bottom-up (fine → coarse).",
        },
      ],
      visual: {
        type: "diagram",
        title: "Multiple Granularity Lock Hierarchy",
        diagramLines: [
          "         ┌─────────────────────────────────────┐",
          "         │             DATABASE                │  ← Coarsest",
          "         └──────────────┬──────────────────────┘",
          "                        │",
          "         ┌──────────────┴──────────────┐",
          "         │                              │",
          "  ┌──────────────┐             ┌──────────────┐",
          "  │  TABLE: R1   │             │  TABLE: R2   │",
          "  └──────┬───────┘             └──────────────┘",
          "         │",
          "  ┌──────┴───────┐",
          "  │              │",
          "┌──────┐      ┌──────┐",
          "│Page 1│      │Page 2│   ← Pages (Blocks)",
          "└───┬──┘      └──────┘",
          "    │",
          "┌────────────────────┐",
          "│ Row 1 | Row 2 | .. │  ← Tuples (Finest)",
          "└────────────────────┘",
          "",
          "LOCKING EXAMPLE:",
          "T1 wants to read entire Table R1:",
          "  Lock DB with IS → Lock R1 with S",
          "T2 wants to update Row 1 in R1:",
          "  Lock DB with IX → Lock R1 with IX → Lock Page1 with IX → Lock Row1 with X",
          "T1 (IS on R1) and T2 (IX on R1): Compatible? Check matrix → YES ✓",
        ],
      },
      technicalImpl: [
        {
          heading: "Multiple Granularity Compatibility Matrix",
          type: "example",
          content: `LOCK COMPATIBILITY MATRIX (Multiple Granularity):

          Requested →
Current ↓   IS    IX    S    SIX    X
──────────────────────────────────────────
IS          ✅    ✅   ✅    ✅    ❌
IX          ✅    ✅   ❌    ❌    ❌
S           ✅    ❌   ✅    ❌    ❌
SIX         ✅    ❌   ❌    ❌    ❌
X           ❌    ❌   ❌    ❌    ❌

LOCK PROTOCOL (How to Lock):
1. To get S or IS lock on a node → Parent must be IS or IX
2. To get X, IX, or SIX lock on a node → Parent must be IX or SIX
3. Always lock top-down (DB → Table → Page → Row)
4. Always unlock bottom-up (Row → Page → Table → DB)

EXAMPLE — Multiple Granularity in Action:
Transaction T1: Read entire STUDENT table
  1. Lock DATABASE with IS
  2. Lock STUDENT table with S
  → Done. All rows readable, minimal overhead.

Transaction T2: Update specific row (Roll=101) in STUDENT
  1. Lock DATABASE with IX
  2. Lock STUDENT table with IX
  3. Lock specific PAGE containing Roll=101 with IX
  4. Lock TUPLE Roll=101 with X
  → Only one row locked. High concurrency!

T1 (IS on DB, S on table) + T2 (IX on DB, IX on table):
  IS+IX on DB: Compatible ✓
  S+IX on STUDENT: Not compatible ✗ → T2 waits

GRANULARITY TRADE-OFF:
┌───────────────┬──────────────┬─────────────────┐
│ Granularity   │ Concurrency  │ Lock Overhead   │
├───────────────┼──────────────┼─────────────────┤
│ Database      │ Very Low     │ Very Low        │
│ Table         │ Low          │ Low             │
│ Page          │ Medium       │ Medium          │
│ Row/Tuple     │ High         │ High            │
│ Attribute     │ Very High    │ Very High       │
└───────────────┴──────────────┴─────────────────┘`,
        },
      ],
      keyPoints: [
        "**Granularity**: Size of the data unit being locked — database, table, page, row, attribute.",
        "**Coarse granularity**: Low concurrency, low overhead (lock entire table).",
        "**Fine granularity**: High concurrency, high overhead (lock individual rows).",
        "**Multiple Granularity**: Locks at different levels simultaneously.",
        "**IS Lock**: Intends to set Shared lock on a descendant.",
        "**IX Lock**: Intends to set Exclusive lock on a descendant.",
        "**SIX Lock**: Current node is Shared + intends Exclusive on descendant.",
        "Locking order: **Top-down** (DB → Table → Row) | Unlocking: **Bottom-up**.",
        "Multiple granularity balances the trade-off between concurrency and overhead.",
      ],
    },
  },
];

export const questionGroups = [
  { number: "1", title: "Short Questions", description: "Fundamental DBMS Concepts", parts: ["a","b","c","d","e","f","g"] },
  { number: "2", title: "Core Concepts", description: "Architecture, Algebra & Normalization", parts: ["a","b","c","d","e"] },
  { number: "3", title: "ER Modeling", description: "ER Diagrams & EER Concepts", parts: ["a","b"] },
  { number: "4", title: "SQL & Constraints", description: "Integrity Constraints & PL/SQL", parts: ["a","b"] },
  { number: "5", title: "Normalization Deep Dive", description: "Minimal Cover & Lossless Join", parts: ["a","b"] },
  { number: "6", title: "Transactions", description: "ACID Properties & Serializability", parts: ["a","b"] },
  { number: "7", title: "Concurrency Control", description: "Locking & Granularity", parts: ["a","b"] },
];
