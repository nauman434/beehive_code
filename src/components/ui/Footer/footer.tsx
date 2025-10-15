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
              <svg xmlns="http://www.w3.org/2000/svg" width="121" height="50" viewBox="0 0 121 50" fill="none">
<g clip-path="url(#clip0_55_106)">
<path d="M46.4927 39.1208C44.3982 39.1208 42.5745 38.7849 41.0215 38.1133C39.4686 37.4416 38.2932 36.4475 37.4952 35.1311C36.7245 33.8146 36.4587 32.2294 36.6979 30.3756H44.124C44.0668 31.4234 44.3064 32.2294 44.8427 32.7936C45.3832 33.331 46.1567 33.5996 47.1632 33.5996C48.1968 33.5996 49.0491 33.3713 49.7198 32.9145C50.3949 32.4309 50.7983 31.7727 50.9303 30.9398C51.0409 30.2413 50.8876 29.6637 50.4703 29.2069C50.0802 28.7502 49.5549 28.3741 48.8945 28.0785C48.2613 27.783 47.3352 27.4471 46.1163 27.071C44.3559 26.5068 42.9356 25.9426 41.8553 25.3784C40.775 24.8142 39.9004 23.9813 39.2316 22.8798C38.5628 21.7783 38.3689 20.3409 38.6497 18.5677C39.0667 15.9347 40.3579 13.8794 42.5233 12.4017C44.6929 10.8972 47.3282 10.1449 50.4292 10.1449C53.5846 10.1449 56.0088 10.8972 57.7018 12.4017C59.3991 13.8794 60.1051 15.9482 59.8199 18.608H52.2714C52.3617 17.6945 52.1344 16.9825 51.5896 16.4721C51.0491 15.9347 50.2892 15.6661 49.3099 15.6661C48.4667 15.6661 47.7505 15.8944 47.1613 16.3512C46.5764 16.781 46.218 17.4124 46.086 18.2453C45.9414 19.1587 46.2638 19.8707 47.0534 20.3812C47.843 20.8916 49.1159 21.4424 50.872 22.0335C52.6238 22.6514 54.0263 23.2425 55.0794 23.8067C56.1597 24.3709 57.0364 25.1903 57.7095 26.265C58.3825 27.3397 58.585 28.7233 58.3169 30.4159C58.0616 32.0279 57.408 33.4922 56.3563 34.8087C55.3317 36.1251 53.9689 37.1729 52.2678 37.9521C50.5667 38.7312 48.6417 39.1208 46.4927 39.1208ZM84.4043 10.5479L83.5298 16.0691H71.8603L70.9156 22.0335H79.6474L78.7984 27.3934H70.0667L68.2539 38.8387H61.2767L65.7575 10.5479H84.4043ZM97.0924 39.1208C94.3994 39.1208 92.0219 38.5028 89.9599 37.267C87.9251 36.0311 86.4157 34.3116 85.4318 32.1085C84.4793 29.8786 84.2222 27.38 84.6605 24.6127C85.0988 21.8454 86.1452 19.3602 87.7999 17.1572C89.4817 14.9541 91.5357 13.2346 93.962 11.9987C96.4155 10.7629 98.9887 10.1449 101.682 10.1449C104.375 10.1449 106.739 10.7629 108.773 11.9987C110.835 13.2346 112.331 14.9541 113.261 17.1572C114.217 19.3602 114.477 21.8454 114.038 24.6127C113.6 27.38 112.551 29.8786 110.893 32.1085C109.238 34.3116 107.198 36.0311 104.771 37.267C102.345 38.5028 99.7853 39.1208 97.0924 39.1208ZM98.0881 32.8339C100.373 32.8339 102.315 32.0817 103.913 30.5771C105.539 29.0726 106.547 27.0844 106.939 24.6127C107.334 22.1141 106.956 20.1259 105.802 18.6483C104.681 17.1437 102.977 16.3915 100.692 16.3915C98.3802 16.3915 96.4134 17.1303 94.7921 18.608C93.198 20.0856 92.2009 22.0872 91.8009 24.6127C91.4052 27.1113 91.7682 29.1129 92.89 30.6174C94.0433 32.0951 95.7759 32.8339 98.0881 32.8339Z" fill="#181818"/>
<g clip-path="url(#clip1_55_106)">
<path d="M7.29102 14.7378C7.71076 12.0877 10.2262 9.93933 12.9093 9.93933H31.8567C34.5399 9.93933 36.3747 12.0877 35.955 14.7378L32.839 34.4116C32.4192 37.0617 29.9038 39.2101 27.2207 39.2101H8.27329C5.59013 39.2101 3.75526 37.0617 4.175 34.4116L7.29102 14.7378Z" fill="#181818"/>
<rect width="28.664" height="29.6356" rx="4.8583" transform="matrix(1 0 -0.156434 0.987688 8.05103 9.93933)" fill="#181818"/>
<path d="M34.9379 22.5884C35.3645 22.1999 35.4378 21.5927 35.1015 21.2321L29.6222 15.3566C29.286 14.9961 28.6676 15.0187 28.241 15.4072C27.8144 15.7957 27.7412 16.403 28.0774 16.7635L32.9479 21.9862L26.7689 27.6137C26.3423 28.0022 26.2691 28.6094 26.6053 28.97C26.9415 29.3305 27.5599 29.3079 27.9865 28.9194L34.9379 22.5884ZM9.24494 39.2101L10.2143 39.2239C10.6508 36.7008 12.356 32.7796 16.0773 29.4157C19.7725 26.0755 25.537 23.2125 34.2135 22.8946L34.3291 21.9355L34.4448 20.9765C25.3317 21.3105 19.0287 24.3415 14.8664 28.1039C10.7303 31.8427 8.7882 36.2328 8.27557 39.1963L9.24494 39.2101Z" fill="#FF6025"/>
</g>
</g>
<defs>
<clipPath id="clip0_55_106">
<rect width="120" height="48.583" fill="white" transform="translate(0.5 0.708496)"/>
</clipPath>
<clipPath id="clip1_55_106">
<path d="M7.29102 14.7378C7.71076 12.0877 10.2262 9.93933 12.9093 9.93933H31.8567C34.5399 9.93933 36.3747 12.0877 35.955 14.7378L32.839 34.4116C32.4192 37.0617 29.9038 39.2101 27.2207 39.2101H8.27329C5.59013 39.2101 3.75526 37.0617 4.175 34.4116L7.29102 14.7378Z" fill="white"/>
</clipPath>
</defs>
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
          <div className="flex flex-col items-center md:items-end gap-8">
            <Button filled onClick={() => setIsModalOpen(true)}>
              Join for free
            </Button>
            <div className="flex items-center space-x-3">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition text-[24px]"><FaFacebookF /></Link>
              <Link href="#" className="text-gray-500 hover:text-blue-400 transition text-[24px]"><FaTwitter /></Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600 transition text-[24px]"><FaInstagram /></Link>
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
