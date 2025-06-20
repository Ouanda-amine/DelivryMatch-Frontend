import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/user';
import {AuthResponse} from './model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private  http : HttpClient) { }

  signUp(data : User): Observable<AuthResponse>{
    return this.http.post<AuthResponse>("http://localhost:8080/api/v1/auth/register", data);
  }


}
