import React from 'react';
import { WordGame } from './WordGame';

export function WordPuzzle() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Word Puzzle</h1>
        <p className="text-gray-600">
          Unscramble the letters to find the hidden word. Use hints if you get stuck!
        </p>
      </div>
      <WordGame />
    </div>
  );
}