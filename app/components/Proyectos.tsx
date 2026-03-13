const videos = [
  { id: "zO3KVRmb7vQ" },
  { id: "lNUHjeq-81s" },
  { id: "mr8FCGm3RxY" },
  { id: "jpXMz12JjXU" },
  { id: "4uyNXJ2N6ow" },
  { id: "wyRI9zvGXSE", start: 15 },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="bg-[#F5F5F5] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#EC008C] text-xs font-bold uppercase tracking-widest mb-6">
            Proyectos
          </p>
          <h2 className="text-[#231F20] text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-xl">
            Experiencias que hablan por sí solas.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="aspect-video w-full bg-[#231F20]">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}${v.start ? `?start=${v.start}` : ""}`}
                title="Proyecto LaPizarra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
