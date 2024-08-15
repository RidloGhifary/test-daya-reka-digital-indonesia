"use client";

interface HeadingProps {
  title: string;
  subtitle: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="w-full space-y-2">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      <p className="text-gray-700 text-sm max-w-1/2">{subtitle}</p>
    </div>
  );
}
