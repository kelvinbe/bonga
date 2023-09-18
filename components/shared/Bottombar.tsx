'use client'
import { sidebarLinks } from "@/constants";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Bottombar = () => {
  const pathName = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <div className="flex w-full flex-1 flex-row gap-6 px-6">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathName.includes(link.route) && link.route.length > 1) ||
              pathName === link.route;
            return (
              <Link
                href={link.route}
                key={link.label}
                className={`bottombar_link   ${isActive && "bg-primary-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+./)[0]}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bottombar;
