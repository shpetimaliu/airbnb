import prisma from "@/app/lib/db";

async function getData(homeId: string) {
  const data = await prisma.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      photo: true,
      title: true,
      description: true,
      guests: true,
      bedrooms: true,
      bathrooms: true,
      categoryName: true,
      price: true,
    },
  });
  return data;
}

async function page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div className="w-[75%] mx-auto mt-10">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
    </div>
  );
}

export default page;
