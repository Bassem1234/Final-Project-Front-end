import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerthree',
  templateUrl: './footerthree.component.html',
  styleUrls: ['./footerthree.component.css']
})
export class FooterthreeComponent implements OnInit {

  constructor() { }
  footerbg = 'assets/images/footer-3.jpg';

  ngOnInit(): void {
  }

}
