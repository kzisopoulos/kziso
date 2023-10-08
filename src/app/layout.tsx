import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Konstantinos Zisopoulos | Web Dev",
  description: "Konstantinos Zisopoulos personal portfolio.",
  alternates: {
    canonical: `https://www.kostaszisopoulos.com`,
  },
  metadataBase: new URL("https://www.kostaszisopoulos.com"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark bg-gray-900 text-zinc-50 `}>
        <Navbar />
        <main className="my-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
