import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements AfterViewInit {

  constructor() { }
  author = 'assets/images/author-1.png';
  quote = 'assets/images/icon/quote.png';
  blogimg4  = 'assets/images/blog-4.jpg';
  blogimg7  = 'assets/images/blog-7.jpg';
  blogimg8  = 'assets/images/blog-8.jpg';

  // post slider
  postslide = [
    {img:'assets/images/blog-4.jpg'},
    {img:'assets/images/blog-5.jpg'},
    {img:'assets/images/blog-6.jpg'},
  ];
  postslideConfig = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    prevArrow:'<div class="arrow prev"><i class="far fa-arrow-left"></i></div>',
    nextArrow:'<div class="arrow next"><i class="fal fa-arrow-right"></i></div>'
  }

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
