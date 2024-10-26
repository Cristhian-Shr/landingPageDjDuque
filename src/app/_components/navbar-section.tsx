"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-white">
            Sobre
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Fotos
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contato
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link href="/about" className="text-gray-300 hover:text-white">
            Sobre
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Fotos
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
