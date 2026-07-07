import { Component, Input } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-metric-card',
  imports: [LineChartModule],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css',
})
export class MetricCard {
  @Input() title: string = '';
  @Input() currentMonthValue: string = '0.00%';
  @Input() lastMonthValue: string = '0';
  @Input() chartData: any[] = [];
  animations: boolean = true;
}
