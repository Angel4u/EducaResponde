import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. TU BASE DE DATOS LOCAL DE PROYECTOS
// Para agregar más en el futuro, simplemente copia y pega un bloque de estos debajo del último, 
// respetando las comas.
const proyectosDestacados = [
  {
    id: 1,
    categoria: "INFRAESTRUCTURA",
    titulo: "Colegio San Andrés — Región Metropolitana",
    descripcion: "Ampliación de 6 salas de clases y patio cubierto. Adjudicación FAEP 2024.",
  },
  {
    id: 2,
    categoria: "LICITACIÓN ADJUDICADA",
    titulo: "Fundación Educacional Aurora",
    descripcion: "Asesoría técnica que permitió adjudicar $340M en fondos MINEDUC.",
  },
  {
    id: 3,
    categoria: "CAPACITACIÓN UTP",
    titulo: "Red de Colegios Norte",
    descripcion: "Programa de 12 meses con 240 docentes certificados SENCE.",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para avanzar y retroceder
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === proyectosDestacados.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? proyectosDestacados.length - 1 : prevIndex - 1
    );
  };

  // 2. AUTO-ROTACIÓN: Cambia de tarjeta automáticamente cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    
    // Limpieza de seguridad para que no se superpongan los tiempos
    return () => clearInterval(timer);
  }, [currentIndex]); // Se reinicia el contador si el usuario hace clic manualmente

  return (
    <section id="proyectos" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="mb-12 text-left">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Proyectos Destacados
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Resultados verificables en <br className="hidden md:block" />
            establecimientos educacionales
          </h2>
        </div>

        {/* Contenedor del Carrusel (Más Grande) */}
        <div className="relative mx-auto w-full max-w-5xl">
          
          {/* Tarjeta Principal */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-500 ease-in-out">
            <div className="flex min-h-[350px] flex-col justify-center p-10 md:p-16 text-center md:text-left">
              
              <div className="mb-6 inline-flex">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-semibold uppercase text-slate-700 shadow-sm">
                  {proyectosDestacados[currentIndex].categoria}
                </span>
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900 md:text-4xl leading-tight">
                {proyectosDestacados[currentIndex].titulo}
              </h3>
              
              <p className="text-lg text-slate-600 md:text-2xl leading-relaxed max-w-3xl">
                {proyectosDestacados[currentIndex].descripcion}
              </p>
            </div>
          </div>

          {/* Botones de Navegación Laterales */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-100 hover:bg-slate-50 hover:scale-105 transition-transform md:-left-7 z-10"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-100 hover:bg-slate-50 hover:scale-105 transition-transform md:-right-7 z-10"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicadores (Puntitos en la parte inferior) */}
          <div className="mt-8 flex justify-center gap-3">
            {proyectosDestacados.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-slate-800 w-8" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}