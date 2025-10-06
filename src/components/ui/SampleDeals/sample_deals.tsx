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
      img: "/honolulu.jpg",
      alt: "Honolulu",
      from: "SFO",
      to: "Honolulu",
      discount: "70% off",
      price: "$899",
    },
    {
      img: "/las_vegas.jpg",
      alt: "Las Vegas",
      from: "SFO",
      to: "Las Vegas",
      discount: "65% off",
      price: "$599",
    },
    {
      img: "/tokyo.jpg",
      alt: "Tokyo",
      from: "SFO",
      to: "Tokyo",
      discount: "80% off",
      price: "$707",
    },
    {
      img: "/lisbon.jpg",
      alt: "Lisbon",
      from: "SFO",
      to: "Lisbon",
      discount: "75% off",
      price: "$650",
    },
  ];

  return (
    <section className="py-20 mt-[50px] relative ">
      {/* Background Map */}
      <div className="absolute -bottom-100 -left-60 w-[800px] h-[800px] opacity-30 z-0 pointer-events-none">
        <Image src="/map.png" alt="Map background" fill className="object-contain" />
      </div>

      <Container className="relative z-10">
        {/* Title */}
        <h2 className="mb-12 text-center md:text-left">
          <span className="block text-4xl md:text-[64px] font-bold text-foreground">
            Recent Free Deals from SFO
          </span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-10 gap-[20px]">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white w-full rounded-3xl overflow-hidden shadow-md">

              {/* Image + Discount Badge */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={deal.img}
                  alt={deal.alt}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Info */}
              <div className="bg-accent text-white border border-accent h-[25px] flex items-center justify-center px-2">
                <p className="text-[16px] font-bold">{deal.discount}</p>
              </div>
              <div className="flex justify-between items-end px-4 py-7">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px]">From {deal.from} to</p>
                  <h3 className="text-[36px] font-extrabold leading-[100%] uppercase">{deal.to}</h3>
                </div>
                <div className="bg-primary text-white border border-accent h-[35px] flex items-center justify-center w-[75px] rounded-full text-[20px] font-extrabold leading-[99%]">
                  {deal.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <Button filled onClick={() => setIsModalOpen(true)}>
            Join free to get deals like these in your inbox!
          </Button>
        </div>
      </Container>

      {/* Modal */}
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
