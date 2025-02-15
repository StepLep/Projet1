export function calculateNutrition(baseValue: number, weight: number) {
  return ((baseValue * weight) / 100).toFixed(1);
}

export function exportToCSV(food: Food, weight: number) {
  // ... existing export function ...
} 