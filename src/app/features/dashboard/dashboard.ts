import { Component, inject, OnInit, signal } from '@angular/core';
import { MetricCard } from '../../shared/components/metric-card/metric-card.component';
import { ColumnsChartComponent } from '../../shared/components/analytics-columns-chart/analytics.columns.chart';
import { UrgentActions } from './components/urgent-actions/urgent-actions';
import { AnalyticsBreakdown } from '../../shared/components/analytics-breakdown/analytics-breakdown';
import { AnalyticsCircleChart } from '../../shared/components/analytics-circle-chart/analytics-circle-chart';
import { TableComponent } from '../../shared/components/table/table.component';
import { ChartGroupItem } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.types';
import {
  TableColumn,
  TableAction,
  TableActionEvent,
} from '../../shared/components/table/table.types';
import { LucideAngularModule } from 'lucide-angular';

interface Client {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MetricCard,
    ColumnsChartComponent,
    UrgentActions,
    AnalyticsBreakdown,
    AnalyticsCircleChart,
    TableComponent,
    LucideAngularModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  protected readonly tableColumns = signal<TableColumn[]>([
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email Address' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ]);
  protected readonly tableActions = signal<TableAction[]>([
    { type: 'edit', icon: 'icon-edit', label: 'Edit' },
    { type: 'delete', icon: 'icon-trash', label: 'Delete', danger: true },
  ]);
  // ==========================================
  // 1. بيانات جدول العملاء (Clients Table Data)
  // ==========================================
  protected readonly clients = signal<Client[]>([
    { id: 1, name: 'Ahmad Omar', email: 'ahmad@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sara Khalid', email: 'sara@example.com', role: 'Editor', status: 'Active' },
    {
      id: 3,
      name: 'Fahad Suleiman',
      email: 'fahad@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
    { id: 4, name: 'Reem Ali', email: 'reem@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Yousef Hassan', email: 'yousef@example.com', role: 'Viewer', status: 'Active' },
    { id: 6, name: 'Mona Al-Otaibi', email: 'mona@example.com', role: 'Admin', status: 'Active' },
    { id: 7, name: 'Tarek Zayed', email: 'tarek@example.com', role: 'Viewer', status: 'Inactive' },
  ]);

  // ==========================================
  // 2. بيانات أدوات الإحصائيات الجانبية (Widgets Data)
  // ==========================================
  protected readonly salesProfitData = [
    {
      name: 'Profit',
      series: [
        { name: 'W1', value: 12 },
        { name: 'W2', value: 19 },
        { name: 'W3', value: 14 },
        { name: 'W4', value: 24 },
      ],
    },
  ];

  protected readonly salesData = [
    {
      name: 'Sales',
      series: [
        { name: 'W1', value: 110 },
        { name: 'W2', value: 95 },
        { name: 'W3', value: 160 },
        { name: 'W4', value: 210 },
      ],
    },
  ];

  protected readonly bankData = [
    {
      name: 'Bank',
      series: [
        { name: 'W1', value: 45 },
        { name: 'W2', value: 60 },
        { name: 'W3', value: 50 },
        { name: 'W4', value: 65 },
      ],
    },
  ];

  protected readonly cashData = [
    {
      name: 'Cash',
      series: [
        { name: 'W1', value: 25 },
        { name: 'W2', value: 38 },
        { name: 'W3', value: 30 },
        { name: 'W4', value: 42 },
      ],
    },
  ];

  // ==========================================
  // 3. البيانات الافتراضية للمخطط الرئيسي (Main Chart Fallback Data)
  // ==========================================
  protected readonly defaultChartData: ChartGroupItem[] = [
    {
      name: 'Jan',
      series: [
        { name: 'Invoices', value: 45000 },
        { name: 'Payments', value: 32000 },
      ],
    },
    {
      name: 'Feb',
      series: [
        { name: 'Invoices', value: 58000 },
        { name: 'Payments', value: 42000 },
      ],
    },
    {
      name: 'Mar',
      series: [
        { name: 'Invoices', value: 72000 },
        { name: 'Payments', value: 52000 },
      ],
    },
    {
      name: 'Apr',
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
      name: 'Jun',
      series: [
        { name: 'Invoices', value: 95000 },
        { name: 'Payments', value: 82000 },
      ],
    },
    {
      name: 'Jul',
      series: [
        { name: 'Invoices', value: 105000 },
        { name: 'Payments', value: 92000 },
      ],
    },
    {
      name: 'Aug',
      series: [
        { name: 'Invoices', value: 115000 },
        { name: 'Payments', value: 102000 },
      ],
    },
    {
      name: 'Sep',
      series: [
        { name: 'Invoices', value: 125000 },
        { name: 'Payments', value: 112000 },
      ],
    },
    {
      name: 'Oct',
      series: [
        { name: 'Invoices', value: 135000 },
        { name: 'Payments', value: 121000 },
      ],
    },
    {
      name: 'Nov',
      series: [
        { name: 'Invoices', value: 145000 },
        { name: 'Payments', value: 131000 },
      ],
    },
    {
      name: 'Dec',
      series: [
        { name: 'Invoices', value: 155000 },
        { name: 'Payments', value: 141000 },
      ],
    },
  ];
  // الـ Signal المسؤول عن التفاعل مع الـ HTML (يتم تهيئته بالبيانات الافتراضية لحين اكتمال طلب الـ API)
  protected readonly analyticsData = signal<ChartGroupItem[]>(this.defaultChartData);

  protected readonly isAnimated = signal<boolean>(true);
  protected readonly showGrid = signal<boolean>(true);

  protected onTableActionTrigger(event: TableActionEvent<Client>): void {
    const client = event.row;
    console.log(`Action [${event.action}] triggered on client:`, client);

    if (event.action === 'delete') {
      this.deleteClient(client.id);
    }
  }

  protected onRowsSelected(selectedRows: any[]): void {
    console.log('Selected clients updated:', selectedRows);
  }

  private deleteClient(id: number): void {
    this.clients.update((currentClients) => currentClients.filter((c) => c.id !== id));
  }
}
