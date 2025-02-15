interface NutritionalInfo {
  calories: number;
  proteins: number;
  carbohydrates: number;
  lipids: number;
  vitamins: {
    A?: number;
    B1?: number;
    B2?: number;
    B3?: number;
    C?: number;
    D?: number;
    E?: number;
  };
  minerals: {
    calcium?: number;
    iron?: number;
    magnesium?: number;
    potassium?: number;
    zinc?: number;
  };
}

interface Food {
  id: number;
  name: string;
  nutritionalInfo: NutritionalInfo;
  imageUrl: string;
}

export const foods: Food[] = [
  {
    id: 1,
    name: "Pomme de terre",
    imageUrl: "data:image/svg+xml;base64," + btoa(`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#F3E5D8"/><ellipse cx="150" cy="150" rx="100" ry="80" fill="#D4A373"/><circle cx="130" cy="140" r="10" fill="#8B5E34"/><circle cx="170" cy="160" r="10" fill="#8B5E34"/></svg>`),
    nutritionalInfo: {
      calories: 77,
      proteins: 2,
      carbohydrates: 17,
      lipids: 0.1,
      vitamins: {
        C: 19.7,
        B6: 0.2,
      },
      minerals: {
        potassium: 421,
        magnesium: 23,
      },
    },
  },
  {
    id: 2,
    name: "Carotte",
    imageUrl: "data:image/svg+xml;base64," + btoa(`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#FFF3E0"/><path d="M150 50L200 250H100L150 50Z" fill="#FF5722"/><path d="M150 80L130 120H170L150 80Z" fill="#4CAF50"/></svg>`),
    nutritionalInfo: {
      calories: 41,
      proteins: 0.9,
      carbohydrates: 10,
      lipids: 0.2,
      vitamins: {
        A: 835,
        C: 7.8,
        K: 13.2,
      },
      minerals: {
        potassium: 320,
        calcium: 33,
      },
    },
  },
  {
    id: 3,
    name: "Poulet (blanc)",
    imageUrl: "data:image/svg+xml;base64," + btoa(`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#FFF8E1"/><rect x="100" y="100" width="150" height="100" rx="10" fill="#FFECB3"/></svg>`),
    nutritionalInfo: {
      calories: 165,
      proteins: 31,
      carbohydrates: 0,
      lipids: 3.6,
      vitamins: {
        B3: 13.7,
        B6: 0.6,
      },
      minerals: {
        potassium: 256,
        phosphorus: 224,
      },
    },
  },
  {
    id: 4,
    name: "Riz blanc cuit",
    imageUrl: "data:image/svg+xml;base64," + btoa(`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#FAFAFA"/><circle cx="150" cy="150" r="80" fill="#FFFFFF"/><circle cx="130" cy="140" r="5" fill="#F5F5F5"/><circle cx="170" cy="160" r="5" fill="#F5F5F5"/></svg>`),
    nutritionalInfo: {
      calories: 130,
      proteins: 2.7,
      carbohydrates: 28,
      lipids: 0.3,
      vitamins: {
        B1: 0.02,
        B3: 1.6,
      },
      minerals: {
        iron: 0.2,
        magnesium: 12,
      },
    },
  },
  {
    id: 5,
    name: "Banane",
    imageUrl: "data:image/svg+xml;base64," + btoa(`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#FFF8E1"/><path d="M100 150C100 100 150 50 200 100C250 150 200 200 150 200C100 200 100 200 100 150Z" fill="#FFE082"/></svg>`),
    nutritionalInfo: {
      calories: 89,
      proteins: 1.1,
      carbohydrates: 23,
      lipids: 0.3,
      vitamins: {
        B6: 0.4,
        C: 8.7,
      },
      minerals: {
        potassium: 358,
        magnesium: 27,
      },
    },
  },
];

export type { Food, NutritionalInfo }; 