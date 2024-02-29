import ListingCard from "./components/ListingCard";
import MapFilter from "./components/MapFilter";
import prisma from "./lib/db";

async function getData({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined,
    },
    select: {
      title: true,
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
    },
  });
  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await getData({ searchParams: searchParams });
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilter />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data.map((item) => (
          <ListingCard
            key={item.id}
            title={item.title as string}
            description={item.description as string}
            imagePath={item.photo as string}
            price={item.price as number}
            location={item.country as string}
          />
        ))}
      </div>
    </div>
  );
}
