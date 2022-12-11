import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './comman/dashboard/dashboard.component';
import { ProductsComponent } from './comman/products/products.component';

const routes: Routes = [
  {
    path: "", component:ProductsComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
