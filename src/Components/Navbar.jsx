"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the mobile menu

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Foods",
      path: "/meals",
    },
  ];

  return (
    <nav className="bg-gray-200 shadow-md">
      <div className="flex items-center justify-between py-4 px-4 md:px-16">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Concept 2</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-x-6">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`${
                pathName === link.path ? "text-blue-500" : "text-black"
              } font-semibold`}
            >
              <Link href={link?.path}>{link?.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-y-2 px-4 py-2">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`${
                pathName === link.path ? "text-blue-500" : "text-black"
              } font-semibold`}
            >
              <Link href={link?.path} onClick={() => setMenuOpen(false)}>
                {link?.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
