/* eslint-disable @typescript-eslint/no-unused-vars */
import { Food } from '@/data/foods';
import { exportToCSV } from '@/utils/calculations';

interface ExportButtonProps {
  selectedFood: Food;
  weight: number;
}

export function ExportButton({ selectedFood, weight }: ExportButtonProps) {
  return (
    <button
      onClick={() => exportToCSV(selectedFood, weight)}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
    >
      Exporter en CSV
    </button>
  );
} 