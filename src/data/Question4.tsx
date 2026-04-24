import React from 'react';

const Q4a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      4a. Various Integrity Constraints in DBMS.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Integrity Constraints</strong> are rules enforced by the DBMS to ensure the accuracy, consistency, and reliability of data stored in the database. They act as guardians that prevent invalid, inconsistent, or contradictory data from entering the database. Without integrity constraints, the database could contain duplicate records, orphaned references, incorrect values, or data that violates business rules.
      </p>
      <p className="text-gray-700">
        Integrity constraints are specified during table creation (DDL) and are automatically enforced by the DBMS on every INSERT, UPDATE, and DELETE operation. If any operation violates a constraint, the DBMS rejects it and returns an error. The major types of integrity constraints are: <strong>Domain Constraints, Entity Integrity, Referential Integrity,</strong> and <strong>User-Defined Integrity</strong>.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Constraint</th>
            <th className="border border-gray-300 px-4 py-2">Enforced By</th>
            <th className="border border-gray-300 px-4 py-2">Ensures</th>
            <th className="border border-gray-300 px-4 py-2">Example</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">NOT NULL</td><td className="border border-gray-300 px-4 py-2">Column-level</td><td className="border border-gray-300 px-4 py-2">Column cannot have NULL value</td><td className="border border-gray-300 px-4 py-2">Name VARCHAR(50) NOT NULL</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">UNIQUE</td><td className="border border-gray-300 px-4 py-2">Column/Table-level</td><td className="border border-gray-300 px-4 py-2">No duplicate values</td><td className="border border-gray-300 px-4 py-2">Email VARCHAR(100) UNIQUE</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">PRIMARY KEY</td><td className="border border-gray-300 px-4 py-2">Table-level</td><td className="border border-gray-300 px-4 py-2">Unique + Not Null (entity integrity)</td><td className="border border-gray-300 px-4 py-2">EmpID INT PRIMARY KEY</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">FOREIGN KEY</td><td className="border border-gray-300 px-4 py-2">Table-level</td><td className="border border-gray-300 px-4 py-2">References must exist (referential integrity)</td><td className="border border-gray-300 px-4 py-2">DeptID INT REFERENCES Dept(DeptID)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">CHECK</td><td className="border border-gray-300 px-4 py-2">Column/Table-level</td><td className="border border-gray-300 px-4 py-2">Value satisfies condition</td><td className="border border-gray-300 px-4 py-2">Salary DECIMAL CHECK (Salary &gt; 0)</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">DEFAULT</td><td className="border border-gray-300 px-4 py-2">Column-level</td><td className="border border-gray-300 px-4 py-2">Default value if not provided</td><td className="border border-gray-300 px-4 py-2">City VARCHAR(30) DEFAULT &apos;Delhi&apos;</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: All Constraints in a Single Table</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>CREATE TABLE Employee (</p>
        <p>  EmpID INT PRIMARY KEY,                    -- Entity Integrity</p>
        <p>  Name VARCHAR(50) NOT NULL,                -- Domain Integrity</p>
        <p>  Email VARCHAR(100) UNIQUE,                -- Uniqueness</p>
        <p>  Salary DECIMAL(10,2) CHECK (Salary &gt; 0), -- Domain Constraint</p>
        <p>  DeptID INT,</p>
        <p>  City VARCHAR(30) DEFAULT &apos;Delhi&apos;,        -- Default Value</p>
        <p>  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)</p>
        <p>    ON DELETE SET NULL                      -- Referential Integrity</p>
        <p>);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Referential Integrity Actions</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- ON DELETE options for Foreign Key:</p>
        <p>-- CASCADE: Delete parent → auto-delete children</p>
        <p>FOREIGN KEY (DeptID) REFERENCES Department(DeptID) ON DELETE CASCADE;</p>
        <p className="mt-2">-- SET NULL: Delete parent → set child FK to NULL</p>
        <p>FOREIGN KEY (DeptID) REFERENCES Department(DeptID) ON DELETE SET NULL;</p>
        <p className="mt-2">-- RESTRICT: Prevent parent deletion if children exist</p>
        <p>FOREIGN KEY (DeptID) REFERENCES Department(DeptID) ON DELETE RESTRICT;</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>NOT NULL: Column must have a value (no missing data)</li>
        <li>UNIQUE: No duplicate values allowed in column</li>
        <li>PRIMARY KEY: Unique + Not Null (one per table, enforces entity integrity)</li>
        <li>FOREIGN KEY: References PK of another table (enforces referential integrity)</li>
        <li>CHECK: Custom condition on column values</li>
        <li>DEFAULT: Automatic value when column omitted in INSERT</li>
        <li>FK Actions: CASCADE, SET NULL, RESTRICT on delete/update</li>
      </ul>
    </div>
  </div>
);

