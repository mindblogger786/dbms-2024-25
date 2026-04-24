import { useState, useEffect, useRef } from 'react';
import { question1Answers } from './data/Question1';
import { question2Answers } from './data/Question2';
import { question3Answers } from './data/Question3';
import { question4Answers } from './data/Question4';
import { question5Answers } from './data/Question5';
import { question6Answers } from './data/Question6';
import { question7Answers } from './data/Question7';

interface AnswerItem {
  id: string;
  title: string;
  component: React.FC;
}

interface QuestionGroup {
  groupTitle: string;
  groupNumber: string;
  answers: AnswerItem[];
}

const allQuestions: QuestionGroup[] = [
  { groupTitle: 'Question 1 — Short Answers (1a to 1g)', groupNumber: '1', answers: question1Answers },
  { groupTitle: 'Question 2 — Descriptive Answers (2a to 2e)', groupNumber: '2', answers: question2Answers },
  { groupTitle: 'Question 3 — ER Model & Abstraction (3a to 3b)', groupNumber: '3', answers: question3Answers },
  { groupTitle: 'Question 4 — Constraints & PL/SQL (4a to 4b)', groupNumber: '4', answers: question4Answers },
  { groupTitle: 'Question 5 — FD Theory (5a to 5b)', groupNumber: '5', answers: question5Answers },
  { groupTitle: 'Question 6 — Transactions & Serializability (6a to 6b)', groupNumber: '6', answers: question6Answers },
  { groupTitle: 'Question 7 — Concurrency Control (7a to 7b)', groupNumber: '7', answers: question7Answers },
];

function App() {
  const [activeId, setActiveId] = useState('1a');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = document.querySelectorAll('[data-question-id]');
      let current = '1a';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          current = section.getAttribute('data-question-id') || '1a';
        }
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuestion = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const totalAnswers = allQuestions.reduce((sum, g) => sum + g.answers.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  📚 DBMS — Previous Year Questions Solutions (Set 2)
                </h1>
                <p className="text-indigo-200 text-xs md:text-sm">
                  MCA University Exam Guide • {totalAnswers} Answers • Comprehensive &amp; Exam-Oriented
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Score 100% 🎯</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-[60px] left-0 z-40 lg:z-10 h-[calc(100vh-60px)] w-72 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="p-4">
            <div className="mb-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">Quick Navigation</p>
              <p className="text-xs text-indigo-500 mt-1">Click any question to jump</p>
            </div>
            {allQuestions.map((group) => (
              <div key={group.groupNumber} className="mb-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Q{group.groupNumber}</h3>
                <ul className="space-y-0.5">
                  {group.answers.map((answer) => (
                    <li key={answer.id}>
                      <button
                        onClick={() => scrollToQuestion(answer.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
                          activeId === answer.id ? 'bg-indigo-600 text-white font-semibold shadow-md' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                        }`}
                      >
                        {answer.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main ref={mainRef} className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">
          {/* Introduction Banner */}
          <div className="mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">🎓 Database Management Systems</h2>
            <p className="text-indigo-100 text-sm md:text-base mb-4">
              Complete solutions to Previous Year Questions (Set 2) — crafted by a Senior University Professor with 20+ years of experience.
              Each answer follows: Definition → Core Concepts → Visual Representation → Technical Implementation → Key Points.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">22 Sub-Questions</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">400-600 Words Each</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Exam-Oriented</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">SQL &amp; Relational Algebra</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Mark-Scoring Format</span>
            </div>
          </div>

          {/* All Questions */}
          {allQuestions.map((group, groupIdx) => (
            <div key={group.groupNumber} className="mb-10">
              {groupIdx > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  <span className="text-gray-400 text-xs">• • •</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">{group.groupNumber}</div>
                <div className="border-b-2 border-indigo-200 flex-1 pb-2">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">{group.groupTitle}</h2>
                </div>
              </div>
              <div className="space-y-8">
                {group.answers.map((answer) => {
                  const Component = answer.component;
                  return (
                    <div key={answer.id} id={answer.id} data-question-id={answer.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6 lg:p-8 scroll-mt-20">
                      <Component />
                    </div>
                  );
                })}
              </div>
              <div className="mt-10"><hr className="border-t-4 border-indigo-200 rounded" /></div>
            </div>
          ))}

          {/* Footer */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
            <p className="text-gray-600 text-sm mb-2">
              📝 <strong>Study Tip:</strong> Focus on the <em>Key Points for Revision</em> sections for last-minute preparation.
              Practice all SQL examples and relational algebra expressions by writing them out.
            </p>
            <p className="text-indigo-600 font-semibold text-sm">Best of luck for your exams! 🎯 Score 100%!</p>
            <p className="text-gray-400 text-xs mt-2">Prepared with ❤️ for MCA Students • DBMS PYQ Solutions (Set 2)</p>
          </div>
        </main>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110" aria-label="Scroll to top">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}
    </div>
  );
}

export default App;
