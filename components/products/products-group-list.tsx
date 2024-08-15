import ProductCard from "./product-card";

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
  return (
    <div className="hover">
      <h1 className="mb-8">{title}</h1>

      {items.map((itemsProducts, index) => (
        <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {itemsProducts.map((items: any) => (
            <ProductCard
              key={items.id}
              id={items.id}
              title={items.title}
              description={items.description}
              price={items.price}
              imageUrl={items.imageUrl}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductsGroupList;
