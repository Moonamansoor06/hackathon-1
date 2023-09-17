import { IProduct, getProductData } from "@/components/cmsFetch";
import { cartItems } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
    const cookiesuid = cookies().get("user_id")?.value;
    const data: IProduct[] = await getProductData(); 
    const res: cartItems[] | any = await request.json();
    const resFilter = res.filter((items: cartItems) => items.user_id === cookiesuid)


    
    try {
 
    if (res.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1NoVqZJpRBqGCZM0UomzvFZZ" },
   
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: resFilter.map((mapitems: cartItems) => 
        {
          return {
              price_data:
                {
                    currency: "usd",
                    product_data:
                    {
                      name: mapitems.title, // needs to be fixed
                      images: [mapitems.product_image],
                    }, 
                    unit_amount:  mapitems.price * 100,         
      
                },
            quantity: mapitems.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}