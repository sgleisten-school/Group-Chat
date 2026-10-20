import React from 'react';
import { Scenario } from '../types';
import { Briefcase, BookOpen, Sparkles, MessageCircle, ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

interface HomeScreenProps {
  scenarios: Scenario[];
  onSelectScenario: (scenarioId: string) => void;
  onOpenToolbox: () => void;
  onOpenTeacherGuide: () => void;
  completedScenarioIds: string[];
  triedMoveIds: string[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  scenarios,
  onSelectScenario,
  onOpenToolbox,
  onOpenTeacherGuide,
  completedScenarioIds,
  triedMoveIds,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A33] mb-4 text-balance">
          Group Chat Lab
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[#2E7D6B] mb-4">
          Step into the chat. Practice what to do.
        </p>
        <p className="text-base sm:text-lg text-[#1F2A33]/80 leading-relaxed max-w-2xl mx-auto">
          When someone in a group chat gets hurt or left out, you have choices.
          Try different moves as a bystander, see what happens next, and talk about what felt true.
        </p>

        {/* Quick action strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenToolbox}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E7D6B] text-white font-semibold shadow-xs hover:bg-[#256657] transition-colors cursor-pointer text-base"
          >
            <Briefcase className="w-5 h-5" />
            <span>Open The 5 Moves Toolbox</span>
            {triedMoveIds.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {triedMoveIds.length} explored
              </span>
            )}
          </button>
          <button
            onClick={onOpenTeacherGuide}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0ECE1] hover:bg-[#E5DFD1] text-[#1F2A33] font-semibold border border-[#E9E2D5] transition-colors cursor-pointer text-base"
          >
            <BookOpen className="w-5 h-5 text-[#2E7D6B]" />
            <span>For Teachers: Facilitator Prompts</span>
          </button>
        </div>
      </div>

      {/* Philosophy Callout: Formation not Compliance */}
      <div className="bg-[#FAF6EE] border border-[#E9E2D5] rounded-2xl p-5 sm:p-6 mb-10 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm sm:text-base text-[#1F2A33]/85">
        <div className="w-12 h-12 rounded-xl bg-[#E8B04A]/25 text-[#1F2A33] flex items-center justify-center shrink-0 text-2xl font-bold">
          🌱
        </div>
        <div className="flex-1">
          <span className="font-bold text-[#1F2A33] block mb-1">
            Grounded in Montessori Formation
          </span>
          <p className="leading-relaxed">
            There are no scores, tests, or "wrong answer" screens here. Real chats are messy and complicated.
            Notice how your body feels, test different moves with your partner, and explore what honest results look like.
          </p>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F2A33]">
            Choose a Scenario
          </h2>
          <p className="text-sm text-[#1F2A33]/70">
            7 realistic moments designed for pairs, small groups, or whole-class projection
          </p>
        </div>
        <span className="text-xs font-semibold text-[#1F2A33]/60 bg-[#F0ECE1] px-3 py-1 rounded-full border border-[#E9E2D5]">
          Ages 9–12 · Grade 4 reading level
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => {
          const isCompleted = completedScenarioIds.includes(scenario.id);
          const isFeatured = scenario.id === 'the-pile-on';

          return (
            <div
              key={scenario.id}
              className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                isFeatured
                  ? 'border-[#2E7D6B] ring-2 ring-[#2E7D6B]/20 md:col-span-2 lg:col-span-1'
                  : 'border-[#E9E2D5] hover:border-[#2E7D6B]/50'
              }`}
            >
              <div className="p-6">
                {/* Header row of card */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#FAF6EE] border border-[#E9E2D5] flex items-center justify-center font-bold text-xs text-[#2E7D6B]">
                      0{scenario.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/60">
                      Chat: {scenario.groupName}
                    </span>
                  </div>
                  {isFeatured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2E7D6B] text-white text-[11px] font-bold">
                      Fully Worked
                    </span>
                  )}
                  {isCompleted && !isFeatured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-[#2E7D6B]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Explored
                    </span>
                  )}
                </div>

                {/* Scenario Title & Subtitle */}
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1F2A33] mb-1">
                  {scenario.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#2E7D6B] mb-3">
                  {scenario.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-[#1F2A33]/80 leading-relaxed mb-4">
                  {scenario.summary}
                </p>

                {/* Viewer Role & Character Avatars */}
                <div className="bg-[#FAF6EE] rounded-xl p-3 border border-[#E9E2D5]/70 mb-4">
                  <div className="text-xs font-semibold text-[#1F2A33]/70 mb-2">
                    You step in as: <strong className="text-[#1F2A33]">{scenario.viewerRole}</strong>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {scenario.characters.map((c) => (
                      <div
                        key={c.id}
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                          c.isViewer
                            ? 'bg-[#2E7D6B] text-white font-bold ring-2 ring-[#2E7D6B]/30'
                            : 'bg-white text-[#1F2A33] border border-[#E9E2D5]'
                        }`}
                        title={`${c.name}${c.isViewer ? ' (You)' : ''}`}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                          style={{ backgroundColor: c.avatarColor }}
                        >
                          {c.initials}
                        </span>
                        <span>{c.name}</span>
                        {c.isViewer && <span className="text-[10px] opacity-80">(You)</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0 mt-auto">
                <button
                  onClick={() => onSelectScenario(scenario.id)}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAF6EE] hover:bg-[#2E7D6B] text-[#1F2A33] hover:text-white font-bold text-sm sm:text-base border border-[#E9E2D5] hover:border-[#2E7D6B] flex items-center justify-center gap-2 transition-all cursor-pointer group"
                >
                  <span>Step into this chat</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Classroom Ground Rules Footer */}
      <div className="mt-14 border-t border-[#E9E2D5] pt-8 text-center text-xs text-[#1F2A33]/60 max-w-2xl mx-auto space-y-1">
        <p className="font-semibold text-[#1F2A33]/80">
          Privacy First: No student names, accounts, or personal information are ever entered or saved.
        </p>
        <p>
          Designed for shared classroom devices, Chromebooks, and overhead interactive boards.
        </p>
      </div>
    </div>
  );
};
