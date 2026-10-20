import React from 'react';
import { BookOpen, RefreshCw, Briefcase, Sparkles, Monitor, Activity } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  onOpenToolbox: () => void;
  onOpenTeacherGuide: () => void;
  onResetSession: () => void;
  triedMovesCount: number;
  totalMovesCount: number;
  isLargeText: boolean;
  onToggleLargeText: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  currentScenarioTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onOpenToolbox,
  onOpenTeacherGuide,
  onResetSession,
  triedMovesCount,
  totalMovesCount,
  isLargeText,
  onToggleLargeText,
  reducedMotion,
  onToggleReducedMotion,
  currentScenarioTitle,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF6EE]/95 backdrop-blur-sm border-b border-[#E9E2D5] px-4 sm:px-6 py-3 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2E7D6B] rounded-lg p-1 -m-1"
          aria-label="Group Chat Lab home"
        >
          <div className="w-9 h-9 rounded-xl bg-[#2E7D6B] flex items-center justify-center text-white font-bold shadow-xs group-hover:scale-105 transition-transform">
            💬
          </div>
          <div>
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1F2A33] block leading-none">
              Group Chat Lab
            </span>
            <span className="text-xs text-[#1F2A33]/70 font-medium hidden sm:block">
              Montessori Digital Citizenship
            </span>
          </div>
        </button>

        {/* Center: Current Scenario indicator if active */}
        {currentScenarioTitle && (
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#1F2A33]/80 bg-[#F0ECE1] px-3 py-1.5 rounded-full border border-[#E9E2D5]">
            <span className="w-2 h-2 rounded-full bg-[#2E7D6B]"></span>
            <span>Scenario: {currentScenarioTitle}</span>
          </div>
        )}

        {/* Nav Links & Classroom Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* My Toolbox Button with counter badge */}
          <button
            onClick={onOpenToolbox}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#1F2A33] bg-[#F0ECE1] hover:bg-[#E5DFD1] border border-[#E9E2D5] rounded-lg transition-colors cursor-pointer"
            title="Open The Moves Toolbox"
          >
            <Briefcase className="w-4 h-4 text-[#2E7D6B]" />
            <span className="whitespace-nowrap">My Toolbox</span>
            <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#2E7D6B] text-white text-[11px] font-bold">
              {triedMovesCount}/{totalMovesCount}
            </span>
          </button>

          {/* For Teachers Link */}
          <button
            onClick={onOpenTeacherGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#2E7D6B] hover:text-[#1F2A33] hover:bg-[#F0ECE1] rounded-lg transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span className="whitespace-nowrap">For Teachers</span>
          </button>

          {/* Projector / Large Text Toggle */}
          <button
            onClick={onToggleLargeText}
            className={`p-2 rounded-lg border transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1 ${
              isLargeText
                ? 'bg-[#2E7D6B] text-white border-[#2E7D6B]'
                : 'bg-[#F0ECE1] text-[#1F2A33] border-[#E9E2D5] hover:bg-[#E5DFD1]'
            }`}
            title={isLargeText ? 'Large Classroom Text ON' : 'Switch to Large Classroom Text'}
            aria-pressed={isLargeText}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">Large Text</span>
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={onToggleReducedMotion}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              reducedMotion
                ? 'bg-[#1F2A33] text-white border-[#1F2A33]'
                : 'bg-[#F0ECE1] text-[#1F2A33] border-[#E9E2D5] hover:bg-[#E5DFD1]'
            }`}
            title={reducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
            aria-label="Toggle reduced motion"
          >
            <Activity className="w-4 h-4" />
          </button>

          {/* Session Reset Button */}
          <button
            onClick={onResetSession}
            className="p-2 text-[#1F2A33]/70 hover:text-[#B5533F] hover:bg-[#FAF0ED] border border-[#E9E2D5] rounded-lg transition-colors cursor-pointer"
            title="Reset Session (clear tried moves and progress)"
            aria-label="Reset session"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
