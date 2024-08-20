import { PizzaSizes, PizzaTypes } from "@/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const calcTotalPizzaPrice = (
  type: PizzaTypes,
  size: PizzaSizes,
  items: ProductItem[] | undefined,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items?.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientPrice;
};
