import NavbarComponent from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { AuthRepository } from "@/lib/repositories/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../styles/main.scss";
import SearchModal from "@/components/SearchModal";

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
  const authPayload = await AuthRepository.readSession();

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
        {/* site.webmanifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NavbarComponent authPayload={authPayload} />

        <main>
          <SearchModal />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
