import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contacto</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Conversemos sobre las necesidades de su colegio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un ejecutivo especializado en instituciones educacionales le responderá dentro de las próximas 24 horas hábiles.
          </p>
          <ul className="mt-8 space-y-4 text-base text-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">+56 2 2345 6789</div>
                <div className="text-sm text-muted-foreground">Lun a Vie · 9:00 a 18:00</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">contacto@educaresponde.cl</div>
                <div className="text-sm text-muted-foreground">Respuesta en 24h hábiles</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Av. Providencia 1234, Of. 501</div>
                <div className="text-sm text-muted-foreground">Santiago, Chile</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h3 className="mt-4 text-2xl font-bold text-foreground">Solicitud recibida</h3>
              <p className="mt-2 max-w-sm text-base text-muted-foreground">
                Gracias. Un ejecutivo se pondrá en contacto con usted dentro de las próximas 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-base font-semibold text-foreground">Nombre completo</label>
                <input id="name" name="name" required className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Ej. Patricia Rojas" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-base font-semibold text-foreground">Correo institucional</label>
                <input id="email" type="email" name="email" required className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="director@sucolegio.cl" />
              </div>
              <div>
                <label htmlFor="area" className="mb-2 block text-base font-semibold text-foreground">¿En qué área necesita apoyo?</label>
                <select id="area" name="area" required defaultValue="" className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="" disabled>Seleccione un área…</option>
                  <option value="capacitacion">Capacitación Docente y UTP</option>
                  <option value="licitaciones">Asesoría en Licitaciones y Fondos Estatales</option>
                  <option value="infraestructura">Proyectos de Construcción e Infraestructura</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-base font-semibold text-foreground">Mensaje (opcional)</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Cuéntenos brevemente sobre su establecimiento" />
              </div>
              <button type="submit" className="w-full rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-colors hover:brightness-110 md:text-lg">
                Enviar solicitud
              </button>
              <p className="text-center text-sm text-muted-foreground">Sus datos son confidenciales y no serán compartidos con terceros.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}