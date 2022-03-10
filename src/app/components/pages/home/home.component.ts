import { AfterViewInit, Component } from '@angular/core';
import  * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }
  // Banner
  bannerbg = 'assets/images/banner-bg.jpg';
  pagescroll = 'assets/images/scroll_btn.png';
  bannershape = 'assets/images/shape/shape-1.png';
  // ABOUT
  aboutimg = 'assets/images/about-thumb.png';
  // intro-video
  videobg = 'assets/images/intro-video-bg.jpg';
  // Team
  teambg = 'assets/images/pattern-bg.jpg';
  teamblock = [
    {icon:'assets/images/icon/icon-1.png',title:'Networking With People',extclass:'',text:'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'},
    {icon:'assets/images/icon/icon-2.png',title:'Mentor Program',extclass:'item-2',text:'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'},
    {icon:'assets/images/icon/icon-3.png',title:'Conference After Party',extclass:'item-3',text:'Events must be memorable to make an impact. Of course the desired impact depends on your goals.'},
  ];
  // counter-area
  counterbg = 'assets/images/counter-bg.jpg';
  shape = 'assets/images/shape/shape-7.png';
  // contact
  contactimg = 'assets/images/contact-1.jpg';

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
