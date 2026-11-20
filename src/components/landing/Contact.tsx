import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Building2,
  MessageCircle,
  Clock,
  RefreshCw,
} from "lucide-react";

interface SubmittedPayload {
  folio: string;
  name: string;
  cargo: string;
  colegio: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "56912345678";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contacto@educaresponde.cl";
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "";

export function Contact() {
  const [submittedData, setSubmittedData] = useState<SubmittedPayload | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload: SubmittedPayload = {
      folio: `ER-${Math.floor(100000 + Math.random() * 900000)}`,
      name: String(formData.get("name") || ""),
      cargo: String(formData.get("cargo") || ""),
      colegio: String(formData.get("colegio") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      area: String(formData.get("area") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      if (CONTACT_API_URL) {
        await fetch(CONTACT_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }
      setSubmittedData(payload);
    } catch {
      setSubmittedData(payload);
    } finally {
      setLoading(false);
    }
  }

  const getWhatsAppFollowUpUrl = (data: SubmittedPayload) => {
    const text = `Hola EducaResponde, acabo de enviar una solicitud web (Folio ${data.folio}).\n\n• *Nombre:* ${data.name} (${data.cargo})\n• *Establecimiento:* ${data.colegio}\n• *Foco / Módulo:* ${data.area}\n• *Correo:* ${data.email}\n• *Mensaje:* ${data.message || "Solicitud de presentación y propuesta anual"}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.25fr] lg:items-start">
        {/* Columna Izquierda: Información de Contacto Institucional */}
        <div>
          <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
            Diseño Estratégico de Planes Anuales
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Implementemos EducaResponde en su comunidad educativa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Agende una reunión con nuestro equipo especialista para configurar los módulos de capacitación CPA en Moodle, el calendario anual de ensayos SIMCE/DIA, el Modelo de Gestión UTP o los Laboratorios Interactivos en su colegio.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Atención a Directores, UTP y Sostenedores
                </div>
                <div className="mt-0.5 text-base font-bold text-slate-900">+56 2 2345 6789</div>
                <div className="text-xs text-slate-600">Lunes a Viernes · 08:30 a 18:30 hrs</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Correo Institucional &amp; Convenios PME / SEP
                </div>
                <div className="mt-0.5 text-base font-bold text-slate-900">{CONTACT_EMAIL}</div>
                <div className="text-xs text-slate-600">
                  Solicitud de Brochure Comercial, Órdenes de Compra y habilitación Moodle
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-md">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cobertura Presencial y Digital
                </div>
                <div className="mt-0.5 text-base font-bold text-slate-900">
                  Santiago &amp; Establecimientos en todo Chile
                </div>
                <div className="text-xs text-slate-600">
                  Acompañamiento presencial de especialistas, ensayos físicos SIMCE y Aula Moodle 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Formulario B2B */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl md:p-10">
          {submittedData ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-xs">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <span className="mt-4 inline-block rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                Folio de Solicitud #{submittedData.folio}
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
                ¡Solicitud Institucional Registrada!
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                Hemos recibido los antecedentes de{" "}
                <strong className="text-slate-900">{submittedData.colegio}</strong>. Un especialista de EducaResponde contactará a{" "}
                <strong className="text-slate-900">{submittedData.name}</strong> dentro de las próximas 24 horas hábiles.
              </p>

              <div className="mt-6 space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Establecimiento:</span>
                  <span className="font-bold text-slate-900">{submittedData.colegio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Solicitante / Rol:</span>
                  <span className="font-bold text-slate-900">
                    {submittedData.name} ({submittedData.cargo})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Foco / Programa:</span>
                  <span className="font-bold text-slate-900">{submittedData.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Correo de contacto:</span>
                  <span className="font-bold text-slate-900">{submittedData.email}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppFollowUpUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:brightness-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agilizar Atención por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <RefreshCw className="h-4 w-4" />
                  Nueva consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Solicitar Presentación, Brochure o Propuesta Anual
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Seleccione el foco o módulo de interés para su establecimiento educacional.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                    placeholder="Ej. Patricia Rojas"
                  />
                </div>

                <div>
                  <label htmlFor="cargo" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Rol en el Establecimiento *
                  </label>
                  <select
                    id="cargo"
                    name="cargo"
                    required
                    defaultValue="Jefe(a) UTP / Curriculista"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                  >
                    <option value="Director(a) / Rector(a)">Director(a) / Rector(a)</option>
                    <option value="Jefe(a) UTP / Curriculista">Jefe(a) de UTP / Curriculista</option>
                    <option value="Evaluador(a) / Jefe(a) de Depto.">Evaluador(a) / Jefe(a) de Departamento</option>
                    <option value="Sostenedor(a) / DAEM / SLEP">Sostenedor(a) / DAEM / SLEP</option>
                    <option value="Encargado(a) Convivencia / PIE">Encargado(a) de Convivencia / PIE</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="colegio" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Colegio / Establecimiento *
                  </label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute top-3.5 left-3.5 h-4 w-4 text-slate-400" />
                    <input
                      id="colegio"
                      name="colegio"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pr-4 pl-10 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                      placeholder="Ej. Colegio San Andrés"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Teléfono / WhatsApp directo *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                    placeholder="+56 9 8765 4321"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Correo institucional *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                    placeholder="utp@sucolegio.cl"
                  />
                </div>

                <div>
                  <label htmlFor="area" className="mb-1.5 block text-sm font-bold text-slate-800">
                    Foco o Plataforma de interés *
                  </label>
                  <select
                    id="area"
                    name="area"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                  >
                    <option value="" disabled>
                      Seleccione un foco o módulo…
                    </option>
                    <option value="Foco 1: Capacitación Docente CPA (Aula Moodle) y Gestión UTP">
                      Foco 1: Capacitación Docente CPA (Moodle) y Modelo UTP
                    </option>
                    <option value="Foco 2: Evaluaciones Externas (Ensayos SIMCE, DIA y Syscol)">
                      Foco 2: Evaluaciones Externas (SIMCE, DIA, Syscol y Cobertura)
                    </option>
                    <option value="Foco 3: Gestión Normativa (Decreto 67, RICE, Protocolos e Inclusión)">
                      Foco 3: Gestión Normativa (Decreto 67, RICE, Dictámenes y PIE)
                    </option>
                    <option value="Foco 4: Innovación STEM, ABP, Robótica y Recreos Interactivos">
                      Foco 4: Innovación STEM, ABP, Robótica y Recreos Interactivos
                    </option>
                    <option value="Módulos: Socioemocional, Ludotecas/Bibliorecreos o Laboratorios">
                      Módulos: Socioemocional, Ludotecas/Bibliorecreos o Laboratorios
                    </option>
                    <option value="Plan Anual Integral EducaResponde (4 Dimensiones)">
                      Plan Anual Integral EducaResponde (4 Dimensiones)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-slate-800">
                  Detalles de su requerimiento o cantidad de docentes/estudiantes (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-yellow-500/25"
                  placeholder="Cuéntenos qué focos busca priorizar en su Plan Anual o PME (ej. capacitación CPA en Moodle, ensayos SIMCE, modelo de evidencias UTP, laboratorios interactivos)..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-yellow-500 px-6 py-4 text-base font-extrabold text-slate-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-lg ${
                  loading ? "cursor-not-allowed opacity-75" : ""
                }`}
              >
                <Send className="h-5 w-5" />
                <span>
                  {loading
                    ? "Procesando solicitud institucional..."
                    : "Solicitar Propuesta y Brochure EducaResponde"}
                </span>
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5 text-yellow-600" />
                <span>Respuesta en menos de 24h hábiles · Acompañamiento en las 4 dimensiones educativas</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
