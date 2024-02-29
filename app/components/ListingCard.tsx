import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  title: string;
}

function ListingCard({
  imagePath,
  description,
  location,
  price,
  title,
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
          className="rounded-lg h-full object-cover mb-3"
        />
      </div>
      <Link href={"/"}>
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label}, {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{title}</p>
        <p>
          € <b>{price}</b> night
        </p>
      </Link>
    </div>
  );
}

export default ListingCard;
