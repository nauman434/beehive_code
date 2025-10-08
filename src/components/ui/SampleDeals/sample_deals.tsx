"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/global/container";
import Modal from "@/components/global/modal";
import Button from "@/components/global/button";

export default function SampleDeals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deals = [
    {
      img: "/honolulu.jpg",
      alt: "Honolulu",
      discount: "70% OFF",
      destination: "Honolulu",
      price: "$899",
    },
    {
      img: "/las_vegas.jpg",
      alt: "Las Vegas",
      discount: "65% OFF",
      destination: "Las Vegas",
      price: "$599",
    },
    {
      img: "/tokyo.jpg",
      alt: "Tokyo",
      discount: "80% OFF",
      destination: "Tokyo",
      price: "$707",
    },
    {
      img: "/lisbon.jpg",
      alt: "Lisbon",
      discount: "75% OFF",
      destination: "Lisbon",
      price: "$650",
    },
  ];

  return (
    <section className="py-20 relative">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-semibold uppercase text-[#872BFF] mb-4">
            Recent Free Deals from SFO
          </h2>
          <p className="text-[#666] max-w-[700px] text-base sm:text-lg">
            Discover our handpicked travel deals with amazing destinations and exclusive discounts. Book now and save more!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative w-full aspect-[350/429] rounded-[40px] overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={deal.img}
                alt={deal.alt}
                fill
                className="object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />

              {/* Discount Tag */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] sm:w-[180px] h-[60px] sm:h-[77px] bg-[#FF8126] text-white rounded-b-[25px] flex items-center justify-center text-[32px] font-semibold uppercase">
                {deal.discount}
              </div>

              {/* Destination Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-center text-white font-semibold text-[40px] uppercase leading-[120%] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                  {deal.destination}
                </h3>
              </div>

              {/* Price Box */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[130px] sm:w-[156px] h-[50px] sm:h-[59px] bg-[#872BFF] rounded-[10px] flex items-center justify-center">
                <p className="text-white text-[24px] font-bold">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <Button onClick={() => setIsModalOpen(true)}>Unlock more deals</Button>
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">More Deals Coming Soon!</h3>
            <p className="text-[#666]">
              Stay tuned for more exclusive travel deals and offers. Subscribe to our newsletter to get notified!
            </p>
          </div>
        </Modal>
      </Container>
    </section>
  );
}
