import Image from "next/image";
import bannerTwo from "../../../public/images/banners/banner2.jpg";

export function BannerTwo() {
  return (
    <section className="relative w-full min-h-[90vh]">
      <Image
        alt="bannerOne"
        src={bannerTwo}
        layout="fill" 
        quality={100}
        objectFit="cover" 
        className="inset-0 fixed"
      />
    </section>
  );
}