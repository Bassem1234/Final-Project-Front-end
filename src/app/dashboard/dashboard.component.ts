import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { PromoterService } from '../promoter.service';
import { SimpleUserService } from '../simple-user.service';
import { AddEventService } from '../add-event.service';
import { EventsService } from '../events.service';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2'
import { ManagmentServiceService } from '../managment-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admin = JSON.parse(localStorage.getItem('user'));
  eventChart: any;
  userChart: any;
  promoterChart: any;
  promoters: any;
  promo: any;
  events: any;
  constructor(private elementRef: ElementRef, private adminService: AdminService, private promoterService: PromoterService, private userService: SimpleUserService,
    private addEventService: AddEventService, private eventService: EventsService, private loginService: ManagmentServiceService) {
    this.promoterService.getPromoters().subscribe((response: any) => {
      this.promoters = response;
    });
    this.eventService.getEvents().subscribe((response: any) => {
      this.events = response;
    });
  }
  pass = false;
  detailForm: any;
  userForm: any;
  promoterForm: any;
  eventForm: any;
  edit = false;
  details = true;
  prom = false;
  usr = false;
  evt = false;
  stat = false;
  msg = false;
  out = false;
  done = '';
  promDone = '';
  usDone = '';
  formData: any;
  picture: any;
  eventData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  userData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  promData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ngOnInit(): void {
    this.detailForm = new FormGroup({
      fName: new FormControl(this.admin.fName, [Validators.required]),
      lName: new FormControl(this.admin.lName, [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl(this.admin.email, [Validators.required]),
      adress: new FormControl(this.admin.adress, [Validators.required]),
      phone: new FormControl(this.admin.phone, [Validators.required])
    });
    this.userForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
    this.promoterForm = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
    this.eventForm = new FormGroup({
      eventName: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      category: new FormControl('Category'),
      ticketAvailable: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      promoter: new FormControl('Promoter')
    })
  }
  ngAfterViewInit(): void {
    this.eventChart = this.elementRef.nativeElement.querySelector('#event');
    this.userChart = this.elementRef.nativeElement.querySelector('#user');
    this.promoterChart = this.elementRef.nativeElement.querySelector('#promoter');
    Chart.register(...registerables);
    this.loadEvent();
    this.loadUser();
    this.loadPromoter();
  }
  loadEvent() {
    let month = '';
    this.eventService.getEvents().subscribe((response: any) => {
      for (let i = 0; i < 12; i++) {
        month = (i + 1).toString();
        if (month.length == 1) {
          month = '0' + month;
        }
        for (let j = 0; j < response.length; j++) {
          if (response[j].createdAt.substr(5, 2).includes(month)) {
            this.eventData[i] += 1;
          }
        }
      }
    });
    new Chart(this.eventChart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.eventData,
            label: "new events/month",
            borderColor: 'rgb(243, 14, 117)',
            backgroundColor: 'rgb(243, 14, 117)',

          }
        ],
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      },
      options: {
        color: 'black'
      }
    });
  }

  loadUser() {
    this.userService.getUsers().subscribe((response: any) => {
      let month = '';
      for (let i = 0; i < 12; i++) {
        month = (i + 1).toString();
        if (month.length == 1) {
          month = '0' + month;
        }
        for (let j = 0; j < response.length; j++) {
          if (response[j].createdAt.substr(5, 2).includes(month)) {
            this.userData[i] += 1;
          }
        }
      }
    });
    new Chart(this.userChart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.userData,
            label: "new users/month",
            borderColor: 'white',
            backgroundColor: 'rgb(243, 14, 117)',
            hoverBorderWidth: 2
          }
        ],
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      },
      options: {
        color: 'white'
      }
    });
  }
  loadPromoter() {
    let month = '';
    this.promoterService.getPromoters().subscribe((response: any) => {
      for (let i = 0; i < 12; i++) {
        month = (i + 1).toString();
        if (month.length == 1) {
          month = '0' + month;
        }
        for (let j = 0; j < response.length; j++) {
          if (response[j].createdAt.substr(5, 2).includes(month)) {
            this.promData[i] += 1;
          }
        }
      }
    })
    new Chart(this.promoterChart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.promData,
            label: "new promoters/month",
            borderColor: 'green',
            backgroundColor: 'green',
            hoverBorderWidth: 2
          }
        ],
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      },
      options: {
        color: 'black'
      }
    });
  }
  editInfo() {
    this.edit = true;
  }
  dismissAdmin() {
    this.edit = false;
  }
  saveInfoEdit() {
    this.adminService.updateAdmin(this.admin._id, this.detailForm.value).subscribe((response: any) => {
      this.admin.fName = this.detailForm.value.fName;
      this.admin.lName = this.detailForm.value.lName;
      this.admin.adress = this.detailForm.value.adress;
      this.admin.email = this.detailForm.value.email;
      this.admin.phone = this.detailForm.value.phone;
      this.admin.password = this.detailForm.value.password;
      localStorage.setItem('user', JSON.stringify(this.admin));
      
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

  }
  dispDetails() {
    this.details = true;
    this.prom = false;
    this.evt = false;
    this.msg = false;
    this.usr = false;
    this.stat = false;
    document.getElementById('stats').style.display = 'none';
  }
  dispUser() {
    this.details = false;
    this.prom = false;
    this.evt = false;
    this.msg = false;
    this.usr = true;
    this.stat = false;
    document.getElementById('stats').style.display = 'none';
  }
  dispProm() {
    this.details = false;
    this.prom = true;
    this.evt = false;
    this.msg = false;
    this.usr = false;
    this.stat = false;
    document.getElementById('stats').style.display = 'none';
  }
  dispStat() {
    this.details = false;
    this.prom = false;
    this.evt = false;
    this.msg = false;
    this.usr = false;
    this.stat = true;
    document.getElementById('stats').style.display = 'block';
  }
  dispMsg() {
    this.details = false;
    this.prom = false;
    this.evt = false;
    this.msg = true;
    this.usr = false;
    this.stat = false;
    document.getElementById('stats').style.display = 'none';
    this.adminService.reinMsg(this.admin._id).subscribe((response: any) => {
      setTimeout(() => {
        this.admin.newMsg = 0;
        localStorage.setItem('user', JSON.stringify(this.admin));
      }, 2000);
    });
  }
  dispEvent() {
    this.details = false;
    this.prom = false;
    this.evt = true;
    this.msg = false;
    this.usr = false;
    this.stat = false;
    document.getElementById('stats').style.display = 'none';
  }
  savePromoter() {
    this.promoterService.addPromoter(this.promoterForm.value).subscribe((response: any) => {
      if(response.message == 'Promoter added successfully'){
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
    })
  }
  saveUser() {
    this.userService.addUser(this.userForm.value).subscribe((response: any) => {
      if(response.message == 'User added successfully'){
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
  saveEvent() {
    const Name = this.eventForm.value.promoter.split(' ');
    for (let i = 0; i < this.promoters.length; i++) {
      if (this.promoters[i].fName == Name[0] && this.promoters[i].lName == Name[1]) {
        this.promo = this.promoters[i];
      }
    }
    this.formData = new FormData();
    this.formData.append('eventName', this.eventForm.value.eventName);
    this.formData.append('title', this.eventForm.value.title);
    this.formData.append('description', this.eventForm.value.description);
    this.formData.append('startDate', this.eventForm.value.startDate);
    this.formData.append('adress', this.eventForm.value.adress);
    this.formData.append('authorFname', Name[0]);
    this.formData.append('authorLname', Name[1]);
    this.formData.append('category', this.eventForm.value.category);
    this.formData.append('ticketAvailable', this.eventForm.value.ticketAvailable);
    this.formData.append('price', this.eventForm.value.price);
    this.formData.append('picture', this.picture.name);
    this.formData.append('file', this.picture);
    this.addEventService.addEvent(this.formData, this.promo._id).subscribe((response: any) => {
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
  }
  onChange(event: any) {
    this.picture = event.target.files[0];
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
  hidePass(){
    this.pass = !this.pass;
  }
  showPass(){
    this.pass = !this.pass;
  }
  logOut(){
    this.loginService.logOut();
  }
}
