import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UsersComponent } from '@component/users/users.component';
import { CustomersComponent } from '@component/customers/customers.component';
import { PortalService } from 'services/portal.service';
import { CdkPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent implements OnInit {
  portal$: Observable<CdkPortal>;
  constructor(private portalService: PortalService) {

  } 
   
  ngOnInit(): void {
      this.portal$ =  this.portalService.portal$
  }
}
