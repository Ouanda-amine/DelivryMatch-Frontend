import {Component, OnInit} from '@angular/core';
import {ConducteurService} from '../../conducteur.service';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatChipSet} from '@angular/material/chips';
import {NgForOf} from '@angular/common';
interface Conducteur{
  "id": number,
  "firstName": string,
  "lastName": string,
  "email": string,
  "password": string
}
@Component({
  selector: 'app-conducteur',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    NgForOf,
    MatCardTitle

  ],
  templateUrl: './conducteur.component.html',
  styleUrl: './conducteur.component.css'
})
export class ConducteurComponent implements OnInit{

  ConducteurArray : Conducteur[]=[];

  constructor(private service : ConducteurService) {
  }

  ngOnInit(): void {
    this.service.getAllConducteurs().subscribe(data=>{
      this.ConducteurArray = data
    })
  }





}
