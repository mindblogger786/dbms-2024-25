import React from 'react';

const Q1a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1a. Discuss the term Data Independence.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Data Independence</strong> is the ability to modify the schema (structure) of a database at one level of the database architecture without affecting the schema at the next higher level. It is one of the most fundamental advantages of the database approach over traditional file systems. Data independence ensures that application programs and user views remain unaffected when the underlying database structure changes, thereby reducing maintenance costs and improving system flexibility.
      </p>
      <p className="text-gray-700">
        The concept of data independence arises directly from the <strong>three-schema architecture</strong> (ANSI/SPARC model) of DBMS. There are two types: <strong>Physical Data Independence</strong> — the ability to change the internal (physical) schema without affecting the conceptual schema; and <strong>Logical Data Independence</strong> — the ability to change the conceptual schema without affecting the external schema (user views). Physical data independence is relatively easy to achieve, while logical data independence is more difficult because it affects how users and applications perceive data.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of data independence like the <strong>wall sockets in your home</strong>. You can change the wiring behind the wall (physical level), change the electrical panel (conceptual level), but the plug on your device (external level) stays the same. The mapping between levels acts as an adapter that translates changes. If you replace old copper wiring with new fiber-optic cables, your devices still plug into the same sockets — that is physical data independence.
      </p>
      <p className="text-gray-700">
        In practical terms: if a DBA adds a new index to speed up queries (physical change), no application code needs to change. If a DBA splits a table into two (logical change), existing views can still present the data as if it were one table through appropriate mappings. The DBMS handles the translation transparently.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 px-4 py-2">Physical Data Independence</th>
            <th className="border border-gray-300 px-4 py-2">Logical Data Independence</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Change At</td><td className="border border-gray-300 px-4 py-2">Internal Schema</td><td className="border border-gray-300 px-4 py-2">Conceptual Schema</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Unaffected Level</td><td className="border border-gray-300 px-4 py-2">Conceptual Schema</td><td className="border border-gray-300 px-4 py-2">External Schema (Views)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Difficulty</td><td className="border border-gray-300 px-4 py-2">Easy to achieve</td><td className="border border-gray-300 px-4 py-2">Hard to achieve</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Example</td><td className="border border-gray-300 px-4 py-2">Adding index, changing file org.</td><td className="border border-gray-300 px-4 py-2">Adding column, splitting table</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Mechanism</td><td className="border border-gray-300 px-4 py-2">Conceptual/Internal Mapping</td><td className="border border-gray-300 px-4 py-2">External/Conceptual Mapping</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Physical Data Independence</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Original: Table stored as heap file (no order)</p>
        <p>-- Change: Add B+ tree index for faster lookup</p>
        <p>CREATE INDEX idx_emp_salary ON Employee(Salary);</p>
        <p className="mt-2">-- Physical storage changed (index structure created)</p>
        <p>-- But all queries still work exactly the same!</p>
        <p>SELECT * FROM Employee WHERE Salary &gt; 50000;</p>
        <p>-- Application code unchanged ✅ Physical Data Independence</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Logical Data Independence</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Original Schema: Student(RollNo, Name, Address, Marks)</p>
        <p>-- View: CREATE VIEW StuInfo AS SELECT RollNo, Name FROM Student;</p>
        <p className="mt-2">-- Schema Change: Split into two tables</p>
        <p>CREATE TABLE Stu_Personal(RollNo INT PK, Name VARCHAR(50), Address VARCHAR(100));</p>
        <p>CREATE TABLE Stu_Academic(RollNo INT FK, Marks INT);</p>
        <p className="mt-2">-- Recreate the view using JOIN</p>
        <p>CREATE VIEW StuInfo AS SELECT RollNo, Name FROM Stu_Personal;</p>
        <p>-- Applications using StuInfo still work! ✅ Logical Data Independence</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Data Independence = Change schema at one level without affecting higher levels</li>
        <li>Two types: Physical (easier) and Logical (harder)</li>
        <li>Achieved through mapping between schema levels in 3-level architecture</li>
        <li>Physical: Change storage/indexing without changing logical structure</li>
        <li>Logical: Change tables/relationships without changing user views</li>
        <li>Reduces application maintenance cost and increases flexibility</li>
      </ul>
    </div>
  </div>
);

