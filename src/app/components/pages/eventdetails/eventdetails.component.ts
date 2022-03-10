import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup'; 

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements AfterViewInit {

  constructor() { }
  // Event details
  eventimg = 'assets/images/event-single-1.jpg';
  eventvideoposter = 'assets/images/video-1.jpg';
  contactbg = 'assets/images/get-1.jpg';
  programlist = [
    {icon:'coffee',title:'Coffee'},
    {icon:'video',title:'Video'},
    {icon:'award',title:'Awards'},
    {icon:'gift',title:'Gifts'},
  ];

  // Speakers
  speakersblock = [
    { img: 'assets/images/team-1.png', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/team-2.png', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/team-3.png', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/team-4.png', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
    { img: 'assets/images/team-5.png', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/team-6.png', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/team-7.png', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/team-8.png', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
  ];
  teamConfig = {
    arrows: true,
    dots: false,
    slidesToShow: 4,
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  } 

}
