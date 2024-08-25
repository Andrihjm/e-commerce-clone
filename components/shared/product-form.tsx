"use client";

import { ProductWithRelations } from "@/@types/prisma";
import ChoosePizzaForm from "../form/coose-pizza-form";
import CooseProductForm from "../form/coose-products-form";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";

interface ProductFormProps {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

const ProductForm = ({ product, onSubmit: _onSubmit }: ProductFormProps) => {
  const firstItems = product?.productItem[0];
  const isPizzaForm = Boolean(firstItems?.pizzaType);
  const addCartItems = useCartStore((state) => state.addCartItems);

  const handleAddToCart = async (
    productItemId?: number,
    ingredients?: number[]
  ) => {
    try {
      const itemsId = productItemId ?? firstItems.id;

      await addCartItems({
        productItemId: itemsId,
        ingredients,
      });
      toast.success(`${product.name} berhasil di tambahkan ke keranjang`);
      _onSubmit?.();
    } catch (error) {
      console.error(error);
      toast.error("Product gagal di tambahkan ke keranjang");
    }
  };

  return (
    <>
      {isPizzaForm ? (
        <ChoosePizzaForm
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          ingredients={product.ingredients}
          items={product.productItem}
          onClickAddCart={handleAddToCart}
        />
      ) : (
        <CooseProductForm
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          onClickAddCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default ProductForm;
