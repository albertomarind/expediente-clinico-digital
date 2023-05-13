import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoresRiesgoComponent } from './factores-riesgo.component';

describe('FactoresRiesgoComponent', () => {
  let component: FactoresRiesgoComponent;
  let fixture: ComponentFixture<FactoresRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoresRiesgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoresRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
