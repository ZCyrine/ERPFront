import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddcommandeComponent} from './addcommande/addcommande.component';
import {ShowallcommandeComponent} from './showallcommande/showallcommande.component';

const routes: Routes = [
  {
    path: 'show',
    component: ShowallcommandeComponent
  },{
  path: 'add',
    component: AddcommandeComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
