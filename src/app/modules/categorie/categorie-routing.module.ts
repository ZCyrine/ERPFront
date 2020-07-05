import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddcategorieComponent} from './addcategorie/addcategorie.component';
import {ShowallcategorieComponent} from './showallcategorie/showallcategorie.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddcategorieComponent
  },
  {
    path: 'show',
    component: ShowallcategorieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