const Q1b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1b. What do you mean by Composite Attributes?
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Composite Attribute</strong> is an attribute in an Entity-Relationship (ER) model that can be divided into smaller sub-parts, each representing a more basic attribute with independent meaning. Unlike simple (atomic) attributes that cannot be divided further, composite attributes are structured and consist of multiple component attributes that together form a meaningful whole. In ER diagrams, composite attributes are represented by an <strong>oval that branches into sub-ovals</strong>.
      </p>
      <p className="text-gray-700">
        Composite attributes allow database designers to capture the hierarchical nature of real-world data. For example, a person's <strong>Address</strong> is naturally composite — it consists of House Number, Street, City, State, and Pincode. Each component has independent meaning and can be queried separately. The DBMS can either store the composite attribute as a single column or decompose it into multiple columns in the relational model.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of a composite attribute like a <strong>mailing address on an envelope</strong>. The entire address "123 Main St, New Delhi, 110001" is one piece of information, but it has logical parts: house number (123), street (Main St), city (New Delhi), and pincode (110001). You might need to search by city alone, or sort by pincode — so having the components separately is useful.
      </p>
      <p className="text-gray-700">
        Composite attributes contrast with <strong>Simple (Atomic) Attributes</strong> which cannot be decomposed (e.g., Age, Roll Number). They also differ from <strong>Multi-valued Attributes</strong> (multiple values for one entity, like phone numbers) and <strong>Derived Attributes</strong> (computed from other attributes, like Age from DOB). A composite attribute has exactly one value per entity, but that value has internal structure.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold mb-2">ER Diagram — Composite Attribute "Address":</p>
        <p>         [Student] (Rectangle = Entity)</p>
        <p>             |</p>
        <p>        (Address) (Oval = Composite Attribute)</p>
        <p>        /   |   \</p>
        <p>   (Street) (City) (Pincode) (Sub-ovals = Components)</p>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Attribute Type</th>
            <th className="border border-gray-300 px-4 py-2">Can Be Divided?</th>
            <th className="border border-gray-300 px-4 py-2">ER Symbol</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Simple/Atomic</td><td className="border border-gray-300 px-4 py-2">No</td><td className="border border-gray-300 px-4 py-2">Plain oval</td><td className="border border-gray-300 px-4 py-2">Age, RollNo</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Composite</td><td className="border border-gray-300 px-4 py-2">Yes</td><td className="border border-gray-300 px-4 py-2">Oval with sub-ovals</td><td className="border border-gray-300 px-4 py-2">Address, Name, DOB</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Multi-valued</td><td className="border border-gray-300 px-4 py-2">Multiple values</td><td className="border border-gray-300 px-4 py-2">Double oval</td><td className="border border-gray-300 px-4 py-2">Phone, Email</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Derived</td><td className="border border-gray-300 px-4 py-2">Computed</td><td className="border border-gray-300 px-4 py-2">Dashed oval</td><td className="border border-gray-300 px-4 py-2">Age from DOB</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Name as Composite Attribute</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Composite: Name = FirstName + MiddleName + LastName</p>
        <p>CREATE TABLE Employee (</p>
        <p>  EmpID INT PRIMARY KEY,</p>
        <p>  FirstName VARCHAR(30) NOT NULL,  -- Component 1</p>
        <p>  MiddleName VARCHAR(30),          -- Component 2</p>
        <p>  LastName VARCHAR(30) NOT NULL,   -- Component 3</p>
        <p>  Salary DECIMAL(10,2)</p>
        <p>);</p>
        <p className="mt-2">-- Query using component attributes</p>
        <p>SELECT FirstName, LastName FROM Employee WHERE LastName = &apos;Sharma&apos;;</p>
        <p>-- Or display as full composite</p>
        <p>SELECT CONCAT(FirstName, &apos; &apos;, LastName) AS FullName FROM Employee;</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Address as Composite Attribute</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Composite: Address = HouseNo + Street + City + State + PinCode</p>
        <p>CREATE TABLE Customer (</p>
        <p>  CustID INT PRIMARY KEY,</p>
        <p>  HouseNo VARCHAR(10),        -- Component of Address</p>
        <p>  Street VARCHAR(50),         -- Component of Address</p>
        <p>  City VARCHAR(30),           -- Component of Address</p>
        <p>  State VARCHAR(30),          -- Component of Address</p>
        <p>  PinCode VARCHAR(6),         -- Component of Address</p>
        <p>  Phone VARCHAR(15)</p>
        <p>);</p>
        <p className="mt-2">-- Query individual components</p>
        <p>SELECT * FROM Customer WHERE City = &apos;Delhi&apos; AND State = &apos;Delhi&apos;;</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Composite Attribute = Can be divided into sub-parts with independent meaning</li>
        <li>ER Symbol: Oval branching into sub-ovals</li>
        <li>Examples: Address (Street+City+Pin), Name (First+Middle+Last)</li>
        <li>Stored as separate columns in relational model</li>
        <li>Different from multi-valued (multiple values) and derived (computed) attributes</li>
        <li>Enables querying at component level (e.g., search by City within Address)</li>
      </ul>
    </div>
  </div>
);

