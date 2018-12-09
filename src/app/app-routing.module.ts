import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'slider', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
