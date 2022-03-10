import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { EventsService } from '../events.service';
import { SimpleUserService } from '../simple-user.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  indice = JSON.parse(localStorage.getItem('eventId'));
  events:any;
  Event:any;
  map:any;
  user:any;
  videobg = 'assets/images/test1.mp4';
  constructor(private eventService: EventsService, public sanitizer: DomSanitizer, private userService: SimpleUserService, 
    private router: Router) {
    this.userService.getUser(localStorage.getItem('userId')).subscribe((response: any) => {
      if (response != null) {
        this.user = response;
      }
    });
   }
  marker = 'assets/images/icon/marker.png';
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((response:any) =>{
      this.Event = response[this.indice];
      this.map = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${response[this.indice].adress}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    });
  }
ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
  }
  addToBasket(){
    let exist = false;
    if (this.user == undefined) {
      this.router.navigate(['/login']);
    } else {
      for (let i = 0; i < this.user.basket.length; i++) {
        if (this.user.basket[i].eventName == this.Event.eventName) {
          exist = true;
        }
      }

      if (exist) {
        this.showSuccessMessage(
          '',
          'event is already in your basket',
          'error',
          true,
        )
      }
      else {
        this.user.basket.push(this.Event);
        this.userService.addEventToBasket(localStorage.getItem('userId'), this.user).subscribe((response: any) => {
          if(response.message == 'event added to your basket successfully'){
            this.showSuccessMessage(
              '',
              response.message,
              'success',
              true,
            )
          }
          else {
            this.showSuccessMessage(
              '',
              response.message,
              'error',
              true,
            )
          }
        });
      }
    }
  }
  showSuccessMessage(
    title: any, message: any, icon = null,
    showCancelButton = false) {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
    });
  }
}
