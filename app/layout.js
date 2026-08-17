import { Teko, Ubuntu } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";
import { cn } from "@/lib/utils";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://paahibuspace.org";
const defaultTitle = "Paahibu Space - Empowering African Women in Tech";
const defaultDescription =
  "Breaking barriers and building futures through technology, mentorship, and entrepreneurship for African women and girls.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Paahibu Space",
  },
  description: defaultDescription,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Paahibu Space",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Paahibu Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paahibuspace",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${teko.variable} ${ubuntu.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-background-light text-neutral-dark dark:bg-background-dark dark:text-white min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
