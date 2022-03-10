import {
  Component,
  AfterViewInit
} from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-homethree',
  templateUrl: './homethree.component.html',
  styleUrls: ['./homethree.component.css']
})
export class HomethreeComponent implements AfterViewInit {


  constructor() { }
  // Counter
  counterbg = 'assets/images/counter-bg-3.jpg';
  // About
  aboutimg3 = 'assets/images/about-3.jpg';
  aboutimg4 = 'assets/images/about-4.jpg';
  aboutimg5 = 'assets/images/about-5.jpg';
  aboutimg6 = 'assets/images/about-6.jpg';
  // Video
  videobg = 'assets/images/video-2.jpg';
  // Pricing
  pricingbg = 'assets/images/pricing-bg-1.jpg';
  dailypricing = [
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
  ];
  nightpricing = [
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
    { title: 'Early Bird', price: '45', text: 'In order to save time you have to break down the content strategy for the event or conference.' },
  ];
  // Masonary gallery
  showMasonry = true;
  masonarygallery = [
    { img: 'assets/images/gallery-1.jpg', colclass: 'col-lg-6 col-sm-12' },
    { img: 'assets/images/gallery-2.jpg', colclass: 'col-lg-6 col-sm-12' },
    { img: 'assets/images/gallery-3.jpg', colclass: 'col-lg-3 col-md-6 col-sm-12' },
    { img: 'assets/images/gallery-4.jpg', colclass: 'col-lg-3 col-md-6 col-sm-12' },
  ];
  // Blog post
  blogpostbg = 'assets/images/blog-bg-1.jpg';
  blogpost = [
    { img: 'assets/images/blog-1.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-2.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-3.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-1.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-2.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-3.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
  ];
  blogConfig = {
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    prevArrow: '#arrows .arrow.prev',
    nextArrow: '#arrows .arrow.next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
    // Image popup
    ($('.image-popup') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

  }

}
