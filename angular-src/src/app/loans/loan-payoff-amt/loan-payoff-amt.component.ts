import { Component, OnInit } from '@angular/core';

import { LoanService } from '../shared/loan.service';
import { Loan } from '../shared/loan.model';

@Component({
  selector: 'app-loan-payoff-amt',
  templateUrl: './loan-payoff-amt.component.html',
  styleUrls: ['./loan-payoff-amt.component.scss']
})
export class LoanPayoffAmtComponent implements OnInit {

  loanPayoffTotal: number;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanPayoffTotal = 0;

    const x = this.loanService.getData();
    x.snapshotChanges().subscribe(item => {

      this.loanPayoffTotal = item.map((ele) => {
        return ele.payload.toJSON()['payoff_amt'];
      }).reduce((acc, curr) => {
        return acc + curr;
      });
    });
  }

}
