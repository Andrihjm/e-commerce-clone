"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import CartSidebar from "./cart-sidebar";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

const CartButton = () => {
  const [items, loading, totalAmount] = useCartStore((state) => [
    state.items,
    state.loading,
    state.totalAmount,
  ]);

  return (
    <>
      <CartSidebar>
        <div
          className={cn(
            "group relative h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            loading ? "opacity-50 cursor-not-allowed" : ""
          )}
        >
          <p>${totalAmount}</p>
          <span className="h-full w-[1px] mx-3 bg-white/30" />

          <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0">
            <ShoppingCart size={16} strokeWidth={2} />
            <p>{items.length}</p>
          </div>

          <ArrowRight
            size={20}
            className="absolute right-5 transition-all duration-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </div>
      </CartSidebar>
    </>
  );
};

export default CartButton;
