import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Radim Zavadil",
  description: "Homepage of Radim Zavadil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >

        <div className="h-[870px] border-[1px] border-[rgba(209,213,219,0.5)] dark:border-[rgba(223,223,223,0.1)] absolute left-10 top-10 bottom-0"></div>
        <div className="h-[870px] border-[1px] border-[rgba(209,213,219,0.5)] dark:border-[rgba(223,223,223,0.1)] absolute right-10 top-0 bottom-10"></div>
        <div className="w-full border-[1px] border-[rgba(209,213,219,0.5)] dark:border-[rgba(223,223,223,0.1)] absolute top-10"></div>
        <div className="w-full border-[1px] border-[rgba(209,213,219,0.5)] dark:border-[rgba(223,223,223,0.1)] absolute bottom-10"></div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
