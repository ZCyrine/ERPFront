import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddproduitComponent} from './addproduit/addproduit.component';
import {ShowallproduitComponent} from './showallproduit/showallproduit.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddproduitComponent
  },
  {
    path: 'show',
    component: ShowallproduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
