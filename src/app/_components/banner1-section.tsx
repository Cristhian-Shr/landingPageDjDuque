import Image from "next/image";
import bannerOne from "../../../public/images/banners/banner1.jpg";
import { url } from "inspector";

export function BannerOne() {
  return (
    <section className=" w-full min-h-[90vh] bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/banners/banner1.jpg')" }}>
      {/* <Image
        alt="bannerOne"
        src={bannerOne}
        layout="fill" 
        quality={100}
        objectFit="cover" 
        className="absolute inset-0"
      /> */}
      
    </section>
  );
}
