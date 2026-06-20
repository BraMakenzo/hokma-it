"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Solutions", url: "/solutions" },
  { name: "Industries", url: "/industries" },
  { name: "Projects", url: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo-transparent.png"
            alt="Hokma IT"
            width={160}
            height={52}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = link.url === "/" ? pathname === "/" : pathname.startsWith(link.url);
            return (
              <Link
                key={link.name}
                href={link.url}
                className={`group relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full transition-all duration-200 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
          <div className="ml-4">
            <Button text="Contact Us" href="/contact" />
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu — animated slide down */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((link) => {
            const isActive = link.url === "/" ? pathname === "/" : pathname.startsWith(link.url);
            return (
              <Link
                key={link.name}
                href={link.url}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-700 bg-blue-50 font-semibold"
                    : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 px-4">
            <Button text="Contact Us" href="/contact" />
          </div>
        </div>
      </div>
    </nav>
  );
}