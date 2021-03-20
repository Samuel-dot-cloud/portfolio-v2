import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-gallery/portfolio-details/portfolio-details.component';
import { GhostTableComponent } from './shared/ghost-table/ghost-table.component';

const routes: Routes = [
  { path: '', component: MainPortfolioComponent },
  { path: '', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'blog/:id', component: BlogDetailsComponent },
  {path: 'projects/:id', component: PortfolioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
