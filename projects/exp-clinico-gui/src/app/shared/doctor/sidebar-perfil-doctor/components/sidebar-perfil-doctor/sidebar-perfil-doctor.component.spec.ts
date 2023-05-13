import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPerfilDoctorComponent } from 'projects/exp-clinico-gui/src/app/shared/doctor/sidebar-perfil-doctor/components/sidebar-perfil-doctor/sidebar-perfil-doctor.component';

describe('SidebarProfileDoctorComponent', () => {
  let component: SidebarPerfilDoctorComponent;
  let fixture: ComponentFixture<SidebarPerfilDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPerfilDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPerfilDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
