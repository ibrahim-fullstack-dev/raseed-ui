export interface ChartSeriesItem {
  name: string;
  value: number;
}

export interface ChartGroupItem {
  name: string;
  series: ChartSeriesItem[];
}
