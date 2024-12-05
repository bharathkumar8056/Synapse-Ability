import { useState, useMemo } from 'react';
import { games } from '../../../data/games';

export function useGameState() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const filteredGames = useMemo(() => {
    return selectedCategory
      ? games.filter(game => game.category === selectedCategory)
      : games;
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedGame,
    setSelectedGame,
    filteredGames
  };
}