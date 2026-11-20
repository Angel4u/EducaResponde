import { useState, type MouseEvent } from "react";
import {
  Menu,
  X,
  GraduationCap,
  BookOpenText,
  LogIn,
  ExternalLink,
  Users,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const links = [
  { label: "4 Focos", href: "#servicios" },
  { label: "Módulos", href: "#complementarios" },
  { label: "Roles", href: "#proyectos" },
  { label: "Gestión UTP", href: "#metodologia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export type ViewMode = "landing" | "cursos";

export interface NavbarProps {
  setView?: (view: ViewMode) => void;
  currentView?: ViewMode;
}

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";

export function Navbar({ setView = () => {}, currentView = "landing" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    setRoleMenuOpen(false);
    if (currentView !== "landing") {
      e.preventDefault();
      setView("landing");
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 60);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Logo institucional en una sola línea limpia */}
        <a
          href="#inicio"
          onClick={(e) => handleAnchorClick(e, "#inicio")}
          className="group flex shrink-0 items-center gap-2.5 text-slate-900 transition-opacity hover:opacity-90"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400 shadow-sm transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="whitespace-nowrap text-xl font-black tracking-tight text-slate-900">
            Educa<span className="font-normal text-slate-600">Responde</span>
          </span>
        </a>

        {/* Navegación Escritorio (Todo en 1 línea horizontal con whitespace-nowrap) */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          <a
            href="#inicio"
            onClick={(e) => handleAnchorClick(e, "#inicio")}
            className={`whitespace-nowrap text-sm font-semibold transition-colors ${
              currentView === "landing"
                ? "text-slate-900 hover:text-yellow-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Inicio
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
              className="whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Botones de Acción Derecha (1 sola línea limpia) */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => {
              setView("cursos");
              setRoleMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-yellow-500 px-4 py-2.5 text-sm font-bold text-slate-900 shadow-xs transition-all hover:bg-yellow-400 hover:shadow-md ${
              currentView === "cursos"
                ? "ring-2 ring-slate-900 ring-offset-2"
                : ""
            }`}
          >
            <BookOpenText className="h-4 w-4 shrink-0 text-slate-900" />
            <span>Cursos CPA</span>
          </button>

          {/* Selector de Acceso a Plataforma por Rol */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setRoleMenuOpen((v) => !v)}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-slate-800 hover:shadow-md"
            >
              <LogIn className="h-4 w-4 shrink-0 text-yellow-400" />
              <span>Aula Virtual</span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            </button>

            {roleMenuOpen && (
              <div className="absolute right-0 mt-2.5 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <div className="border-b border-slate-100 px-3 py-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Selecciona tu Perfil de Ingreso
                  </p>
                  <p className="text-xs font-semibold text-slate-700">
                    ¿Con qué rol ingresas a EducaResponde?
                  </p>
                </div>

                <div className="mt-2 space-y-1.5">
                  <a
                    href={MOODLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-yellow-500 text-slate-900 font-bold">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Ingresar como Profesor(a)
                        </span>
                        <ExternalLink className="h-3 w-3 text-slate-400" />
                      </div>
                      <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                        Aula Virtual Moodle: Capacitaciones CPA, planificaciones, clases, PPTs, guías y evaluaciones.
                      </p>
                    </div>
                  </a>

                  <a
                    href={MOODLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-900 text-yellow-400 font-bold">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Ingresar como Directivo / UTP
                        </span>
                        <ExternalLink className="h-3 w-3 text-slate-400" />
                      </div>
                      <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                        Modelo de Gestión UTP, Buscador de Dictámenes y Ordinarios, Carta Gantt, Actas y Carpeta PME.
                      </p>
                    </div>
                  </a>

                  <a
                    href={MOODLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setRoleMenuOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 font-bold">
                      <Users className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          Ingresar como Estudiante
                        </span>
                        <ExternalLink className="h-3 w-3 text-slate-400" />
                      </div>
                      <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                        Aula tipo Classroom: Clases semanales, ensayos SIMCE/DIA, Plan Lector y mi desempeño.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Botón Hamburguesa Mobile */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs transition-colors hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      {open && (
        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-5" aria-label="Menú móvil">
            <a
              href="#inicio"
              onClick={(e) => handleAnchorClick(e, "#inicio")}
              className="rounded-xl px-4 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100"
            >
              Inicio
            </a>

            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={() => {
                  setView("cursos");
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3.5 text-base font-bold text-slate-900 shadow-sm transition-colors hover:bg-yellow-400 ${
                  currentView === "cursos" ? "ring-2 ring-slate-900" : ""
                }`}
              >
                <BookOpenText className="h-5 w-5" />
                Cursos y Capacitaciones CPA
              </button>

              <a
                href={MOODLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-center text-base font-semibold text-white shadow-xs transition-colors hover:bg-slate-800"
              >
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span>Ingresar al Aula Virtual Moodle</span>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
