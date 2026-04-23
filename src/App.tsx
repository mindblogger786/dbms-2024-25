import { useState, useCallback } from "react";
import { questions } from "./data/questions";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { QuestionView } from "./components/QuestionView";
import { HomePage } from "./components/HomePage";

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeQuestion = questions.find((q) => q.id === activeId) || null;
  const activeIndex = questions.findIndex((q) => q.id === activeId);

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHome = useCallback(() => {
    setActiveId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = useCallback(() => {
    if (activeIndex < questions.length - 1) {
      setActiveId(questions[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveId(questions[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <Header activeQuestion={activeId} onHome={handleHome} />

      {/* Layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <Sidebar
          activeId={activeId}
          onSelect={handleSelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile menu button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium"
            >
              <span>☰</span>
              <span>Browse Questions</span>
            </button>
          </div>

          {/* Content area */}
          {activeQuestion ? (
            <QuestionView
              question={activeQuestion}
              onNext={handleNext}
              onPrev={handlePrev}
              hasNext={activeIndex < questions.length - 1}
              hasPrev={activeIndex > 0}
            />
          ) : (
            <HomePage onSelectQuestion={handleSelect} />
          )}
        </main>
      </div>

      {/* Floating action button for mobile */}
      {activeId && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white text-xl hover:bg-blue-500 transition-all z-20 hover:scale-110 active:scale-95"
        >
          ☰
        </button>
      )}
    </div>
  );
}
