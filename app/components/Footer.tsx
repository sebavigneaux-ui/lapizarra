import Blobs from "./Blobs";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#231F20] border-t border-white/10 py-12 px-6 relative overflow-hidden">
      <Blobs />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div>
          <Image
            src="/logo-blanco.png"
            alt="LaPizarra"
            width={160}
            height={64}
            className="h-12 w-auto object-contain"
          />
          <p className="text-white/30 text-xs mt-2">
            Productora boutique · Santiago, Chile
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <a
            href="mailto:sebastian@somoslapizarra.cl"
            className="text-white/50 hover:text-white transition-colors"
          >
            sebastian@somoslapizarra.cl
          </a>
          <a
            href="https://wa.me/56958419326"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            +56 9 5841 9326
          </a>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} LaPizarra. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
