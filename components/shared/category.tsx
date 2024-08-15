import { categoryMenu } from "@/data/data-array/category-menu";
import { cn } from "@/lib/utils";
import SortPopUp from "./sort-pop-up";

const Category = () => {
  return (
    <>
      <div className="sticky top-0 flex items-center justify-between py-4 bg-dark border-custom-primary">
        <div className="inline-flex items-center gap-1 p-1 ">
          {categoryMenu.map((category) => (
            <a
              href="/"
              key={category.id}
              className={cn(
                "h-11 flex items-center gap-2 px-5 font-bold rounded-2xl cursor-pointer hover:text-primary hover:shadow-sm hover:shadow-primary transition-all duration-1000",
                category.id === 1
                  ? "text-primary shadow-sm shadow-primary"
                  : "text-white"
              )}
            >
              <button>{category.label}</button>
            </a>
          ))}
        </div>

        <SortPopUp />
      </div>
    </>
  );
};

export default Category;
