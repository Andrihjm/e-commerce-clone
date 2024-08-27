import React from "react";
import WhiteBlock from "../shared/white-block";
import { CheckoutItem } from "./checkout-item";
import { getCartItemDetails } from "@/lib/get-cartcitem-details";
import { PizzaSizes, PizzaTypes } from "@/constants/pizza";
import { CartStateItem } from "@/lib/get-cart-details";
import { Skeleton } from "../ui/skeleton";
import SkeletonCustom from "../shared/Skeleton-custom";

interface CheckoutCartProps {
  items: CartStateItem[];
  handleUpdateQuantity: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
  loading?: boolean;
}

const CheckoutCart = ({
  items,
  handleUpdateQuantity,
  removeCartItem,
  loading,
}: CheckoutCartProps) => {
  return (
    <WhiteBlock title="1. Kopi: ">
      <div className="flex flex-col gap-4">
        {loading ? (
          [...Array(4)].map((_, index) => <SkeletonCustom key={index} />)
        ) : items.length > 0 ? (
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
          <p>Tidak ada pesanan</p>
        )}
      </div>
    </WhiteBlock>
  );
};

export default CheckoutCart;
