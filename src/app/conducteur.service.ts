import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private  http : HttpClient) {  }

  token : string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJaWkBnbWFpbC5jb20iLCJpYXQiOjE3NTAzNDExNTQsImV4cCI6MTc1MDQyNzU1NH0.SWL4X0QZcMQPOyKT5hM_W0HsFJZe9tk31UHB8zKkQSU";
  headers =new HttpHeaders({'Authorization' : `Bearer ${this.token}`});

  getAllConducteurs(): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/AllConducteurs", { headers: this.headers })
  }

  addConduteur(data : any): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/AddConducteur",data , {headers: this.headers })
  }




}
