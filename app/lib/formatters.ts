/** Formatea un número como CLP: $12.500.000 */
export function formatCLP(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  return `$${Math.round(n / 1000)}K`;
}

/** Formatea un rango [min, max] como "$10M – $20M" */
export function formatRango([min, max]: [number, number]): string {
  return `${formatCLP(min)} – ${formatCLP(max)}`;
}
