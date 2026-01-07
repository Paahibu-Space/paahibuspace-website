import { Lexend } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Paahibu Space - Empowering African Women in Tech",
  description: "Breaking barriers and building futures through technology, mentorship, and entrepreneurship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
       <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-background-light text-neutral-dark min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
