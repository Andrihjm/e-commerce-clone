"use client";

import { Items } from "@/lib/types";
import { Input } from "../ui/input";
import FilterCheckbox from "./filter-checkbox";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FilterComponentProps {
  title: string;
  limit?: number;
  items: Items[];
  defaultItems: Items[];
  searchInputPleaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

const FilterComponent = ({
  title,
  limit = 5,
  items,
  defaultItems,
  searchInputPleaceholder = "Search...",
  onChange,
  defaultValue,
}: FilterComponentProps) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [searchFilterCheckbox, setsearchFilterCheckbox] = useState("");

  const handleSearchFilterCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsearchFilterCheckbox(e.target.value);
  };

  const list = isShowAll
    ? items.filter((e) =>
        e.label.toLowerCase().includes(searchFilterCheckbox.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className="">
      <h2 className="font-bold mb-3">{title}</h2>

      {isShowAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPleaceholder}
            onChange={handleSearchFilterCheckbox}
            className="text-primary border-none"
          />
        </div>
      )}

      <div className="max-h-96 flex flex-col gap-4 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            label={item.label}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={item.checked}
            onCheckedChange={(e) => console.log(e)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className="mt-2">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="mt-3 text-primary"
          >
            {isShowAll ? (
              <div className="flex items-center gap-0.5">
                <Minus /> Hide all
              </div>
            ) : (
              <div className="flex items-center gap-0.5">
                <Plus size={16} /> Show all
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
