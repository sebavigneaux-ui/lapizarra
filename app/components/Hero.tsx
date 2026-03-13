const WA_URL = "https://wa.me/56958419326?text=Hola%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20con%20LaPizarra";
const WA_COTIZAR = "https://wa.me/56958419326?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20con%20LaPizarra";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(80px, -60px) scale(1.15); }
          66%       { transform: translate(-40px, 50px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-70px, 50px) scale(1.1); }
          66%       { transform: translate(60px, -70px) scale(1.2); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(50px, 80px) scale(0.85); }
          66%       { transform: translate(-80px, -30px) scale(1.1); }
        }
        .lp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.4;
          pointer-events: none;
          will-change: transform;
        }
        .lp-blob-1 {
          width: 550px;
          height: 550px;
          background: #EC008C;
          top: -120px;
          left: -120px;
          animation: blob1 10s ease-in-out infinite;
        }
        .lp-blob-2 {
          width: 450px;
          height: 450px;
          background: #7B0050;
          top: 25%;
          right: -100px;
          animation: blob2 13s ease-in-out infinite;
        }
        .lp-blob-3 {
          width: 380px;
          height: 380px;
          background: #EC008C;
          bottom: -60px;
          left: 35%;
          animation: blob3 16s ease-in-out infinite;
        }
      `}</style>

      <section style={{ backgroundColor: "#231F20", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Blobs animados */}
        <div className="lp-blob lp-blob-1" />
        <div className="lp-blob lp-blob-2" />
        <div className="lp-blob lp-blob-3" />

        {/* Línea decorativa magenta */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", backgroundColor: "#EC008C" }} />

        <div className="max-w-6xl mx-auto px-6 pt-52 pb-24 w-full" style={{ position: "relative", zIndex: 10 }}>
          <div className="max-w-3xl">
            <p style={{ color: "#EC008C", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "2rem" }}>
              Productora boutique · Santiago, Chile
            </p>

            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Eventos corporativos que representan bien a tu marca y se ejecutan con precisión.
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Combinamos estrategia, creatividad y producción rigurosa para transformar ideas en experiencias memorables para empresas exigentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EC008C] hover:bg-[#c8007a] text-white font-bold px-8 py-4 text-base transition-colors text-center"
              >
                Agendar una reunión
              </a>
              <a
                href={WA_COTIZAR}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-bold px-8 py-4 text-base hover:border-white/70 hover:bg-white/5 transition-colors text-center"
              >
                Solicitar cotización
              </a>
            </div>

            <p className="text-white/40 text-sm">
              Trabajamos con equipos de marketing, comunicaciones y RRHH que necesitan experiencias bien pensadas y ejecutadas sin margen de error.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
