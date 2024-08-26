import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export const useCart = () => {
  const {
    totalAmount,
    items,
    loading,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  } = useCartStore((state) => ({
    totalAmount: state.totalAmount,
    items: state.items,
    loading: state.loading,
    fetchCartItems: state.fetchCartItems,
    updateItemQuantity: state.updateItemQuantity,
    removeCartItem: state.removeCartItem,
    addCartItem: state.addCartItem,
  }));

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return {
    totalAmount,
    items,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  };
};
