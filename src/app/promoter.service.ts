import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoterService {
  baseURL: string = environment.baseURL;
  constructor(private http : HttpClient) { }
  getPromoter(id:any){  
    return this.http.get(`${this.baseURL}/api/promoters/${id}`);
  }
  updatePromoter(id:any,data:any, pass:any){
    return this.http.put(`${this.baseURL}/api/promoters/${id}/${pass}`,data);
  }
  addPromoter(data:any){
    return this.http.post(`${this.baseURL}/api/promoters`, data);
  }
  getPromoters(){
    return this.http.get(`${this.baseURL}/api/promoters`);
  }
}
