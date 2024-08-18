import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiltersProps } from "./use-filters";
import qs from "qs"

export const useQueryFilters = (filtersProps: FiltersProps) => {
    const router = useRouter()
    
  useEffect(() => {
    const params = {
      ...filtersProps.price,
      pizzaTypes: Array.from(filtersProps.pizzaTypes),
      sizes: Array.from(filtersProps.sizes),
      ingredients: Array.from(filtersProps.selecredIngredients),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filtersProps.pizzaTypes, filtersProps.price, filtersProps.selecredIngredients, filtersProps.sizes, router]);
};
