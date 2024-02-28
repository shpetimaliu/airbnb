"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categoryItems } from "../lib/categoryItems";

function MapFilter() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  console.log(search);
  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll hide-scrollbar">
      {categoryItems.map((item: any, index: any) => (
        <Link key={item.id} href={search || "/"}>
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
