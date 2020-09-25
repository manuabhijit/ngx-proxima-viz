export const OPTIONS = {
  chart: {
    type: 'cumulativeLineChart',
    height: 450,
    margin: {
      top: 20,
      right: 20,
      bottom: 60,
      left: 65,
    },
    x: (d) => d.x,
    y: (d) => d.y,
    duration: 300,
    useInteractiveGuideline: true,
    clipVoronoi: false,
    xAxis: {
      axisLabel: 'X Axis',
    },
    yAxis: {
      axisLabel: 'Y Axis',
    },
  },
  title: { enable: false, text: 'Write Your Title', className: 'h4', css: { width: 'nullpx', textAlign: 'center' } },
  subtitle: { enable: false, text: 'Write Your Subtitle', css: { width: 'nullpx', textAlign: 'center' } },
  caption: { enable: false, text: 'Figure 1. Write Your Caption text.', css: { width: 'nullpx', textAlign: 'center' } },
  styles: { classes: { 'with-3d-shadow': true, 'with-transitions': true, gallery: false }, css: {} },
};

export const DATA: any[] = ['a', 'b', 'c', 'd'].map((key) => ({ key, values: generate(100) }));

function generate(count: number) {
  let arr: any[] = [];
  let c = Math.random() * 100 * Math.random() < 0.5 ? -1 : +1;
  for (let i = 1; i <= count; i++) {
    arr.push({ x: i, y: Math.random() * 10 + c * i });
  }
  return arr;
}
