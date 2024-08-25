import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useSet } from "react-use";

interface DataPriceProps {
  priceFromTo: number;
  priceTo: number;
}

interface QueryFilters extends DataPriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface FiltersProps {
  selecredIngredients: Set<string>;
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  price: DataPriceProps;
}

interface ReturnProps extends FiltersProps {
  setPrice: (name: keyof DataPriceProps, value: number) => void;
  setSelecredIngredients: (value: string) => void;
  setSizes: (value: string) => void;
  setPizzaTypes: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selecredIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(",") || [])
  );

  const [price, setPrice] = useState<DataPriceProps>({
    priceFromTo: Number(searchParams.get("priceFromTo")) || 0,
    priceTo: Number(searchParams.get("priceTo")) || 0,
  });

  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );
  const [pizzaTypes, { toggle: tooglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const updatePrice = (name: keyof DataPriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return useMemo(
    () => ({
      selecredIngredients,
      setSelecredIngredients: toggleIngredients,
      price,
      setPrice: updatePrice,
      sizes,
      pizzaTypes,
      setSizes: toggleSize,
      setPizzaTypes: tooglePizzaTypes,
    }),
    [
      pizzaTypes,
      price,
      selecredIngredients,
      sizes,
      // toggleIngredients,
      // toggleSize,
      // tooglePizzaTypes,
    ]
  );
};
