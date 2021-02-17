import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { TypeDeleteComponent } from '../type-delete/type-delete.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    NewsletterComponent,
    FooterComponent,
    TypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    NewsletterComponent,
    FooterComponent
  ]
})
export class SharedModule { }
