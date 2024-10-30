import Image from "next/image";
import djDuque from "../../../public/images/perfil/djDuque.jpg";

export const About: React.FC = ({}) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-10 md:px-20 lg:px-40 bg-black text-slate-600" id="about">
      <div className="md:w-1/2">
        <h1 className="text-xl md:text-3xl xl:text-5xl pt-5 md:pt-0 text-center md:text-start font-bold">DJ Duque</h1>
        <p className="pt-5 text-sm md:text-base xl:text-xl">
          Olá vossa graça. Muito prazer! Eu sou o Duque Dj de Open Format, Tech
          House e Funk. Há 8 anos fazendo o melhor da cena, inovando e
          monstrando o que à de melhor na música . Residente no Rio Grande do
          Sul, aonde já me apresentei nas mais diversas casas de eventos e
          festivais. É um grande prazer que me apresento para cada um de vocês.
        </p>
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
