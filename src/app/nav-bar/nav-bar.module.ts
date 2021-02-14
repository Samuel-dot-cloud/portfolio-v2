import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavBarComponent } from './nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
    NavDrawerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
