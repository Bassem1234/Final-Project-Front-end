import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersdetailsComponent } from './speakersdetails.component';

describe('SpeakersdetailsComponent', () => {
  let component: SpeakersdetailsComponent;
  let fixture: ComponentFixture<SpeakersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
