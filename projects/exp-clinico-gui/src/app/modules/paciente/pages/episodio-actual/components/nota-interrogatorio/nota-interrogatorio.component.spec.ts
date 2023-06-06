import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaInterrogatorioComponent } from './nota-interrogatorio.component';

describe('NotaInterrogatorioComponent', () => {
  let component: NotaInterrogatorioComponent;
  let fixture: ComponentFixture<NotaInterrogatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaInterrogatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaInterrogatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
