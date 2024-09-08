import { Routes } from '@angular/router';
import { CustomersComponent } from '@component/customers/customers.component';
import { UsersComponent } from '@component/users/users.component';

export const routes: Routes = [{ path: 'users', component: UsersComponent }, { path: 'customers', component: CustomersComponent }];
