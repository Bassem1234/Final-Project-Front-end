import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headerthree',
  templateUrl: './headerthree.component.html',
  styleUrls: ['./headerthree.component.css']
})
export class HeaderthreeComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,@Inject(DOCUMENT) document) { }
  open(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'search-modal' });
  }
  mainlogo = 'assets/images/logo-3.png';
  stickylogo = 'assets/images/logo-1.png';
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
