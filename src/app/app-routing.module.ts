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
  {path: '', loadChildren: './blog/blog.module#BlogModule'},
  { path: 'blog',component: BlogViewComponent },
  {path: 'blog/:id', component: BlogDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
