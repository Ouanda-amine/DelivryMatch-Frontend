import { Component } from '@angular/core';
import {ConducteurService} from '../../conducteur.service';
import {Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-addconducteur',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './addconducteur.component.html',
  styleUrl: './addconducteur.component.css'
})
export class AddconducteurComponent {

  constructor(private service : ConducteurService , private router : Router) {
  }

  data ={

  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

AddConducteur(){
    this.service.addConducteur(this.data).subscribe({
      next: (result)=>{
        this.router.navigate(['/conducteur'])

      }
    })
}



}
