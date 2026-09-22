"use client";

import React, { useState } from "react";
import CarIcon from "../icons/car_icon";
import { primaryColor } from "../colors/colors";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Inventory", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative bg-gray-800 px-4 py-4 text-white sm:px-6 lg:px-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <div className={`rounded-md bg-${primaryColor} px-2 py-3`}>
            <CarIcon />
          </div>

          <h1 className="text-xl font-bold uppercase">Brightson Autos</h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition text-xl  ${
                      isActive
                        ? "text-orange-500 font-semibold text-2xl"
                        : "hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div></div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 transition hover:bg-gray-700 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-700 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-md px-3 py-3 transition ${
                      isActive
                        ? "bg-gray-700 text-orange-500"
                        : "hover:bg-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
