import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiasComponent } from 'projects/exp-clinico-gui/src/app/modules/paciente/pages/cirugias/cirugias.component';

describe('CirugiaComponent', () => {
  let component: CirugiasComponent;
  let fixture: ComponentFixture<CirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirugiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
