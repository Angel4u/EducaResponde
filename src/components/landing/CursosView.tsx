import { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, Trash2, CreditCard, Clock3 } from "lucide-react";

// Base de datos de ejemplo (Normalmente vendría de una API/Base de datos)
const listaCursos = [
  {
    id: 1,
    titulo: "Liderazgo y Gestión Directiva Escolar",
    precio: 280000,
    horas: 120,
    descripcion: "Programa intensivo diseñado para equipos directivos y sostenedores. Cubre gestión de recursos SEP/FAEP, convivencia escolar y liderazgo pedagógico según marco para la buena dirección.",
  },
  {
    id: 2,
    titulo: "Estrategias de Evaluación Formativa en el Aula",
    precio: 95000,
    horas: 40,
    descripcion: "Taller práctico para docentes de aula. Creación de rúbricas, retroalimentación efectiva y uso de datos para la toma de decisiones pedagógicas inmediatas.",
  },
  {
    id: 3,
    titulo: "Formulación de Proyectos de Infraestructura Escolar",
    precio: 150000,
    horas: 80,
    descripcion: "Capacitación para equipos técnicos. Aprenda a diseñar, presupuestar y postular proyectos de mejora a fondos MINEDUC y regionales cumpliendo la normativa vigente.",
  },
];

export function CursosView() {
  // Estado para controlar qué curso está expandido (acordeón)
  const [cursoExpandido, setCursoExpandido] = useState<number | null>(null);
  
  // Estado para el carrito de compras
  const [carrito, setCarrito] = useState<typeof listaCursos>([]);

  // Funciones del carrito
  const agregarAlCarrito = (curso: any) => {
    if (!carrito.find((item) => item.id === curso.id)) {
      setCarrito([...carrito, curso]);
    }
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Cálculo del total
  const totalCart = carrito.reduce((sum, item) => sum + item.precio, 0);

  // Formateador de moneda chilena
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1fr_380px]">
        
        {/* COLUMNA IZQUIERDA: CATÁLOGO */}
        <div>
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">Catálogo de Capacitaciones</h1>
          <p className="mt-5 text-lg text-black max-w-2xl">
            Explore nuestros programas certificados diseñados para fortalecer las competencias de su equipo docente y directivo.
          </p>

          <div className="mt-12 space-y-5">
            {listaCursos.map((curso) => (
              <div 
                key={curso.id} 
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                {/* Cabecera (Siempre visible) - Al hacer clic expande */}
                <button 
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setCursoExpandido(cursoExpandido === curso.id ? null : curso.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-black md:text-2xl">{curso.titulo}</h3>
                    <p className="mt-2 text-2xl font-black text-black">
                      {formatter.format(curso.precio)}
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-black">
                    {cursoExpandido === curso.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </span>
                </button>

                {/* Contenido Expandible */}
                <div className={`transition-all duration-300 ease-in-out ${cursoExpandido === curso.id ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'}`}>
                  <div className="p-6 md:p-8">
                    <p className="text-base leading-relaxed text-black mb-6">{curso.descripcion}</p>
                    
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-black">
                        <Clock3 className="h-5 w-5" /> {curso.horas} horas cronológicas
                      </span>
                      
                      <button 
                        onClick={() => agregarAlCarrito(curso)}
                        // Deshabilitar si ya está en el carrito
                        disabled={carrito.some(item => item.id === curso.id)}
                        className={`inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-bold text-white transition-colors ${carrito.some(item => item.id === curso.id) ? 'bg-slate-400 cursor-not-allowed' : 'bg-black hover:bg-black/80'}`}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        {carrito.some(item => item.id === curso.id) ? "Agregado al Carrito" : "Añadir a la Selección"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: CARRITO (STICKY) */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-2xl border border-black bg-white p-8 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-5">
              <ShoppingCart className="h-7 w-7 text-black" />
              <h2 className="text-2xl font-bold text-black">Su Selección</h2>
            </div>

            {carrito.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-base text-black">No ha seleccionado cursos aún.</p>
                <p className="text-sm text-slate-500 mt-1">Haga clic en 'Añadir' en los cursos de la izquierda.</p>
              </div>
            ) : (
              <>
                <ul className="space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-6">
                  {carrito.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-sm font-bold text-black leading-tight">{item.titulo}</p>
                        <p className="text-base font-black text-black mt-1">{formatter.format(item.precio)}</p>
                      </div>
                      <button 
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="text-red-500 hover:text-red-700 p-1 shrink-0"
                        aria-label={`Eliminar ${item.titulo}`}
                      >
                        <Trash2 size={20} />
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t-2 border-slate-100 pt-5 space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-base font-bold text-black">Total CLP:</span>
                    <span className="text-3xl font-black text-black">{formatter.format(totalCart)}</span>
                  </div>
                  
                  {/* BOTÓN PREPARADO PARA WEBPAY */}
                  <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-black/80">
                    <CreditCard className="h-6 w-6" />
                    Proceder al Pago Seguros
                  </button>
                  <p className="text-center text-xs text-slate-500">Al pagar será redirigido al portal seguro de Transbank Webpay.</p>
                </div>
              </>
            )}
          </div>
        </aside>

      </div>
    </section>
  );
}