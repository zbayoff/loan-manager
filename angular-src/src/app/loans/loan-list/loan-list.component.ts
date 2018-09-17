import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoanComponent } from '../loan/loan.component';

import { LoanService } from '../shared/loan.service';
import { Loan } from '../shared/loan.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  loanList: Loan[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'payoff_amt', 'interest_rate', 'min_monthly_payment', 'type', 'actions'];

  constructor(private loanService: LoanService, public dialog: MatDialog) { }

  onEdit(loan: Loan) {
    this.loanService.selectedLoan = Object.assign({}, loan);
    this.dialog.open(LoanComponent);
  }


  onDelete(key: string) {
    if (confirm('Are you sure you want to delete this loan?') === true) {
      this.loanService.deleteLoan(key);
    }

  }



  ngOnInit() {
    const x = this.loanService.getData();

    x.snapshotChanges().subscribe(item => {
      this.loanList = [];
      item.forEach(ele => {
        const y = ele.payload.toJSON();
        y['$key'] = ele.key;
        this.loanList.push(y as Loan);
      });


      this.dataSource.data = this.loanList;

    });



  }

}
