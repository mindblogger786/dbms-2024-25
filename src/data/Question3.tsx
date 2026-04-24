import React from 'react';

const Q3a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      3a. Discuss ER Diagram with the help of an example.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        An <strong>Entity-Relationship (ER) Diagram</strong> is a visual representation of the data and relationships among the data in a database. Introduced by <strong>Peter Chen in 1976</strong>, it is the most widely used conceptual data modeling technique. ER diagrams use standardized symbols — rectangles for entities, diamonds for relationships, ovals for attributes, and lines connecting them — to create a blueprint of the database before actual implementation.
      </p>
      <p className="text-gray-700">
        ER diagrams serve as a <strong>communication tool</strong> between database designers, developers, and stakeholders. They capture the <strong>what</strong> of the database (entities and their properties) without worrying about the <strong>how</strong> (physical implementation). This abstraction allows teams to validate the design with business users before writing any SQL code, saving time and reducing costly design errors.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of an ER diagram like an <strong>architectural blueprint</strong> for a building. Before construction begins, the architect draws a plan showing rooms (entities), their features (attributes), and how rooms connect (relationships). Similarly, the ER diagram shows what data tables will exist, what columns they will have, and how they will relate to each other — all before any SQL is written.
      </p>
      <p className="text-gray-700">
        ER diagrams use specific notation: <strong>Rectangle</strong> = Entity (e.g., Student), <strong>Oval</strong> = Attribute (e.g., Name), <strong>Diamond</strong> = Relationship (e.g., Enrolls), <strong>Underlined oval</strong> = Primary Key, <strong>Dashed oval</strong> = Derived Attribute, <strong>Double oval</strong> = Multi-valued Attribute, <strong>Double rectangle</strong> = Weak Entity. Lines connect entities to relationships with cardinality labels (1:1, 1:N, M:N).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — ER Diagram Example: University</h4>
      <div className="font-mono text-sm bg-gray-100 p-4 rounded mt-2">
        <p className="font-bold mb-2">University Database ER Diagram:</p>
        <p>  [Student]              [Department]            [Course]</p>
        <p>  RollNo(PK)             DeptID(PK)             CourseID(PK)</p>
        <p>  Name                   Dname                  Cname</p>
        <p>  DOB                    Location               Credits</p>
        <p>  Semester</p>
        <p>     |                      |                      |</p>
        <p>     |                      |                      |</p>
        <p>  (&lt;enrolls&gt;)         (&lt;runs&gt;)              (&lt;has_faculty&gt;)</p>
        <p>   M    N               1    N                   1    N</p>
        <p>     |                      |                      |</p>
        <p>     +-------- connects ----+-------- connects ----+</p>
        <p>                                                     |</p>
        <p>                                                 [Faculty]</p>
        <p>                                                 FacID(PK)</p>
        <p>                                                 FName</p>
        <p>                                                 Specialization</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Converting ER Diagram to Relational Tables</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Entity: Student → Table</p>
        <p>CREATE TABLE Student (</p>
        <p>  RollNo INT PRIMARY KEY, Name VARCHAR(50), DOB DATE, Semester INT</p>
        <p>);</p>
        <p className="mt-2">-- Entity: Department → Table</p>
        <p>CREATE TABLE Department (</p>
        <p>  DeptID INT PRIMARY KEY, Dname VARCHAR(50), Location VARCHAR(100)</p>
        <p>);</p>
        <p className="mt-2">-- M:N Relationship: Enrollment → Junction Table</p>
        <p>CREATE TABLE Enrollment (</p>
        <p>  RollNo INT, CourseID VARCHAR(10), Grade CHAR(2),</p>
        <p>  PRIMARY KEY (RollNo, CourseID),</p>
        <p>  FOREIGN KEY (RollNo) REFERENCES Student(RollNo),</p>
        <p>  FOREIGN KEY (CourseID) REFERENCES Course(CourseID)</p>
        <p>);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: ER Diagram Symbol Reference</strong></p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Symbol</th>
            <th className="border border-gray-300 px-4 py-2">Meaning</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2">Rectangle</td><td className="border border-gray-300 px-4 py-2">Strong Entity</td><td className="border border-gray-300 px-4 py-2">Student, Department</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2">Double Rectangle</td><td className="border border-gray-300 px-4 py-2">Weak Entity</td><td className="border border-gray-300 px-4 py-2">Dependent (depends on Employee)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Diamond</td><td className="border border-gray-300 px-4 py-2">Relationship</td><td className="border border-gray-300 px-4 py-2">Enrolls, Works_In</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2">Oval</td><td className="border border-gray-300 px-4 py-2">Attribute</td><td className="border border-gray-300 px-4 py-2">Name, Address</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Underlined oval</td><td className="border border-gray-300 px-4 py-2">Primary Key</td><td className="border border-gray-300 px-4 py-2">RollNo, EmpID</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>ER Diagram = Visual blueprint of database design (by Peter Chen, 1976)</li>
        <li>Rectangle=Entity, Diamond=Relationship, Oval=Attribute, Lines=Connections</li>
        <li>Cardinality: 1:1, 1:N, M:N (determines how tables are connected)</li>
        <li>M:N relationships require a junction table in relational model</li>
        <li>Conversion: Entity→Table, 1:N→FK on N-side, M:N→Junction table</li>
      </ul>
    </div>
  </div>
);

