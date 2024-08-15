import { create } from "zustand";

interface FilterState {
  selectedType: number;
  selectedException: number;
  selectedIngredients: number[];
  setSelectedType: (type: number) => void;
  setSelectedException: (exception: number) => void;
  setSelectedIngredients: (id: number) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  selectedType: 1,
  selectedException: 0,
  selectedIngredients: [1, 2, 3, 4, 5, 6, 7, 8],


  setSelectedType: (type) => set({ selectedType: type }),


  setSelectedException: (exception) => set({ selectedException: exception }),


  setSelectedIngredients: (id: number) => set((state) => {
    const newSelectedIngredients = state.selectedIngredients.includes(id)
      ? state.selectedIngredients.filter((ingredientId) => ingredientId !== id)
      : [...state.selectedIngredients, id];
    return { selectedIngredients: newSelectedIngredients };
  }),
}));
