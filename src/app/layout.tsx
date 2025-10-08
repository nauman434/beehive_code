import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/navbar";
import Footer from "@/components/ui/Footer/footer";

// Open Sans for headings / primary font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

// Inter for body / secondary text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cheap Flights from San Francisco | Free Deals from SFO",
  description:
    "Find cheap flights from San Francisco! Free SFO deals like Honolulu $280 RT. Join San Francisco Cheap Flights for weekly savings.",
  openGraph: {
    title: "Cheap Flights from San Francisco | Free Deals from SFO",
    description:
      "Find cheap flights from San Francisco! Free SFO deals like Honolulu $280 RT. Join San Francisco Cheap Flights for weekly savings.",
    url: "https://sanfranciscocheapflights.beehiiv.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
