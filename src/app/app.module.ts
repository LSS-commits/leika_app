import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LoginComponent } from './components/login/login.component';
import { LoggedComponent } from './components/logged/logged.component';
import { TransferComponent } from './components/logged/transfer/transfer.component';
import { AccountsComponent } from './components/logged/accounts/accounts.component';
import { ContactComponent } from './components/logged/contact/contact.component';
import { TransactionsComponent } from './components/logged/accounts/transactions/transactions.component';
import { SpecialComponent } from './components/logged/accounts/transactions/special/special.component';
import { HistoryTransactionsComponent } from './components/logged/accounts/transactions/history-transactions/history-transactions.component';
import { AccountpickerComponent } from './components/logged/accounts/accountpicker/accountpicker.component';
import { InterceptorServiceService } from './services/interceptor-service.service';
import { NewMoveComponent } from './components/logged/transfer/new-move/new-move.component';
import { BeneficiariesComponent } from './components/logged/transfer/beneficiaries/beneficiaries.component';
import { ManageComponent } from './components/logged/manage/manage.component';
import { TransactionDetailsComponent } from './components/logged/accounts/transactions/transaction-details/transaction-details.component';
import { PendingLeikodeTransactionsComponent } from './components/logged/accounts/transactions/special/pending-leikode-transactions/pending-leikode-transactions.component';
import { UncheckedrejectedTransactionsComponent } from './components/logged/accounts/transactions/special/uncheckedrejected-transactions/uncheckedrejected-transactions.component';
import { IncomingTransactionsComponent } from './components/logged/accounts/transactions/special/incoming-transactions/incoming-transactions.component';
import { LeikodeValidationComponent } from './components/logged/leikode-validation/leikode-validation.component';
import { CrudService } from './services/crud.service';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/logged/accounts/cards/cards.component';
import { StatsComponent } from './components/logged/accounts/stats/stats.component';
import { DocumentsComponent } from './components/logged/manage/documents/documents.component';
import { MovesHistoryComponent } from './components/logged/transfer/moves-history/moves-history.component';

@NgModule({
  declarations: [
    AppComponent,
    // already declared and exported in auth module
    // LoginComponent,
    LoggedComponent,
    TransferComponent,
    AccountsComponent,
    ContactComponent,
    TransactionsComponent,
    SpecialComponent,
    HistoryTransactionsComponent,
    AccountpickerComponent,
    TransactionDetailsComponent,
    NewMoveComponent,
    BeneficiariesComponent,
    ManageComponent,
    PendingLeikodeTransactionsComponent,
    UncheckedrejectedTransactionsComponent,
    IncomingTransactionsComponent,
    LeikodeValidationComponent,
    MainComponent,
    CardsComponent,
    StatsComponent,
    DocumentsComponent,
    MovesHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServiceService,
    multi: true
  },
  CrudService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
