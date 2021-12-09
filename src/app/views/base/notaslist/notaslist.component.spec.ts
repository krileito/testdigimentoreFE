import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaslistComponent } from './notaslist.component';

describe('NotaslistComponent', () => {
  let component: NotaslistComponent;
  let fixture: ComponentFixture<NotaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
