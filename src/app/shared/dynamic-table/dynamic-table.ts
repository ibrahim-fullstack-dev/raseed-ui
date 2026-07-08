import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { TableColumn } from './dynamic-table.types';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTable {
  // مدخلات إلزامية وأخرى اختيارية باستخدام الـ Signals الجديدة
  columns = input.required<TableColumn[]>();
  data = input.required<any[]>();
  emptyMessage = input<string>('No data available at the moment.');
}