const Q1c: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1c. Define Primary Key with Example.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Primary Key</strong> is a column or a minimal set of columns in a relational table that uniquely identifies each row (tuple) in that table. The primary key must satisfy two fundamental properties: <strong>Uniqueness</strong> — no two rows can have the same primary key value; and <strong>Non-null</strong> — the primary key value cannot be NULL for any row. The primary key is chosen from the available candidate keys and is the principal means of identifying entities in a relation.
      </p>
      <p className="text-gray-700">
        The primary key is one of the most critical concepts in relational database design. It establishes <strong>entity integrity</strong> — ensuring that every record in a table can be uniquely distinguished. When a primary key from one table is referenced in another table, it becomes a <strong>Foreign Key</strong>, creating relationships between tables. A table can have only ONE primary key, though it may consist of multiple columns (composite primary key).
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of a primary key like your <strong>Aadhaar Number</strong> (or Social Security Number). Every person in India has a unique Aadhaar number — no two people share the same one, and you cannot be without one in the database. Just as the Aadhaar number uniquely identifies you among 1.4 billion people, a primary key uniquely identifies each row among millions of records.
      </p>
      <p className="text-gray-700">
        A primary key can be <strong>simple</strong> (single column like Student_ID) or <strong>composite</strong> (multiple columns like {'{OrderID, ProductID}'} in an OrderDetails table). It is always a minimal super key — removing any column from a composite primary key would destroy uniqueness. The DBMS automatically creates a unique index on the primary key for fast lookups.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-indigo-700">RollNo (PK)</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">GPA</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-bold text-indigo-700">101</td><td className="border border-gray-300 px-4 py-2">Rahul</td><td className="border border-gray-300 px-4 py-2">Delhi</td><td className="border border-gray-300 px-4 py-2">8.5</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-bold text-indigo-700">102</td><td className="border border-gray-300 px-4 py-2">Priya</td><td className="border border-gray-300 px-4 py-2">Mumbai</td><td className="border border-gray-300 px-4 py-2">9.1</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-bold text-indigo-700">103</td><td className="border border-gray-300 px-4 py-2">Amit</td><td className="border border-gray-300 px-4 py-2">Delhi</td><td className="border border-gray-300 px-4 py-2">7.8</td></tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-500 mt-2 italic">RollNo is the Primary Key — each value is unique and non-null</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Simple Primary Key</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>CREATE TABLE Student (</p>
        <p>  RollNo INT PRIMARY KEY,   -- Simple PK, unique + not null</p>
        <p>  Name VARCHAR(50) NOT NULL,</p>
        <p>  City VARCHAR(30),</p>
        <p>  GPA DECIMAL(3,2)</p>
        <p>);</p>
        <p className="mt-2">-- Inserting duplicate RollNo will FAIL</p>
        <p>INSERT INTO Student VALUES (101, &apos;Rahul&apos;, &apos;Delhi&apos;, 8.5);  -- OK</p>
        <p>INSERT INTO Student VALUES (101, &apos;Priya&apos;, &apos;Mumbai&apos;, 9.1); -- ERROR! Duplicate PK</p>
        <p>INSERT INTO Student VALUES (NULL, &apos;Amit&apos;, &apos;Delhi&apos;, 7.8);  -- ERROR! NULL PK</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Composite Primary Key</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Composite PK: {'{OrderID, ProductID}'} together are unique</p>
        <p>CREATE TABLE OrderDetails (</p>
        <p>  OrderID INT,</p>
        <p>  ProductID INT,</p>
        <p>  Quantity INT,</p>
        <p>  Price DECIMAL(10,2),</p>
        <p>  PRIMARY KEY (OrderID, ProductID)  -- Composite PK</p>
        <p>);</p>
        <p className="mt-2">-- Same OrderID can appear multiple times with different ProductIDs</p>
        <p>INSERT INTO OrderDetails VALUES (1, 101, 2, 500.00); -- OK</p>
        <p>INSERT INTO OrderDetails VALUES (1, 102, 1, 300.00); -- OK (different ProductID)</p>
        <p>INSERT INTO OrderDetails VALUES (1, 101, 5, 500.00); -- ERROR! Duplicate composite PK</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Primary Key = Unique + Non-Null identifier for each row</li>
        <li>Only ONE primary key per table (can be composite with multiple columns)</li>
        <li>Enforces Entity Integrity — every tuple must be uniquely identifiable</li>
        <li>Can be Simple (one column) or Composite (multiple columns)</li>
        <li>DBMS automatically creates a unique index on the primary key</li>
        <li>Referenced by Foreign Keys in other tables to create relationships</li>
      </ul>
    </div>
  </div>
);

