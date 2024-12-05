import React from 'react';
import { SudokuGame } from './SudokuGame';

export function NumberPuzzle() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sudoku Puzzle</h1>
        <p className="text-gray-600">
          Fill the grid with numbers 1-9. Each row, column, and 3x3 box must contain all digits.
        </p>
      </div>
      <SudokuGame />
    </div>
  );
}