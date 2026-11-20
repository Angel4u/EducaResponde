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
  Play,
  Download,
  Video,
  ClipboardCheck,
  BookOpen,
  Calendar,
  HelpCircle,
  Wifi,
  UserCheck,
  FileSpreadsheet,
} from "lucide-react";
import type { ViewMode } from "./Navbar";

export interface RecursoPDF {
  titulo: string;
  tipo: "Clase PDF" | "Guía Práctica" | "Plantilla Editable" | "Normativa MINEDUC";
  tamano: string;
  url: string;
}

export interface VideoCapsula {
  titulo: string;
  duracion: string;
  urlVideo: string;
  /** Miniatura liviana (modo ahorro de datos, ~15-25 KB, lazy-loaded) */
  thumbnailUrl: string;
  resumen: string;
}

export interface UnidadCurso {
  numero: number;
  titulo: string;
  horas: number;
  descripcion: string;
  resultadosAprendizaje: string[];
  video: VideoCapsula;
  pdfs: RecursoPDF[];
}

export interface ClaseOnline {
  sesion: string;
  titulo: string;
  modalidad: "Zoom / Google Meet en Vivo" | "Taller Sincrónico Práctico";
  horarioReferencial: string;
  relator: string;
  estado: "Programada" | "Grabación Disponible";
  linkSala: string;
}

export interface EvaluacionCurso {
  titulo: string;
  tipo: "Diagnóstica" | "Formativa (Quiz)" | "Trabajo Aplicado" | "Examen Final SENCE";
  ponderacion: string;
  requisito: string;
  descripcion: string;
}

