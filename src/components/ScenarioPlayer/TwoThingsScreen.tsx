import React from 'react';
import { ArrowRight, Scale, Sparkles } from 'lucide-react';

interface TwoThingsScreenProps {
  observations: string[];
  outcomeSummary: string;
  onContinue: () => void;
  isLargeText: boolean;
}

export const TwoThingsScreen: React.FC<TwoThingsScreenProps> = ({
  observations,
  outcomeSummary,
  onContinue,
  isLargeText,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-14 animate-fade-in text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E9E2D5] text-xs font-bold uppercase tracking-wider text-[#E8B04A] mb-4">
        <Scale className="w-4 h-4" />
        <span>Holding Both Truths</span>
      </div>

      <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F2A33] mb-4">
        Two Things Can Be True
      </h2>
      <p className="text-base sm:text-lg text-[#1F2A33]/75 max-w-xl mx-auto mb-8">
        Life online is rarely 100% simple or easy. Notice how two different feelings can exist at the exact same time.
      </p>

      {/* Outcome reality recap */}
      <div className="bg-[#FAF6EE] rounded-2xl p-4 sm:p-5 border border-[#E9E2D5] text-left mb-6 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/60 block mb-1">
          What just happened:
        </span>
        <p className="text-sm sm:text-base text-[#1F2A33]/90 font-medium">
          {outcomeSummary}
        </p>
      </div>

      {/* Observations Cards */}
      <div className="space-y-4 max-w-2xl mx-auto text-left mb-10">
        {observations.map((item, index) => {
          // split on "AND" if present
          const parts = item.split(' AND ');

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E9E2D5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#E8B04A]/20 text-[#1F2A33] font-bold text-sm flex items-center justify-center shrink-0">
                {index + 1}
              </div>

              {parts.length === 2 ? (
                <div className="flex-1 text-[#1F2A33]">
                  <span className={`${isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold block`}>
                    {parts[0]}
                  </span>
                  <div className="inline-block my-1 px-2 py-0.5 rounded bg-[#FAF6EE] text-[11px] font-bold uppercase tracking-wider text-[#B5533F] border border-[#E9E2D5]">
                    AND AT THE SAME TIME
                  </div>
                  <span className={`${isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold block text-[#2E7D6B]`}>
                    {parts[1]}
                  </span>
                </div>
              ) : (
                <p className={`${isLargeText ? 'text-lg' : 'text-base'} font-semibold text-[#1F2A33] flex-1`}>
                  {item}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onContinue}
        className="py-4 px-8 rounded-2xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-3 group focus-visible:ring-4 focus-visible:ring-[#2E7D6B]/40"
      >
        <span>Discuss with your group</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
