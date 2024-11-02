import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinktree, SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <footer className="py-12 w-full px-10 md:px-20 lg:px-28 bg-black text-slate-200">
      <div className="w-full lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Section - Company */}
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-white text-center md:text-start">
                Dj Duque
              </h2>
              <p className="mt-2 max-w-xs text-slate-600 text-center lg:text-start py-2">
                Quer conhecer mais do meu trabalho
              </p>
            </div>
            <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
              <ul className="flex gap-6 md:gap-3 gl:gap-6">
                <li>
                  <Link
                    href="https://www.facebook.com/ohduqueee"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ohduquee/"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linktr.ee/ohduque"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <SiLinktree size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <SiWhatsapp size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - eventos e festivais */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-20">
            <div className="flex flex-col">
              <h3 className="text-sm xl:text-base font-semibold uppercase tracking-wide text-white">
                Eventos / Festivais
              </h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>OktoberFest Igrejinha 2022</li>
                <li>Festival de Kerb 2022, 2023 e 2024</li>
                <li>Festival de Kerb Dois irmão, 2024</li>
                <li>Festival de Kerb São Leopoldo 2023</li>
                <li>Festival de cinema Gramado, Olivas Sunset 2023</li>
                <li>Adoma Oktoberfest 2024</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-white">
                Parcerias
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Uclub, Novo Hamburgo</li>
                <li>Dream Club, Novo Hamburgo</li>
                <li>Eros Lounge, Novo Hamburgo</li>
                <li>Colarinho, Novo Hamburgo</li>
                <li>Aliados do Samba, Novo Hamburgo</li>
                <li>Vegas Lounge, Novo Hamburgo</li>
                <li>Resenha do Tchotcha, Estancia Velha</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-white">
                Parcerias
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Lets, Gramado</li>
                <li>Allure, Dois irmãos</li>
                <li>Haka, São Leopoldo</li>
                <li>Monaco Lounge, São Leopoldo</li>
                <li>O meu lugar, Canoas</li>
                <li>Yves Club, Santa Cruz do Sul</li>
              </ul>
            </div>

            <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              DJ Residente
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>INN Lounge Bar - NH</li>
              <li>OFF Club - NH</li>
              <li>Aliados do Samba, NH</li>
              <li>MOVVE produtora - NH</li>
              <li>Complexo CCE - Sapucaia do Sul</li>
            </ul>
          </div>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-white flex justify-center gap-5 px-10 flex-col md:flex-row">
          <div>
            <p>© Dj Duque - cnpj: 46.178.343/0001-41</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>Todos os direitos reservados.</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>
              © 2024{" "}
              <Link
                href="https://next-dev-cristhianschroer.vercel.app/"
                className="hover:text-purple-600 underline"
              >
                Next Dev @cristhianschroer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
