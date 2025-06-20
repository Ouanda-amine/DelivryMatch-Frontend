import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenHandlerService} from './service/token-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  token: string | null = "";

  constructor(private http : HttpClient, private tokenHandler: TokenHandlerService) {

  }

  setUpHeaders(): any{
    this.token = this.tokenHandler.getAuthResponse();
    return new HttpHeaders({'Authorization': `Bearer ${this.token}`});
  }


  getAllTrajets(): Observable<any> {
    console.log(this.setUpHeaders())
    return this.http.get("http://localhost:8080/api/v1/AllTrajets", { headers: this.setUpHeaders() })
  }

  addTrajet(data : any): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/AddTrajet",data , {headers: this.setUpHeaders() })
  }
}
