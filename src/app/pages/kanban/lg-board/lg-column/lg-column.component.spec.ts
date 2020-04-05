import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgColumnComponent } from './lg-column.component';

describe('LgColumnComponent', () => {
  let component: LgColumnComponent;
  let fixture: ComponentFixture<LgColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
