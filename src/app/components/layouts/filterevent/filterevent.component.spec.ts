import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltereventComponent } from './filterevent.component';

describe('FiltereventComponent', () => {
  let component: FiltereventComponent;
  let fixture: ComponentFixture<FiltereventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltereventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltereventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
