'use client';

import { Food } from '@/data/foods';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
  filteredFoods: Food[];
  setSelectedFood: (food: Food) => void;
  isDarkMode: boolean;
}

export function SearchBar({
  searchTerm,
  setSearchTerm,
  showResults,
  setShowResults,
  filteredFoods,
  setSelectedFood,
  isDarkMode,
}: SearchBarProps) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Rechercher un aliment..."
        className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
          isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
        }`}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowResults(true);
        }}
      />
      
      {showResults && searchTerm && (
        <div className={`absolute w-full mt-2 border rounded-lg max-h-60 overflow-y-auto shadow-lg z-10 ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {filteredFoods.map(food => (
            <div
              key={food.id}
              className={`p-3 cursor-pointer transition-colors ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
              onClick={() => {
                setSelectedFood(food);
                setSearchTerm('');
                setShowResults(false);
              }}
            >
              {food.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 