import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsComponent } from 'projects/exp-clinico-gui/src/app/features/patients/components/patients/patients.component';

describe('PatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
