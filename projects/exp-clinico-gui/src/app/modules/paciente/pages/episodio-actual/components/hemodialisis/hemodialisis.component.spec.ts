import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemodialisisComponent } from './hemodialisis.component';

describe('HemodialisisComponent', () => {
  let component: HemodialisisComponent;
  let fixture: ComponentFixture<HemodialisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemodialisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HemodialisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
