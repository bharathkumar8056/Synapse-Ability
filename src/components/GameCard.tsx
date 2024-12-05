import React from 'react';
import { Brain, CalendarCheck, Users, GraduationCap } from 'lucide-react';
import { Game } from '../types';
import { useTheme } from '../context/ThemeContext';

interface GameCardProps {
  game: Game;
  onSelect: (gameId: string) => void;
}

const iconMap = {
  Brain,
  CalendarCheck,
  Users,
  GraduationCap
};

export function GameCard({ game, onSelect }: GameCardProps) {
  const IconComponent = iconMap[game.icon as keyof typeof iconMap];
  const { darkMode } = useTheme();

  return (
    <button
      onClick={() => onSelect(game.id)}
      className={`${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } rounded-xl p-6 shadow-lg transition-all duration-300 w-full text-left`}
    >
      <div className="flex items-center gap-4">
        <div className={`
          p-3 rounded-lg
          ${game.category === 'cognitive' ? 'bg-purple-100 text-purple-600' : ''}
          ${game.category === 'daily-living' ? 'bg-green-100 text-green-600' : ''}
          ${game.category === 'social' ? 'bg-blue-100 text-blue-600' : ''}
        `}>
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
        <div>
          <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {game.title}
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {game.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${game.difficulty === 'easy' ? 'bg-green-100 text-green-700' : ''}
          ${game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' : ''}
          ${game.difficulty === 'hard' ? 'bg-red-100 text-red-700' : ''}
        `}>
          {game.difficulty}
        </span>
      </div>
    </button>
  );
}