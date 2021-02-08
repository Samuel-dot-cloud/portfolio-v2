import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioGalleryComponent } from './portfolio-gallery.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { FilterImagesPipe } from './filter-images.pipe';
import { ProjectImagesService } from '../project-images.service';
import { AppRoutingModule } from '../app-routing.module'; 

@NgModule({
  declarations: [
    PortfolioGalleryComponent,
    PortfolioDetailsComponent,
    FilterImagesPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports: [
    PortfolioGalleryComponent
  ],
  providers: [ProjectImagesService, FilterImagesPipe],
})
export class PortfolioGalleryModule { }
