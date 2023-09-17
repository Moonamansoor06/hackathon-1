import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../lib/drizzle";

import { eq } from "drizzle-orm";

export async function DELETE(req: NextRequest) {
  let url = req.nextUrl.searchParams;

  try {
    if (url.has("user_id")) {
      let response = await db
        .delete(cartTable)
        .where(
          eq(cartTable.user_id, url.get("user_id") as string)
          // and(eq(cartTable.product_id, (url.get("product_id") as string)), eq(cartTable.user_id, (url.get("user_id") as string)))
        )
        .returning();
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.log("error : ", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
