import React from 'react';
import { GameCard } from '../../GameCard';
import { Game } from '../../../types';

interface GameGridProps {
  games: Game[];
  onSelectGame: (gameId: string) => void;
}

export function GameGrid({ games, onSelectGame }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onSelect={() => onSelectGame(game.id)}
        />
      ))}
    </div>
  );
}