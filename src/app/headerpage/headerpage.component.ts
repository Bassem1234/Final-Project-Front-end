import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.css']
})
export class HeaderpageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, public router: Router) { }
  logo = 'assets/images/logo-1.png';
  test = false;
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
  onWindowScroll(e) {
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
}
