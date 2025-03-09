import Image from "next/image";
import djDuque from "../../../../public/images/perfil/djDuquePerfil.jpeg";

export const About: React.FC = ({ }) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-10 md:px-20 lg:px-40
     bg-black text-slate-600" id="about">
      <div className="md:w-1/2 flex flex-col items-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl pt-5 md:pt-0 font-bold">DJ Duque</h1>
        <div className="flex flex-col text-center md:text-start">
          <p className="pt-5 text-sm md:text-base xl:text-xl">
            Olá, vossa graça! Muito prazer!  </p>
          <p className="pt-5 text-sm md:text-base xl:text-xl">
            Eu sou o Duque DJ, especialista em Open Format, Tech House e Funk. Há 8 anos, venho trazendo inovação para a cena,
            entregando sets únicos e mostrando o melhor da música.
          </p>
          <p className="pt-5 text-sm md:text-base xl:text-xl">
            Sou residente do Rio Grande do Sul e já me apresentei em diversas casas de eventos e festivais.
            Cada apresentação é uma nova oportunidade de conexão com o público, e é um grande prazer estar aqui com vocês.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center md:justify-end pr-10 pt-16 md:pt-0 z-40">
        <Image
          className="rounded-3xl w-40 lg:w-52 xl:w-72 scale-125 rotate-12"
          alt="djDuque"
          src={djDuque}
        />
      </div>
    </section>
  );
};
