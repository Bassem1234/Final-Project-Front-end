import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup'; 

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements AfterViewInit {

  constructor() { }
  // Video
  videobg = 'assets/images/intro-video-bg.jpg';
  // Contact 
  contactimg = 'assets/images/contact-1.jpg';

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  } 

}
