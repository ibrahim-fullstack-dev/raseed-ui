import { Component } from '@angular/core';
import { BarChartModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-invoices-payments-chart',
  imports: [BarChartModule],
  templateUrl: './invoices-payments-chart.html',
  styleUrl: './invoices-payments-chart.css',
})
export class InvoicesPaymentsChart {
  chartData = [
    {
      name: 'January',
      series: [
        { name: 'Invoices', value: 45000 },
        { name: 'Payments', value: 32000 },
      ],
    },
    {
      name: 'February',
      series: [
        { name: 'Invoices', value: 58000 },
        { name: 'Payments', value: 42000 },
      ],
    },
    {
      name: 'March',
      series: [
        { name: 'Invoices', value: 72000 },
        { name: 'Payments', value: 52000 },
      ],
    },
    {
      name: 'April',
      series: [
        { name: 'Invoices', value: 60000 },
        { name: 'Payments', value: 48000 },
      ],
    },
    {
      name: 'May',
      series: [
        { name: 'Invoices', value: 89000 },
        { name: 'Payments', value: 73000 },
      ],
    },
    {
      name: 'June',
      series: [
        { name: 'Invoices', value: 95000 },
        { name: 'Payments', value: 82000 },
      ],
    },
    {
      name: 'July',
      series: [
        { name: 'Invoices', value: 105000 },
        { name: 'Payments', value: 92000 },
      ],
    },
    {
      name: 'August',
      series: [
        { name: 'Invoices', value: 115000 },
        { name: 'Payments', value: 102000 },
      ],
    },
    {
      name: 'September',
      series: [
        { name: 'Invoices', value: 125000 },
        { name: 'Payments', value: 112000 },
      ],
    },
    {
      name: 'October',
      series: [
        { name: 'Invoices', value: 135000 },
        { name: 'Payments', value: 121000 },
      ],
    },
    {
      name: 'November',
      series: [
        { name: 'Invoices', value: 145000 },
        { name: 'Payments', value: 131000 },
      ],
    },
    {
      name: 'December',
      series: [
        { name: 'Invoices', value: 155000 },
        { name: 'Payments', value: 141000 },
      ],
    },
  ];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showGridLines: boolean = true;
  animations: boolean = true;

  colorScheme: any = {
    domain: ['#3b82f6', '#10b981'],
  };

  yAxisTickFormatting(val: any): string {
    if (val >= 1000) {
      return (val / 1000).toLocaleString() + 'k';
    }
    return val.toLocaleString();
  }
}
