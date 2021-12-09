import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioslistComponent } from './usuarioslist.component';

describe('UsuarioslistComponent', () => {
  let component: UsuarioslistComponent;
  let fixture: ComponentFixture<UsuarioslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
