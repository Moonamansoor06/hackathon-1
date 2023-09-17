"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { sizeChart } from "@/Data/data";
import { useRouter } from "next/navigation";
import { IProduct } from "./cmsFetch";
import toast, { Toaster } from "react-hot-toast";

export default function SoloImage({ data }: { data: IProduct[] }) {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const { refresh } = useRouter();

  const handleMouseEnter = (i: number) => {
    setIndex(i);
  };

  const setBg = (items_size: string) =>
    size === items_size ? "bg-black text-white" : "bg-white text-black";

  const handleSize = (size: string) => {
    setSize(size);
  };

  const quantityIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleToast = () => {
    toast.success("Successfully Added!", { duration: 1000 });
  };

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: data[0]._id,
          size: size,
          quantity: quantity,
          price: data[0].price,
          title: data[0].title,
          product_image: urlForImage(data[0].image[0]).url(),
          generic_name: data[0].generic.name,
        }),
      });
      if (res.ok) {
        refresh();
      } else {
        console.log("POST request failed with status:", res.status);
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      {/* data is coming from soloproducts/[id]/page.tsx */}
      {
        <div className="lg:flex gap-x-6 pt-24">
          <div className="flex gap-x-4 lg:gap-x-8 px-2">
            <div>
              {data[0].image.map((images: any, i: number) => (
                <div
                  key={i}
                  className="border border-slate-400 rounded-sm md:rounded-lg lg:w-24 lg:h-[6.3rem] overflow-hidden mb-4"
                >
                  <div className="flex flex-1">
                    <Image
                      onMouseEnter={() => {
                        handleMouseEnter(i);
                      }}
                      className="lg:max-h-[6.3rem] lg:max-w-[6rem] object-cover"
                      src={urlForImage(images).url()}
                      alt="productimage"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex border border-slate-400 rounded-lg md:w-[40rem] md:h-[42rem] overflow-hidden">
              <Image
                className="md:max-h-[42rem] md:max-w-[40rem] object-cover"
                src={urlForImage(data[0].image[index]).url()}
                alt="productimage"
                width={1000}
                height={800}
              />
            </div>
          </div>
          {/* 3rd column of solo product page */}
          <div className="border border-slate-400 h-fit lg:w-full rounded-lg mb-2 lg:mb-0 mt-2 lg:mt-0 p-2 mx-2">
            <div className="text-lg md:text-2xl font-extrabold mb-1">
              {data[0].title}
            </div>
            <div className="md:text-lg text-slate-400 font-bold mb-6">
              {data[0].generic.name}
            </div>
            <div className=" mb-6">
              <div className="text-sm font-bold mb-2">Select Size</div>
              <div className="flex gap-x-5">
                {sizeChart.map((items, i) => (
                  <div
                    key={i}
                    className={`border rounded-full w-7 h-7  font-semibold flex items-center justify-center hover:bg-yellow-400  hover:ring-black hover:ring-1 text-black cursor-pointer text-xs ${setBg(
                      items.size
                    )}`}
                    onClick={() => handleSize(items.size)}
                  >
                    <p>{items.size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-x-8  mb-8">
              <div className="text-sm font-bold">Quantity:</div>
              <div className="flex w-32 justify-between">
                <span
                  className="border border-slate-400 w-full rounded-s-lg px-2 flex items-center hover:bg-black hover:text-white font-extrabold cursor-pointer select-none hover:scale-90 border-r-0"
                  onClick={quantityDecrement}
                >
                  <AiOutlineMinus size={20} color="red" />
                </span>
                <span className="w-full px-4 flex items-center justify-center font-bold select-none text-black border-slate-400 border-y">
                  {quantity}
                </span>
                <span
                  className="w-full border border-slate-400  rounded-e-lg px-2 flex items-center hover:bg-black hover:text-white font-bold cursor-pointer select-none hover:scale-90 border-l-0"
                  onClick={quantityIncrement}
                >
                  <AiOutlinePlus size={20} color="green" />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="flex justify-center items-center gap-x-3 border rounded-lg bg-black px-3 py-2 text-white text-xs md:text-sm  hover:scale-95 hover:ring-red-500 ring-1 cursor-pointer select-none"
                onClick={() => {
                  handleAddToCart();
                  handleToast();
                }}
              >
                <FiShoppingCart size={18} />
                Add to Cart
              </button>
              <div>
                <p className="text-xl font-bold">$ {data[0].price}</p>
              </div>
            </div>
          </div>
        </div>
      }
      <Toaster />
    </div>
  );
}
