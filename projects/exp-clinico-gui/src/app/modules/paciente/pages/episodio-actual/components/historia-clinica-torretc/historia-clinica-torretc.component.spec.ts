import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaTorretcComponent } from './historia-clinica-torretc.component';

describe('HistoriaClinicaTorretcComponent', () => {
  let component: HistoriaClinicaTorretcComponent;
  let fixture: ComponentFixture<HistoriaClinicaTorretcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaTorretcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaClinicaTorretcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
