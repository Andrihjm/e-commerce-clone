import Image from "next/image";
import LogoPizza from "../../app/assets/images/pizza.png";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";
import CartButton from "../cart/cart-button";
import CartSidebar from "../cart/cart-sidebar";

const Header = () => {
  return (
    <>
      <header className="border-custom-primary">
        <div className="components flex items-center justify-between py-2">
          <Link href={"/"} className="flex items-center gap-4">
            <Image
              src={LogoPizza}
              alt="Logo"
              width={60}
              height={60}
              className="object-cover"
            />
            <div className="">
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">Beli yay woyyyy</p>
            </div>
          </Link>

          <div className="flex-1 mx-10">
            <SearchInput />
          </div>

          <div className="flex items-center gap-3">
            <Button variant={"outline"} className="flex items-center gap-1">
              <User size={16} />
              User
            </Button>

            <CartButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
