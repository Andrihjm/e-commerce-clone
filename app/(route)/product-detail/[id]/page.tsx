import PizzaImage from "@/components/products/pizza-image";
import prisma from "@/lib/db";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
  const productApi = await prisma.product.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              productItem: true,
            },
          },
        },
      },
      productItem: true,
    },
  });

  if (!productApi) {
    return <div>Product not found</div>;
  }

  return (
    <div className="components flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={productApi.imageUrl} size={40} />

        <div className="w-[490px] bg-gray-500/10 p-7">
          <h2
            title={productApi.name}
            className="mb-1 line-clamp-2 font-extrabold"
          >
            {productApi.name} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Optio dicta earum incidunt eum id expedita,
            reprehenderit necessitatibus vero minima autem?
          </h2>
          <p
            title={productApi.description}
            className="line-clamp-2 text-gray-400"
          >
            {productApi.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quis nisi aperiam dolores laborum? Est, adipisci
            repellendus quidem aspernatur quam facere?
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
