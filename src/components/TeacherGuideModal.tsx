import React from 'react';
import { SCENARIOS } from '../data/scenarios';
import { X, BookOpen, Lightbulb, Users, HelpCircle, CheckCircle2 } from 'lucide-react';

interface TeacherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToScenario: (scenarioId: string) => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({
  isOpen,
  onClose,
  onJumpToScenario,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="teacher-guide-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="bg-[#FAF6EE] text-[#1F2A33] w-full max-w-4xl rounded-3xl border border-[#E9E2D5] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E9E2D5] flex items-center justify-between bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B04A]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/70">
                Educator & Facilitator Guide
              </span>
            </div>
            <h2 id="teacher-guide-title" className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F2A33]">
              Facilitation Notes & Classroom Prompts
            </h2>
            <p className="text-sm text-[#1F2A33]/70">
              Guidance grounded in Montessori moral formation for upper elementary (grades 4–6)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#1F2A33]/70 hover:text-[#1F2A33] hover:bg-[#FAF6EE] border border-transparent hover:border-[#E9E2D5] transition-colors cursor-pointer"
            aria-label="Close Guide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          {/* Core Philosophy Callout */}
          <div className="bg-white rounded-2xl p-5 border border-[#E9E2D5] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#2E7D6B] font-bold text-base">
              <Lightbulb className="w-5 h-5" />
              <span>Core Principle: Formation over Compliance</span>
            </div>
            <p className="text-sm sm:text-base text-[#1F2A33]/85 leading-relaxed">
              In Montessori philosophy, moral development is cultivated through experience, reflection, and agency—not through
              fear of getting caught or memorizing "correct" answers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm pt-2">
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#E9E2D5]/70">
                <strong className="block text-[#1F2A33] mb-1">1. Somatic Awareness</strong>
                <span>The "Notice first" step invites students to feel tension in their body before reacting intellectually.</span>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#E9E2D5]/70">
                <strong className="block text-[#1F2A33] mb-1">2. No Perfect Moves</strong>
                <span>Real digital responses produce mixed outcomes. Speaking up can feel awkward; private check-ins don't fix the group chat.</span>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-[#E9E2D5]/70">
                <strong className="block text-[#1F2A33] mb-1">3. Talk It Out Loud</strong>
                <span>Students work in pairs or as a class circle. The learning happens in their conversation, not in a digital score.</span>
              </div>
            </div>
          </div>

          {/* Scenario-by-Scenario Facilitator Cards */}
          <div className="space-y-4">
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1F2A33]">
              Scenario Facilitation Cards
            </h3>

            {SCENARIOS.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E9E2D5] space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-[#2E7D6B] uppercase tracking-wide">
                      Scenario 0{s.number} · {s.groupName}
                    </span>
                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#1F2A33]">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#1F2A33]/70 font-medium">
                      Viewer Role: {s.viewerRole}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onJumpToScenario(s.id);
                    }}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#FAF6EE] hover:bg-[#2E7D6B] text-[#1F2A33] hover:text-white border border-[#E9E2D5] transition-colors cursor-pointer"
                  >
                    Open Scenario
                  </button>
                </div>

                {/* What to listen for */}
                <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-[#E9E2D5]/70 text-xs sm:text-sm">
                  <span className="font-bold text-[#B5533F] block mb-1">
                    🎧 What to listen for in student pairs:
                  </span>
                  <p className="text-[#1F2A33]/85 leading-relaxed">
                    {s.teacherNote.listenFor}
                  </p>
                </div>

                {/* Follow up question to ask the group */}
                <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-[#E9E2D5]/70 text-xs sm:text-sm">
                  <span className="font-bold text-[#2E7D6B] block mb-1">
                    💬 Whole-group follow-up question:
                  </span>
                  <p className="text-[#1F2A33] font-medium italic leading-relaxed">
                    "{s.teacherNote.followUpQuestion}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E9E2D5] bg-white flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-semibold cursor-pointer transition-colors text-sm sm:text-base"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
