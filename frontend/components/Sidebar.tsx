"use client";

import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { RiStockFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { MdFileOpen } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidTruck } from "react-icons/bi";
import { MdSettingsInputComponent } from "react-icons/md";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import Logo from "./Logo";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        section: "Menu",
        items: [
          {
            name: "Dashboard",
            icon: BiSolidDashboard,
            href: "/",
            isActive: pathname === "/",
          },
          {
            name: "Stock",
            icon: RiStockFill,
            href: "/stock",
            isActive: pathname === "/stock",
          },
          {
            name: "Customer",
            icon: BsPersonFill,
            href: "/customer",
            isActive: pathname === "/customer",
          },
          {
            name: "Restaurant",
            icon: MdFastfood,
            href: "/restaurant",
            isActive: pathname === "/restaurant",
          },
          {
            name: "Design",
            icon: CgIfDesign,
            href: "/design",
            isActive: pathname === "/design",
          },
          {
            name: "Report",
            icon: MdFileOpen,
            href: "/report",
            isActive: pathname === "/report",
          },
          {
            name: "Role & Admin",
            icon: RiAdminFill,
            href: "/role",
            isActive: pathname === "/role",
          },
          {
            name: "Settings",
            icon: MdSettingsInputComponent,
            href: "/settings",
            isActive: pathname === "/settings",
          },
        ],
      },
      {
        section: "Integration",
        items: [
          {
            name: "Stock",
            icon: RiStockFill,
            href: "/stock-integration",
            isActive: pathname === "/stock-integration",
          },
          {
            name: "Supply",
            icon: BiSolidTruck,
            href: "/supply-integration",
            isActive: pathname === "/supply-integration",
          },
        ],
      },
    ],
    [pathname]
  );

  return (
    <div className="h-screen flex">
      <div className="lg:w-72 w-62 h-full bg-white border-r p-5 overflow-y-auto hidden md:block">
        <Logo />
        <div className="space-y-8 lg:mt-6 md:mt-3">
          {routes.map((section) => (
            <SidebarItem key={section.section} section={section} />
          ))}
        </div>
      </div>

      <main className="p-5 w-full h-full overflow-y-auto">
        <div className="w-full flex items-center justify-between md:hidden mb-6">
          <Logo />

          <div
            className={`w-72 h-screen bg-white border-r space-y-8 p-5 overflow-y-auto z-50 transition absolute top-0 left-0 ${
              showSidebar ? "translate-x-0" : "translate-x-[-100%]"
            } bottom-0`}>
            <Logo />
            {routes.map((section) => (
              <SidebarItem key={section.section} section={section} />
            ))}
          </div>

          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="cursor-pointer hover:opacity-70">
            {showSidebar ? (
              <FaTimes className="w-10 h-10" />
            ) : (
              <IoMenu className="w-10 h-10" />
            )}
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
