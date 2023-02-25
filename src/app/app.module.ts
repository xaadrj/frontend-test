import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FirstCtaComponent } from './first-cta/first-cta.component';
import { SecondCtaComponent } from './second-cta/second-cta.component';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ThirdCtaComponent } from './third-cta/third-cta.component';
import { FourthCtaComponent } from './fourth-cta/fourth-cta.component';
import { FifthCtaComponent } from './fifth-cta/fifth-cta.component';
import { SixthCtaComponent } from './sixth-cta/sixth-cta.component';
import { SeventhCtaComponent } from './seventh-cta/seventh-cta.component';
import { EigthCtaComponent } from './eigth-cta/eigth-cta.component';
import { NinethCtaComponent } from './nineth-cta/nineth-cta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FirstCtaComponent,
    SecondCtaComponent,
    ThirdCtaComponent,
    FourthCtaComponent,
    FifthCtaComponent,
    SixthCtaComponent,
    SeventhCtaComponent,
    EigthCtaComponent,
    NinethCtaComponent,
    FooterComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
