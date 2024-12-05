import React from 'react';
import { GameReward } from '../types';

interface RewardPopupProps {
  reward: GameReward;
  onClose: () => void;
}

export function RewardPopup({ reward, onClose }: RewardPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 animate-bounce-in">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎉</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Reward Earned!</h3>
          <p className="text-gray-600 mb-4">{reward.message}</p>
          <div className="text-2xl font-bold text-yellow-600 mb-6">
            +{reward.amount} coins
          </div>
          <button
            onClick={onClose}
            className="w-full bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 transition-colors"
          >
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
}