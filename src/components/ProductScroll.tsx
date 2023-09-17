import React from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { IProduct } from "../components/cmsFetch";

export default async function ProductScroll({ data }: { data: IProduct[] }) {
  console.log("product data details", data)
  return (
    <div>
      <div className="text-center mt-28">
        <p className="text-blue-600 text-xs font-bold">PRODUCTS</p>
        <h2 className="text-4xl font-bold py-6">Check What We Have</h2>
      </div>
      <div className="flex">
        <div className=" flex items-center max-w-[70rem] w-full h-[30rem] mx-auto mt-4 mb-8 overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap hover:pause">
            {data.map((items, i) => (
              <Link key={i} href={`/soloproducts/${items._id}`} passHref>
                <div className="mx-6 h-[25rem] w-[20rem] scale-90 lg:scale-100 hover:scale-110 transition-transform ease-in-out duration-500 rounded-lg overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-6/7 rounded-lg overflow-hidden">
                    <Image
                      src={urlForImage(items.image[0]).url()}
                      alt="productimage"
                      width={350}
                      height={300}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{items.title}</p>
                    <p className="font-bold">$ {items.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
