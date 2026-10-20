import React from 'react';
import { MoveChoice, WordingOption } from '../../types';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';

interface WordingPickerProps {
  choice: MoveChoice;
  viewerName: string;
  onSelectWording: (wording: WordingOption) => void;
  onBackToMoves: () => void;
  isLargeText: boolean;
}

export const WordingPicker: React.FC<WordingPickerProps> = ({
  choice,
  viewerName,
  onSelectWording,
  onBackToMoves,
  isLargeText,
}) => {
  const wordingOptions = choice.wordingOptions || [];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#2E7D6B] ring-2 ring-[#2E7D6B]/20 shadow-lg my-6 animate-fade-in">
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#E9E2D5]">
        <button
          onClick={onBackToMoves}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F2A33]/70 hover:text-[#1F2A33] px-2.5 py-1 rounded-lg hover:bg-[#FAF6EE] cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change move</span>
        </button>
        <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D6B]">
          Step 2: Practice your phrasing
        </span>
      </div>

      <div className="mb-5">
        <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F2A33]">
          How do you want {viewerName} to say it?
        </h3>
        <p className="text-sm text-[#1F2A33]/75 mt-1">
          Words carry tone. Tap the option that feels most natural and helpful to you.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {wordingOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelectWording(opt)}
            className="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-[#E9E2D5] hover:border-[#2E7D6B] bg-[#FAF6EE] hover:bg-white transition-all cursor-pointer group shadow-xs hover:shadow-md focus-visible:ring-4 focus-visible:ring-[#2E7D6B]/30"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white text-[#2E7D6B] border border-[#E9E2D5] text-xs font-bold">
                {opt.label}
              </span>
              <span className="text-xs text-[#2E7D6B] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <span>Send this</span>
                <Send className="w-3.5 h-3.5" />
              </span>
            </div>

            <p
              className={`font-semibold text-[#1F2A33] leading-relaxed ${
                isLargeText ? 'text-xl' : 'text-lg'
              }`}
            >
              "{opt.text}"
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
