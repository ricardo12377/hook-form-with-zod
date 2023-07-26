import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOneUser({
  name,
  last_name,
}: {
  name: string;
  last_name: string;
}) {
  const user = await prisma.user.findFirst({
    where: {
      name,
      last_name,
    },
  });

  return user;
}
