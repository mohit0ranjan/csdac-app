import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CSDAC - Centre for Systems Development and Advanced Computing",
  description: "CSDAC is a Scientific Society of the Ministry of Electronics and Information Technology, Government of India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
