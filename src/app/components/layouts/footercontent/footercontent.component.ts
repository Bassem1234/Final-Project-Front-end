import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercontent',
  templateUrl: './footercontent.component.html',
  styleUrls: ['./footercontent.component.css']
})
export class FootercontentComponent implements OnInit {

  constructor() { }
  logo = 'assets/images/logo-2.png';

  ngOnInit(): void {
  }

}
