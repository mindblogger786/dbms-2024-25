import { useEffect, useRef } from "react";
import type { Question } from "../data/questions";
import { VisualBlock } from "./VisualBlock";
import { CodeBlock } from "./CodeBlock";

interface QuestionViewProps {
  question: Question;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const tagColors: Record<string, string> = {
  Core: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  SQL: "bg-green-500/20 text-green-300 border-green-500/30",
  Transaction: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Concurrency: "bg-red-500/20 text-red-300 border-red-500/30",
  Normalization: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "ER Model": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "FD": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Architecture: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Relational Algebra": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "PL/SQL": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-700 text-blue-300 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>');
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [question.id]);

  const { content } = question;

  return (
    <div className="max-w-4xl mx-auto" ref={topRef}>
      {/* Question Header Card */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shrink-0">
            <span className="text-white font-bold text-lg">{question.questionNumber}</span>
            <span className="text-blue-200 font-bold text-sm">{question.part}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${tagColors[tag] || "bg-slate-700 text-slate-300 border-slate-600"}`}
                >
                  {tag}
                </span>
              ))}
              <span className="ml-auto text-xs px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold">
                {question.marks} Marks
              </span>
            </div>
            <h1 className="text-xl font-bold text-white leading-tight">{question.title}</h1>
          </div>
        </div>

        {/* Full Question Box */}
        <div className="mt-5 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">❓</span>
            <div>
              <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">Question</div>
              <p className="text-slate-200 font-medium leading-relaxed">
                Q{question.questionNumber}.{question.part.toUpperCase()}: {content.fullQuestion}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Definition ── */}
      <section className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-sm shrink-0">1</div>
          <h2 className="text-lg font-bold text-white">Definition</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
          <p
            className="text-slate-300 leading-relaxed text-sm"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content.definition) }}
          />
        </div>
      </section>

      {/* ── SECTION 2: Core Concepts ── */}
      <section className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm shrink-0">2</div>
          <h2 className="text-lg font-bold text-white">Core Concepts & Logic</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
        </div>
        <div className="space-y-4">
          {content.coreConcepts.map((concept, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <span className="text-indigo-400 font-bold text-xs">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-white font-semibold mb-2 text-sm"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(concept.heading) }}
                  />
                  <p
                    className="text-slate-400 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(concept.body) }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Visual ── */}
      {content.visual && (
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-600 text-white font-bold text-sm shrink-0">3</div>
            <h2 className="text-lg font-bold text-white">Visual Representation</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </div>
          <VisualBlock visual={content.visual} />
        </section>
      )}

      {/* ── SECTION 4: Technical Implementation ── */}
      {content.technicalImpl && content.technicalImpl.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-600 text-white font-bold text-sm shrink-0">4</div>
            <h2 className="text-lg font-bold text-white">Technical Implementation</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
          </div>
          <div className="space-y-4">
            {content.technicalImpl.map((impl, idx) => (
              <CodeBlock
                key={idx}
                heading={impl.heading}
                code={impl.content}
                language={impl.language}
                type={impl.type}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── SECTION 5: Key Points ── */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-600 text-white font-bold text-sm shrink-0">5</div>
          <h2 className="text-lg font-bold text-white">Key Points / Conclusion</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/50 to-transparent"></div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-2xl p-5">
          <div className="grid gap-2">
            {content.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-700/30 transition-colors">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[9px] font-bold">{idx + 1}</span>
                </div>
                <p
                  className="text-slate-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(point) }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pb-8">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-5 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
        >
          ← Previous Question
        </button>

        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Q{question.questionNumber}.{question.part.toUpperCase()}</span>
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 border border-blue-500 text-white rounded-xl hover:bg-blue-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
        >
          Next Question →
        </button>
      </div>
    </div>
  );
};
