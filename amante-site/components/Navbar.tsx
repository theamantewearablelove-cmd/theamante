"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo/the-amante-1.jpeg"
            alt="The Amante"
            className="h-3 md:h-4"
          />
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-white">
          <Link href="/products" className="hover:text-[#B08D57]">
            Products
          </Link>
          <Link href="/story" className="hover:text-[#B08D57]">
            Story
          </Link>
        </div>

      </div>
    </nav>
  );
}
