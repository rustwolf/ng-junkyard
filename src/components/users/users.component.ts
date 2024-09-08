import { CdkPortal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { PortalService } from 'services/portal.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {

  users = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];
  @ViewChild(CdkPortal, { static: true }) portalContent: CdkPortal
  portal: TemplatePortal<any>;

  constructor(private portalService: PortalService, private viewContainerRef: ViewContainerRef, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.portal = new TemplatePortal(this.portalContent, this.viewContainerRef);
    console.log('we Are here');
    this.portalService.setPortal(this.portalContent);
    this.changeDetectorRef.detectChanges();
   
  }

  ngOnDestroy(): void {
    // this.portalService.setPortal();
    this.portalContent.detach();
  }
}
