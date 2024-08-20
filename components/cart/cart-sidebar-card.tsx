"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import CountButton from "./count-button";
import { TrashIcon } from "lucide-react";
import { Separator } from "../ui/separator";

interface CartSidebarCardProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  details: string;
  disabled?: boolean;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

const CartSidebarCard = ({
  name,
  price,
  quantity,
  imageUrl,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
}: CartSidebarCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-5 gap-5 rounded-sm bg-white",
        disabled && "opacity-50 pointer-events-none"
      )}
    >
      <div className="w-[60px] h-[60px]">
        <Image
          src={imageUrl}
          alt="photo"
          width={60}
          height={60}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h2 className="mb-0 text-lg font-bold leading-6">{name}</h2>
        </div>

        {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <CountButton value={quantity} onClick={onClickCountButton} />

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">${price}</p>

            <TrashIcon
              size={16}
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebarCard;
