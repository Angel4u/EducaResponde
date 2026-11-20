import {
  GraduationCap,
  BarChart3,
  Scale,
  Cpu,
  ArrowRight,
  CheckCircle2,
  BookOpenText,
  HeartHandshake,
  BookMarked,
  Network,
  FlaskConical,
} from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface ServicesProps {
  setView?: (view: ViewMode) => void;
}

const cuatroFocos = [
  {
    numero: "Foco 01",
    icon: GraduationCap,
    tag: "Plataforma Tipo Canva & Aula Moodle",
    title: "Liderazgo Institucional y Capacitación Docente (CPA)",
    description:
      "Desarrollamos Comunidades Profesionales de Aprendizaje Docente con los últimos paradigmas educativos nacionales y globales para fortalecer el núcleo pedagógico y lograr aprendizajes profundos.",
    bullets: [
      "Módulos de liderazgo docente y capacitación certificada por cada área curricular",
      "Diseños pedagógicos institucionales con seguimiento y monitoreo oportuno",
      "Modelo de gestión para Directivos, Jefes UTP, Evaluadores y Jefes de Departamento",
      "Acceso a planificaciones, clases, PPTs, guías y modelos base listos para aplicar",
    ],
    ctaLabel: "Explorar Módulos de Capacitación CPA",
    isCatalogCta: true,
  },
  {
    numero: "Foco 02",
    icon: BarChart3,
    tag: "Ensayos SIMCE · DIA · Lector Óptico",
    title: "Evaluaciones Externas (DIA, SIMCE) y Cobertura Curricular",
    description:
      "Planificación anual e implementación de evaluaciones externas validadas con DIA y ensayos SIMCE por asignatura y nivel para impactar los Estándares Indicativos de Desempeño.",
    bullets: [
      "Aplicación física de ensayos SIMCE, paso por lector óptico y carga en plataforma (Syscol)",
      "Monitoreo del tránsito en niveles de logro: Insuficiente → Elemental → Adecuado",
      "Seguimiento de Indicadores de Desarrollo Personal y Social (IDPS) y cobertura curricular",
      "Acompañamiento de especialistas en aula y protocolo de Restitución del Saber",
    ],
    ctaLabel: "Ver Módulos de Evaluación y Syscol",
    isCatalogCta: true,
  },
  {
    numero: "Foco 03",
    icon: Scale,
    tag: "Decreto 67 · RICE · Inclusión",
    title: "Gestión Normativa, Protocolos, Reglamentos e Inclusión",
    description:
      "Ciclos de gestión directiva para el cumplimiento normativo y la articulación de protocolos que aseguren un clima de aula favorable y experiencias adecuadas a la diversidad.",
    bullets: [
      "Articulación entre Reglamento de Evaluación (Decreto 67) y Convivencia Educativa (RICE)",
      "Protocolos de resguardo, repitencia, seguimiento pedagógico y apoyo a las familias",
      "Adecuaciones curriculares para la diversidad e inclusión bajo nuevos decretos y leyes",
      "Buscador y compendio de dictámenes, ordinarios y política regulatoria vigente",
    ],
    ctaLabel: "Solicitar Asesoría Normativa y Protocolos",
    isCatalogCta: false,
  },
  {
    numero: "Foco 04",
    icon: Cpu,
    tag: "STEM · ABP · Robótica · Recreos",
    title: "Innovación Tecnológica, STEM, Robótica y Recreos Interactivos",
    description:
      "Estrategias innovadoras dentro y fuera del aula que conectan los aprendizajes de las y los estudiantes con las habilidades comunicativas y ciudadanas que exige el mundo actual.",
    bullets: [
      "Enseñanza con enfoque STEM y metodologías activas como Aprendizaje Basado en Proyectos (ABP)",
      "Diseño de salidas pedagógicas vivenciales para desarrollar competencias ciudadanas",
      "Programas de robótica educativa para pequeños y desarrollo del pensamiento lógico",
      "Recreos entretenidos con paneles interactivos que fortalecen la convivencia fuera del aula",
    ],
    ctaLabel: "Implementar Innovación en mi Colegio",
    isCatalogCta: false,
  },
];

