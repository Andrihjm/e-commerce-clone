"use client";

import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { RangeSlider } from "../shared/range-slider";
import FilterCheckboxGroup from "./filter-checkbox-group";
import { useFilterIngredients } from "@/hooks/use-filter-ingredients";
import { useEffect, useState } from "react";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface DataPriceProps {
  priceFromTo: number;
  priceTo: number;
}

interface QueryFilters extends DataPriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

const FilterComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const { ingredients, loading, onAddId, selectedId } = useFilterIngredients(
    searchParams.get("ingredients")?.split(",")
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

  const items = ingredients.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const updatePrice = (name: keyof DataPriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  useEffect(() => {
    const filters = {
      ...price,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedId),
    };

    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [price, sizes, pizzaTypes, selectedId, router]);

  return (
    <div className="sticky top-24 pb-10 pr-2 border-right-primary">
      <h1 className="mb-5 text-xl font-bold ">Filtering</h1>

      <div className="flex flex-col gap-8">
        <FilterCheckboxGroup
          title="Pizza Type"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckbox={tooglePizzaTypes}
          selected={pizzaTypes}
          items={[
            { label: "Indonesia", value: "1" },
            { label: "Italy", value: "2" },
            { label: "Brazil", value: "3" },
          ]}
        />

        <FilterCheckboxGroup
          title="Pizza"
          name="size"
          className="mb-5"
          onClickCheckbox={toggleSize}
          selected={sizes}
          items={[
            { label: "20 cm", value: "20" },
            { label: "30 cm", value: "30" },
            { label: "40 cm", value: "40" },
          ]}
        />
        <Separator />

        <div>
          <h2 className="text-lg">Prices From and To</h2>

          <div className="flex gap-3 text-primary mb-4">
            <Input
              type="number"
              placeholder="0"
              min={0}
              max={1000}
              value={String(price.priceFromTo)}
              onChange={(e) =>
                updatePrice("priceFromTo", Number(e.target.value))
              }
            />
            <Input
              type="number"
              placeholder="1000"
              min={100}
              max={1000}
              value={String(price.priceTo)}
              onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
            />
          </div>

          <RangeSlider
            min={0}
            max={5000}
            step={10}
            value={[price.priceFromTo || 0, price.priceTo || 5000]}
            onValueChange={([priceFromTo, priceTo]) =>
              setPrice({ priceFromTo, priceTo })
            }
          />
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <FilterCheckboxGroup
              title="Pizza"
              name="ingredients"
              limit={6}
              defaultItems={items.slice(0, 6)}
              items={items}
              loading={loading}
              onClickCheckbox={onAddId}
              selected={selectedId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
