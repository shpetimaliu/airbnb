import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import ListingCard from "../components/ListingCard";
import { Nothing } from "../components/Nothing";
import prisma from "../lib/db";

async function getData(userId: string) {
  const data = await prisma.reservation.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          id: true,
          country: true,
          photo: true,
          title: true,
          description: true,
          price: true,
          Favorite: {
            where: {
              userId: userId,
            },
          },
        },
      },
    },
  });

  return data;
}

async function ReservationPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user?.id) return redirect("/");
  const data = await getData(user.id);

  return (
    <section className="container mx-auto px-5 lg:py-10 mt-10">
      <h2 className="text-3xl font-medium tracking-tight">Your reservation</h2>

      {data.length === 0 ? (
        <Nothing
          title="You have not yet made any reservation from the houses listed by us"
          description="We expect you to fill this with the places you want to visit ❤️"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.Home?.id}
              title={item.Home?.title as string}
              location={item.Home?.country as string}
              price={item.Home?.price as number}
              pathName="/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              userId={user.id}
              favoriteId={item.Home?.Favorite[0]?.id as string}
              isInFavoriteList={
                (item.Home?.Favorite.length as number) > 0 ? true : false
              }
              description=""
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ReservationPage;
