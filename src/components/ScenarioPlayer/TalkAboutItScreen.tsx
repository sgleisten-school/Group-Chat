import React from 'react';
import { RotateCcw, ArrowRight, Home, MessageSquare } from 'lucide-react';

interface TalkAboutItScreenProps {
  scenarioTitle: string;
  questions: string[];
  onTryDifferentMove: () => void;
  onNextScenario: () => void;
  onBackToAll: () => void;
  hasNextScenario: boolean;
  isLargeText: boolean;
}

export const TalkAboutItScreen: React.FC<TalkAboutItScreenProps> = ({
  scenarioTitle,
  questions,
  onTryDifferentMove,
  onNextScenario,
  onBackToAll,
  hasNextScenario,
  isLargeText,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 animate-fade-in text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E9E2D5] text-xs font-bold uppercase tracking-wider text-[#2E7D6B] mb-4">
        <MessageSquare className="w-4 h-4" />
        <span>Step 3: Conversation Circle</span>
      </div>

      <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F2A33] mb-3">
        Talk About It Out Loud
      </h2>
      <p className="text-base sm:text-lg text-[#1F2A33]/75 max-w-xl mx-auto mb-8">
        There are no text boxes or quizzes here. Turn to your partner or classroom circle and discuss these 3 questions:
      </p>

      {/* Discussion Questions Cards */}
      <div className="space-y-4 max-w-2xl mx-auto text-left mb-10">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E9E2D5] shadow-xs flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2E7D6B]/15 text-[#2E7D6B] font-bold text-base flex items-center justify-center shrink-0">
              Q{index + 1}
            </div>
            <p
              className={`${
                isLargeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              } font-serif-display font-bold text-[#1F2A33] leading-snug`}
            >
              {q}
            </p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="bg-[#FAF6EE] rounded-3xl p-6 border border-[#E9E2D5] max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/60 block mb-4">
          Where would your group like to go next?
        </span>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Try a different move (rewind) */}
          <button
            onClick={onTryDifferentMove}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#1F2A33] font-bold border-2 border-[#2E7D6B] flex items-center justify-center gap-2 transition-colors cursor-pointer text-base shadow-xs"
          >
            <RotateCcw className="w-4 h-4 text-[#2E7D6B]" />
            <span>Try a different move</span>
          </button>

          {/* Next scenario */}
          {hasNextScenario && (
            <button
              onClick={onNextScenario}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-base shadow-xs"
            >
              <span>Next Scenario</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {/* Back to all scenarios */}
          <button
            onClick={onBackToAll}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#1F2A33] font-semibold border border-[#E9E2D5] flex items-center justify-center gap-2 transition-colors cursor-pointer text-base"
          >
            <Home className="w-4 h-4 text-[#1F2A33]/60" />
            <span>All Scenarios</span>
          </button>
        </div>
      </div>
    </div>
  );
};
