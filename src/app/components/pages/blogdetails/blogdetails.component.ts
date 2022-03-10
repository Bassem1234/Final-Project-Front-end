import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  constructor() { }
  blogthumb = 'assets/images/blog-single-1.jpg';
  blogthumb2 = 'assets/images/blog-single-2.jpg';
  quote = 'assets/images/icon/quote-2.png';
  icon = 'assets/images/icon/icon-7.png';
  // Comment
  comment1 = 'assets/images/comment-1.jpg';
  comment2 = 'assets/images/comment-2.jpg';
  comment3 = 'assets/images/comment-3.jpg';
  // Author info
  author = 'assets/images/author-3.jpg';
  authorname = 'Rosalina D. William';
  authordescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.';
  // Releted Tags
  relatedtag = [
    { tag: 'Popular' },
    { tag: 'desgin' },
    { tag: 'ux' },
  ];
  // Social share
  sociallinks = [
    { icon: 'facebook-f', url: '/' },
    { icon: 'twitter', url: '/' },
    { icon: 'behance', url: '/' },
    { icon: 'linkedin', url: '/' },
    { icon: 'pinterest', url: '/' },
  ];
  // Releted Post
  relatedpost = [
    { img: 'assets/images/blog-9.jpg', title: 'A series of iOS 7 inspire vector icons sense.', date: '24th March 2019' },
    { img: 'assets/images/blog-9.jpg', title: 'A series of iOS 7 inspire vector icons sense.', date: '24th March 2019' },
    { img: 'assets/images/blog-9.jpg', title: 'A series of iOS 7 inspire vector icons sense.', date: '24th March 2019' },
  ];
  relatedConfig = {
    arrows: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
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
