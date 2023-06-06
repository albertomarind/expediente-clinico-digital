import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNotasComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/pages/episodio-actual/components/lista-notas/lista-notas.component';

describe('NotaEvaluacionComponent', () => {
  let component: ListaNotasComponent;
  let fixture: ComponentFixture<ListaNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
