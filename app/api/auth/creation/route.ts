import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
        },
      });
    }

    return {
      status: 200,
      body: userDb,
    };
  } catch (error: any) {
    return {
      status: 500,
      body: { error: error.message },
    };
  }
}
