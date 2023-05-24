import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesComponent } from 'projects/exp-clinico-gui/src/app/modules/hospitales/components/hospitales.component';

describe('HospitalsComponent', () => {
  let component: HospitalesComponent;
  let fixture: ComponentFixture<HospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});