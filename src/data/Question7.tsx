import React from 'react';

const Q7a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      7a. Discuss Locking Techniques for Concurrency Control.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Locking</strong> is the most widely used concurrency control technique in DBMS. A lock is a variable associated with a data item that controls access to that item. Before a transaction can read or write a data item, it must <strong>acquire a lock</strong> on that item. After completing its operation, the transaction <strong>releases the lock</strong>, allowing other transactions to access the item. Locking ensures that conflicting operations are serialized, preventing concurrency problems.
      </p>
      <p className="text-gray-700">
        The two basic lock types are: <strong>Shared Lock (S-lock / Read Lock)</strong> — multiple transactions can hold S-locks simultaneously on the same item (for reading); <strong>Exclusive Lock (X-lock / Write Lock)</strong> — only one transaction can hold an X-lock, and no other transaction can hold any lock on the same item (for writing). The compatibility rule: S and S are compatible; S and X are NOT compatible; X and X are NOT compatible.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of locking like a <strong>library book checkout system</strong>. A Shared Lock is like a reference book in the reading room — multiple people can read it simultaneously. An Exclusive Lock is like checking out the book — only you have it, and no one else can access it until you return it. The Two-Phase Locking (2PL) protocol adds discipline: you can acquire locks in the first phase but once you release any lock, you cannot acquire new ones.
      </p>
      <p className="text-gray-700">
        The <strong>Two-Phase Locking (2PL)</strong> protocol guarantees conflict serializability. It has two phases: the <strong>Growing Phase</strong> (acquire locks, no releases) and the <strong>Shrinking Phase</strong> (release locks, no acquisitions). Variations include <strong>Strict 2PL</strong> (all X-locks held until commit/abort — prevents cascading rollback) and <strong>Rigorous 2PL</strong> (all locks held until end — safest). The main drawback of 2PL is potential <strong>deadlocks</strong>.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm mb-3">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Lock Held ↓ / Requested →</th>
            <th className="border border-gray-300 px-4 py-2">Shared (S)</th>
            <th className="border border-gray-300 px-4 py-2">Exclusive (X)</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Shared (S)</td><td className="border border-gray-300 px-4 py-2 text-green-700 font-bold">Compatible ✅</td><td className="border border-gray-300 px-4 py-2 text-red-700 font-bold">NOT Compatible ❌</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Exclusive (X)</td><td className="border border-gray-300 px-4 py-2 text-red-700 font-bold">NOT Compatible ❌</td><td className="border border-gray-300 px-4 py-2 text-red-700 font-bold">NOT Compatible ❌</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">2PL Variation</th>
            <th className="border border-gray-300 px-4 py-2">Rule</th>
            <th className="border border-gray-300 px-4 py-2">Deadlocks?</th>
            <th className="border border-gray-300 px-4 py-2">Cascading Rollback?</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Basic 2PL</td><td className="border border-gray-300 px-4 py-2">Growing then Shrinking</td><td className="border border-gray-300 px-4 py-2">Possible</td><td className="border border-gray-300 px-4 py-2">Possible</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Conservative 2PL</td><td className="border border-gray-300 px-4 py-2">All locks acquired upfront</td><td className="border border-gray-300 px-4 py-2">No</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Strict 2PL</td><td className="border border-gray-300 px-4 py-2">X-locks held until commit</td><td className="border border-gray-300 px-4 py-2">Possible</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Rigorous 2PL</td><td className="border border-gray-300 px-4 py-2">All locks held until commit</td><td className="border border-gray-300 px-4 py-2">Possible</td><td className="border border-gray-300 px-4 py-2">No</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: 2PL Preventing Lost Update</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- T1 and T2 both want to update Account A (balance=10000)</p>
        <p className="mt-2">-- T1: lock-X(A)         [Acquires exclusive lock on A]</p>
        <p>-- T2: lock-X(A)         [BLOCKED! T1 holds X-lock]</p>
        <p>-- T1: read(A=10000)</p>
        <p>-- T1: A=A-1000=9000</p>
        <p>-- T1: write(A)</p>
        <p>-- T1: unlock(A)         [Shrinking phase starts]</p>
        <p>-- T2: lock-X(A)         [Now acquires lock — reads A=9000]</p>
        <p>-- T2: read(A=9000)</p>
        <p>-- T2: A=A-2000=7000</p>
        <p>-- T2: write(A)</p>
        <p>-- T2: unlock(A)</p>
        <p>-- Final: A=7000 (Both updates applied correctly!) ✅</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Deadlock in 2PL</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- T1: lock-X(A)     [T1 holds A]</p>
        <p>-- T2: lock-X(B)     [T2 holds B]</p>
        <p>-- T1: lock-X(B)     [BLOCKED! T2 holds B]</p>
        <p>-- T2: lock-X(A)     [BLOCKED! T1 holds A]</p>
        <p>-- DEADLOCK! Both waiting for each other ❌</p>
        <p>-- Solution: DBMS detects deadlock, aborts one transaction</p>
        <p>-- MySQL: innodb_deadlock_detect = ON (automatic)</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Locking = Most widely used concurrency control technique</li>
        <li>Shared Lock (S): Multiple readers allowed simultaneously</li>
        <li>Exclusive Lock (X): Only one writer, no other locks allowed</li>
        <li>2PL: Growing Phase (acquire) + Shrinking Phase (release)</li>
        <li>Strict 2PL: X-locks held until commit → No cascading rollback</li>
        <li>Main drawback: Potential deadlocks (circular wait)</li>
        <li>Deadlock handling: Prevention, Detection + Recovery, Timeout</li>
      </ul>
    </div>
  </div>
);

