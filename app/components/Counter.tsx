"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Counter() {
  const [amount, setAmount] = useState(0);

  function incrase() {
    setAmount(amount + 1);
  }

  function deincrase() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button variant="outline" size="icon" type="button" onClick={deincrase}>
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <p>{amount}</p>
      <Button variant="outline" size="icon" type="button" onClick={incrase}>
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}

export default Counter;
