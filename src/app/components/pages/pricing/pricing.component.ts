import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }
  // Pricing
  pricingbg = 'assets/images/pricing-bg-1.jpg';
  dailypricing = [
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
  ];
  nightpricing = [
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
    {title:'Early Bird',price:'45',text:'In order to save time you have to break down the content strategy for the event or conference.'},
  ];
  // Pricing
  pricebox = [
    {title:'Early Bird Membership',price:'45',id:1},
    {title:'Early Bird Membership',price:'999',id:2},
    {title:'Early Bird Membership',price:'299',id:3},
  ];

  ngOnInit(): void {
  }

}
