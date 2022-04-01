import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopOffersComponent } from "./top-offers/top-offers.component";
import { GroceryComponent } from "./grocery/grocery.component";
import { CategoriesDetailsComponent } from "./categories-details/categories-details.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { FullComponent } from "./layouts/full/full.component";
import { ViewPageComponent } from "./view-page/view-page.component";
import { CartComponent } from "./cart/cart.component";
import { ProductsComponent } from "./products/products.component";
import { ViewComponent } from "./view/view.component";
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [

  { path: '', component: FullComponent },

  { path: 'categories/:id', component: CategoriesDetailsComponent, },
  { path: 'topOffers', component: TopOffersComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'fashion', component: FashionComponent},
  { path: 'electronics', component: ElectronicsComponent},
  {path: 'homeItems', component: HomeItemsComponent},
  {path: 'appliances', component: AppliancesComponent},
  {path: 'travel', component: TravelComponent},



  { path: 'products', component: ProductsComponent },
  { path: 'view', component: ViewComponent },
  { path: 'product/:id', component: ViewComponent },
  // {path: 'product/:id', component: ViewPageComponent},


  { path: 'cart', component: CartComponent },


  { path: '**', component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings = [
  TopOffersComponent,
  GroceryComponent,
  CategoriesDetailsComponent,
  ProductsComponent,
  ErrorPageComponent,
  FullComponent
];

