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
  deletedCartItem: (id: number) => Promise<void>;
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
      const response = await ApiClient.cart.updateItemsQuantityService(
        id,
        quantity
      );
      set(getCartDetails(response));
    } catch (error) {
      console.error(error);
      set({ error: true });
    }
  },

  //   Remove items from Cart
  deletedCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const response = await ApiClient.cart.deleteItemsCartService(id);
      set(getCartDetails(response));
    } catch (error) {
      set({ loading: false });
    }
  },

  //   Add items to Cart
  addCartItems: async (values: any) => {
    try {
      set({ loading: true, error: false });
      const response = await ApiClient.cart.addItemCartService(values);
      set(getCartDetails(response));
    } catch (error) {
      set({ loading: false });
    }
  },
}));
