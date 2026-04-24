import React from 'react';

const Q2a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      2a. What is Three Schema Architecture? Discuss in detail.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        The <strong>Three Schema Architecture</strong> (also known as the ANSI/SPARC architecture) is a framework for designing database systems that separates the database into three distinct levels of abstraction: the <strong>External Level</strong> (user views), the <strong>Conceptual Level</strong> (logical design), and the <strong>Internal Level</strong> (physical storage). Proposed by the ANSI Standards Planning and Requirements Committee in 1975, this architecture provides both data abstraction and data independence.
      </p>
      <p className="text-gray-700">
        The primary objective of the three-schema architecture is to <strong>separate the user applications from the physical database</strong>. Users interact with their customized external views, the DBA manages the overall logical structure at the conceptual level, and the DBMS handles the actual storage details at the internal level. The mappings between these levels ensure that changes at one level do not affect other levels — providing both physical and logical data independence.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of the three-schema architecture like a <strong>university library system</strong>. The <strong>External Level</strong> is the student catalog interface — students see only book titles and availability. The <strong>Conceptual Level</strong> is the librarian's complete catalog — all books, authors, publishers, categories, and relationships between them. The <strong>Internal Level</strong> is the physical shelving system — which shelf, which aisle, which rack each book sits on. Each level serves a different audience with a different perspective of the same data.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — Architecture Diagram</h4>
      <div className="font-mono text-sm bg-gray-100 p-4 rounded mt-2">
        <p className="font-bold mb-2 text-center">THREE-LEVEL DBMS ARCHITECTURE (ANSI/SPARC)</p>
        <p className="text-center">+-------------+  +-------------+  +-------------</p>
        <p className="text-center">| External    |  | External    |  | External    |</p>
        <p className="text-center">| View 1      |  | View 2      |  | View 3      |</p>
        <p className="text-center">| (Student)   |  | (Faculty)   |  | (Admin)     |</p>
        <p className="text-center">+------+------+  +------+------+  +------+------</p>
        <p className="text-center">       |               |               |</p>
        <p className="text-center">  [External/Conceptual Mapping]</p>
        <p className="text-center">       +---------------+---------------+</p>
        <p className="text-center">                       |</p>
        <p className="text-center">   +-------------------+-------------------+</p>
        <p className="text-center">   |        CONCEPTUAL LEVEL               |</p>
        <p className="text-center">   |  Complete logical description:         |</p>
        <p className="text-center">   |  All entities, relationships,          |</p>
        <p className="text-center">   |  constraints, security rules           |</p>
        <p className="text-center">   +-------------------+-------------------+</p>
        <p className="text-center">                       |</p>
        <p className="text-center">       [Conceptual/Internal Mapping]</p>
        <p className="text-center">                       |</p>
        <p className="text-center">   +-------------------+-------------------+</p>
        <p className="text-center">   |        INTERNAL LEVEL                 |</p>
        <p className="text-center">   |  Physical storage: B-trees, indexes,  |</p>
        <p className="text-center">   |  file organization, compression        |</p>
        <p className="text-center">   +---------------------------------------+</p>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Level</th>
            <th className="border border-gray-300 px-4 py-2">Purpose</th>
            <th className="border border-gray-300 px-4 py-2">Managed By</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">External</td><td className="border border-gray-300 px-4 py-2">Individual user views</td><td className="border border-gray-300 px-4 py-2">Applications/Users</td><td className="border border-gray-300 px-4 py-2">Student portal shows only grades</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Conceptual</td><td className="border border-gray-300 px-4 py-2">Complete logical schema</td><td className="border border-gray-300 px-4 py-2">DBA</td><td className="border border-gray-300 px-4 py-2">All tables, PKs, FKs, constraints</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Internal</td><td className="border border-gray-300 px-4 py-2">Physical storage details</td><td className="border border-gray-300 px-4 py-2">DBMS Engine</td><td className="border border-gray-300 px-4 py-2">B+ tree indexes, page size, buffer</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: University Database — All Three Levels</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- INTERNAL LEVEL: Physical storage configuration</p>
        <p>CREATE INDEX idx_student_roll ON Student(RollNo);</p>
        <p>-- Data pages: 8KB, clustered index on RollNo</p>
        <p>CREATE INDEX idx_faculty_dept ON Faculty(DeptID);</p>
        <p className="mt-2">-- CONCEPTUAL LEVEL: Logical schema (complete)</p>
        <p>CREATE TABLE Student (RollNo INT PRIMARY KEY, Name VARCHAR(50), DeptID INT,</p>
        <p>  FOREIGN KEY (DeptID) REFERENCES Department(DeptID));</p>
        <p>CREATE TABLE Department (DeptID INT PRIMARY KEY, Dname VARCHAR(30));</p>
        <p>CREATE TABLE Faculty (FacID INT PRIMARY KEY, FName VARCHAR(50), DeptID INT,</p>
        <p>  FOREIGN KEY (DeptID) REFERENCES Department(DeptID));</p>
        <p className="mt-2">-- EXTERNAL LEVEL 1: Student View (limited access)</p>
        <p>CREATE VIEW StudentPortal AS SELECT Name, DeptID FROM Student;</p>
        <p>-- EXTERNAL LEVEL 2: Faculty View</p>
        <p>CREATE VIEW FacultyView AS SELECT FName, Dname FROM Faculty F</p>
        <p>  JOIN Department D ON F.DeptID = D.DeptID;</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Data Independence Through 3-Schema</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Physical change: Add new index → only Internal Level changes</p>
        <p>CREATE INDEX idx_student_name ON Student(Name);</p>
        <p>-- Conceptual and External levels UNAFFECTED ✅</p>
        <p className="mt-2">-- Logical change: Add Email column → only Conceptual changes</p>
        <p>ALTER TABLE Student ADD Email VARCHAR(100);</p>
        <p>-- StudentPortal view still works (only shows Name, DeptID) ✅</p>
        <p>-- FacultyView still works (unaffected) ✅</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>3 Levels: External (user views), Conceptual (logical schema), Internal (physical storage)</li>
        <li>External/Conceptual Mapping → Logical Data Independence</li>
        <li>Conceptual/Internal Mapping → Physical Data Independence</li>
        <li>Multiple external views, single conceptual schema, single internal schema</li>
        <li>Proposed by ANSI/SPARC committee in 1975</li>
        <li>Separates what users see from how data is physically stored</li>
      </ul>
    </div>
  </div>
);

