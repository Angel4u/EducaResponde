import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-primary-foreground text-primary">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="text-xl font-bold">EducaResponde</span>
            </div>
            <p className="mt-4 max-w-sm text-base text-primary-foreground/80">
              Soluciones integrales B2B para establecimientos educacionales en Chile.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold">Servicios</h4>
            <ul className="mt-3 space-y-2 text-base text-primary-foreground/80">
              <li>Capacitación Docente</li>
              <li>Licitaciones Estatales</li>
              <li>Infraestructura Escolar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold">Contacto</h4>
            <ul className="mt-3 space-y-2 text-base text-primary-foreground/80">
              <li>+56 2 2345 6789</li>
              <li>contacto@educaresponde.cl</li>
              <li>Av. Providencia 1234, Santiago</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} EducaResponde. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}