import type React from "react";
import { questionGroups, questions } from "../data/questions";

interface HomePageProps {
  onSelectQuestion: (id: string) => void;
}

const groupIcons = ["📖", "🔬", "🗺️", "🔐", "📐", "⚡", "🔒"];
const groupColors = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-violet-600",
  "from-pink-500 to-rose-600",
  "from-orange-500 to-amber-600",
  "from-teal-500 to-cyan-600",
  "from-yellow-500 to-orange-600",
  "from-red-500 to-pink-600",
];
const tagColors: Record<string, string> = {
  Core: "bg-blue-500/15 text-blue-400",
  SQL: "bg-green-500/15 text-green-400",
  Transaction: "bg-yellow-500/15 text-yellow-400",
  Concurrency: "bg-red-500/15 text-red-400",
  Normalization: "bg-purple-500/15 text-purple-400",
  "ER Model": "bg-pink-500/15 text-pink-400",
};

const stats = [
  { label: "Total Questions", value: "20", icon: "📚" },
  { label: "Topics Covered", value: "7", icon: "🎯" },
  { label: "Max Marks", value: "15", icon: "⭐" },
  { label: "Diagrams & Code", value: "30+", icon: "📊" },
];

export const HomePage: React.FC<HomePageProps> = ({ onSelectQuestion }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-slate-700 p-8 mb-8 shadow-2xl">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎓</span>
            <div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">University Exam Preparation</div>
              <h1 className="text-3xl font-black text-white leading-tight">
                DBMS Previous Year Questions
              </h1>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-6">
            Comprehensive, exam-oriented solutions for Database Management Systems. Each answer follows the strict exam format with
            <strong className="text-slate-300"> definitions, core concepts, visual diagrams</strong>, technical implementations, and key revision points.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-700/50 border border-slate-600 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-white font-bold text-xl">{stat.value}</div>
                <div className="text-slate-400 text-[11px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: "📋", title: "Structured Format", desc: "Every answer follows Definition → Core Concepts → Visuals → Implementation → Key Points" },
          { icon: "🎨", title: "Visual Learning", desc: "Tables, flowcharts, block diagrams and ER representations for all topics" },
          { icon: "💻", title: "Code Ready", desc: "SQL, PL/SQL examples with syntax highlighting and step-by-step explanations" },
        ].map((tip) => (
          <div key={tip.title} className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 flex items-start gap-3">
            <span className="text-2xl shrink-0">{tip.icon}</span>
            <div>
              <div className="text-white font-semibold text-sm mb-1">{tip.title}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{tip.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Question Groups */}
      <div className="mb-4">
        <h2 className="text-slate-200 font-bold text-xl mb-1">All Questions</h2>
        <p className="text-slate-500 text-sm">Click any question to view its complete solution</p>
      </div>

      <div className="space-y-6">
        {questionGroups.map((group, gi) => {
          const groupQs = questions.filter((q) => q.questionNumber === group.number);
          return (
            <div key={group.number} className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden">
              {/* Group Header */}
              <div className={`bg-gradient-to-r ${groupColors[gi]} p-5`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{groupIcons[gi]}</span>
                  <div>
                    <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">Question {group.number}</div>
                    <div className="text-white font-bold text-lg leading-tight">{group.title}</div>
                    <div className="text-white/80 text-sm">{group.description}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {groupQs.length} Part{groupQs.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Questions Grid */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {groupQs.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(q.id)}
                    className="text-left bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 hover:bg-slate-700/70 transition-all group shadow-sm hover:shadow-blue-500/10 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      {/* Part Badge */}
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${groupColors[gi]} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <span className="text-white font-bold text-sm">{q.part.toUpperCase()}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Question ID + Marks */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] text-slate-500 font-mono">Q{q.questionNumber}.{q.part}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/20">
                            {q.marks}M
                          </span>
                        </div>

                        {/* Title */}
                        <div className="text-slate-200 font-semibold text-sm leading-snug mb-2 group-hover:text-white transition-colors truncate">
                          {q.title}
                        </div>

                        {/* Mini question preview */}
                        <div className="text-slate-500 text-xs leading-snug mb-2 line-clamp-2">
                          {q.content.fullQuestion}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {q.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] px-2 py-0.5 rounded font-medium ${tagColors[tag] || "bg-slate-700 text-slate-400"}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="text-slate-600 group-hover:text-blue-400 transition-colors mt-1 shrink-0">
                        <span className="text-lg">›</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-10 mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-2xl px-6 py-3">
          <span className="text-xl">🚀</span>
          <div className="text-left">
            <div className="text-slate-300 text-sm font-semibold">Pro Tip for Exams</div>
            <div className="text-slate-500 text-xs">Always start with the definition, draw a diagram, and end with key bullet points.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
