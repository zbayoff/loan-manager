import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPayoffAmtComponent } from './loan-payoff-amt.component';

describe('LoanPayoffAmtComponent', () => {
  let component: LoanPayoffAmtComponent;
  let fixture: ComponentFixture<LoanPayoffAmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPayoffAmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPayoffAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
