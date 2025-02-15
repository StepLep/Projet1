'use client';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
} 