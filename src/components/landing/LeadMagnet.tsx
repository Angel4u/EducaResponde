import { CalendarCheck, Download } from "lucide-react";

export function LeadMagnet() {
  return (
    <section id="descargar" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Programa 2026</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">
              Agende una asesoría gratuita para su establecimiento
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Reciba un diagnóstico institucional sin costo y descargue el programa completo de servicios 2026 para colegios.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground hover:brightness-95 md:text-lg">
              <CalendarCheck className="h-5 w-5" /> Agendar asesoría gratuita
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/80 px-6 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary md:text-lg">
              <Download className="h-5 w-5" /> Descargar Programa 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}