import { CartStateItem, getCartDetails } from "@/lib/get-cart-details";
import { ApiClient } from "@/services/api-client";
import { CreateCartItemValues } from "@/services/DTO/cart.dto";
import { create } from "zustand";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  //   Fetch cart items
  fetchCartItems: () => Promise<void>;

  //   Update item quantity
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  //   Remove item from Cart
  removeCartItem: (id: number) => Promise<void>;

  //   Add item to Cart
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
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

  //   Update item quantity
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      const response = await ApiClient.cart.updateItemsQuantityService(
        id,
        quantity
      );
      set(getCartDetails(response));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  //   Remove item from Cart
  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) =>
          item.id === id ? { ...item, disabled: true } : item
        ),
      }));
      const response = await ApiClient.cart.deleteItemsCartService(id);
      set(getCartDetails(response));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },

  //   Add item to Cart
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const response = await ApiClient.cart.addItemCartService(values);
      set(getCartDetails(response));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
