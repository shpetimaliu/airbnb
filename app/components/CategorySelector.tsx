"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { categoryItems } from "../lib/categoryItems";

function CategorySelector() {
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={categorySelected === item.name ? "border-primary" : ""}
            onClick={() => setCategorySelected(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.title}
                height={32}
                width={32}
                className="w-8 h-8"
              />

              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CategorySelector;
