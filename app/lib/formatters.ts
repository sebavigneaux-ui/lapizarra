/** Formatea un número como CLP legible: $12,5M / $850K */
export function formatCLP(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    // Mostrar hasta 1 decimal solo si no es entero
    const formatted = m % 1 === 0 ? m.toFixed(0) : m.toFixed(1);
    return `$${formatted}M`;
  }
  if (n >= 100_000) {
    const k = Math.round(n / 100_000) * 100;
    return `$${(k / 1000).toFixed(0)}K`;
  }
  return `$${Math.round(n / 1000)}K`;
}

/** Formatea un rango [min, max] como "$10M – $14M" */
export function formatRango([min, max]: [number, number]): string {
  return `${formatCLP(min)} – ${formatCLP(max)}`;
}