const modulosComplementarios = [
  {
    icon: HeartHandshake,
    badge: "Convivencia & Juego",
    title: "Módulo de Aprendizaje Socioemocional",
    description:
      "Desarrollado específicamente para las y los estudiantes con material concreto diseñado para la interacción, permitiéndoles a través del juego aprender formas de convivir, estar y comunicar lo necesario.",
    items: [
      "Material concreto de interacción en aula",
      "Aprendizaje socioemocional mediante el juego",
      "Fortalecimiento de la comunicación y empatía",
    ],
  },
  {
    icon: BookMarked,
    badge: "Plan Lector Vivo",
    title: "Gestión Bibliotecaria y Fomento Lector",
    description:
      "Modelamiento integral de bibliotecas escolares y ludotecas que hacen vivo el proceso lector en toda la comunidad educativa.",
    items: [
      "Implementación de Ludotecas y Bibliorecreos",
      "Estaciones modulares de aprendizaje de lectura",
      "Encuestas de acercamiento y comprensión lectora",
    ],
  },
  {
    icon: Network,
    badge: "Alianzas & Recursos",
    title: "Vinculación con el Medio y Gestión de Proyectos",
    description:
      "Articulamos la conexión del colegio con la sociedad, la industria, la educación terciaria y espacios comunitarios, acompañando al equipo directivo en la obtención estructurada de recursos.",
    items: [
      "Creación de Consejos Asesores y mesas de trabajo público-privadas",
      "Postulación y elaboración estructurada de proyectos",
      "Experiencias vivenciales con el entorno para estudiantes",
    ],
  },
  {
    icon: FlaskConical,
    badge: "En tu Establecimiento",
    title: "Laboratorios Interactivos en tu Colegio",
    description:
      "Llevamos directamente hasta tu establecimiento laboratorios interactivos y vivenciales para promover nuevos aprendizajes y experiencias de trabajo colaborativo.",
    items: [
      "Laboratorios de Ciencias y Enfoque STEM",
      "Laboratorios de Teatro y Música escolar",
      "Laboratorios de Periodismo y Comunicación",
    ],
  },
];

export function Services({ setView }: ServicesProps) {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado Principal: Los 4 Focos de Trabajo */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
            Las 4 Dimensiones Educativas de EducaResponde
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Cuatro focos principales para asegurar impactos reales en los aprendizajes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Realizamos un diseño estratégico de los planes anuales de su establecimiento, estableciendo focos de atención y trayectorias de mejora continua de manera transversal, integral e inclusiva.
          </p>
        </div>

        {/* Grilla 2x2 de los 4 Focos Principales */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cuatroFocos.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-slate-900 transition-colors duration-300 group-hover:bg-yellow-500" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-slate-900 text-yellow-400 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-lg bg-yellow-500/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      {s.numero}
                    </span>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold text-slate-700">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold leading-snug text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {s.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  {s.isCatalogCta && setView ? (
                    <button
                      type="button"
                      onClick={() => {
                        setView("cursos");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-3.5 text-sm font-extrabold text-slate-900 shadow-xs transition-all hover:bg-yellow-400 hover:shadow-md"
                    >
                      <BookOpenText className="h-4 w-4" />
                      {s.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <span>{s.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* SUB-SECCIÓN: MÓDULOS Y SERVICIOS COMPLEMENTARIOS DE LA TRANSCRIPCIÓN */}
        <div id="complementarios" className="mt-24 scroll-mt-24 border-t border-slate-200 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-yellow-400">
              Módulos y Experiencias Complementarias
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Programas vivenciales que transforman la comunidad educativa
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Complementamos los 4 focos institucionales llevando hasta su colegio experiencias concretas de aprendizaje socioemocional, fomento lector, vinculación con el medio y laboratorios interactivos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modulosComplementarios.map((mod) => {
              const ModIcon = mod.icon;
              return (
                <article
                  key={mod.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-900 text-yellow-400 shadow-xs">
                        <ModIcon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-[11px] font-extrabold text-slate-900">
                        {mod.badge}
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-extrabold leading-snug text-slate-900">
                      {mod.title}
                    </h4>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {mod.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-700">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
