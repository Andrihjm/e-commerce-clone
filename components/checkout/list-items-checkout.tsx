"use client";

import { useCart } from "@/hooks/use-cart";
import React, { useState } from "react";
import CheckoutSidebar from "./checkout-sidebar";
import CheckoutCart from "./checkout-cart";
import CheckoutFormInput from "./checkout-form-input";
import CheckotuFormAddress from "./checkotu-form-address";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/schema/checkout-form-schema";
import { toast } from "sonner";
import { createOrder } from "@/_actions/order";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log(data);
    try {
      setIsSubmitting(true);

      await createOrder(data);

      toast.success("Berhasil menambahkan pesanan", {
        icon: "✅",
      });
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Gagal menambahkan pesanan", {
        icon: "❌",
      });
    }
  };

  return (
    <>
      <div className="components mt-5 text-black">
        <h1 className="text-white font-extrabold mb-8">Pesanan Anda</h1>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-24">
              <div className="flex flex-col gap-10 mb-20 flex-1">
                <CheckoutCart
                  items={items}
                  handleUpdateQuantity={handleUpdateQuantity}
                  removeCartItem={removeCartItem}
                  loading={loading}
                />

                <CheckoutFormInput
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />

                <CheckotuFormAddress
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />
              </div>

              <div className="w-[450px]">
                <CheckoutSidebar
                  totalAmount={totalAmount}
                  loading={loading || isSubmitting}
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default ListItemsCheckout;
