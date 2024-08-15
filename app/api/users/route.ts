import prisma from "@/lib/db";
import { hashedPassword } from "@/utils/hash-password";
import { NextResponse } from "next/server";

export async function GET() {
  const allUser = await prisma.user.findMany();

  return NextResponse.json({
    message: "User created successfully",
    data: allUser,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password } = body;

    if (!fullName || !email || !password) {
      throw new Error("Missing required fields");
    }

    const hashPassword = await hashedPassword(password);
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashPassword,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
