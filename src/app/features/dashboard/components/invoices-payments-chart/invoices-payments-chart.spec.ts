import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPaymentsChart } from './invoices-payments-chart';

describe('InvoicesPaymentsChart', () => {
  let component: InvoicesPaymentsChart;
  let fixture: ComponentFixture<InvoicesPaymentsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesPaymentsChart],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicesPaymentsChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
