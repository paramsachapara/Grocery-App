import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageGraphicsComponent } from './homepage-graphics/homepage-graphics.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { ExploreCategoryComponent } from './explore-category/explore-category.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { FilteredDisplayComponent } from './filtered-display/filtered-display.component';

import { CorouselComponent } from './corousel/corousel.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { NgbRatingModule  } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CatalougeModule } from './front/catalouge/catalouge.module';
import { FrontModule } from './front/front.module';
import { UserModule } from './front/user/user.module';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageGraphicsComponent,
    FooterComponent,
    ExploreCategoryComponent,
    FeaturedProductComponent,
    FilteredDisplayComponent,
    CorouselComponent,
    ProductCarouselComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbRatingModule ,
    CatalougeModule,
    FrontModule,
    UserModule,








  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
