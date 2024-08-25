"use client";

import { useEffect, useRef } from "react";
import ProductCard from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface ProductsGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
}

const ProductsGroupList = ({
  title,
  items,
  categoryId,
}: ProductsGroupListProps) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId, setActiveCategoryId]);

  return (
    <div id={title} ref={intersectionRef}>
      <h1 className="mb-8">{title}</h1>

      {/* {items.map((itemsProducts, index) => ( */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((items: any) => (
          <ProductCard
            key={items.id}
            id={items.id}
            name={items.name}
            description={items.description}
            price={items.price}
            imageUrl={items.imageUrl}
            ingredients={items.ingredients}
          />
        ))}
      </div>
      {/* // ))} */}
    </div>
  );
};

export default ProductsGroupList;
