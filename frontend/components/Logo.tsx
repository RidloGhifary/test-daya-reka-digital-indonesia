"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="text-3xl lg:text-4xl font-bold w-full text-primary">
      <Link href="/">square</Link>
    </div>
  );
}
