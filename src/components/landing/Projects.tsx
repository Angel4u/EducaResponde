import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Users,
  CheckCircle2,
  ExternalLink,
  BookOpenText,
  Sparkles,
} from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface ProjectsProps {
  setView?: (view: ViewMode) => void;
}

interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

interface RolPlataforma {
  id: number;
  rolTag: string;
  subtitulo: string;
  preguntaIngreso: string;
  titulo: string;
  descripcion: string;
  funcionalidades: string[];
  metricas: MetricItem[];
  ejemploPracticoTitulo: string;
  ejemploPracticoTexto: string;
}

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";

const rolesPlataforma: RolPlataforma[] = [
  {
    id: 1,
    rolTag: "PERFIL 01 · ROL PROFESOR(A)",
    subtitulo: "Aula Virtual Moodle + Material Digital de Clases",
    preguntaIngreso: "¿Eres Profesor(a)?",
    titulo: "Capacitaciones CPA, Certificaciones por Horas y Clases Listas para el Aula",
    descripcion:
      "Al ingresar con su perfil docente, el profesor accede en Moodle a sus cursos de capacitación y Comunidades Profesionales de Aprendizaje (CPA) con todos sus módulos, clases, evaluaciones y certificados con horas cronológicas. Además, dispone de un banco de material digital adquirido por la escuela para construir sus clases.",
    funcionalidades: [
      "Acceso a módulos de perfeccionamiento docente con cápsulas en video, guías y evaluaciones",
      "Certificaciones oficiales con cantidad de horas cronológicas para desarrollo profesional",
      "Repositorio de planificaciones, presentaciones PPT/PDF, videos, guías y pruebas listas para aplicar",
      "Espacio para estructurar y asignar módulos semanales de clase a sus estudiantes",
    ],
    metricas: [
      {
        label: "Centralidad Actual",
        value: "Aula Moodle CPA",
        detail: "Módulos por área curricular y núcleo pedagógico",
      },
      {
        label: "Recursos de Aula",
        value: "Kit Completo",
        detail: "Planificación + PPT + Guía + Video + Evaluación",
      },
      {
        label: "Perfeccionamiento",
        value: "Horas Certificadas",
        detail: "Respaldo para carrera docente y PME/SEP",
      },
    ],
    ejemploPracticoTitulo: "Ejemplo real en plataforma (Cápsula + Kit de Aula):",
    ejemploPracticoTexto:
      "El profesor recibe capacitación sobre evaluaciones curriculares y, al mismo tiempo, dispone del paquete completo de la clase semanal (ej. 'Cambio Climático': planificación, PPT, video, guía y evaluación) listo para trabajar con su curso.",
  },
  {
    id: 2,
    rolTag: "PERFIL 02 · ROL DIRECTIVA / JEFE UTP",
    subtitulo: "Buscador de Dictámenes + Modelo de Gestión Directiva",
    preguntaIngreso: "¿Eres de la Directiva o Jefe UTP?",
    titulo: "Buscador de Política Regulatoria, Modelos Base y Evidencias PME al Día",
    descripcion:
      "Una plataforma diseñada exclusivamente para capacitar y acompañar a Directores, Jefes UTP, Curriculistas, Evaluadores y Jefes de Departamento. Integra un buscador informativo de dictámenes, ordinarios y decretos junto con un Modelo de Gestión lleno de insumos y modelos base listos para aplicar.",
    funcionalidades: [
      "Buscador de dictámenes, ordinarios y decretos: ¿Cuál es el Decreto 67? ¿Cómo adecuar una prueba?",
      "Ruta 'Voy a ser UTP por primera vez: ¿Qué insumos debo tener para llenar la plataforma PME?'",
      "Modelos base descargables: Protocolo de Repitencia, Carta Gantt de Evaluaciones y Actas UTP",
      "Sistema de carpeta digital para subir actas Deprov y evidencias PME el mismo día en que ocurren",
    ],
    metricas: [
      {
        label: "Política Regulatoria",
        value: "Dictámenes & Leyes",
        detail: "Decreto 67, Decreto 83, RICE y Ordinarios",
      },
      {
        label: "Modelos Base UTP",
        value: "100% Editables",
        detail: "Carta Gantt doble calendario, protocolos y actas",
      },
      {
        label: "Gestión PME / Deprov",
        value: "Evidencia al Día",
        detail: "Escaneo y carga inmediata para solo compactar y entregar",
      },
    ],
    ejemploPracticoTitulo: "Capacitación Directiva distinta a la de Aula:",
    ejemploPracticoTexto:
      "“Si debes elaborar un Protocolo de Repitencia o el Calendario Anual de Evaluaciones, aquí encuentras la clase explicativa de nuestra especialista más el modelo base editable de Carta Gantt y Protocolo indicando exactamente dónde y cómo aplicarlo.”",
  },
  {
    id: 3,
    rolTag: "PERFIL 03 · ROL ESTUDIANTE",
    subtitulo: "Evaluaciones Externas (SIMCE / DIA) + Aula Tipo Classroom",
    preguntaIngreso: "¿Eres Estudiante?",
    titulo: "Seguimiento de Desempeño SIMCE/DIA, Plan Lector y Clases Semanales",
    descripcion:
      "Las y los estudiantes acceden a una interfaz clara tipo Classroom donde visualizan sus módulos de clase semanales asignados por sus profesores, rinden evaluaciones diagnósticas y formativas, participan en el Plan Lector y revisan la evolución de su desempeño.",
    funcionalidades: [
      "Acceso tipo Classroom a las clases de la semana: video del profesor, PPT, guía y evaluación",
      "Integración con el sistema anual de evaluaciones externas validadas con DIA y ensayos SIMCE",
      "Monitoreo de progreso desde niveles Insuficiente y Elemental hacia nivel Adecuado",
      "Actividades de comprensión lectora, encuestas de fomento lector y aprendizaje socioemocional",
    ],
    metricas: [
      {
        label: "Evaluación Externa",
        value: "SIMCE & DIA",
        detail: "Por asignatura y nivel durante todo el año",
      },
      {
        label: "Niveles de Logro",
        value: "Estándares + IDPS",
        detail: "Tránsito Insuficiente → Elemental → Adecuado",
      },
      {
        label: "Experiencia Digital",
        value: "Aula Classroom",
        detail: "Clases, guías, PPTs y pruebas asignadas por su profesor",
      },
    ],
    ejemploPracticoTitulo: "Conexión directa Profesor - Estudiante:",
    ejemploPracticoTexto:
      "Cuando el profesor habilita la unidad semanal (por ejemplo, 'Cambio Climático') o asigna un ensayo/prueba, el estudiante entra a su perfil y encuentra el video de su profesor, la guía, la presentación y la evaluación lista para responder.",
  },
];

