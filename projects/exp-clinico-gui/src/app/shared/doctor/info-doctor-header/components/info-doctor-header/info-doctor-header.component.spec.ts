import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDoctorHeaderComponent } from 'projects/exp-clinico-gui/src/app/shared/doctor/info-doctor-header/components/info-doctor-header/info-doctor-header.component';

describe('InfoDoctorHeaderComponent', () => {
  let component: InfoDoctorHeaderComponent;
  let fixture: ComponentFixture<InfoDoctorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDoctorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDoctorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
