import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddclientComponent} from './addclient/addclient.component';
import {ShowallclientComponent} from './showallclient/showallclient.component';


const routes: Routes = [{
  path: 'add',
  component: AddclientComponent
},
  {
    path: 'show',
    component: ShowallclientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