const Q3b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      3b. Explain Generalization, Specialization and Aggregation.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Generalization</strong> is a bottom-up approach in ER modeling where common features of multiple entity types are extracted to form a more general, higher-level <strong>superclass entity</strong>. For example, Car and Truck share attributes like VehicleID, Make, and Model — these common attributes are abstracted into a superclass called <strong>Vehicle</strong>. Generalization reduces redundancy in the ER design by capturing shared characteristics in one place.
      </p>
      <p className="text-gray-700">
        <strong>Specialization</strong> is the reverse — a top-down approach where a higher-level entity is broken down into more specific lower-level <strong>subclass entities</strong>. Starting with Vehicle, we specialize it into Car and Truck, each with unique attributes (Car has NumDoors, Truck has PayloadCapacity). <strong>Aggregation</strong> is an abstraction technique where a relationship between entities is itself treated as a higher-level entity, allowing relationships to participate in other relationships.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of Generalization like <strong>categorizing items in a grocery store</strong>: Apples, Bananas, and Oranges are all specialized types, but they share common properties (price, weight, origin). Generalization creates the "Fruit" category that captures these shared attributes. Specialization goes the other way — starting with "Fruit," you add specific types with unique attributes.
      </p>
      <p className="text-gray-700">
        Aggregation is like treating a <strong>team as a single entity</strong>. A project team consists of multiple employees working together. Instead of modeling individual employee-project relationships separately, aggregation treats the "Team" as an entity that can have its own relationships (e.g., Team is assigned to a Project).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Concept</th>
            <th className="border border-gray-300 px-4 py-2">Direction</th>
            <th className="border border-gray-300 px-4 py-2">Purpose</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Generalization</td><td className="border border-gray-300 px-4 py-2">Bottom-Up</td><td className="border border-gray-300 px-4 py-2">Extract common features into superclass</td><td className="border border-gray-300 px-4 py-2">Car + Truck → Vehicle</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Specialization</td><td className="border border-gray-300 px-4 py-2">Top-Down</td><td className="border border-gray-300 px-4 py-2">Break entity into specific subclasses</td><td className="border border-gray-300 px-4 py-2">Vehicle → Car, Truck</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Aggregation</td><td className="border border-gray-300 px-4 py-2">Abstraction</td><td className="border border-gray-300 px-4 py-2">Treat relationship as entity</td><td className="border border-gray-300 px-4 py-2">Enrollment treated as entity for grading</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Generalization / Specialization — Person Hierarchy</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Superclass: Person (generalized)</p>
        <p>CREATE TABLE Person (</p>
        <p>  PersonID INT PRIMARY KEY, Name VARCHAR(50), Address VARCHAR(100)</p>
        <p>);</p>
        <p className="mt-2">-- Subclass: Employee (specialized)</p>
        <p>CREATE TABLE Employee (</p>
        <p>  PersonID INT PRIMARY KEY REFERENCES Person(PersonID),</p>
        <p>  Salary DECIMAL(10,2), DeptID INT</p>
        <p>);</p>
        <p className="mt-2">-- Subclass: Student (specialized)</p>
        <p>CREATE TABLE Student (</p>
        <p>  PersonID INT PRIMARY KEY REFERENCES Person(PersonID),</p>
        <p>  GPA DECIMAL(3,2), Course VARCHAR(20)</p>
        <p>);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Aggregation — Project Assignment</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Without aggregation: complex M:N:N relationship</p>
        <p>-- Employee ←→ Project ←→ Manager (hard to model)</p>
        <p className="mt-2">-- With aggregation: Treat &quot;Team&quot; as entity</p>
        <p>CREATE TABLE Team (TeamID INT PRIMARY KEY, ProjID INT, ManagerID INT);</p>
        <p>CREATE TABLE TeamMember (TeamID INT, EmpID INT,</p>
        <p>  PRIMARY KEY (TeamID, EmpID));</p>
        <p>-- Now &quot;Team&quot; can participate in other relationships</p>
        <p>-- e.g., Team is evaluated, Team is assigned budget, etc.</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Generalization: Bottom-up — combine common features into superclass</li>
        <li>Specialization: Top-down — divide entity into specific subclasses</li>
        <li>Aggregation: Treat a relationship as a higher-level entity</li>
        <li>ISA triangle in ER diagram denotes generalization/specialization</li>
        <li>Overlapping: Subclasses can share instances; Disjoint: Cannot share</li>
        <li>Aggregation enables relationships to participate in other relationships</li>
      </ul>
    </div>
  </div>
);

export const question3Answers = [
  { id: '3a', title: '3a. ER Diagram with Example', component: Q3a },
  { id: '3b', title: '3b. Generalization, Specialization & Aggregation', component: Q3b },
];
