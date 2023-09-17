import { cartItems } from "@/lib/drizzle";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export type CookiesUid = string | undefined;

export default function CartButton({
  res,
  cookiesuid,
}: {
  res: cartItems[];
  cookiesuid: CookiesUid;
}) {
  const qArray = res
    .filter((items) => items.user_id === cookiesuid)
    .map((items) => items.quantity);
  const qSum = qArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <div>
      <Link href="/cart" passHref>
        <div className="relative w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden lg:flex">
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-[0.65rem] text-center place-items-center text-white hover:scale-105">
            {qSum}
          </div>
          <FiShoppingCart size={20} className="hover:scale-110" />
        </div>
      </Link>
    </div>
  );
}
