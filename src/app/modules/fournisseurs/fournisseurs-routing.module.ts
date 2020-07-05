import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddfournisseurComponent} from './addfournisseur/addfournisseur.component';
import {ShowallfournisseurComponent} from './showallfournisseur/showallfournisseur.component';

const routes: Routes = [{
  path: 'add',
  component: AddfournisseurComponent
},
  {
    path: 'show',
    component: ShowallfournisseurComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseursRoutingModule { }
