'use client';

import { Food } from '@/data/foods';
import { ExportButton } from './ExportButton';
import { calculateNutrition } from '@/utils/calculations';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, TooltipProps } from 'recharts';

interface NutritionalValuesProps {
  selectedFood: Food;
  weight: number;
  isDarkMode: boolean;
}

export function NutritionalValues({ selectedFood, weight, isDarkMode }: NutritionalValuesProps) {
  const nutritionData = [
    { name: 'Protéines', value: Number(calculateNutrition(selectedFood.nutritionalInfo.proteins, weight)) },
    { name: 'Glucides', value: Number(calculateNutrition(selectedFood.nutritionalInfo.carbohydrates, weight)) },
    { name: 'Lipides', value: Number(calculateNutrition(selectedFood.nutritionalInfo.lipids, weight)) }
  ];

  const COLORS = ['#60A5FA', '#34D399', '#FBBF24'];

  const renderCustomizedLabel = ({ 
    cx, 
    
    cy, 
    midAngle, 
    innerRadius, 
    outerRadius, 
    percent 
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    return percent > 0 ? (
      <text 
        x={x} 
        y={y} 
        fill={isDarkMode ? "white" : "black"}
        textAnchor="middle" 
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Valeurs nutritionnelles pour {weight}g
        </h3>
        <ExportButton selectedFood={selectedFood} weight={weight} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>
            Calories: {calculateNutrition(selectedFood.nutritionalInfo.calories, weight)} kcal
          </p>
          <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>
            Protéines: {calculateNutrition(selectedFood.nutritionalInfo.proteins, weight)}g
          </p>
          <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>
            Glucides: {calculateNutrition(selectedFood.nutritionalInfo.carbohydrates, weight)}g
          </p>
          <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>
            Lipides: {calculateNutrition(selectedFood.nutritionalInfo.lipids, weight)}g
          </p>

          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={nutritionData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {nutritionData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip<any, any>
                  content={(props: TooltipProps<any, any>) => (
                    <div style={{
                      backgroundColor: isDarkMode ? '#374151' : 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: isDarkMode ? 'white' : 'black',
                      padding: '0.5rem'
                    }}>
                      {props.payload && props.payload[0] && (
                        <p>{`${props.payload[0].name}: ${props.payload[0].value}g`}</p>
                      )}
                    </div>
                  )}
                />
                
                <Legend
                  content={({ payload }: { payload: any }) => (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {payload?.map((entry: any, index: number) => (
                        <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ 
                            display: 'inline-block',
                            width: '1rem',
                            height: '1rem',
                            backgroundColor: entry.color,
                            marginRight: '0.5rem'
                          }}></span>
                          <span style={{color: isDarkMode ? 'white' : 'black'}}>{entry.value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {Object.entries(selectedFood.nutritionalInfo.vitamins).length > 0 && (
          <div>
            <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Vitamines</h3>
            {Object.entries(selectedFood.nutritionalInfo.vitamins).map(([vitamin, value]) => (
              <p key={vitamin} className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                Vitamine {vitamin}: {calculateNutrition(value, weight)}mg
              </p>
            ))}
          </div>
        )}
        
        {Object.entries(selectedFood.nutritionalInfo.minerals).length > 0 && (
          <div>
            <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Minéraux</h3>
            {Object.entries(selectedFood.nutritionalInfo.minerals).map(([mineral, value]) => (
              <p key={mineral} className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                {mineral}: {calculateNutrition(value, weight)}mg
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 