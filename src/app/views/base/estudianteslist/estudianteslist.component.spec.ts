import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteslistComponent } from './estudianteslist.component';

describe('EstudianteslistComponent', () => {
  let component: EstudianteslistComponent;
  let fixture: ComponentFixture<EstudianteslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
