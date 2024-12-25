import db from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  const product = await db.product.findMany();
  return new Response(JSON.stringify(product));
}

export async function POST(req: NextRequest) {
    try {
      const { authorId, title, price, unit, image, profileId } = await req.json();
      
      // Validation: Check for required fields
      const missingFields = [];
      
      if (!authorId) missingFields.push('authorId');
      if (!title) missingFields.push('title');
      if (price === undefined) missingFields.push('price'); // Allow 0 as a valid price
      if (!unit) missingFields.push('unit');
      if (!image) missingFields.push('image');
      if (!profileId) missingFields.push('profileId');
  
      if (missingFields.length > 0) {
        return new Response(
          JSON.stringify({ error: `The following fields are required: ${missingFields.join(', ')}` }),
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
          // profileId, // This is optional; ensure it matches your model definition
        },
      });
  
      return new Response(JSON.stringify(newProduct), { status: 201 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Failed to create product mmm' }), { status: 500 });
    }
  }