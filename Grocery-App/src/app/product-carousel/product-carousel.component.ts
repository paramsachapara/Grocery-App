import { Component } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  slides = [
    {img: "http://placehold.it/350x150/777777"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333",},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/777777"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }

}
