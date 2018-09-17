import { Component, OnInit } from '@angular/core';

import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }

}
