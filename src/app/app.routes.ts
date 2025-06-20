import { Routes } from '@angular/router';
import {TrajetComponent} from './components/trajet/trajet.component';
import {AddtrajetComponent} from './components/addtrajet/addtrajet.component';

export const routes: Routes = [
  {path : '' , component : TrajetComponent},
  {path : 'trajet' , component : TrajetComponent},
  {path : 'addtrajet' , component : AddtrajetComponent}
];
