import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "56912345678";
const DEFAULT_TEXT =
  "Hola EducaResponde, me gustaría solicitar información comercial para nuestro establecimiento educacional.";

export function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_TEXT)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp Comercial"
      title="Hablar con un ejecutivo B2B por WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/20 ring-4 ring-white transition-transform hover:scale-105"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
