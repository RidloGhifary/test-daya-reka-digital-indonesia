import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Square",
  description: "Square Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
