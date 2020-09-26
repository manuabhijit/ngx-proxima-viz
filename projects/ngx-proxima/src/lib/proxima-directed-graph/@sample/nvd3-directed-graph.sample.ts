import { SAMPLE_CHART_SUMMARY } from '../../@core/datasets/chart-summary.dataset';

export const OPTIONS = {
  chart: {
    type: 'forceDirectedGraph',
    height: 450,
    color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],

    // margin: { top: 20, right: 20, bottom: 20, left: 20 },

    nodeExtras: (node) => {
      node &&
        node
          .append('text')
          .attr('dx', 8)
          .attr('dy', '.35em')
          .text((d) => d.name)
          .style('font-size', '10px');
    },
  },
  ...SAMPLE_CHART_SUMMARY,
};

export const DATA = {
  nodes: generateNodes(30),
  links: generateLink(30),
};

function generateNodes(count: number) {
  let arr: any[] = [];
  for (let i = 0; i < count; i++) arr.push({ name: 'Point-' + (i + 1), group: count % 5 });
  return arr;
}

function generateLink(count: number) {
  let arr: any[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      source: i,
      target: i + 1 >= count ? 0 : i + 1,
      value: Math.round(Math.random() * 10000 + 1) % count,
    });
    arr.push({
      source: Math.round(Math.random() * 10000 + 1) % count,
      target: Math.round(Math.random() * 10000 + 1) % count,
      value: Math.round(Math.random() * 10000 + 1) % count,
    });
  }

  return arr;
}
