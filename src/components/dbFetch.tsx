const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://ecommerce-sanity-sage.vercel.app";


export async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/cart`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log((error as { message: string }).message);
  }
}
