import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseApp, AngularFireModule } from '@angular/fire';

import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { environment } from '../environments/environment';

import { LoansComponent } from './loans/loans.component';
import { LoanComponent } from './loans/loan/loan.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoansComponent,
    LoanComponent,
    LoanListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
