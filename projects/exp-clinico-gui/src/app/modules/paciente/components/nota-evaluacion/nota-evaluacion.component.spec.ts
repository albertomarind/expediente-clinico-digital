import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEvaluacionComponent } from './nota-evaluacion.component';

describe('NotaEvaluacionComponent', () => {
  let component: NotaEvaluacionComponent;
  let fixture: ComponentFixture<NotaEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaEvaluacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
