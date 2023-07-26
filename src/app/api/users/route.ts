import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const { name, last_name, login, password, team_id } = await request.json();

  const userExists = await prisma.user.findFirst({
    where: {
      login,
    },
  });

  if (userExists) {
    return NextResponse.error();
  }

  const user = await prisma.user.create({
    data: {
      last_name,
      login,
      name,
      password,
      team_id,
    },
  });

  return user;
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
