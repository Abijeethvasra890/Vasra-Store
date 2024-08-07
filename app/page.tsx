import BrandsStrip from "@/components/BrandsStrip";
import Category from "@/components/Category";
import HeroComponent from "@/components/HeroComponent";
import Newsletter from "@/components/Newsletter";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <BrandsStrip />
      <ProductCarousel title={"new arrivals"}/>
      <hr className="h-px mx-20 my-5 border-0 bg-gray-300"></hr>
      <ProductCarousel title={"Top Selling"}/>
      <Category />
      <Newsletter />
    </div>
  );
}
