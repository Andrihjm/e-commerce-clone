"use client";

import { cn } from "@/lib/utils";
import { Flashlight, Search } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  //   const handleClickAwayUse = useClickAway(ref, () => {
  //     setIsFocused(!IsFocused);
  //   });

  useClickAway(ref, () => {
    setIsFocused(false);
  });

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
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setIsFocused(true)}
        />

        <div
          className={cn(
            "w-full absolute top-14 py-2 shadow-md rounded-xl bg-white transition-all duration-200 invisible opacity-0 z-30",
            isFocused && "visible font-semibold text-black px-4 opacity-100 top-12"
          )}
        >
          Haris Andri
        </div>
      </div>
    </>
  );
};

export default SearchInput;
