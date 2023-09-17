import Success from "../../components/Success";
import { cookies } from "next/headers";

const Page = () => {
  const cookiesuid = cookies().get("user_id")?.value;

  return (
    <div>
      <Success cookiesuid={cookiesuid} />
    </div>
  );
};

export default Page;
