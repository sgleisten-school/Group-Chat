import React from 'react';
import { MoveChoice, Scenario } from '../../types';
import { TOOLBOX_MOVES } from '../../data/toolbox';
import { MessageCircle, HeartHandshake, Compass, Users, Eye, ArrowRight } from 'lucide-react';

interface ChoicePickerProps {
  scenario: Scenario;
  onSelectChoice: (choice: MoveChoice) => void;
  isLargeText: boolean;
}

const ICONS_BY_MOVE: Record<string, React.ReactNode> = {
  check_in_privately: <MessageCircle className="w-5 h-5" />,
  speak_up_kindly: <HeartHandshake className="w-5 h-5" />,
  redirect: <Compass className="w-5 h-5" />,
  get_backup: <Users className="w-5 h-5" />,
  wait_and_watch: <Eye className="w-5 h-5" />,
};

export const ChoicePicker: React.FC<ChoicePickerProps> = ({
  scenario,
  onSelectChoice,
  isLargeText,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#2E7D6B] ring-2 ring-[#2E7D6B]/20 shadow-lg my-6 animate-fade-in">
      <div className="mb-5 text-center sm:text-left">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#E9E2D5] text-xs font-bold uppercase tracking-wider text-[#2E7D6B] mb-2">
          Pause: You are watching this happen
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F2A33]">
          {scenario.pauseQuestion}
        </h3>
        <p className="text-sm text-[#1F2A33]/70 mt-1">
          Pick a move to try with your partner. You can rewind and explore the other moves anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {scenario.choices.map((choice, index) => {
          const toolboxDef = TOOLBOX_MOVES.find((m) => m.id === choice.moveId);
          const icon = ICONS_BY_MOVE[choice.moveId] || <MessageCircle className="w-5 h-5" />;

          return (
            <button
              key={index}
              onClick={() => onSelectChoice(choice)}
              className="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-[#E9E2D5] hover:border-[#2E7D6B] bg-[#FAF6EE] hover:bg-white transition-all cursor-pointer group flex items-start gap-4 shadow-xs hover:shadow-md focus-visible:ring-4 focus-visible:ring-[#2E7D6B]/30"
            >
              {/* Move Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs"
                style={{ backgroundColor: toolboxDef?.accentColor || '#2E7D6B' }}
              >
                {icon}
              </div>

              {/* Text info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/60">
                    Move #{toolboxDef?.number || index + 1}: {toolboxDef?.name}
                  </span>
                </div>
                <div
                  className={`font-serif-display font-bold text-[#1F2A33] group-hover:text-[#2E7D6B] transition-colors ${
                    isLargeText ? 'text-xl' : 'text-lg sm:text-xl'
                  }`}
                >
                  {choice.title}
                </div>
                <p className="text-xs sm:text-sm text-[#1F2A33]/80 mt-1 leading-relaxed">
                  {choice.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#2E7D6B] text-[#1F2A33] group-hover:text-white border border-[#E9E2D5] flex items-center justify-center shrink-0 self-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
