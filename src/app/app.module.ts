import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NavBarModule} from './nav-bar/nav-bar.module';
import { TypeDeleteComponent } from './type-delete/type-delete.component';
import { PortfolioGalleryModule } from './portfolio-gallery/portfolio-gallery.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blog/blog.module';

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
    FontAwesomeModule,
    PortfolioGalleryModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
