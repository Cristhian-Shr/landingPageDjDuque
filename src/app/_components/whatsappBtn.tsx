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
      className="fixed bottom-10 right-36 bg-green-500 hover:bg-green-600
       text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out 
       flex items-center justify-center z-50"
    >
      <BsWhatsapp size={50} />
    </Link>
  );
}
