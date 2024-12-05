import React from 'react';
import { GameBoard } from './GameBoard';

export function MemoryMatch() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Memory Match</h1>
        <p className="text-gray-600">
          Find matching pairs of cards to improve your memory and concentration.
          Click on cards to flip them and try to remember their positions!
        </p>
      </div>
      <GameBoard />
    </div>
  );
}