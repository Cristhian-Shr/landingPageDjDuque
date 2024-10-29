import Image from "next/image";
import bannerThree from "../../../public/images/banners/banner.jpg";

export function BannerThree() {
  return (
    <section className="relative w-full min-h-[90vh] bg-fixed">
      <Image
        alt="bannerThree"
        src={bannerThree}
        layout="fill" 
        quality={100}
        objectFit="cover" 
        className="absolute inset-0"
      />
    </section>
  );
}
