import ListingCard from "./components/ListingCard";
import MapFilter from "./components/MapFilter";
import prisma from "./lib/db";

async function getData() {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilter />
      <div>
        {data.map((item) => (
          <ListingCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
