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

import { FrontModule } from './modules/front/front.module';
import { UserModule } from './modules/front/user/user.module';
import { OrderPlacedComponent } from './modules/front/order-placed/order-placed.component';
import { HomepageGraphicsComponent } from './shared/component/homepage-graphics/homepage-graphics.component';
import { FeaturedProductComponent } from './shared/component/featured-product/featured-product.component';
import { FilteredDisplayComponent } from './shared/component/filtered-display/filtered-display.component';
import { ProductCarouselComponent } from './shared/component/product-carousel/product-carousel.component';
import { CheckoutComponent } from './modules/front/checkout/checkout.component';
import { CatalougeModule } from './modules/front/catalouge/catalouge.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// imports for token intercepotr
import { HTTP_INTERCEPTORS } from  '@angular/common/http';
import { TokenInterceptorInterceptor } from '../app/shared/interceptors/token-interceptor.interceptor';
import { ApiService } from './shared/service/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';






@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    HomepageGraphicsComponent,
    FooterComponent,
    ExploreCategoryComponent,
    FeaturedProductComponent,
    FilteredDisplayComponent,
    HeaderComponent,
    HomeComponent,
   CheckoutComponent,
    OrderPlacedComponent,
    ProductCarouselComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbRatingModule ,
    CatalougeModule,
    FrontModule,
    UserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 1000,
    positionClass: 'toast-bottom-center',
    preventDuplicates: true
    })


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi: true
  },ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
