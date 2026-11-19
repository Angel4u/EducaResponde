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
                  Consultora &amp; OTEC B2B
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Soluciones integrales para Directores, Jefes UTP y Sostenedores en Chile: capacitación docente SENCE/CPEIP, fondos públicos e infraestructura escolar.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              Líneas de Servicio
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
                    Catálogo de Cursos OTEC (SENCE / SEP)
                  </button>
                ) : (
                  <span>Catálogo de Cursos OTEC (SENCE / SEP)</span>
                )}
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-yellow-400">
                  Asesoría en Licitaciones y Fondos MINEDUC
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-yellow-400">
                  Proyectos de Infraestructura Escolar
                </a>
              </li>
              <li>
                <a href="#proyectos" className="transition-colors hover:text-yellow-400">
                  Casos de Éxito en Colegios
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Accesos Directos & Moodle */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">
              Plataforma E-Learning
            </h4>
            <p className="mt-4 text-sm text-slate-400">
              Acceso exclusivo para docentes y equipos directivos con programas activos:
            </p>
            <a
              href={MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
            >
              <LogIn className="h-4 w-4 text-yellow-400" />
              <span>Ingresar a Aula Virtual Moodle</span>
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
              <li>Av. Providencia 1234, Of. 501, Santiago</li>
              <li className="pt-1 text-xs text-slate-400">
                Cobertura presencial y online en las 16 regiones de Chile.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} EducaResponde Chile. Todos los derechos reservados.</p>
          <p>OTEC Certificada · Proveedor Mercado Público · Aula Virtual Moodle</p>
        </div>
      </div>
    </footer>
  );
}
