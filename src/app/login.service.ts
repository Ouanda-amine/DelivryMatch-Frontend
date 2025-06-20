import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Abonne} from './model/abonne';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }



  LogIn(UserInfos: Abonne) : Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/auth/authenticate", UserInfos)
  }
}
