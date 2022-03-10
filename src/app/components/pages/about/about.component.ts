import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  // About
  aboutgrid = [
    {icon:'assets/images/who.png',title:'Who We Are?',text:'In order to save time you have to break down the content strategy for the event or conference'},
    {icon:'assets/images/what.png',title:'What We Do?',text:'In order to save time you have to break down the content strategy for the event or conference'},
    {icon:'assets/images/reg.png',title:'Register Now',text:'In order to save time you have to break down the content strategy for the event or conference'},
  ];
  aboutimg = 'assets/images/about-7.jpg';
  sign = 'assets/images/sign-1.png';
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

  ngOnInit(): void {
  }

}
