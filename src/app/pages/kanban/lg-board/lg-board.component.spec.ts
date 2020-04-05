import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgBoardComponent } from './lg-board.component';

describe('LgBoardComponent', () => {
  let component: LgBoardComponent;
  let fixture: ComponentFixture<LgBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
