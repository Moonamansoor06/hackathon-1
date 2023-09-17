import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { IProduct, getProductData } from "../../../components/cmsFetch";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const data: IProduct[] = await getProductData();

console.log("params",params.category,data,data.findLastIndex)
  return (
    <div className="h-auto">
      {params.category !== "Allproducts" &&
        (data.filter((items) => items.category.name === params.category)
          .length ? (
          <div className="flex flex-wrap justify-center gap-[3.65rem] pt-20 px-2">
            {data
              .filter((items) => items.category.name === params.category)
              .map((items: IProduct, i) => (
                <Link
                  key={i}
                  href={`/soloproducts/${items._id}`}
                  passHref
                  // className="border border-slate-400"
                >
                  <div className="lg:w-60 lg:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={urlForImage(items.image[0]).url()}
                      alt="productimage"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="p-1">
                    <div className="font-bold">{items.title}</div>
                    <div className="text-slate-400 font-bold">
                      {items.generic.name}
                    </div>
                    <div className="font-bold">$ {items.price}</div>
                  </div>
                </Link>
              ))}
          </div>
        ) : (
          <div className="text-3xl text-slate-400 font-bold text-center pt-10">
            No Items Available
          </div>
        ))}

      {/* for all products */}
      {params.category === "Allproducts" && (
        <div className="flex flex-wrap justify-center gap-[3.65rem] pt-20 px-2">
          {data.map((items: IProduct, i) => (
            <Link
              key={i}
              href={`/soloproducts/${items._id}`}
              passHref
              // className="border border-slate-400 rounded-lg overflow-hidden"
            >
              <div className="lg:w-60 lg:h-64 rounded-lg overflow-hidden">
                <Image
                  src={urlForImage(items.image[0]).url()}
                  alt="productimage"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-1">
                <div className="font-bold">{items.title}</div>
                <div className="text-slate-400 font-bold">
                  {items.generic.name}
                </div>
                <div className="font-bold">$ {items.price}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
