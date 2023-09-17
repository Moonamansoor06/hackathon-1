"use client";
import { navItems } from "@/Data/Navbar-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiAlignRight, FiX, FiShoppingCart } from "react-icons/fi";
import { cartItems } from "@/lib/drizzle";
import { CookiesUid } from "./CartButton";

export default function Hamburger({
  res,
  cookiesuid,
}: {
  res: cartItems[];
  cookiesuid: CookiesUid;
}) {
  const [mobNav, setMobNav] = useState(false);

  const qArray = res
    .filter((items) => items.user_id === cookiesuid)
    .map((items) => items.quantity);

  const qSum = qArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div>
      <div onClick={() => setMobNav(!mobNav)} className="lg:hidden">
        <FiAlignRight size="25" className="cursor-pointer  my-1.5" />
      </div>
      {mobNav && (
        <div className="fixed right-0 top-0 w-full h-screen bg-white px-2 pt-5 ease-in-out duration-500 transition-opacity">
          {/* dinemart logo and close icon */}
          <div className="flex justify-between">
            <Link
              href="/"
              passHref
              onClick={() => {
                setMobNav(!mobNav);
              }}
            >
              <div className="cursor-pointer">
                <Image src="/Logo.png" alt="logo" width={140} height={40} />
              </div>
            </Link>
            <div>
              <FiX
                size={25}
                onClick={() => {
                  setMobNav(!mobNav);
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* cart icon and list of links */}
          <div className="leading-10 pt-10 text-md flex flex-col justify-center items-center text-center">
            {/* cart button */}
            <Link
              href="/cart/"
              passHref
              onClick={() => {
                setMobNav(!mobNav);
              }}
            >
              <div className=" relative w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center my-3">
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs text-center place-items-center text-white">
                  {/* {res.length} */}
                  {qSum}
                </div>
                <FiShoppingCart size={20} />
              </div>
            </Link>

            {/* navbar links list */}
            <div>
              <ul>
                {navItems.map((items: { navList: string; href: string }, i) => (
                  <li
                    onClick={() => {
                      setMobNav(!mobNav);
                    }}
                    key={i}
                  >
                    <Link href={items.href}>{items.navList}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
