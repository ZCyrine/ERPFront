import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesRoutingModule } from './commandes-routing.module';
import { AddcommandeComponent } from './addcommande/addcommande.component';
import { ShowallcommandeComponent } from './showallcommande/showallcommande.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatSelectModule} from "@angular/material";

@NgModule({
  declarations: [AddcommandeComponent, ShowallcommandeComponent],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class CommandesModule { }
