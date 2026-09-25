import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dexter Junk Removal",
  description: "Dexter Junk Removal. New website coming soon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-gray-950 antialiased">
        {children}
      </body>
    </html>
  );
}

