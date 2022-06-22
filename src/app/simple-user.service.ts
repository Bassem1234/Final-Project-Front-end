import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimpleUserService {
baseURL: string = environment.baseURL;

  constructor(private http : HttpClient) { }
  getUser(id:any){  
    return this.http.get(`${this.baseURL}/api/users/${id}`);
  }
  updateUser(id:any,data:any, pass:any){
    return this.http.put(`${this.baseURL}/api/users/${id}/${pass}`,data);
  }
  addEventToBasket(id:any, data:any){
    return this.http.put(`${this.baseURL}/api/users/${id}/`,data);
  }
  validateTicket(id:any, data:any, fName:string, lName: string){
    return this.http.put(`${this.baseURL}/api/users-ticket/${id}/${fName}/${lName}`,data);
  }
  addUser(data:any){
    return this.http.post(`${this.baseURL}/api/users`,data);
  }
  getUsers(){
    return this.http.get(`${this.baseURL}/api/users`);
  }
}
