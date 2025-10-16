"use client";
import { useState } from "react";
import Button from "@/components/global/button";
import Image from "next/image";
import Modal from "@/components/global/modal";

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-secondary min-h-screen">
      <div className="flex flex-col-reverse md:flex-row items-stretch min-h-screen">
        {/* Left Column - 50% width */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto">
          <Image
            src="/travel.png"
            alt="How it works illustration"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8 py-12 px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-white leading-tight">
            How San Francisco Cheap Flights Works
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mt-4">
            San Francisco Cheap Flights makes your travel dreams a reality by sending vetted deals to destinations like Tokyo, Hawaii, and more straight to your inbox. Simply sign up for our free newsletter in seconds, receive weekly emails with the best SFO flight deals, and book your flights directly with no hassle.
          </p>

          <div className="mt-6 text-left">
            <Button filled onClick={() => setIsModalOpen(true)}>
              Sign up free!
            </Button>
          </div>
        </div>
      </div>

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