const Q2b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      2b. Discuss basic operations of Relational Algebra with examples.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Relational Algebra</strong> is a formal, procedural query language that operates on relations (tables) as input and produces new relations as output. It provides a theoretical foundation for SQL and consists of a set of operations that can be combined to form complex queries. Relational algebra operations are classified into two categories: <strong>Fundamental Operations</strong> (Selection, Projection, Union, Set Difference, Cartesian Product, Rename) and <strong>Additional Operations</strong> (Intersection, Natural Join, Division).
      </p>
      <p className="text-gray-700">
        Each operation takes one or two relations as input and produces a new relation as output, following the property of <strong>closure</strong> — the output of one operation can be used as input to another. This allows operations to be composed into complex expressions, similar to how arithmetic operations can be combined in mathematics.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — All Operations</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2">Operation</th>
            <th className="border border-gray-300 px-3 py-2">Symbol</th>
            <th className="border border-gray-300 px-3 py-2">Purpose</th>
            <th className="border border-gray-300 px-3 py-2">SQL Equivalent</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-3 py-2 font-semibold">Select</td><td className="border border-gray-300 px-3 py-2">σ (Sigma)</td><td className="border border-gray-300 px-3 py-2">Filter rows</td><td className="border border-gray-300 px-3 py-2">WHERE</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-semibold">Project</td><td className="border border-gray-300 px-3 py-2">π (Pi)</td><td className="border border-gray-300 px-3 py-2">Choose columns</td><td className="border border-gray-300 px-3 py-2">SELECT col1, col2</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2 font-semibold">Union</td><td className="border border-gray-300 px-3 py-2">∪</td><td className="border border-gray-300 px-3 py-2">Combine tuples (no duplicates)</td><td className="border border-gray-300 px-3 py-2">UNION</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-semibold">Set Difference</td><td className="border border-gray-300 px-3 py-2">−</td><td className="border border-gray-300 px-3 py-2">Tuples in R1 but not R2</td><td className="border border-gray-300 px-3 py-2">EXCEPT / MINUS</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2 font-semibold">Cartesian Product</td><td className="border border-gray-300 px-3 py-2">×</td><td className="border border-gray-300 px-3 py-2">All combinations</td><td className="border border-gray-300 px-3 py-2">CROSS JOIN</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-semibold">Rename</td><td className="border border-gray-300 px-3 py-2">ρ (Rho)</td><td className="border border-gray-300 px-3 py-2">Rename relation/attributes</td><td className="border border-gray-300 px-3 py-2">AS alias</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2 font-semibold">Intersection</td><td className="border border-gray-300 px-3 py-2">∩</td><td className="border border-gray-300 px-3 py-2">Common tuples</td><td className="border border-gray-300 px-3 py-2">INTERSECT</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-semibold">Natural Join</td><td className="border border-gray-300 px-3 py-2">⋈</td><td className="border border-gray-300 px-3 py-2">Join on common attributes</td><td className="border border-gray-300 px-3 py-2">JOIN ... USING</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Selection &amp; Projection</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Relation: Employee(EID, Name, Dept, Salary)</p>
        <p>-- Data: (1,Rahul,IT,50000), (2,Priya,HR,45000), (3,Amit,IT,60000)</p>
        <p className="mt-2">-- SELECT: Find IT employees</p>
        <p>-- Rel.Algebra: σ_Dept=&apos;IT&apos;(Employee)</p>
        <p>-- Result: (1,Rahul,IT,50000), (3,Amit,IT,60000)</p>
        <p>SELECT * FROM Employee WHERE Dept = &apos;IT&apos;;</p>
        <p className="mt-2">-- PROJECT: Get only names</p>
        <p>-- Rel.Algebra: π_Name(Employee)</p>
        <p>-- Result: (Rahul), (Priya), (Amit)</p>
        <p>SELECT Name FROM Employee;</p>
        <p className="mt-2">-- COMBINED: Names of IT employees</p>
        <p>-- Rel.Algebra: π_Name(σ_Dept=&apos;IT&apos;(Employee))</p>
        <p>-- Result: (Rahul), (Amit)</p>
        <p>SELECT Name FROM Employee WHERE Dept = &apos;IT&apos;;</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Union, Set Difference, Join</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- UNION: All cities from Student UNION Faculty</p>
        <p>-- π_City(Student) ∪ π_City(Faculty)</p>
        <p>SELECT City FROM Student UNION SELECT City FROM Faculty;</p>
        <p className="mt-2">-- SET DIFFERENCE: Students NOT in Delhi</p>
        <p>-- σ_City&lt;&gt;&apos;Delhi&apos;(Student)</p>
        <p>SELECT * FROM Student WHERE City != &apos;Delhi&apos;;</p>
        <p className="mt-2">-- NATURAL JOIN: Employee ⋈ Department</p>
        <p>-- Joins on common attribute DeptID</p>
        <p>SELECT * FROM Employee NATURAL JOIN Department;</p>
        <p className="mt-2">-- CARTESIAN PRODUCT: Every Student × every Course</p>
        <p>SELECT * FROM Student CROSS JOIN Course;</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Relational Algebra = Procedural query language (theoretical basis for SQL)</li>
        <li>σ (Selection) = Row filtering; π (Projection) = Column filtering</li>
        <li>6 Fundamental: σ, π, ∪, −, ×, ρ</li>
        <li>3 Additional: ∩, ⋈, ÷ (derivable from fundamental operations)</li>
        <li>Closure property: Output of any operation is also a relation</li>
        <li>Union Compatibility: Both relations must have same arity and attribute domains</li>
      </ul>
    </div>
  </div>
);

