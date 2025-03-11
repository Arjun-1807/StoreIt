"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";

// Image imports
import logoFullBrand from "@/public/assets/icons/logo-full-brand.svg";
import logoBrand from "@/public/assets/icons/logo-brand.svg";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src={logoFullBrand}
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src={logoBrand}
          alt="logo"
          width={53}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-col flex-1 gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image src={icon} alt={name} width={24} height={24} />
                <p>{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
