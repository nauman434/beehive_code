"use client";

import Image from "next/image";
import Container from "@/components/global/container";

export default function Brands() {
  const brands = [
    { name: "Brand 1", img: "/ico_1.svg" },
    { name: "Brand 2", img: "/ico_2.svg" },
    { name: "Brand 3", img: "/ico_3.svg" },
    { name: "Brand 4", img: "/ico_4.svg" },
    { name: "Brand 5", img: "/ico_5.svg" },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={brand.img}
                alt={brand.name}
                height={32}
                width={32}
                className="h-8 w-auto sm:h-8 sm:w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
