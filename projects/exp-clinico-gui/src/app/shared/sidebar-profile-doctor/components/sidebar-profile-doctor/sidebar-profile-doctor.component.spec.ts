import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileDoctorComponent } from './sidebar-profile-doctor.component';

describe('SidebarProfileDoctorComponent', () => {
  let component: SidebarProfileDoctorComponent;
  let fixture: ComponentFixture<SidebarProfileDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProfileDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
