import { create } from "zustand";

interface NewsState {
    loading: boolean,

    
}

export const useNewsStore = create<NewsState>()((set) => ({
  loading: true,
 
}));
