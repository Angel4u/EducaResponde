import { CheckCircle2, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";

/**
 * EQUIPO DIRECTIVO Y ESPECIALISTAS
 * Puedes editar fácilmente los nombres, cargos, credenciales, biografías e imágenes aquí:
 */
const team = [
  {
    name: "Alexander Eastman",
    role: "Director Ejecutivo & Fundador",
    credential: "Dirección Estratégica Educacional",
    bio: "Especialista en gestión escolar, articulación de recursos públicos y liderazgo de proyectos educativos de alto impacto para sostenedores y colegios en Chile.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Alexander+Eastman&background=0f172a&color=facc15&size=256&bold=true",
    featured: true,
  },
  {
    // Reemplazar con el nombre real del Jefe UTP
    name: "Dirección Académica UTP",
    role: "Jefatura de Capacitaciones OTEC",
    credential: "Especialista en Currículum & SENCE",
    bio: "Más de 15 años liderando diseño instruccional, evaluación formativa basada en datos y programas certificados SENCE/CPEIP en Aula Virtual Moodle.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Direccion+UTP&background=f1f5f9&color=0f172a&size=256&bold=true",
    featured: false,
  },
  {
    // Reemplazar con el nombre real del Especialista en Licitaciones
    name: "Coordinación de Proyectos Públicos",
    role: "Especialista en Licitaciones e Infraestructura",
    credential: "Experto Mercado Público & MINEDUC",
    bio: "Consultor senior en formulación técnica de proyectos FAEP/FIE, compras públicas ChileCompra y cumplimiento normativo de infraestructura escolar.",
    imageUrl:
      "https://ui-avatars.com/api/?name=Proyectos+Publicos&background=f1f5f9&color=0f172a&size=256&bold=true",
    featured: false,
  },
];

export function About() {
  return (
    <section id="nosotros" className="border-t border-slate-200 bg-slate-50/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          {/* Columna Izquierda: Propuesta de Valor Institucional */}
          <div>
            <span className="inline-block rounded-full bg-yellow-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              Quiénes Somos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Especialistas comprometidos con la excelencia de la educación chilena
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              En <strong className="font-bold text-slate-900">EducaResponde</strong> integramos consultoría estratégica, organismo técnico de capacitación (OTEC) e ingeniería escolar. Nuestro equipo multidisciplinario de docentes, gestores públicos y arquitectos conoce desde adentro los desafíos de dirigir un colegio.
            </p>

            <ul className="mt-8 space-y-4 text-base text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  Programas y procedimientos alineados con exigencias de{" "}
                  <strong className="font-bold text-slate-900">MINEDUC, SENCE y Superintendencia de Educación</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  Trato ejecutivo directo, transparente y acompañado de documentación lista para auditorías y rendición SEP/FAEP.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <span>
                  Soluciones 100% adaptadas al Proyecto Educativo Institucional (PEI) y Plan de Mejoramiento Educativo (PME) de su colegio.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Garantía de Cumplimiento Técnico y Pedagógico
                </p>
                <p className="text-xs text-slate-600">
                  Cada programa incluye soporte dedicado para Directores, Jefes UTP y docentes participantes.
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
