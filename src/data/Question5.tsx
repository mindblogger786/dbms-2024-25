import React from 'react';

const Q5a: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      5a. Define Minimal Cover for a set of Functional Dependencies.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Minimal Cover</strong> (also called <strong>Canonical Cover</strong> or <strong>Minimal Set</strong>) of a set of functional dependencies F is a simplified set of FDs that is <strong>equivalent</strong> to F (produces the same closure) but has the following properties: (1) Every FD has a <strong>single attribute on the right side</strong> (decomposition); (2) No FD can be <strong>removed</strong> without changing the closure (minimality); (3) No attribute on the <strong>left side</strong> can be removed without changing the closure (no extraneous attributes).
      </p>
      <p className="text-gray-700">
        The minimal cover is crucial in database design because it simplifies the set of FDs to the <strong>smallest possible equivalent set</strong>. This makes normalization easier and more efficient — we work with fewer, simpler FDs while preserving all the original constraints. Think of it as <strong>removing all redundancy from the FDs themselves</strong>, just like normalization removes redundancy from data.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Algorithm</h4>
      <p className="mb-3 text-gray-700">
        The algorithm for finding minimal cover has 3 steps: <strong>Step 1</strong> — Decompose all RHS into single attributes (e.g., A→BC becomes A→B, A→C). <strong>Step 2</strong> — Remove extraneous attributes from LHS (e.g., if AB→C and A→C, then B is extraneous). <strong>Step 3</strong> — Remove redundant FDs (if an FD can be derived from others, remove it).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Algorithm Step-by-Step</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold">Minimal Cover Algorithm:</p>
        <p>Input: Set of FDs F</p>
        <p>Step 1: For each FD X → Y where Y has multiple attributes,</p>
        <p>        replace with X → A1, X → A2, ... (single RHS)</p>
        <p>Step 2: For each FD X → A where X has multiple attributes,</p>
        <p>        check if any attribute B in X is extraneous:</p>
        <p>        If (X - B)⁺ contains A, then B is extraneous, remove it</p>
        <p>Step 3: For each FD X → A, check if it is redundant:</p>
        <p>        Compute X⁺ using remaining FDs (excluding X → A)</p>
        <p>        If A ∈ X⁺, then X → A is redundant, remove it</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Finding Minimal Cover</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- Given: F = {'{A→BC, B→C, AB→C}'}</p>
        <p className="mt-2">-- Step 1: Decompose RHS</p>
        <p>-- A→B, A→C, B→C, AB→C</p>
        <p className="mt-2">-- Step 2: Remove extraneous LHS attributes</p>
        <p>-- Check AB→C: Can we remove A? {'{B}'}⁺={'{B,C}'} contains C? YES</p>
        <p>--   → Replace AB→C with B→C (but B→C already exists)</p>
        <p>-- Result: A→B, A→C, B→C</p>
        <p className="mt-2">-- Step 3: Remove redundant FDs</p>
        <p>-- Check A→C: {'{A}'}⁺ without A→C = {'{A,B,C}'} (using A→B, B→C)</p>
        <p>--   C ∈ {'{A,B,C}'} → A→C is redundant! Remove it.</p>
        <p className="mt-2">-- Minimal Cover: {'{A→B, B→C}'}</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Another Minimal Cover</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- Given: F = {'{AB→CD, A→E, B→F, EF→G}'}</p>
        <p>-- Step 1: Decompose: AB→C, AB→D, A→E, B→F, EF→G</p>
        <p>-- Step 2: Check AB→C: Remove A? {'{B}'}⁺={'{B,F}'} no C → keep AB</p>
        <p>--         Check AB→D: Remove A? {'{B}'}⁺={'{B,F}'} no D → keep AB</p>
        <p>--         Check EF→G: Remove E? {'{F}'}⁺={'{F}'} no G → keep EF</p>
        <p>-- Step 3: Check redundancy:</p>
        <p>--   AB→C: {'{A,B}'}⁺ w/o AB→C = {'{A,B,E,F,G,D}'} via A→E,B→F,EF→G,AB→D</p>
        <p>--   C not in closure → NOT redundant, keep</p>
        <p>--   All others: NOT redundant</p>
        <p>-- Minimal Cover: {'{AB→C, AB→D, A→E, B→F, EF→G}'}</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Minimal Cover = Smallest equivalent set of simplified FDs</li>
        <li>3 Properties: Single RHS, No extraneous LHS, No redundant FDs</li>
        <li>Step 1: Decompose RHS into single attributes</li>
        <li>Step 2: Remove extraneous attributes from LHS</li>
        <li>Step 3: Remove redundant FDs derivable from others</li>
        <li>Minimal cover is unique for a given set of FDs (up to ordering)</li>
      </ul>
    </div>
  </div>
);

