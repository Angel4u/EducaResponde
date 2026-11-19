import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  MapPin,
} from "lucide-react";

interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

interface ProyectoCaso {
  id: number;
  categoria: string;
  financiamiento: string;
  ubicacion: string;
  titulo: string;
  descripcion: string;
  entregables: string[];
  metricas: MetricItem[];
  testimonioCargo: string;
  resultadoClave: string;
}

const proyectosDestacados: ProyectoCaso[] = [
  {
    id: 1,
    categoria: "INFRAESTRUCTURA ESCOLAR",
    financiamiento: "Fondo FAEP / MINEDUC",
    ubicacion: "Región Metropolitana",
    titulo: "Colegio San Andrés — Ampliación y Modernización Normativa",
    descripcion:
      "Formulación técnica y ejecución integral de 6 nuevas aulas temáticas, cubierta estructural de patio escolar y ruta de accesibilidad universal conforme a exigencias MINEDUC y OGUC.",
    entregables: [
      "Expediente arquitectónico y aprobación municipal sin observaciones",
      "Obra ejecutada en período estival sin afectar el calendario escolar",
      "Recepción definitiva y certificación eléctrica SEC al 100%",
    ],
    metricas: [
      { label: "Inversión Ejecutada", value: "$185M CLP", detail: "100% financiado vía fondos públicos" },
      { label: "Plazo de Obra", value: "75 Días", detail: "Entrega 10 días antes del inicio escolar" },
      { label: "Comunidad Beneficiada", value: "1.150 Alumnos", detail: "6 nuevas salas y 420 m² cubiertos" },
    ],
    testimonioCargo: "Dirección Ejecutiva & Sostenedor",
    resultadoClave: "Reconocimiento oficial MINEDUC y aumento de 18% en capacidad de matrícula.",
  },
  {
    id: 2,
    categoria: "LICITACIÓN & FONDOS ADJUDICADOS",
    financiamiento: "Subvención & Fondos Concursables MINEDUC",
    ubicacion: "Región del Biobío",
    titulo: "Fundación Educacional Aurora — Adjudicación de Fondos de Equipamiento y PME",
    descripcion:
      "Asesoría técnica, presupuestaria y jurídica para la postulación a fondos de conservación e innovación pedagógica en 4 establecimientos de la red fundacional.",
    entregables: [
      "Diagnóstico técnico-económico de los 4 establecimientos de la Fundación",
      "Diseño de bases de licitación y gestión en portal Mercado Público",
      "Acompañamiento completo en rendición financiera ante Superintendencia",
    ],
    metricas: [
      { label: "Monto Adjudicado", value: "$340M CLP", detail: "Tasa de adjudicación del 100% postulado" },
      { label: "Colegios Beneficiados", value: "4 Colegios", detail: "Laboratorios STEM y mobiliario normado" },
      { label: "Tiempo de Gestión", value: "45 Días", detail: "Desde diagnóstico hasta adjudicación" },
    ],
    testimonioCargo: "Gerencia de Administración y Finanzas",
    resultadoClave: "Cero observaciones en la rendición de fondos ante la Superintendencia de Educación.",
  },
  {
    id: 3,
    categoria: "CAPACITACIÓN DOCENTE & UTP (OTEC)",
    financiamiento: "Franquicia SENCE + Ley SEP",
    ubicacion: "Región de Valparaíso y Coquimbo",
    titulo: "Red de Colegios Norte — Plan Anual de Liderazgo Directivo y Evaluación Formativa",
    descripcion:
      "Implementación de un programa anual en modalidad B-Learning a través del Aula Virtual Moodle de EducaResponde, enfocado en evaluación basada en datos, DUA y liderazgo UTP.",
    entregables: [
      "Aula Virtual Moodle personalizada con seguimiento por RBD y docente",
      "120 horas cronológicas certificadas con código SENCE y alineadas a CPEIP",
      "Informes mensuales de progreso y asistencia para Sostenedor y Jefes UTP",
    ],
    metricas: [
      { label: "Docentes Certificados", value: "240 Docentes", detail: "Tasa de aprobación final del 96,4%" },
      { label: "Duración del Plan", value: "12 Meses", detail: "Acompañamiento continuo sincrónico y Moodle" },
      { label: "Impacto Pedagógico", value: "+22 Pts SIMCE", detail: "Promedio de mejora en evaluación interna" },
    ],
    testimonioCargo: "Coordinación Académica y Jefatura UTP Red",
    resultadoClave: "Estandarización de rúbricas y planificación curricular en los 6 colegios de la red.",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === currentIndex) return;
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }, 220);
    },
    [isAnimating, currentIndex]
  );

  const nextSlide = useCallback(() => {
    changeSlide(currentIndex === proyectosDestacados.length - 1 ? 0 : currentIndex + 1);
  }, [changeSlide, currentIndex]);

  const prevSlide = useCallback(() => {
    changeSlide(currentIndex === 0 ? proyectosDestacados.length - 1 : currentIndex - 1);
  }, [changeSlide, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const proyecto = proyectosDestacados[currentIndex];

  return (
    <section id="proyectos" className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Encabezado de sección con selector directo de casos */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Casos de Éxito &amp; Impacto B2B
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Resultados verificables en establecimientos educacionales
            </h2>
          </div>

          {/* Botones de navegación rápida por categoría */}
          <div className="flex flex-wrap gap-2">
            {proyectosDestacados.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => changeSlide(idx)}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  currentIndex === idx
                    ? "bg-slate-900 text-yellow-400 shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                0{idx + 1}. {item.categoria.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor Principal del Carrusel */}
        <div className="relative mx-auto w-full">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
            <div
              className={`grid gap-8 p-7 transition-all duration-200 ease-in-out md:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-12 ${
                isAnimating ? "scale-[0.99] opacity-0" : "scale-100 opacity-100"
              }`}
            >
              {/* Columna Izquierda: Contexto, Solución y Entregables */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400">
                      {proyecto.categoria}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      <Award className="h-3.5 w-3.5 text-yellow-600" />
                      {proyecto.financiamiento}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      {proyecto.ubicacion}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold leading-snug text-slate-900 md:text-3xl">
                    {proyecto.titulo}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    {proyecto.descripcion}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Hitos y Entregables Ejecutados:
                    </p>
                    {proyecto.entregables.map((hito) => (
                      <div key={hito} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                        <span>{hito}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bloque de resultado institucional */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <TrendingUp className="h-4 w-4 text-yellow-600" />
                    <span>Impacto Institucional Verificado ({proyecto.testimonioCargo})</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    “{proyecto.resultadoClave}”
                  </p>
                </div>
              </div>

              {/* Columna Derecha: Panel de Métricas de Impacto B2B */}
              <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-inner md:p-8">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                      Métricas de Impacto
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5" /> Caso #{proyecto.id} de {proyectosDestacados.length}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {proyecto.metricas.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-slate-800 bg-slate-800/70 p-4 transition-colors hover:border-slate-700"
                      >
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {m.label}
                        </div>
                        <div className="mt-1 text-2xl font-extrabold text-yellow-400 md:text-3xl">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs text-slate-300">{m.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-yellow-400" />
                    Verificación MINEDUC / SENCE
                  </span>
                  <a
                    href="#contacto"
                    className="font-bold text-yellow-400 underline-offset-4 hover:underline"
                  >
                    Solicitar caso similar →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Controles inferiores y flechas */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {proyectosDestacados.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => changeSlide(index)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-10 bg-slate-900"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-100"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-100"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
