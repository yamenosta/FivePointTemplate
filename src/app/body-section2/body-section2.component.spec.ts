import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySection2Component } from './body-section2.component';

describe('BodySection2Component', () => {
  let component: BodySection2Component;
  let fixture: ComponentFixture<BodySection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
