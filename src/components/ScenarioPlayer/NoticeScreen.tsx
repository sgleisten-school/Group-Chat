import React, { useState, useEffect } from 'react';
import { Scenario } from '../../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NoticeScreenProps {
  scenario: Scenario;
  onContinue: () => void;
  reducedMotion: boolean;
  isLargeText: boolean;
}

export const NoticeScreen: React.FC<NoticeScreenProps> = ({
  scenario,
  onContinue,
  reducedMotion,
  isLargeText,
}) => {
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'Inhale') return 'Hold';
        if (prev === 'Hold') return 'Exhale';
        return 'Inhale';
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-16 text-center">
      {/* Step tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E9E2D5] text-xs font-bold uppercase tracking-wider text-[#2E7D6B] mb-6">
        <span>Step 1: Notice First</span>
      </div>

      {/* Main heading */}
      <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A33] mb-6 tracking-tight text-balance">
        {scenario.noticePrompt.heading}
      </h2>

      {/* Scenario setup */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] shadow-xs mb-8 text-left space-y-4">
        <p className={`${isLargeText ? 'text-xl' : 'text-lg sm:text-xl'} text-[#1F2A33]/90 leading-relaxed font-medium`}>
          {scenario.noticePrompt.body}
        </p>

        <div className="pt-2 border-t border-[#E9E2D5]/70">
          <p className={`${isLargeText ? 'text-lg' : 'text-base sm:text-lg'} text-[#2E7D6B] font-semibold italic`}>
            "{scenario.noticePrompt.reflectionPrompt}"
          </p>
        </div>

        {/* Somatic body cue */}
        <div className="bg-[#FAF6EE] rounded-2xl p-4 border border-[#E9E2D5] flex items-center gap-4 text-xs sm:text-sm text-[#1F2A33]/80">
          <div className="w-10 h-10 rounded-full bg-[#E8B04A]/30 text-[#1F2A33] flex items-center justify-center shrink-0 text-xl font-bold">
            🫀
          </div>
          <p>
            Does your stomach feel tight? Does your heart speed up? In Montessori education, noticing physical reactions helps us understand situations before our minds rush to judge.
          </p>
        </div>
      </div>

      {/* Calming Breath Circle (Subtle, non-distracting) */}
      {!reducedMotion && (
        <div className="flex flex-col items-center justify-center mb-8">
          <div
            className={`w-24 h-24 rounded-full border-4 border-[#2E7D6B]/40 bg-[#2E7D6B]/10 flex items-center justify-center transition-all duration-1000 ${
              breathPhase === 'Inhale'
                ? 'scale-110 border-[#2E7D6B]'
                : breathPhase === 'Hold'
                ? 'scale-110 border-[#E8B04A]'
                : 'scale-90 border-[#2E7D6B]/30'
            }`}
          >
            <span className="text-xs font-bold text-[#1F2A33] uppercase tracking-wider">
              {breathPhase}
            </span>
          </div>
          <span className="text-xs text-[#1F2A33]/60 mt-2">Take a slow breath together</span>
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full sm:w-auto min-w-[260px] py-4 px-8 rounded-2xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-bold text-lg sm:text-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-3 group focus-visible:ring-4 focus-visible:ring-[#2E7D6B]/40"
      >
        <span>Enter the group chat</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-4 text-xs text-[#1F2A33]/60">
        You will step into the conversation as <strong>{scenario.viewerRole}</strong>
      </div>
    </div>
  );
};
