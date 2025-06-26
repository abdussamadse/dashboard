"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: {
      default: "/icons/dashboard.svg",
      active: "/icons/dashboard-active.svg",
    },
  },
  {
    name: "Payroll",
    href: "/payroll",
    icon: {
      default: "/icons/payroll.svg",
      active: "/icons/payroll-active.svg",
    },
  },
  {
    name: "Employees",
    href: "/employees",
    icon: {
      default: "/icons/employees.svg",
      active: "/icons/employees-active.svg",
    },
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="w-[316px] bg-[#270E5F]">
      {/* Logo */}
      <div className="flex w-full items-center justify-center gap-2 pt-[44px] pb-[33px]">
        <Image src="/logo/logo.svg" alt="Logo" width={33} height={36} />
        <p className="font-libre-franklin text-[26px] leading-normal font-bold text-white not-italic">
          Clever<span className="text-[#F8D8AB]">wise</span>
        </p>
      </div>

      {/* Profile */}
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Image
          src="/logo/profile.svg"
          alt="Profile avatar"
          width={80}
          height={80}
        />
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <p className="font-libre-franklin text-[18px] leading-normal font-semibold text-white not-italic">
            Emily Johnson
          </p>
          <p className="font-libre-franklin text-center text-[14px] leading-normal font-medium text-[#E0E4EA] not-italic">
            emily-jonson@template.com
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-[40px] space-y-[22px] px-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.href;
          const showActiveIcon = isActive || isHovered;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex h-[48px] w-[252px] items-center gap-4 rounded-[24px] pl-[24px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#AFFFB6] text-[#22182D]"
                    : "text-[#F3EEFE] hover:bg-[#AFFFB6] hover:text-[#22182D]"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={showActiveIcon ? item.icon.active : item.icon.default}
                    alt={`${item.name} icon`}
                    width={24}
                    height={24}
                  />
                </motion.div>
                <motion.p
                  className="font-libre-franklin text-[18px] leading-[23px] font-semibold not-italic"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.name}
                </motion.p>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
