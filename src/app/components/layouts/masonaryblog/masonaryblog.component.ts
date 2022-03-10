import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonaryblog',
  templateUrl: './masonaryblog.component.html',
  styleUrls: ['./masonaryblog.component.css']
})
export class MasonaryblogComponent implements OnInit {

  constructor() { }
  showMasonry = true;
  // Masonary blog
  blogimg1  = 'assets/images/gallery-blog-1.jpg';
  blogimg2  = 'assets/images/gallery-blog-2.jpg';
  blogimg3  = 'assets/images/gallery-blog-3.jpg';
  blogimg4  = 'assets/images/gallery-blog-4.jpg';

  ngOnInit(): void {
  }

}
