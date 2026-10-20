import React, { useState } from 'react';
import { SCENARIOS } from './data/scenarios';
import { TOOLBOX_MOVES } from './data/toolbox';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { ScenarioPlayer } from './components/ScenarioPlayer/ScenarioPlayer';
import { ToolboxModal } from './components/ToolboxModal';
import { TeacherGuideModal } from './components/TeacherGuideModal';

export default function App() {
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [isToolboxOpen, setIsToolboxOpen] = useState<boolean>(false);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState<boolean>(false);

  // In-memory session state (cleared on Reset, no external storage)
  const [triedMoveIds, setTriedMoveIds] = useState<string[]>([]);
  const [completedScenarioIds, setCompletedScenarioIds] = useState<string[]>([]);

  // Classroom accessibility preferences
  const [isLargeText, setIsLargeText] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || null;
  const activeScenarioIndex = activeScenario
    ? SCENARIOS.findIndex((s) => s.id === activeScenario.id)
    : -1;
  const hasNextScenario =
    activeScenarioIndex >= 0 && activeScenarioIndex < SCENARIOS.length - 1;

  // Handlers
  const handleSelectScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextScenario = () => {
    if (hasNextScenario) {
      const next = SCENARIOS[activeScenarioIndex + 1];
      setActiveScenarioId(next.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveScenarioId(null);
    }
  };

  const handleRegisterTriedMove = (moveId: string) => {
    setTriedMoveIds((prev) => (prev.includes(moveId) ? prev : [...prev, moveId]));
  };

  const handleScenarioCompleted = (scenarioId: string) => {
    setCompletedScenarioIds((prev) =>
      prev.includes(scenarioId) ? prev : [...prev, scenarioId]
    );
  };

  const handleResetSession = () => {
    if (
      window.confirm(
        'Reset session? This will clear all tested moves and progress for the next student group.'
      )
    ) {
      setTriedMoveIds([]);
      setCompletedScenarioIds([]);
      setActiveScenarioId(null);
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#FAF6EE] text-[#1F2A33] flex flex-col font-sans transition-all ${
        isLargeText ? 'text-lg' : 'text-base'
      }`}
    >
      {/* Header Contract */}
      <Header
        onGoHome={() => setActiveScenarioId(null)}
        onOpenToolbox={() => setIsToolboxOpen(true)}
        onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
        onResetSession={handleResetSession}
        triedMovesCount={triedMoveIds.length}
        totalMovesCount={TOOLBOX_MOVES.length}
        isLargeText={isLargeText}
        onToggleLargeText={() => setIsLargeText((prev) => !prev)}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        currentScenarioTitle={activeScenario?.title}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeScenario ? (
          <ScenarioPlayer
            scenario={activeScenario}
            onBackToHome={() => setActiveScenarioId(null)}
            onNextScenario={handleNextScenario}
            hasNextScenario={hasNextScenario}
            onRegisterTriedMove={handleRegisterTriedMove}
            onScenarioCompleted={handleScenarioCompleted}
            isLargeText={isLargeText}
            reducedMotion={reducedMotion}
          />
        ) : (
          <HomeScreen
            scenarios={SCENARIOS}
            onSelectScenario={handleSelectScenario}
            onOpenToolbox={() => setIsToolboxOpen(true)}
            onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
            completedScenarioIds={completedScenarioIds}
            triedMoveIds={triedMoveIds}
          />
        )}
      </main>

      {/* Toolbox Modal */}
      <ToolboxModal
        isOpen={isToolboxOpen}
        onClose={() => setIsToolboxOpen(false)}
        triedMoveIds={triedMoveIds}
      />

      {/* Teacher Guide Modal */}
      <TeacherGuideModal
        isOpen={isTeacherGuideOpen}
        onClose={() => setIsTeacherGuideOpen(false)}
        onJumpToScenario={(scId) => handleSelectScenario(scId)}
      />
    </div>
  );
}
