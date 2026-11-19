import { ShieldCheck, Award, Landmark, CheckCircle2 } from "lucide-react";

const badges = [
  {
    name: "SENCE",
    sub: "Organismo Técnico de Capacitación (OTEC)",
    icon: Award,
  },
  {
    name: "Ley SEP / PME",
    sub: "Programas Alineados a Mejoramiento Escolar",
    icon: ShieldCheck,
  },
  {
    name: "Mercado Público",
    sub: "Proveedor Habilitado del Estado (ChileCompra)",
    icon: Landmark,
  },
  {
    name: "Normativa MINEDUC",
    sub: "Estándares CPEIP e Infraestructura Escolar",
    icon: CheckCircle2,
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Acreditaciones y Respaldo" className="border-b border-slate-200 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
          Respaldo Institucional, Normativa y Registros Oficiales
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
                  <div className="mt-0.5 text-xs font-medium text-slate-600 leading-snug">{b.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
