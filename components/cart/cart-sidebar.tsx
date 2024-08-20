import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import CartSidebarCard from "./cart-sidebar-card";
import { getCartItemDetails } from "@/lib/get-cartcitem-details";

interface CartSidebarProps {
  children: React.ReactNode;
}

const CartSidebar = ({ children }: CartSidebarProps) => {
  return (
    <>
      <div className="">
        <Sheet>
          <SheetTrigger>{children}</SheetTrigger>
          <SheetContent className="flex flex-col justify-between pb-0 bg-[#dfdcdb] text-black">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 -mx-6 mt-5 overflow-auto">
              <CartSidebarCard
                name={"Pizza"}
                price={8096}
                quantity={1}
                details={getCartItemDetails(2, 300, [
                  { name: "Haris" },
                  { name: "Andri" },
                ])}
                imageUrl={
                  "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp"
                }
              />
            </div>

            <SheetFooter className="-mx-6 py-8 px-5 bg-white">
              <div className="w-full">
                <div className="flex mb-4">
                  <div className="flex flex-1 text-lg text-neutral-500">
                    zdfsd
                    <span className="relative -top-1 mx-2 flex-1 border-b border-dashed border-primary" />
                  </div>

                  <span className="font-bold text-lg">{"$97835"} ₽</span>
                </div>

                <Link href={"/cart"}>
                  <Button type="submit" className="w-full h-1/2 text-base">
                    asd
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default CartSidebar;
