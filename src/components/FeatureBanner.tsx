import React from "react";
import Image from "next/image";
import img from "../../public/featurebanner.webp";
import Link from "next/link";

const FeaturesBanner = () => {
  return (
    <section className=" mt-4 p-2">
      <div className="flex justify-start lg:justify-end pl-4 lg:pl-0">
        <h1 className="text-3xl lg:text-4xl font-extrabold w-2/6">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between">
        <div className=" basis-1/2  flex flex-col justify-evenly p-2 relative">
          <div className=" absolute text-[3rem] lg:text-[5rem] text-[#f2f3f7] font-extrabold lg:px-10 px-2 -z-10 flex">
            Different from others
          </div>
          <div className="flex  gap-4">
            <div className="borer p-2">
              <h3 className="font-bold">Using Good Quality Materials</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" p-2">
              <h3 className="font-bold">100% Handmade Products</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" p-2">
              <h3 className="font-bold">Modern Fashion Design</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" p-2">
              <h3 className="font-bold">Discount for Bulk Orders</h3>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row basis-1/2 ">
          <div className=" rounded-lg p-2 flex justify-center">
            <Image
              src={img}
              width={300}
              height={350}
              alt="img"
              className="rounded-lg"
            />
          </div>
          <div className=" basis-2/3  text-slate-500 text-sm lg:text-md text-justify p-2 flex flex-col items-center justify-center gap-y-6">
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"products/Allproducts"}>
              <button
                className="bg-black px-8 py-2 rounded-lg text-white text-sm lg:text-md hover:scale-95 hover:ring-red-500 ring-1 cursor-pointer select-none"
                type="button"
              >
                See All Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
