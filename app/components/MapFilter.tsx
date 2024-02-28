"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { categoryItems } from "../lib/categoryItems";

function MapFilter() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll hide-scrollbar">
      {categoryItems.map((item: any, index: any) => (
        <Link
          key={item.id}
          href={pathname + "?" + createQueryString("filter", item.name)}
          passHref
          className={cn(
            search === item.name
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 items-center"
          )}
        >
          <div className="relative w-6 h-6">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default MapFilter;
