import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#BFA875] py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-bold mb-4 md:mb-0 drop-shadow-md text-[#BFA875]">
          Cursos Cristãos
        </h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/seuusuario/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BFA875] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-[#BFA875]/70">
        © {new Date().getFullYear()} <span className="font-semibold">Cursos Cristãos</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
