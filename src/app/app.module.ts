import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from '@component/customers/customers.component';
import { UsersComponent } from '@component/users/users.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent }, 
    { path: 'customers', component: CustomersComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PortalModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
