import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';
import { LoadingService } from 'src/app/loading.service';
import { SimpleUserService } from 'src/app/simple-user.service';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements AfterViewInit {
registerForm:any;
pass = false;
cpass = false;
events:any;
user: any;
loading$ = this.loader.loading$;
  constructor(private router: Router, private eventService: EventsService, private userService: SimpleUserService, public loader: LoadingService) {
    this.userService.getUser(localStorage.getItem('userId')).subscribe((response: any) => {
      if (response != null) {
        this.user = response;
      }
    });
   }

  
  
  // App
  appimg = 'assets/images/app-1.png';
  contactbg = 'assets/images/contact-bg-2.jpg';
  // Blog post
 
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
ngOnInit(){
this.eventService.getEvents().subscribe((response:any) =>{
    this.events = response;
  });
  this.registerForm = new FormGroup({
    nameGroup: new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
    email: new FormControl(''),}),
    passwordGroup: new FormGroup({
      password: new FormControl(''),
      cpassword: new FormControl('')
    }),
    phone: new FormControl(''),
    profil: new FormControl('Simple user'),
    adress : new FormControl('')
  });
}
  ngAfterViewInit(): void {
    
  }
  Promote(){
    localStorage.setItem('prom', 'true');
    this.router.navigate(['/my-account'])
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
  addToBasket(){
    let exist = false;
    if (this.user == undefined) {
      this.router.navigate(['/login']);
    } else {
      for (let i = 0; i < this.user.basket.length; i++) {
        if (this.user.basket[i].eventName == this.events[this.events.length -1].eventName) {
          exist = true;
        }
      }

      if (exist) {
        alert('event is already in your basket');
      }
      else {
        this.user.basket.push(this.events[this.events.length -1]);
        this.userService.addEventToBasket(localStorage.getItem('userId'), this.user).subscribe((response: any) => {
          alert(response);
        });
      }
    }
  }
  goToEventDetails(input: number) {
    localStorage.setItem('eventId', JSON.stringify(input));
  }
}
