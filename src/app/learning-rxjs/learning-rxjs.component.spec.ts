import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRxjsComponent } from './learning-rxjs.component';

describe('LearningRxjsComponent', () => {
  let component: LearningRxjsComponent;
  let fixture: ComponentFixture<LearningRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
