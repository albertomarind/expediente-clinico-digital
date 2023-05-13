import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPacienteHeaderComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/info-paciente-header/info-paciente-header.component';

describe('InfoPatientHeaderComponent', () => {
  let component: InfoPacienteHeaderComponent;
  let fixture: ComponentFixture<InfoPacienteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPacienteHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPacienteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
