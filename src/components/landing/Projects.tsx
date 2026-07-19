const projects = [
  { title: "Colegio San Andrés — Región Metropolitana", tag: "Infraestructura", text: "Ampliación de 6 salas de clases y patio cubierto. Adjudicación FAEP 2024." },
  { title: "Fundación Educacional Aurora", tag: "Licitación adjudicada", text: "Asesoría técnica que permitió adjudicar $340M en fondos MINEDUC." },
  { title: "Red de Colegios Norte", tag: "Capacitación UTP", text: "Programa de 12 meses con 240 docentes certificados SENCE." },
];

export function Projects() {
  return (
    <section id="proyectos" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proyectos Destacados</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Resultados verificables en establecimientos educacionales
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-background p-6">
              <span className="inline-block rounded-sm bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}