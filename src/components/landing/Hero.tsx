import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--color-primary-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-foreground)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-block rounded-sm border border-primary-foreground/30 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Servicios B2B Educacionales
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Soluciones Integrales para su Establecimiento Educacional
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            Acompañamos a directores, jefes UTP y sostenedores con capacitación docente certificada, asesoría experta en licitaciones estatales y ejecución de proyectos de infraestructura escolar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground transition-colors hover:brightness-95 md:text-lg">
              Nuestros Servicios <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#descargar" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/80 bg-transparent px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary md:text-lg">
              <Download className="h-5 w-5" /> Descargar Catálogo PDF
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-6 text-primary-foreground">
            <div>
              <dt className="text-sm text-primary-foreground/70">Colegios</dt>
              <dd className="text-2xl font-bold md:text-3xl">+120</dd>
            </div>
            <div>
              <dt className="text-sm text-primary-foreground/70">Docentes</dt>
              <dd className="text-2xl font-bold md:text-3xl">+8.500</dd>
            </div>
            <div>
              <dt className="text-sm text-primary-foreground/70">Experiencia</dt>
              <dd className="text-2xl font-bold md:text-3xl">15 años</dd>
            </div>
          </dl>
        </div>
        <aside className="hidden lg:block">
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Programa 2026</p>
            <h3 className="mt-3 text-2xl font-bold">Plan Anual de Fortalecimiento Institucional</h3>
            <ul className="mt-5 space-y-3 text-base text-primary-foreground/85">
              <li className="flex gap-2"><span className="text-accent">✓</span> Diagnóstico UTP sin costo</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Postulación a fondos MINEDUC</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Cronograma 12 meses</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}