import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConversionComponent } from './menu-conversion.component';

describe('MenuComponent', () => {
  let component: MenuConversionComponent;
  let fixture: ComponentFixture<MenuConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
