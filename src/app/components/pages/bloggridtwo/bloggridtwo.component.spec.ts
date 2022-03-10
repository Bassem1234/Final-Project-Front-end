import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggridtwoComponent } from './bloggridtwo.component';

describe('BloggridtwoComponent', () => {
  let component: BloggridtwoComponent;
  let fixture: ComponentFixture<BloggridtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggridtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggridtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
