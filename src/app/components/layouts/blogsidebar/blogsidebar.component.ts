import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor() { }
  author = 'assets/images/author-2.jpg';
  advimg = 'assets/images/add-1.jpg';
  // Recent Post
  recentpost = [
    {img:'assets/images/feed-1.jpg',title:'Lorem ipsum dolor sit cing elit, sed do.',date:'24th March 2019'},
    {img:'assets/images/feed-2.jpg',title:'Lorem ipsum dolor sit cing elit, sed do.',date:'24th March 2019'},
    {img:'assets/images/feed-3.jpg',title:'Lorem ipsum dolor sit cing elit, sed do.',date:'24th March 2019'},
    {img:'assets/images/feed-4.jpg',title:'Lorem ipsum dolor sit cing elit, sed do.',date:'24th March 2019'},
  ];
  // Categories
  categories = [
    {title:'Business',count:26},
    {title:'Consultant',count:30},
    {title:'Creative',count:71},
    {title:'UI/UX',count:56},
    {title:'Technology',count:60},
  ];
  // Social share
  sociallinks = [
    {icon:'facebook-f',url:'/'},
    {icon:'twitter',url:'/'},
    {icon:'behance',url:'/'},
    {icon:'linkedin',url:'/'},
    {icon:'pinterest',url:'/'},
  ];
  // Twitter Feeds
  twitterpost = [
    {tweet:'Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ThemeForest https://t.co/2r1POjOjgVC … https://t.co/rDAnPyClu1',date:'November 25, 2018'},
    {tweet:'Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ThemeForest https://t.co/2r1POjOjgVC … https://t.co/rDAnPyClu1',date:'November 25, 2018'},
    {tweet:'Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ThemeForest https://t.co/2r1POjOjgVC … https://t.co/rDAnPyClu1',date:'November 25, 2018'},
  ];
  // Instagram Feeds
  instagrampost = [
    {img:'assets/images/thumb_1.jpg'},
    {img:'assets/images/thumb_2.jpg'},
    {img:'assets/images/thumb_3.jpg'},
    {img:'assets/images/thumb_4.jpg'},
    {img:'assets/images/thumb_5.jpg'},
    {img:'assets/images/thumb_6.jpg'},
    {img:'assets/images/thumb_7.jpg'},
    {img:'assets/images/thumb_8.jpg'},
    {img:'assets/images/thumb_9.jpg'},
  ];
  // Popular Tags
  posttags = [
    {tag:'Popular'},
    {tag:'desgin'},
    {tag:'ux'},
    {tag:'usability'},
    {tag:'develop'},
    {tag:'icon'},
    {tag:'business'},
    {tag:'consult'},
    {tag:'kit'},
    {tag:'keyboard'},
    {tag:'mouse'},
    {tag:'tech'},
  ];

  ngOnInit(): void {
  }

}
