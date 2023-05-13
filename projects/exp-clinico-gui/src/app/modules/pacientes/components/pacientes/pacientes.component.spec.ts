import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesComponent } from 'projects/exp-clinico-gui/src/app/modules/pacientes/components/pacientes/pacientes.component';

describe('PatientsComponent', () => {
  let component: PacientesComponent;
  let fixture: ComponentFixture<PacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
