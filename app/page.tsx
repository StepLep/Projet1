'use client';

import { useState, useEffect } from 'react';
import { foods, type Food } from '@/data/foods';
import { SearchBar } from '@/components/SearchBar';
import { FoodDetails } from '@/components/FoodDetails';
import { ThemeToggle } from '@/components/ThemeToggle';
import { EmptyState } from '@/components/EmptyState';
import logoImage from '@/public/images/logo.jpg';
import Image from 'next/image';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [weight, setWeight] = useState<number>(100);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <main className={`min-h-screen p-8 max-w-6xl mx-auto transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-col items-center mb-8">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image 
              src={logoImage}
              alt="Logo Calculateur Nutritionnel"
              width={150}
              height={150}
              priority
            />
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Calculateur Nutritionnel
            </h1>
          </div>
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
      
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showResults={showResults}
        setShowResults={setShowResults}
        filteredFoods={filteredFoods}
        setSelectedFood={setSelectedFood}
        isDarkMode={isDarkMode}
      />

      {selectedFood ? (
        <FoodDetails
          selectedFood={selectedFood}
          weight={weight}
          setWeight={setWeight}
          isDarkMode={isDarkMode}
        />
      ) : (
        <EmptyState isDarkMode={isDarkMode} />
      )}
    </main>
  );
}
