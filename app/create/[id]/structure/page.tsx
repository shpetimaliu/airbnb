import { createCategoryPage } from "@/app/action";
import CategorySelector from "@/app/components/CategorySelector";
import SubmitButtons from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function RouteIStruktures({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your home?
        </h2>
      </div>
      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <CategorySelector />

        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Button variant="secondary" size="lg">
              <Link href={"/"}>Cancel</Link>
            </Button>
            <SubmitButtons />
          </div>
        </div>
      </form>
    </>
  );
}

export default RouteIStruktures;
