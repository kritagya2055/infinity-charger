import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlexCharge 6-in-1 Cable — One Cable. Every Device.",
  description:
    "The only charging cable you'll ever need. Charges iPhone, Android, iPad, and more. Free delivery across Nepal. Cash on Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