const Q7b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      7b. What do you mean by Granularity? Discuss Multiple Granularity.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Granularity</strong> refers to the size or level of the data item that a lock protects. It determines how much data is locked at once. The granularity hierarchy ranges from <strong>coarse granularity</strong> (locking large units like entire databases or tables) to <strong>fine granularity</strong> (locking small units like individual rows or fields). The choice of granularity involves a trade-off between <strong>concurrency</strong> and <strong>overhead</strong>.
      </p>
      <p className="text-gray-700">
        <strong>Multiple Granularity</strong> is a locking protocol that allows transactions to lock data items at different levels of the granularity hierarchy simultaneously. A transaction that needs to access many rows in a table can lock the entire table (coarse granularity) for efficiency, while a transaction that needs only one row can lock just that row (fine granularity) for better concurrency. The protocol uses <strong>intention locks</strong> (IS, IX) to signal that a transaction intends to lock finer-grained items within a coarser unit.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of granularity like <strong>parking lot access control</strong>. If you lock the entire parking garage (database level), only one car can enter at a time — very safe but very slow. If you lock individual parking spaces (row level), many cars can park simultaneously — very efficient but managing all those locks is complex. Multiple granularity lets you choose: lock the whole floor (table) when filling it, or lock just one spot (row) for a single car.
      </p>
      <p className="text-gray-700">
        The hierarchy is: <strong>Database → Table → Page → Tuple (Row) → Attribute (Field)</strong>. Coarse locks (database/table) have low overhead but reduce concurrency. Fine locks (row/field) allow high concurrency but have higher overhead. Multiple Granularity uses <strong>intention locks</strong> to efficiently check if a requested lock conflicts with existing locks at any level.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold mb-2">Granularity Hierarchy (top-down):</p>
        <p>          [Database]        ← Coarsest granularity</p>
        <p>              |</p>
        <p>           [Table]</p>
        <p>              |</p>
        <p>           [Page]</p>
        <p>              |</p>
        <p>          [Tuple]          ← Finest granularity</p>
        <p>              |</p>
        <p>        [Attribute]</p>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Lock Type</th>
            <th className="border border-gray-300 px-4 py-2">Full Name</th>
            <th className="border border-gray-300 px-4 py-2">Meaning</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">S</td><td className="border border-gray-300 px-4 py-2">Shared</td><td className="border border-gray-300 px-4 py-2">Explicit shared lock at this level</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">X</td><td className="border border-gray-300 px-4 py-2">Exclusive</td><td className="border border-gray-300 px-4 py-2">Explicit exclusive lock at this level</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">IS</td><td className="border border-gray-300 px-4 py-2">Intent Shared</td><td className="border border-gray-300 px-4 py-2">Intends to set S-lock at finer level</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">IX</td><td className="border border-gray-300 px-4 py-2">Intent Exclusive</td><td className="border border-gray-300 px-4 py-2">Intends to set X-lock at finer level</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold">SIX</td><td className="border border-gray-300 px-4 py-2">Shared + Intent Exclusive</td><td className="border border-gray-300 px-4 py-2">Read whole + write some parts</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Multiple Granularity in Practice</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- T1: Read entire Student table → Lock table with S-lock</p>
        <p>LOCK TABLE Student IN SHARE MODE;</p>
        <p>SELECT * FROM Student;  -- One lock, covers all rows</p>
        <p>UNLOCK TABLES;</p>
        <p className="mt-2">-- T2: Update one specific student → Lock row with X-lock</p>
        <p>-- Must first acquire IX-lock on table, then X-lock on row</p>
        <p>BEGIN;</p>
        <p>SELECT * FROM Student WHERE RollNo=101 FOR UPDATE;</p>
        <p>UPDATE Student SET GPA=9.5 WHERE RollNo=101;</p>
        <p>COMMIT;  -- Row-level X-lock released</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Granularity Trade-off Comparison</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Scenario: 100 transactions, each updating 1 row in 10000-row table</p>
        <p className="mt-2">-- TABLE-LEVEL Locking (coarse):</p>
        <p>-- 1 lock per transaction, but ONLY 1 transaction at a time</p>
        <p>-- Total time: 100 × transaction_time (SERIAL execution)</p>
        <p className="mt-2">-- ROW-LEVEL Locking (fine):</p>
        <p>-- 2 locks per transaction (IX on table + X on row)</p>
        <p>-- But up to 100 transactions can run simultaneously!</p>
        <p>-- Total time: ≈ 1 × transaction_time (PARALLEL execution)</p>
        <p className="mt-2">-- Decision: Row-level is better when transactions access different rows</p>
        <p>--           Table-level is better when transaction accesses many rows</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Granularity = Size of data item that a lock protects</li>
        <li>Hierarchy: Database → Table → Page → Tuple → Attribute</li>
        <li>Coarse = Low overhead, Low concurrency; Fine = High overhead, High concurrency</li>
        <li>Multiple Granularity: Lock at different levels simultaneously</li>
        <li>Intention Locks (IS, IX, SIX): Signal intent to lock at finer levels</li>
        <li>Rules: Root must be locked first; locks released bottom-up</li>
        <li>SIX lock = Read entire unit + write specific parts within</li>
      </ul>
    </div>
  </div>
);

export const question7Answers = [
  { id: '7a', title: '7a. Locking Techniques for Concurrency', component: Q7a },
  { id: '7b', title: '7b. Granularity & Multiple Granularity', component: Q7b },
];
