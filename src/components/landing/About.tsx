import { CheckCircle2, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";

/**
 * EQUIPO DIRECTIVO Y ESPECIALISTAS EDUCARESPONDE
 * Puedes editar fácilmente los nombres, cargos, credenciales, biografías e imágenes aquí:
 */
const team = [
  {
    name: "Dirección General & Gestión Institucional",
    role: "Liderazgo Estratégico, Modelo UTP y Normativa",
    credential: "Especialista en Gestión Escolar, PME y Decreto 67",
    bio: "Lidera el diseño estratégico de planes anuales, Comunidades Profesionales de Aprendizaje (CPA), modelos de gestión para Jefes UTP (Carta Gantt, doble calendario, protocolos de repitencia, RICE y carpeta de evidencias PME / Deprov / Superintendencia).",
    imageUrl:
      "https://ui-avatars.com/api/?name=Direccion+Academica&background=0f172a&color=facc15&size=256&bold=true",
    featured: true,
  },
  {
    name: "Angel Eastman",
    role: "Coordinación de Plataforma Moodle & Analítica Educativa",
    credential: "Especialista en Aula Virtual CPA y Sistema Syscol",
    bio: "Encargado de la plataforma de capacitaciones Moodle, analítica de evaluaciones externas (DIA y ensayos SIMCE), lectura óptica, monitoreo de niveles de logro (Insuficiente, Elemental y Adecuado) y cobertura curricular.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Angel+Eastman&background=f1f5f9&color=0f172a&size=256&bold=true",
    featured: false,
  },
  {
    name: "Equipo de Innovación, STEM y Fomento Lector",
    role: "Especialistas en Metodologías Activas y Laboratorios",
    credential: "STEM · ABP · Socioemocional · Ludotecas",
    bio: "Equipo multidisciplinario a cargo de los laboratorios interactivos en colegios (Teatro, Música, Periodismo, Ciencias y STEM), robótica escolar, recreos interactivos, aprendizaje socioemocional y bibliorecreos.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Equipo+Innovacion&background=f1f5f9&color=0f172a&size=256&bold=true",
    featured: false,
  },
];

export function About() {
  return (
    <section id="nosotros" className="border-t border-slate-200 bg-slate-50/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          {/* Columna Izquierda: Visión y Propuesta de EducaResponde */}
          <div>
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Quiénes Somos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Una solución integral para las necesidades emergentes del sistema educativo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              En <strong className="font-bold text-slate-900">EducaResponde</strong> trabajamos las cuatro dimensiones educativas de la gestión institucional. No sólo entregamos teoría: acompañamos en el aula y en la dirección con modelos base listos para aplicar, especialistas en evaluación externa y experiencias vivenciales para toda la comunidad escolar.
            </p>

            <ul className="mt-8 space-y-4 text-base text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  <strong className="font-bold text-slate-900">Fortalecimiento del Núcleo Pedagógico:</strong>{" "}
                  Comunidades Profesionales de Aprendizaje (CPA) orientadas a lograr aprendizajes profundos e inclusivos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  <strong className="font-bold text-slate-900">Acompañamiento de Especialistas en Aula:</strong>{" "}
                  Docentes expertos en evaluaciones externas (DIA/SIMCE) que guían la implementación y la <em>Restitución del Saber</em>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  <strong className="font-bold text-slate-900">Vinculación con el Medio y Proyectos:</strong>{" "}
                  Articulación con la sociedad, la industria y la educación terciaria mediante Consejos Asesores y postulación estructurada a proyectos.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Insumos y Modelos Base 100% Aplicables desde el Primer Día
                </p>
                <p className="text-xs text-slate-600">
                  Carta Gantt anual, doble calendario de pruebas, protocolos normativos, actas de toma de decisiones y paquetes de clases.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas Ejecutivas del Equipo */}
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.name}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl ${
                  member.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex flex-col gap-5 ${
                    member.featured ? "sm:flex-row sm:items-center" : "items-start"
                  }`}
                >
                  <img
                    src={member.imageUrl}
                    alt={`Retrato ejecutivo de ${member.name}`}
                    className="h-20 w-20 shrink-0 rounded-2xl border-2 border-slate-100 object-cover shadow-sm"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      {member.featured ? (
                        <Briefcase className="h-3.5 w-3.5 text-yellow-600" />
                      ) : (
                        <GraduationCap className="h-3.5 w-3.5 text-yellow-600" />
                      )}
                      {member.credential}
                    </div>
                    <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
