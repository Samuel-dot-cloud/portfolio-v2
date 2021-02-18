import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';
import { PortfolioGalleryComponent } from './portfolio-gallery/portfolio-gallery.component';
import { AboutComponent } from './shared/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { NewsletterComponent } from './shared/newsletter/newsletter.component';
import { ServicesComponent } from './shared/services/services.component';
import { SkillsComponent } from './shared/skills/skills.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'projects', component: PortfolioGalleryComponent },
  {
    path: 'blog',
    component: BlogViewComponent,
    children: [
      { path: ':id', component: BlogDetailsComponent }
    ]
  }
  // { path: 'newsletter', component: NewsletterComponent },
  // { path: 'contact', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
