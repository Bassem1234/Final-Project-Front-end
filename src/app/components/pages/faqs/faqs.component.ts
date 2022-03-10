import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }
  contactbg = 'assets/images/get-1.jpg';
  // Pricing
  pricebox = [
    {title:'Early Bird Membership',price:'45',id:1},
    {title:'Early Bird Membership',price:'999',id:2},
    {title:'Early Bird Membership',price:'299',id:3},
  ];

  ngOnInit(): void {
  }

}
