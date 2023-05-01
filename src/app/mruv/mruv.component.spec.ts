import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MruvComponent } from './mruv.component';

describe('MruvComponent', () => {
  let component: MruvComponent;
  let fixture: ComponentFixture<MruvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MruvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MruvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
