import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  heading: string;
  type: "algorithm" | "code" | "example" | "sql";
}

const typeConfig = {
  algorithm: { icon: "⚙️", label: "Algorithm", accent: "from-purple-500/10 to-indigo-500/10 border-purple-500/30" },
  code: { icon: "💻", label: "Code", accent: "from-green-500/10 to-emerald-500/10 border-green-500/30" },
  example: { icon: "📝", label: "Example", accent: "from-amber-500/10 to-orange-500/10 border-amber-500/30" },
  sql: { icon: "🗃️", label: "SQL", accent: "from-blue-500/10 to-cyan-500/10 border-blue-500/30" },
};

// Simple syntax highlighting for SQL/PL-SQL
function highlightSQL(code: string): string {
  const keywords = [
    "SELECT", "FROM", "WHERE", "INSERT", "INTO", "VALUES", "UPDATE", "SET",
    "DELETE", "CREATE", "TABLE", "PRIMARY", "KEY", "FOREIGN", "REFERENCES",
    "NOT", "NULL", "UNIQUE", "CHECK", "DEFAULT", "DROP", "ALTER", "ADD",
    "BEGIN", "COMMIT", "ROLLBACK", "TRANSACTION", "PROCEDURE", "FUNCTION",
    "RETURNS", "RETURN", "DECLARE", "IF", "THEN", "ELSE", "ELSIF", "END",
    "LOOP", "WHILE", "FOR", "IN", "OUT", "IS", "AS", "OR", "REPLACE",
    "EXCEPTION", "WHEN", "OTHERS", "NO_DATA_FOUND", "DBMS_OUTPUT", "PUT_LINE",
    "CONSTRAINT", "INDEX", "ON", "CASCADE", "RESTRICT", "JOIN", "INNER",
    "LEFT", "RIGHT", "FULL", "NATURAL", "CROSS", "GROUP", "BY", "HAVING",
    "ORDER", "LIMIT", "UNION", "INTERSECT", "EXCEPT", "MINUS", "AND",
    "INT", "VARCHAR", "VARCHAR2", "NUMBER", "DATE", "CHAR", "DECIMAL",
    "FLOAT", "BOOLEAN", "TRIGGER", "VIEW", "SEQUENCE", "GRANT", "REVOKE",
  ];

  let result = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Keywords
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b(${kw})\\b`, "gi");
    result = result.replace(regex, `<span class="text-blue-400 font-semibold">$1</span>`);
  });

  // Comments
  result = result.replace(/(--[^\n]*)/g, '<span class="text-slate-500 italic">$1</span>');

  // Strings
  result = result.replace(/('[^']*')/g, '<span class="text-amber-300">$1</span>');

  // Numbers
  result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-purple-400">$1</span>');

  return result;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, heading, type }) => {
  const [copied, setCopied] = useState(false);
  const config = typeConfig[type];

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isCodeLike = type === "code" || type === "sql";
  const highlighted = isCodeLike ? highlightSQL(code) : null;

  return (
    <div className={`my-6 rounded-2xl border bg-gradient-to-br ${config.accent} overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-2">
          <span>{config.icon}</span>
          <span className="text-slate-200 font-semibold text-sm">{heading}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-400 font-medium uppercase">
            {language || config.label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1 rounded-lg hover:bg-white/10"
        >
          {copied ? (
            <><span className="text-green-400">✓</span><span className="text-green-400">Copied!</span></>
          ) : (
            <><span>📋</span><span>Copy</span></>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        {isCodeLike ? (
          <pre className="p-5 text-xs leading-6 font-mono text-slate-300 min-w-max">
            <code dangerouslySetInnerHTML={{ __html: highlighted! }} />
          </pre>
        ) : (
          <pre className="p-5 text-xs leading-6 font-mono text-slate-300 whitespace-pre-wrap">
            {code}
          </pre>
        )}
      </div>
    </div>
  );
};
