import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'magnific-popup';
import { EventsService } from 'src/app/events.service';
import { SimpleUserService } from 'src/app/simple-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filtereventtwo',
  templateUrl: './filtereventtwo.component.html',
  styleUrls: ['./filtereventtwo.component.css']
})
export class FiltereventtwoComponent implements AfterViewInit {
  events: any;
  user: any;
  constructor(private eventService: EventsService, private userService: SimpleUserService, private router: Router) {
    this.userService.getUser(localStorage.getItem('userId')).subscribe((response: any) => {
      if (response != null) {
        this.user = response;
      }
    });
  }
  showEvent: any = [];

  ngAfterViewInit(): void {
    this.eventService.getEvents().subscribe((response: any) => {
      this.events = response;
    });
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
    // Filter
    function filter() {
      $(document).ready(function () {
        $(".event-btn").click(function () {
          var value = $(this).attr('data-filter');
          if (value == "all") {
            $('.filter-item').show(1000);
          }
          else {
            $(".filter-item").not('.' + value).hide(3000);
            $('.filter-item').filter('.' + value).show(3000);
          }
        });
      });
      $(".event-btn").click(function () {
        if (!$(this).hasClass('active_btn')) {
          $(".event-btn").removeClass("active_btn");
          $(this).addClass("active_btn");
        }
      });
    }

    filter();
  }
  goToEventDetails(input: number) {
    localStorage.setItem('eventId', JSON.stringify(input));
  }
  addToBasket(input: number) {
    let exist = false;
    if (this.user == undefined) {
      this.showSuccessMessage(
        '',
        'you should login to book tickets',
        'error',
        true,
      )
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      for (let i = 0; i < this.user.basket.length; i++) {
        if (this.user.basket[i].eventName == this.events[input].eventName) {
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
        this.user.basket.push(this.events[input]);
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