const Q1d: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1d. What is the syntax of Insert clause used in SQL?
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        The <strong>INSERT INTO</strong> statement is a Data Manipulation Language (DML) command in SQL used to add new rows (records) of data into a database table. It is one of the four fundamental CRUD operations (Create, Read, Update, Delete) and is essential for populating tables with data. The INSERT statement can add a single row with specified values or multiple rows from a query result.
      </p>
      <p className="text-gray-700">
        The INSERT statement must respect all <strong>integrity constraints</strong> defined on the table — primary key uniqueness, NOT NULL requirements, foreign key references, CHECK constraints, and DEFAULT values. If any constraint is violated, the INSERT operation fails and the database returns an error. This ensures that only valid, consistent data enters the database.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Syntax Forms</h4>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-2">
        <p className="font-bold mb-1">-- Form 1: Insert with column names (recommended)</p>
        <p>INSERT INTO table_name (column1, column2, column3, ...)</p>
        <p>VALUES (value1, value2, value3, ...);</p>
        <p className="mt-3 font-bold mb-1">-- Form 2: Insert without column names (all columns)</p>
        <p>INSERT INTO table_name</p>
        <p>VALUES (value1, value2, value3, ...);</p>
        <p className="mt-3 font-bold mb-1">-- Form 3: Insert multiple rows</p>
        <p>INSERT INTO table_name (column1, column2)</p>
        <p>VALUES</p>
        <p>  (value1a, value2a),</p>
        <p>  (value1b, value2b),</p>
        <p>  (value1c, value2c);</p>
        <p className="mt-3 font-bold mb-1">-- Form 4: Insert from another table (INSERT INTO ... SELECT)</p>
        <p>INSERT INTO table_name (column1, column2)</p>
        <p>SELECT col1, col2 FROM another_table WHERE condition;</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Inserting into Student Table</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>CREATE TABLE Student (</p>
        <p>  RollNo INT PRIMARY KEY,</p>
        <p>  Name VARCHAR(50) NOT NULL,</p>
        <p>  City VARCHAR(30) DEFAULT &apos;Delhi&apos;,</p>
        <p>  GPA DECIMAL(3,2)</p>
        <p>);</p>
        <p className="mt-2">-- Insert with all columns</p>
        <p>INSERT INTO Student (RollNo, Name, City, GPA)</p>
        <p>VALUES (101, &apos;Rahul Sharma&apos;, &apos;Delhi&apos;, 8.5);</p>
        <p className="mt-2">-- Insert with partial columns (City gets DEFAULT &apos;Delhi&apos;)</p>
        <p>INSERT INTO Student (RollNo, Name, GPA)</p>
        <p>VALUES (102, &apos;Priya Gupta&apos;, 9.1);</p>
        <p className="mt-2">-- Insert multiple rows at once</p>
        <p>INSERT INTO Student (RollNo, Name, City, GPA) VALUES</p>
        <p>  (103, &apos;Amit&apos;, &apos;Chennai&apos;, 7.8),</p>
        <p>  (104, &apos;Neha&apos;, &apos;Delhi&apos;, 8.9),</p>
        <p>  (105, &apos;Suresh&apos;, &apos;Kolkata&apos;, 7.2);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Insert from SELECT and Constraint Violations</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Copy students with high GPA to another table</p>
        <p>CREATE TABLE HonorStudents (RollNo INT, Name VARCHAR(50));</p>
        <p className="mt-2">INSERT INTO HonorStudents (RollNo, Name)</p>
        <p>SELECT RollNo, Name FROM Student WHERE GPA &gt;= 8.5;</p>
        <p className="mt-2">-- Constraint violation examples:</p>
        <p>INSERT INTO Student VALUES (101, &apos;Duplicate&apos;, &apos;Delhi&apos;, 6.0);</p>
        <p>-- ERROR! Duplicate primary key 101</p>
        <p>INSERT INTO Student (RollNo, City, GPA) VALUES (106, &apos;Delhi&apos;, 7.0);</p>
        <p>-- ERROR! Name is NOT NULL but no value provided</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>INSERT INTO adds new rows to a table (DML command)</li>
        <li>Four forms: single row, all columns, multiple rows, INSERT-SELECT</li>
        <li>Must respect all constraints (PK, NOT NULL, FK, CHECK, DEFAULT)</li>
        <li>Best practice: always specify column names explicitly</li>
        <li>String values must be in single quotes; numbers without quotes</li>
        <li>DEFAULT values are used when a column is omitted from INSERT</li>
      </ul>
    </div>
  </div>
);

