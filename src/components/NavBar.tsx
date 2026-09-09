"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-mist">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/browseeast-logo.svg"
            alt="BrowseEast"
            width={290}
            height={68}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm uppercase tracking-wide">
          <Link href="/blog" className="text-ink hover:text-petrol transition">
            Blog
          </Link>
          <Link href="/about" className="text-ink hover:text-petrol transition">
            About
          </Link>
          <Link
            href="/contact"
            className="text-ink hover:text-petrol transition"
          >
            Contact
          </Link>
          <Link
            href="/search"
            aria-label="Search"
            className="text-ink hover:text-petrol transition"
          >
            <Search size={18} />
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 font-mono text-sm uppercase tracking-wide">
          <Link
            href="/blog"
            className="text-ink"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-ink"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-ink"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/search"
            className="text-ink"
            onClick={() => setIsOpen(false)}
          >
            Search
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="normal-case">Theme</span>
          </div>
        </div>
      )}
    </header>
  );
}