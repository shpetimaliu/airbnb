import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

    res.writeHead(302, { Location: "http://localhost:3000" });
    res.end();
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Please try again later." });
  }
}
