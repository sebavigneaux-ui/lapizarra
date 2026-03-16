/** Formatea un número CLP legible: $2M / $850K / $350K */
export function formatCLP(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (n >= 1_000) {
    const k = Math.round(n / 1_000);
    return `$${k}K`;
  }
  return `$0`;
}

/** Formatea un rango [min, max] como "$350K – $700K" o "$2M – $3.2M" */
export function formatRango([min, max]: [number, number]): string {
  return `${formatCLP(min)} – ${formatCLP(max)}`;
}
