import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})

export class AppModule { }
