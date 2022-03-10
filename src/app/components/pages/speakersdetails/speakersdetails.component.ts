import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakersdetails',
  templateUrl: './speakersdetails.component.html',
  styleUrls: ['./speakersdetails.component.css']
})
export class SpeakersdetailsComponent implements OnInit {

  constructor() { }
  speakerimg = 'assets/images/speaker-1.jpg';
  icon = 'assets/images/icon/icon-8.png';
  // Social share
  sociallinks = [
    { icon: 'facebook-f', url: '/' },
    { icon: 'twitter', url: '/' },
    { icon: 'behance', url: '/' },
    { icon: 'linkedin', url: '/' },
    { icon: 'pinterest', url: '/' },
  ];
  // Blog post
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

  ngOnInit(): void {
  }

}
