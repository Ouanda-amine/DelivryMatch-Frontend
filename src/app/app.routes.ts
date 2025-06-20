import { Routes } from '@angular/router';
import {TrajetComponent} from './components/trajet/trajet.component';
import {AddtrajetComponent} from './components/addtrajet/addtrajet.component';
import {ConducteurComponent} from './components/conducteur/conducteur.component';
import {RegisterComponent} from './components/register/register.component';

export const routes: Routes = [
  {path : '' , component : TrajetComponent},
  {path : 'trajet' , component : TrajetComponent},
  {path : 'addtrajet' , component : AddtrajetComponent},
  {path : 'conducteur' , component : ConducteurComponent},
  {path : 'register' , component : RegisterComponent},

];
