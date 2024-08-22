import { create } from "zustand";

interface FilterState {
  selectedType: number;
  selectedException: number;
  selectedIngredients: number[];

  disabled: boolean;
  setSelectedType: (type: number) => void;
  setSelectedException: (exception: number) => void;
  setSelectedIngredients: (id: number) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  selectedType: 1,
  selectedException: 0,
  disabled: false,
  selectedIngredients: [1, 2, 3, 4, 5, 6, 7, 8],

  setSelectedType: (type) => {
    try {
      set({ selectedType: type, disabled: true });
    } catch (error) {
      console.log(error);
    } finally {
      set({ disabled: false });
    }
  },

  setSelectedException: (exception) => {
    try {
      set({ selectedException: exception, disabled: true });
    } catch (error) {
      console.log(error);
    } finally {
      set({ disabled: false });
    }
  },

  setSelectedIngredients: (id: number) => {
    try {
      set({ disabled: true });

      set((state) => {
        const newSelectedIngredients = state.selectedIngredients.includes(id)
          ? state.selectedIngredients.filter(
              (ingredientId) => ingredientId !== id
            )
          : [...state.selectedIngredients, id];
        return { selectedIngredients: newSelectedIngredients };
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ disabled: false });

    }
  },
}));
