"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import CoosePizzaForm from "../form/coose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import CooseProductForm from "../form/coose-product-form";

interface ChooseProductModalsProps {
  product: ProductWithRelations;
}

const ChooseProductModals = ({ product }: ChooseProductModalsProps) => {
  const router = useRouter();

  const firstItems = product?.productItem[0];
  const isPizzaForm = Boolean(firstItems?.pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      {/* <DialogContent className="bg-white text-black"> */}
      <DialogContent className="w-[1060px] max-w-[1060px] min-h-[500px] p-0 bg-white text-black overflow-hidden">
        {isPizzaForm ? (
          <CoosePizzaForm
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ) : (
          <CooseProductForm
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModals;
