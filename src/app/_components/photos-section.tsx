"use client";

import React, { useState } from "react";
import Image from "next/image";

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

export function PhotoGallery() {
  const [zoomedImage, setZoomedImage] = useState<number | null>(null);
  const handleNext = () => {
    if (zoomedImage !== null) {
      setZoomedImage((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  };
  const handlePrev = () => {
    if (zoomedImage !== null) {
      setZoomedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    }
  };
  
  let touchStartX = 0;
  
  return (
    <section className="w-full bg-black text-slate-600 px-8 md:px-0 py-10">
      <h1 className="text-center text-2xl md:text-5xl font-bold mb-10" id="photos">
        Galeria de Fotos
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-lg mx-auto">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-md cursor-pointer"
            onClick={() => setZoomedImage(index)}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
      </div>

      {zoomedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
          onTouchStart={(e) => (touchStartX = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const touchEndX = e.changedTouches[0]?.clientX;
            if (touchEndX !== undefined) {
              if (touchStartX - touchEndX > 50) handleNext();
              if (touchEndX - touchStartX > 50) handlePrev();
            }
          }}
        >
          <div className="relative w-11/12 max-w-4xl h-auto">
            <Image
              src={images[zoomedImage].src}
              alt={images[zoomedImage].alt}
              layout="responsive"
              width={800}
              height={600}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
