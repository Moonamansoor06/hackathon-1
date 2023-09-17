import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="">
      <div className="mt-36 ">
        <div className="lg:flex gap-2">
          <div className="flex flex-col gap-6 justify-between  basis-2/4 p-2">
            <Image src={logo} width={180} height={30} alt="logo" />
            <p className="text-sm lg:text-md pr-10 text-slate-500">
            Step into our fashion store and discover a world of endless trends and possibilities, where your unique style comes to life.
            </p>
            <div className="flex gap-4">
              <div className="bg-[#F1F1F1] rounded-lg cursor-pointer p-2">
                <GrTwitter size={20} />
              </div>
              <div className="bg-[#F1F1F1] rounded-lg cursor-pointer p-2">
                <GrFacebookOption size={20} />
              </div>
              <div className="bg-[#F1F1F1] rounded-lg cursor-pointer p-2">
                <GrLinkedinOption size={20} />
              </div>
            </div>
          </div>

          <div className="  basis-1/4 p-2 flex flex-col gap-4">
            <h3 className="text-lg lg:text-xl font-extrabold">Company</h3>
            <ul className="text-slate-500 flex flex-col gap-2 text-sm lg:text-md">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="  basis-1/4 p-2 flex flex-col gap-4">
            <h3 className="text-lg lg:text-xl font-extrabold">Support</h3>
            <ul className="text-slate-500 flex flex-col gap-2 text-sm lg:text-md">
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>

          <div className=" basis-1/4 p-2 flex flex-col gap-4">
            <h3 className="text-lg lg:text-xl font-extrabold">Contact</h3>
            <ul className="text-slate-500 flex flex-col gap-2 text-sm lg:text-md">
              <li>Whatsapp</li>
              <li>Support 24h</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-black flex flex-col h-52 lg:h-20 lg:flex-row  justify-between py-6 mt-6 px-2 text-sm md:text-lg font-bold">
          <p>Copyright © 2023 Dine Market</p>
          <p>
            <span className="text-slate-500">Design by: </span>{" "}
            <span>Moona Mansoor</span>
          </p>
          <p>
            <span className="text-slate-500">Github ID:</span>{" "}
            <span>Mmansoor06</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
