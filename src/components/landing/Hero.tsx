import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  Scale,
  Cpu,
  ExternalLink,
} from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface HeroProps {
  setView?: (view: ViewMode) => void;
}

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";

export function Hero({ setView = () => {} }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      {/* Cuadrícula arquitectónica sutil y luces de acento */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-yellow-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-26">
        <div>
          {/* Etiqueta superior */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-700/90 bg-slate-800/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400 shadow-xs backdrop-blur-xs">
            <ShieldCheck className="h-4 w-4 text-yellow-400" />
            <span>Las 4 Dimensiones de la Gestión Institucional Escolar</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.13]">
            Diseño Estratégico de Planes Anuales y{" "}
            <span className="text-yellow-400">
              Mejora Continua de los Aprendizajes
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            <strong className="font-semibold text-white">EducaResponde</strong> articula el trabajo de{" "}
            <strong className="font-semibold text-white">Equipos Directivos, Jefes UTP, Profesores y Estudiantes</strong>{" "}
            mediante Comunidades Profesionales de Aprendizaje (Moodle), sistema anual de Evaluaciones Externas (DIA, SIMCE y Plan Lector), Modelos de Gestión Normativa e Innovación Pedagógica (STEM, ABP, Socioemocional y Laboratorios Interactivos).
          </p>

          {/* Botones de Acción (CTAs) */}
          <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setView("cursos");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-yellow-500 px-6 py-4 text-base font-bold text-slate-900 shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              <BookOpenText className="h-5 w-5 shrink-0" />
              <span>Ver Capacitaciones CPA</span>
            </button>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-slate-600 bg-slate-800/70 px-6 py-4 text-base font-bold text-white shadow-sm backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-yellow-400/70 hover:bg-slate-800"
            >
              <span>Ver los 4 Focos de Trabajo</span>
              <ArrowRight className="h-5 w-5 shrink-0 text-yellow-400" />
            </a>
          </div>

          {/* Resumen rápido de los 4 Focos debajo de los botones */}
          <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 text-white sm:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                <GraduationCap className="h-4 w-4 shrink-0" />
                Foco 01
              </dt>
              <dd className="mt-1 text-sm font-bold text-white leading-snug">
                Liderazgo, CPA y Gestión UTP
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                <BarChart3 className="h-4 w-4 shrink-0" />
                Foco 02
              </dt>
              <dd className="mt-1 text-sm font-bold text-white leading-snug">
                Ensayos SIMCE, DIA y Cobertura
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                <Scale className="h-4 w-4 shrink-0" />
                Foco 03
              </dt>
              <dd className="mt-1 text-sm font-bold text-white leading-snug">
                Normativa, RICE, Decreto 67 y PIE
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3.5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                <Cpu className="h-4 w-4 shrink-0" />
                Foco 04
              </dt>
              <dd className="mt-1 text-sm font-bold text-white leading-snug">
                STEM, ABP, Robótica y Lector
              </dd>
            </div>
          </dl>
        </div>

        {/* Tarjeta lateral: Acceso por Rol al Ecosistema EducaResponde */}
        <aside className="relative">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 p-7 shadow-2xl backdrop-blur-md md:p-8">
            <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-yellow-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400">
                Ecosistema Integral EducaResponde
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Acceso por Perfil
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-extrabold leading-snug text-white">
              Una plataforma conectada para cada rol de su comunidad educativa
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Acompañamos la trayectoria anual del colegio integrando capacitación, evaluación externa y gestión directiva:
            </p>

            <ul className="mt-5 space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div>
                  <strong className="block text-white">
                    1. Plataforma de Capacitación Docente (Aula Moodle)
                  </strong>
                  <span className="text-xs text-slate-300">
                    Comunidades Profesionales de Aprendizaje (CPA), certificaciones por horas, planificaciones, PPTs, guías y videos para el aula.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div>
                  <strong className="block text-white">
                    2. Modelo de Gestión Directiva / UTP y Buscador Normativo
                  </strong>
                  <span className="text-xs text-slate-300">
                    Buscador de dictámenes y ordinarios, Carta Gantt con doble calendario de pruebas, protocolos base y carpeta de evidencias PME / Deprov al día.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div>
                  <strong className="block text-white">
                    3. Plataforma Estudiante (SIMCE, DIA, Plan Lector y Classroom)
                  </strong>
                  <span className="text-xs text-slate-300">
                    Ensayos físicos y digitales, monitoreo de niveles Insuficiente, Elemental y Adecuado, IDPS, cobertura y clases semanales interactivas.
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-700/80 pt-5 sm:flex-row">
              <a
                href={MOODLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm transition-colors hover:bg-yellow-400"
              >
                <span>Ingresar al Aula Virtual Moodle</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
              >
                Ver Roles
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
