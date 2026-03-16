interface StepperProps {
  step: number;
  total?: number;
}

const LABELS = ["Contexto", "Bloques", "Estimación", "Contacto"];

export default function Stepper({ step, total = 4 }: StepperProps) {
  return (
    <div className="flex items-center gap-0">
      {LABELS.slice(0, total).map((label, i) => {
        const num = i + 1;
        const done = num < step;
        const active = num === step;
        return (
          <div key={num} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                  active
                    ? "bg-[#EC008C] text-white"
                    : done
                    ? "bg-[#EC008C]/30 text-[#EC008C]"
                    : "bg-white/10 text-white/30"
                }`}
              >
                {done ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  num
                )}
              </div>
              <span
                className={`text-xs font-bold hidden sm:block transition-colors duration-300 ${
                  active ? "text-white" : done ? "text-[#EC008C]/60" : "text-white/20"
                }`}
              >
                {label}
              </span>
            </div>
            {i < total - 1 && (
              <div
                className={`w-12 sm:w-20 h-px mx-2 mb-5 transition-all duration-500 ${
                  done ? "bg-[#EC008C]/50" : "bg-white/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
