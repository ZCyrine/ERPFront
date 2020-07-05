import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import { AddfournisseurComponent } from './addfournisseur/addfournisseur.component';
import { ShowallfournisseurComponent } from './showallfournisseur/showallfournisseur.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddfournisseurComponent, ShowallfournisseurComponent],
  imports: [
    CommonModule,
    FournisseursRoutingModule,
    ReactiveFormsModule
  ]
})
export class FournisseursModule { }
