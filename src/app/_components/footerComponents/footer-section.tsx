import Link from "next/link";
import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa";
import { SiLinktree, SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <footer className="py-12 w-full px-10 md:px-20 lg:px-28 bg-black text-slate-200">
      <div className="w-full lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Section - Company */}
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-white">
                Dj Duque
              </h2>
              <p className="mt-2 text-slate-600 text-center py-2">
                Quer conhecer mais do meu trabalho
              </p>
            </div>
            <div className="flex mt-4 space-x-4 justify-center">
              <ul className="flex gap-6 md:gap-3 gl:gap-6">
                <li>
                  <Link
                    href="https://www.facebook.com/ohduqueee"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                  >
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ohduquee/"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linktr.ee/ohduque"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                  >
                    <SiLinktree size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/ohduquee"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                  >
                    <SiWhatsapp size={30} />
                  </Link>
                </li>
                <li>
                  <Link href='https://drive.google.com/drive/folders/1Mawkvt-9TrMyX8FeLChO3GjW5_vmyzYK'
                    target="_blank"
                    aria-label="presskit"
                    className="text-gray-400 hover:text-white">
                    <FaLink size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - eventos e festivais */}
          <div className="grid grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col  text-center">
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

            <div className="flex flex-col text-center">
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

            <div className="flex flex-col text-center">
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

            <div className="flex flex-col text-center pt-5 xl:pt-0">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-white">
                DJ Residente
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>INN Lounge Bar - NH</li>
                <li>Aliados do Samba, NH</li>
                <li>MOVVE produtora - NH</li>
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
