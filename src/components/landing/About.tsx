import { CheckCircle2 } from "lucide-react";

const team = [
  {
    name: "Alexander Eastman",
    role: "Director Ejecutivo",
    bio: "Especialista en gestión escolar y liderazgo de proyectos educativos de alto impacto.",
    imageUrl: "https://ui-avatars.com/api/?name=Alexander+Eastman&background=000000&color=fff&size=256", 
  },
  {
    name: "Nombre del Asesor",
    role: "Jefe de Capacitaciones UTP",
    bio: "Docente con más de 15 años de experiencia en currículum y evaluación SENCE.",
    imageUrl: "https://ui-avatars.com/api/?name=Asesor+UTP&background=e2e8f0&color=000000&size=256",
  },
  {
    name: "Nombre del Especialista",
    role: "Encargado de Licitaciones",
    bio: "Experto en Mercado Público, fondos FAEP y normativas del MINEDUC.",
    imageUrl: "https://ui-avatars.com/api/?name=Especialista&background=e2e8f0&color=000000&size=256",
  }
];

export function About() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          {/* Texto de Quiénes Somos */}
          <div>
            {/* Cambiado a text-black */}
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              Quiénes Somos
            </span>
            {/* Cambiado a text-black */}
            <h2 className="mt-4 text-3xl font-extrabold text-black md:text-4xl">
              Expertos comprometidos con la educación chilena
            </h2>
            {/* Cambiado a text-black */}
            <p className="mt-6 text-lg leading-relaxed text-black">
              En EducaResponde no somos solo consultores; somos un equipo multidisciplinario de profesionales de la educación, arquitectos y gestores públicos que entienden la realidad de las escuelas desde adentro.
            </p>
            
            {/* Cambiado a text-black */}
            <ul className="mt-8 space-y-4 text-base text-black">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500" />
                <span>Registrados y validados por <strong>MINEDUC y SENCE</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500" />
                <span>Trato directo, transparente y sin burocracia</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-yellow-500" />
                <span>Soluciones 100% adaptadas a su Proyecto Educativo (PEI)</span>
              </li>
            </ul>
          </div>

          {/* Tarjetas del Equipo */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                /* Borde negro puro aplicado aquí también */
                className={`flex flex-col items-center text-center rounded-2xl border border-black p-6 shadow-sm transition-all hover:shadow-md ${index === 0 ? "sm:col-span-2 lg:col-span-2 bg-slate-50" : "bg-white"}`}
              >
                <img 
                  src={member.imageUrl} 
                  alt={`Fotografía de ${member.name}`} 
                  className="h-24 w-24 rounded-full object-cover shadow-inner mb-4"
                />
                {/* Cambiado a text-black */}
                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                <p className="text-xs font-bold uppercase text-yellow-600 mt-1">{member.role}</p>
                {/* Cambiado a text-black */}
                <p className="mt-3 text-sm text-black leading-relaxed max-w-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}