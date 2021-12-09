import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoreslistComponent } from './profesoreslist.component';

describe('ProfesoreslistComponent', () => {
  let component: ProfesoreslistComponent;
  let fixture: ComponentFixture<ProfesoreslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesoreslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
