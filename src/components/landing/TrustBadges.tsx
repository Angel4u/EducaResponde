const badges = [
  { name: "SENCE", sub: "Organismo Capacitador" },
  { name: "Registro ATE", sub: "MINEDUC" },
  { name: "Mercado Público", sub: "Proveedor del Estado" },
  { name: "ChileCompra", sub: "Registro Vigente" },
  { name: "ISO 9001", sub: "Gestión de Calidad" },
];

export function TrustBadges() {
  return (
    <section aria-label="Acreditaciones" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Acreditaciones y Registros Oficiales
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {badges.map((b) => (
            <div key={b.name} className="flex flex-col items-center justify-center rounded-md border border-border bg-background px-4 py-4 text-center">
              <span className="text-lg font-bold text-primary">{b.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}