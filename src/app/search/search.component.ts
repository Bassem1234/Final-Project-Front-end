import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = JSON.parse(localStorage.getItem('search'));
  eventbox = [
    { cat: 'cat1', img: 'assets/images/events/festival.png', title: 'Les Dunes Electroniques', tag: 'Festival', user: 'Foulen ben Foulen' },
    { cat: 'cat2 ', img: 'assets/images/events/derby.jpg', title: 'Derby de Tunis 2021-2022', tag: 'Sport', user: 'Rosalina D. Willamson' },
    { cat: 'cat3', img: 'assets/images/events/concert.jpg', title: 'Tunis Sur Seine 2022', tag: 'Concerts', user: 'Rosalina D. Willamson' },
    { cat: 'cat4', img: 'assets/images/events/film.jpg', title: 'La Fuite', tag: 'Cinema', user: 'Rosalina D. Willamson' },
    { cat: 'cat5', img: 'assets/images/events/theatre.jpg', title: 'Violence(s)', tag: 'Theatre', user: 'Rosalina D. Willamson' },
    { cat: 'cat6', img: 'assets/images/events/book.jpg', title: 'Foire National Du Livre Tunisien 2022', tag: 'Other', user: 'Rosalina D. Willamson' },
  ];
  showEvent: any = [];
  loading$ = this.loader.loading$;
  constructor(private router: Router, public loader: LoadingService) { }

  ngOnInit(): void {

    for(let i=0; i<this.eventbox.length;i++){
      if (this.eventbox[i].title.toUpperCase().includes(this.search.toUpperCase())) {
        this.showEvent.push(this.eventbox[i]);
      }
    }
  }

  goToEvents(){
    this.router.navigate(['/event-list']);
  }
  addToBasket(){
    if(localStorage.getItem('token') == undefined){
      this.router.navigate(['login']);
    }
  }
}

