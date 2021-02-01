import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    NavDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
