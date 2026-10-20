import React from 'react';
import { TOOLBOX_MOVES, ADULT_BACKUP_GUIDE } from '../data/toolbox';
import { MoveId } from '../types';
import { X, CheckCircle2, ShieldAlert, Sparkles, MessageCircle, HeartHandshake, Compass, Users, Eye, ArrowRight } from 'lucide-react';

interface ToolboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  triedMoveIds: string[];
}

const MOVE_ICONS: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
};

export const ToolboxModal: React.FC<ToolboxModalProps> = ({
  isOpen,
  onClose,
  triedMoveIds,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="toolbox-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="bg-[#FAF6EE] text-[#1F2A33] w-full max-w-4xl rounded-3xl border border-[#E9E2D5] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#E9E2D5] flex items-center justify-between bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D6B]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A33]/70">
                Bystander Strategy Toolkit
              </span>
            </div>
            <h2 id="toolbox-title" className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F2A33]">
              The Moves Toolbox
            </h2>
            <p className="text-sm text-[#1F2A33]/70">
              5 moves you can make when someone gets hurt or left out online
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6EE] border border-[#E9E2D5] text-xs font-bold text-[#2E7D6B]">
              <span>Session progress:</span>
              <span>
                {triedMoveIds.length} of {TOOLBOX_MOVES.length} moves tested
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#1F2A33]/70 hover:text-[#1F2A33] hover:bg-[#FAF6EE] border border-transparent hover:border-[#E9E2D5] transition-colors cursor-pointer"
              aria-label="Close Toolbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          {/* Intro Box */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E2D5] text-sm sm:text-base text-[#1F2A33]/85 leading-relaxed">
            <strong className="text-[#1F2A33] block mb-1">
              Remember: Not every move works in every chat.
            </strong>
            Some moments need a quiet private check-in. Others need someone to redirect the topic or speak up plainly.
            Practicing these moves helps you choose what feels right for the situation and for your comfort level.
          </div>

          {/* 5 Moves Cards */}
          <div className="space-y-4">
            {TOOLBOX_MOVES.map((move) => {
              const hasBeenTried = triedMoveIds.includes(move.id);

              return (
                <div
                  key={move.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all ${
                    hasBeenTried
                      ? 'border-[#2E7D6B] ring-1 ring-[#2E7D6B]/30 shadow-xs'
                      : 'border-[#E9E2D5]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                        style={{ backgroundColor: move.accentColor }}
                      >
                        {MOVE_ICONS[move.iconName] || <MessageCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1F2A33]/60 uppercase tracking-wide">
                          Move {move.number}
                        </div>
                        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1F2A33]">
                          {move.name}
                        </h3>
                      </div>
                    </div>

                    {hasBeenTried ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EE] text-[#2E7D6B] font-bold text-xs border border-[#2E7D6B]/40">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D6B]" />
                        <span>Tried in this session</span>
                      </span>
                    ) : (
                      <span className="text-xs text-[#1F2A33]/50 font-medium">
                        Not tried yet
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base font-medium text-[#1F2A33] mb-4">
                    {move.shortAction}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {/* When this helps */}
                    <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-[#E9E2D5]/70">
                      <span className="font-bold text-[#2E7D6B] block mb-1">
                        ✓ When this helps:
                      </span>
                      <p className="text-[#1F2A33]/85 leading-relaxed">
                        {move.whenThisHelps}
                      </p>
                    </div>

                    {/* What to watch out for */}
                    <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-[#E9E2D5]/70">
                      <span className="font-bold text-[#B5533F] block mb-1">
                        ! What to watch out for:
                      </span>
                      <p className="text-[#1F2A33]/85 leading-relaxed">
                        {move.whatToWatchOutFor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Know When to Get an Adult Panel */}
          <div className="bg-[#FAF0ED] rounded-2xl p-5 sm:p-7 border border-[#B5533F]/30 text-[#1F2A33]">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#B5533F] text-white flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#B5533F]">
                  {ADULT_BACKUP_GUIDE.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#1F2A33]/85">
                  {ADULT_BACKUP_GUIDE.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1F2A33]/85 leading-relaxed mb-4">
              {ADULT_BACKUP_GUIDE.corePrinciple}
            </p>

            <div className="bg-white/80 rounded-xl p-4 border border-[#B5533F]/20 mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B5533F] block mb-2">
                Always bring in a trusted adult if:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#1F2A33]/90 list-disc list-inside">
                {ADULT_BACKUP_GUIDE.whenToTell.map((point, index) => (
                  <li key={index} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs sm:text-sm text-[#1F2A33]/80 bg-white/50 p-3 rounded-lg border border-[#B5533F]/15">
              <strong>How you can start the conversation: </strong>
              <em>{ADULT_BACKUP_GUIDE.howToTell}</em>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E9E2D5] bg-white flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-semibold cursor-pointer transition-colors text-sm sm:text-base"
          >
            Back to Scenarios
          </button>
        </div>
      </div>
    </div>
  );
};
