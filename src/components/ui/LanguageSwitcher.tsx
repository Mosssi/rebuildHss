"use client";

import { useState, useEffect } from "react";

const LANGS = [
  { code: "en", label: "English" },
  { code: "sv", label: "Svenska" },
];

export function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);

  // 页面加载时从 localStorage 读取语言
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setCurrent(saved);
  }, []);

  const handleSelect = (code: string) => {
    setCurrent(code);
    setOpen(false);
    localStorage.setItem("lang", code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[15px] text-white hover:opacity-70"
      >
        {LANGS.find((l) => l.code === current)?.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-lg bg-white shadow-lg">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-navy/5 ${
                current === lang.code ? "font-semibold text-navy" : "text-ink"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}