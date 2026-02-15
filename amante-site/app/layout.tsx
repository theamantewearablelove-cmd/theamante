import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Amante",
  description: "Wearable Love. True luxury is love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} relative overflow-x-hidden`}>
        
        {/* GLOBAL FIXED BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/backgrounds/red-string-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {children}

      </body>
    </html>
  );
}
