import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  activePortal = new Subject<TemplatePortal>();
  data  = new Subject<any>();

  readonly portal$ = this.activePortal.asObservable();
  readonly data$ = this.data.asObservable();


  constructor() {
  
  }

  setPortal(portal: TemplatePortal) {
    this.activePortal.next(portal);
  }

  setData(data: any) {
    this.data.next(data);
  }
}
