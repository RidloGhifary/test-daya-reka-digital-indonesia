"use client";

import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  section: {
    section: string;
    items: {
      name: string;
      icon: IconType;
      href: string;
      isActive: boolean;
    }[];
  };
}

export default function SidebarItem({ section }: SidebarItemProps) {
  const router = useRouter();

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-500">{section.section}</div>
      {section.items.map((item) => (
        <div
          onClick={() => router.push(`${item.href}`)}
          key={item.name}
          className={`flex items-center w-full gap-4 hover:bg-gray-100 transition cursor-pointer rounded-md p-2 ${
            item.isActive ? "text-primary" : "text-gray-500"
          }`}>
          <item.icon className="w-5 h-5" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
