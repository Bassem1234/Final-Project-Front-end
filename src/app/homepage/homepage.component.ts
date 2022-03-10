import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  registerForm:any;
  pass = false;
  cpass = false;
  events:any;
  constructor(private router : Router, private eventService: EventsService) { }
// Banner
bannerbg = 'assets/images/banner-bg-2.jpg';
shape2 = 'assets/images/shape/shape-2.png';
shape3 = 'assets/images/shape/shape-3.png';
bannershape = 'assets/images/shape/shape-1.png';
// About
aboutimg = 'assets/images/about-2.jpg';
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

// App
appimg = 'assets/images/app-1.png';
contactbg = 'assets/images/contact-bg-2.jpg';
// Blog post
blogpost = [
  { img: 'assets/images/events/festival.png', title: 'Festival De Carthage 2022', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
  { img: 'assets/images/events/concert.jpg', title: 'Les Dunes Electroniques', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
  { img: 'assets/images/events/film.jpg', title: 'La Fuite', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
  { img: 'assets/images/events/derby.jpg', title: 'Derby de Tunis', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
  { img: 'assets/images/events/theatre.jpg', title: 'VIOLENCE(S)', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
  { img: 'assets/images/events/book.jpg', title: 'Foire du Livre', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit.', date: '23rd May 2020', author: 'Admin' },
];
blogConfig = {
  arrows: true,
  dots: false,
  slidesToShow: 3,
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
    this.eventService.getEvents().subscribe((response:any) =>{
      this.events = response;
    });
    this.registerForm = new FormGroup({
      nameGroup: new FormGroup({
        fName: new FormControl(''),
        lName: new FormControl(''),
      email: new FormControl(''),}),
        password: new FormControl(''),
      phone: new FormControl(''),
      profil: new FormControl('Simple user'),
      adress : new FormControl('')
    });
  }
  ngAfterViewInit(): void {
    
  }
  Promote(){
    this.router.navigate(['/register'])
  }
  hidePass(){
    this.pass = !this.pass;
      }
      showPass(){
        this.pass = !this.pass;
      }
      hidecPass(){
        this.cpass = !this.cpass;
      }
      showcPass(){
        this.cpass = !this.cpass;
      }
}
