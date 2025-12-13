import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const arsenal = Arsenal({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-arsenal",
});

export const metadata: Metadata = {
  title: "Grec - Ελληνική Δημιουργική Κουζίνα",
  description: "Grec - Greek Creative Cuisine. Authentic Greek dishes with a modern twist.",
  icons: {
    icon: "/assets/grec_logo.png",
    apple: "/assets/grec_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arsenal.variable} antialiased overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