const Q1e: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1e. Define the term Functional Dependency.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Functional Dependency (FD)</strong> is a constraint between two sets of attributes in a relation. Given a relation R, a functional dependency X → Y (read as "X determines Y" or "Y is functionally dependent on X") means that for any two tuples that have the same value for the attributes in X, they must also have the same value for the attributes in Y. In other words, the value of Y is uniquely determined by the value of X.
      </p>
      <p className="text-gray-700">
        Functional dependencies are the foundation of <strong>normalization theory</strong> in database design. They capture the real-world relationships and business rules that govern how data elements relate to each other. For example, in a Student table, RollNo → Name means that each Roll Number corresponds to exactly one student name. FDs are used to identify candidate keys, detect anomalies, and design normalized (efficient) database schemas.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of functional dependency like the relationship between an <strong>employee ID and salary</strong>. If you know the Employee ID, you can determine exactly one salary value — the salary is functionally dependent on the Employee ID. However, the reverse may not be true: knowing the salary (say, ₹50,000) does not uniquely determine the employee (multiple employees may earn the same salary). This one-way determination is the essence of functional dependency.
      </p>
      <p className="text-gray-700">
        Key types of FDs include: <strong>Trivial FD</strong> (Y is a subset of X, e.g., {'{A,B}'} → {'{A}'}), <strong>Non-trivial FD</strong> (Y is not a subset of X), <strong>Completely non-trivial</strong> (X and Y have no common attributes), <strong>Partial FD</strong> (Y depends on a part of a composite key), and <strong>Transitive FD</strong> (X → Y and Y → Z, so X → Z transitively).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">FD Type</th>
            <th className="border border-gray-300 px-4 py-2">Notation</th>
            <th className="border border-gray-300 px-4 py-2">Meaning</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Trivial</td><td className="border border-gray-300 px-4 py-2">X → Y where Y ⊆ X</td><td className="border border-gray-300 px-4 py-2">Always holds</td><td className="border border-gray-300 px-4 py-2">{'{A,B}'} → {'{A}'}</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Non-Trivial</td><td className="border border-gray-300 px-4 py-2">X → Y where Y ⊄ X</td><td className="border border-gray-300 px-4 py-2">Meaningful constraint</td><td className="border border-gray-300 px-4 py-2">RollNo → Name</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Partial</td><td className="border border-gray-300 px-4 py-2">Part of key → non-key</td><td className="border border-gray-300 px-4 py-2">Violates 2NF</td><td className="border border-gray-300 px-4 py-2">{'{RollNo,Sub}'} → RollNo</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Transitive</td><td className="border border-gray-300 px-4 py-2">X → Y → Z</td><td className="border border-gray-300 px-4 py-2">Violates 3NF</td><td className="border border-gray-300 px-4 py-2">EmpID → DeptID → DeptName</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Student Relation FDs</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Relation: Student(RollNo, Name, DeptID, DeptName)</p>
        <p>-- FDs:</p>
        <p>--   RollNo → Name           (Name determined by RollNo)</p>
        <p>--   RollNo → DeptID         (DeptID determined by RollNo)</p>
        <p>--   DeptID → DeptName       (DeptName determined by DeptID)</p>
        <p>--   RollNo → DeptName       (Transitive FD! Through DeptID)</p>
        <p className="mt-2">-- Data illustrates FD:</p>
        <p>-- RollNo=101 → always gives Name=Rahul (uniqueness)</p>
        <p>-- DeptID=D1  → always gives DeptName=CS (uniqueness)</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Armstrong's Axioms (FD Inference Rules)</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Given: A → B, B → C</p>
        <p>-- Reflexivity: {'{A,B}'} → {'{A}'} (trivial)</p>
        <p>-- Augmentation: A → B implies {'{A,C}'} → {'{B,C}'}</p>
        <p>-- Transitivity: A → B and B → C implies A → C</p>
        <p>-- Union: A → B and A → C implies A → {'{B,C}'}</p>
        <p>-- Decomposition: A → {'{B,C}'} implies A → B and A → C</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Functional Dependency X → Y: same X value always gives same Y value</li>
        <li>Foundation of normalization theory (1NF, 2NF, 3NF, BCNF)</li>
        <li>Types: Trivial, Non-trivial, Partial, Transitive</li>
        <li>Armstrong's Axioms: Reflexivity, Augmentation, Transitivity</li>
        <li>Used to find candidate keys via attribute closure</li>
        <li>Captures real-world business rules and data relationships</li>
      </ul>
    </div>
  </div>
);

