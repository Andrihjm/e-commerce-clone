import FilterComponent from "@/components/filter/filter-component";
import ProductsGroupList from "@/components/products/products-group-list";
import Category from "@/components/shared/category";
import { findPizzas, GetSearchParams } from "@/lib/find-pizza";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <main className="components mt-4">
        <h1 className="text-2xl font-extrabold">Pizza coyyy</h1>

        <Category
          items={categories.filter((category) => category.products.length > 0)}
        />

        <div className="components pt-6">
          <div className="flex gap-10">
            <div className="w-[250px] pr-2">
              <Suspense fallback={<div>Loading...</div>}>
                <FilterComponent />
              </Suspense>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                {categories.map(
                  (category) =>
                    category.products.length > 0 && (
                      <ProductsGroupList
                        key={category.id}
                        title={category.name}
                        items={category.products}
                        categoryId={category.id}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
