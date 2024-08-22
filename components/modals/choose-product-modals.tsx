"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import CoosePizzaForm from "../form/coose-pizza-form";
import CooseProductForm from "../form/coose-products-form";
import { useCartStore } from "@/store/cart";

interface ChooseProductModalsProps {
  product: ProductWithRelations;
}

const ChooseProductModals = ({ product }: ChooseProductModalsProps) => {
  const router = useRouter();

  const firstItems = product?.productItem[0];
  const isPizzaForm = Boolean(firstItems?.pizzaType);
  const addCartItems = useCartStore((state) => state.addCartItems);

  const onAddProductToCart = () => {
    addCartItems({
      productItemId: firstItems.id,
    });
  };

  const onAddPizzaToCart = (productItemId: number, ingredients: number[]) => {
    addCartItems({
      productItemId,
      ingredients: product.ingredients.map((ingredient) => ingredient.id),
    });
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      {/* <DialogContent className="bg-white text-black"> */}
      <DialogContent className="w-[1060px] max-w-[1060px] min-h-[500px] p-0 bg-white text-black overflow-hidden">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {isPizzaForm ? (
          <CoosePizzaForm
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            onClickAddCart={onAddPizzaToCart}
          />
        ) : (
          <CooseProductForm
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            onClickAddCart={onAddProductToCart}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModals;
