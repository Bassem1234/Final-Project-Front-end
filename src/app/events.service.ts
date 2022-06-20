import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  //baseURL: string = environment.baseURL;
  baseURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  getEvents(){  
    return this.http.get(`${this.baseURL}/api/events/`);
  }
}
