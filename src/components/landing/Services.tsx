import { GraduationCap, FileCheck2, Building2, ArrowRight, CheckCircle2, BookOpenText } from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface ServicesProps {
  setView?: (view: ViewMode) => void;
}

const services = [
  {
    id: "capacitacion",
    icon: GraduationCap,
    tag: "OTEC & Aula Virtual Moodle",
    title: "Capacitación Docente y Gestión UTP",
    description:
      "Programas certificados SENCE y alineados a CPEIP para equipos directivos, jefes UTP, docentes y asistentes de la educación, con acceso 24/7 a nuestra Aula Virtual Moodle.",
    bullets: [
      "Financiamiento vía Franquicia SENCE, Fondos SEP (PME) y Orden de Compra",
      "Modalidad E-Learning (asincrónico/sincrónico) y presencial en su colegio",
      "Reportes ejecutivos de avance, asistencia y calificaciones para Dirección",
    ],
    ctaLabel: "Ver Catálogo de Cursos",
    isCatalogCta: true,
  },
  {
    id: "licitaciones",
    icon: FileCheck2,
    tag: "Fondos Públicos & ChileCompra",
    title: "Asesoría en Licitaciones y Fondos",
    description:
      "Maximice la adjudicación de recursos públicos y subvenciones en convocatorias MINEDUC, FAEP, FIE, JUNJI, Junaeb, GORE y Mercado Público.",
    bullets: [
      "Formulación técnica, jurídica y económica de proyectos educativos",
      "Auditoría de bases, cumplimiento normativo y gestión de garantías",
      "Acompañamiento integral en rendición de cuentas y ejecución",
    ],
    ctaLabel: "Solicitar Asesoría en Fondos",
    isCatalogCta: false,
  },
  {
    id: "infraestructura",
    icon: Building2,
    tag: "Arquitectura & Obras Escolares",
    title: "Proyectos de Infraestructura Escolar",
    description:
      "Diseño, regularización y ejecución de obras para colegios: ampliación de aulas, laboratorios, cubiertas de patios, climatización y accesibilidad universal.",
    bullets: [
      "Arquitectura educacional bajo normativa OGUC, SEC y MINEDUC",
      "Planificación de obras sin interrumpir la continuidad de clases",
      "Ejecución llave en mano con control estricto de plazos y presupuesto",
    ],
    ctaLabel: "Cotizar Proyecto de Infraestructura",
    isCatalogCta: false,
  },
];

export function Services({ setView }: ServicesProps) {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
            Soluciones B2B para Colegios
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Tres pilares estratégicos para fortalecer su establecimiento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Servicios diseñados específicamente para Sostenedores, Directores y Jefes UTP que buscan impacto pedagógico medible, cumplimiento normativo y gestión eficiente de recursos.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
              >
                {/* Barra superior de acento corporativo */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-slate-900 transition-colors duration-300 group-hover:bg-yellow-500" />

                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-slate-900 text-yellow-400 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold leading-snug text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {s.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  {s.isCatalogCta && setView ? (
                    <button
                      type="button"
                      onClick={() => {
                        setView("cursos");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-slate-900 shadow-xs transition-all hover:bg-yellow-400 hover:shadow-md"
                    >
                      <BookOpenText className="h-4 w-4" />
                      {s.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <span>{s.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
