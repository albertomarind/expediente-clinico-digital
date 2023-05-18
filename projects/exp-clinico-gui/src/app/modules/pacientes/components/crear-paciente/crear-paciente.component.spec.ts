import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPacienteComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/crear-paciente/crear-paciente.component';

describe('AgregarPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
