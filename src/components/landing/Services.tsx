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
    title: "Asesoría en Licitaciones y Fondos",
    description: "Aumente sus probabilidades de adjudicación en licitaciones MINEDUC, FAEP, JUNJI, Junaeb y Mercado Público.",
    bullets: ["Postulación técnica y económica", "Revisión de bases y garantías", "Gestión ChileCompra"],
  },
  {
    icon: Building2,
    title: "Proyectos de Construcción",
    description: "Diseño y ejecución de obras escolares: salas, laboratorios, patios cubiertos y accesibilidad universal.",
    bullets: ["Arquitectura educacional", "Cumplimiento normativa MINEDUC", "Gestión integral llave en mano"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="max-w-3xl">
          {/* Cambiado a text-black */}
          <span className="text-xs font-bold uppercase tracking-widest text-black">Servicios a Colegios</span>
          {/* Cambiado a text-black */}
          <h2 className="mt-4 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
            Tres pilares para fortalecer su establecimiento
          </h2>
          {/* Cambiado a text-black */}
          <p className="mt-6 text-lg text-black">
            Servicios diseñados para instituciones educacionales que buscan resultados medibles, cumplimiento normativo y crecimiento sostenido.
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              /* Borde negro puro */
              <article key={s.title} className="flex flex-col rounded-2xl border border-black bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Cuadro del icono en negro */}
                <span className="grid h-16 w-16 place-items-center rounded-xl bg-black text-white">
                  <Icon className="h-8 w-8" />
                </span>
                
                {/* Título en negro puro */}
                <h3 className="mt-8 text-2xl font-bold leading-tight text-black">{s.title}</h3>
                
                {/* Descripción en negro puro */}
                <p className="mt-4 text-base leading-relaxed text-black">{s.description}</p>
                
                {/* Viñetas en negro puro */}
                <ul className="mt-6 flex-1 space-y-3 text-sm text-black">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      {b}
                    </li>
                  ))}
                </ul>
                
                {/* Enlace en negro puro */}
                <a href="#contacto" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-black hover:underline">
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