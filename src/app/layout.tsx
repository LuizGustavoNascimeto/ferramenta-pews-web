import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Ferramenta PEWS",
  description: "",
};

const inter = Inter({
  subsets: ["latin"], // Inclua os conjuntos de caracteres que você precisa
  variable: "--font-inter", // Variável CSS para usar a fonte no CSS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