const Q1f: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1f. What do you mean by Transaction in databases?
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Transaction</strong> is a logical unit of work consisting of one or more database operations (INSERT, UPDATE, DELETE) that must be executed as a single, indivisible unit. Either ALL operations in a transaction complete successfully, or NONE of them take effect. Transactions are the fundamental mechanism by which databases maintain data consistency and integrity, especially in multi-user environments.
      </p>
      <p className="text-gray-700">
        Transactions follow the <strong>ACID properties</strong>: <strong>Atomicity</strong> (all or nothing), <strong>Consistency</strong> (database moves from one valid state to another), <strong>Isolation</strong> (concurrent transactions don't interfere), and <strong>Durability</strong> (committed changes are permanent). A transaction begins with a BEGIN TRANSACTION statement and ends with either COMMIT (save changes) or ROLLBACK (undo changes).
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of a transaction like a <strong>bank fund transfer</strong>. Transferring ₹5000 from Account A to Account B involves two operations: debit A and credit B. These must happen together as one unit. If the system crashes after debiting A but before crediting B, the money is lost! A transaction ensures this never happens — either both succeed or both are undone.
      </p>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Bank Fund Transfer Transaction</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>BEGIN TRANSACTION;</p>
        <p>UPDATE Account SET Balance = Balance - 5000 WHERE AccNo = &apos;A&apos;;</p>
        <p>UPDATE Account SET Balance = Balance + 5000 WHERE AccNo = &apos;B&apos;;</p>
        <p>COMMIT; -- Both updates made permanent</p>
        <p>-- If error occurs: ROLLBACK; reverts both updates</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Student Course Enrollment</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>BEGIN TRANSACTION;</p>
        <p>INSERT INTO Enrollment VALUES (101, &apos;CS101&apos;, &apos;2024-01&apos;);</p>
        <p>UPDATE Course SET Seats = Seats - 1 WHERE CourseID = &apos;CS101&apos;;</p>
        <p>INSERT INTO Fees VALUES (101, 50000, &apos;Paid&apos;);</p>
        <p>COMMIT; -- All 3 operations succeed or all fail</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Transaction = Logical unit of work (all operations succeed or all fail)</li>
        <li>ACID: Atomicity, Consistency, Isolation, Durability</li>
        <li>Begins with BEGIN TRANSACTION, ends with COMMIT or ROLLBACK</li>
        <li>Ensures database consistency even during failures and concurrent access</li>
        <li>Real-world examples: Fund transfers, booking systems, enrollments</li>
      </ul>
    </div>
  </div>
);

