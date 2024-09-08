import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { UsersComponent } from '@component/users/users.component';
import { CustomersComponent } from '@component/customers/customers.component';
import { Observable } from 'rxjs';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { PortalService } from 'services/portal.service';

const routes: Routes = [
  { path: '/users', component: UsersComponent, pathMatch: 'full' },
  { path: '/customers', component: CustomersComponent, pathMatch: 'full' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UsersComponent,
    CustomersComponent,
    RouterModule,
    PortalModule
  ],
  providers: [
    PortalService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent implements OnInit, OnDestroy {
  title = 'ngjunkyard';
  portal$: Observable<TemplatePortal | undefined>;
  someData: Observable<any>;

  constructor(private portalService: PortalService, private changeDetectorRef: ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    console.log(this.portalService.portal$);
    this.portal$ = this.portalService.portal$;
    this.portal$.subscribe(portal => {
      console.log('portal', portal);  
      this.changeDetectorRef.detectChanges();
    });
  }   

  ngOnDestroy(): void {
    
  }
}
