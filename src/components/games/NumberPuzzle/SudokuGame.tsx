import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import { useTheme } from '../../../context/ThemeContext';
import { RewardPopup } from '../../RewardPopup';

const INITIAL_BOARD = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

export function SudokuGame() {
  const { addProgress, addReward } = useUser();
  const { darkMode } = useTheme();
  const [board, setBoard] = useState<number[][]>(INITIAL_BOARD.map(row => [...row]));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [reward, setReward] = useState<any>(null);

  const isValid = (row: number, col: number, num: number): boolean => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num && x !== col) return false;
      if (board[x][col] === num && x !== row) return false;
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num &&
            (boxRow + i !== row || boxCol + j !== col)) {
          return false;
        }
      }
    }

    return true;
  };

  const handleCellClick = (row: number, col: number) => {
    if (INITIAL_BOARD[row][col] === 0) {
      setSelectedCell([row, col]);
    }
  };

  const handleNumberInput = (num: number) => {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    
    if (isValid(row, col, num)) {
      const newBoard = board.map(row => [...row]);
      newBoard[row][col] = num;
      setBoard(newBoard);

      if (isBoardComplete(newBoard)) {
        const reward = {
          amount: 100,
          message: 'Congratulations! You solved the Sudoku puzzle!',
          type: 'completion' as const
        };
        setReward(reward);
        addReward(reward);
        addProgress({
          gameId: 'number-puzzle',
          score: 100,
          completedAt: new Date()
        });
      }
    }
  };

  const isBoardComplete = (board: number[][]): boolean => {
    return board.every(row => row.every(cell => cell !== 0));
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6">
      <div className={`grid grid-cols-9 gap-px ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} p-px rounded-lg overflow-hidden`}>
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={`
                aspect-square flex items-center justify-center text-lg font-medium
                ${INITIAL_BOARD[rowIndex][colIndex] === 0 
                  ? darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50'
                  : darkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-100'
                }
                ${selectedCell?.[0] === rowIndex && selectedCell?.[1] === colIndex
                  ? darkMode
                    ? 'ring-2 ring-indigo-500 bg-indigo-900 text-white'
                    : 'ring-2 ring-indigo-500 bg-indigo-100 text-indigo-900'
                  : darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }
                transition-all duration-200
              `}
            >
              {cell || ''}
            </button>
          ))
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-9 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button
            key={num}
            onClick={() => handleNumberInput(num)}
            className={`
              aspect-square rounded-lg font-medium text-lg
              ${darkMode
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
              }
              transition-colors shadow-sm hover:shadow-md
            `}
          >
            {num}
          </button>
        ))}
      </div>

      {reward && <RewardPopup reward={reward} onClose={() => setReward(null)} />}
    </div>
  );
}