import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pedido1Component } from './pedido1.component';

describe('Pedido1Component', () => {
  let component: Pedido1Component;
  let fixture: ComponentFixture<Pedido1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pedido1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pedido1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
