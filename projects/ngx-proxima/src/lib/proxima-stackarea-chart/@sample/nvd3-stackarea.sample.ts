export const OPTIONS = {
  chart: {
    type: 'stackedAreaChart',
    height: 450,
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
    },
    x: (d) => d.x,
    y: (d) => d.y,
    useVoronoi: false,
    clipEdge: true,
    duration: 100,
    useInteractiveGuideline: true,
    xAxis: {
      showMaxMin: false,
    },
    yAxis: {},
    zoom: {
      enabled: true,
      scaleExtent: [1, 10],
      useFixedDomain: false,
      useNiceScale: false,
      horizontalOff: false,
      verticalOff: true,
      unzoomEventType: 'dblclick.zoom',
    },
  },
  title: { enable: false, text: 'Write Your Title', className: 'h4', css: { width: 'nullpx', textAlign: 'center' } },
  subtitle: { enable: false, text: 'Write Your Subtitle', css: { width: 'nullpx', textAlign: 'center' } },
  caption: { enable: false, text: 'Figure 1. Write Your Caption text.', css: { width: 'nullpx', textAlign: 'center' } },
  styles: { classes: { 'with-3d-shadow': true, 'with-transitions': true, gallery: false }, css: {} },
};

export const DATA: any[] = [
  {
    key: 'North America',
    values: generate(70),
  },

  {
    key: 'Africa',
    values: generate(70),
  },
  {
    key: 'South America',
    values: generate(70),
  },

  {
    key: 'Asia',
    values: generate(70),
  },

  {
    key: 'Europe',
    values: generate(70),
  },

  {
    key: 'Australia',
    values: generate(70),
  },

  {
    key: 'Antarctica',
    values: generate(70),
  },
];

function generate(count: number): any[] {
  let arr: any[] = [];
  for (let i = 0; i < count; i++) arr.push({ x: i * 10, y: Math.round(Math.random() * 10 + 5) });
  return arr;
}
