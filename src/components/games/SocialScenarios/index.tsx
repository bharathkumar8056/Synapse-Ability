import React, { useState } from 'react';
import { ScenarioCard } from './ScenarioCard';
import { useUser } from '../../../context/UserContext';
import { RewardPopup } from '../../RewardPopup';

const SCENARIOS = [
  {
    id: '1',
    scenario: 'You accidentally bump into someone at the store. What should you do?',
    options: [
      'Ignore them and walk away',
      'Say "excuse me" and apologize',
      'Blame them for being in your way',
      'Pretend it did not happen'
    ],
    correctOption: 1,
    explanation: 'It is polite to apologize when we accidentally bump into someone.'
  },
  {
    id: '2',
    scenario: 'Your friend looks sad today. What is the best response?',
    options: [
      'Ignore them because it is not your problem',
      'Tell them to cheer up and get over it',
      'Ask if they are okay and if they want to talk',
      'Tell other friends that they are being dramatic'
    ],
    correctOption: 2,
    explanation: 'Showing empathy and offering support is important in friendships.'
  },
  {
    id: '3',
    scenario: 'You need help reaching something at the supermarket. What should you do?',
    options: [
      'Try to climb the shelves',
      'Leave without the item',
      'Politely ask a staff member for assistance',
      'Throw things to knock it down'
    ],
    correctOption: 2,
    explanation: 'Store staff are there to help, and it is safe to ask for assistance.'
  },
  {
    id: '4',
    scenario: 'You see someone drop their wallet on the street. What should you do?',
    options: [
      'Pick it up and keep it for yourself',
      'Ignore it and walk away',
      'Pick it up and return it to the person',
      'Leave it for someone else to handle'
    ],
    correctOption: 2,
    explanation: 'Returning the wallet is the honest and kind thing to do.'
  },
  {
    id: '5',
    scenario: 'A friend tells you a secret and asks you not to share it. What should you do?',
    options: [
      'Tell others because it’s not a big deal',
      'Keep the secret to show respect for your friend’s trust',
      'Use it to tease your friend later',
      'Forget the secret completely'
    ],
    correctOption: 1,
    explanation: 'Keeping a secret builds trust and shows respect for your friend.'
  },
  {
    id: '6',
    scenario: 'You notice someone struggling to carry heavy bags. What should you do?',
    options: [
      'Offer to help carry their bags',
      'Ignore them because it’s not your problem',
      'Laugh and walk away',
      'Wait for someone else to help'
    ],
    correctOption: 0,
    explanation: 'Helping someone in need is a kind and considerate action.'
  },
  {
    id: '7',
    scenario: 'You’re in a library and your phone starts ringing loudly. What should you do?',
    options: [
      'Answer the call loudly in the library',
      'Silence the phone immediately and apologize if necessary',
      'Ignore the call and let it ring',
      'Leave it ringing while you finish reading'
    ],
    correctOption: 1,
    explanation: 'Silencing your phone respects the quiet environment of the library.'
  },
  {
    id: '8',
    scenario: 'You see someone accidentally spill their drink in a café. What should you do?',
    options: [
      'Laugh and point at them',
      'Offer to help clean it up or call staff for assistance',
      'Ignore it and continue with your day',
      'Take a picture for social media'
    ],
    correctOption: 1,
    explanation: 'Offering to help shows empathy and kindness.'
  },
  {
    id: '9',
    scenario: 'You’re late for a meeting, and someone is blocking your way in a busy hallway. What should you do?',
    options: [
      'Push past them without saying anything',
      'Politely ask them to move aside',
      'Yell at them to hurry up',
      'Stand behind them and wait silently'
    ],
    correctOption: 1,
    explanation: 'Politeness helps resolve situations without conflict.'
  },
  {
    id: '10',
    scenario: 'Your teacher makes a mistake in class. What should you do?',
    options: [
      'Correct them respectfully',
      'Laugh and point out the mistake loudly',
      'Tell other classmates about the mistake later',
      'Ignore it even if it causes confusion'
    ],
    correctOption: 0,
    explanation: 'Respectfully correcting someone helps improve learning for everyone.'
  },
  {
    id: '11',
    scenario: 'You see a new student sitting alone during lunch. What should you do?',
    options: [
      'Sit with them and introduce yourself',
      'Ignore them because you don’t know them',
      'Tell your friends to avoid them',
      'Laugh about it with your group of friends'
    ],
    correctOption: 0,
    explanation: 'Reaching out to someone new helps them feel welcome and included.'
  },
  {
    id: '12',
    scenario: 'A cashier gives you too much change by mistake. What should you do?',
    options: [
      'Keep the extra money for yourself',
      'Point out the mistake and return the extra money',
      'Ignore it and leave quickly',
      'Tell others about how lucky you got'
    ],
    correctOption: 1,
    explanation: 'Honesty is important in such situations to ensure fairness.'
  }
];

export function SocialScenarios() {
  const { addProgress, addReward } = useUser();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [reward, setReward] = useState<any>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    setShowExplanation(true);

    if (index === SCENARIOS[currentScenario].correctOption) {
      const reward = {
        amount: 30,
        message: 'Great job handling that social situation!',
        type: 'completion' as const
      };
      setReward(reward);
      addReward(reward);
      addProgress({
        gameId: 'social-scenarios',
        score: 100,
        completedAt: new Date()
      });
    }
  };

  const nextScenario = () => {
    if (currentScenario < SCENARIOS.length - 1) {
      setCurrentScenario(prev => prev + 1);
    } else {
      setCurrentScenario(0);
    }
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setReward(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Social Scenarios</h1>
        <p className="text-gray-600 mb-6">
          Practice appropriate responses in different social situations to improve your social skills.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ScenarioCard
          scenario={SCENARIOS[currentScenario].scenario}
          options={SCENARIOS[currentScenario].options}
          correctOption={SCENARIOS[currentScenario].correctOption}
          onSelect={handleOptionSelect}
          selectedOption={selectedOption}
          isAnswered={isAnswered}
        />

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">{SCENARIOS[currentScenario].explanation}</p>
            <button
              onClick={nextScenario}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next Scenario
            </button>
          </div>
        )}

        {reward && <RewardPopup reward={reward} onClose={() => setReward(null)} />}
      </div>
    </div>
  );
}