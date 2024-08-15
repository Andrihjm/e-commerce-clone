import FilterComponent from "@/components/filter/filter-component";
import ProductCard from "@/components/products/product-card";
import Product from "@/components/products/product-card";
import ProductsGroupList from "@/components/products/products-group-list";
import Category from "@/components/shared/category";
import { defaultItems, items } from "@/data/data-array/menu-filter";
import {
  product1,
  product2,
  product3,
} from "@/data/data-array/product/products";

export default function Home() {
  return (
    <>
      <main className="components mt-4">
        <h1 className="text-2xl font-extrabold">Pizza coyyy</h1>

        <Category />

        <div className="components pt-6">
          <div className="flex gap-10">
            <div className="w-[250px] pr-2">
              <FilterComponent />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductsGroupList
                  title="Pizza"
                  items={[...product1]}
                  categoryId={1}
                />
                <ProductsGroupList
                  title="Teh asu"
                  items={[...product2]}
                  categoryId={1}
                />
                <ProductsGroupList
                  title="Nes cape"
                  items={[...product3]}
                  categoryId={1}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
