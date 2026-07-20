const badges = [
  { name: "SENCE", sub: "Organismo Capacitador" },
  { name: "Registro ATE", sub: "MINEDUC" },
  { name: "Mercado Público", sub: "Proveedor del Estado" },
  { name: "ISO 9001", sub: "Gestión de Calidad" },
];

export function TrustBadges() {
  return (
    <section aria-label="Acreditaciones" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
          Acreditaciones y Registros Oficiales
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.name} className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <span className="text-xl font-bold text-slate-900">{b.name}</span>
              <span className="mt-2 text-xs font-medium text-slate-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}