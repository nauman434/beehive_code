"use client";
import { useState } from "react";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import Image from "next/image";
import Modal from "@/components/global/modal";

export default function SampleDeals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deals = [
    {
      route: "Honolulu",
      price: "$280",
      originalPrice: "$1,400",
      discount: "80% Off",
      duration: "", // removed nights/days
      img: "/honolulu.jpg",
    },
    {
      route: "Las Vegas",
      price: "$84",
      originalPrice: "$280",
      discount: "70% Off",
      duration: "",
      img: "/las_vegas.jpg",
    },
    {
      route: "Tokyo",
      price: "$707",
      originalPrice: "$2,828",
      discount: "75% Off",
      duration: "",
      img: "/tokyo.jpg",
    },
    {
      route: "Lisbon",
      price: "$321",
      originalPrice: "$802",
      discount: "60% Off",
      duration: "",
      img: "/lisbon.jpg",
    },
  ];

  return (
    <section className="py-20 mt-[50px] relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute bottom-0 -left-60 w-[800px] h-[800px] opacity-30 z-0 pointer-events-none">
        <Image
          src="/map.png"
          alt="Map background"
          fill
          className="object-contain"
          style={{ objectFit: "contain" }}
        />
      </div>

      <Container className="relative z-10">
        {/* Title */}
        <h2 className="mb-12 text-center md:text-left">
          <span className="block text-2xl md:text-[24px] font-light mb-4 text-secondary uppercase">
            Recent Free
          </span>
          <span className="block text-4xl md:text-[44px] font-bold text-foreground">
            Deals from SFO
          </span>
        </h2>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-10 relative z-10">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative w-full max-w-[280px] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Discount badge */}
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
                {deal.discount}
              </div>

              {/* Image */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[280px] w-full">
                <Image
                  src={deal.img}
                  alt={deal.route}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Card body */}
              <div className="bg-white rounded-b-xl p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{deal.route}</h3>
                <div className="flex items-center justify-between">
                  <span className="line-through text-gray-400 text-sm">{deal.originalPrice}</span>
                  <span className="text-xl font-bold text-primary">{deal.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button centered */}
        <div className="text-center relative z-10">
          <Button
            outline
            onClick={() => setIsModalOpen(true)}
          >
            Join free to get deals like these in your inbox!
          </Button>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <iframe
          src="https://subscribe-forms.beehiiv.com/a9529afc-ae28-4a9f-a4c8-9ccab120fa73"
          className="w-full h-[400px]"
          frameBorder="0"
          scrolling="no"
        />
      </Modal>
    </section>
  );
}
