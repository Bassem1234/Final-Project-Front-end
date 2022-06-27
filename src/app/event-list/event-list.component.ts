import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
head = false;
loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != undefined){
      this.head = true;
    }
  }

}
