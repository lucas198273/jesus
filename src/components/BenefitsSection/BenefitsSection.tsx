import { Helmet } from "react-helmet-async";

export default function BenefitsSection() {
  return (
    <section className="bg-[#F9F6F1] text-[#2C2C2C] py-16 px-6">
      <Helmet>
        <title>Benefícios do Curso de Teologia Online</title>
        <meta
          name="description"
          content="Conheça os benefícios de estudar teologia online com cursos afiliados confiáveis. Acesso vitalício, certificado, professores qualificados e muito mais!"
        />
        <meta
          name="keywords"
          content="curso de teologia online, teologia cristã, estudar teologia, cursos afiliados, certificado de teologia"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#BFA875] mb-6">
            Por que escolher um curso de teologia?
          </h2>
          <p className="mb-6 text-lg">
            Os cursos que indicamos são ministrados por instituições confiáveis e professores com sólida formação teológica. Como afiliados, buscamos sempre os melhores conteúdos com ótimo custo-benefício para você.
          </p>

          <ul className="space-y-4 text-base">
            <li className="pl-4 border-l-4 border-[#BFA875]">
              📚 Acesso vitalício às aulas e materiais
            </li>
            <li className="pl-4 border-l-4 border-[#BFA875]">
              👨‍🏫 Professores experientes no ministério e na academia
            </li>
            <li className="pl-4 border-l-4 border-[#BFA875]">
              🧾 Certificação válida e reconhecimento no meio cristão
            </li>
            <li className="pl-4 border-l-4 border-[#BFA875]">
              💻 Flexibilidade total para estudar no seu tempo
            </li>
            <li className="pl-4 border-l-4 border-[#BFA875]">
              🎁 Bônus especiais como eBooks, aulas extras e brindes
            </li>
          </ul>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
            alt="Estudante lendo Bíblia"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
