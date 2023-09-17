import Cart from "../../components/Cart";
import { cookies } from "next/headers";
import React from "react";

export default function page() {
  const cookiesuid = cookies().get("user_id")?.value;

  return (
  
        <div className="h-auto">
          <Cart cookiesuid={cookiesuid} />
        </div>
  
  );
}
