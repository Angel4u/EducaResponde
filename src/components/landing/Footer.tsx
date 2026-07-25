import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-slate-900">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="text-xl font-bold">EducaResponde</span>
            </div>
            <p className="mt-4 max-w-sm text-base text-slate-300">
              Soluciones integrales B2B para establecimientos educacionales en Chile.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Servicios</h4>
            <ul className="mt-3 space-y-2 text-base text-slate-300">
              <li>Capacitación Docente</li>
              <li>Licitaciones Estatales</li>
              <li>Infraestructura Escolar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Contacto</h4>
            <ul className="mt-3 space-y-2 text-base text-slate-300">
              <li>+56 2 2345 6789</li>
              <li>contacto@educaresponde.cl</li>
              <li>Av. Providencia 1234, Santiago</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} EducaResponde. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}