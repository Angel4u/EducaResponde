import { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, Trash2, CreditCard } from "lucide-react";

// Base de datos simulada de tus cursos
const cursosDisponibles = [
  {
    id: 1,
    titulo: "Liderazgo y Gestión Directiva",
    descripcion: "Programa intensivo para equipos directivos. Incluye módulos sobre normativa MINEDUC, gestión de recursos FAEP y liderazgo pedagógico.",
    precio: 250000,
    horas: "120 horas",
  },
  {
    id: 2,
    titulo: "Estrategias de Evaluación SENCE",
    descripcion: "Taller práctico para docentes sobre la creación de instrumentos de evaluación efectivos y alineados al currículum nacional.",
    precio: 85000,
    horas: "40 horas",
  },
  {
    id: 3,
    titulo: "Formulación de Proyectos de Infraestructura",
    descripcion: "Aprenda a diseñar y postular proyectos de mejora de infraestructura escolar a fondos estatales.",
    precio: 120000,
    horas: "60 horas",
  }
];

export function Cursos() {
  // Estado para saber qué curso está expandido
  const [cursoExpandido, setCursoExpandido] = useState<number | null>(null);
  // Estado para el carrito de compras
  const [carrito, setCarrito] = useState<typeof cursosDisponibles>([]);

  // Funciones del carrito
  const agregarAlCarrito = (curso: any) => {
    if (!carrito.find((item) => item.id === curso.id)) {
      setCarrito([...carrito, curso]);
    }
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const totalCarrito = carrito.reduce((total, item) => total + item.precio, 0);

  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_350px] md:px-8">
        
        {/* COLUMNA IZQUIERDA: LISTA DE CURSOS */}
        <div>
          <h1 className="text-3xl font-extrabold text-black md:text-4xl">Catálogo de Cursos</h1>
          <p className="mt-4 text-lg text-black mb-8">
            Seleccione los programas de capacitación para su establecimiento.
          </p>

          <div className="space-y-4">
            {cursosDisponibles.map((curso) => (
              <div key={curso.id} className="rounded-xl border border-black bg-white p-6 shadow-sm transition-all hover:shadow-md">
                
                {/* Cabecera del Curso (Siempre visible) */}
                <div 
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setCursoExpandido(cursoExpandido === curso.id ? null : curso.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-black">{curso.titulo}</h3>
                    <p className="mt-1 font-semibold text-black">
                      ${curso.precio.toLocaleString('es-CL')} CLP
                    </p>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-black hover:bg-slate-200">
                    {cursoExpandido === curso.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                {/* Detalle Expandible */}
                {cursoExpandido === curso.id && (
                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <p className="text-base text-black mb-4">{curso.descripcion}</p>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-black">
                        ⏱ {curso.horas}
                      </span>
                      <button 
                        onClick={() => agregarAlCarrito(curso)}
                        disabled={carrito.some(item => item.id === curso.id)}
                        className="flex items-center gap-2 rounded-md bg-black px-4 py-2 font-bold text-white transition-colors hover:bg-black/80 disabled:bg-slate-400"
                      >
                        <ShoppingCart size={18} />
                        {carrito.some(item => item.id === curso.id) ? "Agregado" : "Agregar al carrito"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: CARRITO DE COMPRAS */}
        <div className="h-fit rounded-xl border border-black bg-white p-6 shadow-lg sticky top-24">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <ShoppingCart className="h-6 w-6 text-black" />
            <h2 className="text-xl font-bold text-black">Tu Selección</h2>
          </div>

          <div className="py-4">
            {carrito.length === 0 ? (
              <p className="text-center text-sm text-black py-8">Tu carrito está vacío.</p>
            ) : (
              <ul className="space-y-4">
                {carrito.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-black leading-tight">{item.titulo}</p>
                      <p className="text-sm text-black mt-1">${item.precio.toLocaleString('es-CL')}</p>
                    </div>
                    <button 
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-slate-200 pt-4">
            <div className="flex justify-between font-bold text-black text-lg mb-6">
              <span>Total:</span>
              <span>${totalCarrito.toLocaleString('es-CL')}</span>
            </div>
            
            <button 
              disabled={carrito.length === 0}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-3 font-bold text-white transition-colors hover:bg-black/80 disabled:bg-slate-400"
            >
              <CreditCard size={20} />
              Pagar con Webpay
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}