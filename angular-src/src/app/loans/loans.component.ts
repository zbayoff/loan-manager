import { Component, OnInit } from '@angular/core';

import { LoanService } from './shared/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }

}
