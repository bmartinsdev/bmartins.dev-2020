import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughCardComponent } from './lugh-card.component';

describe('LughCardComponent', () => {
  let component: LughCardComponent;
  let fixture: ComponentFixture<LughCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
