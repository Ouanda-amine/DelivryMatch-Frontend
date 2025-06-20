import { Component } from '@angular/core';
import {TrajetService} from '../../trajet.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatOption, MatRipple} from '@angular/material/core';
import {MatCard, MatCardSubtitle} from '@angular/material/card';
import {MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-addtrajet',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatIcon,
    MatInput,
    MatRipple,
    MatCardSubtitle,
    MatSelect,
    MatOption,
    MatButton,
    MatLabel,
    MatHint,
    MatCard
  ],
  templateUrl: './addtrajet.component.html',
  styleUrl: './addtrajet.component.css'
})
export class AddtrajetComponent {
  constructor(private service : TrajetService , private router : Router) {

  }

  data ={
    lieuDepart: "",
    etapesIntermediaire: "",
    destinationFinal: "",
    dimensionAccepte: "",
    typeMarchandise: "",
    capacite: "",
    conducteurId: ""
  }

  addtrajet() {
    this.service.addTrajet(this.data).subscribe({
      next: (result) => {

        this.router.navigate(['/trajet'])

      }
    })

  }

}
