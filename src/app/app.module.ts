import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SliderComponent } from './slider/slider.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})

export class AppModule { }
