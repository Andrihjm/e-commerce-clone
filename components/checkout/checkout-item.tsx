"use client";

import React from "react";
import { CartItemProps } from "../cart/cart-items-details/cart-items-detail.types";
import * as CartItemDetails from "../cart/cart-items-details";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-6 p-5 rounded-md bg-white/70",
        {
          "opacity-50 pointer-events-none": disabled,
        }
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} name={name} />
        <CartItemDetails.Info name={name} details={details} />
      </div>

      <CartItemDetails.Price value={price} />

      <div className="flex items-center gap-5">
        <CartItemDetails.CountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button type="button" onClick={onClickRemove}>
          <X
            className="text-gray-500 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
