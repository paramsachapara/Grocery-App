import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
// import { HomepageGraphicsComponent } from './homepage-graphics/homepage-graphics.component';
import { ExploreCategoryComponent } from './shared/component/explore-category/explore-category.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './layout/footer/footer.component';


import { NgbRatingModule, NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './shared/component/home/home.component';
// import { CatalougeModule } from './modules/front/catalouge/catalouge.module';
import { FrontModule } from './modules/front/front.module';
import { UserModule } from './modules/front/user/user.module';
import { OrderPlacedComponent } from './modules/front/order-placed/order-placed.component';
import { HomepageGraphicsComponent } from './shared/component/homepage-graphics/homepage-graphics.component';
import { FeaturedProductComponent } from './shared/component/featured-product/featured-product.component';
import { FilteredDisplayComponent } from './shared/component/filtered-display/filtered-display.component';
import { ProductCarouselComponent } from './shared/component/product-carousel/product-carousel.component';
import { CheckoutComponent } from './modules/front/checkout/checkout.component';
import { CatalougeModule } from './modules/front/catalouge/catalouge.module';







@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    HomepageGraphicsComponent,
    FooterComponent,
    ExploreCategoryComponent,
    FeaturedProductComponent,
    FilteredDisplayComponent,
    // // CorouselComponent,
    HeaderComponent,
    HomeComponent,
   CheckoutComponent,
    OrderPlacedComponent,
    ProductCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbRatingModule ,
    CatalougeModule,
    FrontModule,
    UserModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
