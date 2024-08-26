"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CartSidebarCard from "./cart-sidebar-card";
import { getCartItemDetails } from "@/lib/get-cartcitem-details";
import { PizzaSizes, PizzaTypes } from "@/constants/pizza";
import Image from "next/image";
import EmptyBox from "@/public/assets/images/empty-box.png";
import { useCart } from "@/hooks/use-cart";

interface CartSidebarProps {
  children: React.ReactNode;
}

const CartSidebar = ({ children }: CartSidebarProps) => {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();

  const handleUpdateQuantity = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-center pb-0 bg-[#f5f3f3] text-black">
        {totalAmount > 0 ? (
          <>
            <SheetHeader>
              <SheetTitle>
                Keranjangmu{" "}
                <span className="font-bold">{items.length} MENDO</span>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <div className="flex-1 -mx-3 overflow-auto scrollbar">
              {/* {loading ? (
                <p>Loading...</p>
              ) :} */}
              {items.length > 0 ? (
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
                      handleUpdateQuantity(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                    disabled={item.disabled}
                  />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>

            <SheetFooter className="-mx-3 py-8 px-5 bg-white">
              <div className="w-full">
                <div className="flex mb-4">
                  <div className="flex flex-1 text-lg text-gray-600">
                    Total
                    <span className="relative -top-1 mx-2 flex-1 border-b border-dashed border-primary" />
                  </div>
                  <span className="font-bold text-lg">{totalAmount} ₽</span>
                </div>

                <Link href={"/checkout"}>
                  <Button type="submit" className="w-full h-1/2 text-base">
                    Lakukan pemesanan
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="w-72 mx-auto flex flex-col justify-center">
            <Image
              src={EmptyBox}
              alt="image"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h1 className="text-center font-bold my-2">Keranjang Kosong</h1>
            <p className="text-center text-neutral-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              unde veritatis nostrum, aliquid omnis dolore.
            </p>

            <SheetClose>
              <Button className="w-52 h-12 text-base" size={"lg"}>
                <ArrowLeft size={20} />
                Kembali
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
