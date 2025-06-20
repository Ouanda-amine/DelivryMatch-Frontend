import { Component } from '@angular/core';
import {RegisterService} from '../../register.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatButton,
    MatInput,
    MatFormField
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service : RegisterService , private  router :Router) {


  }

  data={
    firstName:"",
    lastName : "",
    email : "",
    password : "",
    role : "ADMIN"
  }

  SignUp(){
    this.service.signUp(this.data).subscribe({
      next : (result)=>{
        this.router.navigate(['/home'])
      }
    })
  }

}
