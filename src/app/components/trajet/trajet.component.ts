import {Component, OnInit} from '@angular/core';
import {TrajetService} from '../../trajet.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';
import {MatCardContent, MatCardFooter, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle} from '@angular/material/button-toggle';

interface trajjet{
  "id": number,
  "lieuDepart": string,
  "etapesIntermediaire": string,
  "destinationFinal": string,
  "dimensionAccepte": string,
  "typeMarchandise": string,
  "capacite": string,
  "conducteurId": number
}

@Component({
  selector: 'app-trajet',
  standalone: true,
  imports: [
    NgForOf,
    MatToolbar,
    MatButton,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatChipSet,
    MatChip,
    MatCardFooter,
    NgForOf,
    RouterLink,
    MatToolbarRow,
    MatInput,
    MatIconButton,
    MatIcon,
    MatIcon,
    MatFabButton,
    MatButtonToggle
  ],
  templateUrl: './trajet.component.html',
  styleUrl: './trajet.component.css'
})
export class TrajetComponent implements OnInit{

  array : trajjet[] = [];
  filter = [...this.array]
  constructor(private  service : TrajetService) {

  }

  ngOnInit(): void {
    this.service.getAllTrajets().subscribe(data=>{

        this.array=data;
        this.filter=[...this.array]
      }
    )
  }

  filtrer(search : string){
    this.filter=this.array.filter((trajet)=>
      trajet.lieuDepart.toLowerCase().includes(search.toLowerCase()) ||
        trajet.destinationFinal.toLowerCase().includes(search.toLowerCase())

    )
  }


}
