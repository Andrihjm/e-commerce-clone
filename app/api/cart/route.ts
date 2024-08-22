import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { CreateCartItemValues } from "@/services/DTO/cart.dto";
import { updateTotalAmountCart } from "@/lib/update-total-amount-cart";

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

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItems = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: {
          every: {
            id: {
              in: data.ingredients,
            },
          },
        },
      },
    });

    if (findCartItems) {
      await prisma.cartItem.update({
        where: {
          id: findCartItems.id,
        },
        data: {
          quantity: findCartItems.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          ingredients: {
            connect: data.ingredients?.map((id) => ({
              id,
            })),
          },
        },
      });
    }

    const updateUserCart = await updateTotalAmountCart(token);

    const response = NextResponse.json(updateUserCart);
    response.cookies.set("cartToken", token);

    return response;
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
