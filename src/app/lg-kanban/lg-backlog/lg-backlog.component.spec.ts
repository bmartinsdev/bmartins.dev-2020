import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgBacklogComponent } from './lg-backlog.component';

describe('LgBacklogComponent', () => {
  let component: LgBacklogComponent;
  let fixture: ComponentFixture<LgBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
