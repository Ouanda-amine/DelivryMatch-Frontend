import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  user = {
    email: 'amine',
    password: 'a123'
  }

  LogIn(UserInfos: any) : Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/auth/authenticate", this.user)
  }
}
