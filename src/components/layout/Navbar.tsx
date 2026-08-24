"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Join Us", href: "/join" },
  { label: "Departments", href: "/departments" },
  { label: "About HSS", href: "/about", hasDropdown: true },
  { label: "For Members", href: "/members", hasDropdown: true },
  { label: "Contact", href: "/contact" },
  { label: "Language", href: "#" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white">
            HSS
          </div>
          <span className="hidden font-display text-sm leading-tight text-white sm:block">
            HÄSSELBY STRANDS
            <br />
            SJÖSCOUTKÅR
          </span>
        </Link>

        {/* 桌面导航 */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[15px] text-white transition-opacity hover:opacity-70"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown />}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-lg bg-sun px-6 py-3 font-display text-lg text-ink transition-transform hover:scale-105"
          >
            Join Us
          </Link>
        </div>

        {/* 汉堡按钮 */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="text-white lg:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </nav>

      {/* 移动端展开菜单 */}
      {open && (
        <div className="bg-navy px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}