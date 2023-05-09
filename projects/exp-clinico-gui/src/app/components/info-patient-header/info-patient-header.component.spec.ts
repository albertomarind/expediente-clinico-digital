import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatientHeaderComponent } from './info-patient-header.component';

describe('InfoPatientHeaderComponent', () => {
  let component: InfoPatientHeaderComponent;
  let fixture: ComponentFixture<InfoPatientHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPatientHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPatientHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
