import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //baseURL: string = environment.baseURL;
  baseURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.baseURL}/api/email`, data);
  }
}
