import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPacienteMobileComponent } from './menu-paciente-mobile.component';

describe('MenuPacienteMobileComponent', () => {
  let component: MenuPacienteMobileComponent;
  let fixture: ComponentFixture<MenuPacienteMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPacienteMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPacienteMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
