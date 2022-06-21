import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { observable  } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagmentServiceService {
//baseURL: string = environment.baseURL;
baseURL = 'https://tseker-back.herokuapp.com:8080';
  constructor(private http: HttpClient, private router: Router) { }

  login(userData: any){
    return this.http.post(`${this.baseURL}/api/login`, userData);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
   }
   getToken(){
     return localStorage.getItem('token');
   }
   logOut(){
     localStorage.removeItem('token');
this.router.navigate(['/login']);
   }
}
