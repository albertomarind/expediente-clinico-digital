import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioActualComponent } from './episodio-actual.component';

describe('EpisodioActualComponent', () => {
  let component: EpisodioActualComponent;
  let fixture: ComponentFixture<EpisodioActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodioActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodioActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
