import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
  path: 'dashboard',
  component: DefaultComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'categories',
    loadChildren : './modules/categorie/categorie.module#CategorieModule'
  },
    {
      path: 'clients',
      loadChildren: './modules/clients/clients.module#ClientsModule'
    },
    {
      path: 'fournisseurs',
      loadChildren: './modules/fournisseurs/fournisseurs.module#FournisseursModule'
    },
    {
      path: 'produits',
      loadChildren: './modules/produits/produits.module#ProduitsModule'
    },
    {
      path: 'commandes',
      loadChildren: './modules/commandes/commandes.module#CommandesModule'
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
