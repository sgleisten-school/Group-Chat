import React, { useState, useEffect, useRef } from 'react';
import { Scenario, MoveChoice, WordingOption, ChatMessage } from '../../types';
import { NoticeScreen } from './NoticeScreen';
import { ChatMessageItem } from './ChatMessageItem';
import { ChoicePicker } from './ChoicePicker';
import { WordingPicker } from './WordingPicker';
import { TwoThingsScreen } from './TwoThingsScreen';
import { TalkAboutItScreen } from './TalkAboutItScreen';
import { ArrowLeft, Play, SkipForward, RotateCcw, ArrowRight, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';

interface ScenarioPlayerProps {
  scenario: Scenario;
  onBackToHome: () => void;
  onNextScenario: () => void;
  hasNextScenario: boolean;
  onRegisterTriedMove: (moveId: string) => void;
  onScenarioCompleted: (scenarioId: string) => void;
  isLargeText: boolean;
  reducedMotion: boolean;
}

type PlayerPhase =
  | 'notice'
  | 'initial_chat'
  | 'choice_point'
  | 'wording_selection'
  | 'branch_chat'
  | 'two_things'
  | 'talk_about_it';

export const ScenarioPlayer: React.FC<ScenarioPlayerProps> = ({
  scenario,
  onBackToHome,
  onNextScenario,
  hasNextScenario,
  onRegisterTriedMove,
  onScenarioCompleted,
  isLargeText,
  reducedMotion,
}) => {
  const [phase, setPhase] = useState<PlayerPhase>('notice');

  // Chat playback state
  const [displayedInitialCount, setDisplayedInitialCount] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingSenderName, setTypingSenderName] = useState<string>('');
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  // Decision state
  const [selectedChoice, setSelectedChoice] = useState<MoveChoice | null>(null);
  const [selectedWording, setSelectedWording] = useState<WordingOption | null>(null);
  const [displayedBranchCount, setDisplayedBranchCount] = useState<number>(0);
  const [isWaitAndWatchFollowUp, setIsWaitAndWatchFollowUp] = useState<boolean>(false);

  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat when new messages appear
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    }
  }, [displayedInitialCount, displayedBranchCount, isTyping, phase]);

  // Initial Chat Progression
  useEffect(() => {
    if (phase !== 'initial_chat') return;

    if (displayedInitialCount < scenario.initialMessages.length) {
      const nextMsg = scenario.initialMessages[displayedInitialCount];
      const sender = scenario.characters.find((c) => c.id === nextMsg.senderId);

      if (!nextMsg.isSystemNotice && sender) {
        setIsTyping(true);
        setTypingSenderName(sender.name);
      } else {
        setIsTyping(false);
      }

      const timer = setTimeout(() => {
        setIsTyping(false);
        setDisplayedInitialCount((prev) => prev + 1);
      }, reducedMotion ? 400 : 1800);

      return () => clearTimeout(timer);
    } else {
      // Finished initial messages -> pause at choice point
      const pauseTimer = setTimeout(() => {
        setPhase('choice_point');
      }, 1000);
      return () => clearTimeout(pauseTimer);
    }
  }, [phase, displayedInitialCount, scenario, reducedMotion]);

  // Branch Chat Progression
  useEffect(() => {
    if (phase !== 'branch_chat' || !selectedChoice) return;

    const totalBranchMsgs = selectedChoice.branchMessages.length;

    if (displayedBranchCount < totalBranchMsgs) {
      const nextMsg = selectedChoice.branchMessages[displayedBranchCount];
      const sender = scenario.characters.find((c) => c.id === nextMsg.senderId);

      if (!nextMsg.isSystemNotice && !nextMsg.isDeleted && sender && sender.id !== scenario.viewerId) {
        setIsTyping(true);
        setTypingSenderName(sender.name);
      } else {
        setIsTyping(false);
      }

      const timer = setTimeout(() => {
        setIsTyping(false);
        setDisplayedBranchCount((prev) => prev + 1);
      }, reducedMotion ? 500 : 1900);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      // If this was wait and watch, check if we need to show the follow up prompt
      if (selectedChoice.isWaitAndWatch) {
        setIsWaitAndWatchFollowUp(true);
      }
    }
  }, [phase, displayedBranchCount, selectedChoice, scenario, reducedMotion]);

  // Advance initial chat manually
  const handleManualAdvanceInitial = () => {
    if (displayedInitialCount < scenario.initialMessages.length) {
      setIsTyping(false);
      setDisplayedInitialCount((prev) => prev + 1);
    } else {
      setPhase('choice_point');
    }
  };

  // Choice selected
  const handleSelectChoice = (choice: MoveChoice) => {
    setSelectedChoice(choice);
    onRegisterTriedMove(choice.moveId);

    if (choice.wordingOptions && choice.wordingOptions.length > 0) {
      setPhase('wording_selection');
    } else {
      // Direct branch (like Wait and Watch)
      setPhase('branch_chat');
      setDisplayedBranchCount(0);
    }
  };

  // Wording selected
  const handleSelectWording = (wording: WordingOption) => {
    setSelectedWording(wording);
    setPhase('branch_chat');
    setDisplayedBranchCount(0);
  };

  // Rewind to choice point
  const handleRewindToChoices = () => {
    setSelectedChoice(null);
    setSelectedWording(null);
    setDisplayedBranchCount(0);
    setIsWaitAndWatchFollowUp(false);
    setPhase('choice_point');
  };

  // Full reset scenario
  const handleResetScenario = () => {
    setDisplayedInitialCount(0);
    setSelectedChoice(null);
    setSelectedWording(null);
    setDisplayedBranchCount(0);
    setIsWaitAndWatchFollowUp(false);
    setPhase('notice');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Top Breadcrumb Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E9E2D5]">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F2A33]/70 hover:text-[#1F2A33] px-2.5 py-1.5 rounded-lg hover:bg-[#F0ECE1] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Scenarios</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#2E7D6B] uppercase tracking-wider">
            Scenario 0{scenario.number}
          </span>
          <span className="text-xs text-[#1F2A33]/40">·</span>
          <span className="text-xs font-semibold text-[#1F2A33]/80">
            {scenario.title}
          </span>
        </div>

        <button
          onClick={handleResetScenario}
          className="p-1.5 text-xs font-medium text-[#1F2A33]/60 hover:text-[#1F2A33] rounded-lg hover:bg-[#F0ECE1] cursor-pointer flex items-center gap-1"
          title="Restart this scenario"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Restart</span>
        </button>
      </div>

      {/* PHASE 1: Notice Screen */}
      {phase === 'notice' && (
        <NoticeScreen
          scenario={scenario}
          onContinue={() => {
            setPhase('initial_chat');
            setDisplayedInitialCount(0);
          }}
          reducedMotion={reducedMotion}
          isLargeText={isLargeText}
        />
      )}

      {/* CHAT VIEW PHASES (initial_chat, choice_point, wording_selection, branch_chat) */}
      {(phase === 'initial_chat' ||
        phase === 'choice_point' ||
        phase === 'wording_selection' ||
        phase === 'branch_chat') && (
        <div className="space-y-4">
          {/* Chat Container Window */}
          <div className="bg-white rounded-3xl border border-[#E9E2D5] shadow-lg overflow-hidden flex flex-col">
            {/* Chat App Header */}
            <div className="p-4 sm:p-5 bg-[#FAF6EE] border-b border-[#E9E2D5] flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#2E7D6B] text-white flex items-center justify-center font-bold text-base shadow-xs">
                  💬
                </div>
                <div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1F2A33] leading-none mb-1">
                    {scenario.groupName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#1F2A33]/70 font-medium">
                    <span>{scenario.characters.length} participants</span>
                    <span>·</span>
                    <span className="text-[#2E7D6B] font-semibold">
                      You are {scenario.viewerRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Playback Controls during initial flow */}
              {phase === 'initial_chat' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleManualAdvanceInitial}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F0ECE1] text-[#1F2A33] text-xs font-bold border border-[#E9E2D5] cursor-pointer shadow-xs transition-colors"
                  >
                    <span>Next message</span>
                    <SkipForward className="w-3.5 h-3.5 text-[#2E7D6B]" />
                  </button>
                </div>
              )}
            </div>

            {/* Chat Scroll Area */}
            <div
              ref={chatScrollRef}
              className="p-4 sm:p-6 bg-[#FAF6EE]/50 min-h-[360px] max-h-[520px] overflow-y-auto space-y-1"
            >
              {/* Date stamp */}
              <div className="flex justify-center mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F2A33]/50 bg-white px-3 py-1 rounded-full border border-[#E9E2D5]">
                  Today · Group Chat
                </span>
              </div>

              {/* Initial messages */}
              {scenario.initialMessages
                .slice(0, displayedInitialCount)
                .map((msg) => (
                  <ChatMessageItem
                    key={msg.id}
                    message={msg}
                    characters={scenario.characters}
                    viewerId={scenario.viewerId}
                    isLargeText={isLargeText}
                  />
                ))}

              {/* User chosen message in branch */}
              {selectedWording && (
                <ChatMessageItem
                  message={{
                    id: 'viewer_sent',
                    senderId: scenario.viewerId,
                    text: selectedWording.text,
                    timestamp: 'Just now',
                    isPrivateDM: selectedChoice?.moveId === 'check_in_privately',
                  }}
                  characters={scenario.characters}
                  viewerId={scenario.viewerId}
                  isLargeText={isLargeText}
                />
              )}

              {/* Branch outcome messages */}
              {selectedChoice &&
                selectedChoice.branchMessages
                  .slice(0, displayedBranchCount)
                  .map((msg) => (
                    <ChatMessageItem
                      key={msg.id}
                      message={msg}
                      characters={scenario.characters}
                      viewerId={scenario.viewerId}
                      isLargeText={isLargeText}
                    />
                  ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 px-4 py-2 text-xs text-[#1F2A33]/60 italic animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D6B]"></span>
                  <span>{typingSenderName} is typing...</span>
                </div>
              )}
            </div>

            {/* Bottom Bar: Context state */}
            <div className="p-3 bg-white border-t border-[#E9E2D5] flex items-center justify-between text-xs text-[#1F2A33]/60">
              <span>Generic Group Chat Sandbox</span>
              <span>No data saved · Classroom formation mode</span>
            </div>
          </div>

          {/* INTERACTION DECK BELOW CHAT */}

          {/* CHOICE PICKER */}
          {phase === 'choice_point' && (
            <ChoicePicker
              scenario={scenario}
              onSelectChoice={handleSelectChoice}
              isLargeText={isLargeText}
            />
          )}

          {/* WORDING PICKER */}
          {phase === 'wording_selection' && selectedChoice && (
            <WordingPicker
              choice={selectedChoice}
              viewerName={scenario.viewerRole}
              onSelectWording={handleSelectWording}
              onBackToMoves={() => setPhase('choice_point')}
              isLargeText={isLargeText}
            />
          )}

          {/* BRANCH OUTCOME ACTIONS */}
          {phase === 'branch_chat' && displayedBranchCount >= (selectedChoice?.branchMessages.length || 0) && (
            <div className="bg-white rounded-3xl p-6 border border-[#2E7D6B] ring-1 ring-[#2E7D6B]/30 shadow-md space-y-4 animate-fade-in">
              {/* Wait and Watch Follow-up prompt */}
              {isWaitAndWatchFollowUp && selectedChoice?.followUpPrompt && (
                <div className="bg-[#FAF0ED] p-4 rounded-2xl border border-[#B5533F]/30 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B5533F] block mb-1">
                    Waiting isn't the end of the story
                  </span>
                  <p className="text-base sm:text-lg font-serif-display font-bold text-[#1F2A33] mb-3">
                    {selectedChoice.followUpPrompt}
                  </p>
                  <p className="text-sm text-[#1F2A33]/80 mb-3">
                    You can still reach out to Sam privately or talk to a teammate tomorrow.
                  </p>
                  <button
                    onClick={handleRewindToChoices}
                    className="py-2.5 px-4 rounded-xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-bold text-sm cursor-pointer shadow-xs"
                  >
                    Try reaching out now
                  </button>
                </div>
              )}

              {/* Outcome summary explanation */}
              <div className="bg-[#FAF6EE] p-4 rounded-2xl border border-[#E9E2D5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D6B] block mb-1">
                  Here is what happened next:
                </span>
                <p className="text-sm sm:text-base text-[#1F2A33] font-medium leading-relaxed">
                  {selectedChoice?.outcomeSummary}
                </p>
              </div>

              {/* Navigation to Reflection */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleRewindToChoices}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white hover:bg-[#FAF6EE] text-[#1F2A33] font-bold border border-[#E9E2D5] flex items-center justify-center gap-2 cursor-pointer transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4 text-[#2E7D6B]" />
                  <span>Try a different move</span>
                </button>

                <button
                  onClick={() => {
                    onScenarioCompleted(scenario.id);
                    setPhase('two_things');
                  }}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#2E7D6B] hover:bg-[#256657] text-white font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors text-base shadow-sm"
                >
                  <span>See what we noticed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PHASE 3: Two Things Can Be True */}
      {phase === 'two_things' && (
        <TwoThingsScreen
          observations={scenario.twoThingsCanBeTrue}
          outcomeSummary={selectedChoice?.outcomeSummary || ''}
          onContinue={() => setPhase('talk_about_it')}
          isLargeText={isLargeText}
        />
      )}

      {/* PHASE 4: Talk About It Screen */}
      {phase === 'talk_about_it' && (
        <TalkAboutItScreen
          scenarioTitle={scenario.title}
          questions={scenario.discussionQuestions}
          onTryDifferentMove={handleRewindToChoices}
          onNextScenario={onNextScenario}
          onBackToAll={onBackToHome}
          hasNextScenario={hasNextScenario}
          isLargeText={isLargeText}
        />
      )}
    </div>
  );
};
