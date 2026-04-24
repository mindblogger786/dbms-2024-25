import React from 'react';

const Q6a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      6a. ACID Properties of a Transaction.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>ACID Properties</strong> are the four fundamental guarantees that a Database Management System provides to ensure reliable processing of transactions. ACID stands for <strong>Atomicity, Consistency, Isolation,</strong> and <strong>Durability</strong>. These properties were first formally defined by <strong>Theo Härder and Andreas Reuter in 1983</strong> and form the bedrock of transaction processing in any reliable database system.
      </p>
      <p className="text-gray-700">
        Without ACID properties, databases would be unreliable in multi-user environments and prone to data corruption during failures. ACID ensures that even when hundreds of transactions execute simultaneously and system crashes occur, the database always moves from one consistent state to another, with no partial or corrupted results.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead><tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Property</th>
            <th className="border border-gray-300 px-4 py-2">Meaning</th>
            <th className="border border-gray-300 px-4 py-2">Ensured By</th>
            <th className="border border-gray-300 px-4 py-2">Analogy</th>
          </tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-red-700">A — Atomicity</td><td className="border border-gray-300 px-4 py-2">All or Nothing — transaction is indivisible</td><td className="border border-gray-300 px-4 py-2">Log-based recovery, COMMIT/ROLLBACK</td><td className="border border-gray-300 px-4 py-2">Pregnancy — you can&apos;t be &quot;half pregnant&quot;</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">C — Consistency</td><td className="border border-gray-300 px-4 py-2">Database moves from one valid state to another</td><td className="border border-gray-300 px-4 py-2">Integrity constraints, business rules</td><td className="border border-gray-300 px-4 py-2">Accounting — books must always balance</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">I — Isolation</td><td className="border border-gray-300 px-4 py-2">Concurrent transactions don&apos;t interfere</td><td className="border border-gray-300 px-4 py-2">Locking, timestamps, serializability</td><td className="border border-gray-300 px-4 py-2">Private hotel room — guests don&apos;t disturb each other</td></tr>
            <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold text-purple-700">D — Durability</td><td className="border border-gray-300 px-4 py-2">Committed changes survive all failures</td><td className="border border-gray-300 px-4 py-2">Write-ahead logging, checkpointing</td><td className="border border-gray-300 px-4 py-2">Signed contract — permanent and binding</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Bank Transfer — All 4 ACID Properties</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Transfer ₹5000 from Account A to Account B</p>
        <p>BEGIN TRANSACTION;</p>
        <p>UPDATE Account SET Balance = Balance - 5000 WHERE AccNo = &apos;A&apos;;</p>
        <p>UPDATE Account SET Balance = Balance + 5000 WHERE AccNo = &apos;B&apos;;</p>
        <p>COMMIT;</p>
        <p className="mt-2">-- ATOMICITY: Both updates succeed or both fail (all or nothing)</p>
        <p>-- CONSISTENCY: Total money in bank remains same (A + B unchanged)</p>
        <p>-- ISOLATION: Other transactions can&apos;t see partial state (A debited, B not credited)</p>
        <p>-- DURABILITY: Once COMMIT, even power failure won&apos;t lose the transfer</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: How Each Property is Implemented</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- ATOMICITY via Log-based Recovery:</p>
        <p>-- Log records: [T1, WRITE, A, old=10000, new=5000]</p>
        <p>--                [T1, WRITE, B, old=5000, new=10000]</p>
        <p>-- If crash before COMMIT → UNDO using log (restore old values)</p>
        <p className="mt-2">-- DURABILITY via Write-Ahead Logging (WAL):</p>
        <p>-- Log is flushed to disk BEFORE actual data pages</p>
        <p>-- After crash, REDO committed transactions from log</p>
        <p className="mt-2">-- ISOLATION via Locking:</p>
        <p>-- T1 acquires exclusive lock on A and B</p>
        <p>-- T2 must WAIT until T1 releases locks</p>
        <p>-- SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Atomicity:</strong> All operations succeed or all fail (Log/COMMIT/ROLLBACK)</li>
        <li><strong>Consistency:</strong> DB goes from valid state to valid state (constraints)</li>
        <li><strong>Isolation:</strong> Transactions don&apos;t interfere (locking, serializability)</li>
        <li><strong>Durability:</strong> Committed changes survive crashes (WAL, checkpointing)</li>
        <li>Defined by Härder and Reuter (1983)</li>
        <li>ACID is the foundation of reliable transaction processing</li>
      </ul>
    </div>
  </div>
);

