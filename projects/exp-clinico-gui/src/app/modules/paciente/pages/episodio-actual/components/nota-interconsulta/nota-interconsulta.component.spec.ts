import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaInterconsultaComponent } from './nota-interconsulta.component';

describe('NotaInterconsultaComponent', () => {
  let component: NotaInterconsultaComponent;
  let fixture: ComponentFixture<NotaInterconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaInterconsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
