import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({
        totalAmount: 0,
        items: [],
      });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        cartItems: {
          orderBy: {
            created_at: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Get cart successfully",
      data: userCart,
    });
  } catch (error) {
    console.log("[CART_GET] Server error", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
