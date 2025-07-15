'use client';

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Hammer, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-transparent backdrop-blur-md border-b border-yellow-400 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <Image
            src="/berk.png"
            alt="Logo"
            width={44}
            height={44}
            className="rounded-full border-2 border-yellow-400 shadow-md"
            priority
          />
          <h1 className="text-2xl font-extrabold text-yellow-300 drop-shadow-md tracking-widest">
            <Link href="/">FOOD</Link>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-yellow-200 font-medium tracking-wide text-sm sm:text-base">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            aria-label="Home"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>

          <Link
            href="/about"
            className="flex items-center space-x-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            aria-label="About"
          >
            <Info size={20} />
            <span>About</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center space-x-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            aria-label="Services"
          >
            <Hammer size={20} />
            <span>Services</span>
          </Link>

          <Link
            href="/Contact"
            className="flex items-center space-x-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            aria-label="Contact"
          >
            <Mail size={20} />
            <span>Contact</span>
          </Link>

          <Link
            href="/reservation"
            className="flex items-center space-x-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            aria-label="Reservation"
          >
            <Mail size={20} />
            <span>Reservation</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
