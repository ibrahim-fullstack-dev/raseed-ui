import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { DynamicTable } from '../../../../shared/dynamic-table/dynamic-table';
import { TableColumn } from '../../../../shared/dynamic-table/dynamic-table.types';

@Component({
  selector: 'app-dashboard-tables',
  standalone: true,
  imports: [DynamicTable], // استيراد الجدول المشترك
  templateUrl: './dashboard-tables.html',
  styleUrl: './dashboard-tables.css',
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
  protected readonly unpaidSales: TableColumn[] = [
    { key: 'invoice-number', label: 'Invoice Number', type: 'text' },
    { key: 'client', label: 'Client', type: 'text' },
    { key: 'type', label: 'Type', type: 'text' },
    { key: 'status', label: 'Status', type: 'text' },
    { key: 'branch', label: 'Branch', type: 'text' },
    { key: 'warehouse', label: 'Warehouse', type: 'text' },
    { key: 'price', label: 'Price', type: 'text' },
  ];

  protected readonly unpaidSalesData = signal([
    {
      'invoice-number': 'INV-2026-0082',
      client: 'Anas Ahmed Trading',
      type: 'Wholesale',
      status: 'Unpaid',
      branch: 'Sanaa Main Branch',
      warehouse: 'Central Store A',
      price: 'YR 1,250,000',
    },
    {
      'invoice-number': 'INV-2026-0082',
      client: 'Mizan Corp LLC',
      type: 'Retail',
      status: 'Partially Paid',
      branch: 'Aden Branch',
      warehouse: 'Sub-Warehouse B',
      price: 'YR 450,000',
    },
    {
      'invoice-number': 'INV-2026-0083',
      client: 'Al-Amal Medical Ltd',
      type: 'Wholesale',
      status: 'Unpaid',
      branch: 'Sanaa Main Branch',
      warehouse: 'Cold Storage C',
      price: 'YR 3,100,000',
    },
    {
      'invoice-number': 'INV-2026-0084',
      client: 'Yemen Tech Solutions',
      type: 'Retail',
      status: 'Unpaid',
      branch: 'Taiz Branch',
      warehouse: 'Central Store A',
      price: 'YR 185,000',
    },
  ]);
}
