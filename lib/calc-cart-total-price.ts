import { CartItemDTO } from "@/services/DTO/cart.dto";

export const calcCartTotalPrice = (items: CartItemDTO): number => {
  const ingredientPrice = items.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );

  return (ingredientPrice + items.productItem.price) * items.quantity;
};
