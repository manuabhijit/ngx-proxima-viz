import { SAMPLE_CHART_SUMMARY } from '../../@core/datasets/chart-summary.dataset';

export const OPTIONS = {
  chart: {
    type: 'pieChart',
    height: 500,
    showLabels: true,
    duration: 500,
    labelThreshold: 0.01,
    x: (d) => d.key,
    y: (d) => d.value,
    labelSunbeamLayout: true,
    legend: {
      margin: { top: 5, right: 35, bottom: 5, left: 0 },
      dispatch: {},
      width: 400,
      height: 20,
      align: true,
      maxKeyLength: 20,
      rightAlign: true,
      padding: 32,
      updateState: true,
      radioButtonMode: false,
      expanded: false,
      vers: 'classic',
    },
    dispatch: {},
    pie: {
      dispatch: {},
      arcsRadius: [],
      width: 500,
      height: 500,
      showLabels: true,
      title: false,
      titleOffset: 0,
      labelThreshold: 0.02,
      id: 15,
      endAngle: false,
      startAngle: false,
      padAngle: false,
      cornerRadius: 0,
      donutRatio: 0.5,
      labelsOutside: false,
      labelSunbeamLayout: false,
      donut: false,
      growOnHover: true,
      pieLabelsOutside: false,
      donutLabelsOutside: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      labelType: 'key',
    },
    tooltip: {
      duration: 0,
      gravity: 'w',
      distance: 25,
      snapDistance: 0,
      classes: null,
      chartContainer: null,
      enabled: true,
      hideDelay: 200,
      headerEnabled: false,
      fixedTop: null,
      offset: { left: 0, top: 0 },
      hidden: true,
      data: null,
      id: 'nvtooltip-82791',
    },
    arcsRadius: [],
    width: null,
    title: false,
    titleOffset: 0,
    endAngle: false,
    startAngle: false,
    padAngle: false,
    cornerRadius: 0,
    donutRatio: 0.5,
    labelsOutside: false,
    donut: false,
    growOnHover: true,
    pieLabelsOutside: false,
    donutLabelsOutside: false,
    margin: { top: 30, right: 20, bottom: 20, left: 20 },
    labelType: 'key',
    noData: null,
    showLegend: true,
    legendPosition: 'top',
    defaultState: null,
  },
  ...SAMPLE_CHART_SUMMARY,
};

export const DATA: any[] = ['A', 'B', 'C', 'D'].map((key) => ({ key, value: Math.random() * 10 }));
