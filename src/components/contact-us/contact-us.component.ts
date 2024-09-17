import { DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PortalService } from 'services/portal.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements AfterViewInit {

  @ViewChild('portalContent', { static: false }) portalContent: TemplateRef<any>;

  createPortal() {
    return new TemplatePortal(this.portalContent, this.viewContainerRef);
  }

  constructor(private viewContainerRef: ViewContainerRef,
    private portalService: PortalService
  ) {

  }
  ngAfterViewInit(): void {
    let ele = document.getElementById('portalContent');
    let portal = new DomPortal(ele);
    this.portalService.setPortal(portal);
  }

  contactUS() {
    alert('This is nice ');
  }

  

}
