import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {CategorieModule} from '../../modules/categorie/categorie.module';
import {ClientsModule} from '../../modules/clients/clients.module';
import {CommandesModule} from '../../modules/commandes/commandes.module';
import {FournisseursModule} from '../../modules/fournisseurs/fournisseurs.module';
import {ProduitsModule} from '../../modules/produits/produits.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    CategorieModule,
    ClientsModule,
    CommandesModule,
    FournisseursModule,
    ProduitsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
