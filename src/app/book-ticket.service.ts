import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {
  //baseURL: string = environment.baseURL;
  baseURL = 'http://localhost:4000';
  constructor(private http : HttpClient) { }
  bookTicket(ticketData:any, id:any){
    return this.http.put(`${this.baseURL}/api/users/6206c55c2204a2d68b8c909a`, ticketData, {
      headers : new HttpHeaders ({
Authorization: localStorage.getItem('token')
      })
    });
  }
}
