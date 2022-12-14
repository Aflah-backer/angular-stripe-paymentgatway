import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './comman/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './comman/dashboard/dashboard.component';
import { ProductsComponent } from './comman/products/products.component';
import { CheckoutComponent } from './comman/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    CheckoutComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
