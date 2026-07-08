export interface TableColumn {
  key: string; // المفتاح المطابق للحقل في كائن البيانات (مثل: 'amount')
  label: string; // العنوان الذي سيظهر في أعلى العمود (مثل: 'المبلغ' أو 'Amount')
  type?: 'text' | 'currency' | 'date' | 'badge'; // نوع البيانات لتحديد طريقة المعالجة والتنسيق
}
