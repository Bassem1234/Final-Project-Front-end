import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements AfterViewInit {

  constructor() { }
  eventimg = 'assets/images/about-2.jpg';
  // Counter
  counterbg = 'assets/images/counter-bg.jpg';
  shape = 'assets/images/shape/shape-7.png';
  videoposter = 'assets/images/event-13.jpg';

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
