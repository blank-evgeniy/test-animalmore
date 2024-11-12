import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ weight: ["400", "500", "600"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Animalmore",
  description: "Все о ваших питомцах",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
