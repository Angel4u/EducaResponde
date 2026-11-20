import { GraduationCap, BarChart3, Scale, Sparkles } from "lucide-react";

const badges = [
  {
    name: "Plataforma CPA (Moodle)",
    sub: "Comunidades Profesionales de Aprendizaje y Certificación por Horas",
    icon: GraduationCap,
  },
  {
    name: "Sistema DIA & SIMCE",
    sub: "Ensayos Físicos, Lector Óptico, Niveles de Logro, IDPS y Cobertura",
    icon: BarChart3,
  },
  {
    name: "Modelo de Gestión UTP",
    sub: "Buscador de Dictámenes, Carta Gantt, Actas y Evidencias PME al Día",
    icon: Scale,
  },
  {
    name: "Innovación & Laboratorios",
    sub: "STEM, ABP, Robótica, Socioemocional, Ludotecas y Bibliorecreos",
    icon: Sparkles,
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Ejes Estratégicos EducaResponde" className="border-b border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
          Los 4 Pilares del Ecosistema y Brochure Institucional EducaResponde
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-900 text-yellow-400 shadow-xs">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-base font-extrabold text-slate-900">{b.name}</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-600 leading-snug">
                    {b.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
