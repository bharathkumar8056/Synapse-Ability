import React from 'react';
import { QuizGame } from './QuizGame';

export function QuizMaster() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Master</h1>
        <p className="text-gray-600">
          Test your knowledge, earn coins, and level up! Use hints when you need help,
          but choose wisely - they cost coins!
        </p>
      </div>
      <QuizGame />
    </div>
  );
}