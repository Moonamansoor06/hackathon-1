import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";

export interface IProduct {
  _id: string;
  title: string;
  generic: { name: string };
  price: number;
  image: IImage[];
  category: { name: string };
}

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=='product']{
    _id,
    title,
    generic -> {
      name,
    },
    price, 
    image,
    category -> {
      name,
    },
}`,
    {
      cache: "no-store",
    }
  );
  return res;
};
