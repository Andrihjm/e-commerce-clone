import { items } from "@/data/data-array/menu-filter";
import { CartStateItem, getCartDetails } from "@/lib/get-cart-details";
import { ApiClient } from "@/services/api-client";
import { create } from "zustand";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  //   Fetch cart items
  fetchCartItems: () => Promise<void>;

  //   Update items quantity
  updateItemsQuantity: (id: number, quantity: number) => Promise<void>;

  //   Add items to Cart
  addCartItems: (values: any) => Promise<void>;

  //   Remove items from Cart
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  loading: true,
  error: false,
  totalAmount: 0,

  //   Fetch cart items
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const response = await ApiClient.cart.fetchCartItemsService();
      set(getCartDetails(response));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  //   Update items quantity
  updateItemsQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  //   Add items to Cart
  addCartItems: async (values: any) => {
    try {
      set({ loading: true, error: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  //   Remove items from Cart
  removeCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
