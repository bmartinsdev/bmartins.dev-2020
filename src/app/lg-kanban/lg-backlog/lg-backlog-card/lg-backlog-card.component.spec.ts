import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgBacklogCardComponent } from './lg-backlog-card.component';

describe('LgBacklogCardComponent', () => {
  let component: LgBacklogCardComponent;
  let fixture: ComponentFixture<LgBacklogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgBacklogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBacklogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
