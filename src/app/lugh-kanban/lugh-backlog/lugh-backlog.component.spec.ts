import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughBacklogComponent } from './lugh-backlog.component';

describe('LughBacklogComponent', () => {
  let component: LughBacklogComponent;
  let fixture: ComponentFixture<LughBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
