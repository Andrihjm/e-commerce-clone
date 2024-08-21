"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import CartSidebarCard from "./cart-sidebar-card";
import { getCartItemDetails } from "@/lib/get-cartcitem-details";
import { useCartStore } from "@/store/cart";
import { PizzaSizes, PizzaTypes } from "@/constants/pizza";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  children: React.ReactNode;
}

const CartSidebar = ({ children }: CartSidebarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalAmount, fetchCartItems, items, updateItemsQuantity] =
    useCartStore((state) => [
      state.totalAmount,
      state.fetchCartItems,
      state.items || [],
      state.updateItemsQuantity,
    ]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCartItems();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchCartItems]);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemsQuantity(id, newQuantity);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#dfdcdb] text-black">
          <SheetHeader>
            <SheetTitle>{items.length} sure?</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-auto scrollbar">
            {isLoading ? (
              <p>Loading...</p>
            ) : items.length > 0 ? (
              items.map((item) => (
                <CartSidebarCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaTypes,
                    item.pizzaSize as PizzaSizes
                  )}
                  imageUrl={item.imageUrl}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          <SheetFooter className="-mx-3 py-8 px-5 bg-white">
            <div className="w-full">
              <div className="flex mb-4">
                <div className="flex flex-1 text-lg text-neutral-500">
                  zdfsd
                  <span className="relative -top-1 mx-2 flex-1 border-b border-dashed border-primary" />
                </div>

                <span className="font-bold text-lg">{totalAmount} ₽</span>
              </div>

              <Link href={"/cart"}>
                <Button type="submit" className="w-full h-1/2 text-base">
                  asd
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartSidebar;
