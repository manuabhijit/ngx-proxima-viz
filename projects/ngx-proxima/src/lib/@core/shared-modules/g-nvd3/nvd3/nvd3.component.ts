import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import * as nv from 'nvd3';
import { NVD3_OPTIONS, NVD3_OPTIONS_2 } from '../@datasets/nvd3-options.dataset';
import d3_save_svg from 'd3-save-svg';

@Component({
  selector: 'lib-nvd3',
  template: '',
  styleUrls: ['./nvd3.component.css'],
})
export class Nvd3Component implements OnChanges, OnDestroy {
  @Input() options: any;
  @Input() data: any;
  @Input() public set saveChartAsSvgRequest(_) {
    this.save();
  }

  public el: HTMLElement;
  public chart: any;
  public chartType: string;
  public svg: any;

  private isDownloadAble: boolean = false;

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  public ngOnChanges(_: SimpleChanges): void {
    if (!this.options) throw new Error('Options not found.');
    if (!this.chart || this.chartType !== this.options.chart.type) {
      this.initChart(this.options);
    } else {
      this.updateWithOptions(this.options);
    }
  }

  public initChart(options): void {
    this.clearNvd3ChartElement();
    if (!options) return;

    // Initialize chart with specific type
    this.chart = nv.models[options.chart.type]();

    this.chartType = this.options.chart.type;

    // Generate random chart ID
    this.chart.id = Math.random().toString(36).substr(2, 15);

    this.updateWithOptions(options);

    nv.addGraph(() => {
      if (!this.chart) return;
      if (this.chart.resizeHandler) this.chart.resizeHandler.clear();

      this.chart.resizeHandler = nv.utils.windowResize(() => {
        this.chart && this.chart.update && this.chart.update();
      });

      return this.chart;
    }, options.chart['callback']);
    nv.utils.windowResize(this.chart.update);
  }

  public updateWithOptions(options: any): void {
    // Exit if options are not yet bound
    if (!options) return;

    for (let key in this.chart) {
      if (!this.chart.hasOwnProperty(key)) continue;

      let value = this.chart[key];

      if (key[0] === '_') {
      } else if (NVD3_OPTIONS_2.indexOf(key) >= 0) {
      } else if (key === 'dispatch') {
        this.configureEvents(this.chart[key], options.chart[key]);
      } else if (NVD3_OPTIONS.indexOf(key) >= 0 || (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
        this.configure(this.chart[key], options.chart[key], options.chart.type);
      } else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
      } else if (key === 'tooltips' && options.chart.type === 'boxPlotChart') {
      } else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
      } else if (options.chart[key] === undefined || options.chart[key] === null) {
      } else this.chart[key](options.chart[key]);
    }

    this.updateWithData(this.data);
  }

  /**
   * Update chart with new data.
   * @param data
   */
  public updateWithData(data) {
    if (data) {
      // Select the add <svg> element (create it if necessary) and to render the chart in
      {
        let svgElement = this.el.querySelector('svg');
        if (!svgElement) {
          this.svg = d3.select(this.el).append('svg');
        } else {
          this.svg = d3.select(svgElement);
        }
      }

      this.updateSize();
      this.svg.datum(data).call(this.chart);
      this.isDownloadAble = true;
    }
  }

  public updateSize(): void {
    if (this.svg) {
      const height: string = isNaN(this.options.chart.height) ? '100%' : this.options.chart.height + 'px';
      const width: string = isNaN(this.options.chart.width) ? '100%' : this.options.chart.height + 'px';
      this.svg.attr('height', height).style({ height });
      this.svg.attr('width', width).style({ width });
    }
  }

  public configure(chart, options, chartType: string): void {
    if (chart && options) {
      for (let key in chart) {
        if (!chart.hasOwnProperty(key)) continue;

        let value = chart[key];

        if (key[0] === '_') {
        } else if (key === 'dispatch') this.configureEvents(value, options[key]);
        else if (key === 'tooltip') this.configure(chart[key], options[key], chartType);
        else if (key === 'contentGenerator') {
          if (options[key]) chart[key](options[key]);
        } else if (
          [
            'axis',
            'clearHighlights',
            'defined',
            'highlightPoint',
            'nvPointerEventsClass',
            'options',
            'rangeBand',
            'rangeBands',
            'scatter',
            'open',
            'close',
          ].indexOf(key) === -1
        ) {
          if (options[key] === undefined || options[key] === null) {
          } else chart[key](options[key]);
        }
      }
    }
  }

  public configureEvents(dispatch, options) {
    if (dispatch && options) {
      for (let key in dispatch) {
        if (!dispatch.hasOwnProperty(key)) continue;

        let value = dispatch[key];

        if (options[key] === undefined || options[key] === null) {
        } else dispatch.on(key + '._', options[key]);
      }
    }
  }

  public clearNvd3ChartElement(): void {
    this.el.innerHTML = '';
    if (this.chart && this.chart.tooltip && this.chart.tooltip.id) d3.select('#' + this.chart.tooltip.id()).remove();
    if (nv.tooltip && nv.tooltip.cleanup) nv.tooltip.cleanup();
    if (this.chart && this.chart.resizeHandler) this.chart.resizeHandler.clear();
    this.chart = null;
  }

  save() {
    var config = {
      filename: 'chart',
    };
    if (this.isDownloadAble) d3_save_svg.save(this.svg.node(), config);
  }

  public ngOnDestroy(): void {
    this.clearNvd3ChartElement();
  }
}
