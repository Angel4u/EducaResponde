import { ArrowRight, Download, Check } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-slate-900 text-white overflow-hidden"
    >
      {/* Fondo de cuadrícula estilo papel milimetrado */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
        <div>
          {/* Etiqueta superior */}
          <span className="inline-block rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
            Servicios B2B Educacionales
          </span>
          
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Soluciones Integrales para su Establecimiento Educacional
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Acompañamos a directores, jefes UTP y sostenedores con capacitación docente certificada, asesoría experta en licitaciones estatales y ejecución de proyectos de infraestructura escolar.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
            <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-500 px-6 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-yellow-600 md:text-lg shadow-md">
              Nuestros Servicios <ArrowRight className="h-5 w-5" />
              </a>
            <a href="#descargar" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800 md:text-lg">
              <Download className="h-5 w-5" /> Descargar Catálogo PDF
            </a>
          </div>
          
          {/* Estadísticas inferiores */}
          <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-slate-800 pt-8 text-white">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Colegios</dt>
              <dd className="mt-2 text-3xl font-bold md:text-4xl">+120</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Docentes</dt>
              <dd className="mt-2 text-3xl font-bold md:text-4xl">+8.500</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Experiencia</dt>
              <dd className="mt-2 text-3xl font-bold md:text-4xl">15 años</dd>
            </div>
          </dl>
        </div>
        
        {/* Tarjeta lateral oscura con acentos amarillos */}
        <aside className="hidden lg:block">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">Programa 2026</p>
            <h3 className="mt-3 text-3xl font-bold leading-tight text-white">Plan Anual de Fortalecimiento Institucional</h3>
            <ul className="mt-8 space-y-4 text-base text-slate-300">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" /> 
                Diagnóstico UTP sin costo
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" /> 
                Postulación a fondos MINEDUC
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-400" /> 
                Cronograma 12 meses
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}