const Q2c: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      2c. What do you mean by Normalization? Discuss 1NF, 2NF, and 3NF.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Normalization</strong> is the systematic process of organizing data in a database to reduce redundancy and eliminate insertion, update, and deletion anomalies. It involves decomposing large, complex tables into smaller, well-structured tables and establishing relationships between them through foreign keys. Normalization is achieved through a series of rules called <strong>Normal Forms</strong>, each progressively stricter.
      </p>
      <p className="text-gray-700">
        The concept was introduced by <strong>Edgar F. Codd</strong> in 1970. The main goal is to ensure that every non-key attribute depends on the key, the whole key, and nothing but the key — a principle humorously called the "Oath of the Database Designer." Normalization is based on the theory of <strong>functional dependencies</strong> and provides a step-by-step approach to better database design.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — Normal Forms</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Normal Form</th>
            <th className="border border-gray-300 px-4 py-2">Rule</th>
            <th className="border border-gray-300 px-4 py-2">Eliminates</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">1NF</td><td className="border border-gray-300 px-4 py-2">Atomic values, no repeating groups</td><td className="border border-gray-300 px-4 py-2">Multi-valued attributes</td><td className="border border-gray-300 px-4 py-2">Split comma-separated phones into rows</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">2NF</td><td className="border border-gray-300 px-4 py-2">1NF + No partial dependencies</td><td className="border border-gray-300 px-4 py-2">Partial FDs on composite keys</td><td className="border border-gray-300 px-4 py-2">Separate DeptName from {'{StuID,CourseID}'} table</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">3NF</td><td className="border border-gray-300 px-4 py-2">2NF + No transitive dependencies</td><td className="border border-gray-300 px-4 py-2">Non-prime → Non-prime FDs</td><td className="border border-gray-300 px-4 py-2">Separate DeptName into Dept table</td></tr>
          </tbody>
        </table>
      </div>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-3">
        <p className="font-bold">Progression: UNF → 1NF → 2NF → 3NF → BCNF → 4NF → 5NF</p>
        <p>Each level is stricter. A relation in 3NF is automatically in 2NF and 1NF.</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: 1NF — Atomic Values</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- NOT 1NF (repeating group):</p>
        <p>-- Student(101, &apos;Rahul&apos;, &apos;DBMS, OS, CN&apos;)  ← Multiple values in one cell!</p>
        <p className="mt-2">-- 1NF (atomic values):</p>
        <p>CREATE TABLE Enrollment (</p>
        <p>  StuID INT, CourseID VARCHAR(10),</p>
        <p>  PRIMARY KEY (StuID, CourseID)  -- Composite PK</p>
        <p>);</p>
        <p>INSERT INTO Enrollment VALUES (101, &apos;DBMS&apos;);</p>
        <p>INSERT INTO Enrollment VALUES (101, &apos;OS&apos;);</p>
        <p>INSERT INTO Enrollment VALUES (101, &apos;CN&apos;);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: 2NF &amp; 3NF — Step by Step</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- NOT 2NF: EmpProj(EmpID, ProjID, EmpName, ProjName, Hours)</p>
        <p>-- PK: {'{EmpID, ProjID}'} (composite)</p>
        <p>-- Partial FD: EmpID → EmpName (EmpName depends on PART of key)</p>
        <p>-- Partial FD: ProjID → ProjName (ProjName depends on PART of key)</p>
        <p className="mt-2">-- 2NF Decomposition:</p>
        <p>CREATE TABLE Employee (EmpID INT PK, EmpName VARCHAR(50));</p>
        <p>CREATE TABLE Project (ProjID INT PK, ProjName VARCHAR(50));</p>
        <p>CREATE TABLE WorksOn (EmpID INT, ProjID INT, Hours INT,</p>
        <p>  PRIMARY KEY(EmpID,ProjID));</p>
        <p className="mt-2">-- NOT 3NF: Emp(EmpID, Name, DeptID, DeptName)</p>
        <p>-- Transitive FD: EmpID → DeptID → DeptName</p>
        <p>-- 3NF Decomposition:</p>
        <p>CREATE TABLE Employee2 (EmpID INT PK, Name VARCHAR(50), DeptID INT);</p>
        <p>CREATE TABLE Department (DeptID INT PK, DeptName VARCHAR(50));</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Normalization = Process of reducing redundancy and eliminating anomalies</li>
        <li>1NF: All values must be atomic (no repeating groups, no multi-values)</li>
        <li>2NF: 1NF + No partial dependency (non-key must depend on FULL key)</li>
        <li>3NF: 2NF + No transitive dependency (non-key must not determine non-key)</li>
        <li>Introduced by E.F. Codd; based on Functional Dependency theory</li>
        <li>Each normal form is a superset of the previous one</li>
      </ul>
    </div>
  </div>
);

