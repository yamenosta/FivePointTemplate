import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySection1Component } from './body-section1.component';

describe('BodySection1Component', () => {
  let component: BodySection1Component;
  let fixture: ComponentFixture<BodySection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
