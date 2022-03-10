import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent implements OnInit {

  constructor() { }
  // Sponsors
  sponsorspost = [
    {img:'assets/images/sponsors-1.png'},
    {img:'assets/images/sponsors-2.png'},
    {img:'assets/images/sponsors-3.png'},
    {img:'assets/images/sponsors-4.png'},
    {img:'assets/images/sponsors-5.png'},
    {img:'assets/images/sponsors-6.png'},
    {img:'assets/images/sponsors-7.png'},
    {img:'assets/images/sponsors-8.png'},
    {img:'assets/images/sponsors-9.png'},
  ];

  ngOnInit(): void {
  }

}
