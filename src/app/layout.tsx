import NavbarComponent from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthRepository } from "@/lib/repositories/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jateng Paradise",
  description: "Website Pariwisata Jawa Tengah",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authPayload = await AuthRepository.createSession();

  return (
    <html lang="en">
      <head>
        {/* title */}
        <title>{String(metadata.title)}</title>
        {/* meta */}
        <meta name="description" content={metadata.description ?? ""} />
        {/* icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <main>
          <NavbarComponent authPayload={authPayload} />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