const Q5b: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2">
      5b. Discuss Lossless Join with the help of an example.
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition &amp; Introduction</h4>
      <p className="mb-3 text-gray-700">
        A <strong>Lossless Join</strong> (also called <strong>Lossless Decomposition</strong>) is a property of database decomposition where decomposing a relation R into smaller relations R1 and R2 produces NO loss of information. When R1 and R2 are joined back together using a natural join, the result must be <strong>exactly equal</strong> to the original relation R. If any spurious (extra) tuples appear in the join, the decomposition is <strong>lossy</strong> (information is corrupted).
      </p>
      <p className="text-gray-700">
        Lossless join is a <strong>mandatory requirement</strong> for any decomposition in normalization. Without it, you would gain anomalies-free design but lose data integrity — the database would contain fake information when tables are joined. The lossless join property is verified using a mathematical test involving the <strong>common attributes</strong> between decomposed relations.
      </p>
    </div>

    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-green-800 mb-2">🧠 Core Concepts &amp; Test</h4>
      <p className="mb-3 text-gray-700">
        Think of lossless join like <strong>cutting a puzzle</strong>. If you cut a puzzle into pieces that can be perfectly reassembled into the original picture, it is a lossless decomposition. If the pieces can be assembled in multiple ways creating fake pictures (spurious tuples), it is a lossy decomposition.
      </p>
      <p className="text-gray-700">
        <strong>Lossless Join Test:</strong> A decomposition of R into R1 and R2 is lossless if and only if: <strong>R1 ∩ R2 → R1</strong> OR <strong>R1 ∩ R2 → R2</strong> (the common attributes functionally determine at least one of the decomposed relations). In simpler terms, the intersection of R1 and R2 must be a super key of at least R1 or R2.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-yellow-800 mb-2">📊 Visual Representation</h4>
      <div className="font-mono text-sm bg-gray-100 p-3 rounded mt-2">
        <p className="font-bold">Lossless Join Condition:</p>
        <p>R is decomposed into R1 and R2</p>
        <p>Lossless if: (R1 ∩ R2) → R1  OR  (R1 ∩ R2) → R2</p>
        <p className="mt-2">Verification Steps:</p>
        <p>1. Find common attributes: R1 ∩ R2</p>
        <p>2. Compute closure: (R1 ∩ R2)⁺</p>
        <p>3. If closure contains ALL attributes of R1 or R2 → Lossless ✅</p>
        <p>4. Otherwise → Lossy ❌</p>
      </div>
    </div>

    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-purple-800 mb-2">⚙️ Technical Implementation — Examples</h4>
      <p className="mb-3 text-gray-700"><strong>Example 1: Lossless Decomposition</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
        <p>-- R(A, B, C) with FD: A → B</p>
        <p>-- Decompose into R1(A, B) and R2(A, C)</p>
        <p className="mt-2">-- Check: R1 ∩ R2 = {'{A}'}</p>
        <p>-- {'{A}'}⁺ = {'{A, B}'} (using A→B)</p>
        <p>-- {'{A, B}'} contains all attributes of R1? YES → Lossless ✅</p>
        <p className="mt-2">-- Verify with data:</p>
        <p>-- Original R: (1,X,10), (2,Y,20), (1,X,30)</p>
        <p>-- R1(A,B): (1,X), (2,Y)</p>
        <p>-- R2(A,C): (1,10), (2,20), (1,30)</p>
        <p>-- R1 ⋈ R2: (1,X,10), (2,Y,20), (1,X,30) = Original ✅</p>
      </div>
      <p className="mb-3 text-gray-700"><strong>Example 2: Lossy Decomposition</strong></p>
      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
        <p>-- R(A, B, C) with NO FDs</p>
        <p>-- Decompose into R1(A, B) and R2(B, C)</p>
        <p className="mt-2">-- Check: R1 ∩ R2 = {'{B}'}</p>
        <p>-- {'{B}'}⁺ = {'{B}'} (no FDs to expand)</p>
        <p>-- {'{B}'} does NOT contain all of R1 or R2 → LOSSY ❌</p>
        <p className="mt-2">-- Verify with data:</p>
        <p>-- Original R: (1,X,10), (2,X,20)</p>
        <p>-- R1(A,B): (1,X), (2,X)</p>
        <p>-- R2(B,C): (X,10), (X,20)</p>
        <p>-- R1 ⋈ R2: (1,X,10), (1,X,20), (2,X,10), (2,X,20)</p>
        <p>-- 4 rows instead of 2! Spurious tuples (1,X,20) and (2,X,10) ❌</p>
      </div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h4 className="font-bold text-red-800 mb-2">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Lossless Join = Decomposition preserves all original information</li>
        <li>R1 ⋈ R2 must equal R exactly (no spurious tuples)</li>
        <li>Test: (R1 ∩ R2) → R1 or (R1 ∩ R2) → R2 must hold</li>
        <li>Common attributes must be a superkey of at least one relation</li>
        <li>Lossy decomposition creates fake tuples when joined — unacceptable!</li>
        <li>Always verify lossless join before accepting any decomposition</li>
      </ul>
    </div>
  </div>
);

export const question5Answers = [
  { id: '5a', title: '5a. Minimal Cover', component: Q5a },
  { id: '5b', title: '5b. Lossless Join', component: Q5b },
];
