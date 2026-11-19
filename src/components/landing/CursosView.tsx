import { useState, type FormEvent } from "react";
import {
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Trash2,
  Clock3,
  CheckCircle2,
  Award,
  Users,
  MonitorPlay,
  FileText,
  Building2,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  Mail,
  Plus,
  Minus,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface CursoOTEC {
  id: number;
  codigoSence: string;
  categoria: "Liderazgo y UTP" | "Evaluación y Aula" | "Inclusión y Convivencia" | "Proyectos y Fondos";
  titulo: string;
  precio: number;
  horas: number;
  modalidad: string;
  certificacion: string;
  financiamiento: string;
  dirigidoA: string;
  descripcion: string;
  aprendizajes: string[];
  entregablesMoodle: string[];
}

export interface ItemCotizacion {
  curso: CursoOTEC;
  cupos: number;
}

interface SolicitudCotizacionB2B {
  folio: string;
  colegio: string;
  rutRbd: string;
  solicitante: string;
  cargo: string;
  email: string;
  telefono: string;
  financiamiento: string;
  items: ItemCotizacion[];
  total: number;
}

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "56912345678";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contacto@educaresponde.cl";

const listaCursos: CursoOTEC[] = [
  {
    id: 1,
    codigoSence: "SENCE 12-38-0149-52",
    categoria: "Liderazgo y UTP",
    titulo: "Diplomado en Liderazgo Pedagógico y Gestión Directiva Escolar",
    precio: 280000,
    horas: 120,
    modalidad: "E-Learning Asincrónico + Tutorías en Aula Moodle",
    certificacion: "Certificado Oficial SENCE y Acreditación OTEC (Alineado a MBDL)",
    financiamiento: "Ley SEP (PME) · Franquicia Tributaria SENCE · Orden de Compra",
    dirigidoA: "Directores, Jefes UTP, Inspectores Generales, Coordinadores de Ciclo y Sostenedores.",
    descripcion:
      "Programa ejecutivo diseñado para transformar la gestión técnico-pedagógica e institucional del establecimiento. Entrega herramientas prácticas para la articulación del PME, gestión eficiente de recursos SEP/FAEP y acompañamiento docente en aula bajo el Marco para la Buena Dirección y el Liderazgo Escolar.",
    aprendizajes: [
      "Diseño, monitoreo y evaluación de metas del Plan de Mejoramiento Educativo (PME) vinculadas a presupuesto SEP.",
      "Protocolos de observación de aula y retroalimentación pedagógica efectiva para equipos docentes.",
      "Liderazgo distribuido, gestión del clima organizacional y resolución de conflictos en comunidades escolares.",
    ],
    entregablesMoodle: [
      "6 módulos interactivos en Aula Virtual Moodle con plantillas descargables de gestión UTP",
      "Panel de seguimiento de avance y calificaciones para el Director o Sostenedor",
      "Diploma digital con código de verificación QR y certificado de horas cronológicas",
    ],
  },
  {
    id: 2,
    codigoSence: "SENCE 12-38-0215-88",
    categoria: "Evaluación y Aula",
    titulo: "Estrategias de Evaluación Formativa Basada en Datos y Decreto 67",
    precio: 95000,
    horas: 40,
    modalidad: "B-Learning (Sesiones Sincrónicas + Campus Virtual Moodle)",
    certificacion: "Certificado SENCE / Estándares CPEIP MINEDUC",
    financiamiento: "Fondos Ley SEP · Franquicia SENCE · Convenio / Orden de Compra",
    dirigidoA: "Jefes UTP, Evaluadores, Docentes de Educación Básica y Educación Media.",
    descripcion:
      "Capacitación práctica para modernizar los procesos evaluativos conforme al Decreto 67/2018. Su cuerpo docente aprenderá a construir instrumentos estandarizados, rúbricas analíticas y matrices de datos para tomar decisiones pedagógicas oportunas que eleven los resultados de aprendizaje y SIMCE/PAES.",
    aprendizajes: [
      "Implementación práctica del Decreto 67: diversificación evaluativa y promoción escolar con foco formativo.",
      "Construcción y validación de rúbricas, pautas de cotejo e instrumentos alineados al Currículum Nacional.",
      "Análisis de datos de aprendizaje para diseñar planes remediales oportunos por curso y asignatura.",
    ],
    entregablesMoodle: [
      "Banco descargable de 35+ rúbricas y matrices de análisis curricular en Moodle",
      "Evaluaciones automatizadas y foros de práctica guiada por relator especialista",
      "Informe consolidado de aprobación docente para respaldo de auditoría SEP",
    ],
  },
  {
    id: 3,
    codigoSence: "SENCE 12-38-0309-14",
    categoria: "Inclusión y Convivencia",
    titulo: "Diseño Universal para el Aprendizaje (DUA), PIE y Gestión de Aula Inclusiva",
    precio: 115000,
    horas: 60,
    modalidad: "E-Learning en Aula Virtual Moodle (100% Flexible)",
    certificacion: "Certificado SENCE / Normativa Decreto 83 y Ley TEA",
    financiamiento: "Fondos PIE · Ley SEP · Franquicia Tributaria SENCE",
    dirigidoA: "Docentes de Aula, Educadores Diferenciales, Equipos PIE y Duplas Psicosociales.",
    descripcion:
      "Programa especializado en inclusión educativa y atención a la diversidad bajo el Decreto 83 y la Ley de Inclusión / Ley TEA (N° 21.545). Fortalece el trabajo colaborativo entre docentes de asignatura y equipos PIE para eliminar barreras de aprendizaje.",
    aprendizajes: [
      "Aplicación de los 3 principios del DUA en la planificación de clases y adecuaciones curriculares (PACI/PAI).",
      "Estrategias de co-enseñanza efectiva entre docentes de aula regular y especialistas del Programa de Integración (PIE).",
      "Protocolos de regulación emocional, contención positiva y abordaje de Necesidades Educativas Especiales (NEE).",
    ],
    entregablesMoodle: [
      "Formatos editables de PACI, PAI y bitácoras de trabajo colaborativo PIE en Moodle",
      "Cápsulas audiovisuales de estudio de casos reales en colegios chilenos",
      "Certificación individual por docente válida para carpeta de desarrollo profesional",
    ],
  },
  {
    id: 4,
    codigoSence: "CÓDIGO OTEC ER-2026-04",
    categoria: "Proyectos y Fondos",
    titulo: "Formulación Técnica y Postulación a Proyectos de Infraestructura Escolar",
    precio: 150000,
    horas: 80,
    modalidad: "E-Learning Sincrónico + Taller en Aula Virtual Moodle",
    certificacion: "Certificado de Especialización Técnica EducaResponde",
    financiamiento: "Orden de Compra Institucional · Subvención General / FAEP",
    dirigidoA: "Equipos Directivos, Administradores Escolares, Encargados de Proyectos DAEM/SLEP.",
    descripcion:
      "Taller intensivo que guía paso a paso a su equipo en la formulación técnica, presupuestaria y normativa de proyectos de conservación y ampliación escolar para adjudicar fondos regionales (FNDR/GORE) y convocatorias MINEDUC.",
    aprendizajes: [
      "Interpretación práctica de normativas de infraestructura escolar (OGUC, Decreto 548 MINEDUC y accesibilidad).",
      "Elaboración de términos de referencia, cubicaciones preliminares y especificaciones técnicas sin errores de admisibilidad.",
      "Rutas críticas de postulación, licitación en Mercado Público y rendición financiera sin observaciones.",
    ],
    entregablesMoodle: [
      "Checklist oficial de admisibilidad MINEDUC y plantillas de presupuesto en Excel",
      "Revisión personalizada del anteproyecto de su colegio dentro del Aula Moodle",
      "Certificado de aprobación técnica para el equipo administrativo y directivo",
    ],
  },
];

const categoriasFiltro = [
  "Todos",
  "Liderazgo y UTP",
  "Evaluación y Aula",
  "Inclusión y Convivencia",
  "Proyectos y Fondos",
] as const;

export interface CursosViewProps {
  setView?: (view: ViewMode) => void;
}

export function CursosView({ setView }: CursosViewProps) {
  // Expandir el primer curso por defecto para mostrar inmediatamente la riqueza comercial B2B
  const [cursoExpandido, setCursoExpandido] = useState<number | null>(1);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [carrito, setCarrito] = useState<ItemCotizacion[]>([]);
  const [mostrarFormularioOC, setMostrarFormularioOC] = useState(false);
  const [cotizacionGenerada, setCotizacionGenerada] = useState<SolicitudCotizacionB2B | null>(null);

  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });

  const cursosFiltrados =
    filtroCategoria === "Todos"
      ? listaCursos
      : listaCursos.filter((c) => c.categoria === filtroCategoria);

  const agregarAlCarrito = (curso: CursoOTEC) => {
    setCotizacionGenerada(null);
    if (!carrito.find((item) => item.curso.id === curso.id)) {
      // Por defecto iniciamos con 5 cupos docentes (típico equipo UTP/ciclo en colegios B2B), editable desde 1
      setCarrito([...carrito, { curso, cupos: 5 }]);
    }
  };

  const actualizarCupos = (id: number, nuevoCupo: number) => {
    const cuposValidos = Math.max(1, Math.min(200, nuevoCupo));
    setCarrito(
      carrito.map((item) =>
        item.curso.id === id ? { ...item, cupos: cuposValidos } : item
      )
    );
  };

  const eliminarDelCarrito = (id: number) => {
    const nuevo = carrito.filter((item) => item.curso.id !== id);
    setCarrito(nuevo);
    if (nuevo.length === 0) {
      setMostrarFormularioOC(false);
    }
  };

  const totalCupos = carrito.reduce((sum, item) => sum + item.cupos, 0);
  const totalCart = carrito.reduce(
    (sum, item) => sum + item.curso.precio * item.cupos,
    0
  );

  const handleGenerarCotizacion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const nuevaSolicitud: SolicitudCotizacionB2B = {
      folio: `COT-${Math.floor(100000 + Math.random() * 900000)}`,
      colegio: String(formData.get("colegio") || ""),
      rutRbd: String(formData.get("rutRbd") || ""),
      solicitante: String(formData.get("solicitante") || ""),
      cargo: String(formData.get("cargo") || ""),
      email: String(formData.get("email") || ""),
      telefono: String(formData.get("telefono") || ""),
      financiamiento: String(formData.get("financiamiento") || ""),
      items: [...carrito],
      total: totalCart,
    };

    setCotizacionGenerada(nuevaSolicitud);
  };

  const generarLinkWhatsAppCotizacion = (cot: SolicitudCotizacionB2B) => {
    const detalleProgramas = cot.items
      .map(
        (i) =>
          `  - ${i.curso.titulo} (${i.cupos} cupos docentes x ${formatter.format(
            i.curso.precio
          )})`
      )
      .join("\n");

    const mensaje = `Hola EducaResponde, solicito Cotización Formal / Orden de Compra B2B (Folio *${cot.folio}*):\n\n• *Colegio:* ${cot.colegio} (RBD/RUT: ${cot.rutRbd})\n• *Solicitante:* ${cot.solicitante} (${cot.cargo})\n• *Correo:* ${cot.email}\n• *Teléfono:* ${cot.telefono}\n• *Financiamiento:* ${cot.financiamiento}\n\n*Programas Seleccionados:*\n${detalleProgramas}\n\n*Inversión Total Estimada:* ${formatter.format(cot.total)}\n\nQuedo atento(a) al envío de la cotización formal para activar los accesos en el Aula Virtual Moodle.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  };

  const generarLinkMailtoCotizacion = (cot: SolicitudCotizacionB2B) => {
    const subject = `Solicitud Cotización OTEC ${cot.folio} - ${cot.colegio}`;
    const detalleProgramas = cot.items
      .map(
        (i) =>
          `- ${i.curso.titulo}: ${i.cupos} cupos (${formatter.format(
            i.curso.precio * i.cupos
          )})`
      )
      .join("\n");

    const body = `Estimado equipo EducaResponde,\n\nSolicito emisión de Cotización Formal para Orden de Compra y posterior habilitación en Aula Virtual Moodle:\n\nFolio: ${cot.folio}\nEstablecimiento: ${cot.colegio}\nRBD / RUT: ${cot.rutRbd}\nSolicitante: ${cot.solicitante} (${cot.cargo})\nCorreo: ${cot.email}\nTeléfono: ${cot.telefono}\nVía de Financiamiento: ${cot.financiamiento}\n\nProgramas:\n${detalleProgramas}\n\nTotal Estimado: ${formatter.format(cot.total)}\n\nSaludos cordiales.`;

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Barra superior de retorno y contexto Moodle */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {setView ? (
            <button
              type="button"
              onClick={() => setView("landing")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-xs transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Inicio
            </button>
          ) : (
            <div />
          )}

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-yellow-600" />
              Programas elegibles Ley SEP · SENCE · Orden de Compra
            </span>
            <a
              href={MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-slate-800"
            >
              <span>Campus Moodle: aula.educaresponde.cl</span>
              <ExternalLink className="h-3.5 w-3.5 text-yellow-400" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_410px] lg:items-start">
          {/* COLUMNA IZQUIERDA: CATÁLOGO DE CURSOS B2B */}
          <div>
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Formación Continua OTEC &amp; Campus Moodle
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Catálogo de Capacitación Docente y Directiva
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              Seleccione los programas para su equipo docente o directivo. Una vez confirmada la cotización u Orden de Compra del establecimiento, habilitamos las credenciales individuales en nuestra{" "}
              <strong className="font-semibold text-slate-900">Aula Virtual Moodle</strong> con reportes de seguimiento para Dirección y UTP.
            </p>

            {/* Filtros por área */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categoriasFiltro.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltroCategoria(cat)}
                  className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    filtroCategoria === cat
                      ? "bg-slate-900 text-yellow-400 shadow-sm"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Lista de Fichas Comerciales */}
            <div className="mt-8 space-y-6">
              {cursosFiltrados.map((curso) => {
                const isExpanded = cursoExpandido === curso.id;
                const enCarrito = carrito.some((item) => item.curso.id === curso.id);

                return (
                  <article
                    key={curso.id}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isExpanded
                        ? "border-slate-900 shadow-xl"
                        : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Cabecera de la Ficha */}
                    <button
                      type="button"
                      className="flex w-full cursor-pointer flex-col justify-between gap-4 p-6 text-left sm:flex-row sm:items-center md:p-8"
                      onClick={() =>
                        setCursoExpandido(isExpanded ? null : curso.id)
                      }
                      aria-expanded={isExpanded}
                    >
                      <div className="pr-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                            {curso.categoria}
                          </span>
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700">
                            {curso.codigoSence}
                          </span>
                          {enCarrito && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                              <CheckCircle2 className="h-3.5 w-3.5" /> En Cotización
                            </span>
                          )}
                        </div>

                        <h2 className="mt-3 text-xl font-extrabold leading-snug text-slate-900 md:text-2xl">
                          {curso.titulo}
                        </h2>

                        <div className="mt-3 flex flex-wrap gap-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            <Clock3 className="h-3.5 w-3.5 text-slate-900" />
                            {curso.horas} hrs cronológicas
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            <MonitorPlay className="h-3.5 w-3.5 text-slate-900" />
                            {curso.modalidad}
                          </span>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                        <div className="sm:text-right">
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Valor por docente
                          </span>
                          <p className="text-2xl font-black text-slate-900 md:text-3xl">
                            {formatter.format(curso.precio)}
                          </p>
                        </div>
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100">
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </span>
                      </div>
                    </button>

                    {/* Cuerpo Expandible: Ficha Comercial Completa */}
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-white p-6 md:p-8">
                        {/* Grilla de Metadatos Comerciales B2B */}
                        <div className="mb-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 md:grid-cols-3">
                          <div className="flex items-start gap-3">
                            <Users className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Perfil del Participante
                              </p>
                              <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-900">
                                {curso.dirigidoA}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Award className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Certificación Oficial
                              </p>
                              <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-900">
                                {curso.certificacion}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Financiamiento Compatible
                              </p>
                              <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-900">
                                {curso.financiamiento}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Descripción Ejecutiva */}
                        <p className="mb-6 border-l-4 border-yellow-500 pl-4 text-base leading-relaxed text-slate-700">
                          {curso.descripcion}
                        </p>

                        {/* Dos columnas: Competencias y Entregables Moodle */}
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                              Competencias a Desarrollar:
                            </h3>
                            <ul className="space-y-2.5">
                              {curso.aprendizajes.map((punto) => (
                                <li
                                  key={punto}
                                  className="flex items-start gap-2.5 text-sm text-slate-700"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                                  <span>{punto}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                              <Sparkles className="h-4 w-4 text-yellow-600" />
                              Incluye en Aula Virtual Moodle:
                            </h3>
                            <ul className="space-y-2.5">
                              {curso.entregablesMoodle.map((entregable) => (
                                <li
                                  key={entregable}
                                  className="flex items-start gap-2.5 text-xs leading-relaxed font-medium text-slate-700"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                                  <span>{entregable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Pie de Ficha: Botón de Acción B2B */}
                        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
                          <div className="text-xs text-slate-500">
                            Acceso individual en{" "}
                            <strong className="text-slate-800">
                              aula.educaresponde.cl
                            </strong>{" "}
                            para cada docente inscrito.
                          </div>

                          <button
                            type="button"
                            onClick={() => agregarAlCarrito(curso)}
                            disabled={enCarrito}
                            className={`inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-extrabold shadow-sm transition-all sm:w-auto ${
                              enCarrito
                                ? "cursor-default bg-emerald-100 text-emerald-900"
                                : "bg-yellow-500 text-slate-900 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-md"
                            }`}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            {enCarrito
                              ? "Programa Agregado a la Cotización"
                              : "Agregar a Cotización Institucional"}
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          {/* COLUMNA DERECHA: PANEL LATERAL DE COTIZACIÓN / INSCRIPCIÓN B2B */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              {/* Cabecera oscura corporativa */}
              <div className="bg-slate-900 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-5 w-5 text-yellow-400" />
                    <h2 className="text-lg font-extrabold">
                      Cotización / Inscripción B2B
                    </h2>
                  </div>
                  <span className="rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-extrabold text-slate-900">
                    {carrito.length} {carrito.length === 1 ? "programa" : "programas"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Emitimos cotización formal para Orden de Compra, Ley SEP y SENCE.
                </p>
              </div>

              <div className="p-6">
                {cotizacionGenerada ? (
                  /* ESTADO 3: COTIZACIÓN FORMAL GENERADA */
                  <div className="space-y-5">
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-center">
                      <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                      <span className="mt-2 inline-block rounded-full bg-white px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 shadow-2xs">
                        Folio {cotizacionGenerada.folio}
                      </span>
                      <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                        Solicitud de Cotización Lista
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        Para <strong className="text-slate-900">{cotizacionGenerada.colegio}</strong> ({totalCupos} cupos docentes en total).
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs space-y-2">
                      <p className="font-bold uppercase tracking-wider text-slate-500">
                        Flujo de Activación Moodle:
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        1. Recibirá la cotización formal firmada en{" "}
                        <strong className="text-slate-900">{cotizacionGenerada.email}</strong>.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        2. Con la Orden de Compra o comprobante y la nómina Excel de docentes,{" "}
                        <strong className="text-slate-900">
                          activamos sus cuentas individuales en{" "}
                          <span className="underline">aula.educaresponde.cl</span>
                        </strong>{" "}
                        en menos de 24h.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <a
                        href={generarLinkWhatsAppCotizacion(cotizacionGenerada)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-extrabold text-white shadow-sm transition-all hover:brightness-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enviar Solicitud por WhatsApp B2B
                      </a>

                      <a
                        href={generarLinkMailtoCotizacion(cotizacionGenerada)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                      >
                        <Mail className="h-4 w-4 text-yellow-400" />
                        Enviar por Correo Institucional
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setCotizacionGenerada(null);
                          setMostrarFormularioOC(false);
                        }}
                        className="w-full cursor-pointer pt-2 text-center text-xs font-semibold text-slate-500 hover:text-slate-900"
                      >
                        ← Modificar programas o cupos
                      </button>
                    </div>
                  </div>
                ) : carrito.length === 0 ? (
                  /* ESTADO 1: CARRITO VACÍO */
                  <div className="py-8 text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-500">
                      <ShoppingCart className="h-7 w-7" />
                    </div>
                    <p className="mt-4 text-base font-bold text-slate-900">
                      Sin programas seleccionados
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      Seleccione uno o más cursos del catálogo para calcular la inversión según la cantidad de docentes de su colegio.
                    </p>
                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-left text-xs text-slate-600">
                      <p className="font-bold text-slate-900">
                        ¿Cómo funciona el acceso a Moodle?
                      </p>
                      <p className="mt-1 leading-relaxed">
                        Una vez aprobada la cotización u Orden de Compra del colegio, cada docente inscrito recibe su usuario y contraseña para ingresar a{" "}
                        <strong className="text-slate-900">aula.educaresponde.cl</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* ESTADO 2: PROGRAMAS EN CARRITO + FORMULARIO DE ORDEN DE COMPRA */
                  <div>
                    <ul className="max-h-[300px] space-y-4 overflow-y-auto pr-1">
                      {carrito.map((item) => (
                        <li
                          key={item.curso.id}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                {item.curso.codigoSence}
                              </span>
                              <p className="text-sm font-bold leading-snug text-slate-900">
                                {item.curso.titulo}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => eliminarDelCarrito(item.curso.id)}
                              className="cursor-pointer rounded-lg p-1 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
                              aria-label={`Eliminar ${item.curso.titulo}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between border-t border-slate-200/80 pt-3">
                            <div>
                              <span className="block text-[11px] font-semibold text-slate-500">
                                Cupos docentes:
                              </span>
                              <div className="mt-1 inline-flex items-center rounded-lg border border-slate-200 bg-white">
                                <button
                                  type="button"
                                  onClick={() =>
                                    actualizarCupos(item.curso.id, item.cupos - 1)
                                  }
                                  className="cursor-pointer px-2 py-1 text-slate-700 hover:bg-slate-100"
                                  aria-label="Disminuir cupos"
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  max={200}
                                  value={item.cupos}
                                  onChange={(e) =>
                                    actualizarCupos(
                                      item.curso.id,
                                      parseInt(e.target.value, 10) || 1
                                    )
                                  }
                                  className="w-12 text-center text-xs font-bold text-slate-900 outline-none"
                                  aria-label="Cantidad de docentes"
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    actualizarCupos(item.curso.id, item.cupos + 1)
                                  }
                                  className="cursor-pointer px-2 py-1 text-slate-700 hover:bg-slate-100"
                                  aria-label="Aumentar cupos"
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="block text-[11px] text-slate-500">
                                {formatter.format(item.curso.precio)} c/u
                              </span>
                              <span className="text-base font-black text-slate-900">
                                {formatter.format(item.curso.precio * item.cupos)}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Resumen Total */}
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>Total docentes a capacitar:</span>
                        <span className="font-bold text-slate-900">{totalCupos} cupos</span>
                      </div>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Inversión Total:
                        </span>
                        <span className="text-2xl font-black text-slate-900">
                          {formatter.format(totalCart)}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500">
                        * Valores exentos de IVA (Actividad de Capacitación OTEC).
                      </p>
                    </div>

                    {/* Nota de integración con Aula Virtual Moodle */}
                    <div className="mt-4 rounded-xl border border-yellow-500/40 bg-yellow-50/70 p-3 text-xs text-slate-800">
                      <p className="font-bold text-slate-900">
                        Activación en Aula Virtual Moodle
                      </p>
                      <p className="mt-0.5 leading-relaxed">
                        El acceso a <strong className="font-semibold">aula.educaresponde.cl</strong> se activa para la nómina de docentes inscritos tras confirmar la Orden de Compra o convenio del colegio.
                      </p>
                    </div>

                    {!mostrarFormularioOC ? (
                      <button
                        type="button"
                        onClick={() => setMostrarFormularioOC(true)}
                        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-4 text-sm font-extrabold text-slate-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-lg"
                      >
                        <FileText className="h-5 w-5" />
                        Solicitar Cotización Formal / OC
                      </button>
                    ) : (
                      <form
                        onSubmit={handleGenerarCotizacion}
                        className="mt-5 space-y-3 border-t border-slate-200 pt-4"
                      >
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                          Datos del Establecimiento para Cotización:
                        </p>

                        <div>
                          <input
                            name="colegio"
                            required
                            placeholder="Nombre del Colegio / Institución *"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <input
                            name="rutRbd"
                            required
                            placeholder="RBD o RUT Colegio *"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          />
                          <select
                            name="financiamiento"
                            defaultValue="Ley SEP (PME)"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          >
                            <option value="Ley SEP (PME)">Ley SEP (PME)</option>
                            <option value="Franquicia SENCE">Franquicia SENCE</option>
                            <option value="Orden de Compra / Directo">Orden de Compra</option>
                            <option value="Fondos PIE / FAEP">Fondos PIE / FAEP</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <input
                            name="solicitante"
                            required
                            placeholder="Su Nombre *"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          />
                          <select
                            name="cargo"
                            defaultValue="Jefe(a) UTP"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          >
                            <option value="Director(a)">Director(a)</option>
                            <option value="Jefe(a) UTP">Jefe(a) UTP</option>
                            <option value="Sostenedor(a)">Sostenedor(a)</option>
                            <option value="Encargado(a) Compras">Compras / DAEM</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="Correo institucional *"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          />
                          <input
                            name="telefono"
                            type="tel"
                            required
                            placeholder="Teléfono +56 9... *"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-slate-900 focus:bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:bg-yellow-400"
                        >
                          Emitir Cotización Formal B2B
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
