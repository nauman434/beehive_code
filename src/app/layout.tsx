import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/navbar";
import Footer from "@/components/ui/Footer/footer";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheap Flights from San Francisco | Free Deals from SFO",
  description: "Find cheap flights from San Francisco! Free SFO deals like Honolulu $280 RT. Join San Francisco Cheap Flights for weekly savings.",
  openGraph: {
    title: "Cheap Flights from San Francisco | Free Deals from SFO",
    description: "Find cheap flights from San Francisco! Free SFO deals like Honolulu $280 RT. Join San Francisco Cheap Flights for weekly savings.",
    url: "https://sanfranciscocheapflights.beehiiv.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer
          contactEmail="SanFranciscoCheapFlights@gmail.com"
          xHandle="@SFCheapFlights"
          glossaryLink="https://your-beehiiv-uploaded-glossary-link.pdf"
        />
      </body>
    </html>
  );
}
