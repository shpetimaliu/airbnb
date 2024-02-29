import CategorySelector from "@/app/components/CategorySelector";

function RouteIStruktures() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your home?
        </h2>
      </div>
      <form>
        <CategorySelector />
      </form>
    </>
  );
}

export default RouteIStruktures;
