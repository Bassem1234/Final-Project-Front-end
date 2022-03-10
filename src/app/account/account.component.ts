import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AddEventService } from '../add-event.service';
import { BookTicketService } from '../book-ticket.service';
import { ManagmentServiceService } from '../managment-service.service';
import { PromoterService } from '../promoter.service';
import { SimpleUserService } from '../simple-user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  details = true;
  commands = false;
  add = false;
  edit = false;
  detailForm: any;
  detailData: any;
  pass = false;
  cpass = false;
  schel = false;
  newschel = false;
  aDay: any;
  prom = JSON.parse(localStorage.getItem('prom'));
  subEvData: any;
  eventData: any;


  slideConfig = {
    "slidesToShow": 5, "slidesToScroll": 4, "infinite": false,
    prevArrow: '#arrows .arrow.prev',
    nextArrow: '#arrows .arrow.next',
  };


  eventForm: any;
  id = localStorage.getItem('userId');
  slickPrev() {

  }
  user: any;
  basket: any;
  constructor(private simpleUserService: SimpleUserService, private bookTicketService: BookTicketService, private promoterService: PromoterService
    , private addEventService: AddEventService, private router: Router, private loginService: ManagmentServiceService) {
    this.simpleUserService.getUser(localStorage.getItem('userId')).subscribe((response: any) => {
      if (response != null) {
        this.user = response;
        localStorage.setItem('utilisateur', JSON.stringify(response));
        //Formulaire de la modification des données personnelles
        this.detailForm = new FormGroup({
          nameGroup: new FormGroup({
            fName: new FormControl(response.fName, [Validators.required]),
            lName: new FormControl(response.lName,[Validators.required])
          }),
          phone: new FormControl(response.phone, [Validators.required]),
          email: new FormControl(response.email, [Validators.required]),
          password: new FormControl('', [Validators.required]),
          adress: new FormControl(response.adress, [Validators.required])
        });
        for (let i = 0; i < response.basket.length; i++) {
          this.totalPrice[i] = 0;
        }
      }
    });
    this.promoterService.getPromoter(localStorage.getItem('userId')).subscribe((response: any) => {
      if (response != null) {
        localStorage.setItem('utilisateur', JSON.stringify(response));
        this.user = response;
        this.detailForm = new FormGroup({
          nameGroup: new FormGroup({
            fName: new FormControl(response.fName, [Validators.required]),
            lName: new FormControl(response.lName, [Validators.required])
          }),
          phone: new FormControl(response.phone,[Validators.required]),
          email: new FormControl(response.email,[Validators.required]),
          password: new FormControl('',[Validators.required]),
          adress: new FormControl(response.adress,[Validators.required])
        });
      }
    });
  };
  source: string;
  picture: File;
  formData: any;
  Event: any;
  days: any = [{ day: 1, subEvent: [] }];
  subEvent: any = [];
  dayForm: any;
  indice = 0;
  disable = true;
  editForm: any;
  edForm = false;
  totalPrice = [];
  bask = false;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('utilisateur'));
    localStorage.setItem('days', JSON.stringify(this.days));
    if (this.prom) {
      this.add = true;
      this.details = false;
      this.commands = false;
    }

    this.eventForm = new FormGroup({
      "eventName": new FormControl('', [Validators.required]),
      "title": new FormControl('', [Validators.required]),
      "description": new FormControl('', [Validators.required]),
      "adress": new FormControl('', [Validators.required]),
      "startDate": new FormControl('', [Validators.required]),
      "authorFname": new FormControl(''),
      "authorLname": new FormControl(''),
      "category": new FormControl('Category'),
      "ticketAvailable": new FormControl('', [Validators.required]),
      "price": new FormControl('', [Validators.required]),
      "sevDays": new FormControl(false),
      "endDate": new FormControl(''),
      "schedule": new FormArray([]),
      "picture": new FormControl('')
    });
    this.dayForm = new FormGroup({
      "subEvent": new FormGroup({
        "startTime": new FormControl('', [Validators.required]),
        "endTime": new FormControl('', [Validators.required]),
        "title": new FormControl('', [Validators.required]),
        "description": new FormControl('', [Validators.required]),
        "tickets": new FormControl(''),
        "avTickets": new FormControl(''),
        "price": new FormControl('')
      })
    });
  }
  showdetails() {
    localStorage.setItem('prom', 'false');
    this.details = true;
    this.commands = false;
    this.add = false;
    this.bask = false;
  }
  showBasket() {
    //localStorage.setItem('prom', 'false');
    this.details = false;
    this.commands = false;
    this.add = false;
    this.bask = true;
    this.basket = this.user.basket;
  }
  addEvent() {
    localStorage.setItem('prom', 'false');
    this.add = true;
    this.details = false;
    this.commands = false;
    this.bask = false;
  }
  editProfil() {
    localStorage.setItem('prom', 'false');
    this.edit = true;
  }
  hidePass() {
    this.pass = !this.pass;
  }
  showPass() {
    this.pass = !this.pass;
  }
  hidecPass() {
    this.cpass = !this.cpass;
  }
  showcPass() {
    this.cpass = !this.cpass;
  }
  saveInfoEdit() {
    if (this.user.profile == 'Simple user') {
      this.user.fName = this.detailForm.value.nameGroup.fName;
      this.user.lName = this.detailForm.value.nameGroup.lName;
      this.user.adress = this.detailForm.value.adress;
      this.user.phone = this.detailForm.value.phone;
      this.simpleUserService.updateUser(localStorage.getItem('userId'), this.user, this.detailForm.value.password).subscribe((response: any) => {
        if(response.message == 'your informations are modified successfully'){
          this.showSuccessMessage(
            '',
            response.message,
            'success',
            true,
          )
          setTimeout(() => {
            location.reload();
          }, 2000);
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
      //this.edit = false;
    }
    else {
      this.user.fName = this.detailForm.value.nameGroup.fName;
      this.user.lName = this.detailForm.value.nameGroup.lName;
      this.user.adress = this.detailForm.value.adress;
      this.user.phone = this.detailForm.value.phone;
      this.promoterService.updatePromoter(localStorage.getItem('userId'), this.user, this.detailForm.value.password).subscribe((response: any) => {
        if(response.message == 'your informations are modified successfully'){
          this.showSuccessMessage(
            '',
            response.message,
            'success',
            true,
          )
          setTimeout(() => {
            location.reload();
          }, 2000);
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
      //this.edit = false;
    }
  }
  dismiss() {
    this.edit = false;
  }
  schedule() {
    this.schel = true;
  }
  newSchel() {
    this.newschel = true;
  }
  dismissSchel() {
    this.newschel = false;
  }
  cancelSchel() {
    this.schel = false;
  }
  addDay() {
    this.days = JSON.parse(localStorage.getItem('days'));
    this.days.push({ day: this.days.length + 1, subEvent: [] });
    localStorage.setItem('days', JSON.stringify(this.days));
  }
  selectDay(input: number) {
    this.aDay = this.days[input];
    this.indice = input;
  }

  validate(input: any) {
    let even = {
      event: this.user.basket[input],
      ticketNumber: this.totalPrice[input],
      price: this.totalPrice[input] * this.user.basket[input].price
    }
    this.user.tickets.push(even);
    this.user.basket.splice(input, 1);
    this.simpleUserService.validateTicket(localStorage.getItem('userId'), this.user, this.user.tickets[this.user.tickets.length - 1].event.authorFname, this.user.tickets[this.user.tickets.length - 1].event.authorLname).subscribe((response: any) => {
      if(response.message == 'Tickets validated successfully'){
        this.showSuccessMessage(
          '',
          response.message,
          'success',
          true,
        )
        setTimeout(() => {
          location.reload();
        }, 2000);
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

  showCommands() {
    this.details = false;
    this.commands = true;
    this.add = false;
    this.bask = false;
  }

  saveEvent() {
    this.days = JSON.parse(localStorage.getItem('days'));
    this.eventForm.value.authorFname = this.user.fName;
    this.eventForm.value.authorLname = this.user.lName;
    this.user.events.push(this.eventForm.value);
    this.Event = this.eventForm.value;
    if (this.eventForm.sevDays) {
      this.Event.schedule = this.days;
    }
    else { this.Event.schedule = []; }
    this.formData = new FormData();

    this.formData.append('eventName', this.eventForm.value.eventName);
    this.formData.append('title', this.eventForm.value.title);
    this.formData.append('description', this.eventForm.value.description);
    this.formData.append('startDate', this.eventForm.value.startDate);
    this.formData.append('endDate', this.eventForm.value.endDate);
    this.formData.append('adress', this.eventForm.value.adress);
    this.formData.append('authorFname', this.eventForm.value.authorFname);
    this.formData.append('authorLname', this.eventForm.value.authorLname);
    this.formData.append('category', this.eventForm.value.category);
    this.formData.append('ticketAvailable', this.eventForm.value.ticketAvailable);
    this.formData.append('price', this.eventForm.value.price);
    this.formData.append('schedule', JSON.stringify(this.days));
    this.formData.append('sevDays', this.eventForm.value.sevDays);
    this.formData.append('picture', this.picture.name);
    this.formData.append('file', this.picture);
    this.addEventService.addEvent(this.formData, localStorage.getItem('userId')).subscribe((response: any) => {
      if(response.message == 'Event added successfully'){
        this.showSuccessMessage(
          '',
          response.message,
          'success',
          true,
        )
        setTimeout(() => {
          location.reload();
        }, 2000);
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
    localStorage.removeItem('days');
  }

  saveSubEv() {
    this.days = JSON.parse(localStorage.getItem('days'));
    this.days[this.indice].subEvent.push({
      startTime: this.dayForm.value.subEvent.startTime,
      endTime: this.dayForm.value.subEvent.endTime,
      title: this.dayForm.value.subEvent.title,
      description: this.dayForm.value.subEvent.description,
      tickets: this.dayForm.value.subEvent.tickets,
      avTickets: this.dayForm.value.subEvent.avTickets,
      price: this.dayForm.value.subEvent.price
    }
    );
    localStorage.setItem('days', JSON.stringify(this.days));
    this.subEvData = new FormData();
    this.subEvData.append('title', this.dayForm.value.title);
    this.subEvData.append('startTime', this.dayForm.value.startTime);
    this.subEvData.append('endTime', this.dayForm.value.endTime);
    this.subEvData.append('description', this.dayForm.value.description);
    this.subEvData.append('tickets', this.dayForm.value.tickets);
    this.subEvData.append('avTickets', this.dayForm.value.avTickets);
    this.subEvData.append('price', this.dayForm.value.price);
    // this.dayForm.title = '';
    // this.dayForm.startTime = '';
    // this.dayForm.endTime = '';
    // this.dayForm.description = '';
    // this.dayForm.tickets = false;
    // this.dayForm.avTickets = '';
    // this.dayForm.price = '';
    this.newschel = false;
    console.log(this.dayForm.value);

  }
  dismissDay() {

  }

  onChange(event: any) {
    this.picture = event.target.files[0];
  }

  editEvent(input: number) {
    this.edForm = true;
    this.commands = false;
    this.editForm = new FormGroup({
      "eventName": new FormControl(this.user.events[input].eventName, [Validators.required]),
      "title": new FormControl(this.user.events[input].title, [Validators.required]),
      "description": new FormControl(this.user.events[input].description, [Validators.required]),
      "adress": new FormControl(this.user.events[input].adress, [Validators.required]),
      "startDate": new FormControl(this.user.events[input].startDate, [Validators.required]),
      "authorFname": new FormControl(this.user.events[input].authorFname),
      "authorLname": new FormControl(this.user.events[input].authorLname),
      "category": new FormControl(this.user.events[input].category),
      "ticketAvailable": new FormControl(this.user.events[input].ticketAvailable, [Validators.required]),
      "price": new FormControl(this.user.events[input].price, [Validators.required]),
      "sevDays": new FormControl(this.user.events[input].sevDays),
      // "endDate": new FormControl(this.user.events[input].endDate),
      // "schedule": new FormArray(this.user.events[input].schedule),
      "picture": new FormControl(this.user.events[input].picture)
    });
    localStorage.setItem('eventToEdit', JSON.stringify(input));
  }

  saveEdit(Form: any) {
    this.eventData = new FormData();
    this.eventData.append('eventName', Form.value.eventName);
    this.eventData.append('title', Form.value.title);
    this.eventData.append('description', Form.value.description);
    this.eventData.append('startDate', Form.value.startDate);
    this.eventData.append('endDate', Form.value.startDate);
    this.eventData.append('adress', Form.value.adress);
    this.eventData.append('authorFname', Form.value.authorFname);
    this.eventData.append('authorLname', Form.value.authorLname);
    this.eventData.append('category', Form.value.category);
    this.eventData.append('ticketAvailable', Form.value.ticketAvailable);
    this.eventData.append('price', Form.value.price);
    //this.formData.append('schedule', JSON.stringify(this.days));
    this.eventData.append('sevDays', this.eventForm.value.sevDays);
    this.eventData.append('picture', this.picture.name);
    this.eventData.append('file', this.picture);
    this.addEventService.updateEvent(this.eventData, localStorage.getItem('userId'), localStorage.getItem('eventToEdit')).subscribe((response: any) => {
        this.showSuccessMessage(
          '',
          response.message,
          'success',
          true,
        )
        setTimeout(() => {
          location.reload();
        }, 2000);
    });
  }
  caEd() {
    this.edForm = false;
    this.commands = true;
  }
  caEv(){
this.edForm = false;
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
  logOut(){
    this.loginService.logOut();
  }
}

