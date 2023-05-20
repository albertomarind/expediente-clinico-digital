import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPeticionComponent } from './ver-peticion.component';

describe('VerPeticionComponent', () => {
  let component: VerPeticionComponent;
  let fixture: ComponentFixture<VerPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPeticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
