import ChooseProductModals from "@/components/modals/choose-product-modals";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

interface ProductProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: ProductProps) => {
  const products = await prisma.product.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      ingredients: true,
      productItem: true,
    },
  });

  if (!products) {
    return notFound();
  }

  return <ChooseProductModals product={products} />;
};

export default page;
