import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor"; // <-- Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buvanesh Kavuru | AI/ML Engineer",
  description: "Software Engineer specializing in scalable AI models and full-stack architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} text-white antialiased`}>
        <CustomCursor /> {/* <-- Inject the physics layer here */}
        {children}
      </body>
    </html>
  );
}