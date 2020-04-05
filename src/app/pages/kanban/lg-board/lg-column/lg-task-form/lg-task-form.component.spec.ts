import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTaskFormComponent } from './lg-task-form.component';

describe('LgTaskFormComponent', () => {
  let component: LgTaskFormComponent;
  let fixture: ComponentFixture<LgTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
