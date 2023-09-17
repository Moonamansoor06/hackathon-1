import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../lib/drizzle";
import {v4} from "uuid"
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    // await sql`CREATE TABLE IF NOT EXISTS Todos(id serial primary key, Task varchar(255))`;

    const resGET = await db.select().from(cartTable);
    // const resGET = await db.select().from(cartTable).where(eq(cartTable.user_id, cookies().get("user_id")?.value as string));
    return NextResponse.json(resGET);
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const uid = v4();
  if (!cookies().get("user_id")) {
    cookies().set("user_id", uid)
  }
  
  try {
    const resPOST = await db
      .insert(cartTable)
      .values({
        user_id: cookies().get("user_id")?.value as string,
        product_id: req.product_id,
        size: req.size,
        quantity: req.quantity,
        price: req.price,
        title: req.title,
        product_image: req.product_image,
        generic_name: req.generic_name
      })
      .returning();
    // return NextResponse.json({ message: "Data added successfully" });
    return NextResponse.json(resPOST);
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}



export async function DELETE(req: NextRequest) {
    let url = req.nextUrl.searchParams;

    try {
        if (url.has("id")) {
            let response = await db.delete(cartTable).
                where(
                    eq(cartTable.id, (url.get("id") as unknown as number))
                    // and(eq(cartTable.product_id, (url.get("product_id") as string)), eq(cartTable.user_id, (url.get("user_id") as string)))
                ).returning()
            return NextResponse.json({ response });
        }
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    }
}
