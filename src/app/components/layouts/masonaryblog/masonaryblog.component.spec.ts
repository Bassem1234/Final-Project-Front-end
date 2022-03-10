import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryblogComponent } from './masonaryblog.component';

describe('MasonaryblogComponent', () => {
  let component: MasonaryblogComponent;
  let fixture: ComponentFixture<MasonaryblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonaryblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonaryblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
