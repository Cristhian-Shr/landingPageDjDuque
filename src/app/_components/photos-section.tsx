"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Imagens do carrossel
const images = [
  { id: 1, src: "/images/photoSection/slidePhoto.jpg", alt: "Image 1" },
  { id: 2, src: "/images/photoSection/slidePhoto1.jpg", alt: "Image 2" },
  { id: 3, src: "/images/photoSection/slidePhoto2.jpg", alt: "Image 3" },
  { id: 4, src: "/images/photoSection/slidePhoto3.jpg", alt: "Image 4" },
  { id: 5, src: "/images/photoSection/slidePhoto4.jpg", alt: "Image 5" },
  { id: 6, src: "/images/photoSection/slidePhoto5.jpg", alt: "Image 6" },
  { id: 7, src: "/images/photoSection/slidePhoto6.jpg", alt: "Image 7" },
  { id: 8, src: "/images/photoSection/slidePhoto7.jpg", alt: "Image 8" },
  { id: 9, src: "/images/photoSection/slidePhoto8.jpg", alt: "Image 9" },
  { id: 10, src: "/images/photoSection/slidePhoto9.jpg", alt: "Image 10" },
];

export function Carousel() {
  return (
    <section className="w-full h-[700px] bg-black text-slate-600 px-8 md:px-0">
      <h1 className="text-center text-2xl md:text-5xl pt-10 font-bold" id="photos">Galeria de fotos</h1>
      <div className="w-full max-w-screen-lg mx-auto py-10 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="h-[400px]"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-[400px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
