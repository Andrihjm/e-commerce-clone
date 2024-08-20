import { pizzaTypes, PizzaTypes } from "@/constants/pizza";
import { ProductItem } from "@prisma/client";

export const getAvailablePizzaSize = (
  type: PizzaTypes,
  items: ProductItem[] | undefined
) => {
  const filterPizzaByType = items?.filter(
    (pizzaItems) => pizzaItems.pizzaType === type
  );

  const availablePizzasSizes = pizzaTypes.map((typePizza) => ({
    name: typePizza.name,
    value: typePizza.value,
    disabled: !filterPizzaByType?.some(
      (pizza) => Number(pizza.size) === Number(typePizza.value)
    ),
  }));

  return availablePizzasSizes;
};
