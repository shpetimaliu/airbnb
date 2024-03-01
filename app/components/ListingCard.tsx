import Image from "next/image";
import Link from "next/link";
import { AddToFavorite, RemoveFromFavorite } from "../action";
import { useCountries } from "../lib/getCountries";
import { AddToFavoriteButton, DeleteFromFavorite } from "./SubmitButtons";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  title: string;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

function ListingCard({
  imagePath,
  description,
  location,
  price,
  title,
  userId,
  favoriteId,
  isInFavoriteList,
  homeId,
  pathName,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://gnygijwemqkfceqfmmie.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover"
        />

        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoriteList ? (
              <form action={RemoveFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavorite />
              </form>
            ) : (
              <form action={AddToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label}, {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-1">{title}</p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">€ {price}</span> night
        </p>
      </Link>
    </div>
  );
}

export default ListingCard;
