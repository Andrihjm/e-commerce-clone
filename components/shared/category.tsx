"use client";

import { cn } from "@/lib/utils";
import SortPopUp from "./sort-pop-up";
import { useCategoryStore } from "@/store/category";
import { Category as category } from "@prisma/client";

interface CategoryProps {
  items: category[];
}

const Category = ({ items }: CategoryProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <>
      <div className="sticky top-0 flex items-center justify-between py-4 bg-dark border-custom-primary z-10">
        <div className="inline-flex items-center gap-1 p-1">
          {items.map((category) => (
            <a
              key={category.id}
              href={`/#${category.name}`}
              className={cn(
                "h-11 flex items-center gap-2 px-5 font-bold rounded-2xl cursor-pointer hover:text-primary hover:shadow-sm hover:shadow-primary transition-all duration-1000",
                setActiveCategoryId === category.id
                  ? "text-primary shadow-sm shadow-primary"
                  : "text-white"
              )}
            >
              <button>{category.name}</button>
            </a>
          ))}
        </div>

        <SortPopUp />
      </div>
    </>
  );
};

export default Category;
