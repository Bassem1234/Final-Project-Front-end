import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
head = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != undefined){
      this.head = true;
    }
  }

}
