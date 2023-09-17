import React from "react";
import Image from "next/image";

export default function Promotions() {
  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-600 text-xs font-bold">PROMOTIONS</p>
        <h2 className="text-4xl font-bold py-6">Our Promotions Events</h2>
      </div>
      <div className="lg:flex justify-between">
        <div className="basis-1/2  p-2 md:p-6 space-y-6">
          {/* card 1 */}
          <div className=" w-full md:h-[11.8rem] bg-[#D6D6D8] md:flex md:justify-between items-center overflow-hidden relative">
            <div className="text-[#212121]  md:max-w-fit md:flex justify-center flex-col items-center px-2">
              <h2 className="text-xl md:text-3xl font-bold">GET UP TO </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold">60%</h3>
              <p className="text-sm md:text-lg">For the summer season</p>
            </div>
            <center>
              <Image
                src="/event1.png"
                alt="event1"
                width={280}
                height={280}
              />
            </center>
          </div>
          {/* card  2*/}
          <div className=" w-full h-[11.8rem] bg-[#212121] flex justify-center items-center">
            <div className="text-white flex flex-col justify-center items-center gap-y-2">
              <div>
                <h2 className="flex text-3xl font-bold md:tracking-wider">
                  GET 30% Off
                </h2>
              </div>
              <div>
                <p className="text-sm">USE PROMO CODE</p>
              </div>
              <div className="text-lg md:tracking-widest bg-[#474747] rounded-lg md:px-8 px-1 md:py-1">
                DINEWEEKENDSALE
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col md:flex-row justify-between gap-y-7 md:gap-x-7 md:p-6 p-2">
          {/* card 3 */}
          <div className=" md:w-1/2 h-[25rem] bg-[#EFE1C7] flex flex-col justify-between">
            <div className="p-2 font-bold">
              <p>Flex Sweatshirt</p>
              <div className="flex gap-x-3">
                <del>$100.00</del>
                <p>$75.00</p>
              </div>
            </div>
            <center className="">
              <Image src="/event2.png" alt="event2" width={250} height={250} />
            </center>
          </div>
          {/* card 4 */}
          <div className=" md:w-1/2 h-[25rem] bg-[#D7D7D9] flex flex-col justify-between">
            <div className="p-2 font-bold">
              <p>Flex Push Button Bomber</p>
              <div className="flex gap-x-3">
                <del>$225.00</del>
                <p>$190.00</p>
              </div>
            </div>
            <center>
              <Image src="/event3.png" alt="event3" width={250} height={250} />
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
