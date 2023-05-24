import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudCirugiaComponent } from './crear-solicitud-cirugia.component';

describe('CrearSolicitudCirugiaComponent', () => {
  let component: CrearSolicitudCirugiaComponent;
  let fixture: ComponentFixture<CrearSolicitudCirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudCirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSolicitudCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
