import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AddclientComponent } from './addclient/addclient.component';
import { ShowallclientComponent } from './showallclient/showallclient.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddclientComponent, ShowallclientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
