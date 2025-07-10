// src/pages/ContactPage.tsx

import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactForm/ContactForm";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1e293b] pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">Fale Conosco</h1>
        <p className="text-gray-300">
          Envie sua mensagem, proposta de parceria ou divulgação. Estamos prontos para conversar!
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
