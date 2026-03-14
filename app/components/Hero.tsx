"use client";
import { useState } from "react";

const WA_URL = "https://wa.me/56958419326";

const clientes = [
  "Samsung", "Nike", "Walmart", "The North Face", "Marriott",
  "Stellantis", "KIA", "PUIG", "Linde", "Metso Outotec",
  "SQM", "Parque Arauco", "Ripley", "Alsea", "Kaufmann",
  "Polpaico", "CChC", "Universidad de los Andes",
  "Orsan Seguros", "Cool Carriers", "Novo Nordisk",
];

export default function Hero() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    tipo: "",
    asistentes: "",
    fecha: "",
    presupuesto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      `Hola, me interesa cotizar con LaPizarra.`,
      ``,
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa}`,
      `Correo: ${form.correo}`,
      `Tipo de evento: ${form.tipo}`,
      `Asistentes estimados: ${form.asistentes}`,
      `Fecha estimada: ${form.fecha}`,
      `Presupuesto estimado: ${form.presupuesto}`,
      form.mensaje ? `Mensaje: ${form.mensaje}` : "",
    ].filter(Boolean).join("\n");

    window.open(`${WA_URL}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const inputClass = "w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#EC008C] transition-colors [&>option]:text-[#231F20] [&>option]:bg-white";
  const labelClass = "block text-white/50 text-xs uppercase tracking-widest mb-1.5";

  return (
    <section className="bg-[#231F20] flex flex-col relative overflow-hidden min-h-screen">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#231F20]/50" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EC008C]" />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — texto */}
          <div>
            <p className="text-[#EC008C] text-sm font-bold uppercase tracking-widest mb-10">
              Productora · Agencia Creativa · Santiago, Chile
            </p>

            <h1 className="font-black leading-none tracking-tighter mb-10">
              <span className="block text-5xl md:text-7xl text-white">Eventos bien ejecutados</span>
              <span className="block text-5xl md:text-7xl text-white">que representan</span>
              <span className="block text-5xl md:text-7xl text-[#EC008C]">a tu marca.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg">
              Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables.
            </p>
          </div>

          {/* Columna derecha — formulario */}
          <div className="bg-[#231F20]/70 border border-white/10 p-8 backdrop-blur-sm">
            <p className="text-white font-black text-xl mb-6">Cotiza tu evento</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nombre</label>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Empresa</label>
                  <input
                    name="empresa"
                    type="text"
                    required
                    placeholder="Tu empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Correo</label>
                <input
                  name="correo"
                  type="email"
                  required
                  placeholder="tu@empresa.cl"
                  value={form.correo}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Tipo de evento</label>
                <select
                  name="tipo"
                  required
                  value={form.tipo}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Convención">Convención</option>
                  <option value="Lanzamiento de producto">Lanzamiento de producto</option>
                  <option value="Activación de marca">Activación de marca</option>
                  <option value="Formación comercial">Formación comercial</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Asistentes estimados</label>
                  <select
                    name="asistentes"
                    required
                    value={form.asistentes}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Selecciona</option>
                    <option value="Menos de 50">Menos de 50</option>
                    <option value="50–150">50–150</option>
                    <option value="150–500">150–500</option>
                    <option value="+500">+500</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Fecha estimada</label>
                  <input
                    name="fecha"
                    type="text"
                    required
                    placeholder="Ej: Agosto 2025"
                    value={form.fecha}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Presupuesto estimado</label>
                <select
                  name="presupuesto"
                  required
                  value={form.presupuesto}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Menos de $5M">Menos de $5M</option>
                  <option value="$5M – $15M">$5M – $15M</option>
                  <option value="$15M – $30M">$15M – $30M</option>
                  <option value="$30M – $60M">$30M – $60M</option>
                  <option value="+$60M">+$60M</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Mensaje (opcional)</label>
                <textarea
                  name="mensaje"
                  rows={3}
                  placeholder="Cuéntanos más sobre tu evento..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EC008C] hover:bg-[#c8007a] text-white font-black py-4 text-base transition-colors mt-2"
              >
                Enviar por WhatsApp →
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Carrusel de clientes */}
      <div className="relative z-10 pb-16">
        <p className="text-white/60 text-sm uppercase tracking-widest text-center mb-8">
          Clientes
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #231F20, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #231F20, transparent)" }} />

          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-track">
            {[...clientes, ...clientes].map((nombre, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className="text-white/60 text-lg font-medium px-6 hover:text-white transition-colors">
                  {nombre}
                </span>
                <span className="text-[#EC008C] text-xs select-none">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
