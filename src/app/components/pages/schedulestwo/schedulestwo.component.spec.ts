import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulestwoComponent } from './schedulestwo.component';

describe('SchedulestwoComponent', () => {
  let component: SchedulestwoComponent;
  let fixture: ComponentFixture<SchedulestwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulestwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulestwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
