import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'front-end-test';
  slides = [
    { img: ['assets/images/centrarus-sm.png', 'Centarus Mall'] },
    { img: ['assets/images/gigamall-sm.png', 'Giga Mall'] },
    { img: ['assets/images/newplace-sm.png', 'Amazon Mall'] },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,   nextArrow: "<div class='slick-next'><img src='/assets/icons/next.svg'></img></div>",
  prevArrow: "<div class='slick-prev'><img src='/assets/icons/prev.svg'></img></div>", };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}
