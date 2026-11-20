import { CalendarClock, ScanLine, RefreshCcw, FolderCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarClock,
    badge: "Carta Gantt & Doble Calendario",
    title: "Planificación Anual e Instructivo Previo (2 Semanas)",
    description:
      "En febrero/marzo se entrega al profesorado el calendario anual con las semanas de evaluación e instructivo previo: el docente entrega su prueba 2 semanas antes y UTP ejecuta su calendario interno de revisión técnica, impresión y agrupación.",
  },
  {
    number: "02",
    icon: ScanLine,
    badge: "Ensayos Físicos & Lector Óptico",
    title: "Protocolo de Aplicación en Sala y Carga en Sistema",
    description:
      "Aplicamos un protocolo estricto de chequeo y aplicación física de ensayos SIMCE/DIA (retiro de celulares y control de aula). Luego las pruebas pasan por el lector óptico y se suben a la plataforma para medir niveles Insuficiente, Elemental, Adecuado e IDPS.",
  },
  {
    number: "03",
    icon: RefreshCcw,
    badge: "Diálogo UTP & Acta de Decisiones",
    title: "Retroalimentación y Restitución del Saber",
    description:
      "Con los resultados en mano, UTP, Evaluador, Jefes de Departamento y Docentes realizan la reunión de análisis, firman el Acta de Toma de Decisiones y pausan el avance mecánico de cobertura curricular para Restituir el Saber de los aprendizajes descendidos.",
  },
  {
    number: "04",
    icon: FolderCheck,
    badge: "PME · Deprov · Superintendencia",
    title: "Carpeta Digital de Evidencias en Tiempo Real",
    description:
      "Instalamos el hábito de registrar al instante: cada acta de reunión, protocolo o visita a la Deprov se escanea y sube el mismo día a la carpeta digital. A fin de año el equipo directivo no corre buscando evidencias: sólo compacta y entrega.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
            Modelo de Gestión Directiva, UTP y Evaluaciones
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Del doble calendario de pruebas a la Restitución del Saber y evidencias PME al día
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Enseñamos e implementamos en su equipo directivo, UTP, evaluadores y jefes de departamento un ciclo de gestión ordenado que garantiza impacto en los aprendizajes y cumplimiento normativo sin estrés a fin de año.
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
                className="group relative z-10 flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-slate-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-9 w-9 text-yellow-400" />
                  <span className="absolute -right-2 -bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-xs font-extrabold text-slate-900 shadow-xs">
                    {step.number}
                  </span>
                </div>

                <span className="mt-5 inline-block rounded-full bg-yellow-500/15 px-3 py-0.5 text-[11px] font-extrabold text-slate-900">
                  {step.badge}
                </span>

                <h3 className="mt-3 text-lg font-extrabold leading-snug text-slate-900">
                  {step.title}
                </h3>
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
