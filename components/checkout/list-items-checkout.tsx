"use client";

import { useCart } from "@/hooks/use-cart";
import React from "react";
import { CheckoutItem } from "./checkout-item";
import { PizzaSizes, PizzaTypes } from "@/constants/pizza";
import { getCartItemDetails } from "@/lib/get-cartcitem-details";
import WhiteBlock from "../shared/white-block";
import { Input } from "../ui/input";
import CheckoutItemsDetails from "./checkout-items-details";
import { Package, Percent, Truck } from "lucide-react";
import { Textarea } from "../ui/textarea";

const ListItemsCheckout = () => {
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
    <>
      <div className="components mt-5 text-black">
        <h1 className="text-white font-extrabold mb-8">Pesanan Anda</h1>

        <div className="flex gap-24">
          <div className="flex flex-col gap-10 mb-20 flex-1">
            <WhiteBlock title="1. Kopi: ">
              <div className="flex flex-col gap-4">
                {/* {loading ? (
                  <p>Loading...</p>
                ) : } */}
                {items.length > 0 ? (
                  items.map((item) => (
                    <CheckoutItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaTypes,
                        item.pizzaSize as PizzaSizes
                      )}
                      price={item.price}
                      quantity={item.quantity}
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
            </WhiteBlock>

            <WhiteBlock title="2. Pizza">
              <div className="grid grid-cols-2 gap-5">
                <Input
                  name="firstName"
                  placeholder="first name"
                  className="text-base"
                />
                <Input
                  name="lastName"
                  placeholder="last name"
                  className="text-base"
                />
                <Input
                  name="your email"
                  placeholder="email"
                  className="text-base"
                />
                <Input
                  name="your phone"
                  placeholder="phone"
                  className="text-base"
                />
              </div>
            </WhiteBlock>

            <WhiteBlock title="3. Pesan">
              <div className="flex flex-col gap-5">
                <Input
                  name="firstName"
                  placeholder="first name..."
                  className="text-base"
                />
                <Textarea placeholder="Type your message here." />
              </div>
            </WhiteBlock>
          </div>

          <div className="w-[450px]">
            <WhiteBlock>
              <div className="flex flex-col gap-1 text-xl">
                <span>Kopi</span>
                <span className="my-2 text-2xl font-extrabold">
                  ${totalAmount}
                </span>
              </div>

              <CheckoutItemsDetails
                title={
                  <div className="flex items-center gap-1 text-black">
                    <Package size={22} className="text-gray-400" />
                    Total
                  </div>
                }
                value={totalAmount}
              />
              <CheckoutItemsDetails
                title={
                  <div className="flex items-center gap-1 text-black">
                    <Percent size={22} className="text-gray-400" />
                    Ongkir
                  </div>
                }
                value={totalAmount}
              />
              <CheckoutItemsDetails
                title={
                  <div className="flex items-center gap-1 text-black">
                    <Truck size={22} className="text-gray-400" />
                    Subtotal
                  </div>
                }
                value={totalAmount}
              />
            </WhiteBlock>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItemsCheckout;
