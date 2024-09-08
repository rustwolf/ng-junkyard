import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { PortalService } from 'services/portal.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) portalContent: CdkPortal;
  title: string;


  constructor(private portalService: PortalService) {

  }

  ngOnInit(): void {
    this.portalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }   

  onAddCustomer() {
    this.title = 'Add Customer';
  }
}
