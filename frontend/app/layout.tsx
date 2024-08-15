import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal";

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
        <Suspense>
          <ToasterProvider />
          <ConfirmDeleteModal />
          <Sidebar>{children}</Sidebar>
        </Suspense>
      </body>
    </html>
  );
}
