import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ShowallproduitComponent } from './showallproduit/showallproduit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddproduitComponent, ShowallproduitComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProduitsModule { }
