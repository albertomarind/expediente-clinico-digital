import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEvolucionComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/nota-evolucion/nota-evolucion.component';

describe('NotaEvaluacionComponent', () => {
  let component: NotaEvolucionComponent;
  let fixture: ComponentFixture<NotaEvolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaEvolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
