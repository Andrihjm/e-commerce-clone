import Image from "next/image";
import LogoPizza from "../../app/assets/images/pizza.png";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="border-custom-primary">
        <div className="components flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
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
          </div>

          <div className="flex items-center gap-3">
            <Button variant={"outline"} className="flex items-center gap-1">
              <User size={16} />
              User
            </Button>

            <div>
              <Button className="group relative">
                <p>$520</p>
                <span className="h-full w-[1px] mx-3 bg-white/30" />

                <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0">
                  <ShoppingCart size={16} strokeWidth={2} />
                  <p>3</p>
                </div>

                <ArrowRight
                  size={20}
                  className="absolute right-5 transition-all duration-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
