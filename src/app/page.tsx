import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/ProductScroll";
import Promotions from "@/components/Promotions";
import { IProduct, getProductData } from "../components/cmsFetch";
import FeaturesBanner from "@/components/FeatureBanner";


export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div>
      <Hero />
      <Promotions />
      <Products data={data} />
      <FeaturesBanner/>
      <Newsletter />
    </div>
  );
}
