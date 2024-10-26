import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-12 w-full px-10 md:px-20 lg:px-32">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Section - Company */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-gray-600">Dj Duque</h2>
            <p className="mt-2 max-w-xs text-gray-400">
              Quer conhecer mais do meu trabalho
            </p>
            <div className="flex mt-4 space-x-4">
              <ul className="flex gap-6">
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaTwitter size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaYoutube size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - Links */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-600">
                Eventos Festivais
              </h3>
              <ul className="mt-4 space-y-2">
                <li>OktoberFest Igrejinha 2022</li>
                <li>Festival de Kerb 2022, 2023 e 2024</li>
                <li>Festival de Kerb Dois irmão, 2024</li>
                <li>Festival de Kerb São Leopoldo 2023</li>
                <li>Festival de cinema Gramado, Olivas Sunset 2023</li>
                <li>Adoma Oktoberfest 2024</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-600">
                Parcerias
              </h3>
              <ul className="mt-4 space-y-2">
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
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-600">
                Parcerias
              </h3>
              <ul className="mt-4 space-y-2">
                <li>Lets, Gramado</li>
                <li>Allure, Dois irmãos</li>
                <li>Haka, São Leopoldo</li>
                <li>Monaco Lounge, São Leopoldo</li>
                <li>O meu lugar, Canoas</li>
                <li>Yves Club, Santa Cruz do Sul</li>
              </ul>
            </div>
          </div>

          {/* Section - Legal */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              DJ Residente
            </h3>
            <ul className="mt-4 space-y-2">
              <li>INN Lounge Bar - NH</li>
              <li>OFF Club - NH</li>
              <li>Aliados do Samba, NH</li>
              <li>MOVVE produtora - NH</li>
              <li>Complexo CCE - Sapucaia do Sul</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © 2024 <Link href="#" className="hover:text-purple-600">Next Dev @cristhianschroer</Link>, Inc. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
