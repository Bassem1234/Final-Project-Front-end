import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  //baseURL: string = environment.baseURL;
  baseURL = 'https://tseker-back.herokuapp.com:4000';
  updateAdmin(id:any, data:any){
    return this.http.put(`${this.baseURL}/api/admins/${id}`, data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
  getOneAdmin(id:any){
    return this.http.get(`${this.baseURL}/api/admins/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
  adminMessage(id:any, data:any){
    return this.http.put(`${this.baseURL}/api/message/${id}`,data, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
  reinMsg(id:any){
    return this.http.put(`${this.baseURL}/api/rein-message/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
  getAdminList(){
    return this.http.get(`${this.baseURL}/api/admins`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token')
      })
    });
  }
}
