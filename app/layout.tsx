import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlexCharge 6-in-1 Cable — One Cable. Every Device.",
  description:
    "The FlexCharge 6-in-1 Cable charges iPhone, Android, iPad, and more with one compact, premium braided cable. Free delivery across Nepal. Cash on Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
