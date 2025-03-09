import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export function WhatsAppButton() {
  const phoneNumber = "+5551999564170";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 md:bottom-10 right-5 md:right-36 bg-green-500 hover:bg-green-600
       text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out 
       flex items-center justify-center z-50"
    >
      <BsWhatsapp className="w-6 md:w-12 h-6 md:h-12"/>
    </Link>
  );
}
