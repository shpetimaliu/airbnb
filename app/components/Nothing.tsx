import { File } from "lucide-react";

export function Nothing() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-medium">
        This destination will soon have many listings 🤩
      </h2>
      <p className="mt-2 text-sm text-center leading-6 text-muted-foreground">
        Please check a other category or create your own listing!
      </p>
    </div>
  );
}

export function NothingFavorite() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-medium">
        You have not saved any of our listings to your favorites
      </h2>
      <p className="mt-2 text-sm text-center leading-6 text-muted-foreground">
        We expect you to fill this with the places you want to visit ❤️
      </p>
    </div>
  );
}
