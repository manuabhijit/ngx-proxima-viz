import * as ColorScheme from 'color-scheme';

export const COLOR_PALLET: { [name: string]: string[] } = {
  random: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
  SCHEMA_MONO: generateColors(246, 'mono', 0.1, 'soft'),
  SCHEMA_TRIADE: generateColors(246, 'triade', 0.7, 'hard'),
  SCHEMA_CONTRAST: generateColors(246, 'contrast', 0, 'light'),
  SCHEMA_TETRADE: generateColors(246, 'tetrade', 0.5, 'pastel'),
  SCHEMA_ANALOGIC: generateColors(246, 'analogic', 0.3, 'soft'),
};

function generateColors(hue: number, scheme: string, distance: number, variation: string, safe: boolean = true): string[] {
  return new ColorScheme()
    .from_hue(hue)
    .scheme(scheme)
    .distance(distance)
    .add_complement(false)
    .variation(variation)
    .web_safe(safe)
    .colors()
    .filter((c) => c !== 'ffffff')
    .map((c) => '#' + c);
}
