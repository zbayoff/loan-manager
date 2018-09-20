import { Component, OnInit } from '@angular/core';

import { LoanService } from '../shared/loan.service';
import { Loan } from '../shared/loan.model';

@Component({
  selector: 'app-loan-payoff-time',
  templateUrl: './loan-payoff-time.component.html',
  styleUrls: ['./loan-payoff-time.component.scss']
})
export class LoanPayoffTimeComponent implements OnInit {

  loansPayoffDates = [];
  loanPayoffDate: any;

  constructor(private loanService: LoanService) { }

  calculatePayoffPeriod(payoff, interest, monthlyPayment) {


    return (-Math.log(1 - (interest / 100 / 12 * payoff / monthlyPayment)) / Math.log(1 + interest / 100 / 12));

    // console.log(payoff);
    // console.log(interest);
    // console.log(monthlyPayment);
    // return 22;
  }

  ngOnInit() {

    const x = this.loanService.getData();
    x.snapshotChanges().subscribe(item => {

      this.loansPayoffDates = [];

      item.forEach((ele) => {
        const loan = ele.payload.toJSON();
        this.loansPayoffDates.push(this.calculatePayoffPeriod(loan['payoff_amt'], loan['interest_rate'], loan['min_monthly_payment']));
      });

      this.loanPayoffDate = 0;
      this.loanPayoffDate = new Date().setMonth(new Date().getMonth() + this.loansPayoffDates.reduce((acc, curr) => {
        return acc + curr;
      }));

      // console.log(new Date().getMonth());



      // this.loanPayoffDate = item.map((ele) => {
      //   return ele.payload.toJSON()['payoff_amt'];
      // }).reduce((acc, curr) => {
      //   return acc + curr;
      // });

      // this.loansPayoffDates.push(this.calculatePayoffPeriod()).reduce((acc, curr) => {
      //   return acc + curr;
      // })

    });
  }

}
