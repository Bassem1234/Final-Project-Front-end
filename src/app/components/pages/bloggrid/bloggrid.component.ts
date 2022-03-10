import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloggrid',
  templateUrl: './bloggrid.component.html',
  styleUrls: ['./bloggrid.component.css']
})
export class BloggridComponent implements OnInit {

  constructor() { }
  // Blog grid
  blogpost = [
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-1.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
    {img:'assets/images/blog-2.jpg',title:'5 Tips for Creating Content That’s Educational',date:'23rd May 2020',author:'Admin',text:'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.'},
  ];

  ngOnInit(): void {
  }

}
