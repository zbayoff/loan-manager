import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


import { Loan } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loanList: AngularFireList<any>;
  selectedLoan: Loan = new Loan();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.loanList = this.firebase.list('loans');
    return this.loanList;
  }

  insertLoan(loan: Loan) {
    this.loanList.push({
      name: loan.name,
      payoff_amt: loan.payoff_amt,
      interest_rate: loan.interest_rate,
      min_monthly_payment: loan.min_monthly_payment,
      type: loan.type,
    });
  }

  updateLoan(loan: Loan) {
    this.loanList.update(loan.$key, {
      name: loan.name,
      payoff_amt: loan.payoff_amt,
      interest_rate: loan.interest_rate,
      min_monthly_payment: loan.min_monthly_payment,
      type: loan.type,
    });
  }

  deleteLoan($key: string) {
    this.loanList.remove($key);
  }


}
