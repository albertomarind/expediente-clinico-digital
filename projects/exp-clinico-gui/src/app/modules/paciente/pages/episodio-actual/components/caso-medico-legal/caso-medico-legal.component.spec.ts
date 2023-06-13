import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoMedicoLegalComponent } from './caso-medico-legal.component';

describe('CasoMedicoLegalComponent', () => {
  let component: CasoMedicoLegalComponent;
  let fixture: ComponentFixture<CasoMedicoLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasoMedicoLegalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasoMedicoLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
