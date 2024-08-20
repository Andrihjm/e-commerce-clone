import { mapPizzaType, PizzaSizes, PizzaTypes } from "@/constants/pizza";
import { Ingredient } from "@prisma/client";

export const getCartItemDetails = (
  pizzaType: PizzaTypes,
  pizzaSize: PizzaSizes,
  ingredients: Ingredient[]
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} cm`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
