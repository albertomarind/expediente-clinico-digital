import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateComponent } from 'projects/exp-clinico-gui/src/app/pages/private/components/private.component';

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
