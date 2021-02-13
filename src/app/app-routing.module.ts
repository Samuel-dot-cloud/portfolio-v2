import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';

const routes: Routes = [
  { path: 'blog', component: BlogViewComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
