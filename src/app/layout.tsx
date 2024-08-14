import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";  // Updated import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "god",
  description: "god",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
