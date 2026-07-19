import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios a Colegios", href: "#servicios" },
  { label: "Proyectos Destacados", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2 text-primary">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className="text-xl font-bold tracking-tight">
            Educa<span className="text-accent-foreground/90">Responde</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#aula"
            className="rounded-md border-2 border-primary px-4 py-2 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Aula Virtual
          </a>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-border text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#aula"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border-2 border-primary px-3 py-3 text-center text-base font-semibold text-primary"
            >
              Aula Virtual
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}