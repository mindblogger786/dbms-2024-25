import type React from "react";

interface HeaderProps {
  activeQuestion: string | null;
  onHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeQuestion, onHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <button
            onClick={onHome}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all">
              <span className="text-white font-bold text-sm">DB</span>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-base leading-tight">DBMS PYQ Solutions</div>
              <div className="text-slate-400 text-xs leading-tight">Database Management Systems</div>
            </div>
          </button>

          {/* Center Badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full">
              📚 University Exam Prep
            </span>
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold rounded-full">
              ✅ 7 Units • 20 Questions
            </span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {activeQuestion && (
              <button
                onClick={onHome}
                className="flex items-center gap-1 px-3 py-1.5 text-slate-300 hover:text-white text-sm border border-slate-600 hover:border-slate-400 rounded-lg transition-all"
              >
                <span>←</span>
                <span className="hidden sm:inline">All Questions</span>
              </button>
            )}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">A+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
