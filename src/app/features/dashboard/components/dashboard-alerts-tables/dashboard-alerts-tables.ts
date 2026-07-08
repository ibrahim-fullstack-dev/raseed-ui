import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { DynamicTable } from '../../../../shared/dynamic-table/dynamic-table';
import { TableColumn } from '../../../../shared/dynamic-table/dynamic-table.types';

@Component({
  selector: 'app-dashboard-tables',
  standalone: true,
  imports: [DynamicTable], // استيراد الجدول المشترك
  templateUrl: './dashboard-Alerts-tables.html',
  styleUrl: './dashboard-Alerts-tables.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTables {
  // 1. إعدادات جدول المنتجات الأكثر مبيعاً
  protected readonly expireAlert: TableColumn[] = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'SKU', label: 'SKU', type: 'text' },
    { key: 'branch', label: 'Branch', type: 'text' },
    { key: 'date', label: 'Expiry Date', type: 'date' },
    { key: 'stock', label: 'Stock', type: 'text' },
  ];

  protected readonly expireAlertData = signal([
    {
      name: 'Nexium 40mg',
      SKU: 'SKU-001',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
    {
      name: 'Lipitor 10mg',
      SKU: 'SKU-002',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
    {
      name: 'Augmentin 1g',
      SKU: 'SKU-003',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
  ]);

  protected readonly limitAlert: TableColumn[] = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'SKU', label: 'SKU', type: 'text' },
    { key: 'branch', label: 'Branch', type: 'text' },
    { key: 'date', label: 'Expiry Date', type: 'date' },
    { key: 'stock', label: 'Stock', type: 'text' },
  ];

  protected readonly limitAlertData = signal([
    {
      name: 'Nexium 40mg',
      SKU: 'SKU-001',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
    {
      name: 'Lipitor 10mg',
      SKU: 'SKU-002',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
    {
      name: 'Augmentin 1g',
      SKU: 'SKU-003',
      branch: 'Main',
      date: new Date(2026, 7, 15),
      stock: '100',
    },
  ]);
}
