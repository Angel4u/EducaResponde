import { ArrowRight, BookOpenText, CheckCircle2, ShieldCheck, Building2, Award } from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface HeroProps {
  setView?: (view: ViewMode) => void;
}

export function Hero({ setView = () => {} }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      {/* Fondo arquitectónico institucional y gradiente radial sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-yellow-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_0.95fr] lg:items-center lg:py-28">
        <div>
          {/* Credencial superior institucional */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-700/90 bg-slate-800/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400 shadow-xs backdrop-blur-xs">
            <ShieldCheck className="h-4 w-4 text-yellow-400" />
            <span>Consultora &amp; OTEC B2B para Colegios en Chile</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
            Soluciones Integrales para la Gestión y Excelencia de su{" "}
            <span className="text-yellow-400">Establecimiento Educacional</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Acompañamos a <strong className="font-semibold text-white">Directores, Jefes UTP y Sostenedores</strong> con capacitación docente certificada (SENCE / Ley SEP), asesoría experta en licitaciones estatales y ejecución de proyectos de infraestructura escolar.
          </p>

          {/* Botones de Acción (CTAs) con jerarquía visual B2B */}
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setView("cursos");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-yellow-500 px-7 py-4 text-base font-bold text-slate-900 shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 hover:bg-yellow-400 md:text-lg"
            >
              <BookOpenText className="h-5 w-5" />
              Explorar Catálogo de Cursos
            </button>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-600 bg-slate-800/70 px-7 py-4 text-base font-bold text-white shadow-sm backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-yellow-400/70 hover:bg-slate-800 md:text-lg"
            >
              <span>Nuestros Servicios B2B</span>
              <ArrowRight className="h-5 w-5 text-yellow-400" />
            </a>
          </div>

          {/* Métricas de autoridad institucional */}
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8 text-white">
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Building2 className="h-4 w-4 text-yellow-400" />
                Colegios Asesorados
              </dt>
              <dd className="mt-2 text-3xl font-extrabold text-white md:text-4xl">+120</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Award className="h-4 w-4 text-yellow-400" />
                Docentes Capacitados
              </dt>
              <dd className="mt-2 text-3xl font-extrabold text-white md:text-4xl">+8.500</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <ShieldCheck className="h-4 w-4 text-yellow-400" />
                Trayectoria Nacional
              </dt>
              <dd className="mt-2 text-3xl font-extrabold text-white md:text-4xl">15 años</dd>
            </div>
          </dl>
        </div>

        {/* Tarjeta ejecutiva lateral */}
        <aside className="relative">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/75 p-7 shadow-2xl backdrop-blur-md md:p-9">
            <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-yellow-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400">
                Convocatoria 2026
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Financiamiento SEP · SENCE · FAEP
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-snug text-white md:text-3xl">
              Plan Anual de Fortalecimiento Institucional
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Diseñamos e implementamos el plan de capacitación y proyectos de su colegio alineado con su PME y normativa MINEDUC vigente.
            </p>

            <ul className="mt-6 space-y-3.5 text-sm text-slate-200 md:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <span>
                  <strong className="text-white">Diagnóstico UTP sin costo</strong> para detectar brechas pedagógicas y directivas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <span>
                  <strong className="text-white">Plataforma Moodle dedicada</strong> con seguimiento de asistencia y avance por docente.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <span>
                  <strong className="text-white">Formulación y postulación a fondos</strong> MINEDUC, GORE y Mercado Público.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-700/80 pt-6 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-100"
              >
                Solicitar Diagnóstico Institucional
              </a>
              <button
                type="button"
                onClick={() => {
                  setView("cursos");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-yellow-400 transition-colors hover:border-yellow-400 hover:bg-slate-800"
              >
                Ver Cursos
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
