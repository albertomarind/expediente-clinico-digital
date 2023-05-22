import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasDiagnosticasComponent } from './pruebas-diagnosticas.component';

describe('PruebasDiagnosticasComponent', () => {
  let component: PruebasDiagnosticasComponent;
  let fixture: ComponentFixture<PruebasDiagnosticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasDiagnosticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasDiagnosticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
