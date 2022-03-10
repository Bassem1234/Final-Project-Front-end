import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ManagmentServiceService } from 'src/app/managment-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private loginService: ManagmentServiceService) { }
  logo = 'assets/images/logo-1.png';
  // Navigation
  opennav: boolean = true;
  opennavBtn() {
    this.opennav = !this.opennav;
  }
  closenavBtn() {
    this.opennav = !this.opennav;
  }
  // Sticky Header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any) {
     if (window.pageYOffset > 110) {
       let element = document.getElementById('sticky-header');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('sticky-header');
        element.classList.remove('sticky'); 
     }
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }

  ngOnInit(): void {
    this.detectHeader();
  }
logOut(){
  this.loginService.logOut();
}
}
