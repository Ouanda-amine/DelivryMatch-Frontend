import { Component } from '@angular/core';
import {LoginService} from '../../login.service';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Abonne} from '../../model/abonne';
import {TokenHandlerService} from '../../service/token-handler.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service : LoginService , private tokenhandler : TokenHandlerService) {
  }



  Infos : Abonne = {
    email : "",
    password: ""
  }

  LogIn(){
    this.service.LogIn(this.Infos).subscribe()
  }

}
