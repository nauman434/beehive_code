"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/global/container";
import Button from "@/components/global/button";
import Modal from "@/components/global/modal";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="w-full bg-gray-100 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Left: Logo + Intro */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 max-w-xs">
            <Link href="/" className="mb-4">
              {/* Replace with your actual SVG logo */}
              <svg width="209" height="40" viewBox="0 0 209 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths */}
              </svg>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Welcome to San Francisco Cheap Flights! Find vetted deals, tips, and insights to make your travel planning easier.
            </p>
          </div>

          {/* Center: Blog + Glossary */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-gray-700 font-medium">
            <h4 className="font-semibold uppercase text-gray-900 mb-2">Resources</h4>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/glossary" className="hover:text-primary transition-colors">Travel Glossary</Link>
          </div>

          {/* Right: Newsletter & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <Button filled onClick={() => setIsModalOpen(true)}>
              Join Newsletter
            </Button>
            <div className="flex items-center space-x-3">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition"><FaFacebookF /></Link>
              <Link href="#" className="text-gray-500 hover:text-blue-400 transition"><FaTwitter /></Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600 transition"><FaInstagram /></Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Text */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} San Francisco Cheap Flights. All rights reserved.
        </div>
      </Container>

      {/* Newsletter Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <iframe
          src="https://subscribe-forms.beehiiv.com/a9529afc-ae28-4a9f-a4c8-9ccab120fa73"
          className="w-full h-[400px]"
          frameBorder="0"
          scrolling="no"
        />
      </Modal>
    </footer>
  );
}
