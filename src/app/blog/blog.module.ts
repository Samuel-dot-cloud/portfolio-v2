import { NgModule } from '@angular/core';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogService } from './blog.service';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'blog/:id', component: BlogDetailsComponent}
]

@NgModule({
  declarations: [BlogViewComponent, BlogDetailsComponent],
  imports: [
    SharedModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BlogViewComponent,
    BlogDetailsComponent
  ],
  providers:[BlogService]
})
export class BlogModule { }
