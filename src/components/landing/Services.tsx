import { GraduationCap, FileCheck2, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Capacitación Docente y UTP",
    description: "Cursos certificados SENCE y programas de formación continua para equipos directivos, jefes UTP y docentes.",
    bullets: ["Franquicia tributaria SENCE", "Modalidad e-learning y presencial", "Diplomados con certificación"],
  },
  {
    icon: FileCheck2,
    title: "Asesoría en Licitaciones y Fondos Estatales",
    description: "Aumente sus probabilidades de adjudicación en licitaciones MINEDUC, FAEP, JUNJI, Junaeb y Mercado Público.",
    bullets: ["Postulación técnica y económica", "Revisión de bases y garantías", "Gestión ChileCompra"],
  },
  {
    icon: Building2,
    title: "Proyectos de Construcción e Infraestructura",
    description: "Diseño y ejecución de obras escolares: salas, laboratorios, patios cubiertos y accesibilidad universal.",
    bullets: ["Arquitectura educacional", "Cumplimiento normativa MINEDUC", "Gestión integral llave en mano"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Servicios a Colegios</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Tres pilares para fortalecer su establecimiento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Servicios diseñados para instituciones educacionales que buscan resultados medibles, cumplimiento normativo y crecimiento sostenido.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary">
                <span className="grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 space-y-2 text-base text-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
                  Solicitar información <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}