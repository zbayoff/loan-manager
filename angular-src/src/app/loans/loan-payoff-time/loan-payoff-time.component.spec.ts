import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPayoffTimeComponent } from './loan-payoff-time.component';

describe('LoanPayoffTimeComponent', () => {
  let component: LoanPayoffTimeComponent;
  let fixture: ComponentFixture<LoanPayoffTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPayoffTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPayoffTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
