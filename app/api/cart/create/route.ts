import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!Array.isArray(body) || body.length === 0) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
    });
  }

  try {
    // Collect all created cart items
    const cartItems = await Promise.all(
      body.map(async (item) => {
        const { productId, quantity } = item;

        const createItem = await db.cart.create({
          data: {
            productId,
            quantity,
          },
        });
        return createItem; // Ensure you're returning the created item
      })
    );

    // Return the created cart items
    return NextResponse.json({ cartItems }, { status: 201 });
  } catch (error) {
    console.error("Error creating cart items:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
