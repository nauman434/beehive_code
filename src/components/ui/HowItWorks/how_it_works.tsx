"use client";
import { useState } from "react";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import Image from "next/image";
import Modal from "@/components/global/modal";

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      title: "Sign up",
      description: "Join our Free tier newsletter in seconds.",
    },
    {
      title: "Get deals",
      description:
        "Receive emails each week with vetted SFO deals to amazing destinations.",
    },
    {
      title: "Book flights",
      description: "Click the links to book directly, no hassle.",
    },
  ];

  const getBgColor = (index: number) => {
    if (index === 0) return "text-primary";
    if (index === 1) return "text-accent";
    if (index === 2) return "text-secondary";
    return "text-primary";
  };

  return (
    <section className="py-20 relative">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 flex justify-center relative w-full">
            {/* Blurred Circle Behind Image */}
            <div className="absolute bottom-0 right-0 w-full md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full opacity-50 bg-[#D9952F] blur-[150px] sm:blur-[200px] md:blur-[250px] -z-10" />

            <div className="relative w-full h-[500px] sm:h-[500px] md:h-[717px] max-w-full">
              <Image
                src="/travel-2.png"
                alt="How it works illustration"
                fill
                className="object-contain w-full"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[475px] flex flex-col gap-6 md:gap-8">
            {/* Title */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold leading-tight">
                How San Francisco Cheap Flights Works
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-4">
                San Francisco Cheap Flights makes your travel dreams a reality.
                Get vetted deals to Tokyo, Hawaii and more straight to your inbox!
              </p>
            </div>

            {/* Steps */}
            {/* Steps */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full p-4 sm:p-[20px] rounded-[30px] transition-all duration-300 shadow-[0_4px_40px_rgba(0,0,0,0.08)] bg-white"
                >
                  {/* Title with colored number */}
                  <h3 className="text-lg sm:text-[24px] font-bold text-[#1C1C1C] mb-2">
                    <span className={`${getBgColor(index)} mr-2`}>{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-sm sm:text-[18px] font-medium leading-[26px] sm:leading-[30px] text-[#A8A8A8]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>


            {/* CTA Button */}
            <div className="mt-6 text-center md:text-left">
              <Button filled onClick={() => setIsModalOpen(true)}>
                Start saving now - sign up free!
              </Button>
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
