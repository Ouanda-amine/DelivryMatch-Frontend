import { Injectable } from '@angular/core';
import {AuthResponse} from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TokenHandlerService {

  constructor() { }

  setAuthResponse(jwt: AuthResponse){
    localStorage.setItem("token", jwt.access_token);
  }

  getAuthResponse(): string | null{
    return localStorage.getItem("token") || null;
  }
}
