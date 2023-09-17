"use client";
import React from "react";

const Newsletter = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className=" pt-[10rem] pb-2 flex flex-col justify-center items-center relative z-10 px-2 gap-1 mb-28">
      <div className="text-[#f2f3f7] text-[3.3rem] sm:text-8xl md:text-9xl font-bold absolute top-[13rem] sm:top-[11rem] lg:top-[10rem] -z-10 p-1">
        Newsletter
      </div>
      <center className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">Subscribe Our Newsletter</h1>
        <p className="mb-6">
          Get the latest information and promo offers directly
        </p>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div>
            <input
              className="border border-black  md:w-80 md:max-w-7xl py-[10px] text-sm rounded-lg px-2 flex flex-initial"
              type="email"
              placeholder="Enter email address"
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="bg-black px-4 py-2 text-white text-xs lg:text-md rounded-lg flex-initial"
            >
              Get Started
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
