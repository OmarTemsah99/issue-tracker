"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center text-zinc-600">
      <Link href="/">
        <AiFillBug className="text-zinc-200" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-600": link.href === currentPath,
              "text-zinc-200": link.href !== currentPath,
              "hover:text-zinc-500 transition-colors": true,
            })}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
