export const OPTIONS = {
  chart: {
    type: 'parallelCoordinates',
    height: 450,
    margin: { top: 30, right: 0, bottom: 10, left: 0 },
    dimensions: ['economy', 'cylinders', 'displacement', 'power', 'weight', 's60', 'year'],
    dispatch: {},
    width: null,
    dimensionData: [
      { key: 'economy' },
      { key: 'cylinders' },
      { key: 'displacement' },
      { key: 'power' },
      { key: 'weight' },
      { key: 's60' },
      { key: 'year' },
    ],
    displayBrush: true,
    filters: [],
    active: [],
    lineTension: 1,
    undefinedValuesLabel: 'undefined values',
    dimensionNames: ['economy', 'cylinders', 'displacement', 'power', 'weight', 's60', 'year'],
    dimensionFormats: [null, null, null, null, null, null, null],
  },
  title: { text: 'Write Your Title', className: 'h4', css: { width: 'nullpx', textAlign: 'center' } },
  subtitle: { enable: false, text: 'Write Your Subtitle', css: { width: 'nullpx', textAlign: 'center' } },
  caption: { enable: false, text: 'Figure 1. Write Your Caption text.', css: { width: 'nullpx', textAlign: 'center' } },
  styles: { classes: { 'with-3d-shadow': true, 'with-transitions': true, gallery: false }, css: {} },
};

export const DATA: any[] = generate(250);

function generate(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      name: 'Sample-' + i,
      economy: Math.round(Math.random() * 10) + 3,
      cylinders: Math.round(Math.random() * 11) * 17,
      displacement: Math.round(Math.random() * 10 + 24),
      power: Math.round(Math.random() * 100),
      weight: Math.round(Math.random() * 220),
      s60: Math.round(Math.random() * 170),
      year: Math.round(Math.random() * 17),
    });
  }
  return arr;
}
