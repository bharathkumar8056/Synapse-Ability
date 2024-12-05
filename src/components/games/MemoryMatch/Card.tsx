import React from 'react';

interface CardProps {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export function Card({ content, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flip-card w-24 h-24 cursor-pointer
        ${isFlipped ? 'flipped' : ''}
        ${isMatched ? 'opacity-60' : ''}
      `}
    >
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front w-full h-full">
          <div className="w-full h-full bg-indigo-600 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-white text-2xl">?</span>
          </div>
        </div>
        <div className="flip-card-back w-full h-full">
          <div className="w-full h-full bg-white rounded-lg shadow-md border-2 border-indigo-200 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-600">{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}