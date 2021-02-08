import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectImagesService } from '../project-images.service';

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnChanges {
  images?: any[];
  filterBy: string = 'all';
  allImages: any[] = [];

  constructor(private imageService: ProjectImagesService) {
    this.allImages = this.imageService.getImages();
   }

  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

}
