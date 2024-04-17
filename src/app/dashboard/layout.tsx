import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/dashboard/components/Navbar";
import Sidebar from "@/dashboard/components/Sidebar";

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
                <section className="h-screen w-full flex bg-white">
                    <Sidebar />
                    <div className="w-full">
                        <Navbar />
                        <div className="p-3">
                            {children}
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}
