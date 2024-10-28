import Image from "next/image";
import bannerOne from "../../../public/images/banners/banner1.jpg";

export function BannerOne() {
  return (
    <section className="relative w-full min-h-[90vh] bg-fixed">
      <Image
        alt="bannerOne"
        src={bannerOne}
        layout="fill" 
        quality={100}
        objectFit="cover" 
        className="absolute inset-0"
      />
    </section>
  );
}
