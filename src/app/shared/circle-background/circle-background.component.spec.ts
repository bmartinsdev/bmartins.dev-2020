import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBackgroundComponent } from './circle-background.component';

describe('CircleBackgroundComponent', () => {
  let component: CircleBackgroundComponent;
  let fixture: ComponentFixture<CircleBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
