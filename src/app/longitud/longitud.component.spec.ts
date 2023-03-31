import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongitudComponent } from './longitud.component';

describe('LongitudComponent', () => {
  let component: LongitudComponent;
  let fixture: ComponentFixture<LongitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
