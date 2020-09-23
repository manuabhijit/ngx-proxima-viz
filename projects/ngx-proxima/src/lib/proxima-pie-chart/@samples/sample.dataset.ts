export const PIE_CHART: Chart.ChartConfiguration = {
  type: 'pie',
  data: {
    labels: ['Red', 'Yellow', 'Blue'],
    datasets: [
      {
        label: 'Pie 1',
        backgroundColor: 'rgba(27, 99, 132,0.4)',
        borderColor: 'rgb(255, 99, 132)',
        fill: true,
        data: [10, 20, 30],
      },
      {
        label: 'Pie 2',
        backgroundColor: 'rgba(127, 99, 132,0.4)',
        borderColor: 'rgb(255, 99, 132)',
        fill: true,
        data: [10, 20, 30],
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Pie Chart',
    },
  },
};