const Q2d: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      2d. Discuss various states of a transaction.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A transaction passes through several <strong>states</strong> during its lifecycle from initiation to completion. These states describe the current status of the transaction and determine what actions the DBMS recovery manager must take in case of a failure. Understanding transaction states is crucial for implementing proper recovery and concurrency control mechanisms.
      </p>
      <p className="text-gray-700">
        The five main states of a transaction are: <strong>Active</strong>, <strong>Partially Committed</strong>, <strong>Committed</strong>, <strong>Failed</strong>, and <strong>Terminated</strong>. A transaction starts in the Active state, moves to Partially Committed after its last statement, then to Committed (if successful) or Failed (if an error occurs). The Terminated state is the final cleanup state.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — State Diagram</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold mb-2">Transaction State Diagram:</p>
        <p>                  [BEGIN TRANSACTION]</p>
        <p>                         |</p>
        <p>                    ACTIVE STATE</p>
        <p>                    (executing ops)</p>
        <p>                    /          \</p>
        <p>              (success)     (error)</p>
        <p>                  /              \</p>
        <p>      PARTIALLY COMMITTED     FAILED</p>
        <p>        (last statement)      (error/rollback)</p>
        <p>           /        \              |</p>
        <p>     (commit)   (error)     ROLLBACK/ABORT</p>
        <p>         /            \           |</p>
        <p>    COMMITTED        FAILED    TERMINATED</p>
        <p>    (permanent)    (cleanup)   (released)</p>
        <p>        |               |</p>
        <p>    TERMINATED      TERMINATED</p>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">State</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Next State(s)</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Active</td><td className="border border-gray-300 px-4 py-2">Transaction is executing operations</td><td className="border border-gray-300 px-4 py-2">Partially Committed or Failed</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Partially Committed</td><td className="border border-gray-300 px-4 py-2">Last statement executed, awaiting commit</td><td className="border border-gray-300 px-4 py-2">Committed or Failed</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Committed</td><td className="border border-gray-300 px-4 py-2">Changes are permanent (durability)</td><td className="border border-gray-300 px-4 py-2">Terminated</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Failed</td><td className="border border-gray-300 px-4 py-2">Error occurred, cannot continue</td><td className="border border-gray-300 px-4 py-2">Terminated (after rollback)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Terminated</td><td className="border border-gray-300 px-4 py-2">Transaction complete, resources released</td><td className="border border-gray-300 px-4 py-2">— (final state)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Successful Transaction State Flow</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- State flow: Active → Partially Committed → Committed → Terminated</p>
        <p>BEGIN TRANSACTION;              -- → ACTIVE</p>
        <p>UPDATE Account SET Bal = Bal - 5000 WHERE AccNo=&apos;A&apos;; -- Still ACTIVE</p>
        <p>UPDATE Account SET Bal = Bal + 5000 WHERE AccNo=&apos;B&apos;; -- Still ACTIVE</p>
        <p>-- Last statement done → PARTIALLY COMMITTED</p>
        <p>COMMIT;                         -- → COMMITTED → TERMINATED</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Failed Transaction State Flow</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- State flow: Active → Failed → Terminated</p>
        <p>BEGIN TRANSACTION;              -- → ACTIVE</p>
        <p>UPDATE Account SET Bal = Bal - 5000 WHERE AccNo=&apos;A&apos;;</p>
        <p>-- System crash / Constraint violation! → FAILED</p>
        <p>ROLLBACK;                       -- Undo changes → TERMINATED</p>
        <p>-- All changes from this transaction are reverted</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>5 States: Active → Partially Committed → Committed → Failed → Terminated</li>
        <li>Active: Transaction is executing its operations</li>
        <li>Partially Committed: Last statement executed, waiting for final commit</li>
        <li>Committed: All changes permanent (satisfies Durability)</li>
        <li>Failed: Error detected, transaction must be rolled back</li>
        <li>Terminated: Cleanup complete, all resources released</li>
      </ul>
    </div>
  </div>
);

