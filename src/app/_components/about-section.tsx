import Image from "next/image";
import djDuque from "../../../public/images/perfil/djDuque.jpg";

export const About: React.FC = ({}) => {
  return (
    <section className="w-full h-96 flex items-center justify-center px-10 md:px-32 lg:px-44">
      <div className="flex-1">
        <h1 className="text-5xl">DJ Duque</h1>
        <p className="pt-5 text-xl">
          Olá vossa graça. Muito prazer! Eu sou o Duque Dj de Open Format, Tech
          House e Funk. Há 8 anos fazendo o melhor da cena, inovando e
          monstrando o que à de melhor na música . Residente no Rio Grande do
          Sul, aonde já me apresentei nas mais diversas casas de eventos e
          festivais. É um grande prazer que me apresento para cada um de vocês.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          className="w-72 rotate-12 rounded-3xl shadow-xl"
          alt="djDuque"
          src={djDuque}
        />
      </div>
    </section>
  );
};
