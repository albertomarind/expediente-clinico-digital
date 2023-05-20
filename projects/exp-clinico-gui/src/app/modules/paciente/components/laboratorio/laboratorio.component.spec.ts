import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/components/laboratorio/laboratorio.component';

describe('CrearPruebaLaboratorioComponent', () => {
  let component: LaboratorioComponent;
  let fixture: ComponentFixture<LaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
