import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import Providers from "@/components/progress-bar-provier";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Apex Mechanic",
  description: "Apex Mechanic is a software that helps you manage your auto repair shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} relative`}>
        <Providers>
          <Navbar />
          <ToastContainer position="top-right" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
