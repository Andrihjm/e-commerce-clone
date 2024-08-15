import FilterComponent from "@/components/filter/filter-component";
import Category from "@/components/shared/category";
import { defaultItems, items } from "@/data/data-array/menu-filter";

export default function Home() {
  return (
    <>
      <main className="components mt-4">
        <h1 className="text-2xl font-extrabold">Pizza coyyy</h1>

        <Category />

        <div className="components pt-6">
          <div className="flex gap-10">
            <div className="w-[250px] pr-2 border-right-primary">
              <FilterComponent />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">product</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
