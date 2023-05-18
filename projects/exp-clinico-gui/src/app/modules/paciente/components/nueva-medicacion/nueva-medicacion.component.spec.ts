import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaMedicacionComponent } from './nueva-medicacion.component';

describe('NuevaMedicacionComponent', () => {
  let component: NuevaMedicacionComponent;
  let fixture: ComponentFixture<NuevaMedicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaMedicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaMedicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
