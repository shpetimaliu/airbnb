import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubmitButtons from "./SubmitButtons";

function CreateButtonBar() {
  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
        <Button variant="secondary" size="lg">
          <Link href={"/"}>Cancel</Link>
        </Button>
        <SubmitButtons />
      </div>
    </div>
  );
}

export default CreateButtonBar;
