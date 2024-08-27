import React from "react";
import WhiteBlock from "../shared/white-block";
import CheckoutItemsDetails from "./checkout-items-details";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

interface CheckoutSidebarProps {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const VAT = 15;
const DELIVERT_PRICE = 250;

const CheckoutSidebar = ({
  totalAmount,
  loading,
  className,
}: CheckoutSidebarProps) => {
  const vetPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERT_PRICE + vetPrice;

  return (
    <WhiteBlock className={cn("sticky top-4 p-6", className)}>
      <div className="flex flex-col gap-1 text-xl">
        <span>Kopi</span>
        {loading ? (
          <Skeleton className="h-12 w-48 bg-black/5" />
        ) : (
          <span className="my-2 text-2xl font-extrabold">${totalPrice}</span>
        )}
      </div>

      <CheckoutItemsDetails
        title={
          <div className="flex items-center gap-1 text-black">
            <Package size={22} className="text-gray-400" />
            Total
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-10 bg-black/5" />
          ) : (
            `$${totalAmount}`
          )
        }
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center gap-1 text-black">
            <Percent size={22} className="text-gray-400" />
            Ongkir
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-10 bg-black/5" />
          ) : (
            `$${vetPrice}`
          )
        }
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center gap-1 text-black">
            <Truck size={22} className="text-gray-400" />
            Subtotal
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-10 bg-black/5" />
          ) : (
            `$${DELIVERT_PRICE}`
          )
        }
      />

      <Button
        // loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-4 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

export default CheckoutSidebar;
