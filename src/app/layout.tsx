import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotter",
  description: "Spotter es una aplicación que te ayuda a encontrar estacionamiento de forma rápida y sencilla. Ademas de gestionar tu estacionamiento de forma eficiente.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
