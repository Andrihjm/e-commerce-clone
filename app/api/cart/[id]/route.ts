import prisma from "@/lib/db";
import { updateTotalAmountCart } from "@/lib/update-total-amount-cart";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({
        error: "Cart token not found",
      });
    }

    const cartItems = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItems) {
      return NextResponse.json({
        error: "Cart item not found",
      });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updateUserCart = await updateTotalAmountCart(token);

    return NextResponse.json({
      message: "Cart item updated successfully",
      data: updateUserCart,
    });
  } catch (error) {
    console.log("[CART_ID_PUT] Server error", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({
        error: "Cart token not found",
      });
    }

    const cartItems = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!cartItems) {
      return NextResponse.json({
        error: "Cart item not found",
      });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(params.id),
      },
    });

    const updateUserCart = await updateTotalAmountCart(token);

    return NextResponse.json({
      message: "Cart item updated successfully",
      data: updateUserCart,
    });
  } catch (error) {
    console.log("[CART_DELETE] Server error", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
