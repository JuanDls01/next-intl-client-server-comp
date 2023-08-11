"use client";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { useEffect, useState } from "react";

const links = [
  { href: "/", title: "Home" },
  { href: "/landing", title: "Landing" },
];

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    console.log("Entro al useEffect");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //   const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  //   const [padding, setPadding] = useState(30);
  //   const [boxShadow, setBoxShadow] = useState(0);

  //   useEffect(() => {
  //     console.log("window height", clientWindowHeight);

  //     let backgroundTransparacyVar = Number(clientWindowHeight) / 600;

  //     if (backgroundTransparacyVar < 1) {
  //       let paddingVar = 30 - backgroundTransparacyVar * 20;
  //       let boxShadowVar = backgroundTransparacyVar * 0.1;
  //       setBackgroundTransparacy(backgroundTransparacyVar);
  //       setPadding(paddingVar);
  //       setBoxShadow(boxShadowVar);
  //     }
  //   }, [clientWindowHeight]);

  return (
    <nav
      className={`'flex sticky top-0 z-30 w-full px-10 py-3 shadow fixed-top transition duration-300 ease-linear ${
        Number(clientWindowHeight) < 5
          ? "bg-transparent text-black"
          : "bg-black text-white"
      }`}
    >
      <div className='flex flex-row items-center justify-between'>
        <div className='flex items-center gap-4'>
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
