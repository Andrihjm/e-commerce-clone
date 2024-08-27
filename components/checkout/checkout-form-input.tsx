import React from "react";
import CheckoutForm from "../form/checkout-form";
import WhiteBlock from "../shared/white-block";
import { cn } from "@/lib/utils";

interface CheckoutFormInputProps {
  className?: string;
}

const CheckoutFormInput = ({ className }: CheckoutFormInputProps) => {
  return (
    <>
      <WhiteBlock
        title="2. Персональные данные"
        className={cn("text-base", className)}
      >
        <div className="grid grid-cols-2 gap-4">
          <CheckoutForm name="firstName" placeholder="firstName" />
          <CheckoutForm name="lastName" placeholder="lastName" />
          <CheckoutForm name="email" placeholder="E-Mail" />
          <CheckoutForm name="phone" placeholder="Phone" />
        </div>
      </WhiteBlock>
    </>
  );
};

export default CheckoutFormInput;
