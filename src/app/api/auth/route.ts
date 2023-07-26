import { NextResponse } from "next/server";
import { getOneUser } from "../services/user.service";

export async function POST(request: Request) {
  const { name, last_name } = await request.json();

  const user = await getOneUser({ name, last_name });

  if (user) {
    return NextResponse.json(
      {
        message: "Login realizado com sucesso",
        data: { isLogged: true, userName: user.name },
      },
      { status: 200 }
    );
  }

  return NextResponse.error;
}
