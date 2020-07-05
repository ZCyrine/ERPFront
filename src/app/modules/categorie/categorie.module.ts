import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ShowallcategorieComponent } from './showallcategorie/showallcategorie.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddcategorieComponent, ShowallcategorieComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategorieModule { }
