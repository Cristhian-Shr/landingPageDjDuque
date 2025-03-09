import React from "react";
import Link from "next/link";
import { FaLink, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-slate-600 w-full py-16 flex flex-col items-center px-10 md:px-20 xl:px-0" id="contact">
      <div className="max-w-xl text-center space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold">Reserve sua Data</h2>
        <p className="text-base md:text-lg">
          Interessado em reservar uma data para seu evento ou show? Entre em
          contato conosco para garantir seu espaço e tirar suas dúvidas!
        </p>
        <div className="pt-5 md:pt-10">
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
        <div className="pt-20">
          <Link href='https://linktr.ee/ohduque' target="_blank" className="hover:text-slate-400 text-2xl md:text-5xl font-bold flex flex-col items-center gap-10">
          Duque - PRESSKIT
          <FaLink />

          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
