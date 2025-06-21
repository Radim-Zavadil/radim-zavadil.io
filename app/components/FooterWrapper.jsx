"use client"
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // For now, we'll show footer only on the home page
  // You can expand this array as you add more valid routes
  const validRoutes = [
    "/", // home page
  ];
  
  // Show footer only on valid routes
  const showFooter = validRoutes.includes(pathname);

  if (!showFooter) {
    return null;
  }

  return <Footer />;
} 