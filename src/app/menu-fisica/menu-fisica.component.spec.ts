import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFisicaComponent } from './menu-fisica.component';

describe('MenuFisicaComponent', () => {
  let component: MenuFisicaComponent;
  let fixture: ComponentFixture<MenuFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
