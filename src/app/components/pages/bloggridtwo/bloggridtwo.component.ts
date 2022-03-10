import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloggridtwo',
  templateUrl: './bloggridtwo.component.html',
  styleUrls: ['./bloggridtwo.component.css']
})
export class BloggridtwoComponent implements OnInit {

  constructor() { }
  // Blog grid
  blogpost = [
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-3.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-3.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-3.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
  ];

  ngOnInit(): void {
  }

}
