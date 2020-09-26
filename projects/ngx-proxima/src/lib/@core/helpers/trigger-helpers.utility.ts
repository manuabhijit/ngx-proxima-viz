export class TriggerHelperUtility {
  public downloadChartAsSvgCount: number = 0;
  public downloadChartAsPngCount: number = 0;
  public redrawCount: number = 0;

  public saveGraphAsSvg(): void {
    this.downloadChartAsSvgCount++;
  }

  public saveGraphAsPng(): void {
    this.downloadChartAsPngCount++;
  }

  public redrawChart(): void {
    this.redrawCount++;
  }
}
