import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GhostTableComponent } from './ghost-table/ghost-table.component';



@NgModule({
  declarations: [
    NewsletterComponent,
    FooterComponent,
    GhostTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NewsletterComponent,
    FooterComponent,
    GhostTableComponent
  ]
})
export class SharedModule { }
