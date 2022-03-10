import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  addEvent(data: any, id: any) {
    return this.http.put(`${this.baseURL}/api/promoters-event/${id}`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
  updateEvent(data:any, id:any, indice:any){
    return this.http.put(`${this.baseURL}/api/edit-event/${id}/${indice}`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
}
