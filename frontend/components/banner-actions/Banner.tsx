"use client";

interface BannerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  secondarySubtitle?: string;
}

export default function Banner({
  children,
  title,
  subtitle,
  secondarySubtitle,
}: BannerProps) {
  return (
    <div className="bg-primary text-white p-4 rounded-md space-y-3">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-sm">{subtitle}</p>
      <p className="text-sm">{secondarySubtitle}</p>
      {children}
    </div>
  );
}
