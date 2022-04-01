import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { FullComponent } from './layouts/full/full.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import {myRoutings} from './app-routing.module';
import { ViewPageComponent } from './view-page/view-page.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { TravelComponent } from './travel/travel.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    HomeCategoriesComponent,
    BannerComponent,
    ProductsComponent,
    ViewComponent,
    DropdownComponent,

    myRoutings,
    CategoriesDetailsComponent,
    FullComponent,
    ErrorPageComponent,
    ViewPageComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    MobilesComponent,
    FashionComponent,
    ElectronicsComponent,
    HomeItemsComponent,
    AppliancesComponent,
    TravelComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
