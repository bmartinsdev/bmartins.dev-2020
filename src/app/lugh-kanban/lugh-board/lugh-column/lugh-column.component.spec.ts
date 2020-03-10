import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughColumnComponent } from './lugh-column.component';

describe('LughColumnComponent', () => {
  let component: LughColumnComponent;
  let fixture: ComponentFixture<LughColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
