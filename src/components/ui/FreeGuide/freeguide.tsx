"use client";
import { useState } from "react";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import Image from "next/image";
import Modal from "@/components/global/modal";

export default function FreeGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <div className="bg-[#F9F4FF] rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 w-full relative sm:overflow-hidden  h-auto sm:h-[500px]">
          {/* Title */}
          <h2 className="leading-tight">
            <span className="block text-[50px] sm:text-[70px] md:text-[80px] font-bold text-foreground leading-[100%]">
              Free San Francisco Travel Guide
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-full sm:max-w-2xl px-4">
            Sign up now and get our{" "}
            <span className="font-semibold text-foreground">Free SFO Travel Guide PDF</span>!
            Discover <span className="text-accent font-semibold">5 expert tips</span> to score cheap flights from SFO.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <Button
              filled
              onClick={() => setIsModalOpen(true)}
            >Sign up for free and get your guide</Button>
          </div>

          {/* Bottom-left illustration inside container (hidden on small screens) */}
          <div className="hidden sm:block absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] -translate-x-10 sm:-translate-x-20 translate-y-10 sm:translate-y-20">
            <Image
              src="/illustration.svg"
              alt="Illustration left"
              fill
              className="object-contain"
            />
          </div>

          {/* Top-left illustration for small screens */}
          <div className="absolute -top-20 left-0 w-[150px] h-[150px] sm:hidden">
            <Image
              src="/illustration-2.svg"
              alt="Top left illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      {/* Bottom-right illustration outside container */}
      <div className="absolute bottom-0 -right-20 w-[300px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] translate-x-10 sm:translate-x-20 translate-y-10 sm:translate-y-20">
        <Image
          src="/illust-1.png"
          alt="Illustration right"
          fill
          className="object-contain"
        />
      </div>
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
