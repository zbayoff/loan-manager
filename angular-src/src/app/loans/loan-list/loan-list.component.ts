import { Component, OnInit } from '@angular/core';

import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }

}