const Q4b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      4b. PL/SQL Procedures and Functions with Example.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>PL/SQL (Procedural Language/SQL)</strong> is Oracle's procedural extension to SQL that combines the data manipulation power of SQL with the processing power of procedural languages. It supports variables, conditions, loops, exceptions, and modular programming through <strong>Procedures</strong> and <strong>Functions</strong>. These are named PL/SQL blocks stored in the database and can be invoked repeatedly.
      </p>
      <p className="text-gray-700">
        A <strong>Procedure</strong> is a subprogram that performs a specific action and may or may not return a value (through OUT parameters). A <strong>Function</strong> is a subprogram that computes and returns exactly one value. The key difference: functions MUST return a value and can be used in SQL expressions (like SELECT), while procedures are called independently and are typically used for performing operations.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Feature</th>
            <th className="border border-gray-300 px-4 py-2">Procedure</th>
            <th className="border border-gray-300 px-4 py-2">Function</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Return Value</td><td className="border border-gray-300 px-4 py-2">Optional (via OUT params)</td><td className="border border-gray-300 px-4 py-2">Mandatory (RETURN clause)</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Used in SQL</td><td className="border border-gray-300 px-4 py-2">No (called via EXEC/CALL)</td><td className="border border-gray-300 px-4 py-2">Yes (in SELECT, WHERE, etc.)</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Purpose</td><td className="border border-gray-300 px-4 py-2">Perform an action</td><td className="border border-gray-300 px-4 py-2">Compute and return a value</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Syntax</td><td className="border border-gray-300 px-4 py-2">CREATE PROCEDURE</td><td className="border border-gray-300 px-4 py-2">CREATE FUNCTION</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: PL/SQL Procedure — Update Salary</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>CREATE OR REPLACE PROCEDURE update_salary (</p>
        <p>  p_empid  IN  Employee.EmpID%TYPE,</p>
        <p>  p_raise  IN  NUMBER</p>
        <p>) AS</p>
        <p>  v_current_sal Employee.Salary%TYPE;</p>
        <p>BEGIN</p>
        <p>  SELECT Salary INTO v_current_sal</p>
        <p>  FROM Employee WHERE EmpID = p_empid;</p>
        <p className="mt-2">  UPDATE Employee</p>
        <p>  SET Salary = v_current_sal + p_raise</p>
        <p>  WHERE EmpID = p_empid;</p>
        <p className="mt-2">  DBMS_OUTPUT.PUT_LINE(&apos;Salary updated from &apos; || v_current_sal ||</p>
        <p>    &apos; to &apos; || (v_current_sal + p_raise));</p>
        <p>EXCEPTION</p>
        <p>  WHEN NO_DATA_FOUND THEN</p>
        <p>    DBMS_OUTPUT.PUT_LINE(&apos;Employee not found!&apos;);</p>
        <p>END update_salary;</p>
        <p className="mt-2">-- Calling the procedure:</p>
        <p>EXEC update_salary(101, 5000);</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: PL/SQL Function — Calculate Annual Salary</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>CREATE OR REPLACE FUNCTION get_annual_salary (</p>
        <p>  p_empid IN Employee.EmpID%TYPE</p>
        <p>) RETURN NUMBER AS</p>
        <p>  v_salary Employee.Salary%TYPE;</p>
        <p>BEGIN</p>
        <p>  SELECT Salary INTO v_salary</p>
        <p>  FROM Employee WHERE EmpID = p_empid;</p>
        <p>  RETURN v_salary * 12;  -- Annual = Monthly × 12</p>
        <p>EXCEPTION</p>
        <p>  WHEN NO_DATA_FOUND THEN</p>
        <p>    RETURN NULL;</p>
        <p>END get_annual_salary;</p>
        <p className="mt-2">-- Using the function in SQL query:</p>
        <p>SELECT EmpID, Name, get_annual_salary(EmpID) AS AnnualSalary</p>
        <p>FROM Employee;</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>PL/SQL = Procedural Language extension to SQL (Oracle)</li>
        <li>Procedure: Performs action, optional return via OUT parameters</li>
        <li>Function: Must return exactly one value, usable in SQL expressions</li>
        <li>Both support parameters (IN, OUT, IN OUT), variables, loops, exceptions</li>
        <li>Procedures called via EXEC/CALL; Functions used in SELECT statements</li>
        <li>Both stored in database for reuse (modularity, performance)</li>
      </ul>
    </div>
  </div>
);

export const question4Answers = [
  { id: '4a', title: '4a. Integrity Constraints', component: Q4a },
  { id: '4b', title: '4b. PL/SQL Procedures & Functions', component: Q4b },
];
