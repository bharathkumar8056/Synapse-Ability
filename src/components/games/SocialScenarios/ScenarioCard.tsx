import React from 'react';

interface ScenarioCardProps {
  scenario: string;
  options: string[];
  correctOption: number;
  onSelect: (index: number) => void;
  selectedOption: number | null;
  isAnswered: boolean;
}

export function ScenarioCard({
  scenario,
  options,
  correctOption,
  onSelect,
  selectedOption,
  isAnswered
}: ScenarioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">{scenario}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onSelect(index)}
            className={`w-full p-3 text-left rounded-lg transition-colors ${
              isAnswered
                ? index === correctOption
                  ? 'bg-green-100 text-green-800'
                  : index === selectedOption
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}