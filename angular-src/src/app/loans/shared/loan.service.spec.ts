import { TestBed, inject } from '@angular/core/testing';

import { LoanService } from './loan.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService]
    });
  });

  it('should be created', inject([LoanService], (service: LoanService) => {
    expect(service).toBeTruthy();
  }));
});
