import { create } from "zustand";

interface FilterState {
  selectedType: number;
  setSelectedType: (type: number) => void
}

export const useFilterStore = create<FilterState>()((set) => ({
  selectedType: 1,
  setSelectedType: (type) => set({ selectedType: type }),
}));
