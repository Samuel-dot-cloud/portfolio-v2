import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NavBarModule} from './nav-bar/nav-bar.module';
import { TypeDeleteComponent } from './type-delete/type-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
