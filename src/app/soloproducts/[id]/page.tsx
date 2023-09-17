import React from "react";
import SoloImage from "@/components/SoloImage";
import { IProduct, getProductData } from "@/components/cmsFetch";
import { urlForImage } from "../../../../sanity/lib/image";




export default async function page({ params }: { params: { id: string } }) {
  const data: IProduct[] = await getProductData();

  const itemSelected = data.filter((items) => items._id === params.id);

  return <SoloImage data={itemSelected} />;
}
