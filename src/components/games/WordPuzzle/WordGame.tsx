import React, { useState, useEffect } from 'react';
import { useUser } from '../../../context/UserContext';
import { RewardPopup } from '../../RewardPopup';
import { shuffleArray } from '../../../utils/array';

const WORDS = [
  { word: 'APPLE', hint: 'A common fruit' },
  { word: 'HOUSE', hint: 'A place to live' },
  { word: 'SMILE', hint: 'A happy expression' },
  { word: 'BEACH', hint: 'Sandy shore' },
  { word: 'CLOUD', hint: 'Float in the sky' }
];

export function WordGame() {
  const { user, addProgress, addReward, spendCoins } = useUser();
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [currentHint, setCurrentHint] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [reward, setReward] = useState<any>(null);

  useEffect(() => {
    loadNewWord();
  }, []);

  const loadNewWord = () => {
    const wordObj = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(wordObj.word);
    setCurrentHint(wordObj.hint);
    setScrambledWord(shuffleArray(wordObj.word.split('')).join(''));
    setUserInput('');
    setShowHint(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.toUpperCase() === currentWord) {
      const reward = {
        amount: 50,
        message: 'Great job solving the word puzzle!',
        type: 'completion' as const
      };
      setReward(reward);
      addReward(reward);
      addProgress({
        gameId: 'word-puzzle',
        score: 50,
        completedAt: new Date()
      });
      setTimeout(loadNewWord, 1500);
    }
  };

  const useHint = () => {
    if (spendCoins(20)) {
      setShowHint(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Unscramble the Word</h2>
        <div className="text-3xl font-mono tracking-wider text-indigo-600 mb-4">
          {scrambledWord}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
            className="w-full p-2 text-center text-2xl border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            maxLength={currentWord.length}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Check Answer
            </button>
            <button
              type="button"
              onClick={useHint}
              className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200"
              disabled={showHint}
            >
              Hint (20 coins)
            </button>
          </div>
        </form>
        {showHint && (
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-yellow-800">
            Hint: {currentHint}
          </div>
        )}
      </div>
      {reward && <RewardPopup reward={reward} onClose={() => setReward(null)} />}
    </div>
  );
}