import type { Metadata, Viewport } from "next";
// Self-hosted fonts: both carry Greek and Turkish letters (the old Arsenal face
// had no Greek), and the build needs no network.
import "@fontsource-variable/noto-serif-display/wght.css";
import "@fontsource-variable/noto-serif-display/wght-italic.css";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Grec · Creative Greek cuisine and live music in Ladadika",
  description:
    "Meze, wine from the barrel and live rebetiko at Aigyptou 21, Ladadika, Thessaloniki.",
  icons: {
    icon: "/assets/grec_logo.png",
    apple: "/assets/grec_logo.png",
  },
  openGraph: {
    title: "Grec · Creative Greek cuisine and live music",
    description:
      "Meze, wine from the barrel and live rebetiko at Aigyptou 21, Ladadika, Thessaloniki.",
    images: ["/assets/road_grec.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
