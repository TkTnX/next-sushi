import { create } from "zustand";

interface FilterState {
  selectedType: number;
  selectedException: number
  setSelectedType: (type: number) => void;
  setSelectedException: (exception: number) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  selectedType: 1,
  selectedException: 0,
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedException: (exception) => set({ selectedException: exception }),
}));
