import React from 'react';
import { Header } from '../../Header';
import { CategoryFilter } from '../../CategoryFilter';
import { GameGrid } from './GameGrid';
import { GameDetails } from './GameDetails';
import { useGameState } from './useGameState';
import { useTheme } from '../../../context/ThemeContext';

export function Games() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedGame,
    setSelectedGame,
    filteredGames
  } = useGameState();
  
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedGame ? (
          <GameDetails 
            gameId={selectedGame} 
            onBack={() => setSelectedGame(null)} 
          />
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome to Your Learning Journey
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore engaging games and activities designed to enhance your daily living skills,
                cognitive abilities, and social interactions.
              </p>
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <GameGrid 
              games={filteredGames}
              onSelectGame={setSelectedGame}
            />
          </>
        )}
      </main>
    </div>
  );
}