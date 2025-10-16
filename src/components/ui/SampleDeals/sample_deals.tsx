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
          <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-bold uppercase text-secondary mb-4">
            Recent Free Deals from SFO
          </h2>
          <p className="text-[#666] max-w-[700px] text-base sm:text-lg">
            Discover our handpicked travel deals with amazing destinations and exclusive discounts. Book now and save more!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={deal.img}
                  alt={deal.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info Section */}
              <div className="p-5 flex flex-col items-start text-left">
                <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
                  {deal.destination}
                </h3>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[20px] font-bold text-[#872BFF]">
                    {deal.price}
                  </span>
                  <span className="text-sm font-medium bg-[#FF8126] text-white px-3 py-1 rounded-full">
                    {deal.discount}
                  </span>
                </div>
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
