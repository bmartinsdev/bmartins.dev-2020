import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughBoardComponent } from './lugh-board.component';

describe('LughBoardComponent', () => {
  let component: LughBoardComponent;
  let fixture: ComponentFixture<LughBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
