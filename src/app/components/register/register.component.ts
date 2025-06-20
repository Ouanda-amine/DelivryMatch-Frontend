import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../register.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {AuthResponse} from '../../model/auth-response';
import {TokenHandlerService} from '../../service/token-handler.service';
import {User} from '../../model/user';

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
export class RegisterComponent  implements OnInit{

  constructor(private service : RegisterService , private  router :Router, private tokenHandler: TokenHandlerService) {


  }

  data: User={
    firstName:"",
    lastName : "",
    email : "",
    password : "",
    role : "ADMIN"
  }

  SignUp() {
    this.service.signUp(this.data).subscribe((result: AuthResponse) => {
       if (result){
         console.log(result)
         this.tokenHandler.setAuthResponse(result);
        // this.router.navigate(['/home'])
       }
      }
    )
  }

  ngOnInit(): void {

  }

}
