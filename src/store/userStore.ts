import { ICartItem } from "@/@types/product";
import { calcTotalPrice } from "@/lib/calc-cart-total-price";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface UserStore {
  activeCategoryId: number;
  setActiveCategoryId: (categoryId: number) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  activeCategoryId: 0,
  setActiveCategoryId: (categoryId: number) =>
    set({ activeCategoryId: categoryId }),
}));
