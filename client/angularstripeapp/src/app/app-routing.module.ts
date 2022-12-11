import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './comman/checkout/checkout.component';
import { DashboardComponent } from './comman/dashboard/dashboard.component';
import { ProductsComponent } from './comman/products/products.component';
// import { ProductsComponent } from './comman/products/products.component';

const routes: Routes = [
  {
    path: "", component:ProductsComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"checkout", component:CheckoutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
