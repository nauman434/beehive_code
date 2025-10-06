"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import Modal from "@/components/global/modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 relative flex items-center justify-center overflow-x-hidden-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 text-center lg:text-left">
          {/* Left: Text */}
          <div className="w-full lg:w-[535px] space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start relative">
            {/* Blurred circle behind text */}
            <div className="absolute -z-10 w-[400px] sm:w-[450px] md:w-[500px] h-[400px] sm:h-[450px] md:h-[500px] rounded-full bg-primary opacity-50 blur-[200px] sm:blur-[220px] md:blur-[250px] -top-24 sm:-top-32 md:-top-40 -left-16 sm:-left-24 md:-left-32"></div>

            {/* Top box */}
            <div className="inline-flex items-center gap-2 sm:gap-4 h-[50px] px-4 py-4 rounded-[30px] bg-white shadow-[0_111px_31px_0_rgba(140,140,140,0),0_71px_29px_0_rgba(140,140,140,0.01),0_40px_24px_0_rgba(140,140,140,0.05),0_18px_18px_0_rgba(140,140,140,0.09),0_4px_10px_0_rgba(140,140,140,0.1)]">
              <div className="w-6 sm:w-8 h-6 sm:h-8 relative">
                <Image src="/compass.svg" alt="Compass Icon" fill className="object-contain" />
              </div>
              <p className="uppercase tracking-wide text-xs sm:text-sm text-dark whitespace-nowrap">
                Get vetted SFO deals straight to your inbox.
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-bold text-foreground leading-[100%]">
              <span className="text-primary">Save up to 90%</span> on flights from San Francisco
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
              Sign up<span className="text-primary">.</span> Get deals<span className="text-primary">.</span> Book flights<span className="text-primary">.</span>
            </h2>

            <Button filled onClick={() => setIsModalOpen(true)} className="mt-5">
              Join for Free
            </Button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end w-full sm:w-[500px] md:w-[719px] h-[400px] sm:h-[500px] md:h-[672px] relative">
            {/* Blurred circle */}
            <div className="absolute -z-10 w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-full bg-primary opacity-50 blur-[200px] sm:blur-[220px] md:blur-[250px] lg:blur-[280px] xl:blur-[300px] top-0 sm:top-10 md:top-16 -right-10 sm:-right-14 lg:-right-20"></div>

            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
              <Image
                src="/hero_img.png"
                alt="Mobile mockup illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
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
