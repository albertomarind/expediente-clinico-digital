import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/paciente/paciente.component';

describe('PatientComponent', () => {
  let component: PacienteComponent;
  let fixture: ComponentFixture<PacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
