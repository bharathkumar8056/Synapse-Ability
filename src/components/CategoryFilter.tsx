import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories = [
    { id: 'cognitive', label: 'Cognitive Skills', color: 'purple' },
    { id: 'daily-living', label: 'Daily Living', color: 'green' },
    { id: 'social', label: 'Social Skills', color: 'blue' }
  ];

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${!selectedCategory 
            ? 'bg-gray-900 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        All Games
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${selectedCategory === category.id
              ? `bg-${category.color}-600 text-white`
              : `bg-${category.color}-50 text-${category.color}-600 hover:bg-${category.color}-100`}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}