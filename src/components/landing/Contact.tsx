import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      area: formData.get("area"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://educaresponde.test/educaresponde-react/procesar_contacto.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("El servidor rechazó la solicitud. Revisa los datos.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión. Asegúrate de tener Laragon encendido (Start All).");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          {/* Cambiado a text-black */}
          <span className="text-sm font-semibold uppercase tracking-wider text-black">Contacto</span>
          {/* Cambiado a text-black */}
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            Conversemos sobre las necesidades de su colegio
          </h2>
          {/* Cambiado a text-black */}
          <p className="mt-4 text-lg text-black">
            Un ejecutivo especializado en instituciones educacionales le responderá dentro de las próximas 24 horas hábiles.
          </p>
          
          <ul className="mt-8 space-y-4 text-base text-black">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-black" />
              <div>
                <div className="font-semibold text-black">+56 2 2345 6789</div>
                <div className="text-sm text-black">Lun a Vie · 9:00 a 18:00</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-black" />
              <div>
                <div className="font-semibold text-black">contacto@educaresponde.cl</div>
                <div className="text-sm text-black">Respuesta en 24h hábiles</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-black" />
              <div>
                <div className="font-semibold text-black">Av. Providencia 1234, Of. 501</div>
                <div className="text-sm text-black">Santiago, Chile</div>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Fondo blanco y borde negro para la tarjeta del formulario */}
        <div className="rounded-lg border border-black bg-white p-6 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-black" />
              <h3 className="mt-4 text-2xl font-bold text-black">Solicitud recibida</h3>
              <p className="mt-2 max-w-sm text-base text-black">
                Gracias. Un ejecutivo se pondrá en contacto con usted dentro de las próximas 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-base font-semibold text-black">Nombre completo</label>
                {/* Inputs con texto y borde negro */}
                <input id="name" name="name" required className="w-full rounded-md border border-black bg-white px-4 py-3 text-base text-black outline-none focus:ring-2 focus:ring-black/20" placeholder="Ej. Patricia Rojas" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-base font-semibold text-black">Correo institucional</label>
                <input id="email" type="email" name="email" required className="w-full rounded-md border border-black bg-white px-4 py-3 text-base text-black outline-none focus:ring-2 focus:ring-black/20" placeholder="director@sucolegio.cl" />
              </div>
              <div>
                <label htmlFor="area" className="mb-2 block text-base font-semibold text-black">¿En qué área necesita apoyo?</label>
                <select id="area" name="area" required defaultValue="" className="w-full rounded-md border border-black bg-white px-4 py-3 text-base text-black outline-none focus:ring-2 focus:ring-black/20">
                  <option value="" disabled>Seleccione un área…</option>
                  <option value="capacitacion">Capacitación Docente y UTP</option>
                  <option value="licitaciones">Asesoría en Licitaciones y Fondos Estatales</option>
                  <option value="infraestructura">Proyectos de Construcción e Infraestructura</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-base font-semibold text-black">Mensaje (opcional)</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-black bg-white px-4 py-3 text-base text-black outline-none focus:ring-2 focus:ring-black/20" placeholder="Cuéntenos brevemente sobre su establecimiento" />
              </div>
              
              {/* Botón forzado a fondo negro y texto blanco */}
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full rounded-md px-6 py-4 text-base font-bold text-white transition-colors md:text-lg ${loading ? 'bg-black/70 cursor-not-allowed' : 'bg-black hover:bg-black/80'}`}
              >
                {loading ? 'Enviando de forma segura...' : 'Enviar solicitud'}
              </button>
              <p className="text-center text-sm text-black">Sus datos son confidenciales y no serán compartidos con terceros.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}