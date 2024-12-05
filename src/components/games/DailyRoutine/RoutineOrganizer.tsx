import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import { RewardPopup } from '../../RewardPopup';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Activity {
  id: string;
  text: string;
  correctOrder: number;
}

const DAILY_ACTIVITIES: Activity[] = [
  { id: '1', text: 'Wake up and get out of bed', correctOrder: 1 },
  { id: '2', text: 'Brush teeth and wash face', correctOrder: 2 },
  { id: '3', text: 'Get dressed', correctOrder: 3 },
  { id: '4', text: 'Eat breakfast', correctOrder: 4 },
  { id: '5', text: 'Pack bag for the day', correctOrder: 5 },
  { id: '6', text: 'Go to school/work', correctOrder: 6 },
  { id: '7', text: 'Have lunch', correctOrder: 7 },
  { id: '8', text: 'Complete daily tasks', correctOrder: 8 },
  { id: '9', text: 'Have dinner', correctOrder: 9 },
  { id: '10', text: 'Prepare for bed', correctOrder: 10 }
];

export function RoutineOrganizer() {
  const { addProgress, addReward } = useUser();
  const [activities, setActivities] = useState<Activity[]>(() => 
    shuffleActivities(DAILY_ACTIVITIES.slice(0, 5))
  );
  const [reward, setReward] = useState<any>(null);

  function shuffleActivities(acts: Activity[]) {
    const shuffled = [...acts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const moveActivity = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < activities.length) {
      const newActivities = [...activities];
      [newActivities[index], newActivities[newIndex]] = 
      [newActivities[newIndex], newActivities[index]];
      setActivities(newActivities);
    }
  };

  const checkOrder = () => {
    const isCorrect = activities.every((activity, index) => 
      activity.correctOrder === activities[0].correctOrder + index
    );

    if (isCorrect) {
      const reward = {
        amount: 50,
        message: 'Great job organizing your daily routine!',
        type: 'completion' as const
      };
      setReward(reward);
      addReward(reward);
      addProgress({
        gameId: 'daily-routine',
        score: 100,
        completedAt: new Date()
      });
    }
  };

  const newSequence = () => {
    setActivities(shuffleActivities(DAILY_ACTIVITIES.slice(0, 5)));
    setReward(null);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Organize Your Daily Routine</h2>
      <p className="text-gray-600 mb-4">Arrange these activities in the correct order of your day.</p>
      <div className="mb-4 space-y-2">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex flex-col">
              <button
                onClick={() => moveActivity(index, 'up')}
                disabled={index === 0}
                className="p-1 text-gray-600 hover:text-indigo-600 disabled:text-gray-300"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => moveActivity(index, 'down')}
                disabled={index === activities.length - 1}
                className="p-1 text-gray-600 hover:text-indigo-600 disabled:text-gray-300"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
            <span className="flex-1">{activity.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={checkOrder}
          className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Check Order
        </button>
        <button
          onClick={newSequence}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          New Sequence
        </button>
      </div>
      {reward && <RewardPopup reward={reward} onClose={() => setReward(null)} />}
    </div>
  );
}