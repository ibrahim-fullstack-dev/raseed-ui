import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentActions } from './urgent-actions';

describe('UrgentActions', () => {
  let component: UrgentActions;
  let fixture: ComponentFixture<UrgentActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrgentActions],
    }).compileComponents();

    fixture = TestBed.createComponent(UrgentActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
