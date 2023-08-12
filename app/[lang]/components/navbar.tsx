"use client";
import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./locale-switcher";

const links = [
  { href: "/", title: "Home" },
  { href: "/landing", title: "Landing" },
];

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav
      className={`'flex fixed top-0 w-full shadow transition duration-150 ease-linear ${
        Number(clientWindowHeight) < 5
          ? "bg-transparent text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="container py-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
