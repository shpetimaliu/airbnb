import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if (!user || user === null) {
      throw new Error("User not found or null.");
    }

    let userDb = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!userDb) {
      userDb = await prisma.user.create({
        data: {
          email: user.email ?? "",
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          id: user.id,
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    return NextResponse.redirect("http://localhost:3000");
  } catch (error) {
    console.error(error);
    return { error: "Please try again later." };
  }
}