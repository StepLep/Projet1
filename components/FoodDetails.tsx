'use client';

import { Food } from '@/data/foods';
import { NutritionalValues } from './NutritionalValues';
import { ExportButton } from './ExportButton';

interface FoodDetailsProps {
  selectedFood: Food;
  weight: number;
  setWeight: (weight: number) => void;
  isDarkMode: boolean;
}

export function FoodDetails({
  selectedFood,
  weight,
  setWeight,
  isDarkMode,
}: FoodDetailsProps) {
  return (
    <div className="space-y-6">
      <div className={`flex items-center gap-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className={`w-32 h-32 rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <img
            src={selectedFood.imageUrl}
            alt={selectedFood.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {selectedFood.name}
          </h2>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className={`p-2 w-24 border rounded-lg ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
              min="0"
            />
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>grammes</span>
          </div>
        </div>
      </div>

      <NutritionalValues
        selectedFood={selectedFood}
        weight={weight}
        isDarkMode={isDarkMode}
      />
    </div>
  );
} 