"use client";

interface EmptyContentProps {
  title?: string;
}

export default function EmptyContent({
  title = "This feature is under maintenance",
}: EmptyContentProps) {
  return (
    <div className="w-full flex items-center justify-center rounded-md p-20 bg-primary/30 text-white">
      <p>{title}</p>
    </div>
  );
}
