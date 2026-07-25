import { Search, FileSignature, Wrench, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Gratuito",
    description: "Evaluamos las necesidades específicas de su establecimiento y analizamos las oportunidades de mejora o financiamiento disponibles.",
  },
  {
    number: "02",
    icon: FileSignature,
    title: "Propuesta a Medida",
    description: "Diseñamos un plan de acción detallado, ya sea para capacitación docente, postulación a fondos o proyectos de infraestructura.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Ejecución Ágil",
    description: "Implementamos el proyecto con un equipo de expertos, asegurando el cumplimiento de la normativa del MINEDUC y los plazos acordados.",
  },
  {
    number: "04",
    icon: Users,
    title: "Acompañamiento",
    description: "No lo dejamos solo. Realizamos seguimiento post-servicio para garantizar resultados sostenibles y el éxito de la comunidad educativa.",
  }
];

export function Methodology() {
  return (
    <section id="metodologia" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Nuestra Metodología
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Un proceso claro orientado a resultados
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Trabajamos mano a mano con su equipo directivo a través de un sistema probado en más de 120 colegios a lo largo de Chile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Línea conectora (visible solo en escritorio) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-slate-200 z-0"></div>
          
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="relative z-10 flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white shadow-xl">
                  <Icon className="h-10 w-10 text-yellow-400" />
                  <span className="absolute -bottom-3 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900 shadow-md">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="mt-8 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}