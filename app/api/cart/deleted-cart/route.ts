import { NextResponse } from "next/server";

export async function DELETE(id: number, req: NextResponse) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({
        error: "Cart token not found",
      });
    }
  } catch (error) {
    console.log("[CART_DELETE] Server error", error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
