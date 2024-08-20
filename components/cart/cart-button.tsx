import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import CartSidebar from "./cart-sidebar";

const CartButton = () => {
  return (
    <>
      <CartSidebar>
        <Button className="group relative">
          <p>$520</p>
          <span className="h-full w-[1px] mx-3 bg-white/30" />

          <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0">
            <ShoppingCart size={16} strokeWidth={2} />
            <p>3</p>
          </div>

          <ArrowRight
            size={20}
            className="absolute right-5 transition-all duration-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </Button>
      </CartSidebar>
    </>
  );
};

export default CartButton;
