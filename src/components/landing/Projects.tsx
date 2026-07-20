import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [isAnimating, setIsAnimating] = useState(false);

  // Lógica para animar la transición
  const changeSlide = (newIndex: number) => {
    if (isAnimating) return; // Evita que se rompa si el usuario hace clic muy rápido
    setIsAnimating(true); // Inicia el desvanecimiento (Fade out)
    
    setTimeout(() => {
      setCurrentIndex(newIndex); // Cambia el contenido mientras está invisible
      setIsAnimating(false); // Vuelve a aparecer (Fade in)
    }, 300); // 300 milisegundos de transición
  };

  const nextSlide = () => {
    changeSlide(currentIndex === proyectosDestacados.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? proyectosDestacados.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]); 

  return (
    <section id="proyectos" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="mb-12 text-left">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Proyectos Destacados
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Resultados verificables en <br className="hidden md:block" />
            establecimientos educacionales
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            {/* CONTENEDOR CON LA ANIMACIÓN */}
            <div 
              className={`flex min-h-[350px] flex-col justify-center p-10 text-center transition-all duration-300 ease-in-out md:p-16 md:text-left ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="mb-6 inline-flex">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-semibold uppercase text-slate-700 shadow-sm">
                  {proyectosDestacados[currentIndex].categoria}
                </span>
              </div>
              
              <h3 className="mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
                {proyectosDestacados[currentIndex].titulo}
              </h3>
              
              <p className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
                {proyectosDestacados[currentIndex].descripcion}
              </p>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-lg transition-transform hover:scale-105 hover:bg-slate-50 md:-left-7"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-800 shadow-lg transition-transform hover:scale-105 hover:bg-slate-50 md:-right-7"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={32} />
          </button>

          <div className="mt-8 flex justify-center gap-3">
            {proyectosDestacados.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "w-8 bg-slate-800" 
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