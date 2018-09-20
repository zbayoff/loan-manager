import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.scss']
})
export class LoanComponent implements OnInit {

  constructor(private loanService: LoanService, private dialogRef: MatDialogRef<LoanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  // constructor(private loanService: LoanService) {

  //    }

  onSubmit(loanForm: NgForm) {
    if (loanForm.value.$key == null) {
      this.loanService.insertLoan(loanForm.value);
    } else {
      this.loanService.updateLoan(loanForm.value);
    }

    this.resetForm(loanForm);
  }

  resetForm(loanForm?: NgForm) {
    this.dialogRef.close();
    // if (loanForm != null) {
    //   loanForm.reset();
    // }
    this.loanService.selectedLoan = {
      $key: null,
      name: '',
      payoff_amt: 0,
      interest_rate: 0,
      min_monthly_payment: 0,
      type: ''
    };


  }

  ngOnInit() {
    // console.log('loan dialog created');
    // this.resetForm();

  }

}