export interface CursoOTEC {
  id: number;
  codigoSence: string;
  categoria:
    | "Liderazgo y UTP"
    | "Evaluación y Aula"
    | "Inclusión y Convivencia"
    | "Proyectos y Fondos";
  titulo: string;
  precio: number;
  horas: number;
  modalidad: string;
  certificacion: string;
  financiamiento: string;
  dirigidoA: string;
  relatorNombre: string;
  relatorCargo: string;
  introduccion: string;
  aprendizajes: string[];
  unidades: UnidadCurso[];
  clasesOnline: ClaseOnline[];
  evaluaciones: EvaluacionCurso[];
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

type TabCurso = "introduccion" | "unidades" | "clases_online" | "evaluaciones" | "soporte";

const MOODLE_URL =
  import.meta.env.VITE_MOODLE_URL || "https://aula.educaresponde.cl/login/index.php";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "56912345678";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contacto@educaresponde.cl";

/**
 * Generador de miniaturas SVG ultra-livianas (0 KB de tráfico externo, renderizado instantáneo)
 * para mostrar la portada de cada cápsula de video sin consumir datos de la red del colegio.
 */
function crearMiniaturaLivianaSVG(codigo: string, tituloCorto: string, colorFondo: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colorFondo}" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="640" height="360" fill="url(#g)" />
    <g stroke="rgba(255,255,255,0.07)" stroke-width="1">
      <line x1="0" y1="90" x2="640" y2="90" />
      <line x1="0" y1="180" x2="640" y2="180" />
      <line x1="0" y1="270" x2="640" y2="270" />
      <line x1="160" y1="0" x2="160" y2="360" />
      <line x1="320" y1="0" x2="320" y2="360" />
      <line x1="480" y1="0" x2="480" y2="360" />
    </g>
    <rect x="36" y="34" width="175" height="30" rx="15" fill="#eab308" />
    <text x="123" y="54" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">${codigo}</text>
    <text x="36" y="280" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#ffffff">${tituloCorto}</text>
    <text x="36" y="310" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#cbd5e1">EducaResponde · Aula Virtual Moodle (Modo Ahorro de Datos)</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const listaCursos: CursoOTEC[] = [
  {
    id: 1,
    codigoSence: "SENCE 12-38-0215-88",
    categoria: "Evaluación y Aula",
    titulo: "Uso de Syscol y Análisis de Datos Educativos para la Toma de Decisiones",
    precio: 95000,
    horas: 40,
    modalidad: "E-Learning en Aula Virtual Moodle + Clases Online en Vivo",
    certificacion: "Certificado Oficial SENCE / Estándares CPEIP MINEDUC",
    financiamiento: "Fondos Ley SEP (PME) · Franquicia Tributaria SENCE · Orden de Compra",
    dirigidoA: "Jefes UTP, Evaluadores, Coordinadores Académicos y Docentes de Básica y Media.",
    relatorNombre: "Mg. Angel Eastman",
    relatorCargo: "Especialista en Analítica Educativa, Gestión UTP y Plataforma Syscol",
    introduccion:
      "Bienvenido al programa oficial de Uso de Syscol y Análisis de Datos Educativos. Este curso está estructurado por unidades progresivas donde su equipo aprenderá desde la configuración y carga de pruebas institucionales hasta la lectura de reportes psicométricos por eje, OA y habilidad para diseñar planes remediales que impacten directamente en resultados SIMCE y PAES.",
    aprendizajes: [
      "Dominar el flujo completo de Syscol: creación de evaluaciones, hojas de respuesta ópticas/digitales y procesamiento de datos.",
      "Interpretar reportes de cobertura curricular, niveles de logro (Adecuado, Elemental, Insuficiente) y brechas por OA.",
      "Construir planes de intervención pedagógica basados en evidencia para reuniones de UTP y Consejo de Profesores.",
    ],
    unidades: [
      {
        numero: 1,
        titulo: "Unidad 1: Configuración Inicial de Syscol y Arquitectura de Evaluaciones",
        horas: 10,
        descripcion:
          "Introducción a la interfaz de Syscol, estructura de cursos/matrícula SIGE y parametrización de tablas de especificaciones asociadas a Objetivos de Aprendizaje (OA).",
        resultadosAprendizaje: [
          "Configurar cursos, nóminas de estudiantes y asignaturas dentro de Syscol sin errores de importación.",
          "Vincular preguntas de pruebas diagnósticas y sumativas con sus respectivos ejes temáticos y habilidades cognitivas.",
        ],
        video: {
          titulo: "Cápsula 1.1: Recorrido guiado por Syscol y carga de matriz curricular",
          duracion: "18:40 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 1 · VIDEO",
            "Configuración y Matriz Curricular en Syscol",
            "#1e3a8a"
          ),
          resumen:
            "Demostración paso a paso de cómo estructurar una evaluación institucional y cargar su tabla de especificaciones en menos de 10 minutos.",
        },
        pdfs: [
          {
            titulo: "Clase 01 - Manual Operativo de Configuración Syscol.pdf",
            tipo: "Clase PDF",
            tamano: "1.4 MB",
            url: "#descarga-clase-1-syscol",
          },
          {
            titulo: "Guía Práctica 01 - Construcción de Tabla de Especificaciones OA.pdf",
            tipo: "Guía Práctica",
            tamano: "890 KB",
            url: "#descarga-guia-1-syscol",
          },
          {
            titulo: "Plantilla Excel - Importación Masiva de Nómina SIGE a Syscol.xlsx",
            tipo: "Plantilla Editable",
            tamano: "240 KB",
            url: "#descarga-plantilla-sige",
          },
        ],
      },
      {
        numero: 2,
        titulo: "Unidad 2: Digitalización, Corrección Automatizada y Control de Calidad",
        horas: 10,
        descripcion:
          "Procedimientos para la aplicación de instrumentos impresos (lectura óptica/cámara) y online, validación de respuestas omitidas y depuración de datos.",
        resultadosAprendizaje: [
          "Ejecutar la captura y lectura automatizada de hojas de respuesta con 100% de precisión.",
          "Detectar ítems con anomalías psicométricas o errores de clave antes de publicar resultados.",
        ],
        video: {
          titulo: "Cápsula 2.1: Captura óptica de hojas de respuesta y auditoría de datos",
          duracion: "22:15 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 2 · VIDEO",
            "Captura Óptica y Corrección Automatizada",
            "#0f766e"
          ),
          resumen:
            "Cómo escanear lotes completos de pruebas de un nivel en minutos y corregir alertas de lectura.",
        },
        pdfs: [
          {
            titulo: "Clase 02 - Protocolo de Aplicación y Lectura Óptica Escolar.pdf",
            tipo: "Clase PDF",
            tamano: "1.8 MB",
            url: "#descarga-clase-2-syscol",
          },
          {
            titulo: "Guía Práctica 02 - Solución de Errores Frecuentes en Captura.pdf",
            tipo: "Guía Práctica",
            tamano: "720 KB",
            url: "#descarga-guia-2-syscol",
          },
        ],
      },
      {
        numero: 3,
        titulo: "Unidad 3: Lectura Estratégica de Reportes UTP y Estándares de Aprendizaje",
        horas: 10,
        descripcion:
          "Análisis profundo de gráficos de distribución por estándar (Adecuado, Elemental, Insuficiente), comparativos entre cursos paralelos y desglose por habilidad.",
        resultadosAprendizaje: [
          "Identificar los 5 Objetivos de Aprendizaje más descendidos por curso y asignatura en un solo clic.",
          "Cruzar resultados de evaluaciones internas con proyecciones SIMCE y PAES del establecimiento.",
        ],
        video: {
          titulo: "Cápsula 3.1: Cómo leer el tablero UTP para detectar brechas críticas",
          duracion: "25:10 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 3 · VIDEO",
            "Análisis de Reportes UTP y Brechas SIMCE/PAES",
            "#312e81"
          ),
          resumen:
            "Análisis de un caso real de colegio chileno: cómo pasar del gráfico de barras a la decisión pedagógica concreta.",
        },
        pdfs: [
          {
            titulo: "Clase 03 - Interpretación de Indicadores y Estadísticas Educativas.pdf",
            tipo: "Clase PDF",
            tamano: "2.1 MB",
            url: "#descarga-clase-3-syscol",
          },
          {
            titulo: "Guía Práctica 03 - Pauta de Análisis de Resultados para Departamentos.pdf",
            tipo: "Guía Práctica",
            tamano: "950 KB",
            url: "#descarga-guia-3-syscol",
          },
        ],
      },
      {
        numero: 4,
        titulo: "Unidad 4: Diseño del Plan Remedial y Presentación al Consejo Escolar",
        horas: 10,
        descripcion:
          "Transformación de los reportes de Syscol en compromisos de aula, re-enseñanza focalizada y evidencias verificables para el PME y la Superintendencia.",
        resultadosAprendizaje: [
          "Elaborar el Informe Ejecutivo UTP trimestral exportando datos limpios desde Syscol.",
          "Diseñar un plan remedial de 4 semanas con metas cuantificables de recuperación de aprendizajes.",
        ],
        video: {
          titulo: "Cápsula 4.1: Del dato al Plan Remedial en el PME del Colegio",
          duracion: "19:50 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 4 · VIDEO",
            "Diseño de Planes Remediales y Reporte PME",
            "#1e293b"
          ),
          resumen:
            "Cómo presentar los resultados al cuerpo docente de forma constructiva y definir acciones remediales medibles.",
        },
        pdfs: [
          {
            titulo: "Clase 04 - Toma de Decisiones Basada en Datos y Liderazgo UTP.pdf",
            tipo: "Clase PDF",
            tamano: "1.6 MB",
            url: "#descarga-clase-4-syscol",
          },
          {
            titulo: "Plantilla Oficial - Plan de Acción Remedial Post-Evaluación UTP.docx",
            tipo: "Plantilla Editable",
            tamano: "410 KB",
            url: "#descarga-plantilla-remedial",
          },
        ],
      },
    ],
    clasesOnline: [
      {
        sesion: "Sesión Sincrónica 01",
        titulo: "Taller en Vivo: Configuración y Carga de Primera Evaluación del Colegio",
        modalidad: "Zoom / Google Meet en Vivo",
        horarioReferencial: "Martes · 16:30 a 18:00 hrs (Queda grabada en Moodle)",
        relator: "Mg. Angel Eastman",
        estado: "Grabación Disponible",
        linkSala: MOODLE_URL,
      },
      {
        sesion: "Sesión Sincrónica 02",
        titulo: "Clínica de Datos: Revisión de Reportes Reales y Plan Remedial UTP",
        modalidad: "Taller Sincrónico Práctico",
        horarioReferencial: "Jueves · 16:30 a 18:00 hrs (Con datos del establecimiento)",
        relator: "Mg. Angel Eastman",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
    ],
    evaluaciones: [
      {
        titulo: "Evaluación Diagnóstica Inicial",
        tipo: "Diagnóstica",
        ponderacion: "Sin nota (Obligatoria)",
        requisito: "Completar al iniciar la Unidad 1 en Moodle",
        descripcion:
          "Breve cuestionario de 10 preguntas para conocer el nivel de familiaridad previo del docente con plataformas de análisis de datos.",
      },
      {
        titulo: "Cuestionarios Formativos (Unidades 1 a 3)",
        tipo: "Formativa (Quiz)",
        ponderacion: "40% de la nota final",
        requisito: "Corrección automática en Moodle (2 intentos permitidos)",
        descripcion:
          "Preguntas de selección múltiple basadas en las cápsulas de video y los PDFs de cada unidad.",
      },
      {
        titulo: "Trabajo Práctico Aplicado: Informe Remedial con Datos de Syscol",
        tipo: "Trabajo Aplicado",
        ponderacion: "60% de la nota final",
        requisito: "Nota mínima de aprobación 4.0 (Escala 1.0 a 7.0) + 75% avance",
        descripcion:
          "Elaboración de una ficha remedial de 2 páginas a partir de un reporte de resultados descargado desde Syscol, lista para aplicar en su colegio.",
      },
    ],
  },
  {
    id: 2,
    codigoSence: "SENCE 12-38-0149-52",
    categoria: "Liderazgo y UTP",
    titulo: "Diplomado en Liderazgo Pedagógico y Gestión Directiva Escolar",
    precio: 280000,
    horas: 120,
    modalidad: "E-Learning Asincrónico + Tutorías Sincrónicas en Moodle",
    certificacion: "Certificado Oficial SENCE y Acreditación OTEC (Alineado a MBDL)",
    financiamiento: "Ley SEP (PME) · Franquicia Tributaria SENCE · Orden de Compra",
    dirigidoA: "Directores, Jefes UTP, Inspectores Generales, Coordinadores de Ciclo y Sostenedores.",
    relatorNombre: "Equipo Directivo EducaResponde",
    relatorCargo: "Consultores Senior en Gestión Escolar y Marco para la Buena Dirección",
    introduccion:
      "Programa ejecutivo diseñado para fortalecer las capacidades de conducción técnico-pedagógica e institucional del equipo directivo. Combina cápsulas audiovisuales de bajo consumo de datos, manuales normativos en PDF, talleres en vivo y acompañamiento práctico para articular el PME con el presupuesto SEP/FAEP.",
    aprendizajes: [
      "Diseñar, monitorear y evaluar metas del Plan de Mejoramiento Educativo (PME) vinculadas a presupuesto SEP.",
      "Implementar protocolos de observación de aula y retroalimentación formativa para el cuerpo docente.",
      "Liderar procesos de mejora del clima organizacional y convivencia escolar bajo normativa vigente.",
    ],
    unidades: [
      {
        numero: 1,
        titulo: "Unidad 1: Marco para la Buena Dirección y Liderazgo Escolar (MBDL)",
        horas: 30,
        descripcion:
          "Dimensiones del liderazgo efectivo en colegios chilenos, construcción de visión estratégica compartida y conducción de equipos directivos.",
        resultadosAprendizaje: [
          "Diagnosticar las prácticas de liderazgo del equipo directivo según los estándares del MBDL.",
          "Definir metas anuales de gestión directiva alineadas al PEI del establecimiento.",
        ],
        video: {
          titulo: "Cápsula 1.1: Las 5 dimensiones del Marco para la Buena Dirección en la práctica",
          duracion: "24:00 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 1 · VIDEO",
            "Marco para la Buena Dirección (MBDL)",
            "#0f172a"
          ),
          resumen:
            "Cómo traducir los estándares ministeriales de liderazgo en rutinas semanales de gestión escolar.",
        },
        pdfs: [
          {
            titulo: "Clase 01 - Liderazgo Escolar Efectivo y Normativa MBDL.pdf",
            tipo: "Clase PDF",
            tamano: "2.3 MB",
            url: "#descarga-mbdl-1",
          },
          {
            titulo: "Guía Práctica 01 - Autodiagnóstico de Prácticas Directivas.pdf",
            tipo: "Guía Práctica",
            tamano: "1.1 MB",
            url: "#descarga-mbdl-guia",
          },
        ],
      },
      {
        numero: 2,
        titulo: "Unidad 2: Gestión Estratégica del PME y Recursos Ley SEP",
        horas: 30,
        descripcion:
          "Articulación entre diagnóstico institucional, acciones del PME, uso eficiente de la Subvención Escolar Preferencial y rendición ante Superintendencia.",
        resultadosAprendizaje: [
          "Vincular cada acción del PME con indicadores verificables y gasto elegible Ley SEP.",
          "Prevenir observaciones administrativas en auditorías de la Superintendencia de Educación.",
        ],
        video: {
          titulo: "Cápsula 2.1: Articulación PME-SEP y criterios de elegibilidad del gasto",
          duracion: "27:30 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 2 · VIDEO",
            "Articulación Estratégica PME y Ley SEP",
            "#1e3a8a"
          ),
          resumen:
            "Revisión de casos prácticos sobre qué inversiones y contrataciones son 100% aprobadas con fondos SEP.",
        },
        pdfs: [
          {
            titulo: "Clase 02 - Manual de Gestión Financiera y Pedagógica Ley SEP.pdf",
            tipo: "Clase PDF",
            tamano: "2.8 MB",
            url: "#descarga-pme-2",
          },
          {
            titulo: "Plantilla Excel - Matriz de Seguimiento Presupuestario PME-SEP.xlsx",
            tipo: "Plantilla Editable",
            tamano: "380 KB",
            url: "#descarga-matriz-sep",
          },
        ],
      },
      {
        numero: 3,
        titulo: "Unidad 3: Acompañamiento al Aula y Retroalimentación Docente",
        horas: 30,
        descripcion:
          "Diseño de ciclos de observación de clases, pautas consensuadas con el equipo docente y conversaciones de retroalimentación formativa.",
        resultadosAprendizaje: [
          "Implementar un calendario anual de observación de aula formativa sin resistencia docente.",
          "Conducir reuniones de retroalimentación pedagógica centradas en la evidencia de aprendizaje.",
        ],
        video: {
          titulo: "Cápsula 3.1: Cómo realizar una retroalimentación docente de alto impacto",
          duracion: "21:15 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 3 · VIDEO",
            "Observación de Aula y Retroalimentación UTP",
            "#065f46"
          ),
          resumen:
            "Simulación de una entrevista de retroalimentación post-observación entre Jefe UTP y docente.",
        },
        pdfs: [
          {
            titulo: "Clase 03 - Liderazgo Pedagógico y Acompañamiento Docente.pdf",
            tipo: "Clase PDF",
            tamano: "1.9 MB",
            url: "#descarga-aula-3",
          },
          {
            titulo: "Plantilla Editable - Rúbrica de Observación de Aula y Bitácora UTP.docx",
            tipo: "Plantilla Editable",
            tamano: "510 KB",
            url: "#descarga-rubrica-aula",
          },
        ],
      },
      {
        numero: 4,
        titulo: "Unidad 4: Clima Organizacional, Convivencia y Gestión del Cambio",
        horas: 30,
        descripcion:
          "Estrategias de liderazgo para fortalecer el bienestar docente, gestionar conflictos institucionales y movilizar compromisos de mejora.",
        resultadosAprendizaje: [
          "Aplicar protocolos de resolución colaborativa de conflictos en equipos educativos.",
          "Instalación de comunidades profesionales de aprendizaje (CPA) en el establecimiento.",
        ],
        video: {
          titulo: "Cápsula 4.1: Comunidades Profesionales de Aprendizaje y Clima Escolar",
          duracion: "20:05 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 4 · VIDEO",
            "Clima Organizacional y Gestión del Cambio",
            "#312e81"
          ),
          resumen:
            "Claves para transformar los consejos de profesores administrativos en sesiones de aprendizaje colaborativo.",
        },
        pdfs: [
          {
            titulo: "Clase 04 - Gestión del Clima Laboral y Liderazgo Distribuido.pdf",
            tipo: "Clase PDF",
            tamano: "1.7 MB",
            url: "#descarga-clima-4",
          },
          {
            titulo: "Guía Práctica 04 - Diseño de Comunidades de Aprendizaje en el Colegio.pdf",
            tipo: "Guía Práctica",
            tamano: "840 KB",
            url: "#descarga-guia-cpa",
          },
        ],
      },
    ],
    clasesOnline: [
      {
        sesion: "Seminario Online 01",
        titulo: "Planificación Estratégica del PME y Auditoría de Recursos SEP",
        modalidad: "Zoom / Google Meet en Vivo",
        horarioReferencial: "Miércoles · 17:00 a 18:30 hrs",
        relator: "Director Ejecutivo EducaResponde",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
      {
        sesion: "Seminario Online 02",
        titulo: "Taller de Retroalimentación Docente y Liderazgo Pedagógico UTP",
        modalidad: "Taller Sincrónico Práctico",
        horarioReferencial: "Miércoles · 17:00 a 18:30 hrs",
        relator: "Dirección Académica OTEC",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
    ],
    evaluaciones: [
      {
        titulo: "Controles de Lectura y Caso por Unidad (4 Controles)",
        tipo: "Formativa (Quiz)",
        ponderacion: "50% de la nota final",
        requisito: "Realizados directamente en Aula Virtual Moodle",
        descripcion:
          "Evaluaciones automatizadas de análisis de casos directivos al finalizar cada una de las 4 unidades.",
      },
      {
        titulo: "Proyecto Final de Diplomado: Plan de Fortalecimiento Directivo / PME",
        tipo: "Examen Final SENCE",
        ponderacion: "50% de la nota final",
        requisito: "Nota mínima 4.0 y 75% de participación en plataforma",
        descripcion:
          "Diseño de una propuesta de mejora aplicable directamente a su establecimiento educacional, con retroalimentación personalizada del relator.",
      },
    ],
  },
  {
    id: 3,
    codigoSence: "SENCE 12-38-0244-19",
    categoria: "Evaluación y Aula",
    titulo: "Estrategias de Evaluación Formativa Basada en Datos y Decreto 67",
    precio: 95000,
    horas: 40,
    modalidad: "B-Learning (Cápsulas + PDFs + Sesiones en Vivo en Moodle)",
    certificacion: "Certificado SENCE / Estándares CPEIP MINEDUC",
    financiamiento: "Fondos Ley SEP · Franquicia SENCE · Convenio / Orden de Compra",
    dirigidoA: "Jefes UTP, Evaluadores, Docentes de Educación Básica y Educación Media.",
    relatorNombre: "Dirección Académica UTP",
    relatorCargo: "Especialista en Currículum Nacional y Evaluación Decreto 67/2018",
    introduccion:
      "Curso eminentemente práctico diseñado para actualizar el Reglamento de Evaluación del colegio y las prácticas de aula bajo el Decreto 67. Incluye banco de rúbricas descargables en PDF/Word, cápsulas en video de bajo consumo y talleres prácticos.",
    aprendizajes: [
      "Implementar el Decreto 67 en el aula integrando evaluación formativa y sumativa con sentido pedagógico.",
      "Construir rúbricas analíticas, listas de cotejo y escalas de apreciación válidas y confiables.",
      "Aplicar protocolos de acompañamiento para estudiantes en situación de riesgo de repitencia.",
    ],
    unidades: [
      {
        numero: 1,
        titulo: "Unidad 1: Fundamentos y Exigencias Prácticas del Decreto 67/2018",
        horas: 14,
        descripcion:
          "Eliminación de la eximición, promoción acompañada, actualización del Reglamento Interno de Evaluación y rol del Consejo de Profesores.",
        resultadosAprendizaje: [
          "Alinear el Reglamento de Evaluación del colegio con las disposiciones obligatorias del Decreto 67.",
        ],
        video: {
          titulo: "Cápsula 1.1: Claves normativas y pedagógicas del Decreto 67",
          duracion: "19:20 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 1 · VIDEO",
            "Implementación Práctica del Decreto 67",
            "#1e3a8a"
          ),
          resumen:
            "Explicación clara de los artículos críticos del Decreto 67 ante fiscalizaciones y cómo implementarlos sin sobrecarga docente.",
        },
        pdfs: [
          {
            titulo: "Clase 01 - Guía Comentada Decreto 67 MINEDUC para Docentes.pdf",
            tipo: "Normativa MINEDUC",
            tamano: "1.5 MB",
            url: "#descarga-d67-1",
          },
          {
            titulo: "Plantilla Editable - Protocolo de Acompañamiento Pedagógico Decreto 67.docx",
            tipo: "Plantilla Editable",
            tamano: "340 KB",
            url: "#descarga-protocolo-d67",
          },
        ],
      },
      {
        numero: 2,
        titulo: "Unidad 2: Construcción de Rúbricas e Instrumentos de Evaluación Auténtica",
        horas: 14,
        descripcion:
          "Metodología paso a paso para redactar descriptores de desempeño claros, objetivos y alineados a los indicadores de evaluación del currículum.",
        resultadosAprendizaje: [
          "Diseñar rúbricas analíticas y holísticas que reduzcan la subjetividad y el tiempo de corrección.",
        ],
        video: {
          titulo: "Cápsula 2.1: Taller de diseño de rúbricas alineadas a OA",
          duracion: "23:45 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 2 · VIDEO",
            "Construcción de Rúbricas e Instrumentos",
            "#0f766e"
          ),
          resumen:
            "Cómo construir una rúbrica reutilizable por departamento en 15 minutos.",
        },
        pdfs: [
          {
            titulo: "Clase 02 - Manual de Diseño de Rúbricas y Evaluación Auténtica.pdf",
            tipo: "Clase PDF",
            tamano: "2.0 MB",
            url: "#descarga-d67-2",
          },
          {
            titulo: "Banco Descargable - 35 Rúbricas Editables para Básica y Media.pdf",
            tipo: "Guía Práctica",
            tamano: "3.1 MB",
            url: "#descarga-banco-rubricas",
          },
        ],
      },
      {
        numero: 3,
        titulo: "Unidad 3: Retroalimentación Formativa y Estrategias de Salida en Aula",
        horas: 12,
        descripcion:
          "Uso de tickets de salida, autoevaluación, coevaluación y retroalimentación descriptiva que impulsa la metacognición del estudiante.",
        resultadosAprendizaje: [
          "Incorporar rutinas breves de evaluación formativa en los últimos 10 minutos de cada clase.",
        ],
        video: {
          titulo: "Cápsula 3.1: Tickets de salida y retroalimentación efectiva en 10 minutos",
          duracion: "17:30 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 3 · VIDEO",
            "Retroalimentación Formativa y Tickets de Salida",
            "#312e81"
          ),
          resumen:
            "Ejemplos reales de tickets de salida físicos y digitales aplicables en cualquier asignatura.",
        },
        pdfs: [
          {
            titulo: "Clase 03 - Estrategias de Retroalimentación Efectiva en el Aula.pdf",
            tipo: "Clase PDF",
            tamano: "1.4 MB",
            url: "#descarga-d67-3",
          },
          {
            titulo: "Guía Práctica 03 - Kit de 20 Tickets de Salida Imprimibles.pdf",
            tipo: "Guía Práctica",
            tamano: "1.2 MB",
            url: "#descarga-tickets-salida",
          },
        ],
      },
    ],
    clasesOnline: [
      {
        sesion: "Taller en Vivo Único",
        titulo: "Revisión de Instrumentos y Rúbricas creadas por el Equipo Docente",
        modalidad: "Taller Sincrónico Práctico",
        horarioReferencial: "Jueves · 16:00 a 17:30 hrs",
        relator: "Especialista en Evaluación EducaResponde",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
    ],
    evaluaciones: [
      {
        titulo: "Quiz Formativo Decreto 67 y Criterios de Evaluación",
        tipo: "Formativa (Quiz)",
        ponderacion: "40% de la nota final",
        requisito: "Completar en Aula Virtual Moodle",
        descripcion: "Evaluación automatizada de 15 preguntas sobre aplicación del Decreto 67.",
      },
      {
        titulo: "Entrega Práctica: Diseño de Rúbrica Analítica para su Asignatura",
        tipo: "Trabajo Aplicado",
        ponderacion: "60% de la nota final",
        requisito: "Nota mínima 4.0",
        descripcion:
          "El docente entrega una rúbrica lista para utilizar en su próximo mes de clases.",
      },
    ],
  },
  {
    id: 4,
    codigoSence: "SENCE 12-38-0309-14",
    categoria: "Inclusión y Convivencia",
    titulo: "Diseño Universal para el Aprendizaje (DUA), PIE y Gestión de Aula Inclusiva",
    precio: 115000,
    horas: 60,
    modalidad: "E-Learning en Aula Virtual Moodle + Tutoría Sincrónica",
    certificacion: "Certificado SENCE / Normativa Decreto 83 y Ley TEA N° 21.545",
    financiamiento: "Fondos PIE · Ley SEP · Franquicia Tributaria SENCE",
    dirigidoA: "Docentes de Aula, Educadores Diferenciales, Equipos PIE y Duplas Psicosociales.",
    relatorNombre: "Coordinación Inclusión & PIE",
    relatorCargo: "Especialista en Educación Diferencial, Decreto 83 y Ley TEA",
    introduccion:
      "Programa integral actualizado a la Ley TEA (N° 21.545) y Decreto 83. Entrega herramientas prácticas de co-enseñanza, protocolos de desregulación emocional y conductual (DEC) y formatos editables de PACI y PAI listos para implementar en su colegio.",
    aprendizajes: [
      "Aplicar los 3 principios del DUA en la planificación diversificada de aula sin duplicar el trabajo docente.",
      "Elaborar planes de adecuación curricular individual (PACI) y planes de apoyo individual (PAI) conforme al Decreto 83.",
      "Ejecutar protocolos de prevención y contención frente a episodios de Desregulación Emocional y Conductual (DEC) bajo Ley TEA.",
    ],
    unidades: [
      {
        numero: 1,
        titulo: "Unidad 1: Decreto 83, Principios DUA y Planificación Diversificada",
        horas: 20,
        descripcion:
          "Múltiples formas de implicación, representación y acción/expresión aplicadas a las asignaturas del currículum nacional.",
        resultadosAprendizaje: [
          "Transformar una planificación tradicional en una planificación diversificada DUA.",
        ],
        video: {
          titulo: "Cápsula 1.1: Cómo aplicar las pautas DUA en aulas con alta diversidad",
          duracion: "21:40 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 1 · VIDEO",
            "Planificación Diversificada DUA y Decreto 83",
            "#065f46"
          ),
          resumen:
            "Estrategias concretas para diversificar materiales y evaluaciones en cursos de 35 a 45 estudiantes.",
        },
        pdfs: [
          {
            titulo: "Clase 01 - Manual Práctico de Diseño Universal para el Aprendizaje (DUA).pdf",
            tipo: "Clase PDF",
            tamano: "2.2 MB",
            url: "#descarga-dua-1",
          },
          {
            titulo: "Plantilla Editable - Formato de Planificación Diversificada DUA.docx",
            tipo: "Plantilla Editable",
            tamano: "420 KB",
            url: "#descarga-plantilla-dua",
          },
        ],
      },
      {
        numero: 2,
        titulo: "Unidad 2: Co-Enseñanza Efectiva Aula Regular - PIE y Elaboración de PACI/PAI",
        horas: 20,
        descripcion:
          "Modelos de trabajo colaborativo entre profesor de asignatura y educador diferencial, registro en libro de clases digital y criterios para PACI.",
        resultadosAprendizaje: [
          "Completar correctamente los formularios PACI, PAI y bitácoras de trabajo colaborativo PIE.",
        ],
        video: {
          titulo: "Cápsula 2.1: Modelos de co-enseñanza y redacción de PACI sin errores",
          duracion: "24:10 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 2 · VIDEO",
            "Co-Enseñanza PIE y Formatos PACI / PAI",
            "#1e3a8a"
          ),
          resumen:
            "Paso a paso para documentar las adecuaciones curriculares de acceso y a los objetivos de aprendizaje.",
        },
        pdfs: [
          {
            titulo: "Clase 02 - Co-Enseñanza y Adecuaciones Curriculares Decreto 83.pdf",
            tipo: "Clase PDF",
            tamano: "1.8 MB",
            url: "#descarga-dua-2",
          },
          {
            titulo: "Kit Descargable - Formatos Oficiales PACI y PAI Editables.docx",
            tipo: "Plantilla Editable",
            tamano: "610 KB",
            url: "#descarga-kit-paci",
          },
        ],
      },
      {
        numero: 3,
        titulo: "Unidad 3: Ley TEA (N° 21.545) y Protocolo de Desregulación Emocional (DEC)",
        horas: 20,
        descripcion:
          "Obligaciones del establecimiento bajo la Ley de Autismo, ajustes razonables, acompañamiento a familias y actuación en fases de crisis DEC.",
        resultadosAprendizaje: [
          "Activar correctamente las 3 etapas del Protocolo DEC resguardando la integridad del estudiante y la comunidad.",
        ],
        video: {
          titulo: "Cápsula 3.1: Protocolo DEC y abordaje práctico de la Ley TEA en colegios",
          duracion: "26:00 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 3 · VIDEO",
            "Ley TEA N° 21.545 y Protocolo DEC Escolar",
            "#312e81"
          ),
          resumen:
            "Guía práctica de contención emocional, bitácora de registro y comunicación con apoderados.",
        },
        pdfs: [
          {
            titulo: "Clase 03 - Implementación de la Ley TEA y Ajustes Razonables.pdf",
            tipo: "Normativa MINEDUC",
            tamano: "1.9 MB",
            url: "#descarga-tea-3",
          },
          {
            titulo: "Guía Práctica 03 - Protocolo DEC y Ficha de Registro de Episodios.pdf",
            tipo: "Guía Práctica",
            tamano: "980 KB",
            url: "#descarga-protocolo-dec",
          },
        ],
      },
    ],
    clasesOnline: [
      {
        sesion: "Taller Clínico PIE",
        titulo: "Estudio de Casos Reales: PACI y Manejo de Desregulación Emocional (DEC)",
        modalidad: "Zoom / Google Meet en Vivo",
        horarioReferencial: "Martes · 16:30 a 18:00 hrs",
        relator: "Coordinación Inclusión & PIE",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
    ],
    evaluaciones: [
      {
        titulo: "Cuestionarios Normativos Decreto 83 y Ley TEA",
        tipo: "Formativa (Quiz)",
        ponderacion: "40% de la nota final",
        requisito: "En Aula Virtual Moodle",
        descripcion: "Validación de conocimientos sobre normativa de inclusión y protocolo DEC.",
      },
      {
        titulo: "Caso Aplicado: Diseño de Planificación DUA o Ficha PACI",
        tipo: "Examen Final SENCE",
        ponderacion: "60% de la nota final",
        requisito: "Nota mínima 4.0",
        descripcion: "Aplicación práctica en un curso o caso real del establecimiento.",
      },
    ],
  },
  {
    id: 5,
    codigoSence: "CÓDIGO OTEC ER-2026-05",
    categoria: "Proyectos y Fondos",
    titulo: "Formulación Técnica y Postulación a Proyectos de Infraestructura Escolar",
    precio: 150000,
    horas: 80,
    modalidad: "E-Learning Sincrónico + Taller en Aula Virtual Moodle",
    certificacion: "Certificado de Especialización Técnica EducaResponde",
    financiamiento: "Orden de Compra Institucional · Subvención General / FAEP",
    dirigidoA: "Equipos Directivos, Administradores Escolares, Encargados de Proyectos DAEM/SLEP.",
    relatorNombre: "Coordinación de Proyectos Públicos",
    relatorCargo: "Arquitecto & Consultor Senior en Fondos MINEDUC y Mercado Público",
    introduccion:
      "Taller especializado que entrega a Sostenedores, Directores y encargados de infraestructura todas las herramientas técnicas, normativas y presupuestarias para formular proyectos escolares admisibles y adjudicar fondos públicos.",
    aprendizajes: [
      "Interpretar la normativa de infraestructura escolar (OGUC, Decreto 548 MINEDUC y accesibilidad universal).",
      "Elaborar especificaciones técnicas, cubicaciones y presupuestos oficiales sin errores de admisibilidad.",
      "Gestionar la postulación, licitación en Mercado Público y rendición financiera sin observaciones.",
    ],
    unidades: [
      {
        numero: 1,
        titulo: "Unidad 1: Normativa de Infraestructura Escolar (Decreto 548 y OGUC)",
        horas: 25,
        descripcion:
          "Estándares de superficie por alumno, ventilación, iluminación, servicios higiénicos, seguridad y ruta de accesibilidad universal.",
        resultadosAprendizaje: [
          "Verificar el cumplimiento normativo de las instalaciones actuales del colegio mediante checklist oficial.",
        ],
        video: {
          titulo: "Cápsula 1.1: Requisitos críticos del Decreto 548 y Accesibilidad Universal",
          duracion: "22:30 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 1 · VIDEO",
            "Normativa Decreto 548 y Accesibilidad Escolar",
            "#0f172a"
          ),
          resumen:
            "Cómo auditar la infraestructura de tu colegio para detectar mejoras financiables por el Estado.",
        },
        pdfs: [
          {
            titulo: "Clase 01 - Compendio Normativo de Infraestructura Escolar MINEDUC.pdf",
            tipo: "Normativa MINEDUC",
            tamano: "2.6 MB",
            url: "#descarga-infra-1",
          },
          {
            titulo: "Guía Práctica 01 - Checklist de Auditoría de Infraestructura Escolar.pdf",
            tipo: "Guía Práctica",
            tamano: "1.1 MB",
            url: "#descarga-checklist-infra",
          },
        ],
      },
      {
        numero: 2,
        titulo: "Unidad 2: Formulación Técnica, Cubicación y Presupuesto de Obra Escolar",
        horas: 30,
        descripcion:
          "Elaboración de memoria explicativa, especificaciones técnicas (EETT), itemizado presupuestario, APU y cronograma Carta Gantt.",
        resultadosAprendizaje: [
          "Construir el expediente técnico y presupuesto detallado de un proyecto de conservación o ampliación.",
        ],
        video: {
          titulo: "Cápsula 2.1: Cómo armar el itemizado presupuestario y las EETT",
          duracion: "28:15 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 2 · VIDEO",
            "Especificaciones Técnicas y Presupuesto",
            "#1e3a8a"
          ),
          resumen:
            "Revisión de un presupuesto real adjudicado por $185M CLP en fondos de infraestructura escolar.",
        },
        pdfs: [
          {
            titulo: "Clase 02 - Formulación de Especificaciones Técnicas y Presupuestos.pdf",
            tipo: "Clase PDF",
            tamano: "2.4 MB",
            url: "#descarga-infra-2",
          },
          {
            titulo: "Plantilla Excel - Itemizado Presupuestario y Carta Gantt MINEDUC.xlsx",
            tipo: "Plantilla Editable",
            tamano: "490 KB",
            url: "#descarga-plantilla-presupuesto",
          },
        ],
      },
      {
        numero: 3,
        titulo: "Unidad 3: Postulación a Fondos, Licitación ChileCompra y Rendición",
        horas: 25,
        descripcion:
          "Carpeta jurídica y administrativa, admisibilidad sin observaciones, bases de licitación y cierre financiero.",
        resultadosAprendizaje: [
          "Superar con éxito la etapa de admisibilidad técnica y legal en convocatorias MINEDUC y GORE.",
        ],
        video: {
          titulo: "Cápsula 3.1: Los 10 errores que dejan fuera un proyecto en la admisibilidad",
          duracion: "20:45 min",
          urlVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          thumbnailUrl: crearMiniaturaLivianaSVG(
            "UNIDAD 3 · VIDEO",
            "Admisibilidad, Licitación y Rendición de Fondos",
            "#0f766e"
          ),
          resumen:
            "Cómo blindar la carpeta administrativa y técnica antes de ingresarla a postulación.",
        },
        pdfs: [
          {
            titulo: "Clase 03 - Gestión de Licitaciones y Rendición de Fondos Públicos.pdf",
            tipo: "Clase PDF",
            tamano: "1.9 MB",
            url: "#descarga-infra-3",
          },
        ],
      },
    ],
    clasesOnline: [
      {
        sesion: "Taller de Revisión de Proyectos",
        titulo: "Asesoría en Vivo: Revisión del Anteproyecto de su Establecimiento",
        modalidad: "Taller Sincrónico Práctico",
        horarioReferencial: "Viernes · 15:30 a 17:30 hrs",
        relator: "Arquitecto Consultor EducaResponde",
        estado: "Programada",
        linkSala: MOODLE_URL,
      },
    ],
    evaluaciones: [
      {
        titulo: "Entrega de Perfil de Proyecto y Presupuesto Preliminar",
        tipo: "Trabajo Aplicado",
        ponderacion: "100% de la nota final",
        requisito: "Revisión técnica aprobada por el relator",
        descripcion:
          "El participante termina el curso con el perfil técnico y presupuesto base de la mejora para su colegio.",
      },
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
  const [cursoExpandido, setCursoExpandido] = useState<number | null>(1);
  const [tabActivaPorCurso, setTabActivaPorCurso] = useState<Record<number, TabCurso>>({
    1: "unidades",
  });
  const [unidadActivaPorCurso, setUnidadActivaPorCurso] = useState<Record<number, number>>({
    1: 1,
  });
  const [reproduciendoVideoKey, setReproduciendoVideoKey] = useState<string | null>(null);
  const [pdfNotificacion, setPdfNotificacion] = useState<string | null>(null);

  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [carrito, setCarrito] = useState<ItemCotizacion[]>([]);
  const [mostrarFormularioOC, setMostrarFormularioOC] = useState(false);
  const [cotizacionGenerada, setCotizacionGenerada] =
    useState<SolicitudCotizacionB2B | null>(null);

  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });

  const cursosFiltrados =
    filtroCategoria === "Todos"
      ? listaCursos
      : listaCursos.filter((c) => c.categoria === filtroCategoria);

  const getTabActiva = (cursoId: number): TabCurso =>
    tabActivaPorCurso[cursoId] || "introduccion";

  const setTabActiva = (cursoId: number, tab: TabCurso) => {
    setTabActivaPorCurso((prev) => ({ ...prev, [cursoId]: tab }));
  };

  const getUnidadActiva = (cursoId: number): number =>
    unidadActivaPorCurso[cursoId] || 1;

  const setUnidadActiva = (cursoId: number, numeroUnidad: number) => {
    setUnidadActivaPorCurso((prev) => ({ ...prev, [cursoId]: numeroUnidad }));
    setReproduciendoVideoKey(null);
  };

  const agregarAlCarrito = (curso: CursoOTEC) => {
    setCotizacionGenerada(null);
    if (!carrito.find((item) => item.curso.id === curso.id)) {
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
        {/* Barra superior de navegación y acceso al Campus Moodle */}
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
              <Wifi className="h-3.5 w-3.5 text-emerald-600" />
              Miniaturas de Video con Ahorro de Datos Escolares
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-yellow-600" />
              Elegibles Ley SEP · SENCE · Orden de Compra
            </span>
            <a
              href={MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-slate-800"
            >
              <span>Entrar al Aula Virtual Moodle</span>
              <ExternalLink className="h-3.5 w-3.5 text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Notificación flotante cuando se previsualiza un PDF de muestra */}
        {pdfNotificacion && (
          <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-yellow-500/50 bg-yellow-50 px-5 py-3.5 text-xs font-medium text-slate-900 shadow-sm">
            <div className="flex items-center gap-2.5">
              <FileText className="h-5 w-5 shrink-0 text-yellow-600" />
              <span>
                <strong>Vista previa comercial ({pdfNotificacion}):</strong> Este documento PDF descargable está disponible a texto completo para todos los docentes matriculados dentro del{" "}
                <a
                  href={MOODLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold underline"
                >
                  Aula Virtual Moodle
                </a>
                .
              </span>
            </div>
            <button
              type="button"
              onClick={() => setPdfNotificacion(null)}
              className="cursor-pointer rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white"
            >
              Entendido
            </button>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
          {/* COLUMNA IZQUIERDA: CATÁLOGO CON ESTRUCTURA DE AULA VIRTUAL PROFESIONAL */}
          <div>
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Programas OTEC &amp; Estructura de Aula Virtual
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Catálogo de Capacitaciones y Malla por Unidades
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              Cada programa cuenta con un diseño instruccional completo: <strong className="font-semibold text-slate-900">Introducción, Unidades con Cápsulas de Video (miniatura liviana de bajo consumo), Guías y Clases en PDF, Sesiones Online en Vivo y Sistema de Evaluaciones Certificadas</strong>.
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

            {/* Lista de Cursos */}
            <div className="mt-8 space-y-7">
              {cursosFiltrados.map((curso) => {
                const isExpanded = cursoExpandido === curso.id;
                const enCarrito = carrito.some((item) => item.curso.id === curso.id);
                const tabActiva = getTabActiva(curso.id);
                const numUnidadActiva = getUnidadActiva(curso.id);
                const unidadSeleccionada =
                  curso.unidades.find((u) => u.numero === numUnidadActiva) ||
                  curso.unidades[0];
                const videoKey = `${curso.id}-${unidadSeleccionada.numero}`;

                return (
                  <article
                    key={curso.id}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isExpanded
                        ? "border-slate-900 shadow-xl"
                        : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Cabecera del Curso */}
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
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                            {curso.unidades.length} Unidades · PDFs + Videos + Evaluaciones
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

                    {/* CUERPO EXPANDIBLE: AULA VIRTUAL / MODELO PROFESIONAL DE CAPACITACIÓN */}
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-white">
                        {/* Barra de Pestañas del Modelo de Capacitación */}
                        <div className="flex flex-wrap border-b border-slate-200 bg-slate-100/80 px-4 pt-3 md:px-8 gap-1.5">
                          <button
                            type="button"
                            onClick={() => setTabActiva(curso.id, "introduccion")}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                              tabActiva === "introduccion"
                                ? "border-t-2 border-x border-slate-200 border-t-yellow-500 bg-white text-slate-900 shadow-2xs"
                                : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            }`}
                          >
                            <BookOpen className="h-4 w-4 text-yellow-600" />
                            1. Introducción y Ficha
                          </button>

                          <button
                            type="button"
                            onClick={() => setTabActiva(curso.id, "unidades")}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                              tabActiva === "unidades"
                                ? "border-t-2 border-x border-slate-200 border-t-yellow-500 bg-white text-slate-900 shadow-2xs"
                                : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            }`}
                          >
                            <MonitorPlay className="h-4 w-4 text-yellow-600" />
                            2. Unidades, Videos y PDFs ({curso.unidades.length})
                          </button>

                          <button
                            type="button"
                            onClick={() => setTabActiva(curso.id, "clases_online")}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                              tabActiva === "clases_online"
                                ? "border-t-2 border-x border-slate-200 border-t-yellow-500 bg-white text-slate-900 shadow-2xs"
                                : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            }`}
                          >
                            <Video className="h-4 w-4 text-yellow-600" />
                            3. Clases Online en Vivo ({curso.clasesOnline.length})
                          </button>

                          <button
                            type="button"
                            onClick={() => setTabActiva(curso.id, "evaluaciones")}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                              tabActiva === "evaluaciones"
                                ? "border-t-2 border-x border-slate-200 border-t-yellow-500 bg-white text-slate-900 shadow-2xs"
                                : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            }`}
                          >
                            <ClipboardCheck className="h-4 w-4 text-yellow-600" />
                            4. Evaluaciones y Certificación
                          </button>

                          <button
                            type="button"
                            onClick={() => setTabActiva(curso.id, "soporte")}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                              tabActiva === "soporte"
                                ? "border-t-2 border-x border-slate-200 border-t-yellow-500 bg-white text-slate-900 shadow-2xs"
                                : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            }`}
                          >
                            <HelpCircle className="h-4 w-4 text-yellow-600" />
                            5. Asistencia SENCE y Foro
                          </button>
                        </div>

                        {/* CONTENIDO DE LA PESTAÑA ACTIVA */}
                        <div className="p-6 md:p-8">
                          {/* PESTAÑA 1: INTRODUCCIÓN Y FICHA TÉCNICA */}
                          {tabActiva === "introduccion" && (
                            <div className="space-y-6">
                              <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 md:grid-cols-3">
                                <div className="flex items-start gap-3">
                                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                                  <div>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                      Destinatarios
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
                                      Financiamiento Escolar
                                    </p>
                                    <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-900">
                                      {curso.financiamiento}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-600">
                                  Introducción al Programa de Capacitación
                                </span>
                                <p className="mt-2 text-base leading-relaxed text-slate-700">
                                  {curso.introduccion}
                                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-600">
                                  <span className="font-bold text-slate-900">
                                    Relator(a) Principal:
                                  </span>
                                  <span>
                                    {curso.relatorNombre} — {curso.relatorCargo}
                                  </span>
                                </div>
                              </div>

                              <div>
                                <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                                  Competencias Generales a Desarrollar:
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

                              <div className="flex justify-end">
                                <button
                                  type="button"
                                  onClick={() => setTabActiva(curso.id, "unidades")}
                                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-800"
                                >
                                  <span>Explorar Unidades, Videos y PDFs</span>
                                  <span>→</span>
                                </button>
                              </div>
                            </div>
                          )}

                          {/* PESTAÑA 2: UNIDADES / TÓPICOS CON MINIATURA DE VIDEO LIGERA Y PDFs */}
                          {tabActiva === "unidades" && (
                            <div className="space-y-6">
                              {/* Selector de Unidades / Tópicos */}
                              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
                                {curso.unidades.map((u) => (
                                  <button
                                    key={u.numero}
                                    type="button"
                                    onClick={() => setUnidadActiva(curso.id, u.numero)}
                                    className={`cursor-pointer rounded-xl px-4 py-2.5 text-xs font-extrabold transition-all ${
                                      unidadSeleccionada.numero === u.numero
                                        ? "bg-slate-900 text-yellow-400 shadow-sm"
                                        : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                                    }`}
                                  >
                                    Unidad {u.numero} ({u.horas} hrs)
                                  </button>
                                ))}
                              </div>

                              {/* Detalle de la Unidad Seleccionada */}
                              <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
                                {/* Izquierda: Descripción, Resultados y PDFs Descargables */}
                                <div className="space-y-5">
                                  <div>
                                    <span className="inline-block rounded-md bg-yellow-500/20 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-900">
                                      Tópico / Unidad {unidadSeleccionada.numero} ·{" "}
                                      {unidadSeleccionada.horas} Horas
                                    </span>
                                    <h3 className="mt-2 text-lg font-extrabold text-slate-900 md:text-xl">
                                      {unidadSeleccionada.titulo}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                      {unidadSeleccionada.descripcion}
                                    </p>
                                  </div>

                                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                                      Resultados de Aprendizaje de la Unidad:
                                    </p>
                                    <ul className="mt-2.5 space-y-2">
                                      {unidadSeleccionada.resultadosAprendizaje.map((ra) => (
                                        <li
                                          key={ra}
                                          className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                                        >
                                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-600" />
                                          <span>{ra}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Materiales PDF de las Clases y Guías */}
                                  <div>
                                    <div className="mb-2.5 flex items-center justify-between">
                                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                                        Material de Estudio: Clases PDF y Guías
                                      </h4>
                                      <span className="text-[11px] font-semibold text-slate-500">
                                        {unidadSeleccionada.pdfs.length} archivos
                                      </span>
                                    </div>
                                    <div className="space-y-2.5">
                                      {unidadSeleccionada.pdfs.map((pdf) => (
                                        <div
                                          key={pdf.titulo}
                                          className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-2xs transition-colors hover:border-slate-300"
                                        >
                                          <div className="flex items-center gap-3">
                                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-700 font-extrabold text-[11px] border border-red-200">
                                              PDF
                                            </span>
                                            <div>
                                              <p className="text-xs font-bold text-slate-900 leading-snug">
                                                {pdf.titulo}
                                              </p>
                                              <p className="text-[11px] text-slate-500">
                                                {pdf.tipo} · {pdf.tamano}
                                              </p>
                                            </div>
                                          </div>
                                          <button
                                            type="button"
                                            onClick={() => setPdfNotificacion(pdf.titulo)}
                                            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-900 hover:text-white"
                                          >
                                            <Download className="h-3.5 w-3.5" />
                                            <span>Guía / PDF</span>
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Derecha: Cápsula de Video con Miniatura Ligera (Bajo Consumo de Datos) */}
                                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-md">
                                  <div>
                                    <div className="flex items-center justify-between gap-2 pb-3">
                                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-yellow-400">
                                        <MonitorPlay className="h-4 w-4" />
                                        Cápsula Audiovisual de la Unidad
                                      </span>
                                      <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                                        ⚡ Miniatura Ligera (0 MB precarga)
                                      </span>
                                    </div>

                                    {/* Contenedor de la Miniatura Ligera / Video */}
                                    <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                                      {reproduciendoVideoKey === videoKey ? (
                                        <div className="flex aspect-video flex-col items-center justify-center bg-slate-950 p-6 text-center">
                                          <MonitorPlay className="h-10 w-10 text-yellow-400" />
                                          <p className="mt-3 text-sm font-bold text-white">
                                            {unidadSeleccionada.video.titulo}
                                          </p>
                                          <p className="mt-1 max-w-xs text-xs text-slate-300">
                                            Para proteger el ancho de banda de su establecimiento, el reproductor HD se abre bajo demanda o directo en Moodle.
                                          </p>
                                          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                                            <a
                                              href={unidadSeleccionada.video.urlVideo}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-500 px-4 py-2 text-xs font-extrabold text-slate-900 hover:bg-yellow-400"
                                            >
                                              <Play className="h-3.5 w-3.5 fill-current" />
                                              Abrir Video Externo
                                            </a>
                                            <a
                                              href={MOODLE_URL}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-white hover:bg-slate-700"
                                            >
                                              Ver en Aula Moodle
                                              <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                          </div>
                                        </div>
                                      ) : (
                                        <button
                                          type="button"
                                          onClick={() => setReproduciendoVideoKey(videoKey)}
                                          className="group relative block aspect-video w-full cursor-pointer overflow-hidden text-left"
                                          aria-label={`Reproducir ${unidadSeleccionada.video.titulo}`}
                                        >
                                          <img
                                            src={unidadSeleccionada.video.thumbnailUrl}
                                            alt={unidadSeleccionada.video.titulo}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition-colors group-hover:bg-slate-950/15">
                                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-slate-900 shadow-xl ring-4 ring-yellow-500/30 transition-transform duration-300 group-hover:scale-110">
                                              <Play className="ml-1 h-7 w-7 fill-current" />
                                            </span>
                                          </div>
                                          <span className="absolute right-3 bottom-3 rounded-md bg-slate-950/85 px-2.5 py-1 text-xs font-bold text-white">
                                            {unidadSeleccionada.video.duracion}
                                          </span>
                                        </button>
                                      )}
                                    </div>

                                    <h4 className="mt-4 text-sm font-bold text-white">
                                      {unidadSeleccionada.video.titulo}
                                    </h4>
                                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                                      {unidadSeleccionada.video.resumen}
                                    </p>
                                  </div>

                                  <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                                    <span>Link directo a video + transcripción en Moodle</span>
                                    <a
                                      href={unidadSeleccionada.video.urlVideo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 font-bold text-yellow-400 hover:underline"
                                    >
                                      Link de Video <ExternalLink className="h-3 w-3" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* PESTAÑA 3: CLASES ONLINE EN VIVO (SINCRÓNICAS) */}
                          {tabActiva === "clases_online" && (
                            <div className="space-y-5">
                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                  Sesiones Sincrónicas en Vivo (Zoom / Google Meet integradas en Moodle)
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                  Además de las cápsulas asincrónicas disponibles 24/7, cada programa incluye sesiones en vivo con el relator para resolver casos reales del establecimiento. Todas las sesiones quedan grabadas en el Aula Virtual.
                                </p>
                              </div>

                              <div className="grid gap-4 md:grid-cols-2">
                                {curso.clasesOnline.map((clase) => (
                                  <div
                                    key={clase.sesion}
                                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
                                  >
                                    <div>
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase text-yellow-400">
                                          {clase.sesion}
                                        </span>
                                        <span
                                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                                            clase.estado === "Grabación Disponible"
                                              ? "bg-emerald-100 text-emerald-800"
                                              : "bg-blue-100 text-blue-800"
                                          }`}
                                        >
                                          {clase.estado}
                                        </span>
                                      </div>

                                      <h4 className="mt-3 text-base font-extrabold text-slate-900">
                                        {clase.titulo}
                                      </h4>

                                      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                                        <li className="flex items-center gap-2">
                                          <Calendar className="h-3.5 w-3.5 text-slate-900" />
                                          <span>{clase.horarioReferencial}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <Video className="h-3.5 w-3.5 text-slate-900" />
                                          <span>{clase.modalidad}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <Users className="h-3.5 w-3.5 text-slate-900" />
                                          <span>Relator: {clase.relator}</span>
                                        </li>
                                      </ul>
                                    </div>

                                    <a
                                      href={clase.linkSala}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
                                    >
                                      <Video className="h-4 w-4 text-yellow-500" />
                                      <span>Acceder a Sala / Grabación en Moodle</span>
                                      <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* PESTAÑA 4: EVALUACIONES Y CERTIFICACIÓN */}
                          {tabActiva === "evaluaciones" && (
                            <div className="space-y-5">
                              <div className="grid gap-4 md:grid-cols-3">
                                {curso.evaluaciones.map((ev) => (
                                  <div
                                    key={ev.titulo}
                                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4"
                                  >
                                    <div>
                                      <span className="inline-block rounded-md bg-slate-900 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                                        {ev.tipo}
                                      </span>
                                      <h4 className="mt-2.5 text-sm font-extrabold text-slate-900">
                                        {ev.titulo}
                                      </h4>
                                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                                        {ev.descripcion}
                                      </p>
                                    </div>

                                    <div className="mt-4 border-t border-slate-200 pt-3 text-[11px]">
                                      <div className="flex justify-between font-bold text-slate-900">
                                        <span>Ponderación:</span>
                                        <span>{ev.ponderacion}</span>
                                      </div>
                                      <p className="mt-1 text-slate-500">{ev.requisito}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-col justify-between gap-4 rounded-xl border border-yellow-500/40 bg-yellow-50/70 p-4 sm:flex-row sm:items-center">
                                <div className="flex items-start gap-3">
                                  <Award className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
                                  <div>
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                                      Requisitos Oficiales de Certificación OTEC / SENCE
                                    </p>
                                    <p className="mt-0.5 text-xs text-slate-700">
                                      Nota mínima de aprobación <strong>4.0</strong> (escala 1.0 a 7.0) y avance mínimo del <strong>75%</strong> en actividades obligatorias del Aula Virtual Moodle. Emisión inmediata de diploma con código QR de verificación.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* PESTAÑA 5: ASISTENCIA SENCE, REPORTES UTP Y FORO */}
                          {tabActiva === "soporte" && (
                            <div className="grid gap-4 md:grid-cols-3">
                              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                                <UserCheck className="h-6 w-6 text-slate-900" />
                                <h4 className="mt-2.5 text-sm font-extrabold text-slate-900">
                                  Control de Asistencia SENCE / Libro Digital
                                </h4>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                  Registro automático de conexión en Moodle y compatibilidad con marcaje de asistencia SENCE (Clave Única) para cursos acogidos a Franquicia Tributaria.
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                                <FileSpreadsheet className="h-6 w-6 text-yellow-600" />
                                <h4 className="mt-2.5 text-sm font-extrabold text-slate-900">
                                  Reporte Ejecutivo para Director y Jefe UTP
                                </h4>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                  El establecimiento recibe reportes quincenales en Excel/PDF con el porcentaje de avance, calificaciones y certificados de toda su nómina docente para rendición SEP.
                                </p>
                              </div>

                              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                                <HelpCircle className="h-6 w-6 text-slate-900" />
                                <h4 className="mt-2.5 text-sm font-extrabold text-slate-900">
                                  Foro de Consultas y Tutoría Docente
                                </h4>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                  Cada unidad cuenta con un Foro de Dudas Pedagógicas atendido por el relator en menos de 24 horas hábiles y soporte técnico por WhatsApp.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Pie de Ficha: Botones para Cotizar o Ir a Moodle */}
                          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
                            <a
                              href={MOODLE_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 hover:text-slate-900 hover:underline"
                            >
                              <span>Ver este curso en Aula Virtual Moodle (`moodle.test`)</span>
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>

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
                                : "Inscribir / Cotizar para mi Colegio"}
                            </button>
                          </div>
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
                        Para{" "}
                        <strong className="text-slate-900">
                          {cotizacionGenerada.colegio}
                        </strong>{" "}
                        ({totalCupos} cupos docentes en total).
                      </p>
                    </div>

                    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
                      <p className="font-bold uppercase tracking-wider text-slate-500">
                        Flujo de Activación Moodle:
                      </p>
                      <p className="leading-relaxed text-slate-700">
                        1. Recibirá la cotización formal firmada en{" "}
                        <strong className="text-slate-900">
                          {cotizacionGenerada.email}
                        </strong>
                        .
                      </p>
                      <p className="leading-relaxed text-slate-700">
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
                        <strong className="text-slate-900">
                          aula.educaresponde.cl
                        </strong>{" "}
                        con acceso a todas las unidades, videos, PDFs y evaluaciones.
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
                        <span className="font-bold text-slate-900">
                          {totalCupos} cupos
                        </span>
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
                        El acceso a{" "}
                        <strong className="font-semibold">
                          aula.educaresponde.cl
                        </strong>{" "}
                        se activa para la nómina de docentes inscritos tras confirmar la Orden de Compra o convenio del colegio.
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
                            <option value="Orden de Compra / Directo">
                              Orden de Compra
                            </option>
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
