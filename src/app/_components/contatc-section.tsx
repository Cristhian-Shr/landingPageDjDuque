import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-slate-600 w-full py-16 flex flex-col items-center">
      <div className="max-w-xl text-center space-y-4">
        <h2 className="text-5xl font-bold">Reserve sua Data</h2>
        <p className="text-lg">
          Interessado em reservar uma data para seu evento ou show? Entre em
          contato conosco para garantir seu espaço e tirar suas dúvidas!
        </p>
        <Link
          target="_blank"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600
         text-white font-semibold py-4 px-4 rounded-full transition-all duration-300"
          href="https://wa.me/5551999564170"
          passHref
        >
          <FaWhatsapp className="text-5xl" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
