import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ikl43tq",        // ✅ seu service ID
        "template_tspy8of",       // ✅ seu template ID
        form.current,
        "8hFlwFfQ1DES--w4I"        // ✅ sua Public Key
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="title"
        placeholder="Assunto"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        required
        className="w-full px-4 py-2 border rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Enviar
      </button>
    </form>
  );
}
