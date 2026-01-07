import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://maporiasl.com'),
  title: "Maporia - Rediscover Sri Lanka",
  description: "A gamified travel portfolio app to unlock the beauty of Sri Lanka.",
  icons: {
    icon: '/maporia-logo-transparent-1.svg',
  },
  openGraph: {
    title: "Maporia - Rediscover Sri Lanka",
    description: "A gamified travel portfolio app to unlock the beauty of Sri Lanka.",
    images: [
      {
        url: '/maporia-logo-wBackground.png',
        width: 1200,
        height: 630,
        alt: 'Maporia - Rediscover Sri Lanka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