export function Projects({ setView }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rolActual = rolesPlataforma[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? rolesPlataforma.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === rolesPlataforma.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="proyectos" className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado: Arquitectura de la Plataforma por Roles */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Brochure Digital · Ecosistema por Roles
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              ¿Cómo funciona EducaResponde para cada integrante del colegio?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nuestra plataforma integra el acceso según el perfil del usuario: <strong className="font-semibold text-slate-900">Profesor(a), Equipo Directivo / UTP o Estudiante</strong>, conectando las capacitaciones Moodle con el trabajo real de aula y la gestión institucional.
            </p>
          </div>

          {/* Botones selectores de Rol */}
          <div className="flex flex-wrap gap-2">
            {rolesPlataforma.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`cursor-pointer rounded-xl px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all ${
                  currentIndex === idx
                    ? "bg-slate-900 text-yellow-400 shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {item.preguntaIngreso}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta Principal del Rol Seleccionado */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
          <div className="grid gap-8 p-7 md:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
            {/* Columna Izquierda: Detalle del Rol */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400">
                    {rolActual.rolTag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                    <Sparkles className="h-3.5 w-3.5 text-yellow-600" />
                    {rolActual.subtitulo}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold leading-snug text-slate-900 md:text-3xl">
                  {rolActual.titulo}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {rolActual.descripcion}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    ¿Qué obtiene este perfil al ingresar a la plataforma?
                  </p>
                  {rolActual.funcionalidades.map((func) => (
                    <div key={func} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                      <span>{func}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caso práctico del diálogo de la transcripción */}
              <div className="mt-8 rounded-xl border border-yellow-500/35 bg-yellow-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  {rolActual.id === 1 && <GraduationCap className="h-4 w-4 text-yellow-600" />}
                  {rolActual.id === 2 && <ShieldCheck className="h-4 w-4 text-yellow-600" />}
                  {rolActual.id === 3 && <Users className="h-4 w-4 text-yellow-600" />}
                  <span>{rolActual.ejemploPracticoTitulo}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed font-medium text-slate-800">
                  {rolActual.ejemploPracticoTexto}
                </p>
              </div>
            </div>

            {/* Columna Derecha: Componentes del Sistema y Acceso Directo */}
            <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-inner md:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                    Componentes de la Plataforma
                  </span>
                  <span className="text-xs text-slate-400">
                    Perfil {rolActual.id} de {rolesPlataforma.length}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {rolActual.metricas.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-slate-800 bg-slate-800/70 p-4 transition-colors hover:border-slate-700"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {m.label}
                      </div>
                      <div className="mt-1 text-xl font-extrabold text-yellow-400 md:text-2xl">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-slate-300">{m.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 border-t border-slate-800 pt-5">
                <a
                  href={MOODLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-900 transition-colors hover:bg-yellow-400"
                >
                  <span>Ingresar como {rolActual.preguntaIngreso.replace(/[¿?]/g, "")}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {setView && (
                  <button
                    type="button"
                    onClick={() => {
                      setView("cursos");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  >
                    <BookOpenText className="h-3.5 w-3.5" />
                    <span>Ver Módulos y Horas de Certificación</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controles inferiores */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {rolesPlataforma.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-10 bg-slate-900"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ver perfil ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-100"
              aria-label="Perfil anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-100"
              aria-label="Siguiente perfil"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
