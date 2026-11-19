import { Search, FileSignature, Wrench, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Institucional",
    description:
      "Evaluamos sin costo las necesidades de su establecimiento, brechas del PME y oportunidades de financiamiento (SEP, SENCE, FAEP/FIE).",
  },
  {
    number: "02",
    icon: FileSignature,
    title: "Propuesta Técnica y OC",
    description:
      "Diseñamos un plan de trabajo a medida con objetivos verificables, cronograma anual y gestión ágil mediante Orden de Compra o Mercado Público.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Ejecución & Aula Moodle",
    description:
      "Implementamos la capacitación o proyecto técnico habilitando accesos individuales en nuestra Aula Virtual Moodle y cumpliendo la normativa MINEDUC.",
  },
  {
    number: "04",
    icon: Users,
    title: "Certificación y Reportes",
    description:
      "Entregamos informes ejecutivos de asistencia, calificaciones, diplomas certificados SENCE/CPEIP y respaldo completo para rendición de cuentas.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
            Nuestra Metodología de Trabajo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Un proceso estructurado orientado a resultados y cumplimiento
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trabajamos codo a codo con Sostenedores, Directores y Jefes UTP mediante un protocolo probado en más de 120 establecimientos a lo largo de Chile.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Línea conectora escritorio */}
          <div className="pointer-events-none absolute top-12 left-1/2 hidden h-[2px] w-3/4 -translate-x-1/2 bg-slate-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative z-10 flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-slate-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-9 w-9 text-yellow-400" />
                  <span className="absolute -right-2 -bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-xs font-extrabold text-slate-900 shadow-xs">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
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
