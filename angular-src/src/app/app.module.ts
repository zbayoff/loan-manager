import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rootRouterConfig } from './app.routes';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseApp, AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { environment } from '../environments/environment';

import { LoansComponent } from './loans/loans.component';
import { LoanComponent } from './loans/loan-dialog/loan-dialog.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanPayoffAmtComponent } from './loans/loan-payoff-amt/loan-payoff-amt.component';
import { LoanPayoffTimeComponent } from './loans/loan-payoff-time/loan-payoff-time.component';

import { AuthService } from './core/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserService } from './core/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoansComponent,
    LoanComponent,
    LoanListComponent,
    DashboardComponent,
    LoanPayoffAmtComponent,
    LoanPayoffTimeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  entryComponents: [LoanComponent],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