const Q6b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      6b. Testing of Serializability.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        <strong>Testing of Serializability</strong> is the process of determining whether a given schedule (interleaved execution of concurrent transactions) produces results equivalent to some serial schedule. A schedule that passes this test is called <strong>serializable</strong> and is guaranteed to maintain database consistency. There are two main approaches: testing for <strong>Conflict Serializability</strong> (using precedence graphs) and testing for <strong>View Serializability</strong> (checking view equivalence).
      </p>
      <p className="text-gray-700">
        Conflict serializability testing is the most practical and commonly used method. It involves building a <strong>precedence graph</strong> (also called a serialization graph) where nodes represent transactions and edges represent conflicting operations. If the graph has <strong>no cycles</strong>, the schedule is conflict serializable. View serializability is more general but is NP-complete to test, making it impractical for real systems.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Logic</h4>
      <p className="mb-3 text-gray-700">
        Think of testing serializability like <strong>checking traffic rules</strong>. If cars (transactions) pass through intersections (data items) without violating any traffic rules (no conflicting order violations), the traffic flow is safe (serializable). A cycle in the precedence graph is like a circular traffic jam — cars waiting for each other in a loop, which means the order is impossible.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation — Testing Algorithm</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold mb-2">Conflict Serializability Testing Algorithm:</p>
        <p>Step 1: List all transactions and their operations in the schedule</p>
        <p>Step 2: Identify all pairs of CONFLICTING operations:</p>
        <p>  - Same data item, different transactions, at least one is WRITE</p>
        <p>Step 3: Build Precedence Graph:</p>
        <p>  - Nodes = Transactions (T1, T2, T3, ...)</p>
        <p>  - Edge Ti → Tj if Ti&apos;s operation on item X precedes Tj&apos;s</p>
        <p>    conflicting operation on same item X</p>
        <p>Step 4: Check for cycles using Topological Sort or DFS</p>
        <p>  - If NO cycle → Schedule is Conflict Serializable ✅</p>
        <p>  - If cycle exists → NOT Conflict Serializable ❌</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Serializable Schedule</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Schedule S:</p>
        <p>-- T1: R(A),         W(A)</p>
        <p>-- T2:       R(A),         W(A), R(B), W(B)</p>
        <p className="mt-2">-- Conflicts on A:</p>
        <p>--   T1:R(A) before T2:W(A) → Edge: T1→T2 (R-W conflict)</p>
        <p>--   T1:W(A) before T2:W(A) → Edge: T1→T2 (W-W conflict)</p>
        <p>-- Conflicts on B:</p>
        <p>--   T2:R(B), T2:W(B) — same transaction, no inter-T conflict</p>
        <p className="mt-2">-- Precedence Graph: T1 → T2</p>
        <p>-- No cycle! → Conflict Serializable ✅</p>
        <p>-- Equivalent serial order: T1, T2</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Non-Serializable Schedule</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Schedule S:</p>
        <p>-- Time 1: T1: R(A)</p>
        <p>-- Time 2: T2: R(A)</p>
        <p>-- Time 3: T1: W(A)</p>
        <p>-- Time 4: T2: W(A)</p>
        <p className="mt-2">-- Conflicts on A:</p>
        <p>--   T2:R(A) before T1:W(A) → Edge: T2→T1 (R-W conflict)</p>
        <p>--   T1:W(A) before T2:W(A) → Edge: T1→T2 (W-W conflict)</p>
        <p className="mt-2">-- Precedence Graph: T1 → T2 → T1 (CYCLE!)</p>
        <p>-- Cycle exists → NOT Conflict Serializable ❌</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Testing determines if a schedule is equivalent to some serial schedule</li>
        <li>Conflict Serializability: Build precedence graph, check for cycles</li>
        <li>No cycle = Serializable; Cycle = Not serializable</li>
        <li>Conflict = same data, different transactions, at least one WRITE</li>
        <li>3 types of conflicts: Read-Write, Write-Read, Write-Write</li>
        <li>View Serializability is more general but NP-complete to test</li>
      </ul>
    </div>
  </div>
);

export const question6Answers = [
  { id: '6a', title: '6a. ACID Properties', component: Q6a },
  { id: '6b', title: '6b. Testing of Serializability', component: Q6b },
];
