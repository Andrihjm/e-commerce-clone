"use client";

import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { RangeSlider } from "../shared/range-slider";
import FilterCheckboxGroup from "./filter-checkbox-group";
import { useFilters } from "@/hooks/use-filters";
import { useFilterIngredients } from "@/hooks/use-filter-ingredients";
import { useQueryFilters } from "@/hooks/use-query-filters";

const FilterComponent = () => {
  const { ingredients, loading } = useFilterIngredients();
  const filters = useFilters();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  useQueryFilters(filters);

  const updatedPrice = (price: number[]) => {
    filters.setPrice("priceFromTo", price[0]);
    filters.setPrice("priceTo", price[1]);
  };

  return (
    <div className="sticky top-24 pb-10 pr-2 border-right-primary">
      <h1 className="mb-5 text-xl font-bold ">Filtering</h1>

      <div className="flex flex-col gap-8">
        <FilterCheckboxGroup
          title="Pizza Type"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckbox={filters.setPizzaTypes}
          selected={filters.pizzaTypes}
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
          onClickCheckbox={filters.setSizes}
          selected={filters.sizes}
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
              value={String(filters.price.priceFromTo)}
              onChange={(e) =>
                filters.setPrice("priceFromTo", Number(e.target.value))
              }
            />
            <Input
              type="number"
              placeholder="1000"
              min={100}
              max={1000}
              value={String(filters.price.priceTo)}
              onChange={(e) =>
                filters.setPrice("priceTo", Number(e.target.value))
              }
            />
          </div>

          <RangeSlider
            min={0}
            max={5000}
            step={10}
            value={[
              filters.price.priceFromTo || 0,
              filters.price.priceTo || 5000,
            ]}
            onValueChange={updatedPrice}
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
              onClickCheckbox={filters.setSelecredIngredients}
              selected={filters.selecredIngredients}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
