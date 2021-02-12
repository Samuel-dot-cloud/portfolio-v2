import { NgModule } from '@angular/core';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogService } from './blog.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BlogViewComponent, BlogDetailsComponent],
  imports: [
    SharedModule
  ],
  providers:[BlogService]
})
export class BlogModule { }