const Q2e: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      2e. Various problems encountered during concurrency control.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        When multiple transactions execute simultaneously (concurrently) and access the same data items, several <strong>concurrency problems</strong> can arise if proper control mechanisms are not in place. These problems compromise data consistency and integrity. The main problems are: <strong>Lost Update Problem</strong>, <strong>Dirty Read Problem</strong>, <strong>Unrepeatable Read Problem</strong>, and <strong>Phantom Read Problem</strong>.
      </p>
      <p className="text-gray-700">
        These problems occur because the interleaving of operations from different transactions can create situations where one transaction's operations interfere with another's. Concurrency control mechanisms like locking protocols, timestamp ordering, and serializability enforcement are designed specifically to prevent these problems.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Problem</th>
            <th className="border border-gray-300 px-4 py-2">Cause</th>
            <th className="border border-gray-300 px-4 py-2">Consequence</th>
            <th className="border border-gray-300 px-4 py-2">Solution</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Lost Update</td><td className="border border-gray-300 px-4 py-2">Two transactions update same item, one overwrites other</td><td className="border border-gray-300 px-4 py-2">One update lost</td><td className="border border-gray-300 px-4 py-2">Exclusive locks</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Dirty Read</td><td className="border border-gray-300 px-4 py-2">Reading uncommitted data from another transaction</td><td className="border border-gray-300 px-4 py-2">Reading invalid data</td><td className="border border-gray-300 px-4 py-2">Read committed isolation</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Unrepeatable Read</td><td className="border border-gray-300 px-4 py-2">Same query gives different results within a transaction</td><td className="border border-gray-300 px-4 py-2">Inconsistent reads</td><td className="border border-gray-300 px-4 py-2">Shared locks</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Phantom Read</td><td className="border border-gray-300 px-4 py-2">New rows appear/disappear between reads</td><td className="border border-gray-300 px-4 py-2">Unexpected rows in result</td><td className="border border-gray-300 px-4 py-2">Range locks / Serializable</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Lost Update Problem</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Account A has Balance = 10000</p>
        <p>-- T1: read(A=10000), T2: read(A=10000)</p>
        <p>-- T1: A=A-1000=9000,  T2: A=A-2000=8000</p>
        <p>-- T1: write(A=9000),  T2: write(A=8000)</p>
        <p>-- Final: A=8000 — T1&apos;s update is LOST! ❌</p>
        <p className="mt-2">-- Solution: Use locking</p>
        <p>SELECT Balance INTO @bal FROM Account WHERE AccNo=&apos;A&apos; FOR UPDATE;</p>
        <p>-- T2 must WAIT until T1 releases the lock ✅</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Dirty Read Problem</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- T1: Updates A from 1000 to 2000 (NOT committed yet)</p>
        <p>-- T2: Reads A = 2000 (dirty read!)</p>
        <p>-- T1: ROLLBACK → A reverts to 1000</p>
        <p>-- T2 used value 2000 which never actually existed! ❌</p>
        <p className="mt-2">-- Solution: SET TRANSACTION ISOLATION LEVEL READ COMMITTED;</p>
        <p>-- T2 can only read data that has been committed ✅</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Lost Update: Concurrent writes, one overwrites the other</li>
        <li>Dirty Read: Reading uncommitted (tentative) data from another transaction</li>
        <li>Unrepeatable Read: Same query gives different results in same transaction</li>
        <li>Phantom Read: New rows appear/disappear between repeated queries</li>
        <li>Solutions: Locking protocols, isolation levels, serializability</li>
        <li>SQL Isolation Levels: Read Uncommitted → Read Committed → Repeatable Read → Serializable</li>
      </ul>
    </div>
  </div>
);

export const question2Answers = [
  { id: '2a', title: '2a. Three Schema Architecture', component: Q2a },
  { id: '2b', title: '2b. Relational Algebra Operations', component: Q2b },
  { id: '2c', title: '2c. Normalization: 1NF, 2NF, 3NF', component: Q2c },
  { id: '2d', title: '2d. Transaction States', component: Q2d },
  { id: '2e', title: '2e. Concurrency Control Problems', component: Q2e },
];
