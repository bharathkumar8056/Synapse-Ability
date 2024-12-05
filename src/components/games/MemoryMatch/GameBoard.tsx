import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { shuffleArray } from '../../../utils/array';
import { useUser } from '../../../context/UserContext';
import { RewardPopup } from '../../RewardPopup';
import { GameReward } from '../../../types';

// Card pairs content - mix of numbers and words for variety
const CARD_PAIRS = [
  '1', '2', '3', '4', '5', '6', '7', '8',
  'VIJAY', 'RAJINI', 'THALA', 'REBEL', 'SRK', 'DQ', 'KAMAL', 'STR'
];

interface CardType {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export function GameBoard() {
  const { addProgress, addReward } = useUser();
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [reward, setReward] = useState<GameReward | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Select 8 random pairs from CARD_PAIRS
    const selectedPairs = shuffleArray([...CARD_PAIRS]).slice(0, 8);
    const duplicatedPairs = [...selectedPairs, ...selectedPairs];
    const shuffledPairs = shuffleArray(duplicatedPairs);
    
    setCards(
      shuffledPairs.map((content, index) => ({
        id: index,
        content,
        isFlipped: false,
        isMatched: false,
      }))
    );
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setReward(null);
    setGameStarted(false);
  };

  const handleCardClick = (cardId: number) => {
    const card = cards[cardId];
    
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    if (card.isMatched || card.isFlipped || flippedCards.length === 2) {
      return;
    }

    const newCards = [...cards];
    newCards[cardId].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlippedCards;
      
      if (cards[firstId].content === cards[secondId].content) {
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setMatches(matches + 1);
        setFlippedCards([]);

        // Check if game is complete
        if (matches + 1 === 8) {
          const isPerfect = moves < 12;
          const reward: GameReward = isPerfect
            ? { amount: 100, message: 'Perfect game! You completed the memory match with minimal moves!', type: 'perfect' }
            : { amount: 50, message: 'Great job completing the memory match!', type: 'completion' };
          
          setReward(reward);
          addReward(reward);
          addProgress({
            gameId: 'memory-match',
            score: moves,
            completedAt: new Date()
          });
        }
      } else {
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-between w-full max-w-md mb-4">
        <span className="text-gray-600">Moves: {moves}</span>
        <span className="text-gray-600">Matches: {matches}/8</span>
        <button
          onClick={initializeGame}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Reset Game
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      {!gameStarted && (
        <div className="text-center text-gray-600">
          Click any card to start the game!
        </div>
      )}
      {reward && (
        <RewardPopup
          reward={reward}
          onClose={() => setReward(null)}
        />
      )}
    </div>
  );
}