import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughBacklogCardComponent } from './lugh-backlog-card.component';

describe('LughBacklogCardComponent', () => {
  let component: LughBacklogCardComponent;
  let fixture: ComponentFixture<LughBacklogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughBacklogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughBacklogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
