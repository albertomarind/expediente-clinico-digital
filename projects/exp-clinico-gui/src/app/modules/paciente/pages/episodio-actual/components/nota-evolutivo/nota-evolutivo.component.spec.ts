import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEvolutivoComponent } from './nota-evolutivo.component';

describe('NotaEvolutivoComponent', () => {
  let component: NotaEvolutivoComponent;
  let fixture: ComponentFixture<NotaEvolutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaEvolutivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaEvolutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
