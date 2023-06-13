import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaPediatricaComponent } from './historia-clinica-pediatrica.component';

describe('HistoriaClinicaPediatricaComponent', () => {
  let component: HistoriaClinicaPediatricaComponent;
  let fixture: ComponentFixture<HistoriaClinicaPediatricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaPediatricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaClinicaPediatricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
