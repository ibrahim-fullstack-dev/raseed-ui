import { Component } from '@angular/core';
import { MetricCard } from './components/metric-card/metric-card';
import { InvoicesPaymentsChart } from './components/invoices-payments-chart/invoices-payments-chart';
import { UrgentActions } from './components/urgent-actions/urgent-actions';
import { AnalyticsBreakdown } from './components/analytics-breakdown/analytics-breakdown';
import { AnalyticsCircleChart } from './components/analytics-circle-chart/analytics-circle-chart';
import { DashboardTables } from './components/dashboard-alerts-tables/dashboard-Alerts-tables';

@Component({
  selector: 'app-dashboard',
  imports: [
    MetricCard,
    InvoicesPaymentsChart,
    UrgentActions,
    AnalyticsBreakdown,
    AnalyticsCircleChart,
    DashboardTables,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  salesProfitData = [
    {
      name: 'Profit',
      series: [
        { name: 'W1', value: 10 },
        { name: 'W2', value: 15 },
        { name: 'W3', value: 12 },
        { name: 'W4', value: 20 },
      ],
    },
  ];

  salesData = [
    {
      name: 'Sales',
      series: [
        { name: 'W1', value: 100 },
        { name: 'W2', value: 80 },
        { name: 'W3', value: 150 },
        { name: 'W4', value: 190 },
      ],
    },
  ];

  bankData = [
    {
      name: 'Bank',
      series: [
        { name: 'W1', value: 50 },
        { name: 'W2', value: 55 },
        { name: 'W3', value: 52 },
        { name: 'W4', value: 60 },
      ],
    },
  ];

  cashData = [
    {
      name: 'Cash',
      series: [
        { name: 'W1', value: 30 },
        { name: 'W2', value: 40 },
        { name: 'W3', value: 35 },
        { name: 'W4', value: 38 },
      ],
    },
  ];
}
