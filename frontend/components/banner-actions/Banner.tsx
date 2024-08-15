"use client";

import Image from "next/image";

interface BannerProps {
  children: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return (
    <div className="bg-primary text-white p-4 rounded-md space-y-3">
      {children}
    </div>
  );
}
