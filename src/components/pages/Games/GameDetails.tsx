import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { MemoryMatch } from '../../games/MemoryMatch';
import { QuizMaster } from '../../games/QuizMaster';
import { WordPuzzle } from '../../games/WordPuzzle';
import { NumberPuzzle } from '../../games/NumberPuzzle';
import { DailyRoutine } from '../../games/DailyRoutine';
import { SocialScenarios } from '../../games/SocialScenarios';

interface GameDetailsProps {
  gameId: string;
  onBack: () => void;
}

export function GameDetails({ gameId, onBack }: GameDetailsProps) {
  const renderGame = () => {
    switch (gameId) {
      case 'memory-match':
        return <MemoryMatch />;
      case 'quiz-master':
        return <QuizMaster />;
      case 'word-puzzle':
        return <WordPuzzle />;
      case 'number-puzzle':
        return <NumberPuzzle />;
      case 'daily-routine':
        return <DailyRoutine />;
      case 'social-scenarios':
        return <SocialScenarios />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Games
      </button>
      {renderGame()}
    </div>
  );
}