import { useState } from "react";
import { Menu, X, GraduationCap, BookOpenText } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

// Definir tipos para las propiedades (Props)
interface NavbarProps {
  setView: (view: 'landing' | 'cursos') => void;
  currentView: 'landing' | 'cursos';
}

export function Navbar({ setView, currentView }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Función para manejar clics en enlaces internos (#id)
  const handleAnchorClick = () => {
    setOpen(false);
    // Si estamos en la vista de cursos, cambiar a landing primero
    if (currentView !== 'landing') {
      setView('landing');
      // Nota: El navegador puede tardar un momento en renderizar y hacer scroll.
      // Para SPAs simples sin router, esto suele funcionar automáticamente
      // si el href="#id" existe en la landing re-renderizada.
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        
        {/* Logo - Al hacer clic siempre vuelve a la landing */}
        <a 
          href="#inicio" 
          onClick={() => setView('landing')}
          className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-black text-white shadow-md">
            <GraduationCap className="h-7 w-7" />
          </span>
          <span className="text-2xl font-black tracking-tighter">
            Educa<span className="font-light">Responde</span>
          </span>
        </a>

        {/* Menú para Escritorio (Computador) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Enlace Inicio explícito que maneja el cambio de vista */}
          <a
            href="#inicio"
            onClick={handleAnchorClick}
            className="text-base font-semibold text-black hover:text-black/70 transition-colors"
          >
            Inicio
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleAnchorClick}
              className="text-base font-semibold text-black/90 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}

          {/* ----- NUEVO BOTÓN DESTACADO: CURSOS ----- */}
          <button
            onClick={() => setView('cursos')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-base font-bold transition-all shadow-sm ${
              currentView === 'cursos'
                ? 'bg-slate-200 text-black' // Estado activo
                : 'bg-black text-white hover:bg-black/80'
            }`}
          >
            <BookOpenText className="h-5 w-5" />
            Cursos
          </button>

          {/* Aula Virtual - Redirige a Moodle */}
          <a
            href="http://moodle.test"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-slate-200 px-5 py-2.5 text-base font-semibold text-black transition-colors hover:bg-slate-100"
          >
            Aula Virtual
          </a>
        </nav>

        {/* Botón de Hamburguesa para Celulares */}
        <button
          className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-black lg:hidden shadow-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menú Desplegable para Celulares */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6">
            
            {/* Enlace Inicio Mobile */}
            <a
              href="#inicio"
              onClick={handleAnchorClick}
              className="rounded-xl px-4 py-3.5 text-base font-semibold text-black hover:bg-slate-100"
            >
              Inicio
            </a>

            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleAnchorClick}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-black hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}

            {/* BOTÓN CURSOS MOBILE */}
            <button
              onClick={() => { setView('cursos'); setOpen(false); }}
              className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-bold transition-colors ${
                currentView === 'cursos'
                  ? 'bg-slate-200 text-black'
                  : 'bg-black text-white hover:bg-black/80'
              }`}
            >
              <BookOpenText className="h-5 w-5" />
              Cursos OTEC
            </button>

            {/* Botón Aula Virtual (Celular) */}
            <a
              href="http://moodle.test"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl border-2 border-slate-200 px-4 py-3.5 text-center text-base font-semibold text-black hover:bg-slate-100"
            >
              Aula Virtual
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}