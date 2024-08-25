"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import ProductForm from "../shared/product-form";

interface ChooseProductModalsProps {
  product: ProductWithRelations;
}

const ChooseProductModals = ({ product }: ChooseProductModalsProps) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      {/* <DialogContent className="bg-white text-black"> */}
      <DialogContent className="w-[1060px] max-w-[1060px] min-h-[500px] p-0 bg-white text-black overflow-hidden">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>

          <ProductForm product={product} onSubmit={() => router.back()} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModals;
