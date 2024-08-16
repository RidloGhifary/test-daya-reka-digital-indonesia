"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="text-4xl md:text-3xl lg:text-4xl font-bold w-full text-primary lg:block md:hidden block">
      <Link href="/">square</Link>
    </div>
  );
}
