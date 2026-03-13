import Image from "next/image";

export default function Clientes() {
  return (
    <section className="bg-[#231F20] py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-10">
          Han confiado en nosotros
        </p>
        <div className="relative w-full overflow-hidden">
          <Image
            src="/clientes.jpg"
            alt="Clientes LaPizarra: Samsung, Nike, Disney, Coca-Cola, Walmart, Marriott y más"
            width={1600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
