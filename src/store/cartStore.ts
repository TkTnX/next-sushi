import { ICartItem } from "@/@types/product";
import { calcTotalPrice } from "@/lib/calc-cart-total-price";
import { prisma } from "@/Prisma/prisma-client";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface CartState {
  totalPrice: number;
  loading: boolean;
  error: boolean;
  items: ICartItem[];

  getItems: () => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  deleteItem: (id: number) => void
}

export const useCartStore = create<CartState>()((set) => ({
  totalPrice: 0,
  loading: false,
  error: false,
  items: [],
  getItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();

      if (!data)
        return set({ error: true, totalPrice: 0, items: [], loading: false });

      set({
        items: data.data.cartItems,
        totalPrice: calcTotalPrice({ items: data.data }),
        loading: false,
      });
    } catch (error) {
      set({ error: true });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id, quantity) => {
    try {
      set({ loading: true, error: false });
      await Api.cart.updateItemQuantity(id, quantity);

      const newCart = await Api.cart.getCart();

      if (!newCart)
        return set({ error: true, totalPrice: 0, items: [], loading: false });

      set({
        items: newCart.data.cartItems,
        totalPrice: calcTotalPrice({ items: newCart.data }),
      });
    } catch (error) {
      set({ error: true });

      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  deleteItem: async (id) => {
    try {
      set({ loading: true, error: false });
      await Api.cart.deleteItem(id);

      const newCart = await Api.cart.getCart();

      if (!newCart)
        return set({ error: true, totalPrice: 0, items: [], loading: false });

      set({
        items: newCart.data.cartItems,
        totalPrice: calcTotalPrice({ items: newCart.data }),
      });
    } catch (error) {
      set({ error: true });

      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
