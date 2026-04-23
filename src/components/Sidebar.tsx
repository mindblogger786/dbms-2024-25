import type React from "react";
import { questionGroups, questions } from "../data/questions";

interface SidebarProps {
  activeId: string | null;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const tagColors: Record<string, string> = {
  Core: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SQL: "bg-green-500/10 text-green-400 border-green-500/20",
  Transaction: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Concurrency: "bg-red-500/10 text-red-400 border-red-500/20",
  Normalization: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "ER Model": "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-slate-900 border-r border-slate-700 
          overflow-y-auto z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-full lg:z-auto
        `}
      >
        <div className="p-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
            Question Index
          </div>

          <div className="space-y-2">
            {questionGroups.map((group) => {
              const groupQuestions = questions.filter(
                (q) => q.questionNumber === group.number
              );

              return (
                <div key={group.number} className="rounded-xl overflow-hidden border border-slate-700/50">
                  {/* Group Header */}
                  <div className="bg-slate-800 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {group.number}
                      </span>
                      <div className="min-w-0">
                        <div className="text-slate-200 text-sm font-semibold truncate">{group.title}</div>
                        <div className="text-slate-500 text-xs truncate">{group.description}</div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-questions */}
                  <div className="bg-slate-900 divide-y divide-slate-800">
                    {groupQuestions.map((q) => {
                      const isActive = activeId === q.id;
                      return (
                        <button
                          key={q.id}
                          onClick={() => { onSelect(q.id); onClose(); }}
                          className={`
                            w-full text-left px-3 py-2.5 flex items-start gap-2.5 transition-all
                            ${isActive
                              ? "bg-blue-600/20 border-l-2 border-blue-500"
                              : "hover:bg-slate-800/60 border-l-2 border-transparent"
                            }
                          `}
                        >
                          <span className={`
                            text-xs font-bold rounded px-1.5 py-0.5 shrink-0 mt-0.5
                            ${isActive ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-300"}
                          `}>
                            {q.part.toUpperCase()}
                          </span>
                          <div className="min-w-0">
                            <div className={`text-xs leading-snug truncate ${isActive ? "text-blue-300 font-medium" : "text-slate-300"}`}>
                              {q.title}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {q.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${tagColors[tag] || "bg-slate-700 text-slate-400 border-slate-600"}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="ml-auto text-[10px] text-slate-500 shrink-0 mt-0.5">{q.marks}M</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
