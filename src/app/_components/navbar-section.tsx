"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logoTipo from "../../../public/images/logos/logoWhite.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define a cor de fundo após rolar 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 z-50">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            <Image
              width={60}
              src={logoTipo}
              alt="logoTipoDuque"
              className="rounded-full hover:-rotate-45 hover:scale-110"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link href="/about" className="text-slate-600 hover:text-white">
            Sobre
          </Link>
          <Link href="/services" className="text-slate-600 hover:text-white">
            Fotos
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-white">
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
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2 bg-black">
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