const Q1g: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      1g. Define Time Stamping in terms of concurrency control.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Timestamping</strong> (or Timestamp Ordering) is a concurrency control technique in which each transaction is assigned a unique <strong>timestamp</strong> that indicates its relative age or start time. The timestamp is typically generated using the system clock or a logical counter. The fundamental principle is: the order of transaction timestamps determines the equivalent serial execution order. If TS(T1) &lt; TS(T2), then the schedule must be equivalent to executing T1 before T2.
      </p>
      <p className="text-gray-700">
        Unlike locking-based protocols (like 2PL), timestamp ordering <strong>does not use locks</strong>, which eliminates the possibility of deadlocks entirely. Instead, it uses the timestamps to decide whether an operation should be allowed or whether the transaction should be aborted and restarted. Each data item maintains a read-timestamp (R-timestamp) and write-timestamp (W-timestamp) to track the last transaction that read or wrote it.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of timestamps like <strong>receipt numbers at a service counter</strong>. Each customer gets a number when they arrive. The system processes their requests in order of their numbers. If a younger customer (higher number) tries to modify data that an older customer (lower number) has already read or written, the system catches the conflict and restarts the younger customer's request.
      </p>
      <p className="text-gray-700">
        For each data item Q, the system maintains: <strong>W-timestamp(Q)</strong> = largest timestamp of any transaction that successfully wrote Q; <strong>R-timestamp(Q)</strong> = largest timestamp of any transaction that successfully read Q. When a transaction T wants to read or write Q, the protocol checks these timestamps against TS(T) to decide whether to allow or reject the operation.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — Protocol Rules</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold mb-2">Timestamp Ordering Protocol:</p>
        <p><strong>Read Rule — Transaction T reads item Q:</strong></p>
        <p>  IF TS(T) &lt; W-timestamp(Q) → REJECT (abort T, restart with new TS)</p>
        <p>  ELSE → ALLOW read, R-timestamp(Q) = max(R-ts(Q), TS(T))</p>
        <p className="mt-2"><strong>Write Rule — Transaction T writes item Q:</strong></p>
        <p>  IF TS(T) &lt; R-timestamp(Q) → REJECT (abort T)</p>
        <p>  ELSE IF TS(T) &lt; W-timestamp(Q) → REJECT (abort T)</p>
        <p>  ELSE → ALLOW write, W-timestamp(Q) = TS(T)</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Successful Execution</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- T1 (TS=1) writes Q, then T2 (TS=2) reads Q</p>
        <p>-- Initial: W-ts(Q)=0, R-ts(Q)=0</p>
        <p>-- T1 writes Q: TS(1) &gt;= R-ts(0) and TS(1) &gt;= W-ts(0) → ALLOW ✅</p>
        <p>--   W-ts(Q) updated to 1</p>
        <p>-- T2 reads Q: TS(2) &gt;= W-ts(1) → ALLOW ✅</p>
        <p>--   R-ts(Q) updated to 2</p>
        <p>-- Result: Equivalent to serial schedule T1, T2 ✅</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Transaction Rejection</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- T2 (TS=2) writes Q, then T1 (TS=1) tries to read Q</p>
        <p>-- After T2 writes: W-ts(Q)=2</p>
        <p>-- T1 reads Q: TS(1) &lt; W-ts(2) → REJECT! ❌</p>
        <p>--   T1 is aborted and restarted with new timestamp TS=3</p>
        <p>-- Reason: T1 (older) reading value written by T2 (newer) violates order</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Timestamping assigns unique timestamp to each transaction indicating order</li>
        <li>No locks used → No deadlocks (advantage over 2PL)</li>
        <li>Each data item tracks R-timestamp and W-timestamp</li>
        <li>Operations violating timestamp order are rejected and transaction restarted</li>
        <li>Guarantees conflict serializability</li>
        <li>Timestamps can be system clock or logical counter</li>
      </ul>
    </div>
  </div>
);

export const question1Answers = [
  { id: '1a', title: '1a. Data Independence', component: Q1a },
  { id: '1b', title: '1b. Composite Attributes', component: Q1b },
  { id: '1c', title: '1c. Primary Key with Example', component: Q1c },
  { id: '1d', title: '1d. INSERT Clause Syntax', component: Q1d },
  { id: '1e', title: '1e. Functional Dependency', component: Q1e },
  { id: '1f', title: '1f. Transaction in Databases', component: Q1f },
  { id: '1g', title: '1g. Time Stamping', component: Q1g },
];
