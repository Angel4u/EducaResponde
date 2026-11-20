import { GraduationCap, ExternalLink, LogIn } from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface FooterProps {
  setView?: (view: ViewMode) => void;
}

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";
const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "contacto@educaresponde.cl";

export function Footer({ setView }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-500 text-slate-900 font-bold shadow-sm">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  Educa<span className="font-normal text-slate-300">Responde</span>
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                  4 Dimensiones de Gestión Escolar
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Diseño estratégico de planes anuales, Comunidades Profesionales de Aprendizaje (Moodle), sistema de evaluaciones externas (DIA/SIMCE), gestión normativa e innovación pedagógica.
            </p>
          </div>

          {/* Columna 2: Los 4 Focos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              4 Focos Principales
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                {setView ? (
                  <button
                    type="button"
                    onClick={() => {
                      setView("cursos");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-yellow-400"
                  >
                    Foco 1: Liderazgo, CPA y Modelo UTP
                  </button>
                ) : (
                  <span>Foco 1: Liderazgo, CPA y Modelo UTP</span>
                )}
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-yellow-400">
                  Foco 2: Evaluaciones Externas (DIA / SIMCE)
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-yellow-400">
                  Foco 3: Gestión Normativa (Decreto 67 / RICE)
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-yellow-400">
                  Foco 4: Innovación STEM, ABP y Robótica
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Módulos y Plataforma por Rol */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              Módulos &amp; Plataforma
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#complementarios" className="transition-colors hover:text-yellow-400">
                  Aprendizaje Socioemocional y Juego
                </a>
              </li>
              <li>
                <a href="#complementarios" className="transition-colors hover:text-yellow-400">
                  Ludotecas, Bibliorecreos y Plan Lector
                </a>
              </li>
              <li>
                <a href="#complementarios" className="transition-colors hover:text-yellow-400">
                  Laboratorios (Teatro, Música, Periodismo, STEM)
                </a>
              </li>
            </ul>
            <a
              href={MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
            >
              <LogIn className="h-4 w-4 text-yellow-400" />
              <span>Ingresar al Aula Virtual Moodle</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              Contacto Institucional
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>+56 2 2345 6789</li>
              <li>{CONTACT_EMAIL}</li>
              <li>Santiago, Chile</li>
              <li className="pt-1 text-xs text-slate-400">
                Vinculación con el medio, Consejos Asesores y acompañamiento en todo Chile.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} EducaResponde Chile. Todos los derechos reservados.</p>
          <p>Plataforma CPA Moodle · Sistema SIMCE/DIA · Modelo de Gestión Directiva y UTP</p>
        </div>
      </div>
    </footer>
  );
}
