"use client";

import { cn } from "@/lib/utils";
import { ApiClient } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await ApiClient.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const handleOnClickItem = () => {
    setIsFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        ref={ref}
        className={cn(
          "relative flex rounded-2xl flex-1 justify-between h-11 z-30"
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full text-black bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setIsFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "w-full absolute top-14 py-2 shadow-md rounded-xl bg-white transition-all duration-200 invisible opacity-0 z-30",
              isFocused && "visible font-semibold text-black opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product-detail/${product.id}`}
                onClick={handleOnClickItem}
                className="w-full flex items-center px-4 py-2 gap-2 hover:bg-primary/30"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={25}
                  height={25}
                  className="object-contain rounded-full"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
