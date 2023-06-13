import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEvolucionUtiUccComponent } from './nota-evolucion-uti-ucc.component';

describe('NotaEvolucionUtiUccComponent', () => {
  let component: NotaEvolucionUtiUccComponent;
  let fixture: ComponentFixture<NotaEvolucionUtiUccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaEvolucionUtiUccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaEvolucionUtiUccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
