import NavbarComponent from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jateng Paradise",
  description: "Website Pariwisata Jawa Tengah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* title */}
        <title>{String(metadata.title)}</title>
        {/* meta */}
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body className={inter.className}>
        <main>
          <NavbarComponent />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
