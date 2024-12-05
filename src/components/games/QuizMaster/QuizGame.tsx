import React, { useState, useEffect } from 'react';
import { questions } from '../../../data/questions';
import { hintOptions } from '../../../data/hints';
import { useUser } from '../../../context/UserContext';
import { QuizQuestion, HintOption } from '../../../types';
import { RewardPopup } from '../../RewardPopup';

export function QuizGame() {
  const { user, addProgress, addReward, spendCoins } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [availableOptions, setAvailableOptions] = useState<number[]>([0, 1, 2, 3]);
  const [reward, setReward] = useState<any>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    loadQuestion();
  }, [user.currentLevel.quiz]);

  const loadQuestion = () => {
    const levelQuestions = questions.filter(q => {
      if (user.currentLevel.quiz <= 10) return q.difficulty === 'easy';
      if (user.currentLevel.quiz <= 20) return q.difficulty === 'medium';
      return q.difficulty === 'hard';
    });
    
    const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
    setCurrentQuestion(randomQuestion);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setAvailableOptions([0, 1, 2, 3]);
    setShowExplanation(false);
  };

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered || !currentQuestion) return;
    
    setSelectedAnswer(optionIndex);
    setIsAnswered(true);
    
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const reward = {
        amount: currentQuestion.coins,
        message: 'Correct answer! Keep going!',
        type: 'completion' as const,
        moneyReward: currentQuestion.moneyReward
      };
      
      setReward(reward);
      addReward(reward);
      addProgress({
        gameId: 'quiz-master',
        score: currentQuestion.coins,
        completedAt: new Date(),
        level: user.currentLevel.quiz
      });
    }
    
    setShowExplanation(true);
  };

  const useHint = (hint: HintOption) => {
    if (!currentQuestion || !spendCoins(hint.cost)) return;

    switch (hint.type) {
      case '50-50':
        const correctAnswer = currentQuestion.correctAnswer;
        const wrongAnswers = availableOptions.filter(i => i !== correctAnswer);
        const remainingWrong = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        setAvailableOptions([correctAnswer, remainingWrong].sort());
        break;
      case 'skip':
        loadQuestion();
        break;
      case 'hint':
        // Show hint implementation
        break;
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Level {user.currentLevel.quiz}</span>
          <div className="flex gap-2">
            {hintOptions.map(hint => (
              <button
                key={hint.id}
                onClick={() => useHint(hint)}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200"
                title={hint.description}
              >
                {hint.type} ({hint.cost} coins)
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            availableOptions.includes(index) && (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`p-4 rounded-lg text-left transition-colors ${
                  isAnswered
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : index === selectedAnswer
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                    : 'bg-white border-2 border-gray-200 hover:border-indigo-500'
                }`}
              >
                {option}
              </button>
            )
          ))}
        </div>
      </div>

      {showExplanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{currentQuestion.explanation}</p>
          <button
            onClick={loadQuestion}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next Question
          </button>
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