import prisma from "@/lib/db";
import { updateTotalAmountCart } from "@/lib/update-total-amount-cart";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const { quantity } = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 401 }
      );
    }

    if (typeof quantity !== "number" || quantity < 0) {
      return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
    }

    const updatedItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });

    const updateUserCart = await updateTotalAmountCart(token);

    return NextResponse.json(
      {
        message: "Cart item updated successfully",
        data: updateUserCart,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CART_ID_PUT] Server error", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 401 }
      );
    }

    const deletedItem = await prisma.cartItem.delete({
      where: { id },
    });

    const updateUserCart = await updateTotalAmountCart(token);

    return NextResponse.json(
      {
        message: "Cart item deleted successfully",
        data: updateUserCart,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CART_DELETE] Server error", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
