import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/portfolio";

// Google Fonts — loaded via next/font for zero layout shift
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: `${personal.name} — Full Stack Developer`,
  description: personal.tagline,
  openGraph: {
    title: `${personal.name} — Full Stack Developer`,
    description: personal.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg text-text">{children}</body>
    </html>
  );
}
