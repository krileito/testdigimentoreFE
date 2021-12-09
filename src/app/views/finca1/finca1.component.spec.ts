import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finca1Component } from './finca1.component';

describe('Finca1Component', () => {
  let component: Finca1Component;
  let fixture: ComponentFixture<Finca1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finca1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finca1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
