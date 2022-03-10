import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

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
  // Team
  teamblock = [
    { img: 'assets/images/event-5.jpg', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/event-6.jpg', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/event-7.jpg', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/event-8.jpg', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
    { img: 'assets/images/event-9.jpg', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/event-10.jpg', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/event-11.jpg', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/event-12.jpg', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
  ];

  ngOnInit(): void {
  }

}
