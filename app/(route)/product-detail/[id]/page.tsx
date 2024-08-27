import ProductForm from "@/components/shared/product-form";
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
    <div className="components flex flex-col my-10 rounded-2xl text-black">
      <ProductForm product={productApi} />;
    </div>
  );
};

export default page;
