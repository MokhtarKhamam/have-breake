import db from "@/lib/db";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { getUserById } from "@/data/user";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Authorization token is required" }),
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, "shhhhh"); // Replace with your secret key
    } catch (error) {
      return new Response(JSON.stringify({ error: `Invalid token4${error}` }), {
        status: 401,
      });
    }

    const { authorId, title, price, unit, image } = await req.json();

    const user = await getUserById(decoded as string);

    // console.log(jwtToken)

    // Validation: Check for required fields
    if (user) {
      const missingFields = [];

      if (!authorId) missingFields.push("authorId");
      if (!title) missingFields.push("title");
      if (price === undefined) missingFields.push("price"); // Allow 0 as a valid price
      if (!unit) missingFields.push("unit");
      if (!image) missingFields.push("image");
      //   if (!profileId) missingFields.push('profileId');

      if (missingFields.length > 0) {
        return new Response(
          JSON.stringify({
            error: `The following fields are required: ${missingFields.join(
              ", "
            )}`,
          }),
          { status: 400 }
        );
      }

      // Create the product if validation passes
      const newProduct = await db.product.create({
        data: {
          authorId,
          title,
          price,
          unit,
          image,
          //   profileId, // This is optional; ensure it matches your model definition
        },
      });

      return new Response(JSON.stringify(newProduct), { status: 201 });
    }
  } catch (error) {
    console.error("error creating product", error);
    return new Response(
      JSON.stringify({ error: "Failed to create product mmm" }),
      { status: 500 }
    );
  }
}